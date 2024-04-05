'use client';
import ReactStars from 'react-stars';

interface GameRatingProps {
    rating: number;
}

export const GameRating = ({ rating }: GameRatingProps) => {
    const ratingChanged = (newRating: any) => {
        console.log(newRating);
    };
    console.log(rating)
    return (
        <div className='flex flex-col'>
            <p className='font-normal text-lg -mb-2'>Your rating:</p>
            <ReactStars
                value={rating}
                count={5}
                onChange={ratingChanged}
                size={32}
                color2={'#ffd700'}
            />
        </div>
    );
};
