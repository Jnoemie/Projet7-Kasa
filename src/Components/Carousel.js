import '../Styles/Carousel.css'
import VectorRight from '../Assets/vectorright.png'
import VectorLeft from '../Assets/vectorleft.png'
import { useState } from 'react'

function Carousel({imageSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    let NbImage= imageSlider.length;

    const nextSlide = () => {
		setCurrentIndex(currentIndex === NbImage - 1 ? 0 : currentIndex + 1); // on repart au premier slide quand on arrive au dernier
	};
	const prevSlide = () => {
		setCurrentIndex(currentIndex === 0 ? NbImage - 1 : currentIndex - 1); // on repart au dernier slide quand on est au premier
	};

	
    return (
        <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carousel'>
            {NbImage > 1 && 
                <>
                    <img 
                        className='Vector VectorRight' 
                        src={VectorRight} 
                        alt="show next slider" 
                        onClick={nextSlide}
                    />
                    
                    <img 
                        className='Vector VectorLeft' 
                        src={VectorLeft} 
                        alt="show previous slider" 
                        onClick={prevSlide}
                    />
                     <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
                    
                </>
            } 
        </section>
    )
}

export default Carousel;