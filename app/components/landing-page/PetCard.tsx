'use client'
import React from 'react';
import Image from 'next/image';
import { PetCardProps } from '@/types/pet';

const PetCard: React.FC<PetCardProps> = ({
  id,
  name,
  price,
  category,
  breed,
  images,
  characteristics,
  className = '',
}) => {
  const formatPrice = (priceObj: { amount: number; currency: string } | undefined) => {
    if (!priceObj) return 'Prix non disponible';
    return `${priceObj.amount.toLocaleString()} ${priceObj.currency}`;
  };

  // Récupération de l'image principale
  const mainImage = images?.find(img => img.isMain) || images?.[0];
  const imageUrl = mainImage?.url || '/placeholder-pet.jpg'; // Image par défaut
  const imageAlt = mainImage?.alt || name || 'Pet image';

  // Récupération des caractéristiques
  const gender = characteristics?.gender;
  const age = characteristics?.age;

  return (
    <div className={`bg-white p-2 rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow duration-300 ${className}`}>
      {/* Image Container */}
      <div className="rounded-lg relative overflow-hidden aspect-square">
        <Image
          width={500}
          height={500}
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-2">
        {/* Product ID and Name */}
        <div className="mb-3">
          <p className="text-neutral-800 font-semibold text-base mb-1">
            {id} - {name}
          </p>
        </div>

        {/* Details */}
        <div className="flex items-center justify-between text-sm mb-3">
          <div className="flex items-center space-x-4 text-neutral-600">
            {gender && (
              <>
                <div className="flex items-center space-x-1">
                  <span className="font-medium">Genre:</span>
                  <span className="font-bold">{gender}</span>
                </div>
                {age && <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>}
              </>
            )}
            {age && (
              <div className="flex items-center space-x-1">
                <span className="font-medium">Âge:</span>
                <span className="font-bold">{age}</span>
              </div>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="text-left">
          <p className="text-neutral-800 font-bold text-sm">
            {formatPrice(price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetCard;