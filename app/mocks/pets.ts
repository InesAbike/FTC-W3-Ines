import { RelatedPet, Pet } from "../types/pet";

// Mock complet des produits avec détails
export const petsMocks: Pet[] = [
  {
    id: 'MO231',
    slug: 'pomeranian-white-mo231',
    name: 'Pomeranian White',
    price: {
      amount: 6900000,
      currency: 'VND',
      formatted: '6,900,000 VND'
    },
    category: 'Dog',
    breed: 'Pomeranian',
    description: 'Beautiful Pomeranian puppy with excellent temperament and pure bloodline.',
    
    images: [
      {
        id: 'img1',
        url: '/images/pets/pet-1.png',
        alt: 'Pomeranian White main photo',
        isMain: true
      },
      {
        id: 'img2',
        url: '/images/pets/pet-1-thumb1.jpg',
        alt: 'Pomeranian White side view'
      },
      {
        id: 'img3',
        url: '/images/pets/pet-1-thumb2.jpg',
        alt: 'Pomeranian White playing'
      },
      {
        id: 'img4',
        url: '/images/pets/pet-1-thumb3.jpg',
        alt: 'Pomeranian White portrait'
      },
      {
        id: 'img5',
        url: '/images/pets/pet-1-thumb4.jpg',
        alt: 'Pomeranian White with toys'
      }
    ],
    
    characteristics: {
      sku: '1000076',
      gender: 'Male',
      age: '2 months',
      size: 'Small',
      color: 'Pure White',
      vaccinated: true,
      dewormed: true,
      cert: 'Yes (VKA)',
      microchip: true,
      location: 'Ho Chi Minh City, Vietnam',
      publishedDate: new Date('2024-03-01'),
      additionalInfo: 'Pure breed Pomeranian. Excellent body structure. With VKA certificate and microchip. Parents from champion bloodline.'
    },
    
    healthGuarantees: {
      healthGuarantee: true,
      identificationGuarantee: true,
      healthCertificate: 'Available',
      vaccinationRecord: 'Up to date'
    },
    seller: {
      id: 'seller1',
      name: 'Happy Paws Kennel',
      phone: '+84 901 234 567',
      email: 'contact@happypaws.vn',
      verified: true,
      responseTime: 'Usually responds within 1 hour',
      location: 'Ho Chi Minh City'
    },
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-15'),
    isAvailable: true,
    viewCount: 1250,
    isFeatured: true,
    
    seoTitle: 'Pomeranian White Puppy for Sale - MO231 | Monito',
    seoDescription: 'Beautiful Pomeranian White puppy available. 2 months old, vaccinated, microchipped. Contact us today!',
    seoKeywords: ['pomeranian', 'white puppy', 'dog for sale', 'vietnam', 'pure breed']
  },

  {
    id: 'MO502',
    slug: 'poodle-tiny-yellow-mo502',
    name: 'Poodle Tiny Yellow',
    price: {
      amount: 3900000,
      currency: 'VND',
      formatted: '3,900,000 VND'
    },
    category: 'Dog',
    breed: 'Poodle',
    description: 'Adorable tiny Poodle with beautiful yellow coat and playful personality.',
    
    images: [
      {
        id: 'img1',
        url: '/images/pets/pet-2.png',
        alt: 'Poodle Tiny Yellow main photo',
        isMain: true
      },
      {
        id: 'img2',
        url: '/images/pets/pet-2-thumb1.jpg',
        alt: 'Poodle Tiny Yellow side view'
      },
      {
        id: 'img3',
        url: '/images/pets/pet-2-thumb2.jpg',
        alt: 'Poodle Tiny Yellow playing'
      }
    ],
    
    characteristics: {
      sku: '1000077',
      gender: 'Female',
      age: '2 months',
      size: 'Small',
      color: 'Light Yellow',
      vaccinated: true,
      dewormed: true,
      cert: 'Yes (VKA)',
      microchip: true,
      location: 'Hanoi, Vietnam',
      publishedDate: new Date('2024-02-28'),
      additionalInfo: 'Tiny Poodle with excellent temperament. Perfect for apartment living. Health tested parents.'
    },
    
    healthGuarantees: {
      healthGuarantee: true,
      identificationGuarantee: true,
      healthCertificate: 'Available',
      vaccinationRecord: 'Up to date'
    },

    seller: {
      id: 'seller2',
      name: 'Elite Poodles Vietnam',
      phone: '+84 902 345 678',
      email: 'info@elitepoodles.vn',
      verified: true,
      responseTime: 'Usually responds within 2 hours',
      location: 'Hanoi'
    },
  
    createdAt: new Date('2024-02-28'),
    updatedAt: new Date('2024-03-10'),
    isAvailable: true,
    viewCount: 890,
    isFeatured: false,
    
    seoTitle: 'Tiny Poodle Yellow Puppy for Sale - MO502 | Monito',
    seoDescription: 'Adorable tiny Poodle puppy with yellow coat. Perfect for families. Vaccinated and health guaranteed.',
    seoKeywords: ['poodle', 'tiny poodle', 'yellow puppy', 'dog for sale', 'vietnam']
  },

  {
    id: 'MO610',
    slug: 'shiba-inu-sepia-mo610',
    name: 'Shiba Inu Sepia',
    price: {
      amount: 14000000,
      currency: 'VND',
      formatted: '14,000,000 VND'
    },
    category: 'Dog',
    breed: 'Shiba Inu',
    description: 'Beautiful Shiba Inu with classic sepia coloring. Excellent temperament and champion bloodline.',
    
    images: [
      {
        id: 'img1',
        url: '/images/pets/pet-3.png',
        alt: 'Shiba Inu Sepia main photo',
        isMain: true
      },
      {
        id: 'img2',
        url: '/images/pets/pet-3-thumb1.jpg',
        alt: 'Shiba Inu Sepia side view'
      },
      {
        id: 'img3',
        url: '/images/pets/pet-3-thumb2.jpg',
        alt: 'Shiba Inu Sepia playing'
      },
      {
        id: 'img4',
        url: '/images/pets/pet-3-thumb3.jpg',
        alt: 'Shiba Inu Sepia portrait'
      },
      {
        id: 'img5',
        url: '/images/pets/pet-3-thumb4.jpg',
        alt: 'Shiba Inu Sepia outdoor'
      }
    ],
    
    characteristics: {
      sku: '1000078',
      gender: 'Female',
      age: '2 months',
      size: 'Small',
      color: 'Apricot & Tan',
      vaccinated: true,
      dewormed: true,
      cert: 'Yes (MKA)',
      microchip: true,
      location: 'Vietnam',
      publishedDate: new Date('2022-10-12'),
      additionalInfo: 'Pure breed Shiba Inu. Good body structure. With MKA cert and Microchip. Father from champion lineage.'
    },
    
    healthGuarantees: {
      healthGuarantee: true,
      identificationGuarantee: true,
      healthCertificate: 'MKA Certified',
      vaccinationRecord: 'Complete vaccination schedule'
    },
    
    seller: {
      id: 'seller3',
      name: 'Premium Shiba Kennel',
      phone: '+84 903 456 789',
      email: 'contact@premiumshiba.vn',
      verified: true,
      responseTime: 'Usually responds within 30 minutes',
      location: 'Ho Chi Minh City'
    },
    createdAt: new Date('2022-10-12'),
    updatedAt: new Date('2024-03-15'),
    isAvailable: true,
    viewCount: 2350,
    isFeatured: true,
    seoTitle: 'Shiba Inu Sepia Puppy for Sale - SKU #1000078 | Monito',
    seoDescription: 'Premium Shiba Inu Sepia puppy from champion bloodline. MKA certified, microchipped, fully vaccinated.',
    seoKeywords: ['shiba inu', 'sepia puppy', 'japanese dog', 'champion bloodline', 'vietnam']
  },

  {
    id: 'MO512',
    slug: 'alaskan-malamute-grey-mo512',
    name: 'Alaskan Malamute Grey',
    price: {
      amount: 8900000,
      currency: 'VND',
      formatted: '8,900,000 VND'
    },
    category: 'Dog',
    breed: 'Alaskan Malamute',
    description:'Beautiful Alaskan Malamute with a striking grey coat and friendly demeanor.',
    images: [
      {
        id: 'img1',
        url: '/images/pets/pet-4.png',
        alt: 'Alaskan Malamute Grey main photo',
        isMain: true
      },
      {
        id: 'img2',
        url: '/images/pets/pet-4-thumb1.jpg',
        alt: 'Alaskan Malamute Grey side view'
      },
      {
        id: 'img3',
        url: '/images/pets/pet-4-thumb2.jpg',
        alt: 'Alaskan Malamute Grey playing'
      },
      {
        id: 'img4',
        url: '/images/pets/pet-4-thumb3.jpg',
        alt: 'Alaskan Malamute Grey portrait'
      },
      {
        id: 'img5',
        url: '/images/pets/pet-4-thumb4.jpg',
        alt: 'Alaskan Malamute Grey outdoor'
      }
    ],
    
    characteristics: {
      sku: '1000079',
      gender: 'Male',
      age: '2 months',
      size: 'Large',
      color: 'Grey & White',
      vaccinated: true,
      dewormed: true,
      cert: 'Yes (MKA)',
      microchip: true,
      location: 'Hanoi, Vietnam',
      publishedDate: new Date('2024-03-01'),
      additionalInfo: 'Pure breed Alaskan Malamute. Excellent structure and temperament. With MKA certificate and microchip.'
    },
    
    healthGuarantees: {
      healthGuarantee: true,
      identificationGuarantee: true,
      healthCertificate: 'MKA Certified',
      vaccinationRecord: 'Complete vaccination schedule'
    },
    
    seller: {
      id: 'seller3',
      name: 'Premium Shiba Kennel',
      phone: '+84 903 456 789',
      email: 'contact@premiumshiba.vn',
      verified: true,
      responseTime: 'Usually responds within 30 minutes',
      location: 'Ho Chi Minh City'
    },
    createdAt: new Date('2022-10-12'),
    updatedAt: new Date('2024-03-15'),
    isAvailable: true,
    viewCount: 2350,
    isFeatured: true,
    seoTitle: 'Shiba Inu Sepia Puppy for Sale - SKU #1000078 | Monito',
    seoDescription: 'Premium Shiba Inu Sepia puppy from champion bloodline. MKA certified, microchipped, fully vaccinated.',
    seoKeywords: ['shiba inu', 'sepia puppy', 'japanese dog', 'champion bloodline', 'vietnam']
    
  },

  {
    id: 'MO515',
    slug: 'pembroke-corgi-cream-mo515',
    name: 'Pembroke Corgi Cream',
    price: {
      amount: 7900000,
      currency: 'VND',
      formatted: '7,900,000 VND'
    },
    category: 'Dog',
    breed: 'Pembroke Welsh Corgi',
    description: 'Adorable Pembroke Welsh Corgi with a beautiful cream coat and friendly personality.',
    images: [
      {
        id: 'img1',
        url: '/images/pets/pet-5.png',
        alt: 'Pembroke Corgi Cream main photo',
        isMain: true
      },
      {
        id: 'img2',
        url: '/images/pets/pet-5-thumb1.jpg',
        alt: 'Pembroke Corgi Cream side view'
      }
    ],
    characteristics: {
      sku: '1000080',
      gender: 'Male',
      age: '2 months',
      size: 'Small',
      color: 'Cream',
      vaccinated: true,
      dewormed: true,
      cert: 'Yes (VKA)',
      microchip: true,
      location: 'Ho Chi Minh City, Vietnam',
      publishedDate: new Date('2024-03-10'),
      additionalInfo: 'Pure breed Pembroke Welsh Corgi. Excellent temperament and health checked.'
    },
    healthGuarantees: {
      healthGuarantee: true,
      identificationGuarantee: true,
      healthCertificate: 'Available',
      vaccinationRecord: 'Up to date'
    },
    seller: {
      id: 'seller4',
      name: 'Corgi Lovers Vietnam',
      phone: '+84 904 567 890',
      email: 'contact@corgilovers.vn',
      verified: true,
      responseTime: 'Usually responds within 2 hours',
      location: 'Ho Chi Minh City'
    },
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-15'),
    isAvailable: true,
    viewCount: 850,
    isFeatured: false,
    seoTitle: 'Pembroke Corgi Cream Puppy for Sale - MO515 | Monito',
    seoDescription: 'Beautiful Pembroke Welsh Corgi puppy with cream coat. 2 months old, vaccinated, and health guaranteed.',
    seoKeywords: ['pembroke corgi', 'corgi puppy', 'dog for sale', 'vietnam', 'cream corgi']
  },
  {
    id: 'MO516',
    slug: 'pembroke-corgi-tricolor-mo516',
    name: 'Pembroke Corgi Tricolor',
    price: {
      amount: 9000000,
      currency: 'VND',
      formatted: '9,000,000 VND'
    },
    category: 'Dog',
    breed: 'Pembroke Welsh Corgi',
    description: 'Stunning tricolor Pembroke Welsh Corgi with excellent pedigree and friendly nature.',
    images: [
      {
        id: 'img1',
        url: '/images/pets/pet-6.png',
        alt: 'Pembroke Corgi Tricolor main photo',
        isMain: true
      },
      {
        id: 'img2',
        url: '/images/pets/pet-6-thumb1.jpg',
        alt: 'Pembroke Corgi Tricolor side view'
      }
    ],
    characteristics: {
      sku: '1000081',
      gender: 'Female',
      age: '2 months',
      size: 'Small',
      color: 'Black, Tan & White',
      vaccinated: true,
      dewormed: true,
      cert: 'Yes (VKA)',
      microchip: true,
      location: 'Hanoi, Vietnam',
      publishedDate: new Date('2024-03-12'),
      additionalInfo: 'Show quality Pembroke Welsh Corgi with excellent confirmation.'
    },
    healthGuarantees: {
      healthGuarantee: true,
      identificationGuarantee: true,
      healthCertificate: 'Available',
      vaccinationRecord: 'Up to date'
    },
    seller: {
      id: 'seller4',
      name: 'Corgi Lovers Vietnam',
      phone: '+84 904 567 890',
      email: 'contact@corgilovers.vn',
      verified: true,
      responseTime: 'Usually responds within 2 hours',
      location: 'Ho Chi Minh City'
    },
    createdAt: new Date('2024-03-12'),
    updatedAt: new Date('2024-03-15'),
    isAvailable: true,
    viewCount: 720,
    isFeatured: false,
    seoTitle: 'Pembroke Corgi Tricolor Puppy for Sale - MO516 | Monito',
    seoDescription: 'Beautiful tricolor Pembroke Welsh Corgi puppy. 2 months old, vaccinated, and health guaranteed.',
    seoKeywords: ['pembroke corgi', 'tricolor corgi', 'dog for sale', 'vietnam', 'pure breed']
  },
  {
    id: 'MO517',
    slug: 'pomeranian-white-mo517',
    name: 'Pomeranian White',
    price: {
      amount: 6500000,
      currency: 'VND',
      formatted: '6,500,000 VND'
    },
    category: 'Dog',
    breed: 'Pomeranian',
    description: 'Adorable white Pomeranian puppy with fluffy coat and sweet personality.',
    images: [
      {
        id: 'img1',
        url: '/images/pets/pet-7.png',
        alt: 'Pomeranian White main photo',
        isMain: true
      },
      {
        id: 'img2',
        url: '/images/pets/pet-7-thumb1.jpg',
        alt: 'Pomeranian White side view'
      }
    ],
    characteristics: {
      sku: '1000082',
      gender: 'Male',
      age: '2 months',
      size: 'Small',
      color: 'White',
      vaccinated: true,
      dewormed: true,
      cert: 'Yes (VKA)',
      microchip: true,
      location: 'Ho Chi Minh City, Vietnam',
      publishedDate: new Date('2024-03-14'),
      additionalInfo: 'Fluffy white Pomeranian with excellent temperament and health.'
    },
    healthGuarantees: {
      healthGuarantee: true,
      identificationGuarantee: true,
      healthCertificate: 'Available',
      vaccinationRecord: 'Up to date'
    },
    seller: {
      id: 'seller1',
      name: 'Happy Paws Kennel',
      phone: '+84 901 234 567',
      email: 'contact@happypaws.vn',
      verified: true,
      responseTime: 'Usually responds within 1 hour',
      location: 'Ho Chi Minh City'
    },
    createdAt: new Date('2024-03-14'),
    updatedAt: new Date('2024-03-15'),
    isAvailable: true,
    viewCount: 980,
    isFeatured: false,
    seoTitle: 'Pomeranian White Puppy for Sale - MO517 | Monito',
    seoDescription: 'Beautiful white Pomeranian puppy. 2 months old, vaccinated, and health guaranteed.',
    seoKeywords: ['pomeranian', 'white puppy', 'dog for sale', 'vietnam', 'fluffy']
  },
  {
    id: 'MO518',
    slug: 'poodle-tiny-dairy-cow-mo518',
    name: 'Poodle Tiny Dairy Cow',
    price: {
      amount: 5000000,
      currency: 'VND',
      formatted: '5,000,000 VND'
    },
    category: 'Dog',
    breed: 'Poodle',
    description: 'Adorable tiny Poodle with unique dairy cow-like markings.',
    images: [
      {
        id: 'img1',
        url: '/images/pets/pet-8.png',
        alt: 'Poodle Tiny Dairy Cow main photo',
        isMain: true
      },
      {
        id: 'img2',
        url: '/images/pets/pet-8-thumb1.jpg',
        alt: 'Poodle Tiny Dairy Cow side view'
      }
    ],
    characteristics: {
      sku: '1000083',
      gender: 'Male',
      age: '2 months',
      size: 'Small',
      color: 'Black & White',
      vaccinated: true,
      dewormed: true,
      cert: 'Yes (VKA)',
      microchip: true,
      location: 'Hanoi, Vietnam',
      publishedDate: new Date('2024-03-15'),
      additionalInfo: 'Unique colored tiny Poodle with excellent health and playful nature.'
    },
    healthGuarantees: {
      healthGuarantee: true,
      identificationGuarantee: true,
      healthCertificate: 'Available',
      vaccinationRecord: 'Up to date'
    },
    seller: {
      id: 'seller2',
      name: 'Elite Poodles Vietnam',
      phone: '+84 902 345 678',
      email: 'info@elitepoodles.vn',
      verified: true,
      responseTime: 'Usually responds within 2 hours',
      location: 'Hanoi'
    },
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-15'),
    isAvailable: true,
    viewCount: 650,
    isFeatured: false,
    seoTitle: 'Poodle Tiny Dairy Cow for Sale - MO518 | Monito',
    seoDescription: 'Unique tiny Poodle with dairy cow markings. 2 months old, vaccinated, and health guaranteed.',
    seoKeywords: ['poodle', 'tiny poodle', 'dairy cow poodle', 'dog for sale', 'vietnam']
  },


];

