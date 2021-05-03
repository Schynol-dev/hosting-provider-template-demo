import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import pinterest from '../assets/icons/pinterest.svg';
import twitter from '../assets/icons/twitter.svg';
import youtube from '../assets/icons/youtube.svg';

function Footer() {

    return (
        <div className="wrapper style2 padding">
            <div className="container">
                <div className="domain flex-container space-between flex-wrap">
                    <h2 className="domain__title">Search for you domain today.</h2>
                    <input type="text" className="domain__search" placeholder="Search and find out if your domain is available" />
                </div>
                <div className="links">
                    <div className="flex-container space-between">
                        <div className="flex-item">
                            <ul className="list">
                                <li className="list__item bold">Support</li>
                                <li className="list__item list__link">Link</li>
                                <li className="list__item list__link">Link</li>
                                <li className="list__item list__link">Link</li>
                            </ul>
                        </div>
                        <div className="flex-item">
                            <ul className="list">
                                <li className="list__item bold">Support</li>
                                <li className="list__item list__link">Link</li>
                                <li className="list__item list__link">Link</li>
                                <li className="list__item list__link">Link</li>
                                <li className="list__item list__link">Link</li>
                                <li className="list__item list__link">Link</li>
                            </ul>
                        </div>
                        <div className="flex-item">
                            <ul className="list">
                                <li className="list__item bold">Support</li>
                                <li className="list__item list__link">Link</li>
                                <li className="list__item list__link">Link</li>
                                <li className="list__item list__link">Link</li>
                                <li className="list__item list__link">Link</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-container space-between flex-wrap">
                    <div className="flex-item">
                        <p>Copyright © {new Date().getFullYear()} || Design: <a href="http://kamilschynol.com/" target="_blank" rel="noreferrer">Kamil Schynol</a></p>
                    </div>
                    <div className="flex-item">
                        <ul className="list-inline">
                            <li className="list-inline__item list__link"><img src={facebook} alt="facebook" /></li>
                            <li className="list-inline__item list__link"><img src={twitter} alt="twitter" /></li>
                            <li className="list-inline__item list__link"><img src={instagram} alt="instagram" /></li>
                            <li className="list-inline__item list__link"><img src={pinterest} alt="pinterest" /></li>
                            <li className="list-inline__item list__link"><img src={youtube} alt="youtube" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;