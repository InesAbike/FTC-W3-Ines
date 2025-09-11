'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Button from '../ui/Button'
import { MdOutlinePlayCircle } from 'react-icons/md'
import gsap from 'gsap';

const CTA_2 = () => {
    const iconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const icon = iconRef.current;
        if (!icon) return;

        const shake = () => {
            // Définir une animation shake
            gsap.fromTo(
                icon,
                { rotation: -10 },
                {
                    rotation: 10,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 5, // nombre de “tremblements”
                    ease: "power1.inOut",
                    onComplete: () => {
                        // Reprogrammer le shake aléatoire
                        const delay = Math.random() * 5 + 2; // entre 2 et 7 secondes
                        setTimeout(shake, delay * 1000);
                    },
                }
            );
        };

        // Lancer le premier shake après un délai aléatoire
        setTimeout(shake, Math.random() * 3 * 1000);
    }, []);

    return (
        <section className='md:py-12 py-6 sm:px-6 lg:px-8 px-4 max-w-7xl mx-auto'>
                <div className='bg-[#ffb775] rounded-2xl relative overflow-hidden'>
                    <Image
                        src="/images/decorations/cta2-decoration-1.png"
                        alt="cta-1-decoration"
                        width={500}
                        height={500}
                        className="absolute bottom-0 left-0 h-full w-1/2 z-10" />
                    <Image
                        src="/images/decorations/cta2-decoration-2.png"
                        alt="cta-1-decoration"
                        width={500}
                        height={500}
                        className="absolute bottom-0 right-0 z-10 w-2/3 h-2/3" />

                    <div className='grid md:grid-cols-2 grid-cols-1 items-center justify-between lg:px-16 px-10 z-20'>
                        <div className="flex flex-col gap-6 items-start z-30 w-full">
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark-blue leading-tight flex items-center gap-2">
                                    <span>Adoption</span>
                                    <div ref={iconRef} className="inline-block">
                                        <Image
                                            src="/images/paw.svg"
                                            alt="paw"
                                            width={40}
                                            height={40}
                                            className="text-sm cursor-pointer"
                                        />
                                    </div>
                                </h1>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-dark-blue leading-tight">
                                    We need help. so do they.
                                </h2>
                            </div>

                            <p className="text-sm text-neutral-80 max-w-lg leading-relaxed font-medium">
                                Adopt a pet and give it a home,
                                it will be love you back unconditionally.
                            </p>

                            {/* Boutons d'action */}
                            <div className="flex flex-row gap-4 justify-start w-full">
                                <Button variant='primary' size='md' className='text-white'>Explore Now</Button>
                                <Button variant='outline' size='md' className=''>
                                    <span className="flex items-center gap-2">View Intro
                                        <MdOutlinePlayCircle size={20} />
                                    </span>
                                </Button>
                            </div>
                        </div>
                        <Image
                            src="/images/cta2-img.png"
                            alt="cta-1-decoration"
                            width={500}
                            height={600}
                            className="relative z-30 w-[500px] h-[300px]"
                        />

                    </div>
                </div>
        </section>
    )
}

export default CTA_2