import React, { useEffect } from 'react'
import { usePets } from '@/hooks/usePets'
import PetCard from '../landing-page/PetCard'
import Link from 'next/link'

const SmallDogs = () => {

    const { fetchPets, pets } = usePets()
    useEffect(() => {
        fetchPets(1)
    }, [])
    return (
        <div className='md:py-12 py-6 bg-neutral-00'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
                    <div className='col-span-1 md:block hidden'>
                        <h2 className="text-xl lg:text-2xl font-bold text-primary-dark-blue">
                            Filters
                        </h2>
                        <div className='flex flex-col'>
                            <div className='flex items-start flex-col gap-2 pb-4 mb-4 border-b border-neutral-20'>
                                <p className='text-neutral-100 text-base font-bold'>Gender</p>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Male</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-start flex-col gap-2 pb-4 mb-4 border-b border-neutral-20'>
                                <p className='text-neutral-100 text-base font-bold'>Color</p>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <span className='w-4 h-4 rounded-full bg-accent-pink-red'></span>
                                        <label htmlFor="">Red</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <span className='w-4 h-4 rounded-full bg-accent-orange-smile'></span>
                                        <label htmlFor="">Apricot</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <span className='w-4 h-4 rounded-full bg-black'></span>
                                        <label htmlFor="">Black</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <span className="w-4 h-4 rounded-full bg-[conic-gradient(black_0_50%,#CECECE_50%_100%)] flex items-center justify-center">
                                        </span>
                                        <label htmlFor="">Black & White</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <span className="w-4 h-4 rounded-full bg-[#CECECE]">
                                        </span>
                                        <label htmlFor="">Silver</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <span className="w-4 h-4 rounded-full bg-[#FFF7CE]">
                                        </span>
                                        <label htmlFor="">Tan</label>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-start flex-col gap-2 pb-4 mb-4 border-b border-neutral-20'>
                                <p className='text-neutral-100 text-base font-bold'>Price</p>
                                <div className='grid grid-cols-2 items-center gap-2 w-full'>
                                    <input type="number" placeholder="Min" className='ring-none p-2 shadow-xs shadow-neutral-20 rounded-md outline-none' />
                                    <input type="number" placeholder="Max" className='ring-none p-2 shadow-xs shadow-neutral-20 rounded-md outline-none' />
                                </div>
                            </div>
                            <div className='flex items-start flex-col gap-2 pb-4 mb-4 border-b border-neutral-20'>
                                <p className='text-neutral-100 text-base font-bold'>Breed</p>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Small</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Medium</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Large</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-3 col-span-1'>
                        <div className='flex items-center justify-between mb-8 col-span-1'>
                            <div className="flex items-end gap-2">
                                <p className="text-primary-dark-blue text-2xl font-bold">Small Dogs</p>
                                <h2 className="text-sm font-medium text-neutral-60">
                                    Pet Sellers
                                </h2>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {pets.map((pet, index) => (
                                    <div
                                        key={`${pet.id}-${index}`} // 👈 sécurise la clé car certains IDs se répètent dans ton mock
                                        className="animate-fadeIn"
                                        style={{ animationDelay: `${(index % 8) * 100}ms` }}
                                    >
                                        <Link href={`/category/${pet.category.toLowerCase()}/${pet.id}`}>
                                            <PetCard {...pet} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SmallDogs