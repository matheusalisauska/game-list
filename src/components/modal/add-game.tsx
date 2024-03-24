'use client';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { PlusSquare } from 'lucide-react';
import { useState } from 'react';
import { FormAddGame } from '../form/form-add-game';

export function AddGameModal() {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <PlusSquare size={24} />
            </DialogTrigger>
            <DialogContent className='max-w-[320px] max-h-screen  bg-black'>
                <DialogHeader>
                    <DialogTitle className='text-white'>
                        Add New Game
                    </DialogTitle>
                </DialogHeader>
                <FormAddGame setModalOpen={setOpen} />
            </DialogContent>
        </Dialog>
    );
}
