import React from 'react';
import './SearchPanel.css'

const SearchPanel = () => {
    const holderText = "Enter your query here"
    const searchStyle = {
        fontSize: "15px"
    }
    return (
        <input 
            className="form-control search-input" placeholder={holderText} style={searchStyle} />
    )
};

export default SearchPanel;