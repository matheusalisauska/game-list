'use client';
import { signOut } from 'next-auth/react';
import { Button } from './ui/button';

export default function LogouButton() {
    return (
        <Button
            onClick={() =>
                signOut({ callbackUrl: `${window.location.origin}/auth` })
            }
            variant={'secondary'}
        >
            Log out
        </Button>
    );
}
