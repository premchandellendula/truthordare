import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Landing from "./pages/landing/Landing";
import ThemeProvider from "./pages/contexts/ThemeProvider";
import QuickPlay from "./pages/modes/QuickPlay";
import SpinNDare from "./pages/modes/SpinNDare";
import { RecoilRoot } from "recoil";

function App() {

  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <ThemeProvider>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/quickplay" element={<QuickPlay />} />
              <Route path="/spinanddare" element={<SpinNDare />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  )








  // const [mode, setMode] = useState("");
  // const [rating, setRating] = useState("pg");
  // const [question, setQuestion] = useState("");

  // const fetchQuestions = (selectedMode) => {
  //   if (!rating) {
  //     alert("Please select a rating first!");
  //     return;
  //   }
  //   axios.get(`http://localhost:3000/api/v1/question/${selectedMode}?rating=${rating}`)
  //     .then(res => {
  //       setMode(selectedMode);
  //       setQuestion(res.data.question);
  //       console.log(res.data.question);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching the question:", error.message);
  //     });
  // }
  // return (
  //   <>
      
  //     <div className="bg-gray-300 p-4 flex justify-center items-center gap-5">
  //       <div>
  //         <input onClick={() => {
  //           setRating('pg')
  //         }} type="radio" name="rating" id="pg" defaultChecked />
  //         <label htmlFor="pg" >pg</label>
  //       </div>

  //       <div>
  //         <input onClick={() => {
  //           setRating('pg13')
  //         }} type="radio" name="rating" id="pg13" />
  //         <label htmlFor="pg13" >pg13</label>
  //       </div>

  //       <div>
  //         <input onClick={() => {
  //           setRating('r')
  //         }}  type="radio" name="rating" id="r" />
  //         <label htmlFor="r" >r</label>
  //       </div>
  //     </div>

  //     <div className="flex justify-center items-center gap-4 mt-5">
  //         <Button label={"Truth"} onClick={() => {
  //           fetchQuestions("truth");
  //         }} />
  //         <Button label={"Dare"} onClick={() => {
  //           fetchQuestions("dare");
  //         }} />
  //         <Button label={"Random"} onClick={() => {
  //           fetchQuestions("tod");
  //         }} />
  //     </div>

  //     <div className="bg-black text-white h-32 flex flex-col justify-center items-center mt-5">
  //       <p className="text-[1.5rem]">{mode === 'tod' ? "random" : mode }</p>
  //       <p className="">{question}</p>
  //     </div>

  //   </>
  // )
}

function Button({label, onClick}){
  return (
    <button onClick={onClick} className="bg-green-400 px-4 py-2 cursor-pointer rounded-md">{label}</button>
  )
}

export default App
