import { Link } from 'react-router-dom';

import modems from '../assets/images/modems.svg';
import Navigation from './Navigation';
import Card from './Card';

function Hosting() {

    return (
        <>
        <div className="wrapper style2 bg-hosting">
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

        <section id="plans" className="wrapper padding">
            <div className="container">
                <Card 
                    title='Basic'
                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
                    price='Starting at $4.00/mo*'
                    option='$4.00/mo (billed $96 for 24 mos)'
                    items={[
                        '1 website',
                        'Unlimited storage',
                        'Scalable bandwidth',
                        'Free SSL by Lets Encrypt',
                        '10 databases'
                    ]}
                />
            </div>
        </section>
        </>
    );
}

export default Hosting;