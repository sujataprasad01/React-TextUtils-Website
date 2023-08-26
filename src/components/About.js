import React, {useState} from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const[btntext, setBtnText]=useState("Enable Dark Mode")

    //  const toggleStyle=()=>{
    //    if( myStyle.color=='black'){
    //     setMyStyle({
    //         color:'white',
    //         backgroundColor:'black',
    //     border:'1px solid white'

    //     })
    //     setBtnText("Enable Light Mode")
    //    }
    //    else{
    //     setMyStyle({
    //         color:'black',
    //         backgroundColor:'white'
    //     })
    //     setBtnText("Enable Dark Mode")

    //    }
    //  }
    return (
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={{color:props.mode==='dark'?'white':'black'}}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={{backgroundColor:props.mode==='dark'?'#000000de':'white', color:props.mode==='dark'?'white':'black'}}>
                            <strong>Analyze Your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample"  style={{backgroundColor:props.mode==='dark'?'gray':'white'}}>
                        <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'gray':'white'}}>
                            TextUtils gives you a way to analyze your text quickly abd efficiently. Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item"style={{color:props.mode==='dark'?'white':'black'}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"   style={{backgroundColor:props.mode==='dark'?'#000000de':'white', color:props.mode==='dark'?'white':'black'}}>
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample"  style={{backgroundColor:props.mode==='dark'?'gray':'white'}}>
                        <div className="accordion-body"  style={{backgroundColor:props.mode==='dark'?'gray':'white'}}>
                        TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text TextUtils reports the number of words and characters does it is suitable for writing text with words or character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  style={{color:props.mode==='dark'?'white':'black'}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"   style={{backgroundColor:props.mode==='dark'?'#000000de':'white', color:props.mode==='dark'?'white':'black'}}>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample"  style={{backgroundColor:props.mode==='dark'?'gray':'white'}}>
                        <div className="accordion-body"  style={{backgroundColor:props.mode==='dark'?'gray':'white'}}>
                        This word count to software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It's used to count characters in Facebook blog, books, Excel documents, PDF document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* style={myStyle} */}
            {/* <div className='container'>
            <button onClick={toggleStyle} type="button" className='btn btn-primary'>{btntext}</button>
            </div> */}
        </div>
    )
}
