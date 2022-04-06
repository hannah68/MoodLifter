import {useState} from 'react';
import { EmojiType } from "../data/emoji";

import "../styles/feeling.css";

interface EmojiProps {
	emj: EmojiType;
	feeling: Array<string>;
	setFeeling: (target: Array<string>) => void;
}

const Emoji = (props: EmojiProps) => {
    const {emj, feeling, setFeeling} = props;
	const [changeColor, setchangeColor] = useState(false);

	const clickEmojiHandler = (emj: EmojiType) => {
		const feelingName = emj.label;
		setFeeling([...feeling, feelingName]);
		setchangeColor(true);
	}

	return (
		<div 
		className={!changeColor ? 'emoji-group' : 'emoji-group selected'}
		onClick={()=> clickEmojiHandler(emj)}>
			<img src={emj.img} alt={emj.label} />
			<span>{emj.label}</span>
		</div>
	);
};

export default Emoji;
