"use client";
import React from "react";
import { ModeToggle } from "./ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

function Nav() {
  return (
    <div className="flex justify-end m-1">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Projects
          </NavigationMenuLink>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Resume
          </NavigationMenuLink>
          <NavigationMenuLink>
            <ModeToggle />{" "}
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Nav;
