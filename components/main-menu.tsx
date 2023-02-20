import Link from "next/link"
import React from "react"
import MenuItem, { Menu } from "./menu-item"
import Logo from "./svgs/logo"
import BookingMenuIcon from "./svgs/booking-menu-icon"
import DashboardMenuIcon from "./svgs/dashboard-menu-icon"
import DriversMenuIcon from "./svgs/drivers-menu-icon"
import NotificationMenuIcon from "./svgs/notification-menu-icon"
import SettingMenuIcon from "./svgs/setting-menu-icon"

const menus = [
  {
    icon: DashboardMenuIcon,
    title: "Dashboard",
    href: "/",
  },
  {
    icon: DriversMenuIcon,
    title: "Drivers",
    href: "/drivers",
  },
  {
    icon: BookingMenuIcon,
    title: "Bookings",
    href: "/bookings",
  },
  {
    icon: NotificationMenuIcon,
    title: "Notifications",
    href: "/notifications",
  },
  {
    icon: SettingMenuIcon,
    title: "Settings",
    href: "/settings",
  },
] as Menu[]

const MainMenu = () => {
  return (
    <div className="flex w-60 flex-none flex-col justify-between bg-black p-6 text-white">
      <div className="flex flex-col space-y-5">
        {/* Logo */}
        <div>
          <Link href="/" className="block py-6 px-2">
            <Logo />
          </Link>
        </div>

        <ul className="flex flex-col space-y-2">
          {menus.map((menu, index) => (
            <MenuItem
              key={index}
              title={menu.title}
              href={menu.href}
              icon={menu.icon}
            />
          ))}
        </ul>
      </div>
      <div>Button</div>
    </div>
  )
}

export default MainMenu
