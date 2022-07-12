import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { HomeLightBTN } from "../components/Buttons"
import { removeFromCart } from "../redux"
import EmptyImage from "../images/DishNew.png"
import CutleryImage from "../images/Cultery.png"
import {HiOutlineTrash} from  "react-icons/hi"
import { Icon } from "@chakra-ui/react"
import {IoIosArrowBack} from "react-icons/io"


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
             <header className="table-design">
                <div className="container bill-header header menu_pages">
                    <Icon as={IoIosArrowBack} ml="-.5rem" color="#000"
                            onClick={() => navigate('/menu')}/>
                    <>table</>
                    <div></div>
                </div>
            </header>
            {tableList && tableList.length > 0 ?
                <main className="table-design menu_pages">
                    <section className="container  bill__header">
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
                :
                <main className="table-design menu_pages">
                <section className="container">
                    <div className="table__empty"> 
                        <img src={EmptyImage} alt="Wine and Dine" className="table__Image1"/>
                        <img src={CutleryImage} alt="Wine and Dine" className="table__Image2"/>

                        <h2 className="bill__emptyDirective">You haven't  ordered anything off the menu yet. <br/>
                            View the menu to select items.
                        </h2>

                        <HomeLightBTN text={'View menu'}/>
                    </div>
                </section>
            </main>
            }
        </>
    )
}

export default Table