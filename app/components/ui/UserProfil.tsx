
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CatIcon, HotelIcon, LogOutIcon, LucideMousePointerClick, Settings2Icon } from "lucide-react";
import Link from "next/link";
import { AvatarNav } from "./avatarNav";


import Image from "next/image";
import Menutost from "../../../public/menutost.png";
import { Avatar } from "@/components/ui/avatar";


export function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <AvatarNav />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[240px] *:cursor-pointer">
               <>
               <DropdownMenuItem>
                    <Link href="">
                        <div className="flex w-full items-center gap-x-2.5">
                            <AvatarNav /><p>Tegra kmd</p>
                        </div>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator></DropdownMenuSeparator>
                <DropdownMenuItem>
                    <Link href="/creation/sffsf/structure">
                        <div className="flex w-full items-center gap-x-2">
                            <HotelIcon />Profil de Reservation
                        </div>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="">
                        <div className="flex w-full items-center gap-x-2">
                            <HotelIcon />Reservations
                        </div>
                    </Link>
                </DropdownMenuItem>
            
                <DropdownMenuItem>
                    <Link href="">
                        <div className="flex w-full items-center gap-x-2">
                            <LucideMousePointerClick />Favories
                        </div>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="">
                        <div className="flex w-full items-center gap-x-2">
                            <CatIcon />Categories
                        </div>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="" className="w-full">
                        <div className="flex w-full items-center justify-between">
                           <h3>Read More</h3>
                           <Avatar>
                                <Image src={Menutost} alt="Menutost"/>
                           </Avatar>
                        </div>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="">
                        <div className="flex w-full items-center gap-x-2">
                            <Settings2Icon />Parametres
                        </div>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator></DropdownMenuSeparator>
                <DropdownMenuItem>
                    <Link href="">
                        <div className="flex w-full items-center gap-x-2">
                            <LogOutIcon />Deconnexion
                        </div>
                    </Link>
                </DropdownMenuItem>
               </>
                {/*  */}
               <>
                <DropdownMenuItem>
                <div className="w-full">Login Up</div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <div className="w-full">Connexion</div>
                </DropdownMenuItem>
               </>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}