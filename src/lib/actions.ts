'use server';
import { defaultAddGame } from '@/content/default-values';
import { addGameSchema } from '@/types/schema';

export const addGame = async (
    finished: boolean,
    _: any,
    formData: FormData
) => {
    try {
        const form = Object.fromEntries(formData.entries());

        const data = addGameSchema.safeParse({
            name: form.name,
            imageUrl: form.imageUrl,
            finished: finished,
        });

        if (!data.success) {
            return {
                message: 'Validation error',
                errors: data.error.flatten().fieldErrors,
            };
        }

        const req = await fetch('http://localhost:3000/api/game', {
            method: 'POST',
            body: JSON.stringify(data.data),
        }).then((res) => res.json());

        if (!req) {
            return {
                message: 'Erro ao editar a distribuidora',
                errors: {},
            };
        }

        return {
            message: 'Sucesso',
            errors: {},
        };
    } catch (error) {
        return {
            message: 'unknown error',
            errors: {
                ...defaultAddGame,
                unknown: 'Erro desconhecido.',
            },
        };
    }
};
