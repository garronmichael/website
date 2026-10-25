import Image from 'next/image';
import { Lobster } from 'next/font/google';

const lobster = Lobster({
    weight: "400",
    subsets: ['latin']
});

export default function Page() {
  return (
    <div
        className={`${lobster.className} h-full w-full flex flex-col items-center justify-around not-even:text-center text-sunrise-blue`}
    >
      <div>
        <div
            className="text-7xl mb-10"
        >
          Hello, I&apos;m Garron.
        </div>
        <div
            className="text-5xl"
        >
          Software Engineer
        </div>
      </div>
      <div
        className="w-4/5 flex items-center justify-around"
      >
        <Image
          alt="react logo"
          height={50}
          width={50}
          src="/assets/images/react.png"
        />
        <Image
          alt="node logo"
          height={50}
          width={50}
          src="/assets/images/node.png"
        />
        <Image
          alt="j s dot l a logo"
          height={50}
          width={50}
          src="/assets/images/jsla.png"
        />
        <Image
          alt="rainbow"
          height={50}
          width={50}
          src="/assets/images/rainbow.png"
        />
      </div>
    </div>
  );
}
