import { ModeToggle } from "@/components/theme-toggle";
import { SonnerDemo } from "@/components/toast";
import Image from "next/image";
import GoldLeft from "../../public/ic-system-gf-gold-left-laurel-32-3x.d074c7557225d2a0f3f1289a3dde7a7d.png";
import GoldRight from "../../public/ic-system-gf-gold-right-laurel-32-3x.f972b95c999d29e144d9ef970585906d.png";

export function FooterPage() {
    return (
        <footer className="w-full relative font-body border-y  overflow-h">
            <div className=" w-full md:border-x no-scrollbar  relative mx-auto max-w-[1500px]  px-3 md:px-6 ">
                <div className="flex items-center justify-between py-2.5  h-20 bg-background">
                    <ModeToggle />
                    <div className="flex items-center gap-2">                       
                        <Image className="w-6" src={GoldLeft} alt="gold-left"/>
                        <Image className="w-6" src={GoldRight} alt="gold-right"/>
                    </div>
                    <SonnerDemo />
                </div>
            </div>
        </footer>
    )
}