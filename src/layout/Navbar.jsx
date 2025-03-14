import { NavLink } from "react-router-dom"
import logo from '../assets/logo.png'
import Container from "./Container"
import SearchBar from "../components/SearchBar"

const Navbar = () => {

  const navigation = [
    { name: "Inicio", to: "/" },
    { name: "Municipio", to: "/municipio" },
    { name: "Noticias", to: "/noticias" },
    { name: "Multimedia", to: "/multimedia" },
    { name: "Intranet", to: "/intranet" }
  ]

  return (
    <nav className="bg-white border-b border-b-black/20 h-18">
      <Container className="grid grid-cols-3 items-center h-full gap-4">
        <a className="w-fit" href=""><img className="h-16" src={logo} alt="" /></a>
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item, index) => (
            <li key={index}><NavLink to={item.to}>{item.name}</NavLink></li>
          ))}
        </ul>
        <div className="flex justify-end">
          <div className="w-60">
            <SearchBar />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar