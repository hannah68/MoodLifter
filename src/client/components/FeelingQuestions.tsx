import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import { questions, questionType } from "../data/feelingQuestion";

export type ShowFeeling = true | false;

interface FeelingQProps {
	setShowFeelings: (target: ShowFeeling) => void;
}


const FeelingQuestions = (props: FeelingQProps) => {
	const [answers, setAnswers] = useState({
		favPerson: "",
		favPlace: "",
		favFood: "",
		gratitude: "",
		passion: "",
		accomplishment: "",
	});
	const { setShowFeelings } = props;

	const navigate = useNavigate();

	const postAnswersToDB = async() => {
		const res = await fetch('http://localhost:4000/favourite', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(answers)
		});
		const data = await res.json()
		console.log(data);
	}

	// submit form handler================
	const submitQuestionHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await postAnswersToDB();
		navigate('/feeling');
	};

	const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;

		setAnswers({ ...answers, [name]: value });
	};

	return (
		<form className="question-form" onSubmit={submitQuestionHandler}>
			<div className="fav-groups">
				<label htmlFor="fav-person">
					"Can you tell me about your favourite person? who do you enjoy hanging
					out with?"
				</label>
				<input
					type="text"
					className="text-area"
					name="favPerson"
					placeholder="Sally"
					value={answers.favPerson}
					onChange={changeHandler}
				/>
			</div>
			<div className="fav-groups">
				<label htmlFor="fav-place">
					where is your favourite place in your town
				</label>
				<input
					type="text"
					className="text-area"
					placeholder="Tower bridge"
					name="favPlace"
					value={answers.favPlace}
					onChange={changeHandler}
				/>
			</div>
			<div className="fav-groups">
				<label htmlFor="fav-person">What are you most grateful for?</label>
				<input
					type="text"
					className="text-area"
					placeholder="Family, friends, health,..."
					name="gratitude"
					value={answers.gratitude}
					onChange={changeHandler}
				/>
			</div>

			<div className="fav-groups">
				<label htmlFor="fav-person">
					What are the things you're most passionate about?
				</label>
				<input
					type="text"
					className="text-area"
					placeholder="Animals, learn foreign languages"
					name="passion"
					value={answers.passion}
					onChange={changeHandler}
				/>
			</div>
			<div className="fav-groups">
				<label htmlFor="fav-person">
					What are your greatest accomplishments in life so far?
				</label>
				<input
					type="text"
					className="text-area"
					placeholder="Graduating near the top of my class last year"
					name="accomplishment"
					value={answers.accomplishment}
					onChange={changeHandler}
				/>
			</div>
			<div className="fav-groups">
				<label htmlFor="fav-person">Tell us about your favourite food?</label>
				<input
					type="text"
					className="text-area"
					placeholder="pizza"
					name="favFood"
					value={answers.favFood}
					onChange={changeHandler}
				/>
			</div>

			<button
				type="submit"
				className="save-btn"
				onClick={() => setShowFeelings(false)}
			>
				Save
			</button>
		</form>
	);
};

export default FeelingQuestions;
