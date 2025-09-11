'use client'
import React, { useEffect, useRef } from 'react';
import Navbar from '../layout/NavBar';
import { MdOutlinePlayCircle } from 'react-icons/md';
import Button from '../ui/Button';
import Image from 'next/image';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const mainImageRef = useRef<HTMLImageElement>(null);
    const deco1Ref = useRef<HTMLImageElement>(null);
    const deco2Ref = useRef<HTMLImageElement>(null);
    const square1Ref = useRef<HTMLImageElement>(null);
    const square2Ref = useRef<HTMLImageElement>(null);
    const square3Ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // Configuration initiale des éléments (invisibles)
        gsap.set([mainImageRef.current, deco1Ref.current, deco2Ref.current], {
            opacity: 0,
            y: 50
        });

        gsap.set([square1Ref.current, square2Ref.current, square3Ref.current], {
            opacity: 0,
            scale: 0,
            rotation: -180
        });

        // Timeline principale pour orchestrer les animations
        const tl = gsap.timeline({ delay: 0.5 });

        // Animation des décorations de fond d'abord
        tl.to(deco1Ref.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        })
        .to(deco2Ref.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4")
        // Puis l'image principale
        .to(mainImageRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
        }, "-=0.3")
        // Enfin les petits carrés avec des délais échelonnés
        .to(square1Ref.current, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, "-=0.2")
        .to(square2Ref.current, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, "-=0.4")
        .to(square3Ref.current, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, "-=0.4");

        // Animation de flottement pour les carrés
        gsap.to([square1Ref.current, square2Ref.current, square3Ref.current], {
            y: -10,
            duration: 2,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.3
        });

        // Animation subtile de balancement pour l'image principale
        gsap.to(mainImageRef.current, {
            rotation: 2,
            duration: 3,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1
        });

        // Nettoyage
        return () => {
            tl.kill();
        };
    }, []);

    
    return (
        <section className="bg-gradient-to-r rounded-b-2xl from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] relative">
            <div className="z-20 relative">
                <Navbar />
            </div>
            <Image src="/images/decorations/top-decoration.png" alt="top decoration" width={300} height={200} className="absolute top-0 left-0 z-0"></Image>
            <Image src="/images/decorations/bottom-decoration.png" alt="bottom decoration" width={500} height={200} className="absolute bottom-0 left-20 hidden lg:block"></Image>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
                    {/* Contenu textuel */}
                    <div className="text-left space-y-6 lg:space-y-8 md:pb-20 pb-0">
                        <div>
                            <div className="relative z-10">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark-blue-80 leading-tight relative z-10">
                                    One More Friend
                                </h1>
                                <Image src="/images/decorations/title-decoration.png" alt="Hero" width={70} height={70} className="absolute -left-4 top-0 hidden lg:block z-0" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-dark-blue-80 leading-tight">
                                Thousands More Fun!
                            </h2>
                        </div>

                        <p className="text-lg sm:text-xl text-neutral-80 max-w-lg leading-relaxed">
                            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                        </p>

                        {/* Boutons d'action */}
                        <div className="flex item-start sm:flex-row flex-col gap-4 pt-4 w-full">
                            <Button variant='outline' size='md' >
                                <span className="flex items-center gap-2">View Intro
                                    <MdOutlinePlayCircle size={20} />
                                </span>
                            </Button>
                            <Button variant='primary' size='md' className='text-white'>Explore Now</Button>
                        </div>
                    </div>

                    {/* Image section */}
                    <div ref={imageContainerRef} className="relative flex items-end justify-start h-full">
                        <Image 
                            ref={deco1Ref}
                            src="/images/decorations/hero-img-deco-1.svg" 
                            alt="Hero" 
                            width={520} 
                            height={300} 
                            className='absolute bottom-0 left-0 z-0 md:w-[500px] md:h-[300px] sm:w-[350px] w-[250px] h-[150px]' 
                        />
                        <Image 
                            ref={deco2Ref}
                            src="/images/decorations/hero-img-deco-2.svg" 
                            alt="Hero" 
                            width={450} 
                            height={600} 
                            className='absolute bottom-0 left-0 md:w-[600px] md:h-[350px] sm:w-[400px] w-full sm:h-[250px] h-[250px] z-10' 
                        />
                        <Image 
                            ref={mainImageRef}
                            src="/images/women-with-dog.png" 
                            alt="Hero" 
                            width={300} 
                            height={300} 
                            className='z-20 md:h-[450px] md:w-[650px] h-[300px] sm:w-[400px] w-full' 
                        />
                        <Image 
                            ref={square1Ref}
                            src="/images/decorations/square-1.png" 
                            alt="square decoration" 
                            width={100} 
                            height={100} 
                            className="absolute top-26 left-18 w-6 h-6 z-20 hidden lg:block"
                        />
                        <Image 
                            ref={square2Ref}
                            src="/images/decorations/square-2.png" 
                            alt="square decoration" 
                            width={100} 
                            height={100} 
                            className="absolute top-24 left-18 w-8 h-8 z-10 hidden lg:block"
                        />
                        <Image 
                            ref={square3Ref}
                            src="/images/decorations/square-3.png" 
                            alt="square decoration" 
                            width={100} 
                            height={100} 
                            className="absolute top-14 left-30 w-4 h-4 hidden lg:block"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
