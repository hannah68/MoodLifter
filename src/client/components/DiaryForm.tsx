import { RecommendationType, RegisteredUserType } from "../interfaces";
import { Diary } from "../../server/config/interfaces";
import { ChangeEvent, FormEvent } from "react";

interface IDiaryProps {
	setDiary: (target: Diary) => void;
	diary: Diary;
	user: RegisteredUserType["data"];
	diaries: RecommendationType['diary'];
	setDiaries: (target: RecommendationType['diary']) => void;
}

const DiaryForm = (props: IDiaryProps) => {
	const { setDiary, diary, user, setDiaries, diaries } = props;

	const diaryChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		setDiary({ text: e.target.value });
	};



	const postDiaryToDB = async () => {
		if (user) {
			const diaryRes = await fetch("http://localhost:4000/user/diary", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...diary, userId: Number(user.id) }),
			});
			const diaryData = await diaryRes.json();
			console.log(diaryData);
			return diaryData.data
		}
		return;
	};

	const submitDiaryHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const diary = await postDiaryToDB();
		setDiaries([...diaries, diary]);
		setDiary({ text: "" });
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

export default DiaryForm;
