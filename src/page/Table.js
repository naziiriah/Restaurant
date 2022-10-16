import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HomeLightBTN } from '../components/Buttons';
import { removeFromCart } from '../redux';
import EmptyImage from '../images/food-delivery-icon-set-transportation-vector-32156989 1.png';
import { FooterSection } from '../components/Footer';

const Table = () => {
  const tableList = useSelector((state) => state.bill.value),
    Dispatch = useDispatch(),
    navigate = useNavigate(),
    removeItem = (ID) => {
      Dispatch(
        removeFromCart({
          id: ID,
        }),
      );
    };

  return (
    <>
      {tableList && tableList.length > 0 ? (
        <>
          <header className="table-design">
            <div className="container bill-header header ">
              <i
                className="fa-solid fa-chevron-left icon__back"
                onClick={() => navigate('/menu')}
              ></i>
              <>table order</>
              <div></div>
            </div>
          </header>
          <main className=" table-design table_page">
            <section className="container  bill__header">
              <nav className="bill__flex-title">
                <h2 className=" bill__title bill__title_1">qty</h2>
                <h2 className=" bill__title start bill__title_2">item</h2>
                <h2 className=" bill__title end bill__title_3"> </h2>
              </nav>
              <div className="table__list">
                {tableList.map((state) => (
                  <div className="bill__items" key={state.id}>
                    <h3 className="bill__item bill__title_1">{state.quantity}</h3>
                    <h3 className="bill__item bill__title_2">{state.name}</h3>
                    <h3 className="bill__cancel bill__title_3" onClick={() => removeItem(state.id)}>
                      <i className="fa-solid fa-trash-can icon__trash"></i>
                    </h3>
                  </div>
                ))}
              </div>
            </section>
            <section className="container">
              <div className="table__buttons">
                <button className="btn__custom btn--light" onClick={() => navigate('/menu')}>
                  change order
                </button>
                <button className="btn__custom btn--dark" onClick={() => navigate('/bill')}>
                  Send to waiter
                </button>
              </div>
            </section>
          </main>
          <footer className="table-design">
            <FooterSection />
          </footer>
        </>
      ) : (
        <>
          <header className="table-design">
            <div className="container bill-header header">
              <i className="fa-solid fa-chevron-left" onClick={() => navigate('/menu')}></i>
              <>table order</>
              <div></div>
            </div>
          </header>
          <main className="table-design table_page">
            <section className="container">
              <div className="table__empty">
                <img src={EmptyImage} alt="Wine and Dine" className="table__Image1" />
                <h2 className="bill__emptyDirective">
                  You haven't ordered anything off the menu yet. <br />
                  View the menu to select items.
                </h2>
                <HomeLightBTN text={'View menu'} />
              </div>
            </section>
          </main>
          <footer className="table-design">
            <FooterSection />
          </footer>
        </>
      )}
    </>
  );
};

export default Table;
