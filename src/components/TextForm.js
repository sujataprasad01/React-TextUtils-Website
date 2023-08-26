
import React,{useState} from 'react'

export default function TextForm(props) {
  
    const handleUpClick=()=>{
        // console.log('uppercase was clicked'+text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick=()=>{
        // console.log('uppercase was clicked'+text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success")

    }
    const handleOnChange=(event)=>{
        // console.log('On Change')
        setText(event.target.value);

    }
    const handleClClick=()=>{
        // console.log('uppercase was clicked'+text)
        let newText="";
        setText(newText)
        props.showAlert("Your textbox is clear", "success")

    }
     const handleRvClick=()=>{
        // console.log('uppercase was clicked'+text)
        let strArr=text.split("");
        strArr=strArr.reverse();
        let newText=strArr.join("");
        setText(newText)
        props.showAlert("Converted in reverse order", "success")

    }
       
    const handleCopy=()=>{
        let text=document.getElementById('MyBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Your text is copied to clipboard", "success")

    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")
    }
    const [text, setText]=useState('');
    // text="new text"; //wrong way to change the state
    // setText("new text"); //correct way to change the state
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-4'>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#8080805c':'white', color:props.mode==='dark'?'white':'black'}}  id="MyBox" rows="8"></textarea>
            </div>
            <button  disabled={text.length===0} className='btn btn-primary  mx-1 my-1  'onClick={handleUpClick}>Convert to Uppercase</button>
            <button  disabled={text.length===0} className='btn btn-primary  mx-1 my-1 'onClick={handleLoClick}>Convert to Lowercase</button>
            <button  disabled={text.length===0} className='btn btn-primary  mx-1 my-1 'onClick={handleClClick}>Clear</button>
            <button  disabled={text.length===0} className='btn btn-primary  mx-1 my-1 'onClick={handleRvClick}>reverse text</button>
            <button  disabled={text.length===0} className='btn btn-primary  mx-1 my-1 'onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0} className='btn btn-primary  mx-1 my-1 'onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
        </div>
        <div className='container my-3'  style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )

}
