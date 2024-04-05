'use client';

import { Github } from "lucide-react";
import { Button } from "./ui/button";
import {signIn} from 'next-auth/react';

export default function LoginWithGithub() {
    return(
        <Button onClick={() => signIn('github', {
            callbackUrl: `${window.location.origin}`
        })} variant={'secondary'}>
            Login with Github <Github className='w-5 h-5 ml-4' />
        </Button>
    );
}
