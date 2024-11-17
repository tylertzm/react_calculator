import "./styles.css"
// Props are the API of your components, i.e. their public interface. State is private to the component.
function App() {
    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand"></div>
                <div className="current-operand"></div>
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