import React from 'react';
import { ScreenType } from '../types';

interface BottomNavProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
}

interface NavItem {
  id: ScreenType;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'accueil', label: 'Accueil', icon: 'gavel' },
  { id: 'domaines-d-expertise', label: 'Domaines', icon: 'account_balance' },
  { id: 'le-cabinet-et-avocat', label: 'Cabinet', icon: 'shield_person' },
  { id: 'contact-et-consultation', label: 'Contact', icon: 'event_available' },
];

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  return (
    <nav
      className="lg:hidden fixed bottom-0 w-full z-50 pb-safe bg-[#070A12]/95 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.7)] border-t border-[#1E293B]"
      aria-label="Navigation principale mobile"
    >
      <div className="max-w-md mx-auto flex items-center justify-around h-16 px-2">
        {NAV_ITEMS.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center flex-1 h-full py-1 transition-all group cursor-pointer relative ${
                isActive ? 'text-[#C5A880] font-bold' : 'text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
              id={`nav-item-${item.id}`}
            >
              {isActive && (
                <span className="absolute top-0 w-8 h-0.5 bg-[#C5A880] rounded-full" />
              )}
              <span
                className={`material-symbols-outlined text-[22px] mb-0.5 transition-transform duration-200 ${
                  isActive ? 'scale-110 text-[#C5A880]' : 'group-hover:scale-105'
                }`}
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="font-label-sm text-[11px] tracking-wide">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
