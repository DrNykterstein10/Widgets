import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params : {
                    action : 'query',
                    list : 'search',
                    origin : '*',
                    format : 'json',
                    srsearch : searchTerm
                }
            });
            setResults(data.query.search);
        };

        if(searchTerm && !results.length){
            search();
        } else{
            const timeoutId = setTimeout(() => {
                if(searchTerm){
                    search();
                }
            }, 500);
    
            return () => {
                clearTimeout(timeoutId);
            };
        }

    }, [searchTerm]);

    const renderedList = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                       href = {`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Read
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{__html : result.snippet}}></span>
                </div>
            </div>
        );
    });

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
            <div className="ui celled list">
                {renderedList}
            </div>
        </div>
    );
}

export default Search;