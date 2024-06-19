import css from "./Form.module.css";
import InfoPanel from "../InfoPanel/InfoPanel";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

interface GeoLocationInfoInterface {
  ip: string;
  city: string;
  province: string;
  zipcode: string;
  isp: string;
  timezoneOffset: number;
}

type Status = "idle" | "pending" | "resolved" | "rejected";

const Form = ({ getLatLng }: { getLatLng: Function }) => {
  const [geoLocationInfo, setGeoLocationInfo] =
    useState<GeoLocationInfoInterface>({} as GeoLocationInfoInterface);
  const [status, setStatus] = useState<Status>("idle");
  const [inputVal, setInputVal] = useState("");

  const apiURL =
    "https://api.ipgeolocation.io/ipgeo?apiKey=727ec8e46b904b54bfd09c42d165347e";

  const notify = (errMsg: string) => {
    toast.error(errMsg, {
      position: "top-right",
      theme: "colored",
    });
  };

  const getIpAddress = async () => {
    setStatus("pending");
    try {
      const response = await fetch(apiURL);

      const data = await response.json();
      setGeoLocationInfo({
        ip: data.ip,
        city: data.city,
        province: data["state_prov"],
        zipcode: data.zipcode,
        isp: data.isp,
        timezoneOffset: data["time_zone"].offset,
      });
      getLatLng([data.latitude, data.longitude]);
      setStatus("resolved");
      return data;
    } catch (err) {
      const error = err as Error
      setStatus("rejected");
      getLatLng([0, 0]);
      console.log(error.message);
      notify(
        "Unable to fetch data. Please disable your ad blocker and try again."
      );
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("pending");
    try {
      const response = await fetch(`${apiURL}&ip=${inputVal}`);
      console.log(response);
      const data = await response.json();
      setGeoLocationInfo({
        ip: data.ip,
        city: data.city,
        province: data["state_prov"],
        zipcode: data.zipcode,
        isp: data.isp,
        timezoneOffset: data["time_zone"].offset,
      });
      getLatLng([data.latitude, data.longitude]);
      setStatus("resolved");
      setInputVal("");
      console.log(data);
      return data;
    } catch (err) {
      const error = err as Error
      setStatus("rejected");
      getLatLng([0, 0]);
      console.log(error.message);
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
          placeholder="Search for any IP address or domain"
          required
        />
        <button type="submit"></button>
      </form>
      <InfoPanel locationInfo={geoLocationInfo} status={status} />
      <ToastContainer />
    </section>
  );
};

Form.propTypes = {
  getLatLng: PropTypes.func.isRequired,
};

export default Form;
