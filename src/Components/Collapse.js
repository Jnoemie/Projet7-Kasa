import '../Styles/Value.css'
import React, { useState } from 'react' ;
import vectorTop from '../Assets/vectorTop.png'

export default function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="container-value" >
                <h3 className='title-sectionValue' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={vectorTop} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? 'content' : 'contentHidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}