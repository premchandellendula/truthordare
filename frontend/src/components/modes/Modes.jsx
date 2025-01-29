import React from 'react'
import ModeBtn from '../buttons/ModeBtn'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { modeAtom, questionAtom, ratingsAtom } from '../../store/atoms/Game'
import axios from 'axios'

const Modes = ({setLoading}) => {
    const rating = useRecoilValue(ratingsAtom);
    const setMode = useSetRecoilState(modeAtom);
    const setQuestion = useSetRecoilState(questionAtom);

    const fetchQuestions = (selectedMode) => {
        console.log("clicked")
        if (!rating) {
            alert("Please select a rating first!");
            return;
        }
        setLoading(true);
        // setQuestion("");
        axios.get(`http://localhost:3000/api/v1/question/${selectedMode}?rating=${rating}`)
            .then(res => {
                setMode(selectedMode);
                setQuestion(res.data.question);
                // console.log(res.data.question);
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching the question:", error.message);
                setLoading(false);
            })
    }
    return (
        <div className='flex gap-4'>
            <ModeBtn label={"Truth"} onClick={() => {
                fetchQuestions("truth")
            }} />
            <ModeBtn label={"Dare"} onClick={() => {
                fetchQuestions("dare")
            }} />
            <ModeBtn label={"TOD"} onClick={() => {
                fetchQuestions("tod")
            }} />
        </div>
    )
}

export default Modes