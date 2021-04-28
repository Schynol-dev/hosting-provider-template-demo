function Card(props) {

    const array = [
        '1 website',
        'Unlimited storage',
        'Scalable bandwidth',
        'Free SSL by Lets Encrypt',
        '10 databases'
    ];

    return (
        <div className="card">
            <div className="card__header">
                <h5 className="card__title">{props.title}</h5>
                <p className="card__descriptopn">{props.description}</p>
            </div>
            <div className="card__selection">
                <p className="card__price bold">{props.price}</p>
                <select className="card__select">
                    <option>{props.option}</option>
                </select>
            </div>
            <button className="button button-empty">Buy Now</button>
            <ul className="list">
                {
                    props.items!=null ?
                        props.items.map((item) => <li className="list__item">{item}</li>)
                    :
                        <li></li>
                }
            </ul>
        </div>
    );
}

export default Card;