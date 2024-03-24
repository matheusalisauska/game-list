import { Platform } from '@/types';
import Image, { StaticImageData } from 'next/image';

import { Check, Monitor, MoreVerticalIcon } from 'lucide-react';
import { Oval } from 'react-loading-icons';
import { PlatformTag } from './platform-tag';
import Link from 'next/link';

interface GameCardProps {
    id: string;
    name: string;
    platform: Platform;
    steamGameId: number;
    finished: boolean;
}

export const GameCard = async ({
    id,
    name,
    platform,
    finished,
    steamGameId,
}: GameCardProps) => {

    const steam = await fetch(
        `https://store.steampowered.com/api/appdetails?appids=${steamGameId}`,
        {
            method: 'GET',
        }
    ).then((res) => res.json());

    const gameName = steam[steamGameId].data.name;
    const image = steam[steamGameId].data.header_image;
    
    return (
        <div className='relative flex lg:flex-col gap-3 w-full'>
            <MoreVerticalIcon
                size={16}
                className='absolute right-0 top-0 2xl:hidden'
            />
            <div className='relative w-[150px] lg:w-full lg:h-[200px] rounded-lg overflow-hidden'>
                <div className='absolute top-1 left-1 px-2 rounded-2xl bg-black/50 text-xs 2xl:text-base'>
                    <p>4.8 / 5</p>
                </div>
                <Image
                    src={image}
                    alt='Game Image'
                    width={1920}
                    height={1080}
                    className='object-cover 2xl:object-fill h-full w-full'
                />
            </div>
            <div className='flex flex-col 2xl:grid 2xl:grid-cols-2 2xl:grid-rows-2 gap-2'>
                <Link href={`/game/${id}`} className='text-lg lg:text-xl font-normal'>{gameName}</Link>
                <PlatformTag platform={platform}/>
                <div className='text-zinc-400 text-sm 2xl:text-base'>
                    {finished ? (
                        <div className='flex items-center gap-1 text-amber-300'>
                            <Check size={16} />
                            Finished
                        </div>
                    ) : (
                        <div className='flex items-center gap-1 lg:gap-2 text-green-500'>
                            <Oval width={20} height={20} stroke='#1fc55e' />
                            Currently playing
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
