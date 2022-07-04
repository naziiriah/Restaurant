import { useEffect, useState } from "react"
import { appetizier, burger, MainDish, Wines } from "./Properties"
import { BiMinus} from "react-icons/bi"
import {IoMdAdd} from "react-icons/io"
import { Icon } from "@chakra-ui/react"
import { useDispatch} from "react-redux"
import { addToCart, removeFromCart, AddQuantity, SubtractQuantity } from "../redux"



export const Appetizer = () => {
    
    return(
        <main className="menu__main menu menu_pages container">
            {
                appetizier.map((state, key) => 
                <div key={state.id}><BasicTheme index={key} state = {state}/></div>
                )
            }
        </main>
    )
}

export const Burger= () => {

    return(
        <main className="menu__main menu container">
            {
                burger.map(
                    (state, index) => <div key={state.id}><BasicTheme index={index} state={state} /></div>
                    )
            }
        </main>
    )
}


export const Wine = () => {
    return(
        <main className="menu__main menu container">
                 {
                    
                    Wines.map(
                    (state, index) => <div key={state.id}><BasicTheme index={index} state={state} /></div>
                    )
            }
        </main>
    )
}

export const Main  = () => {
    return(
        <main className="menu__main menu container">
            {
                MainDish.map(
                    (state, index) => <div key={state.id}><BasicTheme index={index} state={state} /></div>
                    )
            }
        </main>
    )
}

const BasicTheme = ({state, index }) => {
    const [select, SetSelect] = useState(true),
    dispatch  = useDispatch(),
    [value, setValue ]= useState(1);
    const List = JSON.parse(localStorage.getItem('Bills'))
     
    useEffect(() => {
        const ItemExist = List.filter(stat => stat.id === state.id)
        if(ItemExist.length > 0){
            SetSelect(false)
            setValue(ItemExist[0].quantity)
        }
    }, [List, state.id])

    function removeFood(){
        dispatch(removeFromCart({
            id:state.id
        }))
        SetSelect(!select)
        setValue(1)
    }
    function selectFood() {
        dispatch(addToCart({
            id:state.id,
            quantity: value,
            name: state.name,
            price:state.price,
        }))
        SetSelect(!select)
    }
    function add(){

        value === 10 ? setValue(10) : setValue(value + 1)
        dispatch(AddQuantity({
            id:state.id,
            quantity:value
        }))
    }

    function subtract(){

         value === 0 ? setValue(0): setValue(value - 1)
         dispatch(SubtractQuantity({
            id:state.id,
            quantity:value
        }))    
    }

    return(
        <section key={state.id} className="dish">
            <img className="dish__image" src={state.image} alt={state.name}/>
            <div className="dish__text">
                <h2 className="dish__name">{state.name}</h2>
                <p className="dish__descriptions">{state.description}</p>
                <h2 className="dish__price">&#x20A6;{state.price.toLocaleString("en-US")}</h2>
            </div>
            
            {select ?
                <div className="dish__purchase">
                        <button className="dish__select btn--dark btn__menu"  onClick={() => selectFood()}>select</button>
                </div>
                    :
                <div className="dish__purchase">
                    <div className="dish__calculator">

                        <div className="dish__calc" onClick={subtract}>
                            <Icon as={BiMinus } margin="auto" width="100%" />
                        </div>

                        <div className="dish__calc" >
                            {value}                            
                        </div>

                        <div className="dish__calc" onClick={add}>
                            <Icon as={IoMdAdd} />
                        </div>                        
                    </div>
                    <button className="btn--light btn__remove"
                        onClick={() => removeFood()}>
                            remove
                    </button>
                </div>
            }

            <aside className="art">
                <div className="art__line"></div>
                <div className="art__circle"></div>
                <div className="art__line"></div>
            </aside>
        </section>
    )
}