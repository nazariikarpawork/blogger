import React from 'react';

const Menu = ({header, items, active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="menu__content" onClick={e => e.stopPropagation()}>
                <div className="menu__header">{header}</div>
                <ul>
                    {items.map(item =>
                        <li className="adaptive-menu-item">
                            <a href="#">{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
