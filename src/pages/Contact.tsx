import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — no backend yet
    alert("Thank you for reaching out. We will get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 pt-[140px] md:pt-[180px] lg:pt-[220px] pb-12 md:pb-16">
          <h1 className="font-['Playfair_Display',serif] font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight">
            Get In Touch
          </h1>
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/70 mt-4 max-w-[600px]">
            We'd love to hear from you — whether you want to partner, volunteer, or simply say hello.
          </p>
        </div>
      </section>

      {/* Accountability + Contact form */}
      <section className="w-screen relative bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16 flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left: Office details + Accountability */}
          <div className="flex-1">
            <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl sm:text-3xl md:text-[33px] leading-tight mb-6">
              Our Office
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#c8922a] mt-1 flex-shrink-0" />
                <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555]">
                  Narok County, Suswa Area<br />
                  P.O. Box XXXX, Narok, Kenya
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-[#c8922a] mt-1 flex-shrink-0" />
                <a href="mailto:info@maasaifocusmission.org" className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#c8922a]">
                  info@maasaifocusmission.org
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-[#c8922a] mt-1 flex-shrink-0" />
                <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555]">
                  +254 XXX XXX XXX
                </p>
              </div>
            </div>

            {/* Accountability Promise */}
            <div className="rounded-lg border-l-4 border-[#c8922a] bg-[#c8922a]/8 p-6 md:p-8">
              <h3 className="font-['Inter',sans-serif] font-semibold text-lg md:text-xl text-[#2d3a0e] mb-3">
                Our Accountability Promise
              </h3>
              <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555] leading-relaxed">
                As a newly registered NGO, we hold ourselves to the highest standard of honesty. <strong className="text-[#2d3a0e]">100% of your support goes directly to the field.</strong> We are committed to transparent reporting and open communication with every partner and supporter.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="flex-1 max-w-[520px]">
            <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl sm:text-3xl md:text-[33px] leading-tight mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-['Inter',sans-serif] font-medium text-sm text-[#2d3a0e] mb-1.5">
                  Your Name
                </label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. John Kimani"
                  required
                  className="border-[#2d3a0e]/20 focus-visible:ring-[#c8922a]"
                />
              </div>
              <div>
                <label className="block font-['Inter',sans-serif] font-medium text-sm text-[#2d3a0e] mb-1.5">
                  Email Address
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  required
                  className="border-[#2d3a0e]/20 focus-visible:ring-[#c8922a]"
                />
              </div>
              <div>
                <label className="block font-['Inter',sans-serif] font-medium text-sm text-[#2d3a0e] mb-1.5">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we help, or how would you like to get involved?"
                  required
                  rows={5}
                  className="flex w-full rounded-md border border-[#2d3a0e]/20 bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8922a] focus-visible:ring-offset-2 md:text-sm font-['Inter',sans-serif]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#c8922a] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-base md:text-lg px-8 py-3.5 rounded-full hover:bg-[#b8831f] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
