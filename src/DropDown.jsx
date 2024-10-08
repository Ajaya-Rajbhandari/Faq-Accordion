import React, { useEffect, useRef, useState } from 'react'
import plusIcon from "./assets/images/icon-plus.svg"
import minusIcon from "./assets/images/icon-minus.svg"
import "./DropDown.css"
const DropDown = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () =>{
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) =>{
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)){
            setIsOpen(false);
        }
    };

    useEffect(()=>{
        document.addEventListener('mousedown', handleClickOutside);
        return () =>{
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },[]);
  return (
    <div className='question-answer' ref={dropdownRef}>
        <div className='question-container'>
        <div className='question'>{question}</div>
        <button className='dropdown-toggle' onClick={toggleDropdown}>
            <img src={isOpen ? minusIcon : plusIcon} alt="Toggle Icon"/>
        </button>
        </div>
        <div className={`answer ${isOpen ? 'show' : 'hide'}`}>
            {answer}
        </div>
    </div>
  );
};

export default DropDown;