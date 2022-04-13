import { ChangeEvent, FormEvent } from "react";

import { RegisteredUserType } from "../interfaces";

import { Diary } from "../../server/config/interfaces";

import "../styles/journal.css";

// props interface========================================
interface IJournalFormProps {
	setDiary: (target: Diary) => void;
	diary: Diary;
	user: RegisteredUserType["data"];
}

// journal form component==================================
const JournalForm = (props: IJournalFormProps) => {
	const { setDiary, diary, user } = props;

	// change diary input handler=========================
	const diaryChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		const { name, value } = e.target;
		setDiary({ ...diary, [name]: value });
	};

	// post diary to db====================================
	const postDiaryToDB = async () => {
		if (user) {
			const diaryRes = await fetch("http://localhost:4000/user/journal", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...diary, userId: Number(user.id) }),
			});
			const diaryData = await diaryRes.json();
			return diaryData.data;
		}
		return;
	};

	// submit diary form ==================================
	const submitDiaryHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await postDiaryToDB();
		setDiary({ ...diary, text: "" });
		window.location.reload();
	};

	return (
		<form onSubmit={submitDiaryHandler}>
			<textarea
				className="diary-textarea"
				placeholder="Today, I'm feeling..."
				value={diary.text}
				onChange={diaryChangeHandler}
				name="text"
			></textarea>
			<div className="diary-btn">
				<div className="btn-groups">
					<button>Save</button>
					<button>Cancel</button>
				</div>
			</div>
		</form>
	);
};

export default JournalForm;
