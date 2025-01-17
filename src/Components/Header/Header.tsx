import BurgerMenu from "../BurgerMenu/BurgerMenu"
import Button from "../Button/Button"
import Person from "../Person/Person"
import Search from "../Search/Search"
import style from "./Header.module.scss"

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerWrap}>
        <div>
          <BurgerMenu />
        </div>
        <div className={style.searchPesonBtn}>
          <Search />
          <Person username={"Artem Malkin"} />
        </div>
      </div>
    </header>
  )
}
export default Header
