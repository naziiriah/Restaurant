import { useEffect, useState, } from "react"
import { Appetizer, Burger, Wine, Main } from "../components/Menu-properties"
import menu_header from "../images/menu-header.png"
import invoice from "../images/alert.png"
import { useNavigate } from "react-router-dom"


const Menu  = () => {
    const [title, setTitle] = useState('appetizer'),
    navigation = useNavigate(),
    [style, setStyle] = useState('style');
    useEffect(() => {
            window.scrollTo(0, 0); 
    },[title])
    
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
                    <ul className="main-nav__lists">               
                        <li className="main-nav__list" id={style} onClick={ () => { setTitle('appetizer');setStyle('style')  }}>appetizer</li>
                        <li className="main-nav__list" id={style + '_12'} onClick={() =>{setTitle('burger'); setStyle('styler') }}>burger</li>
                        <li className="main-nav__list" id={style + '_13'} onClick={() =>{setTitle('wine');setStyle('styles') }}>wine</li>
                        <li className="main-nav__list" id={style + '_14'} onClick={() =>{setTitle('main'); setStyle('stylez')} }>main</li>
                        <li className="main-nav__list"  id={style + '_16'} onClick={() => setStyle('style1')}>shawarma</li>
                        <li className="main-nav__list" id={style + '_17'} onClick={() => setStyle('style2')} >dessert</li>
                        <li className="main-nav__list" id={style + '_18'} onClick={() => setStyle('style3')}>salad</li>
                        <li className="main-nav__list" id={style + '_19'} onClick={() => setStyle('style4')}>cocktail</li>
                    </ul>
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
