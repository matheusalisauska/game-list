
export type Platform = 'PC' | 'PlayStation' | 'Mobile';

export type Game = {
    id: string;
    name: string;
    platform: Platform;
    steamGameId: number;
    finished: boolean;
    createdAt: Date;
    updatedAt: Date;

}
