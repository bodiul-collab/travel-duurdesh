import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X, Clock } from 'lucide-react';

interface DatePickerPopoverProps {
  label: string;
  value: string; // YYYY-MM-DD
  onChange: (dateStr: string) => void;
  minDate?: string;
  placeholder?: string;
}

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const DatePickerPopover: React.FC<DatePickerPopoverProps> = ({
  label,
  value,
  onChange,
  minDate,
  placeholder = 'Select date'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const nativeInputRef = useRef<HTMLInputElement>(null);

  // Parse current value or fallback to today
  const selectedDate = React.useMemo(() => {
    if (!value) return new Date();
    const parts = value.split('-').map(Number);
    if (parts.length === 3) {
      return new Date(parts[0], parts[1] - 1, parts[2]);
    }
    return new Date();
  }, [value]);

  // View state for month & year navigation
  const [viewYear, setViewYear] = useState(selectedDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(selectedDate.getMonth());

  // Update view when value changes from outside
  useEffect(() => {
    if (value) {
      const parts = value.split('-').map(Number);
      if (parts.length === 3) {
        setViewYear(parts[0]);
        setViewMonth(parts[1] - 1);
      }
    }
  }, [value]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((prev) => prev - 1);
    } else {
      setViewMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((prev) => prev + 1);
    } else {
      setViewMonth((prev) => prev + 1);
    }
  };

  const handleSelectDay = (day: number) => {
    const yearStr = viewYear.toString();
    const monthStr = String(viewMonth + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    const formatted = `${yearStr}-${monthStr}-${dayStr}`;
    onChange(formatted);
    setIsOpen(false);
  };

  const handleQuickPreset = (daysFromNow: number) => {
    const target = new Date();
    target.setDate(target.getDate() + daysFromNow);
    const yearStr = target.getFullYear().toString();
    const monthStr = String(target.getMonth() + 1).padStart(2, '0');
    const dayStr = String(target.getDate()).padStart(2, '0');
    const formatted = `${yearStr}-${monthStr}-${dayStr}`;
    onChange(formatted);
    setIsOpen(false);
  };

  // Calendar matrix calculation
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();
  const daysInCurrentMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  // Format label for display, e.g. "Wed, Sep 16, 2026"
  const formattedDisplay = React.useMemo(() => {
    if (!value) return placeholder;
    const parts = value.split('-').map(Number);
    if (parts.length !== 3) return value;
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }, [value, placeholder]);

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(
    today.getDate()
  ).padStart(2, '0')}`;

  const effectiveMin = minDate || todayStr;

  return (
    <div className="relative w-full" ref={containerRef}>
      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5E6B82] mb-1">
        {label}
      </label>

      {/* Main trigger button */}
      <div
        onClick={() => {
          setIsOpen(!isOpen);
          try {
            // Also attempt to wake native picker if supported
            nativeInputRef.current?.focus();
          } catch {
            // Safe fallback
          }
        }}
        className="flex items-center gap-2 p-3 rounded-xl border border-[#E2E8F0] hover:border-[#0969E8] bg-[#F8FAFC] cursor-pointer transition-colors shadow-xs group"
      >
        <CalendarIcon className="w-4 h-4 text-[#0969E8] shrink-0 group-hover:scale-110 transition-transform" />
        <div className="flex-1 truncate">
          <span className="text-xs sm:text-sm font-semibold text-[#101C36] block truncate">
            {formattedDisplay}
          </span>
        </div>
      </div>

      {/* Hidden/Auxiliary native input so native keyboards/dates still sync */}
      <input
        ref={nativeInputRef}
        type="date"
        value={value}
        min={effectiveMin}
        onChange={(e) => {
          if (e.target.value) {
            onChange(e.target.value);
          }
        }}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      />

      {/* Interactive Calendar Popover */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 animate-fadeIn">
          {/* Calendar Header with Navigation */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1.5 rounded-lg text-gray-500 hover:text-[#0969E8] hover:bg-[#F3F8FF] transition-colors"
              aria-label="Previous month"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="text-xs font-bold text-[#071B49] uppercase tracking-wide">
              {MONTH_NAMES[viewMonth]} {viewYear}
            </div>
            <button
              type="button"
              onClick={handleNextMonth}
              className="p-1.5 rounded-lg text-gray-500 hover:text-[#0969E8] hover:bg-[#F3F8FF] transition-colors"
              aria-label="Next month"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Presets */}
          <div className="py-2.5 flex flex-wrap gap-1.5 border-b border-gray-100">
            <button
              type="button"
              onClick={() => handleQuickPreset(1)}
              className="px-2 py-1 text-[10px] font-semibold bg-[#F1F5F9] hover:bg-[#E2E8F0] text-gray-700 rounded-md transition-colors"
            >
              Tomorrow
            </button>
            <button
              type="button"
              onClick={() => handleQuickPreset(7)}
              className="px-2 py-1 text-[10px] font-semibold bg-[#EAF2FB] hover:bg-[#d5e7fc] text-[#0969E8] rounded-md transition-colors"
            >
              In 1 Wk
            </button>
            <button
              type="button"
              onClick={() => handleQuickPreset(14)}
              className="px-2 py-1 text-[10px] font-semibold bg-[#EAF2FB] hover:bg-[#d5e7fc] text-[#0969E8] rounded-md transition-colors"
            >
              In 2 Wks
            </button>
            <button
              type="button"
              onClick={() => handleQuickPreset(30)}
              className="px-2 py-1 text-[10px] font-semibold bg-[#EAF2FB] hover:bg-[#d5e7fc] text-[#0969E8] rounded-md transition-colors"
            >
              In 1 Mo
            </button>
          </div>

          {/* Day of Week Headers */}
          <div className="grid grid-cols-7 gap-1 pt-2 pb-1 text-center">
            {DAYS_OF_WEEK.map((d) => (
              <div key={d} className="text-[10px] font-bold text-gray-400">
                {d}
              </div>
            ))}
          </div>

          {/* Day Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Empty slots before day 1 */}
            {Array.from({ length: firstDayOfWeek }).map((_, i) => (
              <div key={`empty-${i}`} className="h-8" />
            ))}

            {/* Days of the month */}
            {Array.from({ length: daysInCurrentMonth }).map((_, i) => {
              const day = i + 1;
              const dateObj = new Date(viewYear, viewMonth, day);
              const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(
                day
              ).padStart(2, '0')}`;

              const isSelected = value === dateStr;
              const isToday = todayStr === dateStr;
              const isPast = effectiveMin ? dateStr < effectiveMin : false;

              return (
                <button
                  key={day}
                  type="button"
                  disabled={isPast}
                  onClick={() => handleSelectDay(day)}
                  className={`h-8 w-8 mx-auto rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${
                    isPast
                      ? 'text-gray-300 cursor-not-allowed'
                      : isSelected
                      ? 'bg-[#0969E8] text-white font-bold shadow-md shadow-blue-500/30'
                      : isToday
                      ? 'border border-[#0969E8] text-[#0969E8] hover:bg-[#F3F8FF]'
                      : 'text-[#1E293B] hover:bg-[#F1F5F9]'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Manual Input Fallback */}
          <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-gray-500 text-[10px]">
              <Clock className="w-3 h-3" />
              <span>Or type direct:</span>
            </div>
            <input
              type="date"
              value={value}
              min={effectiveMin}
              onChange={(e) => {
                if (e.target.value) onChange(e.target.value);
              }}
              className="text-xs bg-[#F8FAFC] border border-gray-200 rounded px-1.5 py-0.5 font-medium text-[#101C36]"
            />
          </div>
        </div>
      )}
    </div>
  );
};
