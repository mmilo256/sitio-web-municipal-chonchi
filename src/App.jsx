import { Route, Routes } from "react-router-dom"
import Inicio from "./pages/inicio/Inicio"
import Noticias from "./pages/noticias/Noticias"
import dayjs from 'dayjs'
import 'dayjs/locale/es'

dayjs.locale("es")

const App = () => {
  return (
    <Routes>
      <Route index element={<Inicio />} />
      <Route path="/noticias" element={<Noticias />} />
    </Routes>
  )
}

export default App