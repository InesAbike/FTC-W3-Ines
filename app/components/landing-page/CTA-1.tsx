import React from 'react'
import Image from 'next/image'
import Button from '../ui/Button'
import { MdOutlinePlayCircle } from 'react-icons/md'

const CTA_1 = () => {
    return (
            <section className='md:py-12 py-6 sm:px-6 lg:px-8 px-4 max-w-7xl mx-auto'>
                <div className='bg-primary-dark-blue rounded-2xl relative overflow-hidden'>
                    <Image
                        src="/images/cta1-decoration-1.png"
                        alt="cta-1-decoration"
                        width={500}
                        height={500}
                        className="absolute bottom-0 left-0 md:w-1/2 w-full z-10" />
                    <Image
                        src="/images/cta1-decoration-2.png"
                        alt="cta-1-decoration"
                        width={500}
                        height={500}
                        className="absolute top-0 right-0 z-10 w-2/3 h-full md:flex hidden" />
                    <Image
                        src="/images/cta1-decoration-3.png"
                        alt="cta-2-decoration"
                        width={500}
                        height={500}
                        className="absolute top-0 right-0 z-10 w-full h-2/3 md:hidden flex" />

                    <div className='relative grid md:grid-cols-2 grid-cols-1 items-end justify-between px-4 sm:px-6 lg:px-8 lg:pt-16 pt-10 z-20'>
                        <Image
                            src="/images/cta1-img.png"
                            alt="cta-1"
                            width={500}
                            height={600}
                            className="relative z-30 w-[500px] md:h-[300px] h-[200px] md:order-1 order-2"
                        />
                        <div className="flex flex-col md:text-right text-center gap-4 md:items-end items-center z-30 w-full md:mb-16 mb-10 md:order-2 order-1">
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark-blue leading-tight">
                                    One More Friend
                                </h1>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-dark-blue leading-tight">
                                    Thousands More Fun!
                                </h2>
                            </div>

                            <p className="text-xs text-neutral-80 max-w-lg font-medium leading-relaxed">
                                Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                            </p>

                            {/* Boutons d'action */}
                            <div className="flex flex-row md:justify-end justify-center gap-4 pt-4 w-full">
                                <Button variant='outline' size='md' >
                                    <span className="flex items-center gap-2">View Intro
                                        <MdOutlinePlayCircle size={20} />
                                    </span>
                                </Button>
                                <Button variant='primary' size='md' className='text-white'>Explore Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default CTA_1