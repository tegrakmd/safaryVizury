import { FileQuestion } from "lucide-react";
interface IappProps {
  title: string;
  description: string;
}
export  function NoItems({description, title}: IappProps) {
    return(
        
       <section className="w-full  pt-4 border-b border-dashed bg-background/80   font-inter">
        <div className='w-full md:border-x no-scrollbar overflow-hidden border-dashed relative mx-auto max-w-[1500px]  px-3 md:px-6 border-(--stripes-color) bg-[repeating-linear-gradient(-45deg,var(--stripes-color),var(--stripes-color)_1px,transparent_1px,transparent_6px)] [--stripes-color:var(--color-gray-200)] dark:[--stripes-color:var(--color-border)]'>
            <div className="w-full h-dvh flex flex-col items-center justify-center py-8 border-x  gap-x-10 md:overflow-x-auto overflow-x-scroll no-scrollbar border-dashed scroll-smooth px-3 bg-background">
                
                <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
                  <FileQuestion className="size-10 text-blue-500" />
                </div>
                <h2 className="mt-6 text-xl font-semibold">
                  {/* No find page  */}
                {title}
                </h2>
                <p className="mt-2 text-center text-sm leading-6 text-muted-foreground">
                  {/* Pas des page trouver */}
                {description}
                </p>
            </div>
        </div>
   </section>
    )

}

