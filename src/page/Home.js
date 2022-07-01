import { HomeDarkBTN, HomeLightBTN, } from "../components/Buttons"
import  { WelcomeHeader } from "../components/Header"

const Home = () => {
    return(
        <>
        <WelcomeHeader/>
        <main className="welcome__main ">
            <div className="welcome__main container">
                <h1 className="welcome__title">sydney's dome</h1> 
                <p className="welcome__extras">
                    Your one stop for oriented meals,
                    <br/>
                    drinks, and cocktails.
                </p>
                <article className="welcome__article">
                    <HomeLightBTN text={'view menu'}/>
                    <div className="welcome__tableBill">
                        <div className="welcome__tableText1">Table Bill</div>
                        <div className="welcome__tableText2">&#x20A6;0.00</div>
                        {/* replace the dollar sign with naira */}
                    </div>
                    <HomeDarkBTN text={'view bill'}/>
                </article>
                
           </div>
        </main>
        <footer className="footer menu_pages"></footer>
        </>
    )
}

export default Home



