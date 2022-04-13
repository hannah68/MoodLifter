import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FEELING_URL, PAGE_LINK } from "../utils/config";

import { AnswersType } from "../interface/interfaces";

// Favourite uestion componenet===================
const FavouriteQuestions = () => {
	const [answers, setAnswers] = useState<AnswersType>({
		favPerson: "",
		favPlace: "",
		favFood: "",
		gratitude: "",
		passion: "",
		accomplishment: "",
	});

	const navigate = useNavigate();

	// post answer to DB==========================
	const postAnswersToDB = async () => {
		const id = Number(localStorage.getItem("userId"));

		const res = await fetch(`${FEELING_URL.FAVOURITE_ROOT}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("token") as string,
			},
			body: JSON.stringify({ ...answers, userId: id }),
		});
		const data = await res.json();
		return data;
	};

	// submit form handler================
	const submitQuestionHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await postAnswersToDB();
		navigate(PAGE_LINK.LOGIN);
	};

	// change handler=====================
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

			<button type="submit" className="save-btn">
				Save
			</button>
		</form>
	);
};

export default FavouriteQuestions;
