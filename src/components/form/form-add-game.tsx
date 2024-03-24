'use client';

import { addGameInitialState } from '@/content/initial-states';
import { addGame } from '@/lib/actions';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useFormState } from 'react-dom';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import ButtonSubmit from '../ui/submit-button';
import { Switch } from '../ui/switch';

interface FormAddGameProps {
    setModalOpen: (open: boolean) => void;
}

export const FormAddGame = ({ setModalOpen }: FormAddGameProps) => {
    const [finished, setFinished] = useState<boolean>(false);
    const addGameActionWithParams = addGame.bind(null, finished);
    const [formState, formAction] = useFormState(addGameActionWithParams, addGameInitialState);

    return (
        <form action={formAction} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
                <Label htmlFor='name' className='text-white text-base'>
                    Name *
                </Label>
                <Input name='name' data-test='name' className='border-2' />
            </div>
            <div className='flex flex-col gap-1'>
                <Label htmlFor='imageUrl' className='text-white text-base'>
                    Image URL *
                </Label>
                <Input
                    name='imageUrl'
                    data-test='imageUrl'
                    className='border-2'
                />
            </div>
            <div className='flex flex-col gap-1'>
                <Label htmlFor='imageUrl' className='text-white text-base'>
                    Have you finished? *
                </Label>
                <div className='flex gap-2'>
                    <Switch
                    name='finished'
                        checked={finished}
                        onCheckedChange={setFinished}
                        id='airplane-mode'
                    />
                    <span>{finished ? 'Yeah' : 'Nop'}</span>
                </div>
            </div>
            <ButtonSubmit
                label='Add New Game'
                variant='secondary'
                pendingLabel='Loading...'
                className='w-full'
            />
        </form>
    );
};
