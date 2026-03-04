'use client'

import { cn } from '@/lib/utils';
import { HeartIcon } from 'lucide-react';
import { useState } from 'react';
export function HearButton (){
    const [liked, setLiked] = useState(false)
    return(
        <button
        onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
        }}
        className="absolute hover:scale-125 transition-all duration-600 right-3 top-3 rounded-full p-1.5 shadow-xl cursor-pointer  z-[5]"
    >
        <HeartIcon
            className={cn(
                'h-5 w-5 transition',
                liked ? 'fill-red-500 stroke-red-500' : 'stroke-black'
            )}
        />
    </button>
    )
}