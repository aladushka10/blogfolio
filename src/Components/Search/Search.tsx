import { ReactComponent as SearchBtn } from "../../assets/search.svg"
import style from "./Search.module.scss"

const Search = () => {
  return (
    <button className={style.searchBtn}>
      <SearchBtn />
    </button>
  )
}
export default Search
