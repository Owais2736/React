// import { useState, useEffect } from "react";
// function mainComponent() {
//   // useState contain two argument 1:variable to hold the value 2:function to update the value
//   //useState is use to refresh the page
//   const [count, setCount] = useState(0)

// // useeffect contain two argument 1:call back 2:dependency array
// //useeffect with a dependency array empty sirf 1 he dafa chalay ga
// useEffect(() => {
// console.log('mounted');
// },[])

// // useEffect(() => {
// //   console.log('count updated');
// //   },[count])




// const handleInc = () => {
//   setCount(count + 1)
//   console.log(count);
// }
// return (
//     <div>
//     <h1>heading</h1>
//     <button onClick={handleInc}>Click</button>
//     </div>
//   )
// }
// export default mainComponent


// // component have 3 stage
// // mounting  : screen pr visible ho
// // unmounting
// // update





// // wo variable jo html mai change lae usay hum (useState) say define karyn gai
// import {useState} from "react";
// //component k name mai pehla letter capital hona chaheya like (Button)
// function Button(props) {
// const [count,setCount] = useState(0)
//   function handleClick(){
//     setCount(count+1);
//   }
// console.log('Click',count);
//   return(
// <button style={{
//   backgroundColor: props.color
// }}
// onClick={handleClick}
// >{props.text}Click {count}</button>
//   )
// }

// function App() {
//   return(
//     <div>
//      <h1 style={{
//   backgroundColor: 'aqua'
// }}>hello world</h1>
//      <Button text={'btn1'} color={'red'}/>
//      <Button text={'btn2'} color={'green'}/>
//      <Button text={'btn3'} color={'blue'}/>
//      <Button text={'btn4'} color={'yellow'}/>
//      </div>

//   )
// }

// export default App;



// import { useState } from "react";
// function App(){
//   const[num, setNum] = useState(0);
//   const addNum =()=>{
//     setNum(num + 1);
//   }

//   const removeNum = ()=>{
//     if(num === 0){
//       console.log('udhkjkd');
//     }
//     else{
//       setNum(num-1);
//     }
//   }
//   return(
//     <>
//     <button onClick={addNum}>Add{num}></button>
//     <button onClick={removeNum}>Sub{num}></button>
//     </>
//   )
// }
// export default App;


// import {useState} from "react";
// //component k name mai pehla letter capital hona chaheya like (Button)
// function Button(props) {
// const [count,setCount] = useState(0)
//   function handleInc(){
//     setCount(count+1);
//   }
// console.log('Click',count);
//   return(
// <button style={{
//   backgroundColor: props.color
// }}
// onClick={handleInc}
// >{props.text}click{count}</button>
//   )
// }

// function App(){
//   return(
//     <>
//     <Button  text ={'Increament'} color = {'blue'}  />
//     <Button  text ={'Decreament'} color = {'red'}  />

//     </>
//   )
// }

// export default App;




// function Child2(props){
//   const {data} = props
//   return(
//     <h1>{data}</h1>
//   )
// }

// function Child1({data}){
//   return(
//     <>
//     <h1>Child2</h1>
//     <Child2 data ={data} />
//     </>
//   )
// }

// function App() {
//   return(
//     <div>
//      <Child1 data={'Hello'}/>
//      </div>

//   )
// }

// export default App;






import Button from "./components/forms/button/Button.jsx";
import { useState } from 'react';
function App() {
    const [task, setTask] = useState('')
    const [list, setList] = useState([])

    function handleChange(e) {
        setTask(e.target.value);
    }
    function addTask() {
        // let newList = [...list, task]
        // setList(newList)
        let newList = [...list]
        newList.push(task)
        setList(newList)
    }

    function deleteTask(index) {
        let newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    return (
        <>
        
            <h1 style={
                {
                    backgroundColor: "red",
                    color: "white"
                }}
            >Todo App</h1>
            <input style={{
                height: "30px",border:"3px solid red", borderRadius:"10px"
            }} type="text" placeholder="Enter Text"
                onChange={handleChange} />
            <Button color={'green'} title="ADD" handler={addTask} />
           

            <ul>
                {
                    list.map((task, index) => {
                        return (
                            <li key={index}>{task}<Button color={'red'} title="Delete"  handler={() => deleteTask(index)} /></li>
                        )
                    })
                }
                {/* <li>Task name <Button title = "Delete"/></li> */}
            </ul>
        </>
    )
}

export default App;



