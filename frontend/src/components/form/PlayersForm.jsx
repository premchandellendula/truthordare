import React, { useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { addedPlayersAtom, playersAtom } from '../../store/atoms/Players';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { playersSchema, uniquePlayersSchema } from '../../utils/validation';

const PlayersForm = () => {
    const [players, setPlayers] = useRecoilState(playersAtom);
    const setAddedPlayers = useSetRecoilState(addedPlayersAtom);
    const [playerName, setPlayerName] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const addPlayer = () => {

        if (playerName.trim() !== "") {
            setPlayers([...players, playerName]);
            setPlayerName("");
        }
    };

    const removePlayer = (index) => {
        const updatedPlayers = players.filter((_, i) => i !== index);
        setPlayers(updatedPlayers);
    };

    const clearPlayers = () => {
        setPlayers([]);
        setAddedPlayers(false);
    };
    return (
        <div className='w-[480px] py-4 border shadow-md dark:border-none dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-800 dark:to-black/30 flex flex-col items-center rounded-md mt-20'>

            <div className='w-full flex justify-between items-center p-4'>
                <p className='dark:text-gray-200 text-[1.1rem] font-semibold'>{players.length > 0 ? "Edit Players" : "Add Players"}</p>
                {/* if anything goes wrong just clear this onClick */}
                <i onClick={() => {
                    if(players.length === 0){
                        navigate('/')
                    }else{
                        setAddedPlayers(true);
                    }
                }} className='bx bx-x text-[1.5rem] dark:text-gray-500 dark:hover:text-gray-400 cursor-pointer'></i>
            </div>

            <div className='w-full flex justify-start pl-4'>
                <p className='dark:text-gray-400'>A player will be randomly selected for every reroll.</p>
            </div>

            <div className='w-full p-4 flex gap-2'>
                <input 
                value={playerName}
                onKeyDown={(e) => {
                    if (e.key === "Enter") addPlayer(e.target.value);
                }}
                onChange={(e) => {
                    const name = e.target.value;
                    setPlayerName(name);
                    
                    // const validatedPlayer = z.string().min(1, 'Name cannot be empty').parse(playerName);
                    // if any error, clear below if/else                    
                    // Check if the name already exists
                    if(players.includes(name)) {
                        setErrorMessage('Player name must be unique');                        
                    }else{
                        setErrorMessage("")
                    }
                }} type="text" placeholder='Enter a name' className='w-[70%] rounded-md dark:bg-gray-800 border dark:border-gray-700 px-2 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500' />

                <button onClick={addPlayer} value={playerName} className='w-[30%] bg-violet-600 hover:bg-violet-600/90 text-white px-3 py-1.5 rounded-md font-medium transition-all'>Add to Game</button>
            </div>

            {errorMessage && <p className="text-red-500 w-full px-4">{errorMessage}</p>}

            {players.length > 0 && (
                <div className="w-full px-4 flex flex-wrap gap-2 mt-1">
                    {players.map((player, idx) => (
                        <Badge key={idx}>
                            <p className=''>{player}</p>
                            <i className='bx bx-x text-[1.2rem] mt-1 cursor-pointer hover:text-gray-200' onClick={() => removePlayer(idx)}></i>
                        </Badge>
                    ))}
                </div>
            )}

            <div className='w-full flex justify-between'>

                <div className='flex justify-end px-4 mt-6'>
                    <button onClick={() => {
                        // if(players.length === 0){
                        //     alert("Add players");
                        //     return;
                        // }
                        // setAddedPlayers(true)

                        // if any error, clear below try/catch uncomment above code
                        try {
                            // Validate players count
                            playersSchema.parse(players);
                            uniquePlayersSchema(players).parse(players); // Ensure players are unique
                            
                            if (players.length < 2) {
                                setErrorMessage('You must add at least 2 players');
                                return;
                            }
                
                            setAddedPlayers(true);
                            // navigate('/next-page'); // or the next route
                        } catch (e) {
                            if (e instanceof z.ZodError) {
                                setErrorMessage(e.errors[0].message);
                            }
                            // alert("error")
                        }
                    }} className='flex items-center text-gray-200 gap-1 bg-green-500 hover:bg-green-500/90 dark:bg-green-600 dark:hover:bg-green-600/90 px-3 py-2 rounded-md'>
                        <i class='bx bx-check text-[1.2rem]'></i>
                        <p>Done</p>
                    </button>
                </div>

                {players.length > 0 && (
                    <div className='flex justify-end px-4 mt-6'>
                        <button onClick={clearPlayers} className='flex items-center text-gray-200 gap-1 bg-gray-500 hover:bg-gray-500/90 dark:bg-gray-600 dark:hover:bg-gray-600/90 px-3 py-2 rounded-md'>
                            <i class='bx bx-trash'></i>
                            <p>Clear Players</p>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

function Badge({children}){
    return (
        <div className='bg-violet-600 px-2.5 pb-1 rounded-full flex justify-center items-center gap-0.5 text-white'>
            {children}
        </div>
    )
}

export default PlayersForm



// import React, { useState } from "react";

// const PlayersForm = () => {
//   const [players, setPlayers] = useState([]);
//   const [playerName, setPlayerName] = useState("");

//   const addPlayer = () => {
//     if (playerName.trim() !== "") {
//       setPlayers([...players, playerName]);
//       setPlayerName("");
//     }
//   };

//   const removePlayer = (index) => {
//     const updatedPlayers = players.filter((_, i) => i !== index);
//     setPlayers(updatedPlayers);
//   };

//   const clearPlayers = () => {
//     setPlayers([]);
//   };

//   return (
//     <div className="w-[480px] py-6 border shadow-xl dark:border-none dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-800 dark:to-black/30 flex flex-col items-center rounded-md mt-20">
//       {/* Header */}
//       <div className="w-full flex justify-between items-center p-4">
//         <p className="dark:text-gray-200 text-[1.2rem] font-semibold">Add Players</p>
//         <i className="bx bx-x text-[1.5rem] dark:text-gray-500 dark:hover:text-gray-400 cursor-pointer"></i>
//       </div>

//       {/* Info */}
//       <div className="w-full flex justify-start pl-4">
//         <p className="dark:text-gray-400 text-sm">
//           A player will be randomly selected for every reroll.
//         </p>
//       </div>

//       {/* Input and Add Button */}
//       <div className="w-full p-4 flex gap-2">
//         <input
//           value={playerName}
//           onChange={(e) => setPlayerName(e.target.value)}
//           type="text"
//           placeholder="Enter a name"
//           className="w-[70%] rounded-md dark:bg-gray-800 border dark:border-gray-700 px-2 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
//         />
//         <button
//           onClick={addPlayer}
//           className="w-[30%] bg-violet-600 hover:bg-violet-500 text-white px-3 py-1.5 rounded-md font-medium transition-all"
//         >
//           Add to Game
//         </button>
//       </div>

//       {/* Player Badges */}
//       {players.length > 0 && (
//         <div className="w-full px-4 flex flex-wrap gap-2 mt-4">
//           {players.map((player, idx) => (
//             <Badge key={idx}>
//               <p className="pb-1.5">{player}</p>
//               <i
//                 className="bx bx-x text-[1.2rem] cursor-pointer hover:text-gray-200"
//                 onClick={() => removePlayer(idx)}
//               ></i>
//             </Badge>
//           ))}
//         </div>
//       )}

//       {/* Clear Players Button */}
//       {players.length > 0 && (
//         <div className="w-full flex justify-end px-4 mt-6">
//           <button
//             onClick={clearPlayers}
//             className="flex items-center text-gray-200 gap-1 bg-gray-500 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 px-3 py-2 rounded-md font-medium transition-all"
//           >
//             <i className="bx bx-trash"></i>
//             <p>Clear Players</p>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// // Badge Component
// function Badge({ children }) {
//   return (
//     <div className="bg-violet-600 px-3 py-1.5 rounded-full flex justify-between items-center gap-2 text-white shadow-md">
//       {children}
//     </div>
//   );
// }

// export default PlayersForm;
