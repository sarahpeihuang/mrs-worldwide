import { Link } from 'react-router-dom'
import MrsWorldwide from '../images/Mrs_Worldwide.png'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <img src={MrsWorldwide} className='h-20'></img>
                </Link>
            </div>
        </header>
    )
}

export default Navbar