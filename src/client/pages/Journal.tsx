import { useState, useEffect } from "react";

import "../styles/journal.css";

import JournalForm from "../components/JournalForm";
import JournalList from "../components/JournalList";

import { RegisteredUserType, RecommendationType } from "../interfaces";

import { Diary } from "../../server/config/interfaces";

// journal interface====================================
export interface IJournal {
	user: RegisteredUserType["data"];
}

// journal component====================================
const Journal = (props: IJournal) => {
	const { user } = props;
	const [diaries, setDiaries] = useState<RecommendationType["diary"]>([]);
	const [diary, setDiary] = useState<Diary>({
		text: "",
		id: null,
	});

	// use effect for fetching users diaries===========
	useEffect(() => {
		if (user) {
			const userId = user.id;
			// get user's journal
			const fetchUserDiaries = async () => {
				const userDiariesResponse = await fetch(
					`http://localhost:4000/user/${userId}/journal`
				);
				const userDiariesData = await userDiariesResponse.json();
				setDiaries(userDiariesData.data);
			};
			fetchUserDiaries();
		}
	}, [user]);

	return (
		<div className="diary-save-container">
			<div className="diary-container">
				<h3>Did you know journaling can improve your mood ? </h3>
				<JournalForm setDiary={setDiary} diary={diary} user={user} />
			</div>

			<h2>My Diaries</h2>
			<ul className="diary-list">
				{diaries.length > 0 ? (
					diaries.map((diary, id) => {
						return (
							<JournalList
								diary={diary}
								key={id}
								diaries={diaries}
								setDiaries={setDiaries}
							/>
						);
					})
				) : (
					<li>You have no journal</li>
				)}
			</ul>
		</div>
	);
};

export default Journal;
