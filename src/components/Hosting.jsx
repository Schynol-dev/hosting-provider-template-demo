import { Link } from 'react-router-dom';

import modems from '../assets/images/modems.svg';
import phone from '../assets/icons/phone.svg';
import Navigation from './Navigation';
import Card from './Card';
import Collapse from './Collapse';

function Hosting() {

    return (
        <>
        <div className="wrapper style2 bg-hosting">
            <div className="container">
                <div className="hosting-header">
                    <img className="hosting-header__image" src={modems} alt="modems" />
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
                <div className="flex-container space-between">
                    <Card 
                        title='Basic'
                        description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
                        price='Starting at $4.00/mo*'
                        options={[
                            '$4.00/mo (billed $96 for 24 mos)', 
                            '$4.00/mo (billed $96 for 24 mos)',
                            '$4.00/mo (billed $96 for 24 mos)'
                        ]}
                        items={[
                            '1 website',
                            'Unlimited storage',
                            'Scalable bandwidth',
                            'Free SSL by Lets Encrypt',
                            '10 databases'
                        ]}
                    />
                    <Card 
                        title='Deluxe'
                        description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
                        price='Starting at $4.00/mo*'
                        options={[
                            '$4.00/mo (billed $96 for 24 mos)', 
                            '$4.00/mo (billed $96 for 24 mos)',
                            '$4.00/mo (billed $96 for 24 mos)'
                        ]}
                        items={[
                            '1 website',
                            'Unlimited storage',
                            'Scalable bandwidth',
                            'Free SSL by Lets Encrypt',
                            '10 databases'
                        ]}
                    />
                    <Card 
                        title='Ultimate'
                        description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
                        price='Starting at $4.00/mo*'
                        options={[
                            '$4.00/mo (billed $96 for 24 mos)', 
                            '$4.00/mo (billed $96 for 24 mos)',
                            '$4.00/mo (billed $96 for 24 mos)'
                        ]}
                        items={[
                            '1 website',
                            'Unlimited storage',
                            'Scalable bandwidth',
                            'Free SSL by Lets Encrypt',
                            '10 databases'
                        ]}
                    />    
                </div>
            </div>
        </section>

        <div className="wrapper style3 padding bg-banner">
            <div className="container">
                <div className="banner">
                    <h2 className="banner__header">Need some help?</h2>
                    <p className="banner__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <p className="banner__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    <h4 className="banner__number"><img className="banner__icon" scr={phone} alt="phone" />(000) 000-0000</h4>
                </div>    
            </div>
        </div>

        <section id="compare" className="wrapper padding">
            <div className="container">
                <div className="content">
                    <h3 className="content__header">Compare our plans</h3>
                    <div className="flex-container space-between">
                        <div className="flex-item center padding"></div>
                        <div className="flex-item center padding"><h3>Basic</h3></div>
                        <div className="flex-item center padding"><h3>Deluxe</h3></div>
                        <div className="flex-item center padding"><h3>Ultimate</h3></div>
                    </div>
                    <div className="flex-container space-between border-top">
                        <div className="flex-item center padding"><p>Websites</p></div>
                        <div className="flex-item center padding"><p>1</p></div>
                        <div className="flex-item center padding"><p>Unlimited</p></div>
                        <div className="flex-item center padding"><p>Unlimited</p></div>
                    </div>
                    <div className="flex-container space-between border-top">
                        <div className="flex-item center padding"><p>Websites</p></div>
                        <div className="flex-item center padding"><p>1</p></div>
                        <div className="flex-item center padding"><p>Unlimited</p></div>
                        <div className="flex-item center padding"><p>Unlimited</p></div>
                    </div>
                    <div className="flex-container space-between border-top">
                        <div className="flex-item center padding"><p>Websites</p></div>
                        <div className="flex-item center padding"><p>1</p></div>
                        <div className="flex-item center padding"><p>Unlimited</p></div>
                        <div className="flex-item center padding"><p>Unlimited</p></div>
                    </div>
                    <div className="flex-container space-between border-top">
                        <div className="flex-item center padding"><p>Websites</p></div>
                        <div className="flex-item center padding"><p>1</p></div>
                        <div className="flex-item center padding"><p>Unlimited</p></div>
                        <div className="flex-item center padding"><p>Unlimited</p></div>
                    </div>
                    <div className="flex-container space-between border-top">
                        <div className="flex-item center padding"><p>Websites</p></div>
                        <div className="flex-item center padding"><p>1</p></div>
                        <div className="flex-item center padding"><p>Unlimited</p></div>
                        <div className="flex-item center padding"><p>Unlimited</p></div>
                    </div>
                </div>
            </div>
        </section>

        <section id="faq" className="wrapper padding">
            <div className="container">
                <div className="content">
                    <h4 className="content__header">Frequently asked questions</h4>
                    <div className="content__item">
                        <Collapse title='Lorem ipsum dolor sit amet, consetetur sadipscing elitr?'>
                            <p>Testing content</p>
                        </Collapse>
                    </div>
                    <div className="content__item">
                        <Collapse title='Lorem ipsum dolor sit amet, consetetur sadipscing elitr?'>
                            <p>Testing content</p>
                        </Collapse>
                    </div>
                    <div className="content__item">
                        <Collapse title='Lorem ipsum dolor sit amet, consetetur sadipscing elitr?'>
                            <p>Testing content</p>
                        </Collapse>
                    </div>
                    <div className="content__item">
                        <Collapse title='Lorem ipsum dolor sit amet, consetetur sadipscing elitr?'>
                            <p>Testing content</p>
                        </Collapse>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Hosting;