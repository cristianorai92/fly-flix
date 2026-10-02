import { LuFilm } from "react-icons/lu";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 w-full
        bg-[#1D2839]/95 backdrop-blur-sm border-b border-[#e5e7eb]">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                <LuFilm />
                </div>
            </div>
        </header>
    )
}