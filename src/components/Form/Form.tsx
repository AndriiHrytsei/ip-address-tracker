import css from "./Form.module.css";
import InfoPanel from "../InfoPanel/InfoPanel";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GeoLocationInfoInterface from "../../types/geolocation"; 
import Status from "../../types/status";

const Form = ({ getLatLng }: { getLatLng: Function }) => {
  const [geoLocationInfo, setGeoLocationInfo] =
    useState<GeoLocationInfoInterface>({} as GeoLocationInfoInterface);
  const [status, setStatus] = useState<Status>("idle");
  const [inputVal, setInputVal] = useState<string>("");

  console.log(import.meta.env.VITE_API_KEY);

  const apiURL: string =
    `https://api.ipgeolocation.io/ipgeo?apiKey=${import.meta.env.VITE_API_KEY}`;

  const notify = (errMsg: string): void => {
    toast.error(errMsg, {
      position: "top-right",
      theme: "colored",
    });
  };

  const getIpAddress = async (): Promise<GeoLocationInfoInterface | void> => {
    setStatus("pending");
    try {
      const response: Response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
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
      const error = err as Error;
      setStatus("rejected");
      getLatLng([0, 0]);
      console.error(error.message);
      notify(
        "Unable to fetch data. Please disable your ad blocker and try again."
      );
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<GeoLocationInfoInterface | void> => {
    e.preventDefault();
    setStatus("pending");
    try {
      const response: Response = await fetch(`${apiURL}&ip=${inputVal}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
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
      const error = err as Error;
      setStatus("rejected");
      getLatLng([0, 0]);
      console.log(error.message);
      notify("Invalid IP address.");
    }
  };

  useEffect(() => {
    getIpAddress();
  }, []);

  return (
    <section className={css.formBox}>
      <h1 className={css.formHeading}>IP Address Tracker</h1>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <input
          type="text"
          className={css.ipField}
          value={inputVal}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputVal(e.currentTarget.value)}
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

export default Form;
