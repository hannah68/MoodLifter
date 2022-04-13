import { FormEvent, useState } from "react";
import { MdDateRange } from "react-icons/md";
import { TiArrowRightThick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

import "../styles/feeling.css";

import { emojis } from "../data/emoji";

import Emoji from "../components/Emoji";

import { existFeelings, todayDate } from "../utils/utils";

import {
	FavouriteType,
	RecommendationType,
	EmojiType,
	FeelingType,
} from "../interface/interfaces";

import { PAGE_LINK, RECOMMENDATION } from "../utils/config";

// Feeling props interface==========================
export interface IFeelingProps {
	setRecomData: (target: RecommendationType[]) => void;
	setfavouriteData: (target: FavouriteType) => void;
	getFavourites: () => Promise<FavouriteType>;
	setIsLoggedIn: (target: boolean) => void;
}

// Feeling component================================
const Feeling = (props: IFeelingProps) => {
	const { setRecomData, setfavouriteData, getFavourites, setIsLoggedIn } =
		props;
	const [feeling, setFeeling] = useState(FeelingType);

	const navigate = useNavigate();

	// Get all recommendations=====================
	const getAllRecommendations = async () => {
		if (feeling) {
			const checkTypeOfFeeling = existFeelings(feeling);

			if (checkTypeOfFeeling) {
				navigate(PAGE_LINK.RECOMMENDATION_GOOD);
			} else {
				const recomRes = await fetch(
					`${RECOMMENDATION.RECOMMENDATION_LOW}${feeling[0]}`
				);
				const recomData = await recomRes.json();

				return recomData.data;
			}
		}
	};

	// submit feeling form=========================
	const submitFeelingFormHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const allData = await getAllRecommendations();
		const favData = await getFavourites();
		const checkTypeOfFeeling = existFeelings(feeling);

		if (!checkTypeOfFeeling) {
			setRecomData(allData);
			setfavouriteData(favData);
			setIsLoggedIn(true);
			navigate(PAGE_LINK.RECOMMENDATION_LOW);
		}
	};

	return (
		<form className="feeling-bottom" onSubmit={submitFeelingFormHandler}>
			<h1>Hi, Select one emotion that best desribes how you feel?</h1>
			<p className="feeling-date">
				<span>
					<MdDateRange />
				</span>
				<span>today, {todayDate}</span>
			</p>
			<div className="emoji-list">
				{emojis.map((emj: EmojiType, index: number) => {
					return <Emoji key={index} emj={emj} setFeeling={setFeeling} />;
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
