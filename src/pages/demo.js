import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Users, QrCode, Mic, Mail, Lock, Sparkles, Send,
  LayoutDashboard, Calendar, CreditCard, Settings,
  Database, Palette, Cpu, Github, Linkedin,
  Download, Apple, PlayCircle // Nouveaux imports pour les stores
} from 'lucide-react';

// Imports images
import image1 from '../assets/images/Gemini_Generated_Image_g4de53g4de53g4de.png';
import image2 from '../assets/images/Gemini_Generated_Image_g4de53g4de53g4de(1).png';
import image3 from '../assets/images/Gemini_Generated_Image_g4de53g4de53g4de(2).png';
import imge4 from '../assets/images/WhatsApp Image 2024-09-26 at 14.27.20_669c8b52.jpg';
import files from '../assets/files/application-24ce56ec-60a7-4530-9a59-5f6a6f6d2af8.apk';

const FadeInWhenVisible = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, desc, color }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all group overflow-hidden relative">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg ${color}`}>
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="text-xl font-black mb-3 group-hover:text-blue-400 transition-colors uppercase italic tracking-tighter">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed italic">{desc}</p>
    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={120} />
    </div>
  </div>
);

export default function FullDemoPage() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#02020a] text-white font-sans selection:bg-blue-500 selection:text-white">

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100]" style={{ scaleX }} />

      {/* --- HEADER FIXE --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-black italic">EM</div>
            <span className="font-black italic tracking-tighter text-xl hidden md:block uppercase">Event Master</span>
          </div>

          <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <button onClick={() => scrollTo('features')} className="hover:text-white transition-colors">Utilité</button>
            <button onClick={() => scrollTo('security')} className="hover:text-white transition-colors">Sécurité</button>
            <button onClick={() => scrollTo('download')} className="hover:text-white transition-colors">Télécharger</button>
            <button onClick={() => scrollTo('profile')} className="px-5 py-2 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition-all">Dev</button>
          </div>
        </div>
      </nav>

      {/* --- 1. HERO SECTION --- */}
      <header className="relative pt-48 pb-10 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] -z-10" />

        <FadeInWhenVisible>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase italic">Projet Rétrospective 2026</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic leading-none">
            Event Master<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400">
              Mega Luxury
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16 italic leading-relaxed">
            Innovation condensée dans une interface d'exception.
            Découvrez la puissance de <span className="text-white font-bold">Supabase</span> alliée au design <span className="text-white font-bold">React Native</span>.
          </p>
        </FadeInWhenVisible>
      </header>

      {/* --- 2. DOWNLOAD SECTION (STYLE WOW) --- */}
    <section id="download" className="py-10 px-6">
  <FadeInWhenVisible>
    <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-xl relative overflow-hidden group">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[80px] group-hover:bg-blue-600/40 transition-colors" />

      <div className="relative z-10 text-center space-y-8">
        <h2 className="text-3xl font-black uppercase italic tracking-widest">Vivez l'Expérience</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          
          {/* Play Store */}
          <a href="#playstore" className="flex items-center gap-4 bg-white/10 hover:bg-white text-white hover:text-black px-8 py-4 rounded-2xl transition-all duration-500 border border-white/10 hover:scale-105 group/btn">
            <PlayCircle size={32} className="group-hover/btn:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase opacity-60">Appli Android sur</p>
              <p className="text-lg font-black uppercase italic leading-none">Play Store</p>
            </div>
          </a>

          {/* App Store */}
          <a href="#appstore" className="flex items-center gap-4 bg-white/10 hover:bg-white text-white hover:text-black px-8 py-4 rounded-2xl transition-all duration-500 border border-white/10 hover:scale-105 group/btn">
            <Apple size={32} className="group-hover/btn:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase opacity-60">Disponible sur l'</p>
              <p className="text-lg font-black uppercase italic leading-none">App Store</p>
            </div>
          </a>

          {/* Local Download */}
          <a href="#local" className="flex items-center gap-4 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl transition-all duration-500 hover:scale-105 shadow-xl shadow-blue-500/20 group/btn">
            <Download size={32} className="group-hover/btn:bounce transition-transform" />

            <a
              href={files}
              download="Event Master Mega Luxury.apk"
              className="block hover:opacity-80 transition-opacity cursor-pointer"
            >
              <p className="text-[10px] font-bold uppercase opacity-80">Lien Direct</p>
              <p className="text-lg font-black uppercase italic leading-none">APK Local</p>
            </a>
          </a>
        </div>
      </div>
    </div>
  </FadeInWhenVisible>
</section>

      {/* --- IMAGE PRINCIPALE --- */}
      <section className="px-6 mb-48">
        <FadeInWhenVisible>
          <div className="max-w-3xl mx-auto rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20 bg-slate-900/40 p-2 group">
            <img src={image1} alt="Preview" className="w-full h-auto rounded-[2.5rem] opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </FadeInWhenVisible>
      </section>

      <main className="max-w-7xl mx-auto px-6 space-y-48">
        {/* ... Reste de tes sections (Security, Dashboard, Studio, Features) ... */}
        {/* Note: Garde les ID="security", ID="studio" etc pour que le scroll fonctionne */}

        <section id="security">
          <FadeInWhenVisible>
            <div className="grid lg:grid-cols-2 gap-20 items-center italic">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="bg-blue-600/20 w-fit p-4 rounded-2xl text-blue-400"><Lock size={32} /></div>
                <h2 className="text-4xl font-black italic uppercase tracking-tighter italic">01. Sécurité & Authentification</h2>
                <div className="space-y-4">
                  <div className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 items-start italic">
                    <Mail className="text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg uppercase italic">Validation Email</h4>
                      <p className="text-gray-500 text-sm">Flux de confirmation via Supabase Auth sécurisé.</p>
                    </div>
                  </div>
                </div>
              </div>
              <img src={image2} className="relative rounded-[3rem] border border-white/10 shadow-2xl" alt="Security" />
            </div>
          </FadeInWhenVisible>
        </section>

        <section>
          <FadeInWhenVisible>
            <div className="grid lg:grid-cols-2 gap-20 items-center italic">
              <img src={image3} className="rounded-[2.5rem] border border-white/10 shadow-2xl" alt="Dashboard" />
              <div className="space-y-8 italic">
                <h2 className="text-4xl font-black italic uppercase tracking-tighter">02. Pilotage & Statistiques</h2>
                <p className="text-gray-400 leading-relaxed italic">Vue panoramique sur les événements et monitoring en temps réel.</p>
              </div>
            </div>
          </FadeInWhenVisible>
        </section>

        <section id="features" className="space-y-16 italic">
          <FadeInWhenVisible>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 italic">
              <FeatureCard icon={LayoutDashboard} title="Création d'Évent" desc="Configuration complète et galeries photos." color="bg-blue-600" />
              <FeatureCard icon={QrCode} title="QR Pass VIP" desc="Génération de tickets uniques." color="bg-purple-600" />
              <FeatureCard icon={Users} title="Guest Manager" desc="Gestion de la liste d'invités." color="bg-indigo-600" />
              <FeatureCard icon={Calendar} title="Smart Agenda" desc="Planning dynamique intelligent." color="bg-emerald-600" />
              <FeatureCard icon={CreditCard} title="Paiements" desc="Intégration bancaire haut de gamme." color="bg-pink-600" />
              <FeatureCard icon={Settings} title="Settings" desc="Contrôle total du compte." color="bg-orange-600" />
            </div>
          </FadeInWhenVisible>
        </section>
      </main>

      {/* --- FOOTER IDENTITÉ --- */}
      <footer id="profile" className="mt-60 border-t border-white/10 bg-[#050510] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-30" />

        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img src={imge4} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter">SHERIA GACHABA JASON</h3>
                  <p className="text-blue-500 font-bold text-xs uppercase tracking-widest italic">Ingénieur Logiciel & Design</p>
                </div>
              </div>
              <p className="text-gray-400 italic leading-relaxed">
                Spécialisé dans la conception d'écosystèmes numériques complexes. Architecture Logicielle, Data Analysis et UX Luxury Design.
              </p>
              <div className="flex gap-4">
                <button className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all"><Linkedin size={20} /></button>
                <button className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all"><Github size={20} /></button>
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full font-black italic text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all">
                  Contact Me <Send size={14} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8 italic">
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 italic">Technical Expertise</h4>
                <div className="space-y-4">
                  <div className="flex gap-4 italic"><Cpu className="text-blue-500" size={20} /> <div><p className="font-bold text-sm italic">Software Engineering</p><p className="text-xs text-gray-500 italic">React, Native, Node.js, Cloud</p></div></div>
                  <div className="flex gap-4 italic"><Database className="text-purple-500" size={20} /> <div><p className="font-bold text-sm italic">Data Analysis</p><p className="text-xs text-gray-500 italic">SQL, Supabase, BI</p></div></div>
                  <div className="flex gap-4 italic"><Palette className="text-emerald-500" size={20} /> <div><p className="font-bold text-sm italic">Product Design</p><p className="text-xs text-gray-500 italic">UI/UX, Motion</p></div></div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl italic">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-4">Quick Stats</h4>
                <ul className="space-y-4 text-sm font-bold italic">
                  <li className="flex justify-between uppercase"><span>Code Accuracy</span> <span className="text-blue-500">99.9%</span></li>
                  <li className="flex justify-between uppercase"><span>Experience</span> <span className="text-blue-500">5+ Years</span></li>
                  <li className="flex justify-between uppercase"><span>Projects Built</span> <span className="text-blue-500">40+</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 italic">
            <p className="text-[10px] font-black tracking-[0.8em] uppercase text-gray-600">Event Master Mega Luxury • 2026</p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">
              Built with Passion <Sparkles size={12} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}