import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {    
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date() + 1000000000;
        
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        else{

        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000);
        return () => clearTimeout(timer);
    });

    const { days, hours, minutes, seconds } = timeLeft;
    return (
        <div className='countdown'>
            <div className='times'>
                <div className='date'>Day</div>
                <div className='num'>{days}</div>
            </div>
            <div className='times'>
                <div className='date'>Hr</div>
                <div className='num'>{hours}</div>
            </div>
            <div className='times'>
                <div className='date'>min</div>
                <div className='num'>{minutes}</div>
            </div>
            <div className='times'>
                <div className='date'>sc</div>
                <div className='num'>{seconds}</div>
            </div>
        </div>
    );
};

export default Countdown;