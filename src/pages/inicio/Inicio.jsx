import Layout from '../../layout/Layout'
import Noticias from './Noticias'
import Tramites from './Tramites'

const Inicio = () => {

    return (
        <Layout withHero>
            <Noticias />
            <Tramites />
        </Layout>
    )
}

export default Inicio