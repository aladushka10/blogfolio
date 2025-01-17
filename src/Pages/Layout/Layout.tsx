import { Outlet } from "react-router-dom"
import Header from "../../Components/Header/Header"
import { ActiveContext } from "../../Сontext/Context"
import { useEffect, useState } from "react"
import Navbar from "../../Components/Navbar/Navbar"
import { useSelector } from "react-redux"
import Footer from "../../Components/Footer/Footer"
import style from "./Layout.module.scss"

const Layout = () => {
  const [active, setActive] = useState(false)
  const { theme } = useSelector((state: any) => state.themeInStoreConfiguration)
  // const themeValue  = useSelector((state) => state.themeInStoreConfiguration.theme);

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme")
    document.body.classList.add(`${theme}-theme`)
  }, [theme])
  return (
    <ActiveContext.Provider
      value={{ isActive: active, SetIsActive: setActive }}
    >
      <Header />
      <Navbar />
      <div className={style.layoutWrap}>
        <main className={style.content}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ActiveContext.Provider>
  )
}
export default Layout

// import { Outlet } from "react-router-dom";
// import Header from "../../Components/Header/Header";
// import { ActiveContext, ThemeContext } from "../../Сontext/Context";
// import { useEffect, useState } from "react";
// import Navbar from "../../Components/Navbar/Navbar";

// const Layout = () => {
//   const [active, setActive] = useState(false);
//   const [pageTheme, setPageTheme] = useState("light");
//   const toggleTheme = () => {
//     setPageTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };
//   useEffect(() => {
//     document.body.classList.remove("light-theme", "dark-theme");
//     document.body.classList.add(`${pageTheme}-theme`);
//   }, [pageTheme]);
//   return (
//     <ActiveContext.Provider
//       value={{ isActive: active, SetIsActive: setActive }}
//     >
//       <ThemeContext.Provider
//         value={{ theme: pageTheme, toggleTheme: toggleTheme }}
//       >
//         <Header />
//         <Navbar />
//         <Outlet />
//         <div>footer</div>
//       </ThemeContext.Provider>
//     </ActiveContext.Provider>
//   );
// };
// export default Layout;
