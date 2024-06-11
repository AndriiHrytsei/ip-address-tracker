import css from "./Form.module.css";
import InfoPanel from "../InfoPanel/InfoPanel";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// "Unable to fetch data. Please disable your ad blocker and try again.",

const Form = ({ getLatLng }) => {
  const [geoLocationInfo, setGeoLocationInfo] = useState(null);
  const [status, setStatus] = useState("idle");
  const [inputVal, setInputVal] = useState("");

  const apiURL =
    "https://api.ipgeolocation.io/ipgeo?apiKey=727ec8e46b904b54bfd09c42d165347e";

  const notify = (errMsg) => {
    toast.error(errMsg, {
      position: "top-right",
      theme: "colored",
    });
  };

  const getIpAddress = async () => {
    setStatus("pending");
    try {
      const response = await fetch(apiURL);
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
      getLatLng([data.latitude, data.longitude]);
      setStatus("resolved");
      return data;
    } catch (err) {
      setStatus("rejected");
      getLatLng([0, 0]);
      console.log(err.message);
      notify("Unable to fetch data. Please disable your ad blocker and try again.");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus("pending");
    try {
      const response = await fetch(`${apiURL}&ip=${inputVal}`);
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
      getLatLng([data.latitude, data.longitude]);
      setStatus("resolved");
      setInputVal("");
      return data;
    } catch (err) {
      setStatus("rejected");
      getLatLng([0, 0]);
      console.log(err.message);
      notify("Invalid IP address.");
    }
  };

  useEffect(() => {
    getIpAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={css.formBox}>
      <h1 className={css.formHeading}>IP Address Tracker</h1>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <input
          type="text"
          className={css.ipField}
          value={inputVal}
          onChange={(e) => setInputVal(e.currentTarget.value)}
          required
        />
        <button type="submit"></button>
      </form>
      <InfoPanel locationInfo={geoLocationInfo} status={status} />
      <ToastContainer />
    </section>
  );
};

export default Form;
