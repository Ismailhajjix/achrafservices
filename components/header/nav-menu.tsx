"use client"

import Link from "next/link"
import { Building2, Plane } from "lucide-react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { services } from "@/config/services"

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            Business Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 gap-3 p-4 w-[500px]">
              {services.business.map((service) => (
                <Link
                  key={service.path}
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
          <NavigationMenuTrigger className="flex items-center gap-2">
            <Plane className="w-4 h-4" />
            Immigration Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 gap-3 p-4 w-[500px]">
              {services.immigration.map((service) => (
                <Link
                  key={service.path}
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
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className="hover:text-white transition-colors">
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className="hover:text-white transition-colors">
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}