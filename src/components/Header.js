import { useNavigate } from "react-router-dom"



export const WelcomeHeader = () => {
    return(
        <header className="welcome__header">
        </header>
    )   
}

export const BillHeader = ({title}) => {
    const navigate = useNavigate()
    return(
        <header className="container bill-header header menu_pages">
        <i className="fa-solid fa-angle-left"
                onClick={() => navigate('/menu')}></i>
            <>{title}</>
            <div></div>
        </header>
    )
}
