'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Lottie from 'lottie-react';
import animationData1 from '/public/animation/license.json';
import animationData2 from '/public/animation/consulting.json';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const consultingMenu = [
    {
        label: 'AML/CFT Program',
        href: '/aml-program',
        subheader: 'Develop and maintain a robust global AML/CFT program.'
    },
    {
        label: 'ML/TF Risk Assessment',
        href: '/ml-risk-assessments',
        subheader: 'Expert identification and analysis of ML/TF risks.'
    },
    {
        label: 'Gap Analysis',
        href: '/expert-gap-analysis',
        subheader: 'Objective insights and actionable remediation roadmap.'
    },
    {
        label: 'AML/CFT Training',
        href: '/global-aml-solution',
        subheader: 'Comprehensive AML/CFT training and solutions.'
    },
    {
        label: 'Inhouse Compliance Function',
        href: '/build-inhouse',
        subheader: 'Support for creating a fit-for-purpose internal compliance function.'
    },
    {
        label: 'Financial Crime Consulting',
        href: '/navigate-global',
        subheader: 'Navigate global regulatory requirements with expert guidance.'
    },
    {
        label: 'AML/CFT Policy, Procedure & Control Documentation',
        href: '/expert-aml-policy',
        subheader: 'Clear, comprehensive, and regulator-ready documentation.'
    },
    {
        label: 'Independent Reviews',
        href: '/third-party',
        subheader: 'Expert guidance on third-party relationships and compliance.'
    },
];

const licensingMenu = [
    {
        label: 'Money Transmitter Licensing',
        href: '/money-transfer',
        subheader: 'End-to-end support to help you secure the licenses required to launch and operate legally.'
    },
    {
        label: 'License Maintenance',
        href: '/license-maintenance',
        subheader: 'Ongoing assistance to keep your licenses active, valid, and aligned with regulatory updates.'
    },
    {
        label: 'License Sponsorship',
        href: '/license-sponsorship',
        subheader: `Access to sponsor partnerships where direct licensing isn't feasible.`
    },
    {
        label: 'Existing License Acquisition',
        href: '/existing-license',
        subheader: 'Guidance on acquiring pre-approved licenses to fast-track market entry.'
    },
];

const Navbar = () => {
    const { openPopup } = usePopupTalkToExpert();
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const consultingTimeout = useRef<NodeJS.Timeout | null>(null);
    const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
    const pathname = usePathname();

    // Handlers for better hover behavior for both dropdowns
    const handleDropdownEnter = (dropdown: string) => {
        if (consultingTimeout.current) {
            clearTimeout(consultingTimeout.current);
        }
        setOpenDropdown(dropdown);
    };

    const handleDropdownLeave = () => {
        consultingTimeout.current = setTimeout(() => setOpenDropdown(null), 120);
    };

    return (
        <header className="bg-[#021F29] w-full z-50 fixed top-0 left-0 right-0">
            <nav className="container mx-auto flex items-center justify-between px-4 py-3 relative">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="RemitSo Logo"
                            width={100}
                            height={36}
                            className="h-9 w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex flex-1 items-center justify-between ml-8">
                    <div className="flex-1 flex justify-center">
                        <ul className="flex gap-8 items-center text-white font-light text-base">
                            <li>
                                <Link
                                    href="/"
                                    className={pathname === '/' ? 'font-semibold text-[#1ecbe1]' : ''}
                                >
                                    Home
                                </Link>
                            </li>

                            {/* Licensing Dropdown */}
                            <li
                                className="relative flex items-center gap-1 cursor-pointer group"
                                onMouseEnter={() => handleDropdownEnter('licensing')}
                                onMouseLeave={handleDropdownLeave}
                            >
                                <span className="flex items-center gap-1">
                                    Licensing
                                    <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                </span>
                                {/* Dropdown */}
                                <div
                                    className={`absolute left-0 top-full mt-2 min-w-[850px] rounded shadow-lg transition-all duration-300 z-30 bg-[#06232c] text-[#fff] flex ${openDropdown === 'licensing' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}
                                    onMouseEnter={() => handleDropdownEnter('licensing')}
                                    onMouseLeave={handleDropdownLeave}
                                    style={{ left: '50%', transform: 'translateX(-50%)', right: 'auto' }}
                                >
                                    {/* Left: Menu Items */}
                                    <div className="flex flex-col py-4 px-6 w-full max-w-[420px]">
                                        {licensingMenu.map((item) => (
                                            <Link
                                                href={item.href}
                                                key={item.label}
                                                className={`flex items-center justify-between py-3 px-3 rounded transition font-medium ${pathname === item.href ? 'bg-[#164d60] text-[#1ecbe1]' : 'hover:bg-[#164d60] hover:text-[#1ecbe1]'} mb-0`}
                                            >
                                                <div>
                                                    <div className="text-base font-semibold">{item.label}</div>
                                                    <div className="text-xs font-normal text-[#b2e6f6] leading-snug">{item.subheader}</div>
                                                </div>
                                                <svg className="w-5 h-5 ml-2 text-[#1ecbe1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                            </Link>
                                        ))}
                                    </div>
                                    {/* Vertical Separator */}
                                    <div className="w-px bg-[#20505c] mx-2 my-4" />
                                    {/* Right: Lottie Animation */}
                                    <div className="flex items-center justify-center w-full h-full p-2">
                                        <Lottie animationData={animationData1} loop={true} style={{ height: '100%', width: '100%' }} />
                                    </div>
                                </div>
                            </li>

                            {/* Consulting Dropdown */}
                            <li
                                className="relative flex items-center gap-1 cursor-pointer group"
                                onMouseEnter={() => handleDropdownEnter('consulting')}
                                onMouseLeave={handleDropdownLeave}
                            >
                                <span className="flex items-center gap-1">
                                    Consulting
                                    <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                </span>
                                <div
                                    className={`absolute left-0 top-full mt-2 min-w-[850px] rounded shadow-lg transition-all duration-300 z-30 bg-[#06232c] text-[#fff] flex ${openDropdown === 'consulting' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}
                                    onMouseEnter={() => handleDropdownEnter('consulting')}
                                    onMouseLeave={handleDropdownLeave}
                                    style={{ left: '50%', transform: 'translateX(-50%)', right: 'auto' }}
                                >
                                    {/* Left: Menu Items */}
                                    <div className="flex flex-col py-4 px-6 w-full max-w-[420px]">
                                        {consultingMenu.map((item) => (
                                            <Link
                                                href={item.href}
                                                key={item.label}
                                                className={`flex items-center justify-between py-3 px-3 rounded transition font-medium ${pathname === item.href ? 'bg-[#164d60] text-[#1ecbe1]' : 'hover:bg-[#164d60] hover:text-[#1ecbe1]'} mb-0`}
                                            >
                                                <div>
                                                    <div className="text-base font-semibold">{item.label}</div>
                                                    <div className="text-xs font-normal text-[#b2e6f6] leading-snug">{item.subheader}</div>
                                                </div>
                                                <svg className="w-5 h-5 ml-2 text-[#1ecbe1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                            </Link>
                                        ))}
                                    </div>
                                    {/* Vertical Separator */}
                                    <div className="w-px bg-[#20505c] mx-2 my-4" />
                                    {/* Right: Lottie Animation */}
                                    <div className="flex items-center justify-center w-full h-full p-2">
                                        <Lottie animationData={animationData2} loop={true} style={{ height: '100%', width: '100%' }} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button
                        className="ml-8 flex items-center gap-2 bg-blue-50 text-[#06232c] font-medium px-5 py-2 rounded-full shadow-sm hover:bg-blue-100 transition"
                        onClick={openPopup}
                    >
                        <span className="text-lg"></span> Talk to an Expert
                    </button>
                </div>

                {/* Burger Icon */}
                <button
                    className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none z-50 relative"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-7 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-7 h-0.5 bg-white rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-7 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* Mobile Nav Overlay */}
                <div
                    className={`lg:hidden fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => setMenuOpen(false)}
                ></div>

                {/* Mobile Nav */}
                <div
                    className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-[#06232c] z-50 flex flex-col pt-8 px-6 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    {/* Main Menu */}
                    <div className={`transition-transform duration-300 ${mobileSubMenu ? '-translate-x-full absolute w-full h-full top-0 left-0' : 'translate-x-0 relative'}`} style={{ minHeight: '100%' }}>
                        <ul className="flex flex-col gap-6 text-white text-lg font-light">
                            <Link href="/" className="flex items-center gap-1 cursor-pointer">Home</Link>
                            {/* Licensing with arrow */}
                            <li className="flex items-center gap-1 cursor-pointer justify-between" onClick={() => setMobileSubMenu('licensing')}>
                                <span>Licensing</span>
                                <svg className="w-5 h-5 ml-1 text-[#1ecbe1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </li>
                            {/* Consulting with arrow */}
                            <li className="flex items-center gap-1 cursor-pointer justify-between" onClick={() => setMobileSubMenu('consulting')}>
                                <span>Consulting</span>
                                <svg className="w-5 h-5 ml-1 text-[#1ecbe1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </li>
                        </ul>
                        <button className="mt-8 flex items-center gap-2 bg-blue-50 text-[#06232c] font-medium px-5 py-2 rounded-full shadow-sm hover:bg-blue-100 transition" onClick={openPopup}>
                            <span className="text-lg"></span> Talk to an Expert
                        </button>
                    </div>

                    {/* Licensing Submenu */}
                    {mobileSubMenu === 'licensing' && (
                        <div className={`absolute top-0 left-0 w-full h-full bg-[#06232c] z-50 flex flex-col pt-8 px-6 transition-transform duration-300 ${mobileSubMenu === 'licensing' ? 'translate-x-0' : 'translate-x-full'}`} style={{ minHeight: '100%' }}>
                            <div className="flex items-center mb-6 cursor-pointer" onClick={() => setMobileSubMenu(null)}>
                                <svg className="w-5 h-5 mr-2 text-[#1ecbe1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                                <span className="font-semibold text-white">Main Menu</span>
                            </div>
                            <ul className="flex flex-col text-white text-lg font-light divide-y divide-[#20505c]">
                                {licensingMenu.map((item) => (
                                    <li key={item.label} className="flex items-center justify-between py-4 cursor-pointer">
                                        <Link
                                            href={item.href}
                                            className={pathname === item.href ? 'font-semibold text-[#1ecbe1]' : ''}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <span className="text-base font-semibold">{item.label}</span>
                                        </Link>
                                        <svg className="w-5 h-5 ml-2 text-[#1ecbe1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Consulting Submenu */}
                    {mobileSubMenu === 'consulting' && (
                        <div className={`absolute top-0 left-0 w-full h-full bg-[#06232c] z-50 flex flex-col pt-8 px-6 transition-transform duration-300 ${mobileSubMenu === 'consulting' ? 'translate-x-0' : 'translate-x-full'}`} style={{ minHeight: '100%' }}>
                            <div className="flex items-center mb-6 cursor-pointer" onClick={() => setMobileSubMenu(null)}>
                                <svg className="w-5 h-5 mr-2 text-[#1ecbe1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                                <span className="font-semibold text-white">Main Menu</span>
                            </div>
                            <ul className="flex flex-col text-white text-lg font-light divide-y divide-[#20505c]">
                                {consultingMenu.map((item) => (
                                    <li key={item.label} className="flex items-center justify-between py-4 cursor-pointer">
                                        <Link
                                            href={item.href}
                                            className={pathname === item.href ? 'font-semibold text-[#1ecbe1]' : ''}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <span className="text-base font-semibold">{item.label}</span>
                                        </Link>
                                        <svg className="w-5 h-5 ml-2 text-[#1ecbe1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar; 