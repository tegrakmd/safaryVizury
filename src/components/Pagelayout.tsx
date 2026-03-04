import { PropsWithChildren } from "react";

export function Pagelayout(props: PropsWithChildren){
    return(
         <section className="w-full relative font-body border-b border-dashed ">
            <div className=" w-full md:border-x no-scrollbar border-dashed relative mx-auto max-w-[1500px]  px-3 md:px-6 border-(--stripes-color) bg-[repeating-linear-gradient(-45deg,var(--stripes-color),var(--stripes-color)_1px,transparent_1px,transparent_6px)] [--stripes-color:var(--color-gray-200)] dark:[--stripes-color:var(--color-border)]">
              <div className="border-x border-dashed py-2.5  px-3 h-20 bg-background">
                    {props.children}
              </div>   
            </div>
        </section>
    )
}