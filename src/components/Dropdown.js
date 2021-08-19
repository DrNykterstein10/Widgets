import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({options, selectedOption, onSelectOption}) => {

    const [open, setOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        }, {capture : true});

        
    }, []);

    const renderedOptions = options.map((option) => {
        if(option.value === selectedOption.value){
            return null;
        }
        return (
            <div 
            key={option.value}
            className="item"
            onClick = {() => onSelectOption(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref = {ref} className="ui form">
            <div className="field">
                <label className="label">Choose a color</label>
                <div 
                onClick={()=>setOpen(!open)} 
                className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selectedOption.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;