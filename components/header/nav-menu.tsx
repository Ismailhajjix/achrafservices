"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { services } from "@/config/services"

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Business Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-2 p-4 w-[400px]">
              {services.business.map((service) => (
                <Link
                  key={service.path.pathname}
                  href={service.path}
                  className="flex items-start gap-2 p-2 hover:bg-zinc-900 rounded-lg text-zinc-400 hover:text-white transition-colors"
                >
                  <service.icon className="w-5 h-5 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-medium">{service.name}</span>
                    <span className="text-sm text-zinc-500">{service.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Immigration Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-2 p-4 w-[400px]">
              {services.immigration.map((service) => (
                <Link
                  key={service.path.pathname}
                  href={service.path}
                  className="flex items-start gap-2 p-2 hover:bg-zinc-900 rounded-lg text-zinc-400 hover:text-white transition-colors"
                >
                  <service.icon className="w-5 h-5 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-medium">{service.name}</span>
                    <span className="text-sm text-zinc-500">{service.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href={{ pathname: "/about" }} legacyBehavior passHref>
            <NavigationMenuLink className="hover:text-white transition-colors">
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href={{ pathname: "/contact" }} legacyBehavior passHref>
            <NavigationMenuLink className="hover:text-white transition-colors">
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}