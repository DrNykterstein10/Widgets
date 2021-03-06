import React, {useState} from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

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

const options = [
    {
        label : 'Red',
        value : 'red'
    },
    {
        label : 'Green',
        value : 'green'
    },
    {
        label : 'Blue',
        value : 'blue'
    }
]

const App = () => {

    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        
        <div className="ui container">
            <Header/>
            <Route path='/'>
                <Accordion items={items}/>
            </Route>
            <Route path='/search'>
                <Search/>
            </Route>
            <Route path='/dropdown'>
                <Dropdown 
                    selectedOption = {selectedOption}
                    onSelectOption = {setSelectedOption}
                    options ={options}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    );
};

export default App;