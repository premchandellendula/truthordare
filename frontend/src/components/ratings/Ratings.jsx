import React from 'react'
import RatingsBtn from '../buttons/RatingsBtn';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modeAtom, questionAtom, ratingsAtom, selectedRatingAtom } from '../../store/atoms/Game';

const Ratings = () => {
    const setMode = useSetRecoilState(modeAtom);
    const setRating = useSetRecoilState(ratingsAtom);
    const setQuestion = useSetRecoilState(questionAtom);
    const [selectedRating, setSelectedRating] = useRecoilState(selectedRatingAtom);
    return (
        <div className='flex gap-4'>
            <RatingsBtn isSelected={selectedRating === "pg"} label={"Chill"} onClick={() => {
                setRating("pg");
                setSelectedRating("pg");
                setQuestion("");
                setMode("");
            }} />
            <RatingsBtn isSelected={selectedRating === "pg13"} label={"Daring"} onClick={() => {
                setRating("pg13");
                setSelectedRating("pg13");
                setQuestion("");
                setMode("");
                }} />
            <RatingsBtn isSelected={selectedRating === "r"} label={"Extreme"} onClick={() => {
                setRating("r");
                setSelectedRating("r");
                setQuestion("");
                setMode("");
                }} />
        </div>
    )
}

export default Ratings