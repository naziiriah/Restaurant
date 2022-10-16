import { useEffect, useRef, useState } from 'react';
import { Appetizer, Burger, Wine, Main } from '../components/Menu-properties';
import menu_header from '../images/menu-header.png';
import invoice from '../images/alert.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FooterSection } from '../components/Footer';

const Menu = () => {
  const [title, setTitle] = useState('appetizer'),
    navigation = useNavigate(),
    [style, setStyle] = useState('style'),
    [navBarDisplay, SetnavBarDisplay] = useState(0),
    [animation, setAnimation] = useState(false),
    table = useSelector((state) => state.bill.value),
    [SideDisplay, SetSideDisplay] = useState(false),
    scrollRef = useRef(null);

  useEffect(() => {
    if (table.length > 0) {
      setAnimation(true);
      SetSideDisplay(true);
    } else {
      setAnimation(false);
      SetSideDisplay(false);
    }
  }, [table.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  const SetActive = (style, type) => {
    setTitle(type);
    setStyle(style);
  };
  const myFunction = (event) => {
    SetnavBarDisplay(event.currentTarget.scrollLeft);
  };

  const ScrollButton = (direction) => {
    if (direction) {
      scrollRef.current.scrollLeft -= 200;
    } else {
      scrollRef.current.scrollLeft += 200;
    }
  };

  return (
    <>
      <header className="menu__fixed menu_pages ">
        <div className="container">
          <img className="menu__design" src={menu_header} alt="menu-header"></img>
          <div className="header menu__header">
            <i className="fa-solid fa-house-chimney icon__home" onClick={() => navigation('/')}></i>
            <h1 className="menu__title">menu</h1>
            <div onClick={() => navigation('/table')}>
              <img className=" menu__invoice" src={invoice} alt="alert"></img>
              {animation && (
                <div className="dot__animation">
                  <div className="dot__center"></div>
                </div>
              )}
            </div>
          </div>
          <article className="art">
            <div className="art__line"></div>
            <div className="art__circle"></div>
            <div className="art__line"></div>
          </article>
          <nav className="main__nav ">
            {navBarDisplay >= 40 && (
              <i
                className="fa-solid fa-chevron-left icon__scroll--left"
                onClick={() => ScrollButton(true)}
              ></i>
            )}
            <ul className="main-nav__lists" ref={scrollRef} onScroll={myFunction}>
              <li
                className="main-nav__list"
                id={style}
                onClick={() => {
                  setTitle('appetizer');
                  setStyle('style');
                }}
              >
                appetizer
              </li>
              <li
                className="main-nav__list"
                id={style + '_12'}
                onClick={() => {
                  setTitle('burger');
                  setStyle('styler');
                }}
              >
                burger
              </li>
              <li
                className="main-nav__list"
                id={style + '_13'}
                onClick={() => {
                  setTitle('wine');
                  setStyle('styles');
                }}
              >
                wine
              </li>
              <li
                className="main-nav__list"
                id={style + '_14'}
                onClick={() => {
                  setTitle('main');
                  setStyle('stylez');
                }}
              >
                main
              </li>
              <li
                className="main-nav__list"
                id={style + '_16'}
                onClick={() => SetActive('style1', 'shawarma')}
              >
                shawarma
              </li>
              <li
                className="main-nav__list"
                id={style + '_17'}
                onClick={() => SetActive('style2', 'dessert')}
              >
                dessert
              </li>
              <li
                className="main-nav__list"
                id={style + '_18'}
                onClick={() => SetActive('style3', 'salad')}
              >
                salad
              </li>
              <li
                className="main-nav__list"
                id={style + '_19'}
                onClick={() => SetActive('style4', 'cocktail')}
              >
                cocktail
              </li>
            </ul>

            {navBarDisplay <= 220 && (
              <i
                className="fa-solid fa-chevron-right icon__scroll--right"
                onClick={() => ScrollButton(false)}
              ></i>
            )}
          </nav>
        </div>
      </header>

      {SideDisplay && (
        <aside className="aside__animation" onClick={() => navigation('/table')}>
          <h1>
            View <br /> Table Order{' '}
          </h1>
        </aside>
      )}
      {title === 'appetizer' && <Appetizer isImage={true} />}
      {title === 'burger' && <Burger isImage={true} />}
      {title === 'wine' && <Wine isImage={true} />}
      {title === 'main' && <Main isImage={true} />}
      {title === 'shawarma' && <Main isImage={false} />}
      {title === 'dessert' && <Main isImage={false} />}
      {title === 'salad' && <Main isImage={false} />}
      {title === 'cocktail' && <Main isImage={false} />}
      <footer className="table-design">
        <FooterSection />
      </footer>
    </>
  );
};

export default Menu;
