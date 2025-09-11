'use client'
import { useEffect, useRef } from "react";
import { usePets } from "../../hooks/usePets";
import PetCard from "./PetCard";
import Button from "../ui/Button";
import Link from "next/link";

const PetsSection: React.FC = () => {
    const { pets, loading, fetchPets } = usePets();
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        fetchPets(1);
    }, [fetchPets]);

    const setCardRef = (el: HTMLDivElement | null, index: number) => {
        cardsRefs.current[index] = el;
    };

    return (
        <section>
            <div className="md:py-12 py-6 bg-neutral-00 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    ref={containerRef}
                    className="flex items-center justify-between mb-8"
                >
                    <div>
                        <p className="text-black text-base font-medium mb-1">What&apos;s new?</p>
                        <h2 className="text-xl lg:text-2xl font-bold text-primary-dark-blue">
                            Take A Look At Some Of Our Pets
                        </h2>
                    </div>

                  <Link href="/category/dog">
                  <Button 
                        variant='outline' 
                        size='md' 
                        disabled={loading}
                        iconPosition="right" 
                        className="text-sm sm:flex hidden transition-all duration-200"
                    >
                        {loading ? "Loading..." : "View more"}
                    </Button>
                  </Link>
                </div>

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

                {loading && (
                    <div className="text-center py-8">
                        <div className="inline-flex items-center gap-2 text-neutral-600">
                            <div className="animate-spin w-5 h-5 border-2 border-primary-dark-blue border-t-transparent rounded-full"></div>
                            <span>Loading adorable pets...</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PetsSection;