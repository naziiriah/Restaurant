import {   useEffect, useState } from "react"
import {IoMdPaper} from "react-icons/io"
import { Icon } from "@chakra-ui/react"
import { TbArrowsLeftRight, } from "react-icons/tb"
import { useNavigate } from "react-router-dom"
import CurrencyInput from 'react-currency-input-field';
import doubleStroke from "../images/double.png"
import {VscCreditCard} from "react-icons/vsc"
import {FcMoneyTransfer} from  "react-icons/fc"

export const PayModal = ({MyFee, Total, PureBill}) => {
    const [modal, setModal] = useState(false),
    navigation = useNavigate();
    const Bill = Number(MyFee) ? Number(MyFee) : Total,
    
    confirmPayment = (type) => {
       if(type === 'transfer'){
            navigation("/pay-by-transfer", {state:{
                total:Total,
                mySplit: PureBill
            }})
       }else if(type === "card"){
        navigation("/pay-with-card", {state:{
            total:Total,
            mySplit: PureBill
        }})
       }
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
                    <section className="modal__content ">
                        <div className="container">
                        <div className="modal__head">
                            <h1>Pay bill</h1>       
                            <h2>&#x20A6;{String(Bill.toLocaleString("en-US")) + '.00'}</h2>
                        </div>

                        <div className="modal__transfer ">

                            <div className="modal__box" onClick={() =>confirmPayment('transfer')}>
                                <h3>Pay by bank transfer</h3>
                                <Icon as={TbArrowsLeftRight} mt="0.4rem" ml="1rem" fontSize={'20px'}/>                                                                
                            </div>

                        </div>
                        <div className="modal__card ">
                            <div className="modal__box" onClick={() =>confirmPayment('card') }>
                                <h3>Pay with card</h3>
                                <Icon as={VscCreditCard} mt="0.4rem" ml="1rem" fontSize={'20px'}/>                                                                
                            </div>
                        </div>
                        <div className="modal__final ">
                        </div>
                        </div>
                    </section>
                </div>
            }
            
        </>
    )
}

export const SplitModal = ({total, myBills, OriginalTotal}) => {
    const [modal, setModal] = useState(false),
        [setMyBill] = myBills,
        [Value, setValue] = useState(),
        SplitCancel = () => {
            setModal(!modal)
            setMyBill(0) 
            setValue(0)         
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
                        <section className="modal__content">
                            <div className="container">
                            <div className="modal__header">
                                <h1>Split bill</h1>
                                <Icon as = {IoMdPaper} my=".2rem" ml="2rem" fontSize={'37px'}/>
                            </div>
                            <div className="modal__price">
                                <h2> Table bill</h2>
                                <h2> &#x20A6;{String(OriginalTotal.toLocaleString("en-US")) + '.00'} </h2>
                            </div>

                            <div className="modal__text"> 
                                <h2>How much would you like to pay?</h2>
                            </div>
                                
                            <div className="modal__input">
                                <div>
                                  <CurrencyInput 
                                        prefix="&#x20A6;"
                                        className="input__split"
                                        placeholder="&#x20A6;0.00"
                                        name="bill"
                                        autoFocus
                                        pattern="[0-9]*" 
                                        inputMode="numeric"
                                        type={'text'}
                                        defaultValue={Value}
                                        onValueChange={(value) => setValue(value)}
                                        />
                                </div>
                                    <img src={doubleStroke} alt="double_stroke"/>
                            </div>

                            <div className="modal__buttons">
                                <button className="btn--light btn__modal"
                                    onClick={SplitCancel}>cancel</button>
                                <button className="btn--dark  btn__modal"
                                    onClick={() => {setModal(!modal); setMyBill(Number(Value));}}>confirm</button>
                            </div>
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
            SetCustomTip(0.00)
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

           { modal &&  
           
           <div className="modal">                
                <div className="overlay"
                    onClick={() => {setModal(!modal); setActive(''); SetCustomTip(0)}}
                    >
                </div>
                <section className="modal__content">
                    <div className="container">
                    <div className="modal__header">
                        <h1>Tip Waiter?</h1>
                        <Icon as = {FcMoneyTransfer} my=".2rem" ml="2rem" mt=".5rem" fontSize={'37px'}/>
                    </div>

                    <div className="modal__text"> 
                        <h2>
                            This tip goes directly
                            directly to the <br/>    
                            waiter serving you
                        </h2>
                    </div>

                    <div className="modal__input">
                        <div>
                            <CurrencyInput 
                                prefix="&#x20A6;"
                                className="input__split"
                                placeholder="&#x20A6;0.00"
                                name="bill"
                                autoFocus
                                pattern="[0-9]*" 
                                inputMode="numeric"
                                type={'text'}
                                defaultValue={customTip}
                                onValueChange={
                                    (value) => {
                                        SetCustomTip(value)}
                                    }
                            />
                        </div>
                        <img src={doubleStroke} alt="double_stroke"/>
                    </div>
                    <div className="custom__buttons">
                        <button className="btn--light btn__custom"
                            onClick={function(){
                            setModal(!modal);
                            setWaiter(0); 
                            SetCustomTip(0);
                            setActive('')
                            }}>
                                Cancel
                        </button>
                        <button className="btn--dark btn__custom"
                            onClick={function(){
                            setModal(!modal);
                            setWaiter(customTip) 
                            }}>
                                Submit
                        </button>
                    </div>
                    </div>
                   
                </section>                            
            </div>
            }
        </>
    )
}