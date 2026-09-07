import React, { useState } from 'react';
import { X, Search, Check, Globe, Users } from 'lucide-react';
import { TOP_20_LANGUAGES } from '../data/languages';
import { LanguageConfig } from '../types';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguage?: string;
  selectedLanguageCode?: string;
  onSelectLanguage: (lang: LanguageConfig) => void;
}

export const LanguageModal: React.FC<LanguageModalProps> = ({
  isOpen,
  onClose,
  selectedLanguage,
  selectedLanguageCode,
  onSelectLanguage
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const activeCode = selectedLanguage || selectedLanguageCode || 'en';

  if (!isOpen) return null;

  const filteredLanguages = TOP_20_LANGUAGES.filter(
    (lang) =>
      lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lang.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-gray-100 relative flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#F8FAFC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF2FB] text-[#0969E8] flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#071B49] font-syncopate">
                Select Language
              </h3>
              <p className="text-xs text-[#5E6B82]">
                Choose from the world's 20 most spoken languages
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b border-gray-100 bg-white">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search language (e.g. Bengali, বাংলা, Spanish, Español, हिन्दी)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#0969E8] focus:bg-white transition-colors"
              autoFocus
            />
          </div>
        </div>

        {/* Language Grid */}
        <div className="p-5 flex-1 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {filteredLanguages.map((lang) => {
              const isSelected = activeCode === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    onSelectLanguage(lang);
                    onClose();
                  }}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? 'border-[#0969E8] bg-[#EAF2FB] text-[#0969E8] shadow-sm'
                      : 'border-gray-100 hover:border-gray-300 hover:bg-[#F8FAFC] text-[#101C36]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-2xl shrink-0" role="img" aria-label={lang.name}>
                      {lang.flag}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm truncate">{lang.nativeName}</span>
                        {lang.code === 'bn' && (
                          <span className="text-[10px] bg-[#21B96F]/15 text-[#21B96F] font-bold px-1.5 py-0.5 rounded">
                            বাংলা
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-[#5E6B82]">
                        <span>{lang.name}</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5">
                          <Users className="w-3 h-3 opacity-60" />
                          {lang.speakers}
                        </span>
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="w-6 h-6 rounded-full bg-[#0969E8] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {filteredLanguages.length === 0 && (
            <div className="text-center py-10 text-[#5E6B82]">
              <p className="text-sm font-semibold">No languages found matching "{searchQuery}"</p>
              <p className="text-xs mt-1">Try searching by English or native script name.</p>
            </div>
          )}
        </div>

        {/* Footer info note */}
        <div className="p-4 bg-[#F8FAFC] border-t border-gray-100 text-center text-xs text-[#5E6B82]">
          <span>Selected language will dynamically adapt website titles, buttons, and booking widgets.</span>
        </div>
      </div>
    </div>
  );
};
