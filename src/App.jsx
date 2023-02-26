import React, { useState } from 'react';
import Keypad from './component/Keypad';

function App() {
  const [result, setResult] = useState('');
  
  const handleClear = () => setResult('');
  const handleClick = (value) => {
    setResult(result + value);
  }
  const handleEqual = () => {
    setResult(eval(result))
    console.log(result);
  }
  
  return (
    <div className="bg-zinc-200 w-full h-screen sm:grid sm:place-items-center">
      <div className="flex gap-10 sm:px-4 lg:gap-20 lg:px-20">
        <div id='calculator' className="w-full h-screen flex-none bg-neutral-900 grid grid-cols-4 grid-rows-6 sm:w-[350px] sm:h-calc sm:rounded-xl border-b border-slate-600 overflow-hidden">
          <div className="col-span-4 row-span-1 px-3 py-1">
            <h1 className="text-lg font-semibold text-blue-700 tracking-wide">Kalkulator</h1>
            <input id="result" type="text" value={result} className="bg-neutral-900 w-full h-full text-3xl flex items-end pb-4 font-medium text-white" disabled></input>
          </div>
          <Keypad
            handleClick={handleClick} 
            handleClear={handleClear}
            handleEqual={handleEqual}
          />
        </div>
        <div className="hidden md:flex md:flex-col md:pt-40">
          <h1 className='text-2xl text-blue-700 font-bold'>Simple Calculator</h1>
          <div className="text-slate-500 font-medium">
            <p>Build with React JS and styling with Tailwind CSS.</p>
            <a href="https://github.com/hibatillah/ReactKalkulator" target="_blank" className='link underline'>Get Code Here 🎯</a>
          </div>
          <p className='text-slate-700 text-sm font-medium mt-4'>Made with 🔥 by <a href="http://github.com/hibatillah" target="_blank" rel="noopener noreferrer" className='link'>Hibatillah</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
