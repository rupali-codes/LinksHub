import { IData, ISidebar } from '../types';

export const data: IData[] = [
  {
    id: '1',
    name: 'Unsplash',
    description: {
      'en': 'Unsplash is a site to get free images, you can download all kind of HD images in here for free.',
      'es': 'Unsplash es un sitio para obtener imágenes gratuitas, puede descargar todo tipo de imágenes HD'
    },
    url: 'https://unsplash.com',
    category: 'frontend',
    subcategory_en: 'images',
    subcategory_es: 'imagenes',
  },
  {
    id: '2',
    name: 'Pixabay',
    description: {
      'en': 'Pixabay have Over 2M free stock photos, vectors and art illustrations you can use anywhere.',
      'es': 'Pixabay tiene más de 2 millones de fotos, vectores e ilustraciones de arte gratuitos que puedes usar en cualquier lugar'
    },
    url: 'https://pixabay.com/',
    category: 'frontend',
    subcategory_en: 'images',
    subcategory_es: 'imagenes',
  },
  {
    id: '3',
    name: 'Pexels',
    description: {
      'en': 'A great resource for free stock photos and videos, created by photographers around the world.',
      'es': 'Un gran recurso para fotos y videos gratuitos, creados por fotógrafos de todo el mundo.',
    },
    url: 'https://pexels.com/',
    category: 'frontend',
    subcategory_en: 'images',
    subcategory_es: 'imagenes',
  },
  {
    id: '4',
    name: 'Open Color',
    description: {
      'en': 'An open-source color scheme, optimized for UI. My go-to resource to choose colors from scratch. ',
      'es': 'Un esquema de color de código abierto, optimizado para la interfaz de usuario. Mi recurso de referencia para elegir colores desde cero.'
    },
    url: 'https://yeun.github.io/open-color/',
    category: 'frontend',
    subcategory_en: 'images',
    subcategory_es: 'imagenes',
  },
  {
    id: '5',
    name: 'UI Gradients',
    description: {
      'en': 'Collection of beautiful color gradients for you to choose from and export to your project. ',
      'es': 'Colección de hermosos degradados de color para que elijas y exportes a tu proyecto. '
    },
    url: 'https://uigradients.com/#MoonlitAsteroid',
    category: 'frontend',
    subcategory_en: 'images',
    subcategory_es: 'imagenes',
  },
  {
    id: '6',
    name: 'Tailwind Colors',
    description: {
      'en': 'This an excellent and popular set of color pallettes by TailwindCSS. Get beautiful colors of all shades. ',
      'es': 'Este es un excelente y popular conjunto de paletas de colores de TailwindCSS. Consigue hermosos colores de todos los tonos.'
    },
    url: 'https://tailwindcss.com/docs/customizing-colors',
    category: 'frontend',
    subcategory_en: 'colors',
    subcategory_es: 'colores',
  },
  {
    id: '7',
    name: 'Color Contract Checker',
    description: {
      'en': 'This an excellent site to check whether contrast of two colors is good or not ',
      'es': 'Este es un sitio excelente para verificar si el contraste de dos colores es bueno o no'
    }
      ,
    url: 'https://coolors.co/contrast-checker',
    category: 'frontend',
    subcategory_en: 'colors',
    subcategory_es: 'colores',
  },
  {
    id: '8',
    name: '0to255',
    description:{
      'en': '0to255 is a color tool that makes it easy to find lighter and darker colors, or tints and shades, based on any color. ',
      'es': '0to255 es una herramienta de color que facilita encontrar colores más claros y más oscuros, o matices y sombras, en función de cualquier color.'
    },
    url: 'https://0to255.com/',
    category: 'frontend',
    subcategory_en: 'colors',
    subcategory_es: 'colores',
  },
  {
    id: '9',
    name: 'Google Fonts',
    description: {
      'en': 'The No. 1 resource for free and easy-to-use webfonts by Google. It has a huge library of fonts. ',
      'es': 'El recurso número 1 de fuentes web gratuitas y fáciles de usar de Google. Tiene una gran biblioteca de fuentes.',
    },
    url: 'https://fonts.google.com/',
    category: 'frontend',
    subcategory_en: 'fonts',
    subcategory_es: 'fuentes',
  },
  {
    id: '10',
    name: 'Fonts Quirrel',
    description: {
      'en': "Fonts Quirrel is platform to get free commercial fonts for your project. It's another huge library for fonts. ",
      'es': 'Fonts Quirrel es una plataforma para obtener fuentes comerciales gratuitas para su proyecto. Es otra gran biblioteca de fuentes. '
    },
    url: 'https://fontsquirrel.com/',
    category: 'frontend',
    subcategory_en: 'fonts',
    subcategory_es: 'fuentes',
  },
  {
    id: '11',
    name: 'Glaze',
    description: {
      'en': 'All in one resource to get free illustrations images for characters, backgrounds, avatar and more. ',
      'es': 'Recurso todo en uno para obtener imágenes de ilustraciones gratuitas para personajes, fondos, avatar y más'
    },
    url: 'https://glazestock.com/',
    category: 'frontend',
    subcategory_en: 'illustrations',
    subcategory_es: 'ilustraciones',
  },
  {
    id: '12',
    name: 'unDraw',
    description: {
      'en': 'unDraw os another exccelent platform to get free illustration images with No color restrictions',
      'es': 'unDraw es otra plataforma excelente para obtener imágenes de ilustración gratuitas sin restricciones de color'
    },
    url: 'https://undraw.co/illustrations',
    category: 'frontend',
    subcategory_en: 'illustrations',
    subcategory_es: 'ilustraciones',
  },
  {
    id: '13',
    name: 'DrawKit',
    description: {
      'en': 'It is a collection of fully customisable PSD illustrations, in two styles, available to use on your next project.',
      'es': 'Es una colección de ilustraciones PSD totalmente personalizables, en dos estilos, disponibles para usar en su próximo proyecto.'
    },
    url: 'https://drawkit.com/',
    category: 'frontend',
    subcategory_en: 'illustrations',
    subcategory_es: 'ilustraciones',
  },
  {
    id: '14',
    name: 'Font Awesome',
    description: {
      'en': 'A highly popular icon font, consisting of 1000+ icons spread across countless categories.',
      'es': 'Una fuente de íconos muy popular, que consta de más de 1000 iconos repartidos en innumerables categorías.'
    },
    url: 'https://fontawesome.com/',
    category: 'frontend',
    subcategory_en: 'icons',
    subcategory_es: 'iconos',
  },
  {
    id: '15',
    name: 'Phosphor Icons',
    description: {
      'en': 'Another beautiful, more boxy SVG collection of free icons. Customizable thickness and color.',
      'es': 'Otra hermosa colección SVG más cuadrada de iconos gratuitos. Grosor y color personalizables.'
    },
    url: 'https://phosphoricons.com/',
    category: 'frontend',
    subcategory_en: 'icons',
    subcategory_es: 'iconos',
  },
  {
    id: '16',
    name: 'Flat Icon',
    description: {
      'en': 'It is a collection of fully customisable PSD icons, in two styles, available to use on your next project.',
      'es': 'Es una colección de íconos PSD completamente personalizables, en dos estilos, disponibles para usar en su próximo proyecto.'
    },
    url: 'https://flaticon.com/',
    category: 'frontend',
    subcategory_en: 'icons',
    subcategory_es: 'iconos',
  },
  {
    id: '17',
    name: 'Line Awesome',
    description: {
      'en': 'It is a collection of fully customisable PSD icons, in two styles, available to use on your next project.',
      'es': 'Es una colección de íconos PSD completamente personalizables, en dos estilos, disponibles para usar en tu próximo proyecto.'
    },
    url: 'https://icons8.com/line-awesome',
    category: 'frontend',
    subcategory_en: 'icons',
    subcategory_es: 'iconos',
  },
  {
    id: '18',
    name: 'Font Joy',
    description: {
      'en': 'Font Joy is a website that generates font pairings for designers and developers to use in their projects. ',
      'es': 'Font Joy es un sitio web que genera combinaciones de fuentes para que los diseñadores y desarrolladores las utilicen en sus proyectos.'
    },
    url: 'https://fontjoy.com/',
    category: 'frontend',
    subcategory_en: 'fonts',
    subcategory_es: 'fuentes',
  },
  {
    id: '19',
    name: 'Icon Sets',
    description: {
      'en': 'Icon-sets is a website that provides a collection of icons for designers and developers to use in their projects.',
      'es': 'Icon-sets es un sitio web que proporciona una colección de iconos para que los diseñadores y desarrolladores los utilicen en sus proyectos.'
    },
    url: 'https://icon-sets.iconify.design/',
    category: 'frontend',
    subcategory_en: 'icons',
    subcategory_es: 'iconos',
  },
  {
    id: '20',
    name: 'Kaboompics',
    description: {
      'en': 'It allows to search pictures by color, and  it provides a complementary palette of colors in the photo.',
      'es': "Permite buscar imágenes por color y proporciona una paleta de colores complementaria en la foto."
    },
    url: 'https://kaboompics.com/',
    category: 'frontend',
    subcategory_en: 'images',
    subcategory_es: 'imagenes',
  },
  {
    id: "21",
    name: "1001 fonts",
    description: {
      'en': "In 1001 fonts you can download your favorite font and use it in your app",
      'es': "En 1001 fonts puedes descargar tu fuente favorita y usarla en tu app"
    },
    url: "https://www.1001fonts.com/",
    category: "frontend",
    subcategory_en: 'fonts',
    subcategory_es: 'fuentes',
  },
  {
    id: "22",
    name: "Coolors",
    description: {
      'en': "Coolors is the essential tool for creating color palettes. It generates perfect matching colors in seconds.",
      'es': "Coolors es la herramienta esencial para crear paletas de colores. Genera colores coincidentes perfectos en segundos."
    },
    url: "https://coolors.co/",
    category: "frontend",
    subcategory_en: "colors",
    subcategory_es: "colores",
  },   
  {
    id: "23",
    name: "Lottie files",
    description: {
      'en':  "LottieFiles takes away the complexity from Motion Design. It lets you Create, Edit, Test, Collaborate and Ship a Lottie in the easiest way possible.",
      'es': "LottieFiles elimina la complejidad del diseño de movimiento. Le permite crear, editar, probar, colaborar y enviar un lote de la forma más sencilla posible."
    },
    url: "https://lottiefiles.com/",
    category: "frontend",
    subcategory_en: "animations",
    subcategory_es: "animaciones",
  },
  {
    id: "24",
    name: "Type Scale",
    description: {
      'en': "A tool to create visual type scales - sets of font sizes that follow good-looking proportions.",
      'es': "Una herramienta para crear escalas de tipos visuales: conjuntos de tamaños de fuente que siguen proporciones atractivas."
    },
    url: "https://type-scale.com",
    category: "frontend",
    subcategory_en: 'fonts',
    subcategory_es: 'fuentes',
  },
  {
    id: "25",
    name: "Dribbble",
    description: {
      'en': "Explore the world’s leading design portfolios.",
      'es': "Explora las carteras de diseño líderes en el mundo."
    },
    url: "https://dribbble.com",
    category: "frontend",
    subcategory_en: "design-inspiration",
    subcategory_es: "inspiraciones-diseno",
  },
  {
    id: "26",
    name: "Godly Website",
    description: {
      'en': "A curated collection of good web design from all over the web",
      'es': "Una colección curada de buen diseño web de toda la web."
    },
    url: "https://godly.website",
    category: "frontend",
    subcategory_en: "design-inspiration",
    subcategory_es: "inspiraciones-diseno",
  },   
  {
    id: "27",
    name: "Cubic Bezier",
    description: {
      'en': "A tool for visualisation and creation of cubic-bezier curves for animation in CSS",
      'es': "Una herramienta para la visualización y creación de curvas cubic-bezier para animación en CSS"
    },
    url: "https://cubic-bezier.com/",
    category: "frontend",
    subcategory_en: "animations",
    subcategory_es: "animaciones",
  },
  {
    id: "28",
    name: "Framer Motion",
    description: {
      'en': "Framer Motion is a production-ready motion library for React from Framer, It's simple yet powerful, allowing you to express complex user interactions with robust, semantic markup.",
      'es':"Framer Motion es una biblioteca de movimiento lista para producción para React de Framer. Es simple pero potente, lo que le permite expresar interacciones de usuario complejas con un marcado semántico sólido."
    },
    url: "https://www.framer.com/motion/",
    category: "frontend",
    subcategory_en: "animations",
    subcategory_es: "animaciones",
  },
  {
    id: "29",
    name: "UI Faces",
    description:{
      'en': "UI Faces aggregates various free avatar placeholder sources that you can use in your design mockups by copy & paste, API, and plugins for Sketch, Adobe XD, and Figma.",
      'es': "UI Faces agrega varias fuentes gratuitas de marcadores de posición de avatar que puedes usar en tus maquetas de diseño mediante copiar y pegar, API y complementos para Sketch, Adobe XD y Figma."
    },
    url: "https://uifaces.co/browse-avatars/",
    category: "frontend",
    subcategory_en: "images",
    subcategory_es: "imagenes",
  },
  {
    id: "30",
    name: "HTML Color Picker",
    description: {
      'en': "This is a color picker by w3schools which provides different shades of colors based on your requirements. It also gives Hex and RGB value of color.",
      'es': "Este es un selector de color de w3schools que proporciona diferentes tonos de colores según tus requisitos. También proporciona valores de color hexadecimales y RGB."
    },
    url: "https://w3schools.com/colors/colors_picker.asp",
    category: "frontend",
    subcategory_en: "colors",
    subcategory_es: "colores",
  },
  {
    id: "31",
    name: "Neumorphism.io",
    description: {
      'en': "It's a platform where you can generate Soft-UI CSS elements for your webiste or app.",
      'es': "Es una plataforma donde puede generar elementos CSS de Soft-UI para tu sitio web o aplicación"
    },
    url: "https://neumorphism.io/#e0e0e0",
    category: "frontend",
    subcategory_en: "ui-generators",
    subcategory_es: "generadores-ui",
  },
  {
    id: "32",
    name: "Hype4 Academy",
    description: {
      'en': "Another cool and excellent site to generate Glassmorphism CSS for your project.",
      'es': "Otro sitio genial y excelente para generar Glassmorphism CSS para su proyecto."
    },
    url: "https://hype4.academy/tools/glassmorphism-generator",
    category: "frontend",
    subcategory_en: "ui-generators",
    subcategory_es: "generadores-ui",
  },
  {
    id: "33",
    name: "Universe.io",
    description: {
      'en': "It provides tones of cool UI elements made with HTML & CSS.",
      'es': "Proporciona tonos de elementos de interfaz de usuario geniales hechos con HTML y CSS."
    },
    url: "https://uiverse.io/all",
    category: "frontend",
    subcategory_en: "ui-generators",
    subcategory_es: "generadores-ui",
  },
  {
    id: "34",
    name: "CSS Portal",
    description: {
      'en': "A bundle of amazing and UI CSS elements for you to use in your project.",
      'es': "Un paquete de elementos CSS sorprendentes y de interfaz de usuario para que los use en tu proyecto."
    },
    url: "https://www.cssportal.com/ui-generators.php",
    category: "frontend",
    subcategory_en: "ui-generators",
    subcategory_es: "generadores-ui",
  },
  {
    id: "35",
    name: "EnjoyCSS",
    description: {
      'en': "A platform to implement amazing CSS elements of your choice for your project.",
      'es': "Una plataforma para implementar sorprendentes elementos CSS de su elección para tu proyecto.",
    }, 
    url: "https://enjoycss.com/",
    category: "frontend",
    subcategory_en: "ui-generators",
    subcategory_es: "generadores-ui",
  },
  {
    id: "36",
    name: "CSS Generator",
    description: {
      'en': "A CSS generator that helps you demonstrate and quickly generate CSS declarations for your website.",
      'es': "Un generador de CSS que ayuda a demostrar y generar rápidamente declaraciones de CSS para tu sitio web."
    },
    url: "https://cssgenerator.org/",
    category: "frontend",
    subcategory_en: "ui-generators",
    subcategory_es: "generadores-ui",
  },
  {
    id: "37",
    name: "Code Magic",
    description: {
      'en': "An amazing open source platform for generating ready to use CSS elements for your project. ",
      'es': "Una increíble plataforma de código abierto para generar elementos CSS listos para usar para su proyecto."
    }, 
    url: "https://code-magic.vercel.app/",
    category: "frontend",
    subcategory_en: "ui-generators",
    subcategory_es: "generadores-ui",
  },
  {
    id: "38",
    name: "daisyUI",
    description: {
      'en': "A platform where you can generate UI components based on TailwindCSS. ",
      'es': "Una plataforma donde puede generar componentes de interfaz de usuario basados ​​en TailwindCSS.",
    }, 
    url: "https://daisyui.com/",
    category: "frontend",
    subcategory_en: "ui-generators",
    subcategory_es: "generadores-ui",
  },
  {
    id: "39",
    name: "TailBlocks",
    description: {
      'en': "Another great platform where you can generate UI components based on TailwindCSS.",
      'es': "Otra gran plataforma donde puede generar componentes de interfaz de usuario basados ​​en TailwindCSS.",
    },
    url: "https://tailblocks.cc/",
    category: "frontend",
    subcategory_en: "ui-generators",
    subcategory_es: "generadores-ui",
  },
  {
    id: "40",
    name: "Proton",
    description: {
      'en' : "A JavaScript particle based animation engine. Which provides you tones of animated elements.",
      'es': "Un motor de animación basado en partículas de JavaScript. Lo que te proporciona tonos de elementos animados.",
    },
    url: "https://drawcall.github.io/Proton/",
    category: "frontend",
    subcategory_en: "animations",
    subcategory_es: "animaciones",
  },
  {
    id: "41",
    name: "Codepen",
    description: {
      'en': "An amazing online community for testing and showcasing HTML, CSS, JavaScript code snippets.",
      'es': "Una increíble comunidad en línea para probar y mostrar fragmentos de código HTML, CSS y JavaScript",
    },
    url: "https://codepen.io",
    category: "frontend",
    subcategory_en: "online-code-editors",
    subcategory_es: "editores-codigo-online",
  },
  {
    id: "42",
    name: "Tryit",
    description: {
      'en': "Another online platform for testing codes written in HTML, CSS and JavaScript.",
      'es': "Otra plataforma en línea para probar códigos escritos en HTML, CSS y JavaScript",
    }, 
    url: "https://w3schools.com/html/tryit.asp?filename=tryhtml_basic",
    category: "frontend",
    subcategory_en: "online-code-editors",
    subcategory_es: "editores-codigo-online"
  },
  {
    id: "43",
    name: "OnlineGDB",
    description: {
      'en': "Another online platform for testing codes written in HTML, CSS and JavaScript",
      'es': "Otra plataforma en línea para probar códigos escritos en HTML, CSS y JavaScript"
    },
    url: "https://w3schools.com/html/tryit.asp?filename=tryhtml_basic",
    category: "frontend",
    subcategory_en: "online-code-editors",
    subcategory_es: "editores-codigo-online"
  },
  {
    id: "44",
    name: "Sololearn",
    description: {
      'en': "It's multi-language online code editor test and share your code snippets.",
      'es': "Es un editor en línea multi-lenguaje en donde puedes testear y compartir tus fragmentos de código",
    },
    url: "https://sololearn.com/compiler-playground/cVRUy2BwauK8",
    category: "frontend",
    subcategory_en: "online-code-editors",
    subcategory_es: "editores-codigo-online"
  },
  {
    id: "45",
    name: "CodeChef",
    description: {
      'en': "An online IDE to practice you competitive programming skills. It allows you to code in multiple lanaguges.",
      'es': 'Un IDE en línea para practicar sus habilidades de programación competitiva. Le permite codificar en múltiples idiomas.'
    },
    url: "https://www.codechef.com/ide",
    category: "frontend",
    subcategory_en: "online-code-editors",
    subcategory_es: "editores-codigo-online"
  },
  {
    id: "46",
    name: "FreeCodeCamp",
    description: {
       'en': "This channel provides free multi programming language courses for Web-dev, android and more.",
       'es': "Este canal provee cursos gratis de multi-programación para desarrollo web, android y más",
    },
    url: "https://www.youtube.com/watch?v=fis26HvvDII",
    category: "youtube",
    subcategory_en: "android",
    subcategory_es: "android",
  },
  {
    id: "47",
    name: "The Net Ninja",
    description: {
       'en': "The Net Ninja is a YouTube channel that teaches web development, including HTML, CSS, JavaScript, PHP, Python, C#, and more.",
       'es': "The Net Ninja es un canal de YouTube que enseña desarrollo web, incluyendo HTML, CSS, JavaScript, PHP, Python, C# y más",
    },
    url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg",
    category: "youtube",
    subcategory_en: "web-development",
    subcategory_es: "desarrollo-web",
  },
  {
    id: "48",
    name: "3Blue1Brown",
    description: {
       'en': "3Blue1Brown, by Grant Sanderson, is some combination of math and entertainment, depending on your disposition. The goal is for explanations to be driven by animations and for difficult problems to be made simple with changes in perspective.",
       'es': "3Blue1Brown, de Grant Sanderson, es una combinación de matemáticas y entretenimiento, dependiendo de tu disposición. El objetivo es que las explicaciones sean impulsadas por animaciones y que los problemas difíciles se simplifiquen con cambios en la perspectiva.",
    },
    url: "https://www.youtube.com/@3blue1brown",
    category: "youtube",
    subcategory_en: "machine-learning",
    subcategory_es: "machine-learning",
  },
  {
    id: "49",
    name: "UI Color Picker",
    description: {
       'en': "A color picker that contains different shades of solid colors & gradients. Which can be used in any kind of projects.",
       'es': "Un seleccionador de color que contiene diferentes sombras de colores y gradientes, que pueden ser usados en cualquier tipo de proyectos",
    },
    url: "https://uicolorpicker.com/",
    category: "frontend",
    subcategory_en: "colors",
    subcategory_es: "colores",
  },
  {
    id: "50",
    name: "Traversy Media",
    description: {
       'en': "This channel is for all level of developers who want to start or continue their journey in tech.",
       'es': "Este canal es para todos los niveles de desarrolladores que quieren empezar o continuar su viaje en tech.",
    },
    url: "https://www.youtube.com/@TraversyMedia",
    category: "youtube",
    subcategory_en: "web-development",
    subcategory_es: "desarrollo-web",
 },
 {
  id: "51",
  name: "FreeCodeCamp",
  description: {
     'en': "This channel provide free courses related to web-dev, app-dev, projects and many more.",
     'es': "Este canal provee cursos gratis relacionados con desarrollo web, desarrollo de apps, proyectos y mucho más.",
  },
  url: "https://www.youtube.com/@freecodecamp",
  category: "youtube",
  subcategory_en: "web-development",
  subcategory_es: "desarrollo-web",
},
{
  id: "52",
  name: "Fireship",
  description: {
     'en': "Fireship is a channel which provides short introduction videos and quick learning guides.",
     'es': "Fireship es un canal que provee videos de corta introducción y guías rápidas de aprendizaje.",
  },
  url: "https://www.youtube.com/@Fireship",
  category: "youtube",
  subcategory_en: "web-development",
  subcategory_es: "desarrollo-web",
},
{
  id: "53",
  name: "Programming with Mosh",
  description: {
     'en': "It's another great channel for starting you web development journey.",
     'es': "Es otro grandioso canal para empezar el viaje hacia el desarrollo web.",
  },
  url: "https://www.youtube.com/@programmingwithmosh",
  category: "youtube",
  subcategory_en: "web-development",
  subcategory_es: "desarrollo-web",
},
{
  id: "54",
  name: "Jennys Lectures CSIT",
  description: {
     'en': "This channel provides free courses for DSA, C, C++, Python etc.",
     'es': "Este canal provee cursos gratis de DSA, C, C++, Python, etc.",
  },
  url: "https://www.youtube.com/@JennyslecturesCSIT",
  category: "youtube",
  subcategory_en: "dsa",
  subcategory_es: "estructuras-de-datos",
},
{
  id: "55",
  name: "Academind",
  description: {
     'en': "It's a great channel for web development. It's more focused on JavaScript and it's frameworks.",
     'es': "Este es un gran canal para desarrollo web. Está más enfocado a JavaScript y a sus entornos de trabajo."
  },
  url: "https://www.youtube.com/@academind",
  category: "youtube",
  subcategory_en: "web-development",
  subcategory_es: "desarrollo-web",
},
];

export const sidebarData: ISidebar[] = [
  {
    category: 'frontend',
    subcategory: [
      { name: 'images', url: '/images' },
      { name: 'fonts', url: '/fonts' },
      { name: 'colors', url: '/colors' },
      { name: 'illustrations', url: '/illustrations' },
      { name: 'animations', url: '/animations' },
      { name: 'icons', url: '/icons' },
      { name: 'design inspiration', url: '/design-inspiration' },
      { name: 'themes & templates', url: '/themes-templates' },
      { name: 'online code editors', url: '/online-code-editors' },
    ],
    lang: 'en'
  },
  {
    category: 'frontend',
    subcategory: [
      { name: 'imagenes', url: '/imagenes' },
      { name: 'fuentes', url: '/fuentes' },
      { name: 'colores', url: '/colores' },
      { name: 'ilustraciones', url: '/ilustraciones' },
      { name: 'animaciones', url: '/animaciones' },
      { name: 'iconos', url: '/iconos' },
      { name: 'insiraciones de diseño', url: '/inspiraciones-diseno' },
      { name: 'temas y plantillas', url: '/temas-plantillas' },
      { name: 'editores de código online', url: '/editores-codigo-online' },
    ],
    lang: 'es'
  },
  {
    category: 'backend',
    subcategory: [
      { name: 'validation', url: '/validation' },
      { name: 'security', url: '/security' },
      { name: 'authentication', url: '/authentication' },
      { name: 'caching', url: '/caching' },
      { name: 'testing', url: '/testing' },
    ],
    lang: 'en'
  },
   {
    category: 'backend',
    subcategory: [
      { name: 'validacion', url: '/validacion' },
      { name: 'seguridad', url: 'seguridad'},
      { name: 'autenticacion', url: 'autenticacion' },
      { name: 'caching', url: 'caching' },
      { name: 'testing', url: 'testing' },
    ],
    lang: 'es'
  },
  {
    category: 'youtube',
    subcategory: [
      { name: 'web development', url: '/web-development' },
      { name: 'machine learning', url: '/machine-learning' },
      { name: 'data structures', url: '/dsa' },
      { name: 'Android', url: '/android' },
    ],
    lang: 'en'
  },
  {
    category: 'youtube',
    subcategory: [
      { name: 'desarrollo web', url: '/desarrollo-web' },
      { name: 'machine learning', url: '/machine-learning' },
      { name: 'estructuras de datos', url: '/estructuras-de-datos' },
      { name: 'Android', url: '/android' },
    ],
    lang: 'es'
  },
];
