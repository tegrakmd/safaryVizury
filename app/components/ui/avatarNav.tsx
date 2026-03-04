import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarNav() {
    return (
        <Avatar>
            {/* <AvatarImage src="https://github.com/shadcn.png" alt="User" /> */}
            
          {/* <img
            src={
              user?.picture ??
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            }
            alt="Image of the user"
            className="rounded-full h-8 w-8 hidden lg:block"
          /> */}
            <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocImARgYXVXZZhn7msuNNUoTjyEUTeu4mMV0Txw8I4jEoBhJEuD7=s288-c-no" alt="User" />
            <AvatarFallback>SV</AvatarFallback>
        </Avatar>
    )
}