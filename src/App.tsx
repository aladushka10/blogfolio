import { Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import "./scss/_fonts.scss"
import Home from "./Pages/Home/Home"
import NotFound from "./Pages/NotFound/NotFound"
import Layout from "./Pages/Layout/Layout"
import SignIn from "./Pages/SignIn/SignIn"
import SignUp from "./Pages/SignUp/SignUp"
import RegistrationConfirmation from "./Pages/RegistrationConfirmation/RegistrationConfirmation"
import Success from "./Pages/Success/Success"
import AllPosts from "./Pages/AllPosts/AllPosts"
import SelectedPost from "./Pages/SelectedPost/SelectedPost"
import SearchPage from "./Pages/SearchPage/SearchPage"
import ResetPassword from "./Pages/ResetPassword/ResetPassword"
import NewPassword from "./Pages/NewPassword/NewPassword"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/posts/:id" element={<SelectedPost />} />
          <Route path="/:id" element={<SelectedPost />} />
          <Route path="about" element={<Navigate to={"/about-us"} />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/registration-confirm"
            element={<RegistrationConfirmation />}
          />
          <Route path="/success" element={<Success />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
