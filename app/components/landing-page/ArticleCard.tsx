
'use client'
import React from 'react';
import Image from 'next/image';
import { Article } from '@/types/article';

interface ArticleCardProps extends Article {
    className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  image,
  category,
  excerpt,
  className = ''
}) => {

  return (
    <div className={`bg-white p-2 rounded-xl shadow-sm h-full border border-neutral-20 overflow-hidden hover:shadow-md transition-shadow duration-300 ${className}`}>
      {/* Image Container */}
      <div className="rounded-lg relative overflow-hidden">
        <Image
          width={500}
          height={500}
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-2">
        <div className="flex flex-col gap-2">
          <p className="bg-accent-blue-teen max-w-28 py-1 px-2 text-center text-white text-xs rounded-full font-semibold">
           {category}
          </p>
          <h1 className='text-neutral-100 font-bold text-base '>{title}</h1>
          <p className="text-neutral-80 line-clamp-4">
            {excerpt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
