import { useState, useEffect} from "react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import {MdDeleteForever} from 'react-icons/md';
import JournalForm from "../components/JournalForm";

import '../styles/recommendation.css';

import { Diary } from "../../server/config/interfaces";

import { USER_URL } from "../utils/config";

import { RegisteredUserType, RecommendationType } from "../interfaces";

export interface IJournal {
	user: RegisteredUserType["data"];
}

const Journal = (props: IJournal) => {
	const { user } = props;
	const [diary, setDiary] = useState<Diary>({
		text: "",
	});

	const [diaries, setDiaries] = useState<RecommendationType["diary"]>([]);

	useEffect(() => {
		
		if(user){
			const fetchUserDiaries = async() => {
				const userDiariesResponse = await fetch(`${USER_URL.USER_ROOT}${user.id}/diary`)
				const userDiariesData = await userDiariesResponse.json();
				setDiaries(userDiariesData.data);
			}
			fetchUserDiaries()
		}
		
		
	}, [user]);
	

	

	return (
		<div className="diary-save-container">
			<div className="diary-container">
				<h3>Did you know journaling can improve your mood ? </h3>
				<JournalForm
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
