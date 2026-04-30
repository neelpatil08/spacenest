import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Find Your Nest?
          </h2>
          <p className="text-primary-foreground/80 font-body text-lg max-w-lg mx-auto mb-10">
            Join thousands of professionals who've found their perfect workspace. Start browsing for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-base px-8 rounded-xl" asChild>
              <Link to="/spaces">Browse Spaces</Link>
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 rounded-xl">
              List Your Space
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
