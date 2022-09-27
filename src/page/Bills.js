
import { useEffect, useRef, useState } from "react";
import { BillHeader } from "../components/Header"
import { CustomTip, PayModal, SplitModal } from "../components/Modal"
import MoneyIcon from "../images/33-337047_transparent-model-icon-png-give-money-illustration-png.png"
import handdrawncircle from "../images/handdrawn-cricle.png"
import { useSelector } from "react-redux";
import { Icon } from "@chakra-ui/react";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import { HomeLightBTN } from "../components/Buttons";
import EmptyImage from "../images/food-delivery-icon-set-transportation-vector-32156989 1.png"


const Bills = () => {
    const PurchaseBill = useSelector((state) => state.bill.value),
    Total = useSelector((state) => state.bill.Total),
    [myBill, setMyBill] = useState(0),
    [Waiter, setWaiter] = useState(0),
    [Active, setActive] = useState(''),
    [moreDisplay, SetMoreDisplay] = useState(0),
    overall = myBill === 0? Total  + Number(Waiter) : Total,
    [style, SetStyle] = useState("welcome__tableText1"),
    myfee = myBill === 0 ? overall : (Number(myBill) + Number(Waiter)),
    scrollRef = useRef(null);
    
   useEffect(() => 
        {( myBill > 0) ? SetStyle('welcome__design') : SetStyle("welcome__tableText1")
        } , [myBill])

    const SetDisplay =(string, number) => {
        Active === string ? setWaiter(0) : setWaiter(number)
        Active === string ? setActive('') :setActive(string)  
    }

    const ScrollTip = event =>  {
        SetMoreDisplay(event.currentTarget.scrollLeft)
    }

    const ScrollButton = (direction) => {
        if(direction){
            scrollRef.current.scrollLeft -= 300;
        }else{
            scrollRef.current.scrollLeft += 300
        }
    }

    return(
        <>
            <BillHeader title={'bill'}/>
           { Total > 0 ?
             <main className="container bill menu_pages">
               
                <section className=" bill__header">

                        <div className="bill__flex-title">
                            <h2 className=" bill__title bill__title_1">qty</h2>
                            <h2 className=" bill__title start bill__title_2">item</h2>
                            <h2 className=" bill__title end bill__title_3">price (&#x20A6;)</h2>                    
                        </div>
                       { PurchaseBill.map((state) => (
                                    <div className="bill__items" key={state.id}>
                                        <h3 className="bill__item bill__title_1">{state.quantity}</h3>
                                        <h3 className="bill__item bill__title_2">{state.name}</h3>
                                        <h3 className="bill__item bill__title_3">{String(state.price.toLocaleString("en-US"))+ '.00'}</h3>
                                    </div>
                            )) 
                        }
                </section>
                <section className="bill__content">
                   
                    <div className="bill__flex">
                        <div className="welcome__tableText1" >Table bill</div>

                            <div className={"welcome__tablePrice1__" + style}>
                                <h2>&#x20A6;{String(overall.toLocaleString("en-US")) + '.00'}</h2>
                                <img className ={style} src={handdrawncircle} alt={'handrawn circle'}/> 
                            </div>

                    </div>
                {  myBill > 0 &&
                    <div className="bill__flex">

                        <div className={"welcome__tableText1"}>Your split</div>
                        <div className="welcome__tableText2">
                            <h2> &#x20A6;{String(myfee.toLocaleString("en-US")) + '.00'} </h2>
                            <img src={handdrawncircle} alt={'handrawn circle'}/>

                        </div>
                    </div>
                }                           
                </section>

                <div>
                    <SplitModal total = {overall} myBills={[setMyBill]} OriginalTotal = {Total}/>
                </div>

                <aside className="bill__waiter">

                     <div className="bill__waiter-text">
                        <h2 className="bill__waiter-text-1">Tip the waiter?</h2>
                        <h2 className="bill__waiter-text-2">(This goes directly to the waiter that served you)</h2>
                    </div>

                    <div className="bill__section">
                    {moreDisplay > 40 && <div className="arrowState"><i class="fa-solid fa-chevron-left icon" onClick={() => ScrollButton(true)} ></i> </div>}
                        <div className="bill__tip-option"  onScroll={ScrollTip} ref={scrollRef}>
                            <div className='bill-tips' id={"tip-0_" + Active} onClick={()=>SetDisplay('active',500)}>
                                <div className={"bill__green0__" +Active }></div>
                                <div className={"bill__img_white"}>
                                    <img src={MoneyIcon}  alt='winged money'/>
                                </div>
                                <div className={"bill__amount0_" + Active}>&#x20A6;500</div>
                            </div>
                            
                            <div className='bill-tips' id={"tip-1_" + Active} onClick={()=>SetDisplay('activee',1000)}>
                                <div className={"bill__green1__" +Active }></div>
                                <div className={"bill__img_white"}>
                                    <img src={MoneyIcon}  alt='winged money'/>
                                </div>
                                <div className={"bill__amount1_" + Active}>&#x20A6;1,000</div>
                            </div>

                            <div className='bill-tips' id={"tip-2_" + Active} onClick={()=>SetDisplay('actives',2000)}>
                                <div className={"bill__green2__" +Active }></div>
                                <div className={"bill__img_white"}>
                                    <img src={MoneyIcon}  alt='winged money'/>
                                </div>
                                <div className={"bill__amount2_" + Active}>&#x20A6;2,000</div>
                            </div>

                            <CustomTip active={[Active, setActive]} Wingedmoney={MoneyIcon} waiter={[Waiter,setWaiter]}/>
                        </div>   
                        { moreDisplay < 70 && <div className="arrowState"><i class="fa-solid fa-chevron-right icon" onClick={() => ScrollButton(false)}></i>
                        </div>}
                    </div>
                       
                </aside>

                <div>
                    <PayModal MyFee={myfee} Total={overall} PureBill ={myBill} /> 
                </div>
                <div className="art">

                </div>
            </main>
            : 
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
        </main>}
            <footer className="footer menu_pages"></footer>
        </>
    )
}
export default Bills                          