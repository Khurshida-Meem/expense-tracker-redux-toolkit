import React from 'react';
import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";
import { useDispatch } from 'react-redux';
import { editActive, removeTransaction } from '../../features/transaction/transactionSlice';

const Tranjaction = ({transaction}) => {

  const {name, amount, type, id} = transaction || {};
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editActive(transaction));
  }

  const handledelete = () => {
    dispatch(removeTransaction(id))
  }

    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
              <p>৳ {amount}</p>
              <button className="link" onClick={handleEdit} >
                <img className="icon" alt="Edit" src={editImg} />
              </button>
              <button className="link" onClick={handledelete}>
                <img className="icon" alt="Delete" src={deleteImg} />
              </button>
            </div>
          </li>
    );
};

export default Tranjaction;