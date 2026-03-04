import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "../../public/Desktop.svg";
import MobileLogo from "../../public/Mobile.svg";
import { UserNav } from "./ui/UserProfil";
import { BadgePr } from "./ui/BadgePr";

export function Navbar() {
    return (
        <nav className="w-full border-b fixed bg-background/80 backdrop-blur-xl top-0 h-fit left-0 z-40 font-inter">
            <div className="mx-auto max-w-[1500px] px-3 md:border-x  sm:px-6 ">
                <div className="flex items-center justify-between py-2.5 bg-background border-dashed ">
                    <div className="flex items-center gap-4">
                        <Link href="/" >
                        <Image src={DesktopLogo} alt="DesktopLogo" className="w-40 hidden lg:block" />
                        <Image src={MobileLogo} alt="MobileLogo" className="w-20 lg:hidden" />
                        </Link>
                     <div className="hidden md:block">
                       
                        <BadgePr title={'new'} description={"Introduction"}/>
                     </div>
                    </div>
                    <UserNav />
                </div>
            </div>
        </nav>
    )
}