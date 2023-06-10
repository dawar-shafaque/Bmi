import { useState } from "react";
import BmiList from "./BmiList";
import img from "./download.jpeg"
import "./bmi.css"
const Bmi =() => {
    const initialValue = [];
    const [bmiData,setBmiData] = useState(initialValue);

    const [name, setName] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    const onNameChangeHandler = (event)=> {
        setName(event.target.value);
    };

    const onWeightChangeHandler = (event) => {
        setWeight(event.target.value);
      };

    const onHeightChangeHandler = (event) => {
        setHeight(event.target.value);
      };

      const onSubmitHandler = () => {
        const weights = Number(weight);
        const heights = Number(height) / 100;
        const bmiResult = weights / (heights * heights);
        const data = {
          result: bmiResult,
          underNourished: bmiResult < 18 ? "You are undernourished" : bmiResult > 25 ? "You are obese":"Your bmi is normal",
          normalWeight: bmiResult > 18 && bmiResult <25 ? "Your bmi is normal":"",
          obese: bmiResult > 25 ? "You are obese":""
        };
      
        setBmiData([data]); 
        setWeight("");
        setHeight("");
        setName("");
      };
    //   const expenseFormHandler =() => {
    //     setAmount("");
    //     setDate("");
    //     setName("");
    //   }
      const clearDataHandler =()=>{    
        setBmiData([]);
        setWeight("");
        setHeight("");
        setName("");
      }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <p className="text-center fs-2 fw-medium font-monospace">
                        Your BMI Calculator
                        </p>
                        <p>
                        <img src={img} alt="" id="img"/>
                        </p>
                     </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id ="basic-addon1">
                                Name
                            </span>
                            <input type="text" className="form-control" placeholder="name" aria-label="name"
                            aria-describedby="basic-addon1"
                            onChange={(event)=> onNameChangeHandler(event)}
                            value={name}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                    Weight
                            </span>
                            <input
                            type="number"
                            className="form-control"
                            placeholder="weight"
                            id="weight"
                            aria-label="weight"
                            aria-describedby="basic-addon1"
                            onChange={onWeightChangeHandler}
                            value={weight}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                            Height
                            </span>
                            <input
                            type="number"
                            id="height"
                            className="form-control"
                            placeholder="height"
                            aria-label="height"
                            aria-describedby="basic-addon1"
                            onChange={onHeightChangeHandler}
                            value={height}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <button
                            type="button"
                            className="btn btn-dark cont"
                            onClick={onSubmitHandler}>
                            Calculate BMI
                        </button>
                    </div>
                </div>
            </div>
                        
               <div className="container">
               <div className="row">
               <div className="col-md w-50 con">
               {bmiData.length > 0 ? (
                bmiData.map((ele, index, arr) => (
                  <BmiList name={ele.name} bmi={ele.result} underNourished={ele.underNourished} normalWeight={ele.normalWeight} obese={ele.obese}index={index} key={index} />
                ))
              ) : (
                <p className="fs-4 text-center">Enter BMI data</p>
              )}
               </div>
               </div>
               </div>         
   
  

                        
                        
                        
                        

            <hr />
        </>
    );
};
export default Bmi;