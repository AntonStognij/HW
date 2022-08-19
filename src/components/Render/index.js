import Heder from '../Header'
import MainRender from '../Main'
import Footer from '../Footer'
import Order from '../Order'
import info from '../../info.js'

//( img, nameArm, price, oldPrice, count)
const Render = (perent) => {
    perent.append(Heder())
    perent.append(MainRender())
    perent.append(Footer())
    perent.append(Order(info.catalog.armchair[1].img , info.catalog.armchair[1].name , info.catalog.armchair[1].price, info.catalog.armchair[1].oldPrice, "1" ))
}

export default Render