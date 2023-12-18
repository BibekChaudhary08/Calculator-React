import React, { useState } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";

const InputField = () => {
  const[input, setInput] = useState('');
const handleButtonClicked = (value)=>{
  setInput((prevInput)=> prevInput + value);
}
const handleClear = ()=>{
  setInput('');
}
const handleDelete = ()=>{
  setInput((prevInput)=> prevInput.slice(0, -1));
}
const handleTotal = ()=>{
  try{
      setInput(eval(input).toString());
  }
  catch(error){
      setInput('Error');
  }
}
  return (
    <>
      <div className="container">
        <div className="row">

          <div className="all">
          <div className="col-sm-12">
            <div className="input-group mb-3">
              <input type="text" value={input} className="form-control" aria-describedby="basic-addon1" />
            </div>
          </div><br></br>

          <div className="col-sm-12">
            <button type="button" className="btn firstbtn btn-light" onClick={()=> handleClear()}>C</button>
            <button type="button" className="btn btn-light" onClick={()=> handleButtonClicked('(')}>(</button>
            <button type="button" className="btn btn-light" onClick={()=> handleButtonClicked(')')}>)</button>
            <button type="button" className="btn redcolor btn-light" onClick={()=> handleDelete()}><FaDeleteLeft size={20} color='black'/></button>
          </div>

          <div className="col-sm-12">
            <button type="button" className="btn btn-light" onClick={()=> handleButtonClicked('7')}>7</button>
            <button type="button" className="btn btn-light" onClick={()=> handleButtonClicked('8')}>8</button>
            <button type="button" className="btn btn-light" onClick={()=> handleButtonClicked('9')}>9</button>
            <button type="button" className="btn yellowcolor btn-light" onClick={()=> handleButtonClicked('*')}>*</button>
          </div>

          <div className="col-sm-12">
            <button type="button" className="btn btn-light" onClick={()=> handleButtonClicked('4')}>4</button>
            <button type="button" className="btn btn-light" onClick={()=> handleButtonClicked('5')}>5</button>
            <button type="button" className="btn btn-light" onClick={()=> handleButtonClicked('6')}>6</button>
            <button type="button" className="btn yellowcolor btn-light" onClick={()=> handleButtonClicked('-')}>-</button>
          </div>

          <div className="col-sm-12">
            <button type="button" className="btn btn-light" onClick={()=> handleButtonClicked('1')}>1</button>
            <button type="button" className="btn btn-light" onClick={()=> handleButtonClicked('2')}>2</button>
            <button type="button" className="btn btn-light" onClick={()=> handleButtonClicked('3')}>3</button>
            <button type="button" className="btn yellowcolor btn-light" onClick={()=> handleButtonClicked('+')}>+</button>
          </div>

          <div className="col-sm-12">
            <button type="button" className="btn btn-light" onClick={()=> handleButtonClicked('0')}>0</button>
            <button type="button" className="btn btn-light" onClick={()=> handleButtonClicked('.')}>.</button>
            <button type="button" className="btn buttongreen btn-light" onClick={()=> handleTotal()}>=</button>
            <button type="button" className="btn yellowcolor btn-light" onClick={()=> handleButtonClicked('/')}>/</button>
          </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default InputField