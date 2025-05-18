'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector, RootState } from "../../store";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const {
    id,
    bearerToken,
    apiState: { status, isError, message },
    isLoginError,
  } = useAppSelector((state: RootState) => state.application);
  const router = useRouter();

  useEffect(()=>{
    if(!bearerToken){
      router.push('/login');
    }else{
      redirect('/dashboard/profile');
    }
  }, []);
}