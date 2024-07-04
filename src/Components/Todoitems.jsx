import React from 'react';
import PropTypes from 'prop-types';
import tick_icon from '../assets/tick_icon.png'
import delete_icon from '../assets/delete_icon.png'
import not_tick_icon from '../assets/not_tick_icon.png'

const Todoitems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className="flex items-center my-3 gap-2">
        <div onClick={() => {toggle(id)}} className="flex flex-1 items-center cursor-pointer">
            <img src={isComplete ? tick_icon : not_tick_icon} alt="" className="w-7"/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 
              ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>
        <img onClick={() => {deleteTodo(id)}} src={delete_icon} alt="" className="w-7 cursor-pointer"/>
      
    </div>
  )
}

Todoitems.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  isComplete: PropTypes.bool.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default Todoitems