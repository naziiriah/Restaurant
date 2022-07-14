
import { useEffect, useState } from "react";
import { BillHeader } from "../components/Header"
import { CustomTip, PayModal, SplitModal } from "../components/modal"
import WingedMoney from "../images/money-with-wings.png"
import handdrawncircle from "../images/handdrawn-cricle.png"
import { useSelector } from "react-redux";
import { Icon } from "@chakra-ui/react";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";


const Bills = () => {
    const PurchaseBill = useSelector((state) => state.bill.value),
    Total = PurchaseBill && JSON.parse(localStorage.getItem('Total')),
    [myBill, setMyBill] = useState(0),
    [Waiter, setWaiter] = useState(0),
    [Active, setActive] = useState(''),
    [moreDisplay, SetMoreDisplay] = useState(0),
    overall = myBill === 0? Total  + Number(Waiter) : Total,
    [style, SetStyle] = useState("welcome__tableText1"),
    myfee = myBill === 0 ? overall : (Number(myBill) + Number(Waiter))
    
   useEffect(() => 
        {( myBill > 0) ? SetStyle('welcome__design') : SetStyle("welcome__tableText1")
        } , [myBill])

    const SetDisplay =(string, number) => {
        Active === string ? setWaiter(0) : setWaiter(number)
        Active === string ? setActive('') :setActive(string)  
    }

    const ScrollTip = event =>  {
        // console.log(event.currentTarget.scrollWidth)
        SetMoreDisplay(event.currentTarget.scrollLeft)
        // Checking the scroll Length of the scroll finction
    }

    return(
        <>
            <BillHeader title={'bill'}/>
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
                    <SplitModal total = {overall} myBills={[setMyBill]}/>
                </div>

                <aside className="bill__waiter">

                     <div className="bill__waiter-text">
                        <h2 className="bill__waiter-text-1">Tip the waiter?</h2>
                        <h2 className="bill__waiter-text-2">(This goes directly to the waiter that served you)</h2>
                    </div>

                    <div className="bill__section">
                    {moreDisplay > 40 && <Icon as={MdKeyboardArrowLeft} fontSize={'30px'} mt="2.5rem"/>}
                        <div className="bill__tip-option"  onScroll={ScrollTip}>
                            <div className='bill-tips' id={"tip-0_" + Active} onClick={()=>SetDisplay('active',500)}>
                                <div className={"bill__green0__" +Active }></div>
                                <div className={"bill__img_white"}>
                                    <img src={WingedMoney}  alt='winged money'/>
                                </div>
                                <div className={"bill__amount0_" + Active}>&#x20A6;500</div>
                            </div>
                            
                            <div className='bill-tips' id={"tip-1_" + Active} onClick={()=>SetDisplay('activee',1000)}>
                                <div className={"bill__green1__" +Active }></div>
                                <div className={"bill__img_white"}>
                                    <img src={WingedMoney}  alt='winged money'/>
                                </div>
                                <div className={"bill__amount1_" + Active}>&#x20A6;1,000</div>
                            </div>

                            <div className='bill-tips' id={"tip-2_" + Active} onClick={()=>SetDisplay('actives',2000)}>
                                <div className={"bill__green2__" +Active }></div>
                                <div className={"bill__img_white"}>
                                    <img src={WingedMoney}  alt='winged money'/>
                                </div>
                                <div className={"bill__amount2_" + Active}>&#x20A6;2,000</div>
                            </div>

                            <CustomTip active={[Active, setActive]} Wingedmoney={WingedMoney} waiter={[Waiter,setWaiter]}/>
                        </div>   
                        { moreDisplay < 70 && <Icon as={MdKeyboardArrowRight} fontSize={'30px'} mt="2.5rem" alignItems={'center'}/>}
                    </div>
                       
                </aside>

                <div>
                    <PayModal MyFee={myfee} Total={overall}/> 
                </div>

            </main> 
            <footer className="footer menu_pages"></footer>
        </>
    )
}
export default Bills                          