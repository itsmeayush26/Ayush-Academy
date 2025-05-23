import { Menu, School } from "lucide-react";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import DarkMode from "@/DarkMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "User log out.");
      navigate("/login");
    }
  }, [isSuccess]);

  return (
    <div className="h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* Desktop */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
        <div className="flex items-center gap-2">
          <School size={"30"} />
          <Link to="/">
            <h1 className="hidden md:block font-extrabold text-2xl">
              Ayush-Academy
            </h1>
          </Link>
        </div>
        {/* User icons and dark mode icon  */}
        <div className="flex items-center gap-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src={user?.photoUrl || "https://github.com/shadcn.png"}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="my-learning">My learning</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {" "}
                    <Link to="profile">Edit Profile</Link>{" "}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logoutHandler}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                {user?.role === "instructor" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Link to="/admin/dashboard">Dashboard</Link></DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button onClick={() => navigate("/login")}>Signup</Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>
      {/* Mobile device  */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <h1 className="font-extrabold text-2xl">Ayush-Academy</h1>
        <MobileNavbar user={user}/>
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = ({user}) => {
  const navigate = useNavigate();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full hover:bg-gray-200"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle> <Link to="/">Ayush-Academy</Link></SheetTitle>
          <DarkMode />
        </SheetHeader>
        <Separator className="mr-2" />
        <nav className="flex flex-col space-y-4">
          <Link to="/my-learning">My Learning</Link>
          <Link to="/profile">Edit Profile</Link>
          <p>Log out</p>
        </nav>
        {user?.role === "instructor" && (
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" onClick={()=> navigate("/admin/dashboard")}>Dashboard</Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

// import { MenuIcon, School2 } from "lucide-react";

// import React, { useEffect } from "react";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuGroup,
//   DropdownMenuItem,
// } from "./ui/dropdown-menu";
// import { Button } from "./ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import DarkMode from "@/DarkMode";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "./ui/sheet";
// import { Link, useNavigate } from "react-router-dom";
// import { useLogoutUserMutation } from "@/features/api/authApi";
// import { toast } from "sonner";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const { user } = useSelector((store) => store.auth);
//   const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
//   const navigate = useNavigate();

//   const logoutHandler = async () => {
//     await logoutUser();
//   };

//   useEffect(() => {
//     if (isSuccess) {
//       toast.success(data?.message || "User logged out");
//       navigate("/login");
//     }
//   }, [isSuccess]);

//   return (
//     <div className="h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
//       {/* Desktop */}
//       <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
//         <div className="flex item-center gap-2">
//           <School2 size={"30"} />
//           <h1 className="hidden md:block font-extrabold text-2xl">E-Academy</h1>
//         </div>
//         <div className="flex item-center gap-7">
//           {user ? (
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Avatar>
//                   <AvatarImage
//                     src={user?.photoUrl || "https://github.com/shadcn.png"}
//                     alt="@shadcn"
//                   />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-56">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>

//                 <DropdownMenuGroup>
//                   <DropdownMenuItem>
//                     <Link to="my-learning">My Learning</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <Link to="profile">Edit Profile</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem onClick={logoutHandler}>
//                     Logout
//                   </DropdownMenuItem>
//                 </DropdownMenuGroup>
//                 {user?.role === "instructor" && (
//                   <>
//                     <DropdownMenuSeparator />

//                     <DropdownMenuItem>Dashboard</DropdownMenuItem>
//                   </>
//                 )}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           ) : (
//             <div className="flex items-center gap-2">
//               <Button variant="outline" onClick={() => navigate("/login")}>
//                 Login
//               </Button>
//               <Button onClick={() => navigate("/login")}>Signup</Button>
//             </div>
//           )}
//           <DarkMode />
//         </div>
//       </div>
//       <div className="flex md:hidden items-center justify-between px-4 h-full">
//         {/*mobile device */}
//         <h1 className="font font-extrabold text-2xl">E-Academy</h1>
//         <MobileNavbar />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// const MobileNavbar = () => {
//   const role = "instructor";

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button
//           size="icon"
//           className="rounded-full bg-gray-200 hover:bg-gray-200"
//           variant="outline"
//         >
//           <MenuIcon />
//         </Button>
//       </SheetTrigger>
//       <SheetContent className="flex flex-col">
//         <SheetHeader className="flex flex-row items-center justify-between mt-2">
//           <SheetTitle>E-Academy</SheetTitle>
//           <DarkMode />
//         </SheetHeader>
//         <seperator className="mr-2 " />
//         <nav className="flex flex-col space-y-4 ">
//           <span>My Learning </span>
//           <span>Edit Profile</span>
//           <span>Log out</span>
//         </nav>
//         {role == "instructor" && (
//           <SheetFooter>
//             <SheetClose asChild>
//               <Button type="submit">Dashboard</Button>
//             </SheetClose>
//           </SheetFooter>
//         )}
//       </SheetContent>
//     </Sheet>
//   );
// };
