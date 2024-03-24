import { GameList } from '@/components/game-list';
import { AddGameModal } from '@/components/modal/add-game';

export const fetchCache = 'only-no-store';

export default async function Page() {
    return (
        <main className='flex flex-col mt-6 px-6 lg:px-8 2xl:px-32 pb-32 w-full'>
            <div className='flex gap-2 items-center'>
                <h1 className='text-xl 2xl:text-2xl font-normal'>
                    My games list
                </h1>
                <AddGameModal />
            </div>
            <GameList />
            <div className='flex gap-2 items-center mt-12'>
                <h2 className='text-xl 2xl:text-2xl font-normal'>
                    Favorite Games
                </h2>
                <AddGameModal />
            </div>
        </main>
    );
}
