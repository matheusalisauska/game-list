import { GameRating } from '@/components/game-rating';
import { PlatformTag } from '@/components/platform-tag';
import prismadb from '@/lib/prisadb';
import { Game } from '@/types';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { Suspense } from 'react';
import { Oval } from 'react-loading-icons';
import Loading from './loading';

export default async function GameView({ params }: { params: { id: string } }) {
    const game: Game | null = await prismadb.games.findUnique({
        where: {
            id: params.id,
        },
    });

    const data = await fetch(
        `https://store.steampowered.com/api/appdetails?appids=${game?.steamGameId}`,
        {
            method: 'GET',
        }
    ).then((res) => res.json());

    const steamInfo = data[game?.steamGameId!].data;

    if (!game) {
        return <div>Jogo não encontrado</div>;
    }

    return (
        <main className='flex flex-col mt-6 px-6 lg:px-8 2xl:px-32 pb-32 w-full'>
            <section className='flex flex-col gap-2'>
                <Image
                    src={steamInfo.header_image}
                    alt='Game Image'
                    width={1920}
                    height={1080}
                    className='object-cover 2xl:object-fill h-full w-full'
                />
                <div className='flex gap-2 items-center'>
                    <h1 className='text-2xl font-semibold'>{steamInfo.name}</h1>
                    <PlatformTag platform={game.platform} />
                </div>
                <div className='flex gap-4'>
                    <p className='opacity-50'>Started at:</p>
                    <p className='text-[#7093f3]'>
                        {new Date(game.createdAt).toLocaleDateString()}
                    </p>
                </div>
                <div className='flex gap-4'>
                    <p className='opacity-50'>Status:</p>
                    {game.finished ? (
                        <div className='flex items-center gap-1 text-amber-300'>
                            <Check size={16} />
                            Finished
                        </div>
                    ) : (
                        <div className='flex items-center gap-2 lg:gap-2 text-green-500'>
                            <Oval width={20} height={20} stroke='#1fc55e' />
                            Currently playing
                        </div>
                    )}
                </div>
                <GameRating />
                <p>{steamInfo.short_description}</p>
            </section>
        </main>
    );
}
