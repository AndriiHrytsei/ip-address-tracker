import css from "./InfoPanel.module.css";
import PropTypes from 'prop-types';

const InfoPanel = ({ locationInfo, status }) => {
  
  const geoData = {
    ip: status === "resolved" ? locationInfo.ip : "–",
    location: status === "resolved" ? `${locationInfo.province}, ${locationInfo.city} ${locationInfo.zipode}` : "–",
    timezone: status === "resolved" ? `UTC ${locationInfo.timezoneOffset}` : "–",
    isp: status === "resolved" ? locationInfo.isp : "–"
  }
  console.log(geoData);

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
  status: PropTypes.oneOf(["idle", "pending", "resolved", "rejected"]).isRequired
}

export default InfoPanel;

