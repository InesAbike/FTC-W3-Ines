
'use client'
import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { useCurrency } from '@/contexts/CurrencyContext';

interface ProductCardProps extends Product {
    className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    name,
    image,
    price,
    type,
    size,
    tags = [],
    className = ''
}) => {
    const { formatPrice: formatCurrencyPrice } = useCurrency();
    const formatPrice = (priceObj: { amount: number; currency: string } | undefined) => {
        if (!priceObj) return 'Prix non disponible';
        return formatCurrencyPrice(priceObj.amount);
      };
    return (
        <div className={`h-full bg-white p-2 rounded-xl shadow-sm border border-neutral-20 overflow-hidden hover:shadow-md transition-shadow duration-300 ${className}`}>
            {/* Image Container */}
            <div className="rounded-lg relative overflow-hidden">
                <Image
                    width={500}
                    height={500}
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 p-2">
                {/* Product ID and Name */}
                <div className="">
                    <p className="text-neutral-100 font-semibold text-base">
                        {name}
                    </p>
                </div>

                {/* Details */}
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4 text-neutral-60">
                        <div className="flex items-center space-x-1">
                            <span className="font-medium">Product:</span>
                            <span className="font-bold">{type}</span>
                        </div>
                        <div className="w-1 h-1 bg-neutral-60 rounded-full"></div>
                        {
                            size && 
                            <div className="flex items-center space-x-1">
                            <span className="font-medium">Size:</span>
                            <span className="font-bold">{size}</span>
                        </div>
                        }

                    </div>
                </div>

                {/* Price */}
                <div className="text-left">
                    <p className="text-neutral-100 font-bold text-sm">
                    {formatPrice({ amount: price, currency: 'VND' })}
                    </p>
                </div>
                <div className="flex items-center flex-wrap gap-1 bg-secondary-yellow-40 p-2 text-primary-dark-blue font-bold text-sm rounded-lg">
                    <Image src="/images/gift-box.svg" alt="box" width={20} height={20} />
                    <div className="w-1 h-1 bg-neutral-60 rounded-full"></div>
                    {tags.map((tag, index) => (
                        <React.Fragment key={index}>
                                {tag}
                            {index < tags.length - 1 && (
                                <span>&</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
