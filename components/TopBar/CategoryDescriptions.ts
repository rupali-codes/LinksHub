type CategoryDescriptions = {
  [key: string]: string
}

const categoryDescriptions: CategoryDescriptions = {
  //frontend
  accessibility: 'Accessibility is the concept of whether a product or service can be used by everyone—however they encounter it. Accessibility laws exist to aid people with disabilities, but designers should try to accommodate all potential users in many contexts of use anyway. ',
  animations: 'Animation is the state of being full of life and energy, like a room full of excited kids at a birthday party. It is a method of photographing successive drawings, models, or even puppets, to create an illusion of movement in a sequence.',
  colors: 'Colors mean the aspect of the appearance of objects and light sources that may be described in terms of hue, lightness, and saturation',
  'design inspiration': 'The right kind of inspiration will always help you come up with creative and unique ideas for your projects but sometimes you need some help getting inspired. Luckily, there are a TON of great resources for design inspiration.',
  fonts: 'A font is a graphical representation of text that may include a different typeface, point size, weight, color, or design. Fonts are text characters of different types and sizes. They help designers convey interface content intuitively and guide web or mobile app users to interact with the interface smoothly. The term “font” actually refers to a set of graphics that correspond to some or all of the Unicode glyphs',
  icons: 'An icon is a symbol or graphic representation on a screen of a program, option, or window. Icons make it easier to recognize and locate items on your computer or features within a program and improve accessibilty and understandability.',
  illustrations: 'Illustrations are visual representations of text, concepts or ideas. They can be used to convey complex information in a simple and easy-to-understand way.',
  images: 'Images are visual representations of objects or concepts. They can be used to convey information in a simple and easy-to-understand way.',
  onlineCodeEditors: 'Online code editors are web-based tools that allow you to write and test code in your browser. They are useful for quickly testing out code snippets or for working on small projects.',
  react: 'React is a JavaScript library for building user interfaces. It was developed by Facebook and is used by many popular websites such as Netflix, Airbnb, and Instagram. React allows developers to create reusable UI components and makes it easy to manage the state of an application.',
  'themes templates': 'Theme templates are pre-designed website themes that can be customized to fit your needs. They are useful for quickly setting up a website without having to design everything from scratch.',
  'ui generator': 'A UI generator is a tool that allows you to create user interfaces without having to write code. Some popular UI generators include Webflow, Figma, and Sketch. ',
  videos: 'Videos are visual representations of moving images and sound. They can be used to convey information in a simple and easy-to-understand way.',
  //backend
  architecture: 'Architecture is the art and technique of designing and building structures. It is both the process and the product of sketching, conceiving, planning, designing.',
  authentication: 'Authentication is the process of verifying the identity of a user or system. It is used to ensure that only authorized users have access to a system or application.',
  caching: 'Caching is the process of storing frequently accessed data in a cache so that it can be quickly retrieved when needed. Caching can improve the performance of applications by reducing the amount of time it takes to retrieve data from a database or other data source.',
  database: 'A database is an organized collection of data that can be easily accessed, managed, and updated. Databases are used to store and manage data for various applications such as websites, mobile apps, and enterprise systems.',
  security: 'Security is the practice of protecting systems, networks, and data from unauthorized access, use, disclosure, disruption, modification, or destruction.',
  'system design': 'System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements.',
  testing: 'Testing is the process of evaluating a system or its component(s) with the intent to find whether it satisfies the specified requirements or not.',
  validation: 'Validation is the process of checking whether a system or its component(s) satisfies the specified requirements or not and checks the data is correct or not.',
  // languages
  'c programming': 'C is a general-purpose programming language that was developed in the early 1970s by Dennis Ritchie at Bell Labs. C is widely used for developing system software, embedded systems, and application software.',
  csharp: 'C# is a modern, object-oriented programming language that was developed by Microsoft in the early 2000s. C# is widely used for developing Windows desktop applications, web applications, and games.',
  golang: 'Go is a modern, open-source programming language that was developed by Google in the early 2000s. Go is widely used for developing networking, web, and cloud applications.',
  javascript: 'JavaScript is widely used for developing web applications, mobile applications, and desktop applications. JavaScript is a dynamically typed language that supports functional and object-oriented programming styles.',
  python: 'Python is a high-level, interpreted programming language that was developed in the late 1980s by Guido van Rossum at the National Research Institute for Mathematics and Computer Science in the Netherlands. Python is widely used for developing web applications, machine learning, and data analysis.',
  ruby: 'Ruby is a high-level, interpreted programming language that was developed in the mid-1990s by Yukihiro Matsumoto in Japan. Ruby is widely used for developing web applications, mobile applications, and desktop applications.',
  typescript: ' TypeScript is a statically typed language that supports object-oriented and functional programming styles, used for developing web applications, mobile applications, and desktop applications.',
  // ml & ai
  'data science': 'Data science is an interdisciplinary field that involves the use of statistical, mathematical, and computational methods to extract insights and knowledge from data. Data science is widely used for machine learning, data analysis, and data visualization.',
  'deep learning': 'Deep learning is a subfield of machine learning that involves the use of neural networks to learn from data. Deep learning is widely used for image recognition, natural language processing, and speech recognition. ',
  'machine-learning': 'Machine learning is a subfield of artificial intelligence that involves the use of statistical, mathematical, and computational methods to learn from data. Machine learning is widely used for data analysis, data visualization, and predictive modeling.',
  // Open-source
  openSourceBlogs: 'There are many open source blogging platforms available for developers. Some of the most popular ones include WordPress, Joomla, and Drupal1. Other open source blogging platforms include Ghost, Serendipity, SilverStripe, and Jekyll',
  openSourceProjects: 'Anyone can contribute to the projects are called OpenSource Projects. There are many open source projects available for developers. Some of the most popular ones include Linux, Git, and Apache1. Other open source projects include Kubernetes, TensorFlow, and React Native',
  openSourceTools: 'There are various open source tools available for developers. Some of the most popular ones include Hadoop, VLC Media Player, and GIMP1. Other open source tools include TensorFlow, Eclipse Che, and OpenShift Do.',
  // resources
  blogs: 'The term “blog” is short for “weblog.” Blogs are usually maintained by an individual with regular entries of commentary, descriptions of events, or other material such as graphics or video.',
  ebook: 'An ebook (short for electronic book) is a book publication made available in digital form, consisting of text, images, or both readable on the flat-panel display of computers or other electronic devices.',
  hosting: 'Web hosting is an online service that makes contentof your website accessible on the internet. When you purchase a hosting plan, you are renting space on a physical server to store all the files and data.',
  officialdocs: 'Official docs is short for official documentation. Official documentation is an important resource for users of software products and services as it provides a comprehensive guide to using the software.',
  'project ideas': 'Projects play an important role in your resume. So here is a list of some great projects and their repositoires.',
  // youtube
  android: 'Android programming is the process of creating applications that run on the Android operating system. Android applications are written in Java or Kotlin programming languages .',
  'competitive programming': 'Competitive programming is a mental sport that involves writing source code of computer programs that are able to solve given problems.',
  'computer science': 'Computer science programming is the process of creating computer software using programming languages. Computer science programming is a subset of computer science that focuses on the development of software .',
  css: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts ',
  'data structures': 'Data structures are a way of organizing and storing data in a computer so that it can be accessed and used efficiently .',
  fintech: 'It is a catch-all term for technology used to augment, streamline, digitize or disrupt traditional financial services. Fintech refers to software, algorithms and applications for both desktop and mobile.',
  'game development': 'Game development is the process of creating games for various platforms. It involves different stages and aspects, such as design, development, release, storyboarding, writing, audio, art, coding, music, animation, modelling, testing and marketing. ',
  'machine learning': 'Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. ',
  tensorflow: 'TensorFlow is a free and open-source software library for machine learning and artificial intelligence. It can be used across a range of tasks but has a particular focus on training and inference of deep neural networks.',
  youtubeTesting: 'Testing is executing a system in order to identify any gaps, errors, or missing requirements in contrary to the actual requirements.YouTube also uses A/B testing to test different versions of their website to see which version performs better.',
  'web development': 'Web development is the process of building, programming, and maintaining websites and web applications. It involves various disciplines such as web design, coding, programming, database management, and web server administration.',
  'web3 metaverse': 'Web3 is the next generation of the internet. It is a decentralized network that allows users to interact with each other without the need for intermediaries. ',
  // other
  communities: 'Communities are group of like minded people who work on projects and help their peers to grow  and improve their skills.',
  devtools: 'This list of Development tools will help you boost your programming speed and modify your projects to a next level.',
  github: 'Well, Github does not need description, devs know well!',
  'other resources': 'Some extra resources to help you in your coding projects.',
  podcasts: 'Coding podcasts to listen to when you feel demotivated.',
}

export default categoryDescriptions
