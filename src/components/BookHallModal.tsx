import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Calendar, Clock, Users, Cake as CakeIcon, CheckCircle2, MessageCircle, Phone, PartyPopper } from 'lucide-react';
import { useOrder } from '../context/CartContext';
import { CONTACT_INFO, getHallBookingWhatsAppLink } from '../utils/contact';
import { HALL_PACKAGES } from './HallBookingSection';
import confetti from 'canvas-confetti';

export const BookHallModal: React.FC = () => {
  const { isHallModalOpen, setIsHallModalOpen, selectedHallPackage } = useOrder();

  const [packageName, setPackageName] = useState(selectedHallPackage);
  const [guestCount, setGuestCount] = useState('20-30 Guests');
  const [birthdayPerson, setBirthdayPerson] = useState('');
  const [birthdayAge, setBirthdayAge] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Evening (7:00 PM – 10:00 PM)');
  const [includedCake, setIncludedCake] = useState('Strawberry Dream & Alpine Cream');
  const [customPlaque, setCustomPlaque] = useState('');
  const [decorTheme, setDecorTheme] = useState('Rose Gold & Ivory Elegance');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (selectedHallPackage) {
      setPackageName(selectedHallPackage);
    }
  }, [selectedHallPackage]);

  if (!isHallModalOpen) return null;

  const whatsappUrl = getHallBookingWhatsAppLink(
    packageName,
    guestCount,
    eventDate || 'Next Weekend',
    timeSlot,
    includedCake,
    birthdayPerson ? `${birthdayPerson} (${birthdayAge ? `${birthdayAge}th Birthday` : 'Birthday'})` : undefined
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `HALL-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#D99A9C', '#C5A46D', '#4B2E26', '#FFF8F0'],
      });
    } catch (e) {}
  };

  const handleClose = () => {
    setIsHallModalOpen(false);
    setTimeout(() => {
      setSubmitted(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-cocoa/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-cream-100 rounded-3xl max-w-xl w-full shadow-2xl border border-gold/40 overflow-hidden relative my-auto max-h-[94vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="p-4 sm:p-6 border-b border-gold/20 flex items-center justify-between bg-white/70">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                <PartyPopper className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-cocoa leading-tight">
                  Book Birthday Celebration Hall
                </h3>
                <p className="text-[11px] text-chocolate/70">
                  Private Salon · Showstopper Cake Included · Concierge Service
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-cream-200 text-chocolate transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-5">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold/20 text-gold mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-cocoa">
                  Hall Reservation Request Received!
                </h4>
                <p className="text-xs sm:text-sm text-chocolate/80 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{clientName || 'celebration host'}</strong>. We have placed a tentative hold on the private hall for {birthdayPerson ? `${birthdayPerson}'s birthday celebration` : 'your birthday party'}.
                </p>
                <div className="p-4 rounded-2xl bg-ivory border border-gold/30 text-xs text-chocolate inline-block">
                  Booking Reference: <strong className="font-serif text-sm text-cocoa">{bookingRef}</strong>
                </div>
                <p className="text-[11px] text-chocolate/60">
                  Our event director will contact you via {clientPhone || 'phone'} within 2 business hours to finalize menu tastings and decor styling.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Details on WhatsApp</span>
                  </a>
                  <button
                    onClick={handleClose}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-chocolate text-cream-100 text-xs font-semibold uppercase tracking-wider hover:bg-cocoa transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* 1. Hall Package Selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 block mb-1">
                    Select Hall Package:
                  </label>
                  <select
                    value={packageName}
                    onChange={(e) => setPackageName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gold/30 bg-white text-cocoa focus:outline-none focus:border-gold"
                  >
                    {HALL_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={`${pkg.name} (${pkg.guestCount})`}>
                        {pkg.name} ({pkg.guestCount}) — {pkg.price}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Birthday Person & Milestone */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 block mb-1">
                      Birthday Star's Name:
                    </label>
                    <input
                      type="text"
                      required
                      value={birthdayPerson}
                      onChange={(e) => setBirthdayPerson(e.target.value)}
                      placeholder="e.g. Alisha / Aarav"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-gold/30 bg-white text-cocoa focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 block mb-1">
                      Milestone / Age:
                    </label>
                    <input
                      type="text"
                      value={birthdayAge}
                      onChange={(e) => setBirthdayAge(e.target.value)}
                      placeholder="e.g. 1st, 18th, 30th, 50th"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-gold/30 bg-white text-cocoa focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                {/* 3. Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 block mb-1">
                      Event Date:
                    </label>
                    <input
                      type="date"
                      required
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-gold/30 bg-white text-cocoa focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 block mb-1">
                      Preferred Time Slot:
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-gold/30 bg-white text-cocoa focus:outline-none focus:border-gold"
                    >
                      <option>Morning Banquet (11:00 AM – 2:00 PM)</option>
                      <option>Afternoon Tea Party (3:00 PM – 6:00 PM)</option>
                      <option>Evening Gala (7:00 PM – 10:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* 4. Included Celebration Cake Selection */}
                <div className="p-3.5 rounded-2xl bg-ivory border border-gold/25 space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-chocolate uppercase tracking-wider">
                    <CakeIcon className="w-4 h-4 text-gold" />
                    <span>Included Cake Selection:</span>
                  </div>

                  <select
                    value={includedCake}
                    onChange={(e) => setIncludedCake(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-gold/30 bg-white text-cocoa focus:outline-none"
                  >
                    <option>Strawberry Dream & Alpine Vanilla Cream</option>
                    <option>Rich Velvet Romance & Cream Cheese</option>
                    <option>70% Belgian Chocolate Indulgence Ganache</option>
                    <option>Madagascar Golden Vanilla & 24K Gold</option>
                    <option>Damask Rose & Persian Pistachio Reverie</option>
                  </select>

                  <input
                    type="text"
                    value={customPlaque}
                    onChange={(e) => setCustomPlaque(e.target.value)}
                    placeholder="Hand-piped message for the cake (e.g. Happy 30th Birthday Alisha!)"
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-gold/30 bg-white text-cocoa focus:outline-none"
                  />
                </div>

                {/* 5. Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 block mb-1">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Host Name"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-gold/30 bg-white text-cocoa focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 block mb-1">
                      Phone / WhatsApp:
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-gold/30 bg-white text-cocoa focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                {/* Dual Submit Options: Instant WhatsApp & Form Booking */}
                <div className="pt-2 space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center space-x-2 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire / Book on WhatsApp (Fastest)</span>
                  </a>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-2xl bg-chocolate hover:bg-cocoa text-cream-100 font-bold text-xs uppercase tracking-wider shadow-luxury transition-all border border-gold/30 flex items-center justify-center space-x-2"
                  >
                    <Sparkles className="w-4 h-4 text-gold" />
                    <span>Request Hall Booking Reservation</span>
                  </button>
                </div>

                <div className="text-center">
                  <a
                    href={CONTACT_INFO.phoneCallUrl}
                    className="text-xs text-chocolate/70 hover:text-chocolate font-medium underline decoration-gold/40"
                  >
                    Or call our event director directly at {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
