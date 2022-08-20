import Heder from '../Header'
import MainRender from '../Main'
import Footer from '../Footer'
import Basket from '../Basket'
import info from '../../info.js'

//( img, nameArm, price, oldPrice, count)
const Render = (perent) => {
    perent.append(Heder())
    perent.append(MainRender())
    perent.append(Footer())
    perent.append(Basket())
}

export default Render