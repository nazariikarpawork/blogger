import Menu from "../menu/menu";
import React, {useEffect, useState} from "react";


function Header({items, logo}) {

    const [menuActive, setMenuActive] = useState(false)

    useEffect(() => {
        if (menuActive) {
            // 👇 add class to body element
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    });

    return (

        <div className="header">
            <div className="header__inner">
                <div className="header__inner-navigation vision-menu">
                    <ul className="header__inner-navigation-list ">
                        {items.map(item =>
                            <li className="header__inner-navigation-list-item">
                                <a href="#" >{item.value}</a>
                            </li>
                        )}
                    </ul>
                </div>
                <nav className="vision-adaptive">
                    <a className={menuActive ? 'burger-btn x-style': 'burger-btn'  }
                       onClick={function () {
                               setMenuActive(!menuActive);
                       }}>
                        <span/>
                    </a>
                    <Menu active={menuActive} setActive={setMenuActive} header={"Menu"} items={items}/>
                </nav>
                <div className="header__inner-logo">
                    <h3 className="header__inner-logo-item">{logo}</h3>
                </div>
            </div>
        </div>
    );
}

export default Header;