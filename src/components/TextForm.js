import React,{useState} from "react";


export default function TextForm(props) {
    const [text,setText]=useState("");
    const toUphandler=()=>{
        console.log("Upper Case button is clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.alert("Converted to upperCase","success")
    }
    const changeHandler=(event)=>{
        console.log("onChange");
        setText(event.target.value);
        
    }
    const toLowhandler=()=>{
      var newText=text.toLowerCase();
      setText(newText);
      props.alert("Converted to LpperCase","success")
      
    }
  return (
    <>
    <div className="container" >
      <h1 style={{color:props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
     
      <textarea
        className="form-control my-2"
        id="exampleFormControlTextarea1"
        rows="8"
        style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
        value={text}
        onChange={changeHandler}
      ></textarea>
      
      <button type="button" className="btn btn-primary mx-2" onClick={toUphandler} >Convert To upper Case</button>
      <button type="button" className="btn btn-primary mx-2" onClick={toLowhandler}  >Convert To Lower  Case</button>
     
     </div>

     <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
         <h1>Text summary</h1>
         <b>Words={text.split(" ").length} and Characters={text.length}</b>
         <p>{0.08 *text.split(" ").length} Minutes read</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:"Enter Above in the text Area to preview"}</p>
     </div>
    </>
   
    

   
    
  );
}
