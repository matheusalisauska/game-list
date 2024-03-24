import { GameCard } from '@/components/game-card';
import { SectionWrapper } from '@/components/section-wrapper';
import { AddGameModal } from '@/components/modal/add-game';
import prismadb from '@/lib/prisadb';
import { Game } from '@/types';
import { Suspense } from 'react';
export default async function Page() {
    const games: Game[] = await prismadb.games.findMany();

    return (
        <main className='flex flex-col mt-6 px-6 lg:px-8 2xl:px-32 pb-32 w-full'>
            <div className='flex gap-2 items-center'>
                <h1 className='text-xl 2xl:text-2xl font-normal'>
                    My games list
                </h1>
                <AddGameModal />
            </div>
            <SectionWrapper>
                {games.map((game) => (
                    <GameCard
                        name={game.name}
                        image={game.imageUrl}
                        platform={game.platform}
                        finished={game.finished}
                    />
                ))}
            </SectionWrapper>
            <div className='flex gap-2 items-center mt-12'>
                <h2 className='text-xl 2xl:text-2xl font-normal'>
                    Favorite Games
                </h2>
                <AddGameModal />
            </div>
        </main>
    );
}
