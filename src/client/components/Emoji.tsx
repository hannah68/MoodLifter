import { EmojiType } from "../data/emoji";

import "../styles/feeling.css";

interface EmojiProps {
	emj: EmojiType;
}

const Emoji = (props: EmojiProps) => {
    const {emj} = props;

	return (
		<div className="emoji-group">
			<img src={emj.img} alt={emj.label} />
			<span>{emj.label}</span>
		</div>
	);
};

export default Emoji;
