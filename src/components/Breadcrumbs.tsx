import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, variant = 'light' }) => {
  const isDark = variant === 'dark';

  return (
    <nav aria-label="Breadcrumb" className="w-full overflow-x-auto no-scrollbar py-1">
      <ol className="flex items-center gap-1.5 sm:gap-2 text-xs font-medium whitespace-nowrap">
        <li>
          <button
            onClick={items[0]?.onClick}
            className={`inline-flex items-center gap-1 transition-colors cursor-pointer ${
              isDark ? 'text-white/70 hover:text-white' : 'text-[#5E6B82] hover:text-[#0969E8]'
            }`}
            aria-label="Navigate to Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Home</span>
          </button>
        </li>

        {items.slice(1).map((item, index) => {
          const isLast = index === items.length - 2;
          return (
            <li key={index} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight
                className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-white/40' : 'text-gray-400'}`}
                aria-hidden="true"
              />
              {isLast || !item.onClick ? (
                <span
                  className={`font-semibold ${
                    isDark ? 'text-white' : 'text-[#071B49]'
                  }`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={item.onClick}
                  className={`transition-colors cursor-pointer ${
                    isDark ? 'text-white/70 hover:text-white' : 'text-[#5E6B82] hover:text-[#0969E8]'
                  }`}
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
