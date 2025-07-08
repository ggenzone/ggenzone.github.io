import * as React from "react"
import {
  ArrowLeftIcon,
  BookOpen,
  RssIcon,
} from "lucide-react"

import { NavBlog } from "@/components/react/nav-blog"
import { ThemeButton } from "./theme-button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import type { Blog } from "@/types/blog"
import { baseUrl } from "@/data/site"

export function AppSidebar({ blog, ...props  }: { blog: Blog } & React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <BookOpen className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{blog.title}</span>
                  <span className="truncate text-xs">{blog.subtitle}</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <NavBlog menu={blog.menu} />
      </SidebarContent>
      <SidebarFooter>
          <ThemeButton />
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href={blog.rss}>
                <RssIcon className="w-4 h-4 mr-2" />
                <span>Feed RSS</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarSeparator />
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href={`${baseUrl}/`}>
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                <span>Volver</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

      </SidebarFooter>
    </Sidebar>
  )
}
