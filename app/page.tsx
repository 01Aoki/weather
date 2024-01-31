import Image from 'next/image';
import Weather from '@/app/weather/page';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Weather />
    </main>
  );
}
