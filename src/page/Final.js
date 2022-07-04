import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import finalImage from "../images/success.png"

const Final = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        setTimeout(() => navigate('/'), 2000)
    }, [ navigate])
    return (
        <>
            <header className=" container final__header"></header>
            <main className="main__final container">
                <section className="final__section">
                    <img className="final__image" src={finalImage} alt="final_image_goodluck"></img>
                </section>
            </main>
            <footer className="footer final"></footer>
        </>
    )
}

export default Final