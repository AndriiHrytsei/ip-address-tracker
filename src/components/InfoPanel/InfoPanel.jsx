import css from "./InfoPanel.module.css"

const InfoPanel = () => {
  return (
    <ul className={css.infoPanelList}>
      <li className={css.listItem}>
        <h2>IP ADDRESS</h2>
        <p>–</p>
      </li>
      <li className={css.listItem}>
        <h2>LOCATION</h2>
        <p>–</p>
      </li>
      <li className={css.listItem}>
        <h2>TIMEZONE</h2>
        <p>–</p>
      </li>
      <li className={css.listItem}>
        <h2>ISP</h2>
        <p>–</p>
      </li>
    </ul>
  )
}

export default InfoPanel