import Image from 'next/image';
import { MainButton } from '@repo/ui';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-gmarket_light flex flex-col min-h-screen">
      <header className="h-12 w-full flex justify-center items-center">
        <div className="font-gmarket_medium">BIN's BIN</div>
      </header>
      <div className="flex flex-col flex-1 justify-center items-center p-4">
        <div className="flex gap-4 flex-1">
          <div className="grid grid-rows flex-1 w-80 gap-4">
            <MainButton backgroundColor="light-pink" rowSpan={7}>
              <Link href="profile">PROFILE</Link>
            </MainButton>
            <MainButton backgroundColor="light-red" rowSpan={5}>
              <Link href="board">BOARD</Link>
            </MainButton>
          </div>
          <div className="grid grid-rows flex-1 w-80 gap-4">
            <MainButton backgroundColor="light-green" rowSpan={4}>
              LOGIN
            </MainButton>
            <MainButton backgroundColor="light-sky" rowSpan={9}>
              <Link href="lab">LAB</Link>
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}
