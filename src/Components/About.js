//import React , {useState} from 'react'

export default function About(props) {

    // const [myStyle,setMyStyle] = useState({
    //    color:'black' ,
    //    backgroundColor  : 'white'
    // })

   // const [btnText,setBtnText] = useState('Enable Dark Mode') 
    // const toggleStyle = ()=>
    // {
    //      if(myStyle.color==='black')
    //      {
    //         setMyStyle({
    //             color:'white' ,
    //             backgroundColor  : 'black'
    //         })

    //         setBtnText('Enable Light Mode')
    //      }

    //      else
    //      {
    //         setMyStyle({
    //             color:'black' ,
    //             backgroundColor  : 'white'
    //         })

    //         setBtnText('Enable Dark Mode')
    //      }

    // }
  return (
    <div className="container"    style={{ color: props.mode==='light'?'white':'black'}} >
        <h1 className='my-3'>About Us</h1>
    <div className="accordion" id="accordionExample"  style={{ color: props.mode==='light'?'white':'black'}} >
  <div className="accordion-item" style={{ color: props.mode==='light'?'white':'black'}}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={{backgroundColor: props.mode==='light'?'black':'white' , color: props.mode==='light'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        App information
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={{  color: props.mode==='light'?'white':'black' , backgroundColor: props.mode==='light'?'black':'white'}} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>It is text analyzer web app.</strong> It is developed to manipulate text as user wish.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"   style={{ backgroundColor: props.mode==='light'?'black':'white' ,color: props.mode==='light'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Technology used information
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={{backgroundColor: props.mode==='light'?'black':'white' , color: props.mode==='light'?'white':'black'}} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>It is built in react js.</strong> Other then that html,cs, and bootstrap are used.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"  style={{backgroundColor: props.mode==='light'?'black':'white' , color: props.mode==='light'?'white':'black'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Developer information
      </button>
    </h2>
    <div id="collapseThree" style={{backgroundColor: props.mode==='light'?'black':'white', color: props.mode==='light'?'white':'black'}} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>It is developed by Umaima Faisal.</strong> She is a final year student at PUCIT.The developer is looking forward to develop such apps to faclitate the people.
    </div>
  </div>
  </div>
</div>
{/* <button onClick={toggleStyle} type="button" className='my-3 btn btn-primary'>{btnText}</button> */}
    </div>
  )
}
