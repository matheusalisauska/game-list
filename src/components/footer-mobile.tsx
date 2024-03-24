import { Home, HomeIcon, Settings, User } from 'lucide-react';
import Link from 'next/link';

export const FooterMobile = () => {
    return (
        <footer className='w-screen lg:hidden fixed bottom-0 right-0 px-6 py-3 rounded-xl bg-black '>
            <section className='flex justify-between w-full'>
                <Link href='/' className='flex flex-col items-center gap-1'>
                    <HomeIcon size={22} />
                    Home
                </Link>

                <Link href='/manage' className='flex flex-col items-center gap-1'>
                    <Settings size={22} />
                    Manage
                </Link>
                <Link href='/profile' className='flex flex-col items-center gap-1'>
                    <User size={22} />
                    Profile
                </Link>
            </section>
        </footer>
    );
};
