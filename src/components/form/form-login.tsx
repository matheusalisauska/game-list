'use client';

import { useState } from 'react';
import LoginWithGithub from '../login-with-github';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';

export default function FormLogin() {
    const [email, setEmail] = useState<null | string>(null);

    async function SignInWithEmail() {
        console.log("entrou aq")
        const signInResult = await signIn('email', {
            email: email,
            callbackUrl: `${window.location.origin}`,
            redirect: false,
        });

        if (!signInResult?.ok) {
            return toast('Well this did not work...', {
                description: 'Something went wrong, please try again',
            });
        }

        return toast('Check your email', {
            description: 'A magic link has been sent to you',
        });
    }

    return (
        <form action={SignInWithEmail}>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <h1 className='text-2xl'>Login</h1>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='username'>Email</Label>
                    <Input
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        name='email'
                        className='placeholder:text-gray-400'
                    />
                </div>
                <Button type='submit' variant={'secondary'}>
                    Login with Email
                </Button>
                <LoginWithGithub />
            </div>
        </form>
    );
}
