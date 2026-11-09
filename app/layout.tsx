import '@/app/globals.css';

import Image from 'next/image';

export default function RootLayout({ children }: {children: React.ReactNode}) {

    return (
        <html lang="en" className="max-md:bg-linear-to-b max-md:from-[#224064] max-md:from-40% max-md:to-[#d08382]">
            <body className="relative w-full h-screen overflow-hidden">
                <Image
                    src="/assets/images/palm_tree.jpg"
                    alt="palm tree background image"
                    className="fixed! object-cover object-center z-[-1] max-md:mask-[linear-gradient(to_bottom,transparent,black_15vh,black_calc(100%-15vh),transparent)]"
                    fill
                    priority
                    sizes="100vw"
                />
                {children}
            </body>
        </html>
    );
}
