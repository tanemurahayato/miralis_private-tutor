"use client"

import * as React from "react"
import Link from "next/link"
import { BookOpen, GraduationCap, LogIn, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="font-bold text-2xl text-orange-600 mr-6">
          家庭教師のミラリス
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/search/teachers" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  先生を探す
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/search/students" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <GraduationCap className="mr-2 h-4 w-4" />
                  生徒を探す
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">
              <LogIn className="mr-2 h-4 w-4" />
              ログイン
            </Link>
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700" asChild>
            <Link href="/register">
              <UserPlus className="mr-2 h-4 w-4" />
              新規登録
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}