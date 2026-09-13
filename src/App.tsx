import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Accessibility,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BellRing,
  Check,
  ChevronDown,
  CircleCheck,
  Eye,
  FileCheck2,
  HandHeart,
  HeartHandshake,
  Landmark,
  Leaf,
  MapPin,
  Megaphone,
  Menu,
  PawPrint,
  Plus,
  Search,
  ShieldCheck,
  Stethoscope,
  UsersRound,
  X,
} from 'lucide-react';

const queryClient = new QueryClient();

const SCREEN_MAIN = 'https://res.cloudinary.com/limpeja/image/upload/v1789285201/WhatsApp_Image_2026-09-13_at_04.34.25_cr6kek.jpg';
const SCREEN_ALT_1 = 'https://res.cloudinary.com/limpeja/image/upload/v1789283715/WhatsApp_Image_2026-09-13_at_04.00.59_1_vgcfxm.jpg';
const SCREEN_ALT_2 = 'https://res.cloudinary.com/limpeja/image/upload/v1789283093/WhatsApp_Image_2026-09-13_at_04.00.59_wjmthu.jpg';
const SCREEN_ALT_3 = 'https://res.cloudinary.com/limpeja/image/upload/v1789283717/WhatsApp_Image_2026-09-13_at_04.00.58_f8akfz.jpg';

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-2.5" data-testid="link-logo">
      <span className={`grid size-9 place-items-center rounded-xl ${light ? 'bg-white/15' : 'bg-[#dfe9e2]'}`}>
        <img
          src="https://res.cloudinary.com/limpeja/image/upload/v1779564981/Gemini_Generated_Image_isin7wisin7wisin-removebg-preview_yx0k5g.png"
          alt="Helpers"
          className="h-7 w-7 object-contain"
        />
      </span>

      <span 
        translate="no" 
        className={`notranslate font-display text-[1.24rem] font-extrabold tracking-[-.04em] ${light ? 'text-white' : 'text-[#27302b]'}`}
      >
        Helpers
      </span>
    </a>
  );
}

function PrimaryButton({ children, onClick, href, light = false, testId }: { children: React.ReactNode; onClick?: () => void; href?: string; light?: boolean; testId: string }) {
  const className = `group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${light ? 'bg-white text-[#3c6950] hover:bg-[#edf2ee]' : 'bg-[#466f56] text-white hover:bg-[#385d47]'} `;
  if (href) return <a href={href} className={className} data-testid={testId}>{children}<ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>;
  return <button onClick={onClick} className={className} data-testid={testId}>{children}<ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>;
}

function SectionLabel({ children, coral = false }: { children: React.ReactNode; coral?: boolean }) {
  return <div className={`eyebrow flex items-center gap-2 ${coral ? 'text-[#c96868]' : ''}`}><span className={`size-1.5 rounded-full ${coral ? 'bg-[#c96868]' : 'bg-[#466f56]'}`} />{children}</div>;
}

function PhoneMockup({
  compact = false,
  imageUrl,
  imageUrls,
  interval = 3500,
}: {
  compact?: boolean;
  imageUrl?: string;
  imageUrls?: string[];
  interval?: number;
}) {
  const list = imageUrls && imageUrls.length > 0 ? imageUrls : (imageUrl ? [imageUrl] : [SCREEN_MAIN]);
  const hasSlider = list.length > 1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!hasSlider) return;
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setCurrentIndex((prev) => (prev + 1) % list.length), 350);
      setTimeout(() => setIsAnimating(false), 700);
    }, interval);
    return () => clearInterval(timer);
  }, [hasSlider, list.length, interval]);

  const baseScale = compact ? 0.86 : 1;
  const animScale = compact ? 0.89 : 1.03;
  const currentScale = isAnimating ? animScale : baseScale;

  return (
    <div 
      className="transition-transform duration-700 ease-in-out"
      style={{ transform: `scale(${currentScale})` }}
    >
      <div className="phone-shadow relative mx-auto w-[240px] overflow-hidden rounded-[2.25rem] border-[7px] border-[#29322d] bg-[#f8faf7]">
        <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#29322d]" />
        <div className="flex h-8 items-center justify-between bg-[#f8faf7] px-5 pt-2 text-[8px] font-bold text-[#27302b]">
          <span>9:41</span>
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#466f56]" />
            <span className="h-1.5 w-3 rounded-full bg-[#466f56]" />
          </span>
        </div>
        <div className="relative h-[432px] overflow-hidden bg-[#f8faf7]">
          {list.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`Tela ${i + 1} do aplicativo Helpers`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
          {hasSlider && (
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
              {list.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-4 bg-white shadow-sm' : 'w-1.5 bg-white/50'}`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="h-5 bg-[#f8faf7]" />
      </div>
    </div>
  );
}

function JoinModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  if (!open) return null;
  return <div className="fixed inset-0 z-50 grid place-items-center bg-[#27302b]/35 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" data-testid="modal-join">
    <div className="relative w-full max-w-md rounded-[2rem] bg-[#f8faf7] p-7 shadow-2xl sm:p-9">
      <button onClick={onClose} className="absolute right-5 top-5 grid size-9 place-items-center rounded-full bg-[#eaf0ec] text-[#466f56] transition hover:bg-[#dce8df]" data-testid="button-close-join"><X size={18} /></button>
      {!sent ? <><SectionLabel>Faça parte</SectionLabel><h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#27302b]">A comunidade começa com você.</h2><p className="mt-3 text-sm leading-relaxed text-[#66716a]">Conte como você quer ajudar. A gente avisa quando o Helpers estiver disponível na sua região.</p><form className="mt-6 space-y-3" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><input required type="text" placeholder="Seu nome" className="w-full rounded-xl border border-[#e1e8e3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#466f56]" data-testid="input-join-name" /><input required type="email" placeholder="Seu melhor e-mail" className="w-full rounded-xl border border-[#e1e8e3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#466f56]" data-testid="input-join-email" /><select className="w-full appearance-none rounded-xl border border-[#e1e8e3] bg-white px-4 py-3 text-sm text-[#66716a] outline-none focus:border-[#466f56]" data-testid="select-join-role" defaultValue=""><option value="" disabled>Como você quer participar?</option><option>Quero ser voluntário</option><option>Tenho uma ONG ou projeto</option><option>Sou criador de conteúdo</option><option>Quero apoiar uma causa</option></select><button type="submit" className="mt-3 w-full rounded-full bg-[#466f56] py-3.5 text-sm font-bold text-white transition hover:bg-[#385d47]" data-testid="button-submit-join">Quero entrar na comunidade <ArrowRight className="ml-1 inline" size={16} /></button></form></> : <div className="py-8 text-center"><div className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#dfe9e2] text-[#466f56]"><CircleCheck size={28} /></div><h2 className="mt-5 font-display text-3xl font-extrabold text-[#27302b]">Até breve.</h2><p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[#66716a]">Seu interesse foi registrado. Vamos construir essa rede juntos.</p><button onClick={onClose} className="mt-6 rounded-full bg-[#466f56] px-6 py-3 text-sm font-bold text-white" data-testid="button-finish-join">Fechar</button></div>}
    </div>
  </div>;
}

function Nav({ onJoin }: { onJoin: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const go = (id: string) => { setMobileOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  return <header className="fixed inset-x-0 top-0 z-30 border-b border-[#e1e8e3]/80 bg-[#f8faf7]/90 backdrop-blur-xl">
    <div className="site-shell flex h-[76px] items-center justify-between"><Logo /><nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">{[['Como funciona', 'como-funciona'], ['Impacto', 'impacto'], ['Comunidade', 'comunidade'], ['Transparência', 'transparencia']].map(([label, id]) => <button key={id} onClick={() => go(id)} className="text-[13px] font-semibold text-[#66716a] transition hover:text-[#466f56]" data-testid={`button-nav-${id}`}>{label}</button>)}</nav><div className="hidden items-center gap-4 md:flex"><PrimaryButton onClick={onJoin} testId="button-nav-join">Baixar o Aplicativo</PrimaryButton></div><button onClick={() => setMobileOpen(!mobileOpen)} className="grid size-10 place-items-center rounded-full bg-[#eaf0ec] text-[#466f56] md:hidden" data-testid="button-mobile-menu">{mobileOpen ? <X size={19} /> : <Menu size={19} />}</button></div>
    {mobileOpen && <div className="border-t border-[#e1e8e3] bg-[#f8faf7] px-5 pb-5 pt-3 md:hidden"><nav className="flex flex-col gap-1">{[['Como funciona', 'como-funciona'], ['Impacto', 'impacto'], ['Comunidade', 'comunidade'], ['Transparência', 'transparencia']].map(([label, id]) => <button key={id} onClick={() => go(id)} className="rounded-xl px-3 py-3 text-left text-sm font-semibold text-[#66716a] hover:bg-[#eaf0ec]" data-testid={`button-mobile-nav-${id}`}>{label}</button>)}<button onClick={() => { setMobileOpen(false); onJoin(); }} className="mt-2 rounded-full bg-[#466f56] py-3 text-sm font-bold text-white" data-testid="button-mobile-join">Entrar na comunidade <ArrowUpRight className="ml-1 inline" size={15} /></button></nav></div>}
  </header>;
}

function Home() {
  const [joinOpen, setJoinOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  
  const heroLeft = useScrollReveal();
  const heroRight = useScrollReveal();
  const conceptLeft = useScrollReveal();
  const impactLeft = useScrollReveal();
  const impactRight = useScrollReveal();
  const communityLeft = useScrollReveal();
  const communityRight = useScrollReveal();
  const productLeft = useScrollReveal();
  const productRight = useScrollReveal();
  const transparencyLeft = useScrollReveal();
  const transparencyRight = useScrollReveal();
  const ctaLeft = useScrollReveal();
  const ctaRight = useScrollReveal();

  useEffect(() => { document.title = 'Helpers — quando alguém precisa de ajuda, a comunidade responde'; }, []);
  const roles = [
    { icon: PawPrint, title: 'Protetores', text: 'Encontre ajuda próxima e organize resgates com mais gente.', color: 'bg-[#edf2ee] text-[#466f56]' },
    { icon: Landmark, title: 'ONGs e projetos', text: 'Receba apoio e mantenha cada resultado visível para todos.', color: 'bg-[#fff1f0] text-[#c96868]' },
    { icon: Megaphone, title: 'Criadores', text: 'Mobilize sua audiência para ações que acontecem de verdade.', color: 'bg-[#f8efe7] text-[#a86d46]' },
    { icon: UsersRound, title: 'Voluntários', text: 'Descubra onde sua ajuda faz mais diferença hoje.', color: 'bg-[#e9f1f2] text-[#4b7478]' },
  ];
  const faqs = [
    ['O Helpers é uma plataforma de doação?', 'O Helpers é uma rede de ação. A comunidade encontra casos, oferece tempo, recursos ou conhecimento e acompanha o resultado. Quando há uma contribuição financeira, sua destinação também fica pública.'],
    ['Como uma ONG entra para a rede?', 'Estamos abrindo a plataforma por regiões. Cadastre seu projeto na comunidade e nossa equipe entra em contato para fazer a verificação.'],
    ['Onde o Helpers está disponível?', 'Começamos por São Paulo e estamos crescendo junto com os primeiros grupos locais. A ideia é que a ajuda aconteça perto de quem precisa dela.'],
    ['Como vocês garantem transparência?', 'Cada destinação tem instituição, valor, data, finalidade, comprovante e histórico. A confiança não é uma promessa: é uma tela que qualquer pessoa pode consultar.'],
  ];
  return <div className="grain min-h-[100dvh] bg-[#f8faf7]">
    <Nav onJoin={() => setJoinOpen(true)} />
    <main>
      <section id="inicio" className="relative overflow-hidden pt-[76px]">
        <div className="absolute -right-32 top-12 -z-0 size-[420px] rounded-full bg-[#eaf0ec] blur-3xl" /><div className="absolute -left-48 top-72 -z-0 size-[400px] rounded-full bg-[#fff1f0] opacity-60 blur-3xl" />
        <div className="site-shell grid min-h-[680px] items-center gap-16 py-20 lg:grid-cols-[1fr_470px] lg:gap-10 lg:py-24">
          <div ref={heroLeft} className="reveal-left relative z-10 max-w-[620px]"><SectionLabel>Salvando vidas todos os dias</SectionLabel><h1 className="mt-6 font-display text-[clamp(3.3rem,7vw,5rem)] font-extrabold leading-[.93] tracking-[-.075em] text-[#27302b]">Quando alguém precisa de ajuda, <span className="text-[#466f56]">a comunidade responde.</span></h1><p className="mt-7 max-w-[500px] text-[17px] leading-[1.6] text-[#66716a]">O Helpers conecta pessoas, protetores, ONGs e projetos sociais para transformar pequenos gestos em impacto real.</p><div className="mt-9 flex flex-wrap items-center gap-4"><PrimaryButton onClick={() => setJoinOpen(true)} testId="button-hero-join">Baixar o Aplicativo</PrimaryButton><a href="#impacto" className="group inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-bold text-[#466f56]" data-testid="link-hero-impact">Conheça a proposta <ArrowDownRight size={17} className="transition-transform group-hover:translate-y-1" /></a></div><div className="mt-14 flex items-center gap-3"><div className="flex -space-x-2"><span className="grid size-8 place-items-center rounded-full border-2 border-[#f8faf7] bg-[#d4e2d8] text-[10px] font-bold text-[#466f56]">AM</span><span className="grid size-8 place-items-center rounded-full border-2 border-[#f8faf7] bg-[#f2d0cb] text-[10px] font-bold text-[#a65e5e]">JV</span><span className="grid size-8 place-items-center rounded-full border-2 border-[#f8faf7] bg-[#e9d9c7] text-[10px] font-bold text-[#9b6f45]">LS</span></div><p className="text-xs text-[#66716a]"><strong className="text-[#27302b]">1.842 pessoas</strong> já fazem parte<br />dessa conversa.</p></div></div>
          <div ref={heroRight} className="reveal-right relative z-10 flex justify-center lg:justify-end"><div className="absolute left-2 top-14 hidden rounded-2xl border border-[#e1e8e3] bg-white p-3 shadow-sm sm:block lg:-left-12"><div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-lg bg-[#edf2ee] text-[#466f56]"><CircleCheck size={15} /></span></div></div><div className="absolute bottom-12 right-0 z-10 hidden rounded-2xl border border-[#e1e8e3] bg-white p-3 shadow-sm sm:block lg:-right-8"><div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-lg bg-[#fff1f0] text-[#c96868]"><UsersRound size={15} /></span><div><p className="font-mono-custom text-[8px] font-bold text-[#c96868]">4 PESSOAS JÁ AJUDARAM</p><p className="mt-0.5 text-[10px] font-semibold text-[#27302b]">Uma rede em movimento</p></div></div></div><div className="float-device rounded-[2.7rem] bg-[#dce8df] p-4"><PhoneMockup imageUrls={[SCREEN_MAIN, SCREEN_ALT_1, SCREEN_ALT_2, SCREEN_ALT_3]} interval={3500} /></div></div>
        </div>
      </section>

      <section id="como-funciona" className="border-y border-[#e1e8e3] bg-white py-24 lg:py-32">
        <div className="site-shell"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div ref={conceptLeft} className="reveal-left"><SectionLabel>O conceito</SectionLabel><h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.02] tracking-[-.06em] text-[#27302b] sm:text-5xl">Uma comunidade que ajuda de verdade.</h2></div><p className="reveal-right max-w-md text-base leading-relaxed text-[#66716a]">Não é sobre ver mais conteúdo. É sobre encontrar uma situação real, decidir como participar e ver o que mudou depois.</p></div><div className="relative mt-16 grid gap-3 md:grid-cols-4">{[['01', 'Encontram', 'Casos reais perto de você.', Search], ['02', 'Ajudam', 'Cada pessoa oferece o que pode.', HandHeart], ['03', 'Conectam', 'A força de um vira rede.', UsersRound], ['04', 'Resolvem', 'O resultado fica visível.', CircleCheck]].map(([number, title, text, Icon], i) => <div key={title as string} className="group relative rounded-3xl bg-[#f8faf7] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#eaf0ec]"><div className="flex items-center justify-between"><span className="font-mono-custom text-xs text-[#a5b2a8]">{number as string}</span><span className="grid size-10 place-items-center rounded-xl bg-white text-[#466f56] shadow-sm transition group-hover:bg-[#466f56] group-hover:text-white"><Icon size={18} /></span></div><h3 className="mt-12 font-display text-2xl font-extrabold tracking-tight text-[#27302b]">{title as string}</h3><p className="mt-2 text-sm leading-relaxed text-[#66716a]">{text as string}</p>{i < 3 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden text-[#b6c8bb] md:block" size={18} />}</div>)}</div></div>
      </section>

      <section id="impacto" className="overflow-hidden bg-[#edf2ee] py-24 lg:py-32">
        <div className="site-shell"><div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center"><div ref={impactLeft} className="reveal-left"><SectionLabel>Impacto Helpers</SectionLabel><h2 className="mt-5 max-w-lg font-display text-4xl font-extrabold leading-[1.02] tracking-[-.06em] text-[#27302b] sm:text-5xl">A comunidade gera.<br /><span className="text-[#466f56]">A comunidade acompanha.</span><br />A comunidade transforma.</h2><p className="mt-6 max-w-md text-base leading-relaxed text-[#66716a]">Todo gesto deixa um rastro. Por isso, tornamos público o caminho entre uma intenção e uma mudança concreta.</p><button onClick={() => setReportOpen(!reportOpen)} className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#466f56]" data-testid="button-impact-report">{reportOpen ? 'Fechar relatório' : 'Ver relatório completo'} <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button></div><div ref={impactRight} className="reveal-right relative"><div className="absolute -inset-10 rounded-full bg-[#dce8df] blur-3xl" /><div className="relative overflow-hidden rounded-[2rem] border border-[#d6e2d9] bg-white p-6 shadow-[0_20px_50px_rgba(63,100,76,.08)] sm:p-9"><div className="flex items-start justify-between"><div><p className="eyebrow">Impacto da comunidade</p><p className="mt-3 font-display text-4xl font-extrabold tracking-[-.06em] text-[#27302b] sm:text-5xl">R$ 12.450</p><p className="mt-1 text-sm text-[#66716a]">gerados em setembro de 2026</p></div><span className="grid size-11 place-items-center rounded-2xl bg-[#eaf0ec] text-[#466f56]"><BarChart3 size={21} /></span></div><div className="mt-9 grid gap-5 sm:grid-cols-[1.15fr_.85fr]"><div className="flex h-32 items-end gap-2 rounded-2xl bg-[#f8faf7] p-4">{[42, 68, 52, 78, 61, 93, 76, 100, 81, 110, 92, 124].map((h, i) => <span key={i} className={`flex-1 rounded-t-md transition-all duration-500 ${i === 11 ? 'bg-[#c96868]' : i > 8 ? 'bg-[#98b6a0]' : 'bg-[#d2e0d5]'}`} style={{ height: h }} />)}</div><div className="space-y-3">{[['Infraestrutura', 'R$ 8.200', 'w-[88%]'], ['ONGs verificadas', 'R$ 2.750', 'w-[46%]'], ['Projetos sociais', 'R$ 1.500', 'w-[30%]']].map(([label, value, width], i) => <div key={label}><div className="flex justify-between text-xs"><span className="text-[#66716a]">{label}</span><strong className="font-mono-custom text-[10px] text-[#27302b]">{value}</strong></div><div className="mt-2 h-1.5 rounded-full bg-[#edf2ee]"><div className={`h-full rounded-full ${i === 0 ? 'bg-[#466f56]' : i === 1 ? 'bg-[#98b6a0]' : 'bg-[#c96868]'} ${width}`} /></div></div>)}</div></div>{reportOpen && <div className="mt-7 border-t border-[#e1e8e3] pt-5"><p className="eyebrow">O que você encontra no relatório</p><div className="mt-4 grid gap-2 sm:grid-cols-2">{['Instituição beneficiada', 'Valor e data', 'Finalidade da ação', 'Comprovante público', 'Histórico de atualizações', 'Pessoas envolvidas'].map(item => <span key={item} className="flex items-center gap-2 text-xs font-semibold text-[#66716a]"><Check size={14} className="text-[#466f56]" />{item}</span>)}</div></div>}</div></div></div></div>
        <div className="site-shell mt-16 grid gap-3 border-t border-[#d5e2d8] pt-8 sm:grid-cols-3"><div><p className="font-display text-3xl font-extrabold tracking-tight text-[#27302b]">R$ 1.284.392</p><p className="mt-1 text-sm text-[#66716a]">destinados pela comunidade</p></div><div><p className="font-display text-3xl font-extrabold tracking-tight text-[#27302b]">427</p><p className="mt-1 text-sm text-[#66716a]">instituições apoiadas</p></div><div><p className="font-display text-3xl font-extrabold tracking-tight text-[#27302b]">1.842</p><p className="mt-1 text-sm text-[#66716a]">projetos em movimento</p></div></div>
      </section>

      <section id="comunidade" className="bg-[#f8faf7] py-24 lg:py-32"><div className="site-shell"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div ref={communityLeft} className="reveal-left"><SectionLabel>Para quem faz a diferença</SectionLabel><h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.02] tracking-[-.06em] text-[#27302b] sm:text-5xl">Você já tem uma comunidade.<br /><span className="text-[#c96868]">Dê um caminho para ela agir.</span></h2></div><p ref={communityRight} className="reveal-right max-w-sm text-base leading-relaxed text-[#66716a]">O Helpers oferece a infraestrutura para transformar atenção em presença, intenção em ação e confiança em resultado.</p></div><div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{roles.map(({ icon: Icon, title, text, color }) => <article key={title} className="rounded-3xl border border-[#e1e8e3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(63,100,76,.08)]"><span className={`grid size-11 place-items-center rounded-2xl ${color}`}><Icon size={21} /></span><h3 className="mt-12 font-display text-xl font-extrabold tracking-tight text-[#27302b]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#66716a]">{text}</p><a href="#inicio" className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-[#466f56]" data-testid={`link-role-${title.toLowerCase().replaceAll(' ', '-')}`}>Saiba mais <ArrowRight size={14} /></a></article>)}</div><div className="mt-16 grid items-center gap-8 rounded-[2rem] bg-[#466f56] p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto]"><div><p className="eyebrow text-white/60">Para criadores e marcas</p><h3 className="mt-4 max-w-xl font-display text-3xl font-extrabold leading-tight tracking-[-.04em] sm:text-4xl">Não peça para sua comunidade confiar. Mostre.</h3><p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">Cada resultado pode ser acompanhado publicamente — da primeira chamada ao último comprovante.</p></div><PrimaryButton onClick={() => setJoinOpen(true)} light testId="button-community-join">Quero conversar</PrimaryButton></div></div></section>

      <section id="produto" className="overflow-hidden border-y border-[#e1e8e3] bg-white py-24 lg:py-32"><div className="site-shell"><div className="grid items-center gap-14 lg:grid-cols-[1fr_.9fr]"><div ref={productLeft} className="reveal-left"><SectionLabel>O aplicativo</SectionLabel><h2 className="mt-5 max-w-lg font-display text-4xl font-extrabold leading-[1.02] tracking-[-.06em] text-[#27302b] sm:text-5xl">A ajuda começa onde você está.</h2><p className="mt-6 max-w-md text-base leading-relaxed text-[#66716a]">Uma experiência simples para momentos que importam. Feita para você encontrar, agir e acompanhar — sem perder o fio da história.</p><div className="mt-10 space-y-5">{[['Encontrar um caso', 'Veja o que está acontecendo perto de você.', Search], ['Acionar pessoas próximas', 'Convide quem pode fazer parte da solução.', BellRing], ['Acompanhar a resposta', 'Receba atualizações até tudo se resolver.', Eye], ['Resolver', 'Registre o resultado. Inspire o próximo gesto.', CircleCheck]].map(([title, text, Icon], i) => <div key={title as string} className="flex items-center gap-4"><span className={`grid size-10 shrink-0 place-items-center rounded-xl ${i === 3 ? 'bg-[#fff1f0] text-[#c96868]' : 'bg-[#edf2ee] text-[#466f56]'}`}><Icon size={18} /></span><div><p className="text-sm font-bold text-[#27302b]">{title as string}</p><p className="mt-0.5 text-xs text-[#66716a]">{text as string}</p></div><ArrowRight size={15} className="ml-auto text-[#a5b2a8]" /></div>)}</div></div><div ref={productRight} className="reveal-right relative flex justify-center gap-[-20px] lg:justify-end"><div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#eaf0ec] blur-2xl" /><div className="relative z-10 -mr-16 mt-16 hidden rotate-[-6deg] sm:block"><PhoneMockup compact imageUrl={SCREEN_ALT_1} /></div><div className="relative z-20"><PhoneMockup imageUrl={SCREEN_ALT_2} /></div><div className="relative z-10 -ml-16 mt-16 hidden rotate-[6deg] sm:block"><PhoneMockup compact imageUrl={SCREEN_ALT_3} /></div></div></div></div></section>

      <section id="transparencia" className="bg-[#f8faf7] py-24 lg:py-32"><div className="site-shell"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div ref={transparencyLeft} className="reveal-left"><SectionLabel>Transparência por padrão</SectionLabel><h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.02] tracking-[-.06em] text-[#27302b] sm:text-5xl">Nada escondido.</h2><p className="mt-6 max-w-md text-base leading-relaxed text-[#66716a]">A confiança não fica em uma página escondida no rodapé. Ela está no centro da experiência, em cada ação e cada atualização.</p><div className="mt-7 flex items-center gap-3 text-sm font-bold text-[#466f56]"><ShieldCheck size={19} /> Dados abertos para a comunidade</div></div><div ref={transparencyRight} className="reveal-right rounded-[2rem] border border-[#e1e8e3] bg-white p-6 sm:p-8"><div className="flex items-center justify-between border-b border-[#e1e8e3] pb-5"><div><p className="eyebrow">Últimas destinações</p><p className="mt-2 text-sm font-bold text-[#27302b]">Setembro de 2026</p></div><button onClick={() => setReportOpen(true)} className="grid size-10 place-items-center rounded-full bg-[#eaf0ec] text-[#466f56]" data-testid="button-transparency-filter"><Plus size={18} /></button></div><div className="divide-y divide-[#e1e8e3]">{[['Proteção animal', 'Instituto Mia', 'R$ 8.200', PawPrint, 'bg-[#edf2ee] text-[#466f56]'], ['Saúde', 'Rede Cuidar', 'R$ 4.500', Stethoscope, 'bg-[#fff1f0] text-[#c96868]'], ['Projetos para idosos', 'Casa Aberta', 'R$ 2.100', Accessibility, 'bg-[#f8efe7] text-[#a86d46]'], ['Meio ambiente', 'Verde Vivo', 'R$ 1.800', Leaf, 'bg-[#e9f1f2] text-[#4b7478]']].map(([category, institution, value, Icon, color]) => <button onClick={() => setReportOpen(true)} key={category as string} className="group flex w-full items-center gap-4 py-5 text-left" data-testid={`button-destination-${category}`}><span className={`grid size-11 shrink-0 place-items-center rounded-xl ${color}`}><Icon size={19} /></span><span className="min-w-0 flex-1"><span className="block text-sm font-bold text-[#27302b]">{category as string}</span><span className="mt-1 block text-xs text-[#66716a]">{institution as string} · 18 set 2026</span></span><span className="mr-2 text-right"><span className="block font-mono-custom text-xs font-bold text-[#27302b]">{value as string}</span><span className="mt-1 block text-[10px] font-semibold text-[#466f56] opacity-0 transition group-hover:opacity-100">Ver detalhes</span></span><ArrowUpRight size={17} className="text-[#a5b2a8] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></button>)}</div><div className="mt-5 flex items-center gap-2 rounded-xl bg-[#edf2ee] px-4 py-3 text-xs font-semibold text-[#466f56]"><FileCheck2 size={16} /> Cada valor tem uma finalidade e um comprovante.</div></div></div></div></section>

      <section className="relative overflow-hidden bg-[#fff1f0] py-24 lg:py-28"><div className="absolute -right-20 -top-32 size-96 rounded-full border-[50px] border-white/35" /><div className="site-shell relative grid items-center gap-10 lg:grid-cols-[1fr_auto]"><div ref={ctaLeft} className="reveal-left"><SectionLabel coral>O próximo gesto é seu</SectionLabel><h2 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-.06em] text-[#27302b] sm:text-6xl">Pequenos atos.<br /><span className="text-[#c96868]">Mudanças que ficam.</span></h2><p className="mt-6 max-w-md text-base leading-relaxed text-[#66716a]">Entre para uma rede que acredita que ninguém precisa resolver tudo sozinho.</p></div><div ref={ctaRight} className="reveal-right"><PrimaryButton onClick={() => setJoinOpen(true)} testId="button-final-join">Entrar na comunidade</PrimaryButton></div></div></section>

      <section className="bg-white py-20"><div className="site-shell grid gap-8 lg:grid-cols-[.85fr_1.15fr]"><div><SectionLabel>Perguntas frequentes</SectionLabel><h2 className="mt-5 font-display text-3xl font-extrabold tracking-[-.05em] text-[#27302b] sm:text-4xl">Antes de começar.</h2></div><div className="divide-y divide-[#e1e8e3]">{faqs.map(([question, answer], i) => <div key={question}><button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left" data-testid={`button-faq-${i}`}><span className="text-sm font-bold text-[#27302b] sm:text-base">{question}</span><ChevronDown size={18} className={`shrink-0 text-[#466f56] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} /></button>{activeFaq === i && <p className="max-w-2xl pb-5 pr-8 text-sm leading-relaxed text-[#66716a]">{answer}</p>}</div>)}</div></div></section>
    </main>
    <footer className="bg-[#27302b] py-12 text-white"><div className="site-shell"><div className="flex flex-col justify-between gap-10 sm:flex-row"><div><Logo light /><p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">Tecnologia para reeducar, organizar , aproximar e salvar vidas todos os dias </p></div><div className="flex flex-wrap gap-x-12 gap-y-8"><div><p className="eyebrow text-white/40">Explorar</p><div className="mt-4 flex flex-col gap-3 text-sm text-white/65"><a href="#como-funciona" className="transition hover:text-white" data-testid="link-footer-how">Como funciona</a><a href="#impacto" className="transition hover:text-white" data-testid="link-footer-impact">Impacto</a><a href="#comunidade" className="transition hover:text-white" data-testid="link-footer-community">Comunidade</a></div></div><div><p className="eyebrow text-white/40">Transparência</p><div className="mt-4 flex flex-col gap-3 text-sm text-white/65"><a href="#transparencia" className="transition hover:text-white" data-testid="link-footer-transparency">Destinações</a><button onClick={() => setJoinOpen(true)} className="text-left transition hover:text-white" data-testid="button-footer-contact">Fale com a gente</button></div></div></div></div><div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row"><span>© 2026 Helpers - Community. </span><span>Salvando vidas todos os dias.</span></div></div></footer>
    <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} />
  </div>;
}

function Router() {
  return <ErrorBoundary resetKey={useLocation()[0]}><Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch></ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;