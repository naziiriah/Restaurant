import { Icon } from "@chakra-ui/react"
import { IoIosArrowBack } from "react-icons/io"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import {Footer} from "../components/Footer"
import { CalculateTotal } from "../redux"

const PayByCard = () => {
    const navigate = useNavigate(),
    Dispatch = useDispatch(),
    Location = useLocation();
    
    const confirmPayment = () => {
        navigate('/end');
        Dispatch(CalculateTotal({
            total:Location.state.total,
            mySplit: Location.state.mySplit
        }))
    }
    return (
        <>
            <header className="table-design">
                <div className="container bill-header header">
                    <Icon as={IoIosArrowBack} ml="-.5rem" fontSize={'23px'} color="#000"
                        onClick={() => navigate('/bill')}/>
                    <>Card details</>
                    <div></div>
                </div>
            </header>
            <main className="table-design">
                <section className="table__empty">
                    <article className="main__transfer">
                      <div className="container">
                      <div className="modal__card-details">
                            <div className="modal__card-number">
                                <input placeholder="1234   ****   ****  ****" 
                                    pattern="[0-9]*" 
                                    inputMode="numeric"
                                    type={'text'}/>
                            </div>
                            <div className="modal__card-others">
                                <input placeholder="MM/YY" 
                                    pattern="[0-9]*" 
                                    inputMode="numeric"
                                    type={'text'}/>
                                <input placeholder="CVV" 
                                    pattern="[0-9]*" 
                                    inputMode="numeric"
                                    type={'text'} />
                            </div>
                        </div>
                      </div>
                    </article>
                </section>
                <section className="transfer__container">
                    <button className="btn btn--dark" onClick={confirmPayment}>Proceed</button>
                </section>
            </main>
            <footer className="table-design">
                    <Footer/>
            </footer>
        </>
    )
}

export default PayByCard