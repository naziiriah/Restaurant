import { Icon } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {Footer} from "../components/Footer"
import { CalculateTotal } from "../redux";

const PayByTransfer = () => {
    const navigate = useNavigate(),
    Dispatch  = useDispatch(),
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
                    <>Transfer details</>
                    <div></div>
                </div>
            </header>
            <main className="table-design">
                <section className="table__empty">
                    <article className="main__transfer">
                            <div className="modal__account">
                                    <h4>Transfer your bill to the 
                                        account<br/> number below</h4>
                                    <h1>1234 5678 0987</h1>
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

export default PayByTransfer