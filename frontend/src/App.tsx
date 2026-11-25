import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./components/Home"
import Rooms from "./components/Rooms"
import Booking from "./components/Booking"

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/rooms' element={<Rooms />}></Route>
        <Route path='/booking/:id' element={<Booking />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App