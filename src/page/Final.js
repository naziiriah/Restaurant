import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import finalImage from "../images/success.png"
import { reset } from "../redux";

const Final = () => {
    const navigate = useNavigate(),
    dispatch = useDispatch();
    
    useEffect(() => {
        setTimeout(() => navigate('/'), 2000)
        dispatch(reset())
    }, [dispatch, navigate])
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