import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <main className='flex flex-col mt-6 px-6 lg:px-8 2xl:px-32 pb-32 w-full'>
            <section className='flex flex-col gap-2'>
                <Skeleton className='w-full h-[160px]' />
                <div className='flex gap-2'>
                    <Skeleton className='w-1/2 h-6 rounded-xl' />
                    <Skeleton className='w-1/6 h-6 rounded-xl' />
                </div>
                <div className='flex gap-4'>
                    <Skeleton className='w-1/4 h-6 rounded-xl' />
                    <Skeleton className='w-1/5 h-6 rounded-xl' />
                </div>
                <div className='flex gap-4'>
                    <Skeleton className='w-1/4 h-6 rounded-xl' />
                    <Skeleton className='w-1/5 h-6 rounded-xl' />
                </div>
                <div className='flex flex-col gap-2'>
                    <Skeleton className='w-1/4 h-6 rounded-xl' />
                    <Skeleton className='w-1/3 h-6 rounded-xl' />
                </div>
                <Skeleton className='w-full h-24 rounded-xl' />
            </section>
        </main>
    );
}
