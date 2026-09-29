import React from 'react';
import { Navigation, X } from 'lucide-react';
const matchaHero = "https://raw.githubusercontent.com/LilyJeanhun/Matcha-Match/main/src/assets/images/matcha_ceremony_hero_1790700551982.jpg";

interface LocationPermissionModalProps {
  isOpen: boolean;
  onAllow: () => void;
  onDismiss: () => void;
  isPinpointing: boolean;
}

export const LocationPermissionModal: React.FC<LocationPermissionModalProps> = ({
  isOpen,
  onAllow,
  onDismiss,
  isPinpointing
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-[#14110e]/55 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#fbf9f6] rounded-[28px] shadow-2xl overflow-hidden">
        <div className="relative h-44 overflow-hidden">
          <img src={matchaHero} alt="Whisked matcha" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fbf9f6] via-[#fbf9f6]/10 to-black/25" />
          <button
            onClick={onDismiss}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 text-[#14110e] hover:bg-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="px-7 pb-7 pt-1 space-y-6">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2a4a38]">Nearby</p>
            <h3 className="text-[28px] leading-tight font-editorial font-semibold text-[#14110e]">
              Show cafés around you
            </h3>
            <p className="text-sm text-[#5c554d] leading-relaxed">
              Use your location to sort spots by walking distance. Only 4.0 and up. You can skip this and browse cities instead.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-[#3f3a34]">
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2a4a38] shrink-0" />Rated 4.0 or higher</li>
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#c4a36a] shrink-0" />Filter 1km to 25km</li>
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2a4a38] shrink-0" />One tap directions</li>
          </ul>
          <div className="flex flex-col gap-2.5 pt-1">
            <button onClick={onAllow} disabled={isPinpointing} className="w-full py-3.5 rounded-2xl bg-[#2a4a38] text-white text-sm font-semibold hover:bg-[#1c3327] transition-colors flex items-center justify-center gap-2 disabled:opacity-50">
              <Navigation className={`w-4 h-4 ${isPinpointing ? 'animate-pulse' : ''}`} />
              {isPinpointing ? 'Finding you' : 'Use my location'}
            </button>
            <button onClick={onDismiss} className="w-full py-3.5 rounded-2xl bg-white border border-[#e7e1d6] text-[#5c554d] hover:text-[#14110e] text-sm font-medium transition-colors">
              Browse cities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
