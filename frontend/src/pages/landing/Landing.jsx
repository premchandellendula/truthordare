import React from 'react'
import Appbar from '../../components/appbar/Appbar'
import MainContent from '../../components/maincontent/MainContent'
import Instructions from '../../components/instructions/Instructions'
import Footer from '../../components/footer/Footer'

const Landing = () => {
    return (
        <div className='dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black'>
            <Appbar />
            <MainContent />
            <Instructions />
            <Footer />
        </div>
    )
}

/**
    "Dive into the ultimate party game—Truth or Dare, now at your fingertips!"
    "Experience the excitement of Truth or Dare, wherever you are!"
    "Join friends for a thrilling round of Truth or Dare, anytime, anywhere!"
    "Unleash fun and laughter with the classic game of Truth or Dare online!"
    "Connect with friends and challenge each other in the timeless game of Truth or Dare!"
    "Get ready to spill secrets and take on challenges in this classic party game!"
    "Play the iconic game of Truth or Dare and let the fun begin!"
*/

export default Landing