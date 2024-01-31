'use client';
import { useState } from 'react';
import styles from '@/app/weather/style.css';
import useSWR from 'swr';
import Tokyo from '@/app/weather/tokyo/page';
import Saitama from '@/app/weather/saitama/page';
import Tochigi from '@/app/weather/tochigi/page';
import Kanagawa from '@/app/weather/kanagawa/page';
import Ibaraki from '@/app/weather/ibaraki/page';
import Gunma from '@/app/weather/gunma/page';
import Chiba from '@/app/weather/chiba/page';
export default function Page() {
  const fetcher = (url: string | URL | Request) =>
    fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    'https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json',
    fetcher
  );
  if (isLoading) return <div>loading...</div>;
  console.log(data);
  
  return (
      // <h1 className='text-48 font-bold'>お天気予報</h1>
    <div className={styles.container}>
      <Tokyo />
      <Saitama />
      <Tochigi />
      <Kanagawa />
      <Ibaraki />
      <Gunma />
      <Chiba />
    </div>
  );
}
