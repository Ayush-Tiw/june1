import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
//JS starts here
    // const name="Ayush";
    // const time=30;
    //JS ends
//JSX starts
// (1)
// const names=["Ayush","Manish","Ram"]
// {/* now looping for Message */}
// (1.1)
let students=[
    {name :"Ayush",
pic:"https://m.media-amazon.com/images/I/81zBYuenKfS._SL1500_.jpg"
},
{
    name:"Manish",
    pic:"https://m.media-amazon.com/images/I/711VUwDUBLL._SL1100_.jpg"
},
{
    name:"Ram",
    pic:"https://m.media-amazon.com/images/I/81zBYuenKfS._SL1500_.jpg"
}
]
    return(
        <div className="App">
           {/* <h1>Hello,{name}</h1> 
           <p>Time to complete - {4*time} mins</p> */}

           {/* (1 by calling function or better to say component again and again)<Message name="Manish" pic="https://m.media-amazon.com/images/I/81zBYuenKfS._SL1500_.jpg"/>
           <Message name="Ram" pic="https://m.media-amazon.com/images/I/711VUwDUBLL._SL1100_.jpg" />
           <Message name="Aashu" /> */}


{/*(2) looping instead of calling component again and again by first making array*/}
{/* {names.map((nm)=>(
    <Welcome name = {nm} />
))} */}

{/* (1.1) components + loop  by defining array of objects */}
{students.map((student)=>(
    <Message name={student.name}
    pic={student.pic} />
))}

           </div>     
  );
  //JSX ends
}

//Props(properties)- pass arguements to components
export default App;

//How to create a component

//how function become component
//1.function name first letter should be capital otherwise it will not be considered component
//2.it should have  one JSX element
//3.return should contain only one main element


//(1)Defined the component - logic + view
// function Message(props){
// console.log(props);
// const name=props.name;
//     // const name="Ayush";
//     return (<div><h1>Hello,{name}</h1>
//     <img className="profile-pic"
//     src = {props.pic} alt={props.name} />
//    </div>) ;
// }

//(3)now remove props- by object destructuring
function Message({name,pic}){
    // console.log(props);
        return (<div><h1>Hello,{name}</h1>
        <img className="profile-pic"
        src = {pic} alt={name} />
        <Counter />
       </div>) ;
    }
    //composition - composing/attaching things together

// (2)
// function Welcome(props){
//     console.log(props);
//     const name=props.name;
//         // const name="Ayush";
//         return (<div><h1>Hello,{name}</h1>
//        </div>) ;
//     }
// {} - template syntax (to add javascript to html)

//JSX - javascript xml

// className - we dont use class becaue it is reserved keyword

// At the webpack + babel  convert JSX to JS 

//<> </> -react fregments -help in styling and performance


function Counter(){
const [like,setLike]=useState(0)
const [disLike,setDisLike]=useState(0)
    return(
        <div className='counter-container'>
            
            <button className='like-button' onClick={()=> 
            setLike(like+1)
//calling setLike function
            }>like 👍 {like}</button>

<button className='dislike-button' onClick={()=>setDisLike(disLike+1)}>Dislike 👎 {disLike}</button>

        </div>)
}