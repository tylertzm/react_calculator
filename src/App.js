import { useReducer } from "react"
import "./styles.css"

const ACTIONS = {
    ADD_DIGIT : 'add-digit',
    CHOOSE__OPERATION : 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate'
}

function reducer(state, { type, payload}) {
    switch(type){
        case ACTIONS.ADD_DIGIT:
            return{
                ...state,
                //currentOperand: `${currentOperand || ""}${payload.digit}`
            }
        default:
            return{
                
            }
    }
}

// Props are the API of your components, i.e. their public interface. State is private to the component.
function App() {
    const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})

    dispatch({  type: ACTIONS.ADD_DIGIT, payload: {digit: 1}})
    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">{previousOperand} {operation}</div>
                <div className="current-operand">{currentOperand}</div>
            </div>
            
            <button className="span-two">AC</button>
            <button className="">DEL</button>
            <button className="">÷</button>
            <button className="">1</button>
            <button className="">2</button>
            <button className="">3</button>
            <button className="">*</button>
            <button className="">4</button>
            <button className="">5</button>
            <button className="">6</button>
            <button className="">+</button>
            <button className="">7</button>
            <button className="">8</button>
            <button className="">9</button>
            <button className="">-</button>
            <button className="">.</button>
            <button className="">0</button>
            <button className="span-two">=</button>
            

        </div>
    )
}

export default App