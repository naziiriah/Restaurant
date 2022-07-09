import {   useEffect, useState } from "react"
import {IoMdPaper} from "react-icons/io"
import { Icon } from "@chakra-ui/react"
import { TbArrowsLeftRight, } from "react-icons/tb"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { CalculateTotal } from "../redux"
import CurrencyInput from 'react-currency-input-field';
import doubleStroke from "../images/double.png"



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
                            <h2>&#x20A6;{String(Bill.toLocaleString("en-US")) + '.00'}</h2>
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
                            { showCard && 
                                <button className="btn btn--dark" onClick={confirmPayment} >Proceed</button>}
                        </div>
                    </section>
                </div>
            }
            
        </>
    )
}

export const SplitModal = ({total, myBills}) => {
    const [modal, setModal] = useState(false),
        [setMyBill] = myBills,
        [Value, setValue] = useState(),
        SplitCancel = () => {
            setModal(!modal)
            setMyBill(0)          
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
                                <h2> &#x20A6;{String(total.toLocaleString("en-US")) + '.00'} </h2>
                            </div>

                            <div className="modal__text"> 
                                <h2>How much would you like to pay?</h2>
                            </div>
                                
                            <div className="modal__input">
                                <div>
                                <span>
                                 &#x20A6;
                                  <CurrencyInput 
                                        className="input__split"
                                        placeholder="0.00"
                                        name="bill"
                                        autoFocus
                                        pattern="[0-9]*" 
                                        inputMode="numeric"
                                        type={'text'}
                                        defaultValue={Value}
                                        onValueChange={(value) => setValue(value)}
                                        />
                                 </span>
                                   
                                </div>
                                    <img src={doubleStroke} alt="double_stroke"/>
                            </div>

                            <div className="modal__buttons">
                                <button className="btn--light btn__modal"
                                    onClick={SplitCancel}>cancel</button>
                                <button className="btn--dark  btn__modal"
                                    onClick={() => {setModal(!modal); setMyBill(Number(Value));}}>confirm</button>
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
    [customTip, SetCustomTip] = useState(),
    [Waiter,setWaiter] = waiter;

    useEffect(() => {
        if(Waiter !== customTip){
            SetCustomTip(0)
        }
    }, [Waiter])

    return(
        <>
        {/* The tip is customised */}
            <div id={"tip-3_" + Active}
                className='bill-tips'
                onClick ={function(){
                            setActive('activez'); 
                            setModal(!modal) ; 
                            setWaiter(0)
                            }}>
                <div className={"bill__green3__" +Active }></div>

                <div className={"bill__img_white"}>
                    <img src={Wingedmoney}  alt='winged money'/>
                </div>

                <div className={"bill__custom_" + Active}>custom</div>

                <div className={"bill__amount3_" + Active}>&#x20A6;{Number(customTip).toLocaleString("en-US")}</div>

            </div>

           { modal &&  <div className="modal">                
                            <div className="overlay"
                                onClick={() => {setModal(!modal); setActive('')}}
                                ></div>

                                <section className="modal__tip">
                                    <label>Enter Tip amount</label>
                                    <CurrencyInput 
                                            pattern="[0-9]*" 
                                            inputMode="numeric"
                                            type={'text'}
                                            autoFocus
                                            name="custom tip"
                                            defaultValue = {customTip}
                                            onValueChange={
                                                (value) => {
                                                    SetCustomTip(value)}
                                    }/>
                                <div className="custom__buttons">
                                    <button className="btn--dark btn__custom"
                                        onClick={function(){
                                           setModal(!modal);
                                           setWaiter(customTip) 
                                        }}>
                                            Submit
                                    </button>
                                    <button className="btn--light btn__custom"
                                        onClick={function(){
                                           setModal(!modal);
                                           setWaiter(0); 
                                           setActive('')
                                        }}>
                                            Cancel
                                    </button>
                                </div>
                                </section>
                            
                        </div>}
        </>
    )
}