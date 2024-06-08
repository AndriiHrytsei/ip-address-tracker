import css from "./Form.module.css";
import InfoPanel from "../InfoPanel/InfoPanel";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [geoLocationInfo, setGeoLocationInfo] = useState(null);
  const [status, setStatus] = useState("idle");

  const apiURL =
    "https://api.ipgeolocation.io/ipgeo?apiKey=727ec8e46b904b54bfd09c42d165347e";

  const notify = () => {
    toast.error("Unable to fetch data. Please disable your ad blocker and try again.", {
      position: "top-right",
      theme: "colored"
    })
  }

  const getIpAddress = async (url) => {
    setStatus("pending");
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.status);  
      }
      const data = await response.json();
      setGeoLocationInfo({
        ip: data.ip,
        city: data.city,
        province: data["state_prov"],
        zipode: data.zipcode,
        latLng: [data.latitude, data.longitude],
        isp: data.isp,
        timezoneOffset: data["time_zone"].offset,
      });
      setStatus("resolved");
      return data;
    } catch (err) {
      setStatus("rejected");
      console.log(err.message);
      notify()
    }
  };

  useEffect(() => {
    getIpAddress(apiURL);
  }, []);

  return (
    <section className={css.formBox}>
      <h1 className={css.formHeading}>IP Address Tracker</h1>
      <form className={css.form}>
        <input type="text" className={css.ipField} required />
        <button type="submit"></button>
      </form>
      <InfoPanel locationInfo={geoLocationInfo} status={status} />
      <ToastContainer/>
    </section>
  );
};

export default Form;
