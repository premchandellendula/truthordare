import React from "react";

const TruthOrDareCard = ({ mode, question }) => {
    const borderColor = mode === "truth" ? "border-green-500" : mode === "dare" ? "border-red-500" : "border-purple-500";

    return (
        <div className={`w-80 h-96 rounded-3xl border-[10px] shadow-lg bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-800 dark:to-gray-900 ${borderColor} p-6 flex flex-col items-center justify-between text-center`}>
            <div>
                <h1 className={`text-4xl font-bold 
                ${
                    mode === "truth"
                    ? "text-green-600"
                    : mode === "dare"
                    ? "text-red-600"
                    : "text-purple-600"
                }`}>
                {mode.toUpperCase()}
                </h1>
            </div>

            <div className="flex-grow flex items-center justify-center">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-200 px-4">{question}</p>
            </div>

            <div>
                <span className="text-6xl">
                    {mode === "truth" && "🕵️"}
                    {mode === "dare" && "🔥"}
                    {mode === "tod" && "🎭"}
                </span>
            </div>
        </div>
    );
};

export default TruthOrDareCard;
