import { useState, } from "react"
import { Appetizer, Burger, Wine, Main } from "../components/Menu-properties"
import {IoIosArrowForward} from "react-icons/io"
import { Icon } from "@chakra-ui/react"
import menu_header from "../images/menu-header.png"
import invoice from "../images/alert.png"
import { useNavigate } from "react-router-dom"


const Menu  = () => {
    const [title, setTitle] = useState('appetizer'),
    navigation = useNavigate(),
    [first, setFirst] = useState(false);

    
    return(
        <>
        <header className="menu__fixed menu_pages ">
            <div className="container">
                <img className="menu__design" src={menu_header} alt="menu-header"></img>
                <div className="header menu__header">
                    <div className="menu__title"></div>
                    <h1 className="menu__title">menu</h1>
                    <img className=" menu__invoice" src={invoice} alt="alert" onClick={() => navigation('/bill')}></img>
                </div>
                <aside className="art">
                    <div className="art__line"></div>
                    <div className="art__circle"></div>
                    <div className="art__line"></div>
                </aside>
                <nav className="main__nav">
                { !first &&
                    <ul className="main-nav__lists">               
                        <li className="main-nav__list" onClick={() => setTitle('appetizer') }>appetizer</li>
                        <li className="main-nav__list" onClick={() => setTitle('burger') }>burger</li>
                        <li className="main-nav__list" onClick={() => setTitle('wine') }>wine</li>
                        <li className="main-nav__list" onClick={() => setTitle('main') }>main</li>
                        <li className="main-nav__list" onClick={() => (setFirst(!first),setTitle('main') )}>more <Icon ml="-.4rem"  pt="-6.2rem"  as={IoIosArrowForward}/></li>
                    </ul>
                
                }
                {
                    first &&
                    <ul className="main-nav__lists">
                        <li className="main-nav__list" onClick={() => (setFirst(!first)
                            ,setTitle('appetizer'))}>more</li>
                        <li className="main-nav__list">shawarma</li>
                        <li className="main-nav__list">dessert</li>
                        <li className="main-nav__list">salad</li>
                        <li className="main-nav__list">cocktail</li>
                    </ul>
                }
                </nav>
            </div>
                
        </header>
          
         {title === "appetizer" && <Appetizer />}
         {title ===  "burger" && <Burger/>}
         {title === 'wine' && <Wine/> }
         {title === 'main' && <Main/> }
         <footer className="footer menu_pages"></footer>
        </>
    )
}

export default Menu
