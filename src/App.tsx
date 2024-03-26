import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homework29 from "./homeworks/Homework29/Homework29"
import Homework31 from "homeworks/Homework31/Homework32"

import Layout from "pages/UsersApp/Layout/Layout"
import Home from "pages/UsersApp/Home/Home"
import Users from "pages/UsersApp/Users/Users"
import Homework32 from "homeworks/Homework31/Homework32"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>
      {/* <Homework29 /> */}
      <Homework32 />
    </BrowserRouter>
  )
}

export default App