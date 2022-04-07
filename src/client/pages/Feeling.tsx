import { FormEvent, useState } from "react";
import { MdDateRange } from "react-icons/md";
import { TiArrowRightThick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

import "../styles/feeling.css";

import { emojis } from "../data/emoji";
import { EmojiType } from "../data/emoji";

import Emoji from "../components/Emoji";

import { existFeelings, todayDate} from "../utils/utils";
import { FavouriteType, RecommendationType } from "../interfaces";

export const FeelingType: string[] = [];

export interface IFeelingProps {
	setRecomData: (target: RecommendationType[]) => void;
	setfavouriteData: (target: FavouriteType) => void;
	getFavourites: () => Promise<FavouriteType>;
	setIsLoggedIn: (target: boolean) => void;
}

const Feeling = (props: IFeelingProps) => {
	const { setRecomData, setfavouriteData, getFavourites, setIsLoggedIn } = props;
	const [feeling, setFeeling] = useState(FeelingType);

	const navigate = useNavigate();

	const getAllRecommendations = async () => {
		if (feeling) {
			const checkTypeOfFeeling = existFeelings(feeling);

			if (checkTypeOfFeeling) {
				navigate("/recommendation/goodmood");
			} else {
				const recomRes = await fetch(
					`http://localhost:4000/recommendation/badmood/${feeling[0]}`
				);
				const recomData = await recomRes.json();

				return recomData.data;
			}
		}
	};

	const submitFeelingFormHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const allData = await getAllRecommendations();
		const favData = await getFavourites();
		const checkTypeOfFeeling = existFeelings(feeling);

		if (!checkTypeOfFeeling) {
			setRecomData(allData);
			setfavouriteData(favData);
			setIsLoggedIn(true);
			navigate("/recommendation/badmood");
		}
	};

	return (
		<form className="feeling-bottom" onSubmit={submitFeelingFormHandler}>
			<h1>Hi, How are you?</h1>
			<p className="feeling-date">
				<span>
					<MdDateRange />
				</span>
				<span>today, {todayDate}</span>
			</p>
			<div className="emoji-list">
				{emojis.map((emj: EmojiType, index: number) => {
					return (
						<Emoji
							key={index}
							emj={emj}
							setFeeling={setFeeling}
							feeling={feeling}
						/>
					);
				})}
			</div>
			<button type="submit" className="next-btn">
				<span>Next</span>
				<span>
					<TiArrowRightThick />
				</span>
			</button>
		</form>
	);
};

export default Feeling;
