import { baseUrl } from "@/config/site";
import { type Blog } from "@/types/blog";
import {
  HomeIcon,
  TagIcon,
} from "lucide-react"

export const getRelativeBaseUrl = (path: string) => `${baseUrl}/herbrand/${path}`;

export const blog: Blog = {
    title: "Herbrand",
    subtitle: "Cuaderno",
    description: `Este espacio es mi cuaderno mental, donde intento comprender cómo funciona el universo a través de la física, las matemáticas y la ciencia en general.

Escribo para entender, para equivocarme y volver a intentar. No enseño, simplemente pienso en voz alta con ayuda de GPT. `,
    rss: getRelativeBaseUrl('rss.xml'),
    image: getRelativeBaseUrl('herbrand.png'),
    menu: [
      {
        name: "Home",
        url: getRelativeBaseUrl(''),
        icon: HomeIcon,
      },
      {
          name: "Tags",
          url: getRelativeBaseUrl('tags'),
          icon: TagIcon,
      }
    ]
};
