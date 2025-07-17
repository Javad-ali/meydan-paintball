import React from "react";
import Button from "@/components/ui/button";
import Carousel from "@/components/ui/carousel";
import Card from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const slides = [
  {
    image: "https://sportsmatik.com/uploads/matik-sports-corner/matik-know-how/paintball_1584187854.jpg",
    caption: "Feel the Rush at Meydan Paintball Arena",
  },
  {
    image: "https://www.paintballpark.co.uk/wp-content/uploads/2024/01/Video_Thumb_Schools_Img-1-1200x680.jpg",
    caption: "Team Tactics, Real Thrills",
  },
  {
    image: "https://shopprimetime.net/cdn/shop/files/g5.jpg?v=1724726955&width=1346",
    caption: "Under the Lights – Night Ops",
  },
];

const testimonials = [
  {
    quote:
      "Unreal experience! The vibe, the terrain – I felt like a real commando!",
    name: "Arjun R.",
  },
  {
    quote: "We celebrated our team offsite here. Super thrilling!",
    name: "Shruti K.",
  },
];

export default function MeydanLandingPage() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Hero Slider */}
      <Carousel className="w-full h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-full flex items-center justify-center"
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-center max-w-3xl">
                {slide.caption}
              </h1>
              <Button
                className="mt-6 bg-green-600 hover:bg-green-700"
              >
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp /> Book Now on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        ))}
      </Carousel>

      {/* About Section */}
      <section className="py-20 px-4 md:px-24 bg-zinc-900 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Meydan Paintball Arena
        </motion.h2>
        <p className="max-w-3xl mx-auto text-lg text-zinc-300">
          Dive into an adrenaline-charged battlefield. Our ultra-realistic arena is
          designed to deliver top-tier paintball experiences for friends, teams, and
          thrill-seekers alike.
        </p>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-800 px-4 md:px-24 text-center">
        <h2 className="text-3xl font-bold mb-12">What Players Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="p-6 text-left bg-zinc-700 text-white shadow-xl rounded-2xl"
            >
              <p className="italic">“{t.quote}”</p>
              <p className="mt-4 font-bold">— {t.name}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-zinc-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Battle?</h2>
        <p className="mb-6 text-zinc-300">
          Contact us directly on WhatsApp to book your session or event.
        </p>
        <Button
          className="bg-green-600 hover:bg-green-700 text-lg"
          size="lg"
        >
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 justify-center"
          >
            <FaWhatsapp className="text-xl" /> Message Us on WhatsApp
          </a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-6 px-4 text-center text-zinc-500 text-sm">
        © 2025 Meydan Paintball Arena. All rights reserved.
      </footer>
    </main>
  );
}
