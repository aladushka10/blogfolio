import style from "./Button.module.scss"

interface IProps {
  children: React.ReactNode
  isDisabled?: boolean
  btnType?: "primary" | "secondary"
  value: string
}
const Button = ({
  children,
  isDisabled = false,
  btnType = "primary",
  value,
}: IProps) => {
  return (
    <button
      className={
        btnType === "secondary" ? `${style.secondary}` : `${style.primary}`
      }
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}
export default Button
