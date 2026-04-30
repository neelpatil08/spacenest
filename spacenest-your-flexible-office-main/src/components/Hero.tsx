import { Link } from "react-router-dom";
import { MapPin, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-coworking.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Modern coworking space with city views"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-body font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Flexible Workspaces for Everyone
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Find Your Perfect
            <br />
            <span className="text-accent">Desk Space</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary-foreground/80 text-lg md:text-xl mb-10 font-body leading-relaxed max-w-lg"
          >
            Book affordable desks, private offices, and meeting rooms by the
            hour, day, or month. Work from anywhere with SpaceNest.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl p-2 shadow-elevated flex flex-col sm:flex-row gap-2 max-w-xl"
          >
            <div className="flex items-center gap-2 flex-1 px-4 py-2">
              <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="City, neighborhood, or address"
                className="flex-1 bg-transparent border-none outline-none text-card-foreground placeholder:text-muted-foreground font-body"
              />
            </div>
            <Button variant="hero" size="lg" className="rounded-xl" asChild>
              <Link to="/spaces">
                <Search className="h-4 w-4" />
                Search Spaces
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6 mt-8 text-primary-foreground/70 text-sm font-body"
          >
            <span>✓ No commitment</span>
            <span>✓ Free cancellation</span>
            <span>✓ Wi-Fi included</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
