import { ChangeEvent, useState } from "react"
import style from "./Input.module.scss"

interface IProps {
  title: string
  name: string
  type: "text" | "password" | "email"
  placeholder?: string
  value?: string | number | readonly string[] | undefined
  event?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  title,
  name,
  placeholder = "placeholder",
  type,
  value,
  event,
}: IProps) => {
  const [inputField, setInputField] = useState("")
  return (
    <>
      <div className={style.inputWrap}>
        <label className={style.inputLabel}>{title}</label>
        <input
          name={name}
          className={style.input}
          type={type}
          placeholder={placeholder}
          // value={value}
          onChange={event}
        />
      </div>
    </>
  )
}

export default Input
