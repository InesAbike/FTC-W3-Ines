'use client'
import React, { useState } from 'react';
import { FiSearch, FiMenu, FiX, FiChevronDown} from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/constants';
import SearchBar from './SearchBar';
import { Currency, useCurrency } from '@/contexts/CurrencyContext';

const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="group relative text-primary-dark-blue hover:text-primary-dark-blue/80 font-medium transition-colors flex flex-col items-center"
    >
      <span className="relative z-10">{label}</span>
      <svg
        className="absolute -rotate-45 -bottom-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-10 h-8 z-0"
        viewBox="0 0 42 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.3146 8.51235V8.56143C22.3139 9.5215 22.4822 10.4745 22.8121 11.3785L22.7927 11.3199C23.1133 12.2007 23.6581 12.9867 24.3754 13.6032L24.3818 13.608C25.0618 14.2081 25.9662 14.5739 26.9578 14.5739H27.0353H27.0321C28.3403 14.5666 29.5932 14.0553 30.5205 13.1504C31.5335 12.2387 32.3216 11.1129 32.8251 9.85831L32.8461 9.79813C33.3341 8.61246 33.5911 7.34756 33.6036 6.06903V6.01361C33.6036 5.02552 33.4275 4.07701 33.1061 3.19659L33.1255 3.25518C32.8049 2.37433 32.2601 1.58836 31.5428 0.971801L31.5363 0.96705C30.8065 0.323216 29.853 -0.0223897 28.8716 0.00112587H28.8764C27.5678 0.00661014 26.3142 0.518173 25.388 1.42468C24.3851 2.33632 23.6036 3.45697 23.1011 4.70407L23.0801 4.76424C22.6134 5.87268 22.3372 7.16005 22.3227 8.5076V8.51235H22.3146ZM30.9469 20.4645L30.9452 20.5975C30.9433 21.7882 31.3186 22.9502 32.0192 23.9228L32.0063 23.9038C32.3258 24.3551 32.7519 24.7238 33.2483 24.9786C33.7447 25.2334 34.2965 25.3666 34.8568 25.3669L35.0167 25.3638H35.0086C36.3324 25.3495 37.6047 24.8593 38.5843 23.9861L38.5794 23.9909C39.6215 23.1158 40.4643 22.0357 41.0533 20.8207C41.6423 19.6057 41.9643 18.2829 41.9984 16.9381V16.9254L42 16.7955C42 15.5525 41.6027 14.3997 40.926 13.4544L40.9389 13.4734C40.6065 12.997 40.1556 12.6116 39.6287 12.3539C39.1019 12.0962 38.5167 11.9746 37.9286 12.0008H37.9366C36.6129 12.015 35.3405 12.5053 34.361 13.3784L34.3658 13.3736C33.3222 14.2539 32.4786 15.3392 31.8897 16.5593C31.3007 17.7794 30.9795 19.1071 30.9469 20.4566V20.4676V20.4645ZM20.9968 19.7962C18.6389 19.9224 16.3807 20.7703 14.54 22.2206L14.5626 22.2031C12.3094 23.7721 10.368 25.732 8.83413 27.986L8.78245 28.0668C7.39997 29.8879 6.59202 32.0662 6.45845 34.3326L6.45684 34.3643L6.45361 34.502C6.45361 35.1418 6.61349 35.7467 6.89612 36.2771L6.88643 36.2565C7.1576 36.743 7.58112 37.131 8.09446 37.3634L8.11061 37.3697C8.58058 37.5898 9.12806 37.7624 9.69978 37.859L9.73854 37.8638C10.3347 37.956 10.9374 38.0015 11.5409 38H11.662H11.6556C13.3196 37.892 14.9521 37.503 16.4812 36.8504L16.3875 36.8868C17.8316 36.2694 19.3711 35.8942 20.9419 35.7768L20.9919 35.7736C22.7733 35.9034 24.4238 36.2961 25.9581 36.9121L25.8499 36.8741C27.4497 37.5041 29.1433 37.8753 30.8645 37.973L30.9097 37.9746C33.9955 37.9767 35.5383 36.7738 35.5383 34.3659C35.4684 32.6786 34.9735 31.0346 34.0978 29.5806L34.1252 29.6281C33.1804 27.8858 31.9933 26.2807 30.598 24.8586L30.6045 24.865C29.2407 23.4684 27.6811 22.2693 25.9726 21.3037L25.8725 21.2515C24.4133 20.3588 22.7413 19.856 21.0226 19.7931H21.0032L20.9968 19.7962ZM14.9647 14.5755H15.039C15.9914 14.5765 16.9104 14.2312 17.6182 13.6064L17.6149 13.6096C18.3265 13.0021 18.8689 12.2273 19.1912 11.3579L19.2041 11.3199C19.5245 10.4343 19.6868 9.50111 19.6838 8.56143V8.50918V8.51235C19.6692 7.15847 19.3931 5.87268 18.9005 4.69457L18.9263 4.76424C18.4259 3.49609 17.6385 2.35584 16.6233 1.42943L16.6169 1.42468C15.6904 0.519718 14.4378 0.008873 13.1301 0.00270936H13.0542C12.0625 0.00270936 11.1581 0.370077 10.475 0.971801L10.4782 0.968634C9.77084 1.57511 9.22496 2.34468 8.90196 3.22035L8.88904 3.25835C8.58057 4.08493 8.40292 5.03977 8.40292 6.0342V6.06587V6.06428C8.41691 7.36974 8.68267 8.66081 9.1862 9.86939L9.16037 9.79972C9.66119 11.0748 10.4547 12.2197 11.4795 13.1456L11.486 13.152C12.4137 14.0546 13.6658 14.5641 14.9728 14.5708H14.9744L14.9647 14.5755ZM4.06339 12.0039L3.91481 12.0008C2.73423 12.0008 1.69255 12.5803 1.06916 13.4655L1.06108 13.4766C0.36726 14.4512 -0.00325012 15.6118 1.90735e-05 16.8003L0.00163651 16.9365V16.9301C0.0334435 18.2741 0.353107 19.5966 0.939892 20.8116C1.52668 22.0267 2.36747 23.1071 3.4077 23.983L3.42061 23.9941C4.39863 24.8639 5.6678 25.3523 6.98817 25.3669H6.99141C7.57462 25.3926 8.15499 25.2733 8.67851 25.0199C9.20203 24.7666 9.65169 24.3876 9.98563 23.9181L9.99371 23.907C10.7152 22.8998 11.0867 21.6916 11.0532 20.4613V20.4676C11.0222 19.1189 10.7031 17.7915 10.1164 16.5712C9.52974 15.3509 8.68852 14.2648 7.6471 13.3831L7.63418 13.3721C6.65726 12.5049 5.39077 12.0178 4.07308 12.0023H4.06985L4.06339 12.0039Z" fill="#FFFFFF"></path>
      </svg>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const getCurrencyData = (curr: Currency) => {
    switch (curr) {
      case 'VND':
        return { flag: '🇻🇳', code: 'VND' };
      case 'USD':
        return { flag: '🇺🇸', code: 'USD' };
      case 'EUR':
        return { flag: '🇪🇺', code: 'EUR' };
      default:
        return { flag: '🇻🇳', code: 'VND' };
    }
  };

  const currentCurrency = getCurrencyData(currency);
  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <nav className="max-w-7xl mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-16 h-16">
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-primary-dark-blue hover:text-primary-dark-blue/80 transition-colors"
          >
            {isMobileMenuOpen ? (
              <FiX className="h-5 w-5" />
            ) : (
              <FiMenu className="h-5 w-5" />
            )}
          </button>
          <div className='flex items-center justify-center'>
            <Image
              src="/logos/logo.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {
              navLinks.map((link) => (
                <NavLink key={link.label} href={link.href} label={link.label} />
              ))
            }
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">

            {/* Search Icon - Mobile/Tablet */}
            <button className="lg:hidden p-2 text-primary-dark-blue hover:text-primary-dark-blue/80 transition-colors">
              <FiSearch className="h-5 w-5" />
            </button>

            {/* Join Community Button */}
            <button className="hidden md:inline-flex items-center px-6 py-2 space-x-2 bg-primary-dark-blue text-white rounded-full font-medium hover:bg-primary/90 transition-colors text-sm">
              Join the community
            </button>

            {/* Language Selector */}
            <div className="relative lg:block hidden">
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
              >
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{currentCurrency.flag}</span>
                </div>
                <span className="font-medium text-sm">{currentCurrency.code}</span>
                <FiChevronDown className="h-3 w-3" />
              </button>

              {/* Language Dropdown */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-neutral-20 py-1 z-50">
                  <button
                    onClick={() => handleCurrencyChange('VND')}
                    className={`flex items-center space-x-2 px-3 py-2 text-sm w-full text-left hover:bg-neutral-10 transition-colors ${
                      currency === 'VND' ? 'bg-neutral-10 text-primary' : 'text-neutral-80'
                    }`}
                  >
                    <span className="text-xs">🇻🇳</span>
                    <span>VND</span>
                  </button>
                  <button
                    onClick={() => handleCurrencyChange('USD')}
                    className={`flex items-center space-x-2 px-3 py-2 text-sm w-full text-left hover:bg-neutral-10 transition-colors ${
                      currency === 'USD' ? 'bg-neutral-10 text-primary' : 'text-neutral-80'
                    }`}
                  >
                    <span className="text-xs">🇺🇸</span>
                    <span>USD</span>
                  </button>
                  <button
                    onClick={() => handleCurrencyChange('EUR')}
                    className={`flex items-center space-x-2 px-3 py-2 text-sm w-full text-left hover:bg-neutral-10 transition-colors ${
                      currency === 'EUR' ? 'bg-neutral-10 text-primary' : 'text-neutral-80'
                    }`}
                  >
                    <span className="text-xs">🇪🇺</span>
                    <span>EUR</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 border-t border-neutral-30 z-40">
            <div className="px-4 py-4">

              {/* Mobile Navigation Links */}
              <div className="flex flex-col gap-4 mt-4 text-white">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group relative text-primary hover:text-primary/80 font-medium transition-colors py-2 px-4 rounded-lg hover:bg-neutral-10 flex items-center justify-between"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <svg
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-6 h-6"
                      viewBox="0 0 42 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.3146 8.51235V8.56143C22.3139 9.5215 22.4822 10.4745 22.8121 11.3785L22.7927 11.3199C23.1133 12.2007 23.6581 12.9867 24.3754 13.6032L24.3818 13.608C25.0618 14.2081 25.9662 14.5739 26.9578 14.5739H27.0353H27.0321C28.3403 14.5666 29.5932 14.0553 30.5205 13.1504C31.5335 12.2387 32.3216 11.1129 32.8251 9.85831L32.8461 9.79813C33.3341 8.61246 33.5911 7.34756 33.6036 6.06903V6.01361C33.6036 5.02552 33.4275 4.07701 33.1061 3.19659L33.1255 3.25518C32.8049 2.37433 32.2601 1.58836 31.5428 0.971801L31.5363 0.96705C30.8065 0.323216 29.853 -0.0223897 28.8716 0.00112587H28.8764C27.5678 0.00661014 26.3142 0.518173 25.388 1.42468C24.3851 2.33632 23.6036 3.45697 23.1011 4.70407L23.0801 4.76424C22.6134 5.87268 22.3372 7.16005 22.3227 8.5076V8.51235H22.3146ZM30.9469 20.4645L30.9452 20.5975C30.9433 21.7882 31.3186 22.9502 32.0192 23.9228L32.0063 23.9038C32.3258 24.3551 32.7519 24.7238 33.2483 24.9786C33.7447 25.2334 34.2965 25.3666 34.8568 25.3669L35.0167 25.3638H35.0086C36.3324 25.3495 37.6047 24.8593 38.5843 23.9861L38.5794 23.9909C39.6215 23.1158 40.4643 22.0357 41.0533 20.8207C41.6423 19.6057 41.9643 18.2829 41.9984 16.9381V16.9254L42 16.7955C42 15.5525 41.6027 14.3997 40.926 13.4544L40.9389 13.4734C40.6065 12.997 40.1556 12.6116 39.6287 12.3539C39.1019 12.0962 38.5167 11.9746 37.9286 12.0008H37.9366C36.6129 12.015 35.3405 12.5053 34.361 13.3784L34.3658 13.3736C33.3222 14.2539 32.4786 15.3392 31.8897 16.5593C31.3007 17.7794 30.9795 19.1071 30.9469 20.4566V20.4676V20.4645ZM20.9968 19.7962C18.6389 19.9224 16.3807 20.7703 14.54 22.2206L14.5626 22.2031C12.3094 23.7721 10.368 25.732 8.83413 27.986L8.78245 28.0668C7.39997 29.8879 6.59202 32.0662 6.45845 34.3326L6.45684 34.3643L6.45361 34.502C6.45361 35.1418 6.61349 35.7467 6.89612 36.2771L6.88643 36.2565C7.1576 36.743 7.58112 37.131 8.09446 37.3634L8.11061 37.3697C8.58058 37.5898 9.12806 37.7624 9.69978 37.859L9.73854 37.8638C10.3347 37.956 10.9374 38.0015 11.5409 38H11.662H11.6556C13.3196 37.892 14.9521 37.503 16.4812 36.8504L16.3875 36.8868C17.8316 36.2694 19.3711 35.8942 20.9419 35.7768L20.9919 35.7736C22.7733 35.9034 24.4238 36.2961 25.9581 36.9121L25.8499 36.8741C27.4497 37.5041 29.1433 37.8753 30.8645 37.973L30.9097 37.9746C33.9955 37.9767 35.5383 36.7738 35.5383 34.3659C35.4684 32.6786 34.9735 31.0346 34.0978 29.5806L34.1252 29.6281C33.1804 27.8858 31.9933 26.2807 30.598 24.8586L30.6045 24.865C29.2407 23.4684 27.6811 22.2693 25.9726 21.3037L25.8725 21.2515C24.4133 20.3588 22.7413 19.856 21.0226 19.7931H21.0032L20.9968 19.7962ZM14.9647 14.5755H15.039C15.9914 14.5765 16.9104 14.2312 17.6182 13.6064L17.6149 13.6096C18.3265 13.0021 18.8689 12.2273 19.1912 11.3579L19.2041 11.3199C19.5245 10.4343 19.6868 9.50111 19.6838 8.56143V8.50918V8.51235C19.6692 7.15847 19.3931 5.87268 18.9005 4.69457L18.9263 4.76424C18.4259 3.49609 17.6385 2.35584 16.6233 1.42943L16.6169 1.42468C15.6904 0.519718 14.4378 0.008873 13.1301 0.00270936H13.0542C12.0625 0.00270936 11.1581 0.370077 10.475 0.971801L10.4782 0.968634C9.77084 1.57511 9.22496 2.34468 8.90196 3.22035L8.88904 3.25835C8.58057 4.08493 8.40292 5.03977 8.40292 6.0342V6.06587V6.06428C8.41691 7.36974 8.68267 8.66081 9.1862 9.86939L9.16037 9.79972C9.66119 11.0748 10.4547 12.2197 11.4795 13.1456L11.486 13.152C12.4137 14.0546 13.6658 14.5641 14.9728 14.5708H14.9744L14.9647 14.5755ZM4.06339 12.0039L3.91481 12.0008C2.73423 12.0008 1.69255 12.5803 1.06916 13.4655L1.06108 13.4766C0.36726 14.4512 -0.00325012 15.6118 1.90735e-05 16.8003L0.00163651 16.9365V16.9301C0.0334435 18.2741 0.353107 19.5966 0.939892 20.8116C1.52668 22.0267 2.36747 23.1071 3.4077 23.983L3.42061 23.9941C4.39863 24.8639 5.6678 25.3523 6.98817 25.3669H6.99141C7.57462 25.3926 8.15499 25.2733 8.67851 25.0199C9.20203 24.7666 9.65169 24.3876 9.98563 23.9181L9.99371 23.907C10.7152 22.8998 11.0867 21.6916 11.0532 20.4613V20.4676C11.0222 19.1189 10.7031 17.7915 10.1164 16.5712C9.52974 15.3509 8.68852 14.2648 7.6471 13.3831L7.63418 13.3721C6.65726 12.5049 5.39077 12.0178 4.07308 12.0023H4.06985L4.06339 12.0039Z" fill="#003459" />
                    </svg>
                  </Link>
                ))}
              </div>

              {/* Mobile Join Community Button */}
              <div className="sm:hidden pt-2">
                <button className="w-full px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors text-sm">
                  Join the community
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-primary-dark-blue z-30 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;