// import React, { useState } from 'react';
// import './App.css';
// import List from './List';

// const App = () =>  {

// 	const [input , setinput] = useState();
// 	const [item , setitem] = useState([]);
	
// 	const add = () => {
// 		setitem((previtem) => {
// 			return [...previtem , input];
// 		});
// 		setinput('');
// 	}

// 	const event = (e) => {
// 		setinput(e.target.value);
// 	}

// 	const remove = (id) => {
// 		setitem((previtem) => {
// 			return previtem.filter((arr,index) => {
// 				return index != id ;
// 			})
// 		})
// 	}
// 	return (
// 			<div>
// 				<div className="main_div">
// 					<div className="center_div">
// 						<h1> To Do List </h1>
// 						<hr />
// 						<br />
// 						<input type="text" placeholder="Enter Item" onChange={event} value={input} ></input>
// 						<button onClick={add}>+</button>
// 						<ol>
// 							{item.map((value , index) => {
// 								return <List text={value}
// 											key={index}
// 											id={index}
// 											onSelect={remove}/>;
// 							})}
// 						</ol>
// 					</div>
// 				</div>
// 			</div>
// 		);
// }

// export default App;


import React,{useState} from 'react';
import './App.css';
import List from './List';

const Demo = () => {

	const [item,setitem] = useState();
	const [input,setinput] = useState([]);

	const additem = () =>{
		setinput((previtem) => {
			return [...previtem , item];
		});
		setitem('');
	};

	const event = (e) => {
		setitem(e.target.value)
	}

	const remove = (id) => {
		setinput((previtem) => {
			return previtem.filter((arr,index) => {
				return index != id ;
			})
		})
	};

	return(
		<div>
			<div className="main_div">
				<div className="center_div">
					<h1>To Do List</h1>
					<hr />
					<br />
					<input type="text" placeholder="enter activity" value={item} onChange={event}></input>
					<button onClick={additem}>+</button>
					<ol>
						{input.map((value , index) => {
							return <List text={value}
										key={index}
										id={index}
										onSelect={remove}/>;
						})}
					</ol>
				</div>
			</div>
		</div>
	);
}
export default Demo;