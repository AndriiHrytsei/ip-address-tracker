import css from "./InfoPanel.module.css";
import PropTypes from "prop-types";
import { ThreeDots } from "react-loader-spinner";

const InfoPanel = ({ locationInfo, status }) => {
  const geoData = {
    ip:
      status === "resolved" ? (
        locationInfo.ip
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
        `${locationInfo.province}, ${locationInfo.city} ${locationInfo.zipode}`
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
        `UTC ${locationInfo.timezoneOffset}`
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
        locationInfo.isp
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
        <p>{geoData.ip}</p>
      </li>
      <li className={css.listItem}>
        <h2>LOCATION</h2>
        <p>{geoData.location}</p>
      </li>
      <li className={css.listItem}>
        <h2>TIMEZONE</h2>
        <p>{geoData.timezone}</p>
      </li>
      <li className={css.listItem}>
        <h2>ISP</h2>
        <p>{geoData.isp}</p>
      </li>
    </ul>
  );
};

InfoPanel.propTypes = {
  locationInfo: PropTypes.object.isRequired,
  status: PropTypes.oneOf(["idle", "pending", "resolved", "rejected"])
    .isRequired,
};

export default InfoPanel;
