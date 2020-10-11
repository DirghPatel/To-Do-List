import React from 'react';

const List = (props) => {
    return (
        <div>
            <div className="todostyle">
                <li>
                    <button onClick={ () => {
                        props.onSelect(props.id);
                    }}>X</button>
                    {props.text}
                </li>
            </div>
        </div>
    )
}

export default List;