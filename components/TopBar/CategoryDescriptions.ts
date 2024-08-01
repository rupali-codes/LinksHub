type CategoryDescriptions = {
  [key: string]: string
}

const categoryDescriptions: CategoryDescriptions = {
  //frontend
  accessibility:
    'Accessibility is the concept of whether a product or service can be used by everyone—however they encounter it. Accessibility laws exist to aid people with disabilities, but designers should try to accommodate all potential users in many contexts of use anyway. ',
  animations:
    'Animation is the state of being full of life and energy, like a room full of excited kids at a birthday party. It is a method of photographing successive drawings, models, or even puppets, to create an illusion of movement in a sequence.',
  colors:
    'Colors mean the aspects of the appearance of objects and light sources that may be described in terms of hue, lightness, and saturation',
  design_inspiration:
    'The right kind of inspiration will always help you come up with creative and unique ideas for your projects but sometimes you need some help getting inspired. Luckily, there are a TON of great resources for design inspiration.',
  css_games:
    'CSS games are a fun way to learn and practice CSS. They are a great way to learn new CSS properties and techniques, and they can help you improve your skills in a fun and interactive way.',
  fonts:
    'A font is a graphical representation of text that may include a different typeface, point size, weight, color, or design. Fonts are text characters of different types and sizes. They help designers convey interface content intuitively and guide web or mobile app users to interact with the interface smoothly. The term “font” actually refers to a set of graphics that correspond to some or all of the Unicode glyphs',
  icons:
    'An icon is a symbol or graphic representation on a screen of a program, option, or window. Icons make it easier to recognize and locate items on your computer or features within a program and improve accessibilty and understandability.',
  illustrations:
    'Illustrations are visual representations of text, concepts, or ideas. They can be used to convey complex information in a simple and easy-to-understand way.',
  images:
    'Images are the visual representations of objects or concepts. They can be used to convey information in a simple and easy-to-understand way.',
  react:
    'React is a JavaScript library for building user interfaces. It was developed by Facebook and is used by many popular websites such as Netflix, Airbnb, and Instagram. React allows developers to create reusable UI components and makes it easy to manage the state of an application.',
  themes_and_templates:
    'Theme templates are pre-designed website themes that can be customized to fit your needs. They are useful for quickly setting up a website without having to design everything from scratch.',
  videos:
    'Videos are visual representations of moving images and sound. They can be used to convey information in a simple and easy-to-understand way.',
  three_d_libraries:
    '3D Libraries are collections of reusable components that can be used to create 3D graphics and animations. They are often used in conjunction with frameworks like Three.js to create web applications.',
  next_js:
    'Next.js is a flexible React framework that gives you building blocks to create fast web applications.',
  ui_generators:
    'The UI Generator, or User Interface Generator, is an Eclipse tool that takes a user model and generates a role-based user interface for a J2EE Web application.',
  online_code_editors:
    "Online code editors, also called cloud-based code editors, are convenient because they usually require no setup. Plus, it's way easier to collaborate with someone over the cloud.",
  ui_libraries:
    'UI libraries are collections of reusable components that can be used to build user interfaces. They are often used in conjunction with frameworks like React or Vue.js to create web applications.',
  js_chart_libraries:
    'JavaScript chart libraries are used to create interactive and visually appealing charts and graphs for web applications. They are often used in data visualization and reporting applications.',
  angular:
    'Angular is a popular open-source web application framework similar to react developed and maintained by Google. ',
  //backend
  api: 'Interfaces that allow different software applications to communicate and share data with one another.',
  architecture:
    'Architecture is the art and technique of designing and building structures. It is both the process and the product of sketching, conceiving, planning, designing.',
  authentication:
    'Authentication is the process of verifying the identity of a user or system. It is used to ensure that only authorized users have access to a system or application.',
  caching:
    'Caching is the process of storing frequently accessed data in a cache so that it can be quickly retrieved when needed. Caching can improve the performance of applications by reducing the amount of time it takes to retrieve data from a database or other data source.',
  database:
    'A database is an organized collection of data that can be easily accessed, managed, and updated. Databases are used to store and manage data for various applications such as websites, mobile apps, and enterprise systems.',
  email_providers:
    'Platforms facilitating the exchange of electronic messages, allowing users to send, receive, and manage their emails efficiently.',
  security:
    'Security is the practice of protecting systems, networks, and data from unauthorized access, use, disclosure, disruption, modification, or destruction.',
  system_design:
    'System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements.',
  testing:
    'Testing is the process of evaluating a system or its component(s) with the intent to find whether it satisfies the specified requirements or not.',
  validation:
    'Validation is the process of checking whether a system or its component(s) satisfies the specified requirements or not and checks the data is correct or not.',

  //languages
  c_programming:
    'C is a general-purpose programming language that was developed in the early 1970s by Dennis Ritchie at Bell Labs. C is widely used for developing system software, embedded systems, and application software.',
  cpp: "C++ is a versatile and powerful programming language that builds upon the features of C, offering object-oriented programming capabilities and support for low-level memory manipulation. It's widely used for developing system software, games, high-performance applications, and more.",
  dart: "Dart is a programming language primarily used for building web and mobile applications with a focus on client-side development. It's the language behind the Flutter framework, allowing developers to create cross-platform apps with a single codebase. Dart offers features like a Just-In-Time (JIT) compiler for development speed and an Ahead-Of-Time (AOT) compiler for production performance optimization.",
  kotlin:
    'Kotlin is a modern, statically-typed programming language that seamlessly interoperates with Java, making it a popular choice for Android app development. Known for its concise syntax and enhanced safety features, Kotlin offers nullable types and expressive constructs to streamline development processes.',
  java: 'Java is a widely-used, object-oriented programming language known for its "write once, run anywhere" philosophy, enabling developers to create platform-independent applications. It provides a robust standard library, automatic memory management through garbage collection, and a strong emphasis on safety and portability in various domains, from web development to enterprise applications.',
  rust: 'Rust is a systems programming language designed for safety and performance, featuring a strong focus on memory safety without sacrificing low-level control. Its ownership and borrowing system ensures prevention of common programming errors like null pointer dereferences, making it suitable for tasks ranging from system-level programming to building web services.',
  csharp:
    'C# is a modern, object-oriented programming language that was developed by Microsoft in the early 2000s. C# is widely used for developing Windows desktop applications, web applications, and games.',
  golang:
    'Go is a modern, open-source programming language that Google developed in the early 2000s. Go is widely used for developing networking, web, and cloud applications.',
  javascript:
    'JavaScript is widely used for developing web applications, mobile applications, and desktop applications. JavaScript is a dynamically typed language that supports functional and object-oriented programming styles.',
  python:
    'Python is a high-level, interpreted programming language that was developed in the late 1980s by Guido van Rossum at the National Research Institute for Mathematics and Computer Science in the Netherlands. Python is widely used for developing web applications, machine learning, and data analysis.',
  ruby: 'Ruby is a high-level, interpreted programming language that was developed in the mid-1990s by Yukihiro Matsumoto in Japan. Ruby is widely used for developing web applications, mobile applications, and desktop applications.',
  typescript:
    ' TypeScript is a statically typed language that supports object-oriented and functional programming styles, used for developing web applications, mobile applications, and desktop applications.',
  solidity:
    'Solidity is an object-oriented programming language for implementing smart contracts on various blockchain platforms, most notably, Ethereum.',
  swift:
    'Swift is a powerful and intuitive programming language developed by Apple. It is used to create apps for iOS, macOS, watchOS, and so on. Swift code is concise yet expressive (easier to understand and write).',

  // Open-source
  articles:
    'There are many open source blogging platforms available for developers. Some of the most popular ones include WordPress, Joomla, and Drupal1. Other open source blogging platforms include Ghost, Serendipity, SilverStripe, and Jekyll',
  projects:
    'Anyone can contribute to the projects are called OpenSource Projects. There are many open source projects available for developers. Some of the most popular ones include Linux, Git, and Apache1. Other open source projects include Kubernetes, TensorFlow, and React Native',
  tools:
    'There are various open source tools available for developers. Some of the most popular ones include Hadoop, VLC Media Player, and GIMP1. Other open source tools include TensorFlow, Eclipse Che, and OpenShift Do.',
  tutorials:
    'Tutorials helps you to learn-by-watching. It contains the list most helping tutorials on open-source.',
  os_programs:
    'Open source programs where contributors contribute in projects under the guidance of mentors.',
  //devops
  automation_tools:
    'Automation tools in DevOps are software solutions tha streamline and automate repetitive tasks, processes and workflows, improving efficiency, consistency and speed in software development and deployment',
  cicd: 'Continuous integration and continuous delivery (CI/CD) is a set of practices that combines continuous integration (CI) and continuous delivery (CD) to automate the process of software development and deployment.',
  devops_life_cycle:
    'DevOps is a set of practices that combines software development (Dev) and information technology operations (Ops) to shorten the systems development life cycle while delivering features, fixes, and updates frequently in close alignment with business objectives.',
  devops_methodologies:
    'DevOps methodologies are a set of practices that combine software development and information technology operations to shorten the systems development life cycle while delivering features, fixes, and updates frequently in close alignment with business objectives.',
  docker:
    'Docker is a software platform that allows you to build, test, and deploy applications quickly. Docker packages software into standardized units called containers. These are isolated from one another and bundle their own software, libraries, and configuration files; they can also communicate with each other through well-defined channels.',
  jenkins:
    'As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.',
  kubernetes:
    'Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.',
  microservices:
    'Microservices are a software development technique—a variant of the service-oriented architecture (SOA) architectural style that structures an application as a collection of loosely coupled services.',
  iac: 'Infrastructure as Code (IaC) is the managing and provisioning of infrastructure through code instead of through manual processes.',

  // AI
  artificial_intelligence:
    'AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and understanding natural language.',
  data_science:
    'Data science is an interdisciplinary field that involves the use of statistical, mathematical, and computational methods to extract insights and knowledge from data. Data science is widely used for machine learning, data analysis, and data visualization.',
  deep_learning:
    'Deep learning is a subfield of machine learning that involves the use of neural networks to learn from data. Deep learning is widely used for image recognition, natural language processing, and speech recognition. ',
  machine_learning:
    'Machine learning is a subfield of artificial intelligence that uses statistical, mathematical, and computational methods to learn from data. Machine learning is widely used for data analysis, data visualization, and predictive modeling.',
  natural_language_processing:
    'Natural Language Processing is a branch of artificial intelligence that focuses on the interaction between computers and human language. It involves the development of algorithms and models that enable machines to understand and generate human language, allowing them to perform tasks like language translation an more. ',

  // AI Tools
  design:
    'Harness the power of AI-driven editing tools to refine your writing effortlessly. From grammar and style suggestions to readability enhancements, these editors ensure your content shines with clarity and precision',
  chatbots:
    "Experience seamless interactions and instant assistance with AI chatbots. Whether it's answering queries, providing support, or automating tasks, these intelligent bots deliver personalized responses to enhance user experiences.",
  blog_writing:
    'Unlock your creativity and streamline your blog writing process with AI-powered tools. From generating ideas to optimizing SEO, these tools empower you to craft engaging content that captivates your audience.',

  // cyber-security
  offensive_security:
    'Offensive security is the proactive approach to securing networks and systems from attacks by actively seeking out vulnerabilities and weaknesses. ',
  defensive_security:
    'Defensive security is a proactive approach that focuses on prevention, detection, and response to attacks from the perspective of defending the organization.',
  malware_analysis:
    'Malware analysis is the study of the unique features, objectives, sources, and potential effects of harmful software and code, such as spyware, viruses, malvertising, and ransomware.',
  web_security:
    'Web application penetration testing is the practice of simulating attacks on a system in an attempt to gain access to sensitive data, with the purpose of determining whether a system is secure.',

  //resources
  blogs:
    'The term “blog” is short for “weblog.” Blogs are usually maintained by an individual with regular entries of commentary, descriptions of events, or other material such as graphics or video.',
  e_book:
    'An ebook (short for electronic book) is a book publication made available in digital form, consisting of text, images, or both readable on the flat-panel display of computers or other electronic devices.',
  hosting:
    'Web hosting is an online service that makes the content of your website accessible on the internet. When you purchase a hosting plan, you are renting space on a physical server to store all the files and data.',
  docsgenerator:
    'The term “doc” is short for “documentation”. Here you can find various Technical Documentation generators.',
  dsa: 'Data Structures and Algorithms play an important role in tech placements. So here is a list of important and great dsa resources',
  officialdocs:
    'Official docs is short for official documentation. Official documentation is an important resource for users of software products and services as it provides a comprehensive guide to using the software.',
  project_ideas:
    'Projects play an important role in your resume. So here is a list of some great projects and their repositories.',
  ssg: 'Static Site Generators are tools that generate HTML files from templates and content files. They are popular among developers for creating fast, secure, and easy-to-maintain websites.',

  //youtube
  android:
    'Android programming is the process of creating applications that run on the Android operating system. Android applications are written in Java or Kotlin programming languages .',
  competitive_programming:
    'Competitive programming is a mental sport that involves writing source code of computer programs that are able to solve given problems.',
  computer_science:
    'Computer science programming is the process of creating computer software using programming languages. Computer science programming is a subset of computer science that focuses on the development of software .',
  css: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts ',
  'data structures':
    'Data structures are a way of organizing and storing data in a computer so that it can be accessed and used efficiently .',
  fintech:
    'It is a catch-all term for technology used to augment, streamline, digitize or disrupt traditional financial services. Fintech refers to software, algorithms, and applications for both desktop and mobile.',
  game_development:
    'Game development is the process of creating games for various platforms. It involves different stages and aspects, such as design, development, release, storyboarding, writing, audio, art, coding, music, animation, modelling, testing and marketing. ',
  yt_machine_learning:
    'Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. ',
  tensorflow:
    'TensorFlow is a free and open-source software library for machine learning and artificial intelligence. It can be used across a range of tasks but has a particular focus on training and inference of deep neural networks.',
  software_testing:
    'Testing is executing a system in order to identify any gaps, errors, or missing requirements.For example, YouTube also uses A/ B testing to test different versions of their website to see which version performs better.',
  web_development:
    'Web development is the process of building, programming, and maintaining websites and web applications. It involves various disciplines such as web design, coding, programming, database management, and web server administration.',
  web3_metaverse:
    'Web3 is the next generation of the internet. It is a decentralized network that allows users to interact with each other without the need for intermediaries. ',

  //competitive programming
  cp_helpers:
    'Coding libraries, templates, and community forums serve as valuable aids for competitive programmers, offering pre-written code snippets, discussions, and collaborative support to optimize problem-solving efficiency.',
  cp_platforms:
    'Online platforms such as Codeforces, HackerRank, and LeetCode provide a virtual arena for programmers to engage in competitive programming challenges, honing their problem-solving skills.',
  cp_tutorials:
    'Various online resources offer tutorials on algorithms, data structures, and problem-solving techniques, assisting aspiring competitive programmers in enhancing their coding proficiency and strategic thinking.',

  //other
  events:
    'An event is a gathering where professionals and enthusiasts explore, discuss, and showcase advancements in technology. It fosters learning, networking, and collaboration among individuals passionate about various technical fields.',
  communities:
    'Communities are groups of like-minded people who work on projects and help their peers to grow  and improve their skills.',
  devtools:
    'This list of Development tools will help you boost your programming speed and modify your projects to the next level.',
  github: 'Well, Github does not need description, devs know well!',
  git: 'Your friendly neighborhood version control system to track the development activities.',
  other_resources:
    'Some extra resources to help you in your coding projects.',
  podcasts: 'Coding podcasts to listen to when you feel demotivated.',
  contributors:
    'These are the people that have helped LinksHub come to life! Thank you for your support! Note: M = Maintainer and C = Contributors',
  text_formatting:
    'Your ultimate solution for all your text formatting needs!',
  roadmaps:
    'Roadmaps are strategic plans that outline key milestones, goals, and timelines. They serve as guides for project development, ensuring a systematic and organized approach to achieving objectives.',
  domains:
    'DNS is a crucial component of the internet infrastructure. It translates human-readable domain names into IP addresses, facilitating seamless communication between devices on the internet.',

  // Placement-Prep
  interview_preparation:
    'Diverse resources for developers to enhance interview skills, including articles, videos, and mock interview platforms.',
  job_portals:
    'Explore top job portals, their features, and expert tips for efficient job searching and connecting with employers.',
  resume_building:
    'Providing resources to help developers create compelling resumes that showcase their skills and experience.',
  portfolio_building:
    'Offer templates and examples to assist developers in building impressive portfolios that highlight their work and accomplishments.',
  certifications:
    'Curated list of globally recognized tech certifications, including requirements, benefits, and preparation strategies, emphasizing industry recognition and validity.',
  cover_letters:
    "A cover letter is a formal document accompanying a resume, providing a personalized introduction to a potential employer. It highlights the applicant's qualifications, skills, and interest in the specific position.",

  //technical-writing
  technical_writing_tools:
    'This list provides the tools to suit your tech writing needs.',

  //data-structures
  dsa_articles:
    'This section provides various important articles related to DSA problem solving skills, how to tackle them, how to think about it and many more.',
  dsa_courses:
    'This section provides various online courses that can help you start with the fundamentals of data structures and algorithms and also ace your coding interviews.',
  dsa_tutorials:
    'This section provides you with YouTube tutorials that help you grasp concepts better by hands-on experience and learn better, practically!',
  //BlockChain
  smartcontracts:
    'Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They run on a blockchain network, which is a decentralized and distributed ledger technology. Smart contracts automatically execute and enforce the terms of a contract when predefined conditions are met',
  truffle:
    'Truffle is a popular development framework for Ethereum blockchain. It provides a development environment, testing framework, and asset pipeline for building decentralized applications (DApps) on the Ethereum platform.',
  hardhat:
    'Hardhat is another popular development framework for Ethereum smart contracts and decentralized applications (DApps). It provides a wide range of features and tools for Ethereum developers, making the development and testing of smart contracts easier and more efficient.',
  ethers:
    '"Ethers" generally refers to both the native cryptocurrency of the Ethereum network and a popular JavaScript library used for interacting with the Ethereum blockchain.',

  //cloud computing
  aws: "AWS, Amazon's cloud computing platform, provides scalable and reliable services, including computing power, storage, and machine learning. Trusted by millions, AWS enables businesses to innovate and transform digitally with efficiency.",
  gcp: 'Google Cloud is a prominent cloud computing platform offering a range of services, from computing and storage to advanced AI solutions. Trusted by businesses, it facilitates innovation and scalability.',
  azure:
    'Microsoft Cloud, known as Azure, is a comprehensive cloud computing platform. With diverse services, including computing, storage, and AI, Azure empowers businesses to thrive in the digital landscape.',
  oracle:
    'Oracle Cloud is a leading cloud computing platform providing a robust suite of services. From databases to advanced solutions, Oracle Cloud supports businesses in achieving scalability, security, and innovation.',
  ibm: 'IBM Cloud stands as a formidable cloud computing platform, offering a wide array of services. From computing power to advanced technologies, IBM Cloud supports businesses in their digital transformation journey.',

  //internet of things
  coursera:
    'Coursera is an online learning platform that offers a wide range of courses, specializations, and degrees from top universities and organizations globally. It provides accessible and flexible education to individuals seeking to enhance their skills and knowledge.',
  raspberrypi:
    'Raspberry Pi is a series of low-cost, credit card-sized single-board computers developed to promote computer science education and DIY projects. With a vibrant community, Raspberry Pi empowers enthusiasts and learners to explore programming, electronics, and creative computing.',
}

export default categoryDescriptions
