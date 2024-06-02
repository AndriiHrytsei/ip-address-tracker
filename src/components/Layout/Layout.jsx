import css from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <section className={css.layout}>
      {children}
    </section>
  )
}

export default Layout