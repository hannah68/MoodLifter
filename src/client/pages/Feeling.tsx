import "../styles/feeling.css";

import { emojis } from "../data/emoji";
import { EmojiType } from "../data/emoji";
import { todayDate } from "../utils/utils";

import Emoji from "../components/Emoji";

import { FormEvent, useState } from "react";
import { MdDateRange } from "react-icons/md";
import { TiArrowRightThick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import {existFeelings} from '../utils/utils';
import {RecommendationType} from '../interfaces';

export const FeelingType: string[] = [];

export interface IFeelingProps {
	setRecomData: (target: RecommendationType[]) => void;
}

const Feeling = (props: IFeelingProps) => {
	const { setRecomData} = props;
	const [feeling, setFeeling] = useState(FeelingType);
	
	const navigate = useNavigate();

	const getAllRecommendations = async() => {
		
		if(feeling){
			const checkTypeOfFeeling = existFeelings(feeling);

			if(checkTypeOfFeeling){
				navigate('/recommendation/good');
			}
			const recomRes = await fetch(`http://localhost:4000/recommendation/${feeling[0]}`);
			const recomData = await recomRes.json();
			return recomData
		}
	}

	console.log('feeling',feeling);

	const submitFeelingFormHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const allData = await getAllRecommendations();
		setRecomData(allData.data);
		navigate('/recommendation');
	}

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
