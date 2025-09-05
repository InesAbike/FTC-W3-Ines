'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { navLinks, socialLinks } from '@/constants';
import Link from 'next/link';


const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async () => {
    if (!email.trim()) return;

    setIsSubscribing(true);

    // Simulation d'appel API
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form
    setEmail('');
    setIsSubscribing(false);

    // Ici vous pourriez ajouter une notification de succès
    alert('Subscription successful!');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <footer className="bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] rounded-tl-4xl rounded-tr-4xl  px-4 sm:px-6 lg:px-8 py-8">
      {/* Newsletter Section */}
      <div className='bg-primary-dark-blue rounded-2xl md:py-12 py-6 sm:px-6 lg:px-8 px-4 max-w-7xl mx-auto'>
            <div className=" lg:grid-cols-3 grid-cols-1 items-center justify-between gap-6 grid">
              {/* Newsletter Text */}
              <div className="text-center lg:text-left col-span-1">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  Register Now So You Don't Miss
                </h3>
                <p className="text-white text-lg sm:text-xl font-semibold">
                  Our Programs
                </p>
              </div>

              {/* Newsletter Form */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto p-4 rounded-lg bg-white col-span-2">
                <div className="flex-1 lg:w-80">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your Email"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-80 text-neutral-80 placeholder:text-neutral-40 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  disabled={isSubscribing}
                  className="px-6 py-3 bg-primary-dark-blue text-white rounded-lg font-medium hover:bg-primary-dark-blue-80 hover:text-primary-dark-blue transition-colors duration-200 text-sm whitespace-nowrap disabled:opacity-50"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe Now'}
                </button>
              </div>
            </div>
          </div>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

          {/* Left Side - Navigation */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8">
            {
              navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="block text-primary hover:text-primary/80 font-medium transition-colors py-1">
                  {link.label}
                </Link>
              ))
            }
          </div>

          {/* Right Side - Social Media */}
          <div className="flex items-center space-x-4">
            {
              socialLinks.map((link) => (
                <Link key={link.id} href={link.href} className="block text-primary hover:text-primary/80 font-medium transition-colors py-1">
                  <link.icon />
                </Link>
              ))
            }
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-primary/20">
        <div className="max-w-7xl mx-auto pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">

            {/* Copyright */}
            <div className="text-primary/70 text-center sm:text-left sm:order-1 order-3">
              © {new Date().getFullYear()} Monitô. All rights reserved.
            </div>
            {/* Center - Logo */}
            <Image src="/logos/logo.svg" alt="Logo" width={100} height={100} className='order-2' />
            {/* Legal Links */}
            <div className="flex gap-6 sm:order-3 order-1">
              <Link
                href="#"
                className="text-primary-dark-blue/70 hover:text-primary-dark-blue transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-primary-dark-blue/70 hover:text-primary-dark-blue transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;