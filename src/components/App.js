import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

const items = [
    {
        title : 'Who is known as the love and sorrow of chess',
        content : 'Paul Morphy'
    },
    {
        title : 'Who was the first Chess World Champion?',
        content : 'Emmanuel Lasker'
    },
    {
        title : 'Who are the top 3 chess players in history?',
        content : 'Bobby Fisher, Garry Kasparov and Magnus Carlsen'
    }    
]

const App = () => {
    return (
        <div className="ui container">
            <Search />
        </div>
    );
}

export default App;