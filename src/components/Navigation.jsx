import { Link } from "react-router-dom";

import arrow from '../assets/icons/arrow-down.svg';
import cart from '../assets/icons/cart.svg';

function Navigation() {

    return (
        <div className="menu">
            <div className="menu__brand">
                <h4 className="menu__logo bold-black">LiveHost</h4>
            </div>
            <div className="menu__links">
                <ul className="nav">
                    <li className="nav__item"><Link className="nav__link">Website Builder</Link></li>
                    <li className="nav__item"><Link className="nav__link">Hosting</Link><img className="nav__dropdown" src={arrow} /></li>
                    <li className="nav__item"><Link className="nav__link">Domain</Link><img className="nav__dropdown" src={arrow} /></li>
                    <li className="nav__item"><Link className="nav__link">Email</Link><img className="nav__dropdown" src={arrow} /></li>
                </ul>
                <ul className="nav">
                    <li className="nav__item"><img className="nav__cart" src={cart} /></li>
                    <li className="nav__item"><Link className="nav__link bold">Login</Link></li>
                </ul>
            </div>    
        </div>
    );
}

export default Navigation;