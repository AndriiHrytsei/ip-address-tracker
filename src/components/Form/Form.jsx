import css from "./Form.module.css"
import InfoPanel from "../InfoPanel/InfoPanel";


const Form = () => {

  return (
    <section className={css.formBox}>
      <h1 className={css.formHeading}>IP Address Tracker</h1>
      <form className={css.form}>
        <input type="text" className={css.ipField} required/>
        <button type="submit"></button>
      </form>
      <InfoPanel />
    </section>
  );
};

export default Form;
