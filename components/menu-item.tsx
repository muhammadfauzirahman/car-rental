"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

export interface Menu {
  icon: any
  title: string
  href: string
}

function MenuItem(props: Menu) {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <li>
      <Link href={props.href} className="relative flex rounded py-3 px-4">
        <span className="absolute left-0 top-1/2 h-9 w-[6px] -translate-y-1/2 rounded bg-white"></span>
        <props.icon className="mr-3" />
        {props.title}
      </Link>
    </li>
  )
}

export default MenuItem
