import { Link } from "react-router-dom"
import Title from "../../Components/Title/Title"
import style from "../Template/Template.module.scss"
interface IProps {
  title: string
}

const Template = ({ title }: IProps) => {
  return (
    <div className={style.blog}>
      <div className={style.container}>
        <Link className={style.backHomeBtn} to={"/"}>
          Back to Home
        </Link>
        <Title title={title} />
      </div>
    </div>
  )
}
export default Template
