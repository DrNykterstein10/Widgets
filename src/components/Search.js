import React, { useState } from 'react';

const Search = () => {
    
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="ui segment">
            <div className="ui form">
                <div className="field">
                    <label>Enter Search term: </label>
                    <input 
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value)}} 
                    className="input">
                    </input>
                </div>
            </div>
        </div>
    );
}

export default Search;