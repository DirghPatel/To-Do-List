import React,{useState} from 'react';
import './App.css';
import List from './List.js';

const App = () => {
    const [input , setinput] = useState();
    const [item , setitem] = useState([]);

    const event = (e) => {
        setinput(e.target.value)
    }
    const add = () => {
        setitem((previtems) => {
            return [...previtems , input ];
        });
        setinput('');
    }
    const remove = (id) => {
        setitem((previtem)=>{
            return(
                previtem.filter((a, index)=>{
                    return id !== index
                })
            )
        })
    }
    return(
        <div className="main_div">
            <div className="center_div">
                <h1> To Do List</h1>
                <hr />
                <br />
                <input type="text" placeholder="add Activity" onChange={event} value={input}></input>
                <button onClick={add}>+</button>
                <ol>
                    {item.map((value , index) => {
                        return(
                            <List key={index}
                                    id={index}
                                    text={value}
                                    onSelect={remove}/>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}

export default App;