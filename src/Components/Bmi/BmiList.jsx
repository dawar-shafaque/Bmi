import React from "react";
import "./bmi.css"
const ExpenseList = ({ name,bmi,underNourished,normalWeight,obese,index }) => {
  return (
    <>
      <div className="container list-group con">
        <div className="row mt-2 mb-2 gap-2">
          <div className="col-md">
            <div className="d-flex justify-content-between con" key={index}>
              <p id="under">{underNourished}</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
