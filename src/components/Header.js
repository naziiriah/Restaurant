import { Icon } from "@chakra-ui/react"
import {IoIosArrowBack} from "react-icons/io"
import { useNavigate } from "react-router-dom"



export const WelcomeHeader = () => {
    return(
        <header className="welcome__header">
        </header>
    )   
}

export const BillHeader = () => {
    const navigate = useNavigate()
    return(
        <header className="container bill-header header menu_pages">
        <Icon as={IoIosArrowBack} ml="-.5rem" color="#000"
                onClick={() => navigate('/')}/>
            <>bill</>
            <div></div>
        </header>
    )
}
