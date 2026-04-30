import { Link } from "react-router-dom";
import { MapPin, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-coworking.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">

      {/* Background Image */}
      <img
        src={heroImg}
        alt="workspace"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* FIXED OVERLAY (KEY FIX) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container py-20">
        <div className="max-w-2xl text-white">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-400 font-semibold text-sm uppercase mb-4"
          >
            Flexible Workspaces for Everyone
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            Find Your Perfect
            <br />
            <span className="text-orange-400">Desk Space</span>
          </motion.h1>

          <motion.p className="text-white/80 text-lg mb-8">
            Book affordable desks, private offices, and meeting rooms.
          </motion.p>

          {/* Search */}
          <div className="bg-white rounded-xl p-2 flex gap-2 max-w-xl shadow-lg">
            <div className="flex items-center gap-2 flex-1 px-3">
              <MapPin className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="City, neighborhood..."
                className="w-full outline-none text-black"
              />
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;