import { Link } from "react-router-dom";
import { MapPin, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-coworking.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl text-white">

          <motion.p className="text-orange-300 font-semibold text-sm uppercase mb-4">
            Flexible Workspaces for Everyone
          </motion.p>

          <motion.h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Find Your Perfect
            <br />
            <span className="text-orange-400">Desk Space</span>
          </motion.h1>

          <motion.p className="text-white/80 text-lg mb-10">
            Book desks, offices, and meeting rooms easily.
          </motion.p>

          {/* Search */}
          <div className="bg-white rounded-xl p-2 flex gap-2 max-w-xl shadow-lg">
            <div className="flex items-center gap-2 flex-1 px-3">
              <MapPin className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="City, location..."
                className="w-full outline-none text-black"
              />
            </div>

            <Button className="bg-orange-500 text-white">
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