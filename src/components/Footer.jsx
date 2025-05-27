import { Link } from 'react-router-dom';
import { Leaf, Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Leaf size={28} />
              <span className="ml-2 text-xl font-bold">LeafLog</span>
            </div>
            <p className="mb-4 max-w-md">
              Promoting environmental awareness and nature preservation through education,
              community engagement, and sustainable practices.
            </p>
            <div className="flex space-x-4 text-white">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/tracker" className="hover:text-accent transition-colors">Activity Tracker</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="flex items-center mb-2">
                <Mail size={16} className="mr-2" />
                <a href="mailto:hello@leaflog.org" className="hover:text-accent transition-colors">hello@leaflog.org</a>
              </p>
              <p>123 Forest Avenue</p>
              <p>Green Valley, GJ 54321</p>
            </address>
          </div>
        </div>

        <div className="border-t border-accent/30 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} LeafLog. All rights reserved.</p>
          <p className="mt-2">
            <Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            {' • '}
            <Link to="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;