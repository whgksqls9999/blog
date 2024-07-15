import Image from 'next/image';
import { MainButton } from '@repo/ui';

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
              PROFILE
            </MainButton>
            <MainButton backgroundColor="light-red" rowSpan={5}>
              BOARD
            </MainButton>
          </div>
          <div className="grid grid-rows flex-1 w-80 gap-4">
            <MainButton backgroundColor="light-green" rowSpan={4}>
              LOGIN
            </MainButton>
            <MainButton backgroundColor="light-sky" rowSpan={9}>
              LAB
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}
