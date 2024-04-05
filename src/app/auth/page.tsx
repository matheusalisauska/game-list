import FormLogin from '@/components/form/form-login';
import LoginWithGithub from '@/components/login-with-github';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { authOptions } from '@/utils/auth';
import { Github } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function AuthRoute() {
    const session = await getServerSession(authOptions);

    if (session) {
        return redirect('/')
    }
    return (
        <main className='flex flex-col mt-6 px-6 lg:px-8 2xl:px-32 pb-32 w-full'>
            <section className='flex flex-col gap-8'>
              <FormLogin/>
            </section>
        </main>
    );
}
