"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function SonnerDemo() {
    return (
        <Button
            variant="outline"
            onClick={() =>
                toast("Version Beta", {
                    description: "Try out the new features in this beta release.",
                    action: {
                        label: "Undo",
                        onClick: () => console.log("Safary"),
                    },
                })
            }
        >
            Show Toast
        </Button>
    )
}
