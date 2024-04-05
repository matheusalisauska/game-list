import ProfilePic from '@/assets/profile-pic.jpg';
import { Separator } from '@/components/ui/separator';
import { SeparatorHorizontal, UserIcon } from 'lucide-react';
import Image from 'next/image';
export const fetchCache = 'only-no-store';

export default async function ProfilePage() {
    return (
        <main className='flex flex-col mt-6 px-6 lg:px-8 2xl:px-32 pb-32 w-full'>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <div className='rounded-full w-[40%]'>
                    <Image
                        src={ProfilePic}
                        alt='Profile Picture'
                        className='rounded-full'
                    />
                </div>
                <section className='flex flex-col gap-6 w-full px-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-6'>
                            <UserIcon className='w-8 h-8' />
                            <p className='text-lg'>Matheus Alisauska</p>
                        </div>
                        <Separator className='bg-[#404041]' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-6'>
                            <UserIcon className='w-8 h-8' />
                            <p className='text-lg'>832 games in library</p>
                        </div>
                        <Separator className='bg-[#404041]' />
                    </div>
                </section>
            </div>
        </main>
    );
}
