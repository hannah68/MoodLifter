import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

import { Diary } from "../../server/interface/interfaces";

import { RecommendationType } from "../interface/interfaces";

import { USER_URL } from "../utils/config";

// Journal list props interface===============================
export interface IJournalList {
	diary: Diary;
	diaries: RecommendationType["diary"];
	setDiaries: (target: RecommendationType["diary"]) => void;
}

// Journal list component====================================
const JournalList = (props: IJournalList) => {
	const { diary, diaries, setDiaries } = props;

	// delete journal handler===============================
	const deleteJournalHandler = async (diary: any) => {
		const journalId = diary.id;

		const journalRes = await fetch(`${USER_URL.JOURNAL}${journalId}`, {
			method: "DELETE",
		});
		const journalData = await journalRes.json();

		const newList = diaries.filter((diary) => {
			return diary.id !== journalData.data.id;
		});
		setDiaries(newList);
	};

	return (
		<li className="journal-container">
			<p>
				<span>
					<BsFillJournalBookmarkFill />
				</span>
				{diary.text}
			</p>
			<span onClick={() => deleteJournalHandler(diary)}>
				<MdDeleteForever />
			</span>
		</li>
	);
};

export default JournalList;
