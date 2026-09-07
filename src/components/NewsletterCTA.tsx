import React, { useState } from 'react';
import {
  Send,
  Mail,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Plane
} from 'lucide-react';

export const NewsletterCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [preference, setPreference] = useState('all');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid email address');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#071B49] via-[#093E8E] to-[#0969E8] text-white p-8 sm:p-12 lg:p-14 shadow-2xl shadow-blue-900/20">
          {/* Decorative Vector Graphic Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#4DA3FF]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#4DA3FF] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
              <span>Insider Travel Club</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight font-syncopate uppercase">
              Get Travel Inspiration & Exclusive Deals
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Join our travel community for destination ideas, secret flight price drops, limited-time hotel flash sales, and smarter ways to plan your next trip.
            </p>

            {isSubmitted ? (
              <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center space-y-2 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#21B96F] text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">You're on the VIP list!</h3>
                <p className="text-xs sm:text-sm text-white/85">
                  We've sent your welcome travel guide and 30% discount cheat sheet to <span className="font-semibold text-white">{email}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setEmail('');
                  }}
                  className="text-xs text-[#4DA3FF] underline pt-2 hover:text-white"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                {/* Travel Interests Selection */}
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setPreference('all')}
                    className={`px-3 py-1 rounded-full transition-colors ${
                      preference === 'all'
                        ? 'bg-white text-[#071B49] font-bold'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    All Travel Deals
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreference('luxury')}
                    className={`px-3 py-1 rounded-full transition-colors ${
                      preference === 'luxury'
                        ? 'bg-white text-[#071B49] font-bold'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    Luxury & Resorts
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreference('budget')}
                    className={`px-3 py-1 rounded-full transition-colors ${
                      preference === 'budget'
                        ? 'bg-white text-[#071B49] font-bold'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    Flight Price Drops
                  </button>
                </div>

                {/* Email Input Bar */}
                <div className="flex flex-col sm:flex-row items-center gap-2 max-w-lg mx-auto bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-2 px-3 py-2 w-full text-white">
                    <Mail className="w-5 h-5 text-white/70 shrink-0" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-transparent text-sm text-white placeholder-white/60 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="newsletter-submit-btn"
                    className="w-full sm:w-auto shrink-0 bg-[#FF8A2A] hover:bg-[#e87a20] active:scale-[0.98] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 transition-all duration-150"
                  >
                    <span>Get Travel Deals</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                {errorMsg && (
                  <p className="text-xs text-[#FF5A5F] font-semibold">{errorMsg}</p>
                )}

                {/* Spam Protection Microcopy */}
                <div className="flex items-center justify-center gap-4 text-[11px] text-white/75 pt-2">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#21B96F]" />
                    <span>No spam guaranteed</span>
                  </div>
                  <span>•</span>
                  <span>Unsubscribe anytime in 1-click</span>
                  <span>•</span>
                  <span>Privacy secured</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
