import React from 'react'
import Image from 'next/image'
import Button from '../ui/Button'
import { MdOutlinePlayCircle } from 'react-icons/md'

const CTA = () => {
    return (
        <div className="lg:px-8 sm:px-6 px-4">
            <div className='bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] rounded-2xl max-w-7xl mx-auto relative overflow-hidden'>
                <Image
                    src="/images/decorations/cta-decoration.png"
                    alt="cta-1-decoration"
                    width={500}
                    height={500}
                    className="absolute md:top-0 right-0 bottom-0 z-10 md:w-2/3 w-full md:h-full h-1/3" />

                <div className='relative grid md:grid-cols-2 grid-cols-1 items-end justify-between lg:px-16 lg:pt-16 md:px-10 px-5 pt-10 z-20'>
                    <Image
                        src="/images/adorable-puppies.png"
                        alt="cta-1-decoration"
                        width={500}
                        height={600}
                        className="relative z-30 w-[500px] md:h-[300px] h-[200px] order-2 md:order-1"
                    />
                    <div className="flex flex-col gap-4 md:items-end md:text-right text-left items-start z-30 w-full md:mb-16 mb-10 order-1 md:order-2">
                        <div className='md:text-white text-neutral-80'>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                One More Friend
                            </h1>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                                Thousands More Fun!
                            </h2>
                        </div>

                        <p className="text-xs md:text-neutral-20 text-neutral-80  max-w-lg font-medium leading-relaxed">
                            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                        </p>

                        {/* Boutons d'action */}
                        <div className="flex sm:flex-row flex-col gap-4 sm:justify-end justify-center w-full">
                            <Button variant='outline' size='md' className='md:border-white md:text-white text-neutral-80 border-neutral-80' >
                                <span className="flex items-center gap-2">View Intro
                                    <MdOutlinePlayCircle size={20} />
                                </span>
                            </Button>
                            <Button variant='primary' size='md' className='md:bg-white bg-neutral-80 md:text-neutral-100 text-neutral-00'>Explore Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA