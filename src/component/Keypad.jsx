const Keypad = ({handleClick, handleClear, handleEqual}) => {
    return (
        <>
            <div className="col-span-3 row-span-5 grid grid-cols-3 divide-y divide-x divide-slate-600 select-none">
                <div className="unique number border-t border-l border-slate-600" onClick={handleClear}>C</div>
                <div className="keypad number" onClick={() => handleClick('-')}>-/+</div>
                <div className="keypad number" onClick={() => handleClick('7')}>7</div>
                <div className="keypad number" onClick={() => handleClick('8')}>8</div>
                <div className="keypad number" onClick={() => handleClick('9')}>9</div>
                <div className="keypad number" onClick={() => handleClick('4')}>4</div>
                <div className="keypad number" onClick={() => handleClick('5')}>5</div>
                <div className="keypad number" onClick={() => handleClick('6')}>6</div>
                <div className="keypad number" onClick={() => handleClick('1')}>1</div>
                <div className="keypad number" onClick={() => handleClick('2')}>2</div>
                <div className="keypad number" onClick={() => handleClick('3')}>3</div>
                <div className="unique number" onClick={() => handleClick('0')}>0</div>
                <div className="keypad number" onClick={() => handleClick('.')}>,</div>
            </div>
            <div className="colspan-1 row-span-5 grid divide-y divide-slate-400 select-none">
                <div className="keypad symbol" onClick={() => handleClick('/')}>÷</div>
                <div className="keypad symbol" onClick={() => handleClick('*')}>x</div>
                <div className="keypad symbol" onClick={() => handleClick('-')}>-</div>
                <div className="keypad symbol" onClick={() => handleClick('+')}>+</div>
                <div className="keypad symbol" onClick={handleEqual}>=</div>
            </div>
        </>
    )
}

export default Keypad;