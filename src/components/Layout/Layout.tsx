import React from "react"
import css from "./Layout.module.css"

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <section className={css.layout}>
      {children}
    </section>
  )
}

export default Layout