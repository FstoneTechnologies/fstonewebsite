import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      path: '/homepage',
      icon: 'Home'
    },
    {
      name: 'Services',
      path: '/service',
      icon: 'Briefcase'
    },
    {
      name: 'About',
      path: '/about',
      icon: 'Users'
    },
    {
      name: 'Careers',
      path: '/careers',
      icon: 'Briefcase'
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: 'MessageCircle'
    }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <header 
    //   className={`fixed top-0 left-0 right-0 z-50 transition-brand ${
    //     isScrolled 
    //       ? 'bg-background/95 backdrop-blur-md shadow-brand border-b border-border' 
    //       : 'bg-transparent'
    //   }`}
    // >
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#a9d5f6] shadow-lg'
        : 'bg-[#ffffff]'
        }`}
    >



      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo Section */}
          <Link
            to="/homepage"
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-[#1e8de2] to-[#60afec] rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                <span className="text-white font-bold text-lg">F</span>
              </div> */}

              {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div> */}
            </div>

            {/* <div className="flex flex-col">
              <div className="flex items-end space-x-2">
                <span className="text-xl font-bold text-[#E6F2FF] tracking-tight">
                  FSTONE
                </span>
                <span className="text-xl font-bold text-[#E6F2FF] tracking-tight">
                  TECHNOLOGIES
                </span>
              </div>

              <span className="text-white/70 text-xs font-semibold">
                Focus on sucsess
              </span>
            </div> */}

            <img
              src="/fstonelogo.png"
              alt="Fstone Technologies"
              className="h-44 w-auto object-contain"
            />

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <NavLink 
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-brand ${isActivePath(item?.path)
                  ? 'bg-[#1F74B5] text-white shadow-soft'
                  : 'text-black hover:bg-white/20'

                  }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </NavLink >
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <Button
              variant="outline"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Schedule Call
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-cta"
            >
              Get Started
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-surface transition-brand"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-brand ${isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'text-foreground hover:bg-surface hover:text-primary'
                    }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}

              {/* Mobile CTAs */}
              <div className="pt-4 space-y-3 border-t border-border">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Schedule Call
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-cta"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;