import { useState, } from "react"
import { Appetizer, Burger, Wine, Main } from "../components/Menu-properties"
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io"
import { Icon } from "@chakra-ui/react"
import menu_header from "../images/menu-header.png"
import invoice from "../images/alert.png"
import { useNavigate } from "react-router-dom"


const Menu  = () => {
    const [title, setTitle] = useState('appetizer'),
    navigation = useNavigate(),
    [first, setFirst] = useState(false),
    [style, setStyle] = useState('style');

    
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
                        <li className="main-nav__list" id={style} onClick={ () => { setTitle('appetizer');setStyle('style')  }}>appetizer</li>
                        <li className="main-nav__list" id={style + '_12'} onClick={() =>{setTitle('burger'); setStyle('styler') }}>burger</li>
                        <li className="main-nav__list" id={style + '_13'} onClick={() =>{setTitle('wine');setStyle('styles') }}>wine</li>
                        <li className="main-nav__list" id={style + '_14'} onClick={() =>{setTitle('main'); setStyle('stylez')} }>main</li>
                        <li className="main-nav__list" 
                            onClick={
                                () => { 
                                    setFirst(!first); setTitle('main'); setStyle('style') 
                                }
                            }>more 
                                <Icon mr=".4rem"as={IoIosArrowForward}/>
                        </li>
                    </ul>
                
                }
                {
                    first &&
                    <ul className="main-nav__lists">
                        <li className="main-nav__list" onClick={() => {setFirst(!first)
                            ;setTitle('appetizer'); setStyle('style')}}>
                                <Icon mr=".4rem"as={IoIosArrowBack}/>more</li>
                        <li className="main-nav__list"  id={style} onClick={() => setStyle('style')}>shawarma</li>
                        <li className="main-nav__list" id={style + '_12'} onClick={() => setStyle('styler')} >dessert</li>
                        <li className="main-nav__list" id={style + '_13'} onClick={() => setStyle('styles')}>salad</li>
                        <li className="main-nav__list" id={style + '_14'} onClick={() => setStyle('stylez')}>cocktail</li>
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
