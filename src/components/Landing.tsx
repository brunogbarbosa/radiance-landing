import { useEffect, useState } from "react";
import { Reveal } from "./RevealOnScroll";
import portrait from "@/assets/dra-portrait.jpg";
import portrait2 from "@/assets/dra-portrait-2.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import case4 from "@/assets/case-4.jpg";
import caseGengivoAntes from "@/assets/case-gengivo-antes.jpg";
import caseGengivoDepois from "@/assets/case-gengivo-depois.jpg";

const WHATSAPP = "https://wa.me/5534998105169";
const INSTAGRAM = "https://instagram.com/dra.raianearaujo";

const services = [
  { name: "Implantes Dentários", desc: "Reabilitação completa com tecnologia de ponta e acabamento natural." },
  { name: "Lentes em Resina", desc: "Sorrisos desenhados sob medida, sem desgaste invasivo." },
  { name: "Próteses Fixas & Removíveis", desc: "Função e estética em harmonia perfeita." },
  { name: "Laminados Cerâmicos", desc: "Translucidez e brilho que imitam o esmalte natural." },
  { name: "Gengivoplastia & Extração", desc: "Contorno gengival refinado para um sorriso equilibrado." },
  { name: "Restauração & Limpeza", desc: "Saúde bucal preservada com precisão e delicadeza." },
];

const stats = [
  { num: "50+", label: "Publicações" },
  { num: "3.993", label: "Seguidores" },
  { num: "Implantes", label: "Especialista" },
  { num: "2", label: "Cidades Atendidas" },
];

const locations = [
  {
    city: "Patos de Minas",
    address: "Centro · Minas Gerais",
    maps: "https://maps.google.com/?q=Patos+de+Minas+MG",
  },
  {
    city: "Vazante",
    address: "Centro · Minas Gerais",
    maps: "https://maps.google.com/?q=Vazante+MG",
  },
];

const feed = [case1, case2, case3, case4, caseGengivoAntes, caseGengivoDepois];

export default function Landing() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md bg-ivory/75 border-b border-border/60" : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <a href="#top" className="font-display text-xl md:text-2xl tracking-tight">
            Dra. Raiane <span className="text-gold">Araújo</span>
          </a>
          <ul className="hidden md:flex items-center gap-10 text-sm text-foreground/70">
            <li><a href="#tratamentos" className="hover:text-gold transition">Tratamentos</a></li>
            <li><a href="#sobre" className="hover:text-gold transition">Sobre</a></li>
            <li><a href="#unidades" className="hover:text-gold transition">Unidades</a></li>
            <li><a href="#contato" className="hover:text-gold transition">Contato</a></li>
          </ul>
          <a
            href={WHATSAPP}
            target="_blank" rel="noreferrer"
            className="hidden md:inline-flex shimmer-btn items-center gap-2 bg-gold text-primary-foreground px-5 py-2.5 rounded-full text-sm tracking-wide hover:bg-gold/90 transition"
          >
            Agendar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-hero animate-shimmer-bg grain pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <span className="smallcaps text-gold text-xs md:text-sm">CROMG 56055 · Dentista & Implantodontista</span>
            </Reveal>
            <Reveal delay={150}>
              <h1 className="font-display text-5xl md:text-7xl leading-[1.02] mt-6 text-ink">
                Confie o seu sorriso<br />
                <span className="italic text-gold">a quem entende</span> de beleza.
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-7 text-base md:text-lg text-foreground/70 max-w-xl leading-relaxed">
                Implantes · Lentes · Próteses · Laminados<br />
                <span className="text-foreground/55">Patos de Minas &amp; Vazante — MG</span>
              </p>
            </Reveal>
            <Reveal delay={450}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP} target="_blank" rel="noreferrer"
                  className="shimmer-btn bg-gold text-primary-foreground px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-gold/90 transition shadow-elegant"
                >
                  Agendar Avaliação
                </a>
                <a
                  href="#tratamentos"
                  className="shimmer-btn border border-gold/60 text-foreground px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-gold/5 transition"
                >
                  Conheça os Tratamentos
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5 relative">
            <Reveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-blush to-transparent rounded-[2rem] blur-2xl opacity-60" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-elegant bg-card aspect-[4/5]">
                  <img src={portrait} alt="Dra. Raiane Araújo" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-card border border-border/60 px-5 py-3 rounded-full shadow-card">
                  <span className="smallcaps text-xs text-gold">cromg 56055</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 border-y border-border/50 bg-card/50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className={`text-center px-4 ${i > 0 ? "md:border-l md:border-gold/30" : ""}`}>
                <div className="font-display text-3xl md:text-4xl text-ink">{s.num}</div>
                <div className="smallcaps text-xs text-foreground/55 mt-2">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="tratamentos" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="smallcaps text-gold text-xs">Tratamentos</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4">Cuidado clínico com olhar de artista</h2>
              <div className="gold-divider mt-8 w-32 mx-auto" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <div className="group relative bg-card border border-border/60 rounded-2xl p-8 transition-all duration-500 hover:bg-blush-soft hover:-translate-y-1 hover:shadow-card">
                  <div className="absolute top-0 left-8 right-8 h-px bg-gold/0 group-hover:bg-gold transition-colors duration-500" />
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
                    <path d="M12 3c-2 0-3.5 1-4.5 2.5C6.5 4 5 3 3 3v6c0 5 4 12 9 12s9-7 9-12V3c-2 0-3.5 1-4.5 2.5C15.5 4 14 3 12 3z" />
                  </svg>
                  <h3 className="font-display text-2xl mt-6">{s.name}</h3>
                  <p className="text-sm text-foreground/65 mt-3 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 md:py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-elegant aspect-[4/5] bg-card">
                <img src={portrait2} alt="Dra. Raiane Araújo retrato" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-gold/40 rounded-full" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <span className="smallcaps text-gold text-xs">Sobre</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
                Sorrisos que <span className="italic text-gold">transformam vidas</span>.
              </h2>
              <div className="gold-divider mt-8 w-24" />
              <p className="mt-8 text-foreground/70 leading-relaxed">
                Atendimento humanizado, técnica refinada e um olhar atento à beleza de cada detalhe.
                Cada plano de tratamento é desenhado para respeitar a sua individualidade — porque
                um sorriso bem cuidado conta a sua história com elegância.
              </p>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                Especialista em Implantodontia, com formação contínua e mais de 50 publicações sobre
                estética e reabilitação oral.
              </p>
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-foreground/60">
                <div>
                  <div className="font-display text-2xl text-ink">CROMG</div>
                  <div className="smallcaps text-xs mt-1">registro 56055</div>
                </div>
                <div className="border-l border-gold/30 pl-6">
                  <div className="font-display text-2xl text-ink">Implantodontia</div>
                  <div className="smallcaps text-xs mt-1">especialização</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="unidades" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="text-center">
              <span className="smallcaps text-gold text-xs">Unidades</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4">Onde encontrá-la</h2>
              <div className="gold-divider mt-8 w-32 mx-auto" />
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {locations.map((l, i) => (
              <Reveal key={l.city} delay={i * 120}>
                <div className="bg-card border border-border/60 rounded-2xl p-10 shadow-card hover:shadow-elegant transition-all duration-500 group">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-gold">
                    <path d="M12 22s-7-7.5-7-13a7 7 0 0114 0c0 5.5-7 13-7 13z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <h3 className="font-display text-3xl mt-5">{l.city}</h3>
                  <p className="text-foreground/65 mt-2">{l.address}</p>
                  <div className="gold-divider mt-6 w-16" />
                  <a
                    href={l.maps} target="_blank" rel="noreferrer"
                    className="smallcaps text-xs text-gold mt-6 inline-block group-hover:tracking-[0.24em] transition-all"
                  >
                    ver no maps →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-24 md:py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="text-center">
              <span className="smallcaps text-gold text-xs">Resultados</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4">Acompanhe no Instagram</h2>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="smallcaps text-sm text-foreground/60 mt-3 inline-block hover:text-gold transition">
                @dra.raianearaujo
              </a>
              <div className="gold-divider mt-8 w-32 mx-auto" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-16">
            {feed.map((src, i) => (
              <Reveal key={i} delay={i * 60}>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="group block relative overflow-hidden rounded-xl bg-card aspect-square shadow-card">
                  <img
                    src={src} alt={`Caso clínico ${i + 1}`}
                    className="w-full h-full object-contain bg-cream transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                    <span className="smallcaps text-xs text-ivory">ver no instagram</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="relative py-28 md:py-36 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute top-10 left-10 font-display text-[12rem] leading-none text-gold/15 select-none pointer-events-none">"</div>
        <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <span className="smallcaps text-gold text-xs">Agendamento</span>
            <h2 className="font-display text-4xl md:text-6xl mt-5 leading-tight">
              Pronta para transformar<br /><span className="italic text-gold">o seu sorriso?</span>
            </h2>
            <p className="mt-6 text-foreground/70 max-w-xl mx-auto leading-relaxed">
              Agende sua avaliação pelo WhatsApp — rápido, fácil e sem compromisso.
            </p>
            <a
              href={WHATSAPP} target="_blank" rel="noreferrer"
              className="shimmer-btn inline-flex items-center gap-3 mt-10 bg-whatsapp text-white px-10 py-5 rounded-full text-sm tracking-widest uppercase hover:opacity-95 transition shadow-elegant"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              </svg>
              Agendar pelo WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/30 bg-card py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="font-display text-2xl">Dra. Raiane <span className="text-gold">Araújo</span></div>
            <p className="text-sm text-foreground/60 mt-2 italic">Sorrisos que transformam vidas</p>
          </div>
          <ul className="flex flex-wrap gap-6 text-sm text-foreground/70 md:justify-center">
            <li><a href="#top" className="hover:text-gold transition">Início</a></li>
            <li><a href="#tratamentos" className="hover:text-gold transition">Tratamentos</a></li>
            <li><a href="#sobre" className="hover:text-gold transition">Sobre</a></li>
            <li><a href="#contato" className="hover:text-gold transition">Contato</a></li>
          </ul>
          <div className="md:text-right">
            <div className="flex gap-4 md:justify-end">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24z"/></svg>
              </a>
            </div>
            <p className="smallcaps text-xs text-foreground/55 mt-4">cromg 56055 · dentista &amp; implantodontista</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 mt-10 pt-6 border-t border-border/50 text-center text-xs text-foreground/45">
          © {new Date().getFullYear()} Dra. Raiane Araújo. Todos os direitos reservados.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP} target="_blank" rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-elegant hover:scale-110 transition-transform"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      </a>
    </div>
  );
}
