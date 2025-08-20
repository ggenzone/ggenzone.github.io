import { blog as decadencia } from "./decadencia-blog";
import { blog as prototipo } from "./prototipo-blog";
import { blog as perspectiva } from "./perspectiva-blog";
import { blog as herbrand } from "./herbrand-blog";

import esp32Image from '../assets/img/esp32.png';
import stm32Image from '../assets/img/stm32.png';
import lvglImage from '../assets/img/lvgl.png';
import portfolioToolsImage from '../assets/img/portfolio-tools.png';


export const baseUrl = '';

export const githubUrl = 'https://github.com/ggenzone/ggenzone.github.io';

export const blogs = [
    perspectiva,
    prototipo,
    /*
    decadencia,
    herbrand
    */
];

export const projects = [
    {
        title: "Herramientas de Finanzas",
        badge: "Finanzas & Python",
        description: "Conjunto de herramientas en Python para análisis y seguimiento de carteras de activos financieros. Incluye utilidades para evaluar el rendimiento, diversificación y riesgos de portafolios.",
        repos: [
            {
                title: "Portfolio Toolkit",
                url: "https://ggenzone.github.io/portfolio-toolkit",
                image: portfolioToolsImage
            }
        ]
    },
    {
        title: "Microcontroladores e IoT",
        badge: "IoT & Microcontroladores",
        description: "Ejemplos prácticos y recursos para trabajar con microcontroladores como ESP32 y STM32, integrando interfaces gráficas, sensores y conectividad IoT.",
        repos: [
            {
                title: "ESP32 Projects",
                url: "https://github.com/ggenzone/maker/tree/main/code/esp32",
                image: esp32Image
            },{
                title: "STM32 Projects",
                url: "https://github.com/ggenzone/iot/",
                image: stm32Image
            }, {
                title: "LVGL Projects",
                url: "https://github.com/ggenzone/maker/tree/main/code/esp32",
                image: lvglImage
            }
        ]
    }
]