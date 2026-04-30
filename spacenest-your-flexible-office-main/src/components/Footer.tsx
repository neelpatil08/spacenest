import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="font-display text-2xl font-bold text-background tracking-tight">
              Space<span className="text-accent">Nest</span>
            </Link>
            <p className="text-background/60 font-body text-sm mt-4 leading-relaxed">
              Affordable desks and offices for freelancers, startups, and remote teams.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Explore</h4>
            <ul className="space-y-2 font-body text-sm text-background/60">
              <li><Link to="/spaces" className="hover:text-background transition-colors">Browse Spaces</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Hot Desks</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Private Offices</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Meeting Rooms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-2 font-body text-sm text-background/60">
              <li><Link to="/" className="hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Blog</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Support</h4>
            <ul className="space-y-2 font-body text-sm text-background/60">
              <li><Link to="/" className="hover:text-background transition-colors">Help Center</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Terms of Service</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Host a Space</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/40 font-body text-sm">
            © 2026 SpaceNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
