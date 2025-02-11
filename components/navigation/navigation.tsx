"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import type { Route } from "next"

interface NavItem {
  name: string
  href: { pathname: Route }
}

const navigation: NavItem[] = [
  { name: "Home", href: { pathname: "/" as Route } },
  { name: "Services", href: { pathname: "/services" as Route } },
  { name: "About", href: { pathname: "/about" as Route } },
  { name: "Contact", href: { pathname: "/contact" as Route } },
] 