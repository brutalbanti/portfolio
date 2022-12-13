import React from "react"
import './header.css'
const Header = (props) => {
        return (
            <header className="header">
                <div className="header__container">
                    <a href="" className="header__logo">BatixkDeveloper</a>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="" className="menu__link">
                                    Home
                                </a>
                            </li>
                            <li className="menu__item menu__link" onClick={props.scrollToAbout}>
                                    About
                            </li>
                            <li className="menu__item menu__link" onClick={props.scrollToContact}>
                                    Contact
                            </li>
                            <li className="menu__item menu__link" onClick={props.scrollToWork}>
                                    Works
                            </li>
                        </ul>
                        <div className="burger-btn">
                            <span></span>
                        </div>
                    </nav>
                </div>
            </header>
        )
}

export default Header;