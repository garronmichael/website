import '@/app/globals.css';

import Image from 'next/image';

export default function RootLayout({ children }: {children: React.ReactNode}) {

    return (
        <html lang="en" className="bg-[#224064]">
            <body className="relative w-full h-screen overflow-hidden">
                <Image
                    src="/assets/images/palm_tree.jpg"
                    alt="palm tree background image"
                    className="fixed! object-cover object-center z-[-1] mask-[linear-gradient(to_bottom,transparent,black_15vh)]"
                    fill
                    priority
                    sizes="100vw"
                />
                {children}
            </body>
        </html>
    );
}
