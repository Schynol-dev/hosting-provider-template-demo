function Card(props) {

    return (
        <div className="card card__shadow">
            <div className="card__header">
                <h5 className="card__title">{props.title}</h5>
                <p className="card__description">{props.description}</p>
            </div>
            <div className="card__selection">
                <p className="card__price bold">{props.price}</p>
                <select className="card__select">
                    {
                        props.options!=null && Array.isArray(props.options) ?
                            props.options.map((option, i) => <option key={i}>{option}</option>)
                        :
                            <></>
                    }
                </select>
            </div>
            <button className="button button-card">Buy Now</button>
            <ul className="list-card">
                {
                    props.items!=null && Array.isArray(props.items) ?
                        props.items.map((item, i) => <li key={i} className="list-card__item">{item}</li>)
                    :
                        <></>
                }
            </ul>
        </div>         
    );
}

export default Card;