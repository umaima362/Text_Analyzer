import React , { useState }    from 'react' ;




export default function Textform(props) {
  const onchangehandle = (event) => {
    setText(event.target.value) ;
  }

  const uppercasetext = () =>
  {
    setText(text.toUpperCase());
    props.showAlert('Text converted to UpperCase', 'success')
  }

  const lowercasetext = () =>
  {
    setText(text.toLowerCase());
    props.showAlert('Text converted to LowerCase', 'success')
  }

  const Removetext = () =>
  {
    setText("");
    props.showAlert('Text removed', 'success')
  }

  const toTitles = () =>
  {
    let text2 = text.charAt(0).toUpperCase() + text.substring(1,text.length).toLowerCase();
    setText(text2);
    props.showAlert('Text coverted to titleCase', 'success')
  }

  const alternatingtext = () =>
  {
    
 const isUpperCase = char => char.charCodeAt(0) >= 65 && char.charCodeAt(0)<= 90;
const isLowerCase = char => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
const flipCase = text => {
   let newStr = '';
   const margin = 32;
   for(let i = 0; i < text.length; i++){
      const curr = text[i];
      if(isLowerCase(curr)){
         newStr += String.fromCharCode(curr.charCodeAt(0) - margin);
      }else if(isUpperCase(curr)){
         newStr += String.fromCharCode(curr.charCodeAt(0) + margin);
      }else{
         newStr += curr;
      };
   };
   
   return newStr;
};
setText(flipCase(text)); 
props.showAlert('Text alternated', 'success')
   
  }

  const replacetext = () =>
  {
  let text1 = window.prompt("Enter your new text ");
    setText(text1);
    props.showAlert('Text replaced', 'success')
  }

  const duplicatetext = () =>
  {
  
    setText(text +" " +text);
    props.showAlert('Text duplicated', 'success')
  }
  
  const copytext = () =>
  {
  
    let text = document.getElementById( "mybox")
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAlert('Text copied', 'success')
   
    

  }

  const textlength = () =>
  {
    const arr = text.split(' ');

  return arr.filter(word => word !== '').length;
   
    

  }

  const removeSpace = () =>
  {
  
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert('Extra spaces removed', 'success')
    
    
  }
  const [text ,setText]= useState("") ;
  return (
    <div>
      <div className="my-3  container"  >
  <h2 className="my-4 " style={{ color: props.mode==='light'?'white':'black'}} >{ props.heading } </h2>
  <textarea  className="form-control" value={text}  onChange={onchangehandle}  style={{ backgroundColor: props.mode==='light'?'black':'white', color: props.mode==='light'?'white':'black'}}   placeholder = "Enter Your Text Here"  id="mybox" rows="10" ></textarea>
  <button className={`my-3  btn btn-outline-${props.mode==='dark' ?'dark':'light'}`}  onClick={uppercasetext}>Convert to UPPERCASE</button>
  <button className={`my-3 mx-3 btn btn-outline-${props.mode==='dark' ?'dark':'light'}`}  onClick={lowercasetext}>Convert to lowercase</button>
  <button className={`my-3 mx-3 btn btn-outline-${props.mode==='dark' ?'dark':'light'}`}  onClick={toTitles}>Convert To Titlecase</button>
  <button className={`my-3 mx-3 btn btn-outline-${props.mode==='dark' ?'dark':'light'}`}  onClick={Removetext}>Remove Text</button>
  <button className={`my-3  mx-3  btn btn-outline-${props.mode==='dark' ?'dark':'light'}`}  onClick={alternatingtext}> AlTeRnATiNG TeXt</button>
  <button className={`my-3  btn btn-outline-${props.mode==='dark' ?'dark':'light'}`}  onClick={replacetext}>Replace Text</button>
  <button className={`my-3  mx-3 btn btn-outline-${props.mode==='dark' ?'dark':'light'}`}  onClick={duplicatetext}>Duplicate text</button>
  <button className={`my-3    btn btn-outline-${props.mode==='dark' ?'dark':'light'}`}  onClick={copytext}>Copy Text</button>
  <button className={`my-3 mx-1  btn btn-outline-${props.mode==='dark' ?'dark':'light'}`}  onClick={removeSpace}>Remove Extra space</button>
  
     </div>
     <div className=" container" style={{ color: props.mode==='light'?'white':'black'}}>
      <h3>Your Text Summary</h3>
      <p>Total charachers : {text.length}</p>
      <p>Total words : {textlength()}</p>
      <p>Time to read : {0.008 * text.split(" ").length }</p>
      <h3><b>Preview</b></h3>
      <p>{text.length>0 ? text : 'Enter yor text to preview it' }</p>
         </div>
     

    </div>
  ) 
  
}
