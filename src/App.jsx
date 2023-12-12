import BearCard from "./Components/BearCard/BearCard"
import Navbar from "./Components/Navbar/Navbar"
import { useState } from "react"

function App() {

  const [search,setSearch] = useState("")

  return (
    <>
    <Navbar search={search} setSearch={setSearch} />
    <BearCard search={search} />
    </>
  )
}

export default App
