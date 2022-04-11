import { useState } from "react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import {MdDeleteForever} from 'react-icons/md';
import DiaryForm from "../components/DiaryForm";

import '../styles/recommendation.css';

import { Diary } from "../../server/config/interfaces";

import { RegisteredUserType, RecommendationType } from "../interfaces";

export interface IJournal {
	user: RegisteredUserType["data"];
	diaries: RecommendationType["diary"];
	setDiaries: (target: RecommendationType["diary"]) => void;
}

const Journal = (props: IJournal) => {
	const { user, diaries, setDiaries } = props;
	const [diary, setDiary] = useState<Diary>({
		text: "",
	});

	return (
		<div className="diary-save-container">
			<div className="diary-container">
				<h3>Did you know journaling can improve your mood ? </h3>
				<DiaryForm
					setDiary={setDiary}
					diary={diary}
					user={user}
					setDiaries={setDiaries}
					diaries={diaries}
				/>
			</div>
			<h2>My Diaries</h2>
			<ul className="diary-list">
				{diaries
					? diaries.map((diary, id) => {
							return (
								<li className="journal-container" key={id} >
									<p>
										<span>
											<BsFillJournalBookmarkFill />
										</span>
										{diary.text}
									</p>
									<span><MdDeleteForever/></span>
								</li>
							);
					  })
					: <p>There is no diary</p>}
			</ul>
		</div>
	);
};

export default Journal;
