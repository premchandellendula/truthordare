import React, { useState } from 'react'
import PlayersForm from '../form/PlayersForm'
import RandomPlayer from '../randomplayer/RandomPlayer'
import { useRecoilValue } from 'recoil'
import { addedPlayersAtom, playersAtom } from '../../store/atoms/Players'

const SpinNDareMode = () => {
    const players = useRecoilValue(playersAtom);
    // const [addedPlayers, setAddedPlayers] = useState(false);
    const addedPlayers = useRecoilValue(addedPlayersAtom);
    // console.log(addedPlayers)

    return (
        <div className='w-full h-screen dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black flex flex-col items-center'>
            {/* {players.length === 0 ? (
                <PlayersForm /> // Show PlayersForm if no players are added
            ) : (
                <RandomPlayer /> // Show RandomPlayer if players are present
            )} */}

            {(addedPlayers && players.length > 0) ? (
                <>
                <RandomPlayer />
                </>
            ):(
                <>
                <PlayersForm />
                </>
            )}

            {/* <RandomPlayer /> */}
        </div>
    )
}

export default SpinNDareMode