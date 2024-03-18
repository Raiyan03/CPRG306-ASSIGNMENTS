"use client"

import { useEffect } from 'react'; // Make sure to import useEffect
import { useRouter } from 'next/navigation';
import { useUserAuth } from '../_utils/auth-context';
import ShoppingList from './shopping-list';

const Page = () => {
    const { user } =  useUserAuth();
    const router = useRouter();

    useEffect( () => {
        if (!user) {
            router.push('/week-8');
        }
    }, [user]);

    return (
        <ShoppingList />
    );
};

export default Page;
