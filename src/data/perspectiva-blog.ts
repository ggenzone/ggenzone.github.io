import { baseUrl } from "@/data/site";
import { type Blog } from "@/types/blog";
import {
  HomeIcon,
  BookOpenIcon,
} from "lucide-react"

export const getRelativeBaseUrl = (path: string) => `${baseUrl}/perspectiva/${path}`;

export const blog: Blog = {
    title: "Perspectiva",
    subtitle: "Cuaderno",
    description: `Aquí recopilo y organizo ideas, conceptos y explicaciones relacionadas con finanzas, economía y temas afines.

La intención no es enseñar, sino aprender en voz alta, registrando lo que estudio, leo o escucho. 
Este cuaderno es un espacio personal para explorar, cuestionar y profundizar en temas que me interesan, sin pretensión de autoridad ni de exhaustividad.

Espero que este registro me ayude a consolidar conocimientos y, quizás, a conectar con otras personas que estén en un proceso similar de aprendizaje.`,
  
    rss: getRelativeBaseUrl('rss.xml'),
    image: getRelativeBaseUrl("perspectiva.png"),
    menu: [
      {
        name: "Home",
        url: getRelativeBaseUrl(''),
        icon: HomeIcon,
      },
      /*
      {
          name: "Tags",
          url: getRelativeBaseUrl('tags'),
          icon: HomeIcon,
      },
      {
        name: "Categorias",
        url: getRelativeBaseUrl('categorias'),
        icon: HomeIcon
      },
      */
      {
        name: "Bibliografia",
        url: getRelativeBaseUrl('bibliografia'),
        icon: BookOpenIcon
      }
    ]
};
