import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Header"
import Home from "./pages/Home"
import Chat from "./pages/Chat"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import NotFound from "./pages/NotFound"

function App() {


  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </main>
  )
}

export default App
