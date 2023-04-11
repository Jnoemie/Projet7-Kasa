import bannerAbout from "../Assets/bannerAbout.png";
import "../Styles/Banner.css";

function BannerBis() {
  return (
    <div className="container-banner">
      <img src={bannerAbout} alt="une montagne enneigée" className="banner" />
    </div>
  );
}
export default BannerBis;
