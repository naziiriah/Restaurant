import {  useState } from "react"
import {IoMdPaper} from "react-icons/io"
import { Icon } from "@chakra-ui/react"
import { TbArrowsLeftRight,TbCurrencyNaira} from "react-icons/tb"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md"
import { useNavigate } from "react-router-dom"



export const PayModal = () => {
    const [showTransfer, SetShowtransfer] = useState(false),
    [showCard, setShowCard] = useState(false),
    [modal, setModal] = useState(false),
    navigation = useNavigate();
    let icon = showTransfer ? MdOutlineKeyboardArrowUp : MdOutlineKeyboardArrowDown
    let icon2 = showCard ? MdOutlineKeyboardArrowUp : MdOutlineKeyboardArrowDown

    return (
        <>
            <button className="btn btn--dark"
                onClick={() => setModal(!modal)}>
                    Pay bill
            </button>
            
            { modal && 
                <div className="modal">
                    <div className="overlay" onClick={() => setModal(!modal)}></div>
                    <section className="modal__content container">
                        <div className="modal__header">
                            <h1>Pay bill</h1>
                            <Icon as={TbCurrencyNaira} my=".2rem" ml="1.3rem" fontSize={'34px'} border={'solid 2px black'} borderRadius={'10px'}/>
                        </div>
                        <div className="modal__transfer">
                            <div className="modal__box" onClick={() => SetShowtransfer(!showTransfer)}>
                                <Icon as={TbArrowsLeftRight} mt="0.1rem" ml="1rem" fontSize={'30px'}/>
                                <h3>Pay by bank transfer</h3>
                                <Icon as={icon} mt="-0.1rem" ml="2rem" fontSize={'34px'} />  
                            </div>
                            {showTransfer &&
                                <div className="modal__account">
                                        <h4>Transfer your bill to the 
                                            account<br/> number below</h4>
                                        <h1>1234 5678 0987</h1>
                                </div>
                            }

                        </div>
                        <div className="modal__card">
                            <div className="modal__box" onClick={() => setShowCard(!showCard)}>
                                <Icon as={TbArrowsLeftRight} mt="0.1rem" ml="1rem" fontSize={'30px'}/>
                                <h3>Pay with card</h3>
                                <Icon as={icon2} my="0rem" ml="2rem" fontSize={'34px'}/>  
                            </div>
                            {
                                showCard && 
                                    <div className="modal__card-details">
                                        <div className="modal__card-number">
                                            <input placeholder="1234   ****   ****  ****"/>
                                        </div>
                                        <div className="modal__card-others">
                                            <input placeholder="MM/YY"/>
                                            <input placeholder="CVV"/>
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className="modal__final">
                            <button className="btn btn--light" onClick={() => navigation('/end')} >confirm</button>
                        </div>
                    </section>
                </div>
            }
            
        </>
    )
}

export const SplitModal = ({total, myBill}) => {
    const [modal, setModal] = useState(false),
        [bill,setBill] = myBill,
        BillChange = (event) => {
            setBill(event.target.value)
        },
        SplitCancel = () => {
            setModal(!modal)
            setBill(0)          
        };
    return (
        <>
            <button className="btn btn--light" 
                onClick={() => setModal(!modal)}>
                Split bill
            </button>
           { modal && 
                <div className="modal">
                    <div className="overlay"
                        onClick={() => setModal(!modal)}
                        >
                    </div>
                        <section className="modal__content container">
                            <div className="modal__header">
                                <h1>Split bill</h1>
                                <Icon as = {IoMdPaper} my=".2rem" ml="2rem" fontSize={'37px'}/>
                            </div>
                            <div className="modal__price">
                                <h2> Table bill</h2>
                                <h2> &#x20A6;{total.toLocaleString("en-US")}</h2>
                            </div>

                            <div className="modal__text"> 
                                How much would you like to pay?
                            </div>
                                
                            <div className="modal__input">
                                    <input 
                                        type="number"
                                        value={bill}
                                        onChange = {BillChange}
                                        />
                            </div>

                            <div className="modal__buttons">
                                <button className="btn--light btn__modal"
                                    onClick={SplitCancel}>cancel</button>
                                <button className="btn--dark  btn__modal"
                                    onClick={() => setModal(!modal)}>confirm</button>
                            </div>
                        </section>
                    </div>
           }
        </>
    )
}