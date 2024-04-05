import { NextAuthOptions } from 'next-auth';

import GithubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
import type { Adapter } from 'next-auth/adapters';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/utils/db';
import prismadb from '@/lib/prisma';

export const authOptions = {
    adapter: PrismaAdapter(prismadb) as Adapter,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET_ID as string,
        }),
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT as any,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
    ],
} satisfies NextAuthOptions;
