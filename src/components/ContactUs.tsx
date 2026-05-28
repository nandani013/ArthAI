import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, X, ArrowUpRight } from 'lucide-react';

export function ContactUs() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener('open-contact-modal', handleOpenModal);
    return () => window.removeEventListener('open-contact-modal', handleOpenModal);
  }, []);

  return (
    <>
      {/* Banner Section */}
      <section id="contact-details" className="py-16 bg-surface-warm border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#f2eaea] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0c1222] tracking-tight leading-tight max-w-2xl">
              Are You Looking For an Intelligent CRM & ERP Solution?
            </h2>
            <button 
              onClick={() => setIsOpen(true)}
              className="bg-accent hover:bg-accent-soft text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-lg flex items-center justify-center gap-2 shrink-0 text-lg w-full md:w-auto"
            >
              Contact Us! <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#0c1222]/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-surface w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl z-10 flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="sticky top-0 bg-surface/95 backdrop-blur-md z-20 border-b border-border/50 px-6 py-5 flex items-center justify-between">
              <h3 className="text-xl font-bold text-ink">Contact Information</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 bg-surface-muted hover:bg-border/50 rounded-full transition-colors text-text-muted hover:text-ink focus:outline-none focus:ring-2 focus:ring-brand"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-10">
              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Phone Card */}
                <div className="bg-surface rounded-2xl p-6 card-shadow flex items-start gap-4 border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-ink">+91 9051831818</h3>
                    <p className="text-text-muted text-sm font-medium">Phone</p>
                  </div>
                </div>
                
                {/* Email Card */}
                <div className="bg-surface rounded-2xl p-6 card-shadow flex items-start gap-4 border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="break-all">
                    <h3 className="text-base font-bold mb-1 text-ink">info@arthaistudio.com</h3>
                    <p className="text-text-muted text-sm font-medium">Email</p>
                  </div>
                </div>
                
                {/* Address Card */}
                <div className="bg-surface rounded-2xl p-6 card-shadow flex items-start gap-4 border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-ink">Address</h3>
                    <p className="text-text-muted text-sm font-medium leading-tight">
                      Purbachal Main Road,<br />
                      Kolkata 700078
                    </p>
                  </div>
                </div>
              </div>

              {/* Form and Map Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                {/* Contact Form */}
                <div className="bg-[#f4ebe6] rounded-3xl p-8 shadow-sm border border-black/5">
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-ink tracking-tight leading-tight">
                    Ready to Connect?<br />
                    <span className="text-brand">Let's Talk!</span>
                  </h2>
                  
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-sm font-semibold text-ink/80 mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border-none bg-white focus:outline-none focus:ring-2 focus:ring-brand shadow-sm transition-shadow" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink/80 mb-1.5">
                        Mobile Numbers <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 rounded-xl border-none bg-white focus:outline-none focus:ring-2 focus:ring-brand shadow-sm transition-shadow" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink/80 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 rounded-xl border-none bg-white focus:outline-none focus:ring-2 focus:ring-brand shadow-sm transition-shadow" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink/80 mb-1.5">
                        Message
                      </label>
                      <textarea 
                        rows={3} 
                        className="w-full px-4 py-3 rounded-xl border-none bg-white focus:outline-none focus:ring-2 focus:ring-brand shadow-sm transition-shadow resize-none"
                      ></textarea>
                    </div>
                    <div className="pt-2">
                      <button type="submit" className="btn-primary w-full md:w-auto px-8 py-3.5 text-base">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                
                {/* Map Location */}
                <div className="rounded-3xl overflow-hidden bg-surface-muted min-h-[300px] lg:min-h-full card-shadow border border-border/50 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.340058914619!2d88.3887076!3d22.528956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271501b4c90ab%3A0xc3f5afaa2e49c95b!2sPurbachal%20Main%20Rd%2C%20Purbachal%2C%20Haltu%2C%20Kolkata%2C%20West%20Bengal%20700078!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, position: 'absolute', inset: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ArthAI Studio Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
