import { Link, useLocation, useNavigate } from "react-router-dom"
import Input from "../../Components/Input/Input"
import style from "./SignIn.module.scss"
import { useEffect, useState } from "react"
import Textarea from "../../Components/Textarea/Textarea"
import Title from "../../Components/Title/Title"
import { useDispatch, useSelector } from "react-redux"
// import { signInUser } from "../../store/SignInSlice"

const SignIn = () => {
  interface ILogin {
    email: string
    password: string
  }
  const [loginData, setLoginData] = useState<ILogin>({
    email: "",
    password: "",
  })
  const { pathname } = (useLocation().state || { from: "/" }).from
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className={style.signIn}>
      <div className={style.container}>
        <div className={style.signInWrap}>
          <Link className={style.backHomeBtn} to={"/"}>
            Back to Home
          </Link>
          <Title title={"Sign In"} />
          <div className={style.signInFormBorder}>
            <form className={style.signInForm}>
              <Input
                name={"email"}
                title={"Email"}
                type={"email"}
                //value={"Your email"}
                placeholder="Your email"
                event={inputHandler}
              />
              <Input
                name={"password"}
                title={"Password"}
                type={"password"}
                // value={""}
                placeholder="Your password"
                event={inputHandler}
              />

              <Link to={"/"} className={style.forgotPsw}>
                Forgor password?
              </Link>
              <button className={style.signInBtn}>Sign In</button>
              <div className={style.withoutAccWrap}>
                <span>Don’t have an account?</span>
                <Link to={"/sign-up"} className={style.signUpBtn}>
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignIn
