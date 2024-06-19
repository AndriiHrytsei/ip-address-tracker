import css from "./InfoPanel.module.css";
import { ThreeDots } from "react-loader-spinner";

interface LocationInfoInterface {
  ip: string;
  province: string;
  city: string;
  zipcode: string;
  timezoneOffset: number;
  isp: string;
}

type Status = "idle" | "pending" | "resolved" | "rejected";

const InfoPanel = ({
  locationInfo,
  status,
}: {
  locationInfo: LocationInfoInterface;
  status: Status;
}) => {
  const geoData = {
    ip:
      status === "resolved" ? (
        <p>{locationInfo.ip}</p>
      ) : (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#0066b2"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      ),
    location:
      status === "resolved" ? (
        <p>
          {locationInfo.province}, {locationInfo.city} {locationInfo.zipcode}
        </p>
      ) : (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#0066b2"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      ),
    timezone:
      status === "resolved" ? (
        <p>UTC {locationInfo.timezoneOffset}</p>
      ) : (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#0066b2"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      ),
    isp:
      status === "resolved" ? (
        <p>{locationInfo.isp}</p>
      ) : (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#0066b2"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      ),
  };

  return (
    <ul className={css.infoPanelList}>
      <li className={css.listItem}>
        <h2>IP ADDRESS</h2>
        {geoData.ip}
      </li>
      <li className={css.listItem}>
        <h2>LOCATION</h2>
        {geoData.location}
      </li>
      <li className={css.listItem}>
        <h2>TIMEZONE</h2>
        {geoData.timezone}
      </li>
      <li className={css.listItem}>
        <h2>ISP</h2>
        {geoData.isp}
      </li>
    </ul>
  );
};

export default InfoPanel;
