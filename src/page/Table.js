import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { HomeLightBTN } from "../components/Buttons"
import { removeFromCart } from "../redux"
import EmptyImage from "../images/empty2 1.png"
import {HiOutlineTrash} from  "react-icons/hi"
import { Icon, TabList } from "@chakra-ui/react"
import {IoIosArrowBack} from "react-icons/io"
import {Footer, FooterSection} from "../components/Footer"


const Table = () => {
    const tableList = useSelector((state) => state.bill.value),
    Dispatch = useDispatch(),
    navigate = useNavigate(),
    removeItem = (ID) => {
        Dispatch(removeFromCart({
            id:ID
        }))
    }
    
    return(
        <>
           
            {tableList && tableList.length > 0 ?
               <>
                 <header className="table-design">
                    <div className="container bill-header header ">
                        <Icon as={IoIosArrowBack} ml="-.5rem" color="#000"
                                onClick={() => navigate('/menu')}/>
                        <>table order</>
                        <div></div>
                    </div>
                </header>
                <main className=" table-design table_page">
                    <section className="container  bill__header table_page">
                        <nav className="bill__flex-title">
                            <h2 className=" bill__title bill__title_1">qty</h2>
                            <h2 className=" bill__title start bill__title_2">item</h2>
                            <h2 className=" bill__title end bill__title_3"> </h2>
                        </nav>
                        <div className="table__list">
                            { tableList.map((state) => (
                                        <div className="bill__items" key={state.id}>
                                            <h3 className="bill__item bill__title_1">{state.quantity}</h3>
                                            <h3 className="bill__item bill__title_2">{state.name}</h3>
                                            <h3 className="bill__cancel bill__title_3" onClick={() => removeItem(state.id)}><Icon as={HiOutlineTrash} fontSize={"22px"}  mt={'-0.2rem'} color={'red'} opacity='0.8'/></h3>
                                        </div>
                                )) 
                            }
                        </div>
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
                    {tableList.length < 10 ?  <Footer/> : <FooterSection/>}
                </footer>
               </>
                :
                <>
                <header className="table-design">
                    <div className="container bill-header header">
                        <Icon as={IoIosArrowBack} ml="-.5rem" color="#000"
                            onClick={() => navigate('/menu')}/>
                        <>table order</>
                        <div></div>
                    </div>
                </header>
                <main className="table-design table_page">
                <section className="container">
                    <div className="table__empty"> 
                        <img src={EmptyImage} alt="Wine and Dine" className="table__Image1"/>
                        <h2 className="bill__emptyDirective">You haven't  ordered anything off the menu yet. <br/>
                            View the menu to select items.
                        </h2>
                        <HomeLightBTN text={'View menu'}/>
                    </div>
                </section>
                
                </main>
                <footer className="table-design">
                    <Footer/>
                </footer>
            </>
            }
        </>
    )
}

export default Table