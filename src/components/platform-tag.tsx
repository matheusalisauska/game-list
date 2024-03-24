import { Platform } from '@/types';
import { Gamepad2, Monitor, Smartphone } from 'lucide-react';

interface PlatformTagProps {
    platform: Platform;
}

export const PlatformTag = ({ platform }: PlatformTagProps) => {
    return (
        <>
            {platform === 'PC' && (
                <div className='flex gap-1 items-center 2xl:justify-self-end text-sm 2xl:text-base text-[#ff615c]  bg-[#321615] h-fit w-fit p-1 px-2 2xl:px-2 rounded-2xl'>
                    <Monitor className='size-5' />
                    <p>PC</p>
                </div>
            )}
            {platform === 'PlayStation' && (
                <div className='flex gap-1 items-center 2xl:justify-self-end text-sm 2xl:text-base text-[#5c88ff]  bg-[#161c2c] h-fit w-fit p-1 2xl:px-2 rounded-2xl'>
                    <Gamepad2 className='size-5' />
                    <p>PlayStation</p>
                </div>
            )}
            {platform === 'Mobile' && (
                <div className='flex gap-1 items-center 2xl:justify-self-end text-sm 2xl:text-base text-[#be5cff]  bg-[#31203d] h-fit w-fit p-1 2xl:px-2 rounded-2xl'>
                    <Smartphone className='size-5' />
                    <p>Mobile</p>
                </div>
            )}
        </>
    );
};
