import Heder from '../Header'
import MainRender from '../Main'
import Footer from '../Footer'

const Render = (perent) => {
    perent.append(Heder())
    perent.append(MainRender())
    perent.append(Footer())
}

export default Render