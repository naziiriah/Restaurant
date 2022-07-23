import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import finalImage from "../images/success.png"

const Final = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        setTimeout(() => navigate('/'), 7000)
    }, [ navigate])
    return (
        <>
            <header className=" container final__header"></header>
            <main className="main__final container">
                <section className="final__section">
                    <img className="final__image" src={finalImage} alt="final_image_goodluck"></img>
                </section>
                <section className="final__illustration">
                    <h2>Payment Successful!!</h2>
                    <iframe title="drake" src="https://giphy.com/embed/5xaOcLDE64VMF4LqqrK" 
                    frameBorder="0" allowFullScreen className="final__giphy"></iframe>
                </section>
            </main>
            <footer className="footer final"></footer>
        </>
    )
}

export default Final