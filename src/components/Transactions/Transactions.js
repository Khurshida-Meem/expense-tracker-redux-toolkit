import React from "react";
import Tranjaction from "./Transaction";

const Tranjactions = () => {
  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>
          <Tranjaction />
        </ul>
      </div>
    </>
  );
};

export default Tranjactions;
