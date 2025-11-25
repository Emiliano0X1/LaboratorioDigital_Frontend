"use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {useRouter} from 'next/navigation'


export default function Home() {
    const router = useRouter();
    return(
        <div className='align-middle'>
          <button onClick={() => router.push('/biblioteca')} className='text-xl border-2 rounded-2xl p-2.5 '>Ir a la BibSlioteca</button>
        </div>
    )
}