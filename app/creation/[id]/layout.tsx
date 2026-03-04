import { ReactNode } from "react";

export default function LayoutCreation({ children }: { children: ReactNode }) {
    return (
        <section className="my-20">
            <div className="max-w-4xl mx-auto px-4 md:px-6 ">
                {children}
            </div>
        </section>
    )
}
