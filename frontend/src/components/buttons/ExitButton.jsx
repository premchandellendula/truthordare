import React from 'react'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { playersAtom } from '../../store/atoms/Players';
const ExitButton = () => {
    const navigate = useNavigate();
    const setPlayers = useSetRecoilState(playersAtom);
    return (
        <button onClick={(e) => {
            e.preventDefault();
            setPlayers([]);
            navigate('/');
        }} className='bg-gray-500 hover:bg-gray-500/90 dark:bg-gray-600 dark:hover:bg-gray-600/90 text-white flex justify-center items-center gap-1 px-3 py-1 rounded-md shadow-md transition-transform'>
            {<LogOut className='h-4 w-4' />} Exit
        </button>
    )
}

export default ExitButton