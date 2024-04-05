import { Game } from '@/types';
import { GameCard } from './game-card';
import { SectionWrapper } from './section-wrapper';
import prismadb from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth';

export const GameList = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);
    const games: Game[] = await prismadb.games.findMany();

    return (
        <SectionWrapper>
            {games.map((game) => (
                <GameCard
                    id={game.id}
                    name={game.name}
                    rating={game.rating}
                    steamGameId={game.steamGameId}
                    platform={game.platform}
                    finished={game.finished}
                />
            ))}
        </SectionWrapper>
    );
};
