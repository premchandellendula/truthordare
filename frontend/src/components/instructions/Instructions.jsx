// import React from 'react'

// const Instructions = () => {
//     return (
//         <div className='w-[50%] m-auto mt-20 pb-10'>
//             <div>
//                 <div>
//                     <h2 className='text-[1.7rem] dark:text-white font-semibold'>
//                         Ready for a Wild Ride of Fun and Surprises?
//                     </h2>
//                     <p className='text-[1.2rem] text-justify mt-4 dark:text-gray-400'>
//                         Few games bring as much laughter, thrill, and unforgettable moments as Truth or Dare! Whether you're looking to spark conversations, strengthen friendships, or just create hilarious memories, this classic game never disappoints.
//                     </p>
//                 </div>

//                 <div className='mt-6'>
//                     <h2 className='text-[1.7rem] dark:text-white font-semibold'>
//                         Play Truth or Dare Online!
//                     </h2>
//                     <p className='text-[1.2rem] text-justify mt-4 dark:text-gray-400'>
//                         Want an exciting game that keeps everyone on their toes? Look no further! Our Truth or Dare online game is packed with unexpected twists, endless laughter, and challenges that will keep you entertained for hours.
//                         <br />
//                         <br />
//                         No more struggling to come up with creative questions and dares—we’ve got you covered! With over 1,000 handpicked truths and dares across multiple categories, the fun never stops.
//                         <br />
//                         <br />
//                         The best part? You can play anytime, anywhere, with anyone—no setup needed! Just jump in, pick a mode, and let the game do the rest. Play for free on our website or download the app and get started!
//                     </p>
//                 </div>

//                 {/* How To Play */}
//                 <div className='mt-12'>
//                     <h2 className='text-[1.7rem] dark:text-white font-semibold'>How To Play?</h2>

//                     <p className='text-[1.2rem] mt-4 dark:text-white font-semibold'>We have two modes: <i className=''>Quick Play</i>, <i>Spin & Dare</i> </p>

//                     <div className='mt-8'>
//                         <h3 className='text-[1.4rem] dark:text-white font-medium'>Quick Play</h3>
//                         <ol className='mt-2 space-y-1 dark:text-gray-300 list-decimal list-inside'>
//                             <li>Gather all the players and form a round circle.</li>
//                             <li>Click on Quick Play Mode.</li>
//                             <li>Pick a Bottle, Pen, or any tool which can help you pick players.</li>
//                             <li>Choose the Rating you like, choose it carefully 😁</li>
//                             <li>Spin the Bottle</li>
//                             <li>Ask the player to pick Either Truth or Dare, if they don't, just pick Random</li>
//                             <li>Continue Spinning and Enjoy </li>
//                         </ol>
//                     </div>

//                     <div className='mt-8'>
//                         <h3 className='text-[1.4rem] dark:text-white font-medium'>Spin & Dare</h3>
//                         <ol className='mt-2 space-y-1 dark:text-gray-300 list-decimal list-inside'>
//                             <li>Gather all the players and form a round circle.</li>
//                             <li>Click on Spin & Dare Mode.</li>
//                             <li>Add all the players and click done.</li>
//                             <li>Choose the Rating you like, choose it carefully 😁</li>
//                             <li>Click the Spin Button and wait for the player's turn. </li>
//                             <li>Ask the player to pick Either Truth or Dare, if they don't, just pick Random</li>
//                             <li>After Answering the question, click done</li>
//                             <li>Continue till you get bored</li>
//                         </ol>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Instructions



import React from 'react';

const Instructions = () => {
    return (
        <div className='w-[80%] md:w-[60%] m-auto mt-20 pb-16 text-gray-800 dark:text-gray-300'>
            <div>
                <h2 className='text-[1.8rem] md:text-[2rem] font-bold text-center bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text'>
                    Ready for a Wild Ride?
                </h2>
                <p className='text-[1.2rem] md:text-[1.3rem] mt-6 text-center'>
                    Truth or Dare is the perfect game for breaking the ice, creating unforgettable moments, and sharing endless laughter. Whether you want to test your friends or challenge yourself, this game has something for everyone!
                </p>
            </div>

            <div className='mt-12'>
                <h2 className='text-[1.8rem] md:text-[2rem] font-bold text-center bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text'>
                    Play Truth or Dare Online!
                </h2>
                <p className='text-[1.2rem] md:text-[1.3rem] mt-6 text-center'>
                    No need to think of questions or dares on the spot! With over 1,000 carefully curated challenges across multiple categories, you'll never run out of fun. Play anytime, anywhere, with anyone—right on our website or through our app!
                </p>
            </div>

            {/* How To Play */}
            <div className='mt-16'>
                <h2 className='text-[1.8rem] md:text-[2rem] font-bold text-center bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text'>How To Play</h2>

                <p className='text-[1.2rem] md:text-[1.3rem] mt-6 text-center font-semibold'>Choose between two exciting modes: <span className='italic'>Quick Play</span> and <span className='italic'>Spin & Dare</span>.</p>

                <div className='mt-10'>
                    <h3 className='text-[1.6rem] font-semibold text-pink-500 dark:text-pink-400'>Quick Play</h3>
                    <ol className='mt-3 space-y-2 list-decimal list-inside text-[1.1rem] md:text-[1.2rem]'>
                        <li>Gather players and form a circle.</li>
                        <li>Click on Quick Play Mode.</li>
                        <li>Pick an object (bottle, pen, etc.) to spin and select players.</li>
                        <li>Choose the challenge rating—choose wisely! 😏</li>
                        <li>Spin the bottle and let fate decide.</li>
                        <li>Ask the chosen player to pick Truth or Dare—or choose for them!</li>
                        <li>Keep playing and enjoy the fun!</li>
                    </ol>
                </div>

                <div className='mt-12'>
                    <h3 className='text-[1.6rem] font-semibold text-blue-500 dark:text-blue-400'>Spin & Dare</h3>
                    <ol className='mt-3 space-y-2 list-decimal list-inside text-[1.1rem] md:text-[1.2rem]'>
                        <li>Gather players and sit in a circle.</li>
                        <li>Click on Spin & Dare Mode.</li>
                        <li>Add all players' names and hit 'Done.'</li>
                        <li>Choose your challenge rating wisely! 😈</li>
                        <li>Click 'Spin' to decide the player’s turn.</li>
                        <li>They choose Truth or Dare—or let the game decide!</li>
                        <li>Once they complete the challenge, click 'Done.'</li>
                        <li>Repeat until you're out of dares—or energy! 😆</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Instructions;