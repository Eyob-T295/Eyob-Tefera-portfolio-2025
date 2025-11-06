
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const TelegramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.17.91-.494 1.208-.822 1.23-.696.047-1.225-.46-1.865-.908-.996-.713-1.57-1.148-2.5-1.844-.97-.724-.335-1.132.22-1.817.14-.184 2.41-2.195 2.41-2.195s.233-.21-.05-.333c-.282-.122-1.229.774-1.229.774s-1.127.85-3.014 1.964c-.956.56-1.875.28-2.153-.332-.28-.61-.64-2.227.216-2.92.34-.28 1.483-.697 1.483-.697s6.115-2.32 6.963-2.654c.14-.055.28-.06.32-.061z"/></svg>
);

const WhatsAppIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-8 w-8"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.204-1.634a11.86 11.86 0 005.792 1.496h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);


const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 text-center">
      <h2 className={`section-heading text-3xl font-bold text-slate-100 mb-4 flex items-center justify-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        Get In Touch
      </h2>
      <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
        I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to connect with me through any of the platforms below.
      </p>
      <div className="flex justify-center items-center gap-8 md:gap-12">
        <a href="https://www.linkedin.com/in/eyobtefera1/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#64ffda] transition-all duration-300 transform hover:-translate-y-1">
          <LinkedInIcon />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#64ffda] transition-all duration-300 transform hover:-translate-y-1">
          <TelegramIcon />
        </a>
        <a href="https://wa.me/251911439853" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#64ffda] transition-all duration-300 transform hover:-translate-y-1">
          <WhatsAppIcon />
        </a>
      </div>
    </section>
  );
};

export default Contact;