import Heder from '../Header'
import MainRender from '../Main'
import Footer from '../Footer'
import Card from '../Card'

const Render = (perent) => {
    perent.append(Heder())
    perent.append(MainRender())
    perent.append(Footer())
    // perent.append(Card("1"))
}

export default Render