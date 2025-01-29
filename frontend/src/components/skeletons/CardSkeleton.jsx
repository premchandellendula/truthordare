import React from 'react';

const CardSkeleton = () => {
    return (
        <div className="h-80 w-72 rounded-md animate-pulse shadow-md overflow-hidden">
            <div className="h-full w-full bg-gradient-to-br from-orange-300 via-pink-300 to-purple-300 dark:from-purple-800 dark:via-blue-900 dark:to-gray-800 flex flex-col justify-center items-center">
                <div className="w-3/4 h-8 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-indigo-600 dark:to-purple-700 rounded-full mb-4"></div>
                <div className="w-2/3 h-6 bg-gradient-to-r from-blue-300 to-teal-300 dark:from-teal-700 dark:to-cyan-800 rounded-full mb-2"></div>
                <div className="w-1/2 h-6 bg-gradient-to-r from-green-300 to-cyan-300 dark:from-green-700 dark:to-teal-800 rounded-full"></div>
            </div>
        </div>
    );
};

export default CardSkeleton;
