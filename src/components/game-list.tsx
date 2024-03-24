import { Game } from '@/types';
import { GameCard } from './game-card';
import { SectionWrapper } from './section-wrapper';
import prismadb from '@/lib/prisadb';

export const GameList = async () => {
    const games: Game[] = await prismadb.games.findMany();

    return (
        <SectionWrapper>
            {games.map((game) => (
                <GameCard
                    id={game.id}
                    name={game.name}
                    steamGameId={game.steamGameId}
                    platform={game.platform}
                    finished={game.finished}
                />
            ))}
        </SectionWrapper>
    );
};
