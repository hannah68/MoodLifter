import { useState } from "react";

import { EmojiType } from "../data/emoji";

import "../styles/feeling.css";

// emoji props interface======================
interface EmojiProps {
	emj: EmojiType;
	setFeeling: (target: Array<string>) => void;
}

// Emoji component============================
const Emoji = (props: EmojiProps) => {
	const { emj, setFeeling } = props;
	const [changeColor, setchangeColor] = useState(false);

	// handle click===========================
	const clickEmojiHandler = (emj: EmojiType) => {
		const feelingName = emj.label;
		setFeeling([feelingName]);
		setchangeColor(!changeColor);
	};

	return (
		<div
			className={!changeColor ? "emoji-group" : "emoji-group selected"}
			onClick={() => clickEmojiHandler(emj)}
		>
			<img src={emj.img} alt={emj.label} />
			<span>{emj.label}</span>
		</div>
	);
};

export default Emoji;
