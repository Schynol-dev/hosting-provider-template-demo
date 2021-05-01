import { useState } from 'react';
import { Link } from 'react-router-dom';

import arrow from '../assets/icons/arrow-down.svg';
import cart from '../assets/icons/cart.svg';

function DropdownNav(props) {
    
    const [showDropdowHosting, setShowDropdownHosting] = useState(false);
    const [showDropdowDomain, setShowDropdownDomain] = useState(false);
    const [showDropdowEmail, setShowDropdownEmail] = useState(false);

    return (
        <div className={`menu ${props.shadow ? 'menu__shadow' : ''}`}>
            <div className="menu__left-side">
                <h4 className="bold-black">LiveHost</h4>
            </div>
            <div className="menu__right-side">
                <div className="flex-container">
                    <ul className="list-inline">
                        <li className="list-inline__item"><Link to="#" className="list-inline__link">Website Builder</Link></li>
                        <li className="list-inline__item dropdown" onMouseEnter={() => setShowDropdownHosting(true)} onMouseLeave={()=> setShowDropdownHosting(false)}>
                            <Link to="#" className="list-inline__link">Hosting</Link><img className="list-inline__dropdown" src={arrow} alt="arrow down" />
                            <ul className={`list dropdown__list ${showDropdowHosting ? '' : 'dropdown__list--hidden'}`}>
                                <li className="list__item"><Link to="#" className="dropdown__link">Link</Link></li>
                                <li className="list__item"><Link to="#" className="dropdown__link">Link</Link></li>
                            </ul>
                        </li>
                        <li className="list-inline__item dropdown" onMouseEnter={() => setShowDropdownDomain(true)} onMouseLeave={()=> setShowDropdownDomain(false)}>
                            <Link to="#" className="list-inline__link">Domain</Link><img className="list-inline__dropdown" src={arrow} alt="arrow down" />
                            <ul className={`list dropdown__list ${showDropdowDomain ? '' : 'dropdown__list--hidden'}`}>
                                <li className="list__item"><Link to="#" className="dropdown__link">Link</Link></li>
                                <li className="list__item"><Link to="#" className="dropdown__link">Link</Link></li>
                            </ul>
                        </li>
                        <li className="list-inline__item dropdown" onMouseEnter={() => setShowDropdownEmail(true)} onMouseLeave={()=> setShowDropdownEmail(false)}>
                            <Link to="#" className="list-inline__link">Email</Link><img className="list-inline__dropdown" src={arrow} alt="arrow down" />
                            <ul className={`list dropdown__list ${showDropdowEmail ? '' : 'dropdown__list--hidden'}`}>
                                <li className="list__item"><Link to="#" className="dropdown__link">Link</Link></li>
                                <li className="list__item"><Link to="#" className="dropdown__link">Link</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="list-inline">
                        <li className="list-inline__item"><img className="list-inline__cart" src={cart} alt="cart" /></li>
                        <li className="list-inline__item"><Link to="#" className="list-inline__link bold">Login</Link></li>
                    </ul>
                </div>
            </div>    
        </div>
    );
}

export default DropdownNav;