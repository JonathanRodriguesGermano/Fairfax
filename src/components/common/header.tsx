"use client";

import {
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Cart } from "./cart";
import { CategoryNav } from "./category-nav";
import MenuItem from "./menu-items";

interface HeaderProps {
  showCategories?: boolean;
}

export const Header = ({ showCategories = true }: HeaderProps) => {
  const { data: session } = authClient.useSession();

  return (
    <header className="flex flex-col gap-4 p-5 lg:px-10">
      <div className="flex w-full items-center justify-between">
        <div className="hidden items-center gap-2 text-sm font-medium md:flex">
          <UserIcon size={18} />
          {session?.user ? (
            <span>Olá, {session.user.name?.split(" ")[0]}</span>
          ) : (
            <Link href="/authentication" className="hover:underline">
              Olá, faça seu login!
            </Link>
          )}
        </div>

        <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <Image
            src="/logo.svg"
            alt="FAIRFAX"
            width={120}
            height={30}
            className="w-[100px] md:w-[140px]"
          />
        </Link>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden lg:flex">
            <SearchIcon size={20} />
          </Button>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="px-5">
                  {session?.user ? (
                    <>
                      <div className="flex justify-between space-y-6">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage
                              src={session?.user?.image as string | undefined}
                            />
                            <AvatarFallback>
                              {session?.user?.name?.split(" ")?.[0]?.[0]}
                              {session?.user?.name?.split(" ")?.[1]?.[0]}
                            </AvatarFallback>
                          </Avatar>

                          <div>
                            <h3 className="font-semibold">
                              {session?.user?.name}
                            </h3>
                            <span className="text-muted-foreground block text-xs">
                              {session?.user?.email}
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold">Olá. Faça seu login!</h2>
                      <Button size="icon" asChild variant="outline">
                        <Link href="/authentication">
                          <LogInIcon />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
                <MenuItem />
                {session?.user ? (
                  <>
                    <div className="px-5">
                      <Separator />
                    </div>
                    <div className="flex gap-5 pl-6">
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => authClient.signOut()}
                      >
                        <LogOutIcon />
                        Sair da conta
                      </Button>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </SheetContent>
            </Sheet>
          </div>
          <Cart />
        </div>
      </div>

      <CategoryNav isVisible={showCategories} />
    </header>
  );
};