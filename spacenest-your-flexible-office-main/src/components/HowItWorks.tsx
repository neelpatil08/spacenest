import { motion } from "framer-motion";
import { Search, CalendarCheck, Laptop } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find a Space",
    description: "Browse hundreds of workspaces by location, price, and amenities.",
  },
  {
    icon: CalendarCheck,
    title: "Book Instantly",
    description: "Reserve your desk or office in seconds — no phone calls needed.",
  },
  {
    icon: Laptop,
    title: "Start Working",
    description: "Show up, connect to Wi-Fi, and get productive from day one.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Three simple steps to your ideal workspace
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                <step.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
