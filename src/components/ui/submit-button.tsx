'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

interface ButtonSubmitProps {
    variant?: 'default' | 'secondary';
    className?: string;
    children?: React.ReactNode;
    label?: string;
    disabled?: boolean;
    pendingLabel?: string;
}

const ButtonSubmit = ({
    variant,
    className,
    label,
    disabled,
    pendingLabel,
    children,
}: ButtonSubmitProps) => {
    const { pending } = useFormStatus();

    return (
        <Button
            type='submit'
            disabled={pending || disabled}
            aria-disabled={pending}
            variant={variant}
            className={className}
            data-test='button-submit'
        >
            {pending ? pendingLabel : label}
            {children}
        </Button>
    );
};

export default ButtonSubmit;
