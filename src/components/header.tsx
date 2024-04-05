import { authOptions } from '@/utils/auth';
import { Gamepad2 } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import LogouButton from './logout-button';

export const Header = async () => {
    const session = await getServerSession(authOptions);
   
    return (
        <header className='flex justify-between bg-black px-6 2xl:px-32 py-4 w-full sticky top-0 z-50'>
            <div className='flex items-center gap-16'>
                <Link href={'/'} className='flex gap-2 items-center'>
                    <Gamepad2 className='2xl:size-10' />
                    <h2 className='text-base 2xl:text-lg'>Game List</h2>
                </Link>
                <Link href={'/'} className='hidden lg:block hover:underline'>
                    Home
                </Link>
                <Link href={'/'} className='hidden lg:block hover:underline'>
                    Manage
                </Link>
                <Link href={'/'} className='hidden lg:block hover:underline'>
                    Profile
                </Link>
            </div>
            {session ? (
              <LogouButton/>
            ) : (
                <Link
                    href='/auth'
                    className='font-semibold 2xl:text-lg hover:underline'
                >
                    Login
                </Link>
            )}
        </header>
    );
};
