import banner from '../Assets/banner.png';
import '../Styles/Banner.css';


function Banner() {
  return(
  <div className='container-banner'>
  <img src={banner} alt="des montagnes" className="banner"/>
  <h1 className="banner-txt">Chez vous, partout et ailleurs</h1>
</div>
  )
  }

  export default Banner;