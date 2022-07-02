import {  useState } from "react"
import {IoMdPaper} from "react-icons/io"
import { Icon } from "@chakra-ui/react"
import { TbArrowsLeftRight,} from "react-icons/tb"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { CalculateTotal } from "../redux"



export const PayModal = ({MyFee, Total}) => {
    const [showTransfer, SetShowtransfer] = useState(false),
    [showCard, setShowCard] = useState(false),
    [modal, setModal] = useState(false),
    navigation = useNavigate();
    let icon = showTransfer ? MdOutlineKeyboardArrowUp : MdOutlineKeyboardArrowDown
    let icon2 = showCard ? MdOutlineKeyboardArrowUp : MdOutlineKeyboardArrowDown
    const Bill = Number(MyFee) ? Number(MyFee) : Total,
    Dispatch = useDispatch(),
    
    confirmPayment = () => {
        navigation('/end')
        Dispatch(CalculateTotal({
            total:Total,
            mySplit: Bill
        }))
    };


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
                        <div className="modal__head">
                            <h1>Pay bill</h1>

                            <h1>&#x20A6;{Bill}</h1>
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
                                            <input placeholder="1234   ****   ****  ****" type={'number'}/>
                                        </div>
                                        <div className="modal__card-others">
                                            <input placeholder="MM/YY" type={'number'}/>
                                            <input placeholder="CVV" type={'number'}/>
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className="modal__final">
                            <button className="btn btn--light" onClick={confirmPayment} >confirm</button>
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
            setBill(Number(event.target.value))
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
                                        autoFocus
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

export const CustomTip = ({active, Wingedmoney, waiter}) =>  {
    const[modal, setModal] = useState(false),
    [Active, setActive] = active,
    [Waiter, setWaiter] = waiter;
    if(Waiter === 0){

        setActive('')
    }
    return(
        <>
        {/* The tip is customised */}
            <div className={"bill__waiter-option-3_" + Active} 
            onClick ={function(){
                            setActive('activez'); 
                            setModal(!modal) ; 
                            setWaiter(0)
                            }}>
                <div className={"bill__green3__" +Active }></div>

                <div className={"bill__img_white"}>
                    <img src={Wingedmoney}  alt='winged money'/>
                </div>

                <div className={"bill__custom_" + Active}>custom amount</div>

                <div className={"bill__amount3_" + Active}>&#x20A6;{Number(Waiter).toLocaleString("en-US")}</div>

            </div>

           { modal &&  <div className="modal">                
                            <div className="overlay"
                                onClick={() => {setModal(!modal); setActive('')}}
                                ></div>

                                <section className="modal__tip">
                                    <label>Create a Tip</label>
                                    <input type={'number'}
                                            value = {Waiter}
                                            onChange={function(e){
                                                setWaiter(e.target.value)
                                            }}/>
                                    <button className="btn btn--light"
                                        onClick={function(){
                                           setModal(!modal) 
                                        }}>
                                            Submit
                                    </button>
                                    <button id='cancel__btn' className="btn btn--dark"
                                        onClick={function(){
                                           setModal(!modal);
                                           setWaiter(0); 
                                           setActive('')
                                        }}>
                                            Cancel
                                    </button>
                                </section>
                            
                        </div>}
        </>
    )
}