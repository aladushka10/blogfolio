import { Link } from "react-router-dom"
import Input from "../../Components/Input/Input"
import style from "./SignUp.module.scss"
import { useState } from "react"
import Textarea from "../../Components/Textarea/Textarea"
import Title from "../../Components/Title/Title"
import { useDispatch } from "react-redux"
import { signUpUser } from "../../store/userSlice"

const SignUp = () => {
  const [registraionData, setRegistrationData] = useState({
    username: "",
    email: "",
    password: "",
    course_group: 14,
  })

  const dispatch = useDispatch()

  const formHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e?.preventDefault()
    dispatch(signUpUser(registraionData))
  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegistrationData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <div className={style.SignUp}>
      <div className={style.container}>
        <div className={style.SignUpWrap}>
          <Link className={style.backHomeBtn} to={"/"}>
            Back to Home
          </Link>
          <Title title={"Sign Up"} />
          <div className={style.SignUpFormBorder}>
            <form className={style.SignUpForm} onSubmit={formHandler}>
              <Input
                name={"username"}
                title={"Name"}
                type={"text"}
                // value={registraionData.username}
                placeholder="Your name"
                event={inputHandler}
              />
              <Input
                name={"email"}
                title={"Email"}
                type={"email"}
                // value={registraionData.email}
                placeholder="Your email"
                event={inputHandler}
              />
              <Input
                name={"password"}
                title={"Password"}
                type={"password"}
                // value={registraionData.password}
                placeholder="Your password"
                event={inputHandler}
              />
              <Input
                name={"confirm_password"}
                title={"Confirm password"}
                type={"password"}
                // value={registraionData.password}
                placeholder="Confirm password"
                event={inputHandler}
              />
              <button className={style.SignUpBtn}>Sign Up</button>
              <div className={style.withoutAccWrap}>
                <span>Already have an account?</span>
                <Link to={"/sign-in"} className={style.signInBtn}>
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignUp
