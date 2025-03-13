import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-b-black/20 h-16">
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/noticias">Noticias</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar