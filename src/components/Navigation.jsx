function Navigation(props) {

    return (
        <div className="menu">
            <div className="menu__left-side">
                {props.leftContent}
            </div>
            <div className="menu__right-side">
                {props.rightContent}
            </div>    
        </div>
    );
}

export default Navigation;