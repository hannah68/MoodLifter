import "../styles/feeling.css";

import FavouriteQuestions from "../components/FavouriteQuestions";

const Favourite = () => {
	return (
		<div className="feeling-page">
			<div className="feeling-top">
				<h2 className="feeling-title">
					Let's get started with a couple of questions about you. This shouldn't
					take more than a minute.
				</h2>
				<h2 className="feeling-subtitle">we're almost there...</h2>
				<div className="img-conteiner">
					<img
						className="guy-img"
						src="./assets/images/bike.png"
						alt="bike guy"
					/>
				</div>
				<FavouriteQuestions />
			</div>
		</div>
	);
};

export default Favourite;
