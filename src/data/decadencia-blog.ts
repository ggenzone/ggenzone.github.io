import { baseUrl } from "@/config/site";
import { type Blog } from "@/types/blog";
import {
  HomeIcon,
  TagIcon,
} from "lucide-react"

export const getRelativeBaseUrl = (path: string) => `${baseUrl}/decadencia/${path}`;

export const blog: Blog = {
  title: "Decadencia",
  subtitle: "Cuaderno",
  description: `Aquí escribo mientras intento entender la armonía, la estructura y la emoción detrás de la música.

Este blog es parte de mi aprendizaje, no una lección: es un lugar donde me pierdo entre acordes, escalas, ideas y a veces incluso silencio.`,
  rss: getRelativeBaseUrl('rss.xml'),
  image: getRelativeBaseUrl('decadencia.png'),
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
