
import { navbarOptions } from '@/app/mocks';
import { Ticket } from 'lucide-react';
import Link from "next/link";

export function Navbar() {
    return (
        <div className="w-full h-full flex items-center justify-between px-12 py-1 bg-light-background-dark">
            <Link href="/" className="flex items-center gap-2"><span className="text-3xl font-bold text-light-typograph">Parking <span className="text-light-primary-dark">Pro</span></span><Ticket /></Link>
            <div className="flex justify-between gap-5">
                {navbarOptions.map(({ label, path, Icon }, index) => (
                    <Link key={index} href={path} className="flex flex-col items-center text-light-typograph">
                        <Icon />
                        <span className="text-sm">{label}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}