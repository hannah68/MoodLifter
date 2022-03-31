import { questions } from "../data/feelingQuestion";

export type ShowFeeling = true | false;

interface FeelingQProps {
    setShowFeelingQuestions: (target: ShowFeeling) => void
}

const FeelingQuestions = (props: FeelingQProps) => {
    const { setShowFeelingQuestions } = props;

	return (
		<form className="question-form">
			{questions.map((question: string, index: number) => {
				return (
					<div className="fav-groups" key={index}>
						<label htmlFor="fav-person">{question}</label>
                        <input type="text" className="text-area"/>
					</div>
				);
			})}
            <button type="submit" className="save-btn" onClick={() => setShowFeelingQuestions(false)}>Save</button>
		</form>
	);
};

export default FeelingQuestions;
