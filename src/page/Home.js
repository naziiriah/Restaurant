import { HomeDarkBTN, HomeLightBTN, } from "../components/Buttons"
import  { WelcomeHeader } from "../components/Header"

const Home = () => {
    const Total = JSON.parse(localStorage.getItem('Total'))
    return(
        <>
        <WelcomeHeader/>
        <main className="welcome__main ">

            <div >

                <h1 className="welcome__title">sydney's dome</h1> 
              
                <p className="welcome__extras">
                    Your one stop for oriented meals,
                    <br/> drinks, and cocktails.
                </p>

                <article className="welcome__article">
                    <HomeLightBTN text={'view menu'}/>

                    <div className="welcome__tableBill">
                        <h2 className="welcome__tableText1">Table bill</h2>
                        <h2 className="welcome__tableText1">&#x20A6;{String(Number(Total).toLocaleString("en-US")) + '.00'}</h2>
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



