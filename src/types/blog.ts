import {
  type LucideIcon,
} from "lucide-react"


export interface Menu {
    name: string;
    url: string;
    external?: boolean;
    badge?: string;
    icon: LucideIcon;
}

export interface Blog {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    rss: string;
    menu: Menu[];
}