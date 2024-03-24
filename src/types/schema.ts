import z from 'zod';

export const addGameSchema = z.object({
    name: z.string().min(1).max(100),
    imageUrl: z.string().min(1),
    finished: z.boolean(),
});

export type AddGame = z.infer<typeof addGameSchema>;
