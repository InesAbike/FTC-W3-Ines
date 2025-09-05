'use client'
import Button from '@/components/ui/Button';
import HeartIcon from '@/components/ui/HeartIcon';
import React, { useEffect, useState } from 'react';
import { FaShoppingBag, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoChatboxEllipsesOutline, IoShareSocialOutline } from 'react-icons/io5';
import { useCustomers } from '@/hooks/useCustumers';
import { usePets } from '@/hooks/usePets';
import Image from 'next/image';
import PetCard from '@/components/landing-page/PetCard';
import { Pet } from '@/types/pet';
import Link from 'next/link';

const ProductDetail = ({ params }: { params: { id: string } }) => {
    const { customers, fetchCustomers } = useCustomers();
    const { pets, fetchPets, fetchPetsDetail, loading, error } = usePets();
    const { id } = params;

    const [selectedImage, setSelectedImage] = useState(0);
    const [hoveredImage, setHoveredImage] = useState<number | null>(null);
    const [currentPet, setCurrentPet] = useState<Pet | null>(null);

    // Charger les données au montage
    useEffect(() => {
        const loadData = async () => {
            // Charger les détails du pet
            const petDetail = await fetchPetsDetail(id);
            if (petDetail) {
                setCurrentPet(petDetail);
            }

            // Charger les autres pets et les customers
            fetchPets(1);
            fetchCustomers(1);
        };

        loadData();
    }, [id, fetchPetsDetail, fetchPets, fetchCustomers]);

    // Navigation du carousel d'images
    const nextImage = () => {
        if (currentPet?.images) {
            setSelectedImage((prev) => (prev + 1) % currentPet.images.length);
        }
    };

    const prevImage = () => {
        if (currentPet?.images) {
            setSelectedImage((prev) => (prev - 1 + currentPet.images.length) % currentPet.images.length);
        }
    };

    const handleImageHover = (index: number) => {
        setHoveredImage(index);
    };

    const handleImageLeave = () => {
        setHoveredImage(null);
    };

    const handleThumbnailClick = (index: number) => {
        setSelectedImage(index);
    };

    // Formatage de la date
    const formatDate = (date: Date | undefined) => {
        if (!date) return 'N/A';
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    // Génération du breadcrumb
    const generateBreadcrumb = (pet: Pet) => {
        return `Home > ${pet.category} > ${pet.size || 'Small'} ${pet.category} > ${pet.name}`;
    };

    // Affichage de l'état de chargement
    if (loading && !currentPet) {
        return (
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="animate-pulse">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <div className="aspect-square bg-gray-200 rounded-lg"></div>
                            <div className="flex space-x-2">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-20 h-20 bg-gray-200 rounded-lg"></div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Affichage de l'erreur
    if (error && !currentPet) {
        return (
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Erreur</h2>
                    <p className="text-gray-600">{error}</p>
                </div>
            </section>
        );
    }

    // Pet non trouvé
    if (!currentPet) {
        return (
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Animal non trouvé</h2>
                    <p className="text-gray-600">L'animal que vous recherchez n'existe pas ou n'est plus disponible.</p>
                </div>
            </section>
        );
    }

    const images = currentPet.images || [];
    const characteristics = currentPet.characteristics;

    return (
        <section>
            {/* Product Detail */}
            <div className="max-w-7xl mx-auto px-6 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border border-neutral-200 rounded-2xl p-4">
                    {/* Left - Images */}
                    <div className="space-y-4">
                        {/* Main Image with Carousel */}
                        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                            {images.length > 0 ? (
                                <Image
                                    width={500}
                                    height={500}
                                    src={images[selectedImage]?.url || '/api/placeholder/400/300'}
                                    alt={images[selectedImage]?.alt || currentPet.name}
                                    className="w-full h-full object-cover transition-all duration-300"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-500">Pas d'image disponible</span>
                                </div>
                            )}

                            {/* Navigation Arrows - Only show if multiple images */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
                                        aria-label="Previous image"
                                    >
                                        <FaChevronLeft size={20} />
                                    </button>

                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
                                        aria-label="Next image"
                                    >
                                        <FaChevronRight size={20} />
                                    </button>

                                    {/* Image Counter */}
                                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                                        {selectedImage + 1} / {images.length}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Thumbnail Images - Only show if multiple images */}
                        {images.length > 1 && (
                            <div className="flex space-x-2 overflow-x-auto pb-2">
                                {images.map((image, index) => (
                                    <button
                                        key={image.id}
                                        onClick={() => handleThumbnailClick(index)}
                                        onMouseEnter={() => handleImageHover(index)}
                                        onMouseLeave={handleImageLeave}
                                        className={`relative flex-shrink-0 w-40 h-40 rounded-lg overflow-hidden border-2 transition-all duration-300 ${selectedImage === index
                                            ? 'border-blue-500 shadow-lg scale-105'
                                            : hoveredImage === index
                                                ? 'border-blue-300 shadow-md scale-102'
                                                : 'border-neutral-300 hover:border-neutral-400'
                                            }`}
                                    >
                                        <Image
                                            width={80}
                                            height={80}
                                            src={image.url}
                                            alt={image.alt}
                                            className={`w-full h-full object-cover transition-all duration-300 ${selectedImage === index
                                                ? 'brightness-110'
                                                : hoveredImage === index
                                                    ? 'brightness-105'
                                                    : 'hover:brightness-110'
                                                }`}
                                        />

                                        {/* Active indicator */}
                                        {selectedImage === index && (
                                            <div className="absolute inset-0 bg-primary-dark-blue/20 flex items-center justify-center">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Guarantees */}
                        <div className="flex items-center justify-between rounded-xl p-4 bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]">
                            <div className="flex items-center text-sm text-neutral-60">
                               <Image src="/images/pet.svg" alt="heart" width={20} height={20} />
                                <span>100% health guarantee for pets</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-neutral-60">
                              <Image src="/images/guarantee.svg" alt="heart" width={20} height={20} />
                                <span>100% guarantee of pet identification</span>
                            </div>
                        </div>

                        {/* Social Share */}
                        <div className="flex items-center space-x-4 pt-2">
                            <button className="text-primary-dark-blue-80 flex items-center gap-1 font-bold hover:text-primary-dark-blue-60 transition-colors">
                                <IoShareSocialOutline /> Share:
                            </button>
                            <div className="flex space-x-2">
                                <button className="text-neutral-40 hover:text-primary-dark-blue-60 transition-colors">
                                    <FaFacebook size={20} />
                                </button>
                                <button className="text-neutral-40 hover:text-primary-dark-blue-60 transition-colors">
                                    <FaTwitter size={20} />
                                </button>
                                <button className="text-neutral-40 hover:text-primary-dark-blue-60 transition-colors">
                                    <FaInstagram size={20} />
                                </button>
                                <button className="text-neutral-40 hover:text-primary-dark-blue-60 transition-colors">
                                    <FaYoutube size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right - Product Info */}
                    <div className="space-y-6">
                        <div className="text-sm text-neutral-600">
                            {generateBreadcrumb(currentPet)}
                        </div>
                        <div className="text-sm text-neutral-600">
                            SKU #{characteristics?.sku || 'N/A'}
                        </div>

                        <h1 className="text-2xl font-bold text-neutral-100">{currentPet.name}</h1>
                        <div className="text-2xl font-bold text-primary-dark-blue-80">
                            {currentPet.price?.formatted || `${currentPet.price?.amount?.toLocaleString()} ${currentPet.price?.currency}`}
                        </div>

                        <div className="flex space-x-4">
                            <Button variant="primary" size='md' className='text-white'>
                                Contact us
                            </Button>
                            <Button variant="outline" size="md" className='text-neutral-700'>
                                <span className="flex items-center gap-2">
                                <IoChatboxEllipsesOutline size={20} />                                    Chat with Monito
                                </span>
                            </Button>
                        </div>

                        {/* Product Details Table */}
                        <div className="space-y-4 pt-6">
                            <div className="grid grid-cols-1 gap-4 text-sm">
                                <div className="space-y-3">
                                    {[
                                        { label: 'SKU', value: `#${characteristics?.sku || 'N/A'}` },
                                        { label: 'Gender', value: characteristics?.gender || 'N/A' },
                                        { label: 'Age', value: characteristics?.age || 'N/A' },
                                        { label: 'Size', value: characteristics?.size || 'N/A' },
                                        { label: 'Color', value: characteristics?.color || 'N/A' },
                                        { label: 'Vaccinated', value: characteristics?.vaccinated ? 'Yes' : 'No' },
                                        { label: 'Dewormed', value: characteristics?.dewormed ? 'Yes' : 'No' },
                                        { label: 'Cert', value: characteristics?.cert || 'No' },
                                        { label: 'Microchip', value: characteristics?.microchip ? 'Yes' : 'No' },
                                        { label: 'Location', value: characteristics?.location || 'N/A' },
                                        { label: 'Published Date', value: formatDate(characteristics?.publishedDate) },
                                        { label: 'Additional Information', value: characteristics?.additionalInfo || 'N/A' },
                                    ].map((item, index, array) => (
                                        <div 
                                            key={index} 
                                            className={`grid grid-cols-3 text-left text-sm font-medium text-neutral-60 justify-between pb-2 ${
                                                index < array.length - 1 ? 'border-b border-neutral-10' : ''
                                            }`}
                                        >
                                            <span className="col-span-1">{item.label}</span>
                                            <span className="col-span-2">:{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our lovely customer */}
                <div className="mt-16">
                    <h2 className="text-xl font-bold text-neutral-100 mb-6">Our lovely customer</h2>
                    <div className="flex space-x-4 overflow-x-auto">
                        {customers.map((customer, index) => (
                            <div key={customer.id || index} className="flex-shrink-0 w-80 h-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <Image
                                    width={250}
                                    height={500}
                                    src={customer.url}
                                    alt={`Customer photo ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* What's new? */}
                <div className="mt-16">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <div className="text-sm text-black mb-2">What's new?</div>
                            <Link href="/category/dog">
                                <h2 className="text-xl font-bold text-primary-dark-blue cursor-pointer">See More Puppies</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pets.filter(pet => pet.id !== currentPet.id).slice(0, 4).map((pet, index) => (
                            <div
                                key={pet.id}
                                className="animate-fadeIn"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <PetCard {...pet} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;