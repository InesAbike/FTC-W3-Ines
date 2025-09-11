import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { usePets } from "@/hooks/usePets";
import Link from "next/link";
import Image from "next/image";

const SearchBar = () => {
    const { loading, fetchPets, pets, reset } = usePets();
    const [search, setSearch] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);

        if (value.trim() === "") {
            reset();
        } else {
            fetchPets(1, value);
        }
    };


    const formatPrice = (priceObj: { amount: number; currency: string } | undefined) => {
        if (!priceObj) return 'Prix non disponible';
        return `${priceObj.amount.toLocaleString()} ${priceObj.currency}`;
    };

    return (
        <div className="relative">
            <div className="flex items-center gap-2 w-full p-4 py-2 rounded-full bg-white text-neutral-80">
                <div className="flex items-center pointer-events-none">
                    <FiSearch className="h-4 w-4 text-neutral-40" />
                </div>
                <div className="flex items-center justify-between">
                    <input
                        type="text"
                        value={search}
                        onChange={handleChange}
                        placeholder="Search something here!"
                        className="w-full placeholder:text-neutral-40 outline-none text-sm"
                    />
                    {loading &&
                        <div className="animate-spin w-4 h-4 border border-primary-dark-blue border-t-transparent rounded-full"></div>
                    }
                </div>
            </div>
            {
                !loading && pets.length > 0 && <div className="absolute mt-4 z-20 bg-white p-2 rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow transform duration-300">
                    {pets.map((pet, index) => (
                        <div
                            key={`${pet.id}-${index}`}
                            className="transform-gpu" // Optimisation GPU
                        >
                            <Link href={`/category/${pet.category.toLowerCase()}/${pet.id}`}>
                                <div className="group cursor-pointer">
                                    <div className="flex items-center justify-center">
                                        {/* Image Container */}
                                        <div className="rounded-lg relative overflow-hidden w-[100px] h-[100px]">
                                            <Image
                                                width={200}
                                                height={200}
                                                src={pet.images?.[0].url || ''}
                                                alt={pet.images?.[0].alt || ''}
                                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-2">
                                            <div className="mb-3">
                                                <p className="text-neutral-800 font-semibold text-base mb-1">
                                                    {pet.id} - {pet.name}
                                                </p>
                                                <div className="flex items-center space-x-4 text-neutral-600">
                                                    {pet.characteristics?.gender && (
                                                        <>
                                                            <div className="flex items-center space-x-1 text-xs">
                                                                <span className="">Genre:</span>
                                                                <span className="">{pet.characteristics.gender}</span>
                                                            </div>
                                                            {pet.characteristics.age && <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>}
                                                        </>
                                                    )}
                                                    {pet.characteristics?.age && (
                                                        <div className="flex items-center space-x-1 text-xs">
                                                            <span className="">Âge:</span>
                                                            <span className="text-nowrap">{pet.characteristics?.age}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-left text-neutral-800 font-bold text-sm">
                                                {formatPrice(pet.price)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="bg-gray-50" />
                            </Link>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default SearchBar;
