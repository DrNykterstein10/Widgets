import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({label, options, selectedOption, onSelectOption}) => {

    const [open, setOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {

        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick, {capture : true});

        return (() => {
            document.body.removeEventListener('click', onBodyClick, {capture:true});
        })
        
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
                <label className="label">{label}</label>
                <div 
                onClick={()=>setOpen(!open)} 
                className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selectedOption.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                    
                </div>
                {/* <div style={{color:`${selectedOption.value}`}}>{`This text is ${selectedOption.label}`}</div> */}
            </div>
        </div>
    );
}

export default Dropdown;