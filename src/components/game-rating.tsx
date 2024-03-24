'use client';

import { useState } from 'react';

import ReactStars from 'react-stars';
export const GameRating = () => {
    const ratingChanged = (newRating: any) => {
        console.log(newRating);
    };
    return (
        <div className='flex flex-col'>
            <p className='font-normal text-lg -mb-2'>Your rating:</p>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={32}
                color2={'#ffd700'}
            />
        </div>
    );
};
