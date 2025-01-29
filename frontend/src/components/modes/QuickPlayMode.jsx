import axios from 'axios';
import React, { useState } from 'react'
import CardSkeleton from '../skeletons/CardSkeleton';
import TruthOrDareCard from '../card/TruthOrDareCard';
import ModeBtn from '../buttons/ModeBtn';
import RatingsBtn from '../buttons/RatingsBtn';
import { useRecoilState } from 'recoil';
import { loadingAtom, modeAtom, questionAtom, ratingsAtom, selectedRatingAtom } from '../../store/atoms/Game';
import Ratings from '../ratings/Ratings';
import Modes from './Modes';
import TruthOrDare from '../truthordare/TruthOrDare';

const QuickPlayMode = () => {
    // const [mode, setMode] = useState("");
    // const [rating, setRating] = useState("pg");
    // const [question, setQuestion] = useState("");
    // const [selectedRating, setSelectedRating] = useState("pg");

    const [mode, setMode] = useRecoilState(modeAtom);
    const [rating, setRating] = useRecoilState(ratingsAtom);
    const [question, setQuestion] = useRecoilState(questionAtom);
    const [selectedRating, setSelectedRating] = useRecoilState(selectedRatingAtom);


    const [loading, setLoading] = useState(false);
    // const fetchQuestions = (selectedMode) => {
    //     if (!rating) {
    //         alert("Please select a rating first!");
    //         return;
    //     }
    //     setLoading(true);
    //     // setQuestion("");
    //     axios.get(`http://localhost:3000/api/v1/question/${selectedMode}?rating=${rating}`)
    //         .then(res => {
    //             setMode(selectedMode);
    //             setQuestion(res.data.question);
    //             // console.log(res.data.question);
    //             setLoading(false)
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching the question:", error.message);
    //             setLoading(false);
    //         })
    // }
    return (
        <div className='h-screen dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black flex flex-col items-center'>
            {/* ratings */}
            <div className='flex mt-8 gap-4'>
                {/* <RatingsBtn isSelected={selectedRating === "pg"} label={"Chill"} onClick={() => {
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
                    }} /> */}
                <Ratings />
            </div>

            {/* after clicking the truth or dare or tod, show a card and done button */}
            {/* may be conditional rendering */}
            
            {/* <div className='h-80 w-72 rounded-md flex flex-col items-center text-center my-4 '>
                {loading ? (
                    // Loading Skeleton
                    <CardSkeleton />
                    ) : question === "" ? (
                        // Initial State: Emoji and Rating Text
                        <>
                            <span className="text-[5rem] mt-6">
                            {rating === "pg" && "🥳"}
                            {rating === "pg13" && "⚡"}
                            {rating === "r" && "🔥"}
                            </span>
                            <p className="text-[2.5rem] mt-10 dark:text-white">
                            {rating === "pg" && "Chill"}
                            {rating === "pg13" && "Daring"}
                            {rating === "r" && "Extreme"}
                            </p>
                        </>
                    ) : (
                        // Display Question Card
                        //   <div
                        //     className={`h-80 w-80 rounded-md shadow-xl bg-gray-50 flex flex-col dark:bg-gray-900 dark:text-white ${
                        //       mode === "truth"
                        //         ? "border-[14px] border-teal-600"
                        //         : mode === "dare"
                        //         ? "border-[14px] border-red-600"
                        //         : mode === "tod"
                        //         ? "border-[14px] border-blue-600"
                        //         : "border-transparent"
                        //     }`}
                        //   >
                        //     <span className="mb-10 text-[2rem] font-playwrite mt-2">{mode}</span>
                        //     <p className="text-[1.6rem] text-center font-poppins">{question}</p>
                        //   </div>
                        <TruthOrDareCard mode={mode} question={question} />
                    )
                }
            </div> */}
            <TruthOrDare loading={loading} />

            {/* buttons */}
            <div className='flex gap-4'>
                {/* <ModeBtn label={"Truth"} onClick={() => {
                    fetchQuestions("truth")
                }} />
                <ModeBtn label={"Dare"} onClick={() => {
                    fetchQuestions("dare")
                }} />
                <ModeBtn label={"TOD"} onClick={() => {
                    fetchQuestions("tod")
                }} /> */}

                <Modes setLoading={setLoading} />
            </div>
        </div>
    )
}

// function RatingsBtn({label, onClick, isSelected}){
//     const getEmoji = (label) => {
//         switch (label.toLowerCase()) {
//             case "chill":
//                 return "🥳";
//             case "daring":
//                 return "⚡";
//             case "extreme":
//                 return "🔥";
//             default:
//                 return "🤔"; // Default emoji
//         }
//     };
//     return (
//         <button 
//         onClick={onClick} 
//         className={`text-[1.5rem] px-6 py-1.5 rounded-full font-semibold transition-all duration-300 shadow-md 
//             ${isSelected
//                 ? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg"
//                 : "bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:from-yellow-400 hover:to-red-500"
//             } 
//             dark:${isSelected
//                 ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-black"
//                 : "bg-gradient-to-t from-purple-600 to-blue-600 text-white hover:from-indigo-500 hover:to-purple-500"
//         }`}>
//             <span className="mr-2">
//             {getEmoji(label)}
//             </span>
//             {label}
//         </button>
//     )
// }

// function ModeBtn({label, onClick}){
//     return (
//         <button onClick={onClick} className='text-[1.5rem] px-6 py-1.5 rounded-full text-white bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-pink-500 hover:to-red-500 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 transition-all duration-300'>
//             {label}
//         </button>
//     )
// }

export default QuickPlayMode


// the last thing I changed in here is setQuestion("") in fetchQuestions(), untill that commented everything worked and now everything works too, but if anything doesn't work, uncomment that