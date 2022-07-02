
import { useState } from "react";
import {  HomeLightBTN} from "../components/Buttons"
import { BillHeader } from "../components/Header"
import { CustomTip, PayModal, SplitModal } from "../components/modal"
import WingedMoney from "../images/money-with-wings.png"

const Bills = () => {
    // Arrange the bill content and button
    const PurchaseBill = JSON.parse(localStorage.getItem('Bills')),
    Total = PurchaseBill && JSON.parse(localStorage.getItem('Total')),
    myBill = useState(),
    [Waiter, setWaiter] = useState(0),
    [Active, setActive] = useState(''),
    overall = Total  + Number(Waiter),
    myfee = Number(Waiter) + Number(myBill[0])
    

    function SetDisplay (string, number){
        Active === string ? setWaiter(0) : setWaiter(number)
        Active === string ? setActive('') :setActive(string)  
        // () =>{setWaiter(1000); setActive('activee')
    }

    return(
        <>
            <BillHeader/>
            { PurchaseBill && PurchaseBill.length > 0 ? 
                <main className="container bill menu_pages">
               
                <section className=" bill__header">

                        <div className="bill__flex-title">
                            <h2 className=" bill__title bill__title_1">qty</h2>
                            <h2 className=" bill__title start bill__title_2">item</h2>
                            <h2 className=" bill__title end bill__title_3">price(&#x20A6;)</h2>                    
                        </div>
                       { PurchaseBill.map((state) => (
                                    <div className="bill__items" key={state.id}>
                                        <h3 className="bill__item bill__title_1">{state.quantity}</h3>
                                        <h3 className="bill__item bill__title_2">{state.name}</h3>
                                        <h3 className="bill__item bill__title_3">{state.price.toLocaleString("en-US")}</h3>
                                    </div>
                            )) 
                        }
                </section>
                <section className="bill__content">
                   
                    <div className="bill__flex">
                        <div className="welcome__tableText1">Table bill</div>
                        <div className="welcome__tableText2">&#x20A6;{overall.toLocaleString("en-US")}</div>
                    </div>
                {  myBill[0] > 0 &&
                    <div className="bill__flex">
                        <div className="welcome__tableText1">Your split</div>
                        <div className="welcome__tableText2">&#x20A6;{myBill[0].toLocaleString("en-US")}</div>
                    </div>
                }                           
                </section>

                <div>
                    <SplitModal total = {overall} myBill={myBill}/>
                </div>

                <aside className="bill__waiter">
                    <div className="bill__waiter-text">
                        <h2 className="bill__waiter-text-1">Tip the waiter?</h2>
                        <h2 className="bill__waiter-text-2">(This goes directly to the waiter that served you)</h2>
                    </div>
                    <div className="bill__waiter-option">

                        <div className={"bill__waiter-option-1_" + Active} onClick ={() => SetDisplay('activee', 1000)}>
                        <div className={"bill__green1__" +Active }></div>
                            <div className={"bill__img_white"}>
                                <img src={WingedMoney}  alt='winged money'/>
                            </div>
                            <div className={"bill__amount1_" + Active}>&#x20A6;1,000</div>
                        </div>

                        <div className={"bill__waiter-option-2_" + Active } 
                                onClick ={() => SetDisplay('actives', 2000)}>
                            <div className={"bill__green2__" +Active }></div>
                            <div className={"bill__img_white" }>
                                <img src={WingedMoney}  alt='winged money'/>
                            </div>
                            <div className={"bill__amount2_" + Active}>&#x20A6;2,000</div>
                        </div>

                        <CustomTip active={[Active, setActive]} Wingedmoney={WingedMoney} waiter={[Waiter, setWaiter]}/>
                    </div>
                </aside>

                <div>
                    <PayModal MyFee={myfee} Total={overall}/> 
                </div>

                </main> :
                <main className="container bill menu_pages">
                    <section>
                        <div className="bill__empty"> 
                            <h1 className="bill__emptyText"> your bill is empty</h1>

                            <h2 className="bill__emptyDirective">Kindly visit the menu to select Wine or Appetizers that suit your taste</h2>

                            <HomeLightBTN text={'view menu'}/>
                        </div>
                    </section>
                </main>
            }
            <footer className="footer menu_pages"></footer>
        </>
    )
}
export default Bills                          