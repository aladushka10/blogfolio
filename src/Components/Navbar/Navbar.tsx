import { useContext, useEffect, useState } from "react"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { ReactComponent as Light } from "../../assets/light.svg"
import { ReactComponent as Dark } from "../../assets/dark.svg"
import { ActiveContext, ThemeContext } from "../../Сontext/Context"
import { useDispatch, useSelector } from "react-redux"
import { switchTheme } from "../../store/themeSlice"
import style from "./Navbar.module.scss"
import styles from "./Navbar.module.scss"
import Person from "../Person/Person"
import { toggleActive } from "../../store/activeSlice"
// import { checkValidToken, stopTokenUpdate } from "../../store/SignInSlice"
const Navbar = () => {
  const location = useLocation()
  const btnIsActive = (path: string) => location.pathname === path
  const theme = useContext(ThemeContext)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signInHandler = () => {
    navigate("/sign-in", { state: { from: location } })
    closeSlideBar()
  }

  const { isActive } = useSelector((state: any) => state.active)

  return (
    <div
      className={
        !isActive ? styles.navbar : `${styles.navbar} ${styles.active}`
      }
    >
      <div className={style.navbarBtnsWrap}>
        <div className={style.navbarBtn}>
          <Person username={"Artem Malkin"} />
        </div>
        <div
          className={`${style.navbarBtn} ${
            btnIsActive("/") ? style.active : ""
          }`}
        >
          <Link
            to="/"
            className={style.navbarLink}
            onClick={() => dispatch(toggleActive())}
          >
            <p>Home</p>
          </Link>
        </div>
        <div
          className={`${style.navbarBtn} ${
            btnIsActive("/about-us") ? style.active : ""
          }`}
        >
          <Link
            to="/about-us"
            className={style.navbarLink}
            onClick={() => dispatch(toggleActive())}
          >
            <p>About us</p>
          </Link>
        </div>
        <div
          className={`${style.navbarBtn} ${
            btnIsActive("/posts") ? style.active : ""
          }`}
        >
          <Link
            to="/posts"
            className={style.navbarLink}
            onClick={() => dispatch(toggleActive())}
          >
            <p>Posts</p>
          </Link>
        </div>
      </div>
      <div className={style.themeAndLogOutWrap}>
        <button onClick={theme?.toggleTheme} className={style.themeWrap}>
          <div
            onClick={() => {
              dispatch(toggleActive())
              dispatch(switchTheme("light"))
            }}
            className={style.themeBtn}
          >
            <Light />
          </div>
          <div
            onClick={() => {
              dispatch(toggleActive())
              dispatch(switchTheme("dark"))
            }}
            className={style.themeBtn}
          >
            <Dark />
          </div>
        </button>
        <button
          onClick={() => dispatch(toggleActive())}
          className={style.logOutBtn}
        >
          Log Out
        </button>
      </div>
    </div>
  )
}
export default Navbar
function closeSlideBar() {
  throw new Error("Function not implemented.")
}
