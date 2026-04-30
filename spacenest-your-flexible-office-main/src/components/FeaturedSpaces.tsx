import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import spacePrivate from "@/assets/space-private.jpg";
import spaceHotdesk from "@/assets/space-hotdesk.jpg";
import spaceMeeting from "@/assets/space-meeting.jpg";

const spaces = [
  {
    id: 1,
    title: "Private Office Pod",
    location: "Downtown Manhattan, NYC",
    price: 25,
    unit: "hr",
    rating: 4.9,
    reviews: 128,
    image: spacePrivate,
    tag: "Most Popular",
  },
  {
    id: 2,
    title: "Open Hot Desk",
    location: "Williamsburg, Brooklyn",
    price: 12,
    unit: "hr",
    rating: 4.7,
    reviews: 256,
    image: spaceHotdesk,
    tag: "Best Value",
  },
  {
    id: 3,
    title: "Meeting Room",
    location: "Midtown, NYC",
    price: 45,
    unit: "hr",
    rating: 4.8,
    reviews: 89,
    image: spaceMeeting,
    tag: "Teams",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturedSpaces = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Spaces
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Handpicked workspaces loved by our community
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {spaces.map((space) => (
            <motion.div key={space.id} variants={item}>
              <Link
                to="/spaces"
                className="group block bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full font-body">
                    {space.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-semibold text-foreground font-body">
                      {space.rating}
                    </span>
                    <span className="text-sm text-muted-foreground font-body">
                      ({space.reviews})
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {space.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm mb-4">
                    {space.location}
                  </p>
                  <p className="font-body">
                    <span className="text-2xl font-bold text-foreground">
                      ${space.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      /{space.unit}
                    </span>
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSpaces;
