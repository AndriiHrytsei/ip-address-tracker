import css from "./InfoPanel.module.css"

const InfoPanel = () => {
  return (
    <ul className={css.infoPanelList}>
      <li className={css.listItem}>
        <h2>IP ADDRESS</h2>
        <p>192.212.174.101</p>
      </li>
      <li className={css.listItem}>
        <h2>LOCATION</h2>
        <p>Brooklyn, NY 10001</p>
      </li>
      <li className={css.listItem}>
        <h2>TIMEZONE</h2>
        <p>UTC -05:00</p>
      </li>
      <li className={css.listItem}>
        <h2>ISP</h2>
        <p>SpaceX Starlink</p>
      </li>
    </ul>
  )
}

export default InfoPanel