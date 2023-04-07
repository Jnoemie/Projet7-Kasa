import '../Styles/Appart.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import list from '../Datas/List'
import Header from "../Components/Header";
import Carousel from "../Components/Carousel"
import Footer from "../Components/Footer";
import Value from '../Components/Value';
import greyStar from '../Assets/grey_star.png';
import redStar from '../Assets/red_star.png';


function Appart() {
	
	const [imageSlider, setImageSlider] = useState([]);

	const idAppart = useParams('id').id;
	const dataAppart = list.filter(data => data.id === idAppart);
	
	useEffect(() => {
		const dataCurrentAccomodation = list.filter(data => data.id === idAppart);
		setImageSlider(dataCurrentAccomodation[0].pictures);
	}, [idAppart]);

	const name = dataAppart[0].host.name.split(' '); 
	const rating = dataAppart[0].rating;
	const description  = dataAppart[0].description;
	const equipments = dataAppart[0].equipments;

	return (
		<>
			<Header/>
			<Carousel imageSlider={imageSlider}/>
			<main className="Appart">
				<div className="AppartContent">
					<div className="AppartInfos">
						<h1>{dataAppart[0].title}</h1>
						<p>{dataAppart[0].location}</p>
						<div>
							{dataAppart[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="host">
						<div>
							<div className='hostName'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataAppart[0].host.picture} alt="host of this accomodation" />
						</div>
							
						<div className="hoststars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="AppartValue">
					<div className="ValueItem">
						<Value title={'Description'} content={description} />	
					</div>
					<div className="ValueItem">
						<Value title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
			<Footer />
		</>
	)
}
export default Appart;