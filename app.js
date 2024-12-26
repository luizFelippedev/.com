import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <div
      id="root"
      className={`min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white relative`}
    >
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

const Header = ({ isDark, toggleTheme }) => (
  <header className="select-none fixed top-0 w-full z-50 backdrop-blur-lg bg-white/50 dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-800">
    <div className="container mx-auto px-6 py-4">
      <nav className="flex items-center justify-between">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Luizfelippe.dev
        </a>
        <div className="flex items-center gap-4">
          <button
            id="theme-toggle"
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            onClick={toggleTheme}
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:text-purple-600 transition-colors">
              Sobre
            </a>
            <a href="#projects" className="hover:text-purple-600 transition-colors">
              Projetos
            </a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">
              Contato
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

const AboutSection = () => (
  <section id="about" className="py-16">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4 animated-text">Luiz</h2>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 animated-text">Desenvolvedor Backend</p>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="projects" className="py-16 bg-gray-100 dark:bg-zinc-900">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-8 animated-text">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {['Projeto 1', 'Projeto 2', 'Projeto 3'].map((project, index) => (
          <div key={index} className="bg-white dark:bg-zinc-950 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2 animated-text">{project}</h3>
            <p className="text-zinc-700 dark:text-zinc-300">Descrição do {project}</p>
            <a href="#" className="inline-block mt-4 text-purple-600 hover:underline">
              Ver mais
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-16">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4 animated-text">Contato</h2>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">Entre em contato comigo!</p>
      <div className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
        <p>
          <strong>E-mail:</strong>{' '}
          <a href="mailto:luizfelippeandrade@outlook.com" className="text-purple-600 hover:underline">
            luizfelippeandrade@outlook.com
          </a>
        </p>
        <p>
          <strong>WhatsApp:</strong>{' '}
          <a href="https://wa.me/5511952323645" target="_blank" className="text-purple-600 hover:underline">
            +55 (11) 952323645
          </a>
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <a href="https://www.linkedin.com/in/seulinkedin" target="_blank" className="text-purple-600 hover:underline">
          LinkedIn
        </a>
        <a href="https://github.com/luizFelippedev" target="_blank" className="text-purple-600 hover:underline">
          GitHub
        </a>
      </div>
    </div>
  </section>
);

ReactDOM.render(<App />, document.getElementById('root'));
