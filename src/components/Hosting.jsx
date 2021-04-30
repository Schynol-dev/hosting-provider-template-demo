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
                <ul className="list-inline">
                    <li className="list-inline__item"><Link className="list-inline__link">Plans</Link></li>
                    <li className="list-inline__item"><Link className="list-inline__link">Compare</Link></li>
                    <li className="list-inline__item"><Link className="list-inline__link">FAQ</Link></li>
                </ul>
            </>
            }
            rightContent={<button className="button button-empty">Get Started</button>}
            shadow={true}
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
                    <h4 className="banner__number"><img className="banner__icon" src={phone} alt="phone" />(000) 000-0000</h4>
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
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto asperiores aliquid maxime facilis molestias neque officia labore optio saepe cum ipsa qui consectetur ut recusandae, voluptates laudantium temporibus voluptate? Ratione?
                            Obcaecati cumque suscipit soluta facere, ut quasi est ex voluptatum voluptatibus, voluptatem optio ducimus odit? Saepe eligendi ipsa in illo ad hic maxime corrupti nihil quaerat, quas aliquam quia similique!
                            Quasi quas cumque numquam! Consequatur asperiores aliquam debitis voluptatem atque commodi saepe quod consequuntur soluta, amet minus aspernatur sequi ea veniam illo omnis aut nobis? Iure quaerat ea error esse.
                            Quisquam quia nihil fugit quidem consequuntur repudiandae, exercitationem eum recusandae voluptatem natus alias minus voluptatum vel cumque quas temporibus debitis ducimus praesentium sunt, similique consequatur ex neque sit eaque? Laboriosam!
                            Mollitia corporis odio repellat harum! Ex quasi qui inventore et esse est ea accusamus id sunt, nam eveniet corporis facilis commodi, harum dolore, deleniti maiores officia fuga ipsum temporibus ipsam.</p>
                        </Collapse>
                    </div>
                    <div className="content__item">
                        <Collapse title='Lorem ipsum dolor sit amet, consetetur sadipscing elitr?'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusamus assumenda libero possimus quo aliquam animi saepe maxime. Reiciendis esse magnam eum dolor? Consequatur quaerat quo sunt odit, optio impedit.
                            Ut, labore in illum ex sunt ipsam ad, molestiae minus dolore odio tempora ab similique et voluptate suscipit alias, libero fugiat laborum! Dignissimos soluta molestiae recusandae inventore animi exercitationem! Sequi.
                            Omnis consectetur aliquam quia mollitia magnam magni doloremque libero nobis eos ducimus tenetur voluptatibus, repudiandae laudantium itaque modi harum cumque molestiae ea exercitationem hic repellat nesciunt. Vel quae inventore voluptatum?</p>
                        </Collapse>
                    </div>
                    <div className="content__item">
                        <Collapse title='Lorem ipsum dolor sit amet, consetetur sadipscing elitr?'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam natus veritatis quaerat laudantium dolore assumenda ab incidunt suscipit illum, hic a voluptas. Porro eius eaque, reiciendis doloremque tempora atque!
                            Magnam aspernatur necessitatibus facilis sit fugit hic amet quibusdam. Nam vero sequi, aut a at obcaecati omnis quas. Id tempore suscipit tenetur, et deleniti iure rerum ratione? At, cupiditate mollitia.</p>
                        </Collapse>
                    </div>
                    <div className="content__item">
                        <Collapse title='Lorem ipsum dolor sit amet, consetetur sadipscing elitr?'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas inventore suscipit eius doloremque ducimus iusto accusantium officia aspernatur esse repellat animi, commodi, cupiditate atque perspiciatis placeat voluptate sapiente labore.</p>
                        </Collapse>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Hosting;