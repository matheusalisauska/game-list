import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/../prisma/client';

const createGameSchema = z.object({
    name: z.string().min(1).max(255),
    imageUrl: z.string().min(1),
    finished: z.boolean()
});

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = createGameSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const newHerb = await prisma.games.create({
        data: { name: body.name, finished: body.finished },
    });

    return NextResponse.json(newHerb, {status: 201});
}
