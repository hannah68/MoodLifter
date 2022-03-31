import { FormEvent } from "react";
import { questions } from "../data/feelingQuestion";

export type ShowFeeling = true | false;

interface FeelingQProps {
    setShowFeelings: (target: ShowFeeling) => void
}

// submit form handler================
const submitQuestionHandler = (e: FormEvent<HTMLFormElement>) : void => {
    e.preventDefault();
}

const FeelingQuestions = (props: FeelingQProps) => {
    const { setShowFeelings } = props;

	return (
		<form className="question-form" onSubmit={submitQuestionHandler}>
			{questions.map((question: string, index: number) => {
				return (
					<div className="fav-groups" key={index}>
						<label htmlFor="fav-person">{question}</label>
                        <input type="text" className="text-area"/>
					</div>
				);
			})}
            <button type="submit" className="save-btn" onClick={() => setShowFeelings(false)}>Save</button>
		</form>
	);
};



export default FeelingQuestions;
