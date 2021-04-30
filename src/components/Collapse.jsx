import { useState } from 'react';
import arrowForward from '../assets/icons/arrow-forward.svg';

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse collapse__shadow" onClick={()=> setIsOpen(!isOpen)}>
            <h4><img className={`collapse__icon ${isOpen ? 'rotate' : ''}`} src={arrowForward} alt="arrow" />{props.title}</h4>
            <div className={`collapse__content ${isOpen ? '' : 'hidden'}`}>
                {props.children}
            </div>
        </div>
    );
}

export default Collapse;