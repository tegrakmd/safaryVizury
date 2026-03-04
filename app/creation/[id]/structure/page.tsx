import { Button } from "@/components/ui/button";
import { SelectCategory } from "@app/components/SelectCategory";
import { BadgePr } from "@app/components/ui/BadgePr";
import Link from "next/link";

export default function StructureRoot(){
    return(
        
         <div className="mt-25 md:mt-40 relative">
          
            <div className="px-px mx-auto space-y-4">
                  <BadgePr title={'new'} description={"Introduction"}/>
                <h2 className="text-2xl tracking-tight leading-tight md:text-3xl">Quel Categories voulais vous attribuer a votre Maison ?</h2>
            </div>

            <form action="">
                <SelectCategory/>
                <div className="fixed bottom-0 w-full z-10 h-24 border-t left-0 p-4 md:p-6 bg-background">
                    <div className="flex flex-items justify-between w-full p-2 h-full lg:px-6 max-w-[1500px] mx-auto">
                        <Button size='lg' variant={"secondary"}>
                            <Link href="/">
                            Cancel
                            </Link>
                        </Button>
                        <Button size='lg'>Save</Button>
                    </div>
                </div>
            </form>
         </div>
        
    )
}