import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { finalPlayerAtom, playersAtom } from "../../store/atoms/Players";
import ExitButton from "../buttons/ExitButton";
import EditPlayers from "../buttons/EditPlayers";
import Ratings from "../ratings/Ratings";
import SpinTruthOrDare from "../truthordare/SpinTruthOrDare";
import SpinModes from "../modes/SpinModes";
import { loadingAtom, questionAtom } from "../../store/atoms/Game";

const RandomPlayer = () => {
  const players = useRecoilValue(playersAtom); // Add players dynamically
  const [activeBox, setActiveBox] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [finalName, setFinalName] = useRecoilState(finalPlayerAtom);
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const [clickedMode, setClickedMode] = useState(false);
  const setQuestion = useSetRecoilState(questionAtom);

  // const spin = () => {
  //   if (spinning || players.length === 0) return; // Prevent multiple spins or spinning with no players

  //   setSpinning(true);

  //   const interval = setInterval(() => {
  //     const randomIndex = Math.floor(Math.random() * players.length);
  //     setActiveBox(randomIndex);
  //   }, 200);

  //   setTimeout(() => {
  //     clearInterval(interval);
  //     const finalBox = Math.floor(Math.random() * players.length);
  //     setFinalName(players[finalBox]);
  //     // console.log(players[finalBox]);
  //     // console.log(finalName);
  //     // alert(players[finalBox]);
  //     setActiveBox(finalBox);
  //     setSpinning(false);
  //   }, 5000); // Stop after 5 seconds
  // };


  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  const spin = () => {
    if (spinning || players.length === 0) return; // Prevent multiple spins or spinning with no players

    setSpinning(true);
    let lastActiveBox = null;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * players.length);
      setActiveBox(randomIndex);
      lastActiveBox = randomIndex;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const shuffledPlayers = shuffleArray([...players]);
      setActiveBox(lastActiveBox);
      setSpinning(false);
      setTimeout(() => {
        setFinalName(players[lastActiveBox]);
      }, 1000);
    }, 5000); // Stop after 5 seconds
  };


  // Determine the grid columns dynamically
  const gridColumns = players.length > 9 ? "grid-cols-5" : "grid-cols-3";

  return (
    <div className="mt-8 w-[90%]">

      <div className="flex justify-between w-full">
        <ExitButton />
        <Ratings />
        <EditPlayers />
      </div>

      {finalName ? (
        <div className="flex flex-col items-center">
          <SpinTruthOrDare />

          {clickedMode ? (
            <>
              <button 
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-md hover:from-green-600 hover:to-teal-700 transition duration-200"
              onClick={() => {
                  setClickedMode(false);
                  setFinalName("")
                  setActiveBox(null)
                  setQuestion("");
              }}>Done</button>
            </>
          ) : (
            <SpinModes setClickedMode={setClickedMode} setLoading={setLoading} />
          )}

        </div>
      ) : (
        <>
          <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8">
            Pick Random Player
          </h2>

          <div className="mt-8 flex flex-col items-center space-y-4 w-[60%] m-auto">
            {/* Players Grid */}
            <div className={`grid ${gridColumns} gap-3`}
              style={{
                gridTemplateColumns: `repeat(${
                  players.length > 9 ? 5 : 3
                }, minmax(0, 1fr))`,
              }}
            >
              {players.map((player, index) => (
                <div
                  key={index}
                  className={`w-32 h-20 flex items-center justify-center rounded-md text-white font-semibold shadow-lg transition duration-200 ${
                    activeBox === index
                      ? "bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 scale-105 border-2 border-blue-600"
                      : "bg-gradient-to-r from-purple-500 to-purple-800"
                  } overflow-hidden text-center p-1`}
                >
                  <span className="truncate text-[1.2rem]">{player}</span>
                </div>
              ))}
            </div>

            {/* Spin Button */}
            <button
              onClick={spin}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-md hover:from-green-600 hover:to-teal-700 transition duration-200"
            >
              Spin
            </button>


              {/* <div className="flex gap-2 w-full max-w-lg">
                <input
                  type="text"
                  placeholder="Enter player name"
                  className="w-full px-3 py-2 rounded-md dark:bg-gray-800 dark:border-gray-700 border focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") addPlayer(e.target.value);
                  }}
                />
                <button
                  onClick={() => addPlayer(document.querySelector("input").value)}
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Add
                </button>
              </div> */}
          </div>
        </>
      )}

      
    </div>
  );
};

export default RandomPlayer;
