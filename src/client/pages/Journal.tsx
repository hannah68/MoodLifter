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
    const [isLoading, setIsLoading] = useState(true);
	const [diaries, setDiaries] = useState<RecommendationType["diary"]>([]);

    const deleteJournalHandler = async (diary: any) => {
        const id = diary.id
         
        const journalRes = await fetch(`http://localhost:4000/user/journal/${id}`, {
            method: 'DELETE'
        });
        return await journalRes.json();
    }

	useEffect(() => {
		if(user){
			const fetchUserDiaries = async() => {
				const userDiariesResponse = await fetch(`${USER_URL.USER_ROOT}${user.id}/journal`)
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
				/>
			</div>
			<h2>My Diaries</h2>
			<ul className="diary-list">
				{diaries.length > 0
					? diaries.map((diary, id) => {
							return (
								<li className="journal-container" key={id} >
									<p>
										<span>
											<BsFillJournalBookmarkFill />
										</span>
										{diary.text}
									</p>
									<span onClick={() => deleteJournalHandler(diary)}><MdDeleteForever/></span>
								</li>
							);
					  })
					: <p>You have no journal</p>}

                    
			</ul>

            {/* <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> */}
		</div>
	);
};

export default Journal;