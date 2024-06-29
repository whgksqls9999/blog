import { Button } from '@repo/ui/button';
import { Header } from '@repo/ui/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-gmarket_light flex flex-col min-h-screen">
      <header className="h-12 w-full flex justify-center items-center">
        <div className="font-gmarket_medium">BIN's BIN</div>
      </header>
      <div className="flex flex-col flex-1 justify-center items-center p-4">
        <div className="flex gap-4 flex-1">
          <div className="grid grid-rows flex-1 w-80 gap-4">
            <div className="p-2 hover:p-0 transition-all row-span-7">
              <button className="bg-light-pink h-full w-full">
                <div>PROFILE</div>
              </button>
            </div>
            <div className="p-2 hover:p-0 transition-all row-span-5">
              <button className="bg-light-red h-full w-full">
                <div>BOARD</div>
              </button>
            </div>
          </div>
          <div className="grid grid-rows flex-1 w-80 gap-4">
            <div className="p-2 hover:p-0 transition-all row-span-4">
              <button className="bg-light-green h-full w-full">
                <div>LOGIN</div>
              </button>
            </div>
            <div className="p-2 hover:p-0 transition-all row-span-9">
              <button className="bg-light-sky h-full w-full">
                <div>LAB</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
