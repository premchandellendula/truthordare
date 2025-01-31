import { Pencil } from 'lucide-react'
import React, { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { addedPlayersAtom } from '../../store/atoms/Players';

const EditPlayers = () => {
    const setAddedPlayers = useSetRecoilState(addedPlayersAtom);
    // console.log(addedPlayers);

    return (
        <button onClick={() => {
            setAddedPlayers(false);
    // console.log(addedPlayers);

            // alert("called")
        }} className='bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 dark:from-blue-600 dark:via-cyan-600 dark:to-teal-600 text-white flex justify-center items-center gap-1 px-3 py-2 rounded-md shadow-md transition-transform'>
            {<Pencil className='h-4 w-4' />} 
            <span className='hidden md:block'>Edit Players</span>
        </button>
    )
}

export default EditPlayers