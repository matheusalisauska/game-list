
export type Platform = 'PC' | 'PlayStation' | 'Mobile';

export type Game = {
    id: string;
    name: string;
    platform: Platform;
    imageUrl: string;
    finished: boolean;
    createdAt: Date;
    updatedAt: Date;

}
