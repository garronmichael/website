import '@/app/globals.css';

import Image from 'next/image';

export default function RootLayout({ children }: {children: React.ReactNode}) {

    return (
        <html lang="en">
            <body className="relative w-full h-screen overflow-hidden">
                <Image
                    src="/assets/images/palm_tree.jpg"
                    alt="palm tree background image"
                    className="object-cover object-center z-[-1]"
                    fill
                    priority
                    sizes="100vw"
                />
                {children}
            </body>
        </html>
    );
}