import "../styles/feeling.css";

import { emojis } from "../data/emoji";
import { EmojiType } from "../data/emoji";
import { todayDate } from "../utils/utils";

import Emoji from "../components/Emoji";

import { MdDateRange } from "react-icons/md";

const FeelingEmoji = () => {
	return (
		<div className="feeling-bottom">
			<h1>Hi, How are you?</h1>
			<p className="feeling-date">
				<span><MdDateRange /></span>
				<span>today, {todayDate}</span>
			</p>
			<div className="emoji-list">
				{emojis.map((emj: EmojiType, index: number) => {
					return <Emoji key={index} emj={emj} />;
				})}
			</div>
		</div>
	);
};

export default FeelingEmoji;
