import Header from '../Components/Header.js';
import BannerBis from '../Components/BannerBis.js';
import SectionValue from '../Components/Value.js';
import Footer from '../Components/Footer.js';

import '../Styles/Appart.css'

function About() {
    return (
        <div className="app-container">     
        	<Header/>
            <main>
                <BannerBis/>
                <SectionValue/>
            </main>
            <Footer/>
        </div>
    )
}

export default About;