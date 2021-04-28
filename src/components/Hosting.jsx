import { Link } from 'react-router-dom';

import modems from '../assets/images/modems.svg';
import Navigation from './Navigation';

function Hosting() {

    return (
        <div className="wrapper style2">
            <div className="container">
                <div className="hosting-header">
                    <img className="hosting-header__image" src={modems} />
                    <div className="hosting-header__content">
                        <h3 className="hosting-header__title bold-black">Fast and Secure Web Hosting</h3>
                        <p className="hosting-header__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        <button className="button button-header">Buy Now</button>
                    </div>
                </div>
            </div>
            <Navigation 
                leftContent={
                <>
                    <ul className="nav">
                        <li className="nav__item"><Link className="nav__link">Plans</Link></li>
                        <li className="nav__item"><Link className="nav__link">Compare</Link></li>
                        <li className="nav__item"><Link className="nav__link">FAQ</Link></li>
                    </ul>
                </>
                }
                rightContent={<button className="button button-empty">Get Started</button>}
            />
        </div>
    );
}

export default Hosting;