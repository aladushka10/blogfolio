import { Link, useLocation, useNavigate } from "react-router-dom"
import Input from "../../Components/Input/Input"
import style from "./SignIn.module.scss"
import { useEffect, useState } from "react"
import Title from "../../Components/Title/Title"
import { useDispatch, useSelector } from "react-redux"
import { signInUser } from "../../store/SignInSlice"

interface ILogin {
  email: string
  password: string
}

interface ISignIn {
  signIn: { auth: boolean; isLoading: boolean; error: null | string }
}
const SignIn = () => {
  const [loginData, setLoginData] = useState<ILogin>({
    email: "",
    password: "",
  })

  const { pathname } = (useLocation().state || { from: "/" }).from
  const { auth } = useSelector((state: ISignIn) => state.signIn)
  const navigate = useNavigate()

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }
  const dispatch = useDispatch()
  const formHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(signInUser(loginData))
  }
  useEffect(() => {
    if (auth) {
      navigate(pathname, { replace: true })
    }
  }, [auth])

  return (
    <div className={style.signIn}>
      <div className={style.container}>
        <div className={style.signInWrap}>
          <Link className={style.backHomeBtn} to={"/"}>
            Back to Home
          </Link>
          <Title title={"Sign In"} />
          <div className={style.signInFormBorder}>
            <form className={style.signInForm} onSubmit={formHandler}>
              <Input
                name={"email"}
                title={"Email"}
                type={"email"}
                placeholder="Your email"
                inputEvent={inputHandler}
              />
              <Input
                name={"password"}
                title={"Password"}
                type={"password"}
                placeholder="Your password"
                inputEvent={inputHandler}
              />
              <Link to={"/"} className={style.forgotPsw}>
                Forgot password?
              </Link>
              <button
                onClick={() => {
                  navigate("/success")
                }}
                type="submit"
                className={style.signInBtn}
              >
                Sign In
              </button>

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
