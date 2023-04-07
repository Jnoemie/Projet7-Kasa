import '../Styles/Value.css'
import React, { useState } from 'react' ;
import { values } from '../Datas/value';
import vectorBottom from '../Assets/vectorBottom.png'
import vectorTop from '../Assets/vectorTop.png'

function SectionValue() {

    
    const [visibleSection, setVisibleSection] = useState(true);
    const clickBtn = entry => {
        if (entry === visibleSection) {
            setVisibleSection('')
        } else {
            setVisibleSection(entry)
        }
    	
}
    
    return(        
        values.map((value) => (
            <div key={value.title} className='container-value'>
                <h3 className='title-sectionValue btn' onClick={() => clickBtn(value.id)} >{value.title}
                    <div className='container-vector'>
                        { visibleSection === value.id && <img src={vectorTop} alt='une fleche' className='vector' />}
                        { visibleSection !== value.id && <img src={vectorBottom} alt='une fleche' className='vector' />}
                    </div>
                </h3>
                { visibleSection === value.id && <div className="content">{value.description}</div>}
            </div>
    )))
}

export default SectionValue;