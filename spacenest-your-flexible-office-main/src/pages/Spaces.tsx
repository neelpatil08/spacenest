import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Wifi, Coffee, Monitor, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import spacePrivate from "@/assets/space-private.jpg";
import spaceHotdesk from "@/assets/space-hotdesk.jpg";
import spaceMeeting from "@/assets/space-meeting.jpg";

const allSpaces = [
  { id: 1, title: "Sunny Corner Desk", location: "SoHo, NYC", price: 15, unit: "hr", rating: 4.8, reviews: 92, image: spaceHotdesk, type: "Hot Desk", amenities: ["wifi", "coffee"] },
  { id: 2, title: "Private Focus Pod", location: "Chelsea, NYC", price: 28, unit: "hr", rating: 4.9, reviews: 134, image: spacePrivate, type: "Private Office", amenities: ["wifi", "monitor", "coffee"] },
  { id: 3, title: "Team Meeting Room", location: "Midtown, NYC", price: 50, unit: "hr", rating: 4.7, reviews: 67, image: spaceMeeting, type: "Meeting Room", amenities: ["wifi", "monitor"] },
  { id: 4, title: "Window Desk – Park View", location: "Upper West Side, NYC", price: 18, unit: "hr", rating: 4.6, reviews: 45, image: spaceHotdesk, type: "Hot Desk", amenities: ["wifi", "coffee"] },
  { id: 5, title: "Executive Suite", location: "Financial District, NYC", price: 40, unit: "hr", rating: 4.9, reviews: 201, image: spacePrivate, type: "Private Office", amenities: ["wifi", "monitor", "coffee"] },
  { id: 6, title: "Boardroom for 12", location: "Flatiron, NYC", price: 75, unit: "hr", rating: 4.8, reviews: 53, image: spaceMeeting, type: "Meeting Room", amenities: ["wifi", "monitor"] },
];

const filters = ["All", "Hot Desk", "Private Office", "Meeting Room"];

const amenityIcons: Record<string, React.ElementType> = {
  wifi: Wifi,
  coffee: Coffee,
  monitor: Monitor,
};

const Spaces = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? allSpaces
    : allSpaces.filter((s) => s.type === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="mb-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Browse Spaces
            </h1>
            <p className="text-muted-foreground font-body text-lg">
              Find and book the perfect workspace for your needs
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((f) => (
              <Button
                key={f}
                variant={activeFilter === f ? "default" : "secondary"}
                size="sm"
                className="rounded-full font-body"
                onClick={() => setActiveFilter(f)}
              >
                {f === "Meeting Room" && <Users className="h-4 w-4" />}
                {f}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((space, i) => (
              <motion.div
                key={space.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1 rounded-full font-body">
                    {space.type}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-semibold text-foreground font-body">
                        {space.rating}
                      </span>
                      <span className="text-sm text-muted-foreground font-body">
                        ({space.reviews})
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {space.amenities.map((a) => {
                        const Icon = amenityIcons[a];
                        return Icon ? (
                          <Icon key={a} className="h-4 w-4 text-muted-foreground" />
                        ) : null;
                      })}
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {space.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm flex items-center gap-1 mb-4">
                    <MapPin className="h-3.5 w-3.5" />
                    {space.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-body">
                      <span className="text-2xl font-bold text-foreground">
                        ${space.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        /{space.unit}
                      </span>
                    </p>
                    <Button size="sm" className="rounded-xl font-body">
                      Book Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Spaces;
