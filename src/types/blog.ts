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
    home: string
    title: string;
    subtitle: string;
    description: string;
    image: ImageMetadata;
    rss: string;
    menu: Menu[];
}