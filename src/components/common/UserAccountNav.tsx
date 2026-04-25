"use client";

import {
  ChevronsUpDown,
  CreditCard,
  LogOutIcon,
  Settings,
  Sparkles,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function UserAccountNav() {
  const { data: session } = authClient.useSession();

  if (!session?.user) {
    return (
      <Button variant="ghost" asChild className="hover:bg-accent gap-2 px-2">
        <Link href="/authentication">
          <div className="bg-background flex h-8 w-8 items-center justify-center rounded-lg border">
            <UserIcon size={16} />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Olá, faça seu login!</span>
            <span className="text-muted-foreground truncate text-xs">
              Minha conta
            </span>
          </div>
        </Link>
      </Button>
    );
  }

  const userInitials = session.user.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-12 w-full justify-start gap-3 px-2 focus-visible:ring-0 md:w-[200px]"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage
              src={session.user.image || ""}
              alt={session.user.name || ""}
            />
            <AvatarFallback className="rounded-lg">
              {userInitials}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{session.user.name}</span>
            <span className="text-muted-foreground truncate text-xs">
              {session.user.email}
            </span>
          </div>
          <ChevronsUpDown className="text-muted-foreground ml-auto size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        align="start"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage
                src={session.user.image || ""}
                alt={session.user.name || ""}
              />
              <AvatarFallback className="rounded-lg">
                {userInitials}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                {session.user.name}
              </span>
              <span className="text-muted-foreground truncate text-xs">
                {session.user.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/em-breve">
              <Sparkles className="mr-2 size-4" />
              Minha Conta
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/my-orders">
              <CreditCard className="mr-2 size-4" />
              Meus Pedidos
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/em-breve">
              <Settings className="mr-2 size-4" />
              Configurações
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => authClient.signOut()}>
          <LogOutIcon className="mr-2 size-4" />
          Sair da conta
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
