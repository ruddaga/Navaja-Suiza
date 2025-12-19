
import React, { useState, useEffect } from 'react';
import { 
  User, 
  Shirt, 
  Watch, 
  Droplets, 
  Layers, 
  Info, 
  CheckCircle2, 
  ArrowLeft,
  Search,
  ChevronRight,
  Palette,
  XCircle,
  AlertTriangle,
  ImageIcon,
  ExternalLink
} from 'lucide-react';
import { STYLING_DATA, GARMENT_DETAILS } from './data';
import { Category, GarmentDetail } from './types';

const SafeImage: React.FC<{ src?: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setError(false);
    setLoading(true);
  }, [src]);

  if (error || !src) {
    return (
      <div className={`bg-gray-100 flex flex-col items-center justify-center gap-3 ${className}`}>
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
          <ImageIcon size={24} className="text-gray-300" />
        </div>
        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest px-4 text-center">
          {alt}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <Shirt size={24} className="text-gray-200 animate-bounce" />
        </div>
      )}
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover transition-all duration-700 ${loading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </div>
  );
};

const Header: React.FC<{ title: string; subtitle?: string; onBack?: () => void }> = ({ title, subtitle, onBack }) => (
  <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-gray-100 p-4 pt-6">
    <div className="flex items-center gap-3">
      {onBack && (
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft size={20} />
        </button>
      )}
      <div className="flex-1 min-w-0">
        <h1 className="text-xl font-bold text-gray-900 tracking-tight truncate">{title}</h1>
        {subtitle && <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-0.5">{subtitle}</p>}
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<Category | 'home'>('home');
  const [selectedGarment, setSelectedGarment] = useState<GarmentDetail | null>(null);

  const openGoogleSearch = (query: string) => {
    const fullQuery = `prenda ${query} hombre minimalista vanguardista`;
    window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(fullQuery)}`, '_blank');
  };

  const handleGarmentClick = (itemName: string) => {
    const detail = GARMENT_DETAILS[itemName];
    if (detail) setSelectedGarment(detail);
  };

  const renderGarmentDetail = (garment: GarmentDetail) => (
    <div className="animate-slideIn fixed inset-0 z-50 bg-gray-50 overflow-y-auto pb-24">
      <Header title={garment.name} subtitle="Ficha de Estilo" onBack={() => setSelectedGarment(null)} />
      
      <div className="relative">
        <SafeImage src={garment.image} alt={garment.name} className="h-80 w-full" />
        <button 
          onClick={() => openGoogleSearch(garment.name)}
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur shadow-lg border border-gray-100 p-3 rounded-2xl flex items-center gap-2 text-indigo-600 font-bold text-xs animate-bounce"
        >
          <Search size={16} /> Ver más ejemplos
        </button>
      </div>

      <div className="p-4 -mt-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border border-gray-100">
          <p className="text-gray-600 text-sm leading-relaxed mb-8 italic">"{garment.description}"</p>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-[10px] font-black uppercase text-emerald-600 tracking-[0.15em] mb-4 flex items-center gap-2">
                <CheckCircle2 size={14} /> Recomendaciones
              </h4>
              <div className="grid gap-2">
                {garment.types.map((type, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-semibold text-gray-800 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-50">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {type}
                  </div>
                ))}
              </div>
            </div>

            {garment.avoid && (
              <div>
                <h4 className="text-[10px] font-black uppercase text-rose-600 tracking-[0.15em] mb-4 flex items-center gap-2">
                  <XCircle size={14} /> Evitar
                </h4>
                <div className="grid gap-2">
                  {garment.avoid.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-semibold text-rose-800 bg-rose-50/50 p-4 rounded-2xl border border-rose-100">
                      <AlertTriangle size={16} className="text-rose-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.15em] mb-4 flex items-center gap-2">
                <Palette size={14} /> Paleta Sugerida
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {garment.colors.map((color, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl shadow-inner border border-black/5 shrink-0" style={{ backgroundColor: color.hex }} />
                    <span className="text-[11px] font-bold text-gray-700 truncate">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen max-w-md mx-auto relative bg-gray-50 shadow-2xl font-sans">
      {selectedGarment && renderGarmentDetail(selectedGarment)}

      <div className="pb-24">
        {activeTab === 'home' && (
          <div className="animate-fadeIn">
            <Header title="Rodolfo L." subtitle="Guía de Estilo" />
            <div className="p-4">
              <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 mb-8 shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-bold mb-1">Tu Bloque</h3>
                <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">Vanguardista Minimal</p>
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  <div className="bg-white/10 p-4 rounded-2xl border border-white/5 backdrop-blur">
                    <p className="text-[8px] uppercase font-bold text-white/50 mb-1">Morfología</p>
                    <p className="text-xs font-bold">Cuadrado</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl border border-white/5 backdrop-blur">
                    <p className="text-[8px] uppercase font-bold text-white/50 mb-1">Colorimetría</p>
                    <p className="text-xs font-bold">Fría/Invierno</p>
                  </div>
                </div>
                <User size={140} className="absolute -right-10 -bottom-10 opacity-10 rotate-12" />
              </div>

              <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">Herramientas</h2>
              <div className="grid grid-cols-2 gap-4">
                <MenuCard icon={<Shirt size={26}/>} label="Ropa" color="text-indigo-600 bg-indigo-50" onClick={() => setActiveTab('clothing')} />
                <MenuCard icon={<Watch size={26}/>} label="Accesorios" color="text-amber-600 bg-amber-50" onClick={() => setActiveTab('accessories')} />
                <MenuCard icon={<Layers size={26}/>} label="Perfil" color="text-emerald-600 bg-emerald-50" onClick={() => setActiveTab('morphology')} />
                <MenuCard icon={<Droplets size={26}/>} label="Perfumes" color="text-rose-600 bg-rose-50" onClick={() => setActiveTab('fragrances')} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'clothing' && (
          <div className="animate-fadeIn">
            <Header title="Indumentaria" subtitle="Catálogo Rodolfo" onBack={() => setActiveTab('home')} />
            <div className="p-4">
              <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Cuellos Favorables</h2>
              <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-4 px-4 pb-6">
                {STYLING_DATA.clothing.collars.map(collar => (
                  <div key={collar.name} className="flex-shrink-0 w-64 bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100">
                    <SafeImage src={collar.imageUrl} alt={collar.name} className="h-40 w-full" />
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-gray-900 text-sm">{collar.name}</h4>
                        <button onClick={() => openGoogleSearch(`cuello ${collar.name}`)} className="text-indigo-600"><ExternalLink size={14}/></button>
                      </div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase mb-2">{collar.context}</p>
                      <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2">{collar.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {[STYLING_DATA.clothing.formal, STYLING_DATA.clothing.semiFormal, STYLING_DATA.clothing.casual, STYLING_DATA.clothing.informal].map((sec, i) => (
                <div key={i} className="mt-8">
                  <h3 className="text-[10px] font-black text-gray-400 px-2 mb-4 uppercase tracking-widest">{sec.title}</h3>
                  <div className="space-y-2">
                    {sec.items.map((item, j) => (
                      <button 
                        key={j} 
                        onClick={() => handleGarmentClick(item)}
                        className="w-full flex justify-between items-center p-5 bg-white rounded-3xl border border-gray-100 shadow-sm active:scale-[0.98] transition-all"
                      >
                        <span className="text-sm font-bold text-gray-800">{item}</span>
                        <ChevronRight size={18} className="text-gray-300" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'morphology' && (
          <div className="animate-fadeIn">
            <Header title="Tu Perfil" onBack={() => setActiveTab('home')} />
            <div className="p-4">
              <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">Objetivo Principal</p>
                <p className="text-lg font-bold text-gray-800 leading-tight">Balancear hombros y aportar verticalidad visual.</p>
              </div>
              <div className="grid gap-4">
                {Object.entries(STYLING_DATA.morphology.details).map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{k}</span>
                    <span className="text-xs font-bold text-gray-800">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Simplified placeholders for other tabs to keep code focused */}
        {activeTab === 'accessories' && <div className="p-10 text-center text-gray-300 font-bold uppercase tracking-widest">Catálogo de Accesorios en carga...</div>}
        {activeTab === 'fragrances' && <div className="p-10 text-center text-gray-300 font-bold uppercase tracking-widest">Sello Olfativo en carga...</div>}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-2xl border-t border-gray-100 flex justify-around items-center p-4 pb-8 z-40 rounded-t-[2.5rem] shadow-2xl">
        <NavBtn active={activeTab === 'home'} icon={<Layers size={22}/>} label="Guía" onClick={() => setActiveTab('home')} />
        <NavBtn active={activeTab === 'clothing'} icon={<Shirt size={22}/>} label="Ropa" onClick={() => setActiveTab('clothing')} />
        <NavBtn active={activeTab === 'morphology'} icon={<User size={22}/>} label="Perfil" onClick={() => setActiveTab('morphology')} />
      </nav>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
        .animate-slideIn { animation: slideIn 0.3s cubic-bezier(0, 0, 0.2, 1); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

const MenuCard = ({ icon, label, color, onClick }: any) => (
  <button onClick={onClick} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center gap-4 active:scale-95 transition-all group">
    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center shadow-inner`}>{icon}</div>
    <span className="font-black text-gray-800 text-[9px] uppercase tracking-widest">{label}</span>
  </button>
);

const NavBtn = ({ active, icon, label, onClick }: any) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-indigo-600 scale-110' : 'text-gray-400'}`}>
    <div className={`p-1 ${active ? 'bg-indigo-50 rounded-xl' : ''}`}>{icon}</div>
    <span className="text-[8px] font-black uppercase tracking-widest">{label}</span>
  </button>
);
