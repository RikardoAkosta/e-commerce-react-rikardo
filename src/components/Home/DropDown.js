import React, { useState } from 'react';
import '../../styles/filters.css';

const DropDown = ({ header, children }) => {

    const [ isOpen, setIsOpen ] = useState(true)

    return (
        <div className={`filter-drop-down ${isOpen ? '' : 'closed'}`}>
            <div className="header" onClick={() => setIsOpen(!isOpen)}>
                <span>
                    {header}
                </span>
                <i className="icon-chevron-down"></i>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default DropDown;