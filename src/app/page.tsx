import { Gamepad2 } from 'lucide-react';

export default async function Page() {
    return (
        <main className='flex flex-col gap-8 px-7 pt-8'>
            <span className='flex gap-2'>
                <Gamepad2 />
                <h2>My game list</h2>
            </span>
        </main>
    );
}
