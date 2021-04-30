function Footer() {

    return (
        <div className="wrapper style2 padding">
            <div className="container">
                <div className="domain flex-container space-between">
                    <h2 className="domain__title">Search for you domain today.</h2>
                    <input type="text" className="domain__search" placeholder="Search and find out if your domain is available" />
                </div>
                <div className="flex-container space-between">
                    <div className="flex-item">
                        <ul className="links">
                            <li className="links__item bold">Support</li>
                            <li className="links__item">Link</li>
                            <li className="links__item">Link</li>
                            <li className="links__item">Link</li>
                        </ul>
                    </div>
                    <div className="flex-item">
                        <ul className="links">
                            <li className="links__item bold">Support</li>
                            <li className="links__item">Link</li>
                            <li className="links__item">Link</li>
                            <li className="links__item">Link</li>
                            <li className="links__item">Link</li>
                            <li className="links__item">Link</li>
                        </ul>
                    </div>
                    <div className="flex-item">
                        <ul className="links">
                            <li className="links__item bold">Support</li>
                            <li className="links__item">Link</li>
                            <li className="links__item">Link</li>
                            <li className="links__item">Link</li>
                            <li className="links__item">Link</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-container space-between">
                    <div className="flex-item">
                        <p>Copyright © {new Date().getFullYear()} || Design: <a href="http://kamilschynol.com/" target="_blank" rel="noreferrer">Kamil Schynol</a></p>
                    </div>
                    <div className="flex-item">
                        <p>Icons</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;