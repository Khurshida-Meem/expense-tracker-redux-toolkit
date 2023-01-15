import React from 'react';
import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";

const Tranjaction = () => {
    return (
        <li className="transaction income">
            <p>Earned this month</p>
            <div className="right">
              <p>৳ 100</p>
              <button className="link">
                <img className="icon" alt="Edit" src={editImg} />
              </button>
              <button className="link">
                <img className="icon" alt="Delete" src={deleteImg} />
              </button>
            </div>
          </li>
    );
};

export default Tranjaction;