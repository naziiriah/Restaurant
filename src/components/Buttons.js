import { useNavigate } from "react-router-dom"



export const LightBtn = ({text}) => {
    return (
        <button className="btn btn--light">
            {text}
        </button>
    )
}

export const DarkBtn = ({text}) => {
    const navigate = useNavigate()
    return (
        <button className="btn btn--dark"
            onClick={() => navigate('/end')}>
            {text}
        </button>
    )
}

export const HomeDarkBTN = ({text}) => {
    const navigation = useNavigate()
    return(
        <button className="btn__home btn--dark"
            onClick={() => navigation('/bill')}>
            {text}
        </button>
    )
}

export const HomeLightBTN = ({text}) => {
    const navigation = useNavigate()
    return(
        <button className="btn__home btn--light"
            onClick={() => navigation('/menu')}>
            {text}
        </button>
    )
}