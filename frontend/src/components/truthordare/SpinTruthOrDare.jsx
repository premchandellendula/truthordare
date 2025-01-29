import React from 'react'
import TruthOrDareCard from '../card/TruthOrDareCard'
import { useRecoilValue } from 'recoil'
import { loadingAtom, modeAtom, questionAtom, ratingsAtom } from '../../store/atoms/Game'
import CardSkeleton from '../skeletons/CardSkeleton'
import { finalPlayerAtom } from '../../store/atoms/Players'

const SpinTruthOrDare = () => {
    const rating = useRecoilValue(ratingsAtom);
    const question = useRecoilValue(questionAtom);
    const mode = useRecoilValue(modeAtom);
    const finalName = useRecoilValue(finalPlayerAtom);
    const loading = useRecoilValue(loadingAtom);
    return (
        <div className='h-80 w-72 rounded-md flex flex-col items-center text-center my-4 '>
            {loading ? (
                // Loading Skeleton
                <CardSkeleton />
                ) : question === "" ? (
                    // Initial State: Emoji and Rating Text
                    <>
                        <span className="text-[5rem] mt-4">
                            {rating === "pg" && "🥳"}
                            {rating === "pg13" && "⚡"}
                            {rating === "r" && "🔥"}
                        </span>
                        <p className="text-[2.5rem] mt-4 dark:text-white">
                            {rating === "pg" && "Chill"}
                            {rating === "pg13" && "Daring"}
                            {rating === "r" && "Extreme"}
                        </p>

                        {finalName && (
                            <p className='text-[1.5rem] dark:text-white mt-4'>
                                {finalName}'s Turn
                            </p>
                        )}
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
        </div>
    )
}

export default SpinTruthOrDare