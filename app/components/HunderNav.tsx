
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import elianne from "../../public/Best.jpg";
import GoldLeft from "../../public/ic-system-gf-gold-left-laurel-32-3x.d074c7557225d2a0f3f1289a3dde7a7d.png";
import GoldRight from "../../public/ic-system-gf-gold-right-laurel-32-3x.f972b95c999d29e144d9ef970585906d.png";
import Pannier from "../../public/pannier.png";
import Valise from "../../public/valise.png";
import { BadgePr } from "./ui/BadgePr";


export function HunderNav() {
    return (
        <section className=" w-full relative font-body border-b mt-10">
            <div className=" h-full mx-auto max-w-[1500px]  px-3 md:border-x  sm:px-6 ">
                <div className="w-full h-full  flex items-center justify-between py-2.5  bg-background">
                    <div className="w-full h-full flex items-center  gap-3 ">
                        <div className="py-4 space-y-1.5 max-w-2xl">
                           <div className="mb-4 ">
                              <BadgePr title={'new'} description={"Introduction Beta"}/>
                           </div>
                            <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] inline-flex items-center">
                                Build you trip      
                            <Avatar className="w-14 rounded-full ring-1  ring-(--color-border) shadow-neutral-200 shadow-xl dark:shadow-border mx-1 cursor-pointer">
                            <Image src={elianne} alt="Uuser" className="object-cover w-full h-full hover:scale-125 transition-all duration-600" />
                            </Avatar> 
                                in Africa
                            </h1>
                            <p className="max-w-2xl text-base font-light text-foreground sm:text-lg ">
                                A set of beautifully-designed, accessible houses and a place distribution
                                platform. Works with your favorite Customer.
                            </p>
                           
                            <div className="mt-2 flex items-center gap-4">
                                <Button size="sm">Read More</Button>
                                <div className="flex items-center gap-1">                       
                                    <Image className="w-6" src={GoldLeft} alt="gold-left"/>
                                    <Image className="w-8" src={Pannier} alt="Pannier"/>
                                    <Image className="w-6" src={GoldRight} alt="gold-right"/>
                                </div>
                               
                            </div>
                            
                        </div>
                    </div>
                    <Image src={Valise} className="hidden md:block w-36 hover:-rotate-12 transition-all duration-600  " alt="Valise"/>
                </div>
            </div>
        </section>
    )
}