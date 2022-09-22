import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CalculateTotal } from "../redux";


const PayByTransfer = () => {
    const navigate = useNavigate(),
    Dispatch  = useDispatch(),
    Location = useLocation(),
    delayResend = 40 * 60,
    [delay, setDelay] = useState(+delayResend),
    minutes = Math.floor(delay / 60),
    seconds = Math.floor(delay % 60),
    bankNumber = 1234567089,
    [copied, setCopied] =useState(false),
    myBill = Location.state.myTotalSplit === 0 ?  Location.state.total : Location.state.myTotalSplit,

    copy = async () => {
    await navigator.clipboard.writeText(bankNumber);
    setCopied(!copied);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setDelay(delay - 1);
        }, 1000);

        if (delay === 0) {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    });
    useEffect(() => {
        if(copied) {
            setTimeout(() => {
                setCopied(false)
            }, 3000)
        }
    },[copied])
    const confirmPayment = () => {
        navigate('/end');
        Dispatch(CalculateTotal({
            total:Location.state.total,
            mySplit: Location.state.mySplit
        }))
    }
    return (
        <>
            <header>
                <div className="container bill-header header">
                <i className="fa-solid fa-angle-left"
                        onClick={() => navigate('/bill')}></i>
                    <>Pay by Bank Transfer</>
                    <div></div>
                </div>
            </header>
            <main>
                <section className="transfer__section">
                    <h3>Transfer <span>&#x20A6;{myBill.toLocaleString("en-US")}</span> to the account details below</h3>
                    <h4 className="transfer__h4">account details</h4>
                    <div className="transfer__account--number" onClick={copy}>
                        <h4>{bankNumber}</h4>
                        {copied ?
                            <div> 
                                <h5>Copied !!</h5>
                            </div> :
                            <div> 
                                <h5>Tap to copy </h5>
                                <i className="fa-regular fa-copy"></i>
                            </div>
                        }                        
                    </div>
                    <div className="transfer__account--property">
                        <h4 >account Name</h4>
                        <h3 >Obonjayer Adiniyi</h3>
                    </div>
                    <div className="transfer__account--property">
                        <h4>bank</h4>
                        <h3>providus bank</h3>
                    </div>
                    <div className="transfer__expires">
                        <div className="transfer__expires--timer">
                            <h4>Account expires in:</h4>
                            <span>{minutes}m:{seconds}s</span>
                        </div>
                        <p className="transfer__expires--note">
                        NB: Please do not save this account number. <br/>This account is for a <span>one time use</span>.
                        </p>
                    </div>
                </section>
                <section className="transfer__button">
                    <button className="btn btn--light" onClick={confirmPayment}>I've transfered the money</button>
                </section>
            </main>
        </>
    )
}

export default PayByTransfer