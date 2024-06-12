import css from "./Layout.module.css"
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <section className={css.layout}>
      {children}
    </section>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout