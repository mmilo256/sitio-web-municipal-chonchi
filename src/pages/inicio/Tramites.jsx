import { FaWpforms } from "react-icons/fa6";
import Heading from '../../components/Heading'
import Tile from '../../components/Tile'
import Container from '../../layout/Container'

const Tramites = () => {
    return (
        <section className='bg-customDarkBlue'>
            <Container>
                <Heading text="TRÁMITES Y SERVICIOS EN LÍNEA" dark={false} />
                <div className='grid grid-cols-3 gap-6'>
                    <Tile
                        description="Realice trámites y solicitudes usando 
                        su ClaveÚnica y vea en tiempo real el estado de su solicitud"
                        title="Municipio Virtual Chonchi"
                        bgColor="bg-amber-500"
                        icon={<FaWpforms size={50} />} />
                    <Tile
                        description="Realice trámites y solicitudes usando 
                        su ClaveÚnica y vea en tiempo real el estado de su solicitud"
                        title="Solicitud de información"
                        bgColor="bg-green-500"
                        icon={<FaWpforms size={50} />} />
                    <Tile
                        description="Realice trámites y solicitudes usando 
                        su ClaveÚnica y vea en tiempo real el estado de su solicitud"
                        title="Pagos en línea"
                        bgColor="bg-cyan-500"
                        icon={<FaWpforms size={50} />} />
                </div>
            </Container>
        </section>
    )
}

export default Tramites