'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "../ui/Button";

const sellers = [
    "/logos/seller-1.svg",
    "/logos/seller-2.svg",
    "/logos/seller-3.svg",
    "/logos/seller-4.svg",
    "/logos/seller-5.svg",
    "/logos/seller-6.svg",
    "/logos/seller-7.svg",
];

const Sellers = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;
            if (!container) return;

            const totalWidth = container.scrollWidth; // largeur du set original

            const animate = () => {
                gsap.fromTo(
                    container,
                    { x: 0 },
                    {
                        x: -totalWidth,
                        duration: 20,
                        ease: "linear",
                        onComplete: () => {
                            gsap.set(container, { x: 0 });
                            animate(); // relance l'animation
                        },
                    }
                );
            };

            animate();
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="overflow-hidden w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-12 py-6 md:block hidden">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center justify-center gap-2">
                    <p className="text-black text-base font-medium">Proud to be part of </p>
                    <h2 className="text-xl lg:text-2xl font-bold text-primary-dark-blue">
                        Pet Sellers</h2>
                </div>

                <Button variant='outline' size='md' iconPosition="right" className="text-sm">
                    View all our sellers
                </Button>
            </div>
            <div
                ref={containerRef}
                className="flex space-x-8"
                style={{ whiteSpace: "nowrap" }}
            >
                {/* Doublement pour l'effet infini */}
                {sellers.concat(sellers).map((seller, index) => (
                    <img
                        key={index}
                        src={seller}
                        alt={`Seller ${index}`}
                        className="h-16 w-auto object-contain"
                    />
                ))}
            </div>
        </section>
    );
};

export default Sellers;
