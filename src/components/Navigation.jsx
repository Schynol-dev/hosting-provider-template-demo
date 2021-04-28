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
                    <li className="nav__item">Website Builder</li>
                    <li className="nav__item">Hosting<img className="nav__dropdown" src={arrow} /></li>
                    <li className="nav__item">Domain<img className="nav__dropdown" src={arrow} /></li>
                    <li className="nav__item">Email<img className="nav__dropdown" src={arrow} /></li>
                </ul>
                <ul className="nav">
                    <li className="nav__item"><img className="nav__cart" src={cart} /></li>
                    <li className="nav__item"><a className="nav__link bold">Login</a></li>
                </ul>
            </div>    
        </div>
    );
}

export default Navigation;