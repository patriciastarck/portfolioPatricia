const availableLanguages = {
  PT: 'pt',
  EN: 'en',
};

const translations = {
  [availableLanguages.PT]: {
    // Componente Navbar
    NAV_HOME: 'Home',
    NAV_ABOUT: 'Sobre',
    NAV_SKILLS: 'Habilidades',
    NAV_PROJECTS: 'Meus Projetos',
    NAV_CONTACT: 'Contato',
    TITLE_PORTFOLIO: 'Portfolio',
    
    // Componente Novo (Home)
    NAME: 'Patricia Starck Bernardi',
    ROLE: 'Analista de Sistemas e Full Stack Developer',
    TECH_STACK_TITLE: 'Java | Spring Boot | JavaScript | React | Tailwind',
    
    // Componente About
    ABOUT_TITLE: 'Sobre mim',
    ABOUT_TEXT: 'Analista de sistemas e desenvolvedora full stack com olhar direcionado para a inovação. Minha experiência na área de nutrição me ensinou a importância da análise detalhada, da resolução de problemas e da criação de soluções personalizadas. Hoje, aplico essas habilidades para desenvolver sistemas eficientes, assegurando que cada projeto seja elaborado com precisão e propósito.',
    ABOUT_DOWNLOAD_CV: 'Curriculo Download',
    
    // Componente Skills
    SKILLS_TITLE: 'Minhas Habilidades',

    // Componente Projects
    PROJECTS_TITLE: 'Meus Projetos',
    PROJECT_LIVE_PREVIEW: 'Live Preview',
    PROJECT_DESCRIPTION_REDIRECT: 'Redireciona ao Github do projeto',
    PROJECT_TITLE_1: 'Jogo do número secreto - JavaScript',
    PROJECT_TITLE_2: 'Projeto Literalura',
    PROJECT_TITLE_3: 'Conversor de moeda - Java',
    PROJECT_TITLE_4: 'Forum Hub - Java Spring Boot',
    
    // Componente Contact
    CONTACT_TITLE: 'Contato',
    CONTACT_NAME: 'Nome',
    CONTACT_EMAIL: 'Email',
    CONTACT_MESSAGE: 'Mensagem',
    CONTACT_SEND: 'Enviar Mensagem',
  },
  [availableLanguages.EN]: {
    // Navbar Component
    NAV_HOME: 'Home',
    NAV_ABOUT: 'About',
    NAV_SKILLS: 'Skills',
    NAV_PROJECTS: 'My Projects',
    NAV_CONTACT: 'Contact',
    TITLE_PORTFOLIO: 'Portfolio',
    
    // Componente Novo (Home)
    NAME: 'Patricia Starck Bernardi',
    ROLE: 'Systems Analyst and Full Stack Developer',
    TECH_STACK_TITLE: 'Java | Spring Boot | JavaScript | React | Tailwind',
    
    // Componente About
    ABOUT_TITLE: 'About me',
    ABOUT_TEXT: 'Systems analyst and full stack developer with a focus on innovation. My experience in nutrition taught me the importance of detailed analysis, problem-solving, and creating personalized solutions. Today, I apply these skills to develop efficient systems, ensuring every project is crafted with precision and purpose.',
    ABOUT_DOWNLOAD_CV: 'Download Resume',

    // Componente Skills
    SKILLS_TITLE: 'My Skills',
    
    // Componente Projects
    PROJECTS_TITLE: 'My Projects',
    PROJECT_LIVE_PREVIEW: 'Live Preview',
    PROJECT_DESCRIPTION_REDIRECT: 'Redirects to project Github',
    PROJECT_TITLE_1: 'Secret Number Game - JavaScript',
    PROJECT_TITLE_2: 'Literalura Project',
    PROJECT_TITLE_3: 'Currency Converter - Java',
    PROJECT_TITLE_4: 'Forum Hub - Java Spring Boot',
    
    // Componente Contact
    CONTACT_TITLE: 'Contact',
    CONTACT_NAME: 'Name',
    CONTACT_EMAIL: 'Email',
    CONTACT_MESSAGE: 'Message',
    CONTACT_SEND: 'Send Message',
  },
};

export { translations, availableLanguages };
