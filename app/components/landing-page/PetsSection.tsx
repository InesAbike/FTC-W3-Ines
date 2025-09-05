'use client'
import { useEffect, useRef } from "react";
import { usePets } from "../../hooks/usePets";
import PetCard from "./PetCard";
import Button from "../ui/Button";
import Link from "next/link";
import { gsap } from "gsap";

const PetsSection: React.FC = () => {
    const { pets, loading, hasMore, loadMore, fetchPets } = usePets();
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Charger la première page au montage
    useEffect(() => {
        fetchPets(1);
    }, [fetchPets]);

    // Animation GSAP pour les nouvelles cartes
    useEffect(() => {
        if (pets.length > 0 && containerRef.current) {
            // Récupérer uniquement les nouvelles cartes (celles qui n'ont pas encore été animées)
            const newCards = cardsRefs.current.filter(card => 
                card && !card.hasAttribute('data-animated')
            );

            if (newCards.length > 0) {
                // Animation d'entrée avec GSAP
                gsap.fromTo(newCards, 
                    {
                        opacity: 0,
                        y: 30,
                        scale: 0.95
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        ease: "power2.out",
                        stagger: 0.1, // Décalage entre chaque carte
                        onComplete: () => {
                            // Marquer les cartes comme animées
                            newCards.forEach(card => {
                                if (card) {
                                    card.setAttribute('data-animated', 'true');
                                }
                            });
                        }
                    }
                );
            }
        }
    }, [pets.length]); // Se déclenche quand le nombre de pets change

    // Animation du bouton "Load More" au hover
    useEffect(() => {
        const loadMoreBtn = document.querySelector('[data-load-more-btn]');
        if (loadMoreBtn) {
            const handleMouseEnter = () => {
                gsap.to(loadMoreBtn, {
                    scale: 1.05,
                    duration: 0.2,
                    ease: "power2.out"
                });
            };

            const handleMouseLeave = () => {
                gsap.to(loadMoreBtn, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            };

            loadMoreBtn.addEventListener('mouseenter', handleMouseEnter);
            loadMoreBtn.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                loadMoreBtn.removeEventListener('mouseenter', handleMouseEnter);
                loadMoreBtn.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    // Fonction pour gérer le load more avec animation
    const handleLoadMore = async () => {
        // Animation de loading sur le bouton
        const loadMoreBtn = document.querySelector('[data-load-more-btn]');
        if (loadMoreBtn && !loading) {
            gsap.to(loadMoreBtn, {
                rotationZ: 360,
                duration: 0.8,
                ease: "power2.inOut"
            });
        }

        await loadMore();
    };

    // Référence pour les cartes
    const setCardRef = (el: HTMLDivElement | null, index: number) => {
        cardsRefs.current[index] = el;
    };

    return (
        <section>
            <div className="md:py-12 py-6 bg-neutral-00 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section avec animation au mount */}
                <div 
                    ref={containerRef}
                    className="flex items-center justify-between mb-8"
                >
                    <div>
                        <p className="text-black text-base font-medium mb-1">What's new?</p>
                        <h2 className="text-xl lg:text-2xl font-bold text-primary-dark-blue">
                            Take A Look At Some Of Our Pets
                        </h2>
                    </div>
                    <Button 
                        variant='outline' 
                        size='md' 
                        onClick={handleLoadMore}
                        disabled={loading}
                        iconPosition="right" 
                        className="text-sm sm:flex hidden transition-all duration-200"
                        data-load-more-btn
                    >
                        {loading ? "Loading..." : "View more"}
                    </Button>
                </div>

                {/* Grille des animaux */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {pets.map((pet, index) => (
                        <div
                            key={`${pet.id}-${index}`}
                            ref={(el) => setCardRef(el, index)}
                            className="transform-gpu" // Optimisation GPU
                        >
                            <Link href={`/category/${pet.category.toLowerCase()}/${pet.id}`}>
                                <div className="group cursor-pointer">
                                    <PetCard 
                                        {...pet} 
                                        className="transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1"
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* États de chargement et messages */}
                {loading && (
                    <div className="text-center py-8">
                        <div className="inline-flex items-center gap-2 text-neutral-600">
                            <div className="animate-spin w-5 h-5 border-2 border-primary border-t-transparent rounded-full"></div>
                            <span>Loading more adorable pets...</span>
                        </div>
                    </div>
                )}

                {!hasMore && pets.length > 8 && (
                    <div className="text-center py-4">
                        <p className="text-neutral-600">
                            You've seen all our available pets! 🐾
                        </p>
                    </div>
                )}

                {/* Mobile Load More Button */}
                <div className="text-center sm:hidden block">
                    <Button
                        onClick={handleLoadMore}
                        disabled={loading || !hasMore}
                        className="w-full text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                        data-mobile-load-more
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                                Loading...
                            </span>
                        ) : !hasMore ? (
                            "All pets loaded"
                        ) : (
                            "Load More Pets"
                        )}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PetsSection;