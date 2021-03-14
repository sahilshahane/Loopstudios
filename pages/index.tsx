import { nanoid } from 'nanoid'
import Head from 'next/head'
import ImageN from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const SeeAllBtn = ({ className }: any) => {
    return (
        <button
            type="button"
            className={`transition uppercase tracking-widest hover:text-white hover:bg-black border-black border-2 h-full px-9 py-2 ${className}`}
            style={{ letterSpacing: '.5rem' }}
        >
            <div>See All</div>
        </button>
    )
}

const HamburgerMenuBtn = ({ showMenu, setshowMenu }: any) => {
    const style = {
        container: {
            height: '32px',
            width: '32px',
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
        },
        line: {
            height: '2px',
            width: '20px',
            background: 'white',
            transition: 'all 0.2s ease',
        },
        lineTop: {
            transform: showMenu ? 'rotate(45deg)' : 'none',
            transformOrigin: 'top left',
            marginBottom: '5px',
        },
        lineMiddle: {
            opacity: showMenu ? 0 : 1,
            transform: showMenu ? 'translateX(100%)' : 'none',
        },
        lineBottom: {
            transform: showMenu ? 'translateX(-1px) rotate(-45deg)' : 'none',
            transformOrigin: 'top left',
            marginTop: '5px',
        },
    }
    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            style={style.container}
            onClick={() => setshowMenu(!showMenu)}
            onKeyPress={() => setshowMenu(!showMenu)}
            className="float-right"
        >
            <div style={{ ...style.line, ...style.lineTop }} />
            <div style={{ ...style.line, ...style.lineMiddle }} />
            <div style={{ ...style.line, ...style.lineBottom }} />
        </div>
    )
}

const MobileMenu = ({ showMenu }: any) => {
    return (
        <div
            className={`absolute text-4xl slogan uppercase bottom-0 mb-6 transition-all mobileMenu z-10 text-white lg:hidden flex flex-col flex-nowrap ${
                showMenu ? 'opacity-100' : 'opacity-0'
            } duration-500`}
        >
            <div>
                <a href="#">About</a>
            </div>
            <div>
                <a href="#">Careers</a>
            </div>
            <div>
                <a href="#">Events</a>
            </div>
            <div>
                <a href="#">Products</a>
            </div>
            <div>
                <a href="#">Support</a>
            </div>
        </div>
    )
}

export default function Home() {
    const [batchImages] = useState([
        'deep earth',
        'night arcade',
        'soccer team vr',
        'the grid',
        'from above vr',
        'pocket borealis',
        'the curiosity',
        'make it fisheye',
    ])
    const [showMenu, setShowMenu] = useState(false)
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false)
    const [MobileMenuDelay] = useState(300)

    useEffect(() => {
        setTimeout(() => setMobileMenuVisible(showMenu), MobileMenuDelay)
    }, [showMenu, setShowMenu])
    return (
        <div>
            <Head>
                <title>Frontend Mentor | Loopstudios landing page</title>
                <link rel="icon" href="/images/favicon-32x32.png" />
            </Head>

            <main className="relative mx-auto ">
                <div
                    className={`lg:hidden absolute transition-all ${
                        showMenu ? 'h-screen' : 'h-0'
                    } w-full bg-black z-10 duration-500`}
                >
                    <div className="py-8 grid grid-cols-2 z-10 container-resp">
                        <MobileMenu showMenu={isMobileMenuVisible} />
                    </div>
                </div>
                <section
                    id="home"
                    className="h-screen relative text-white bg-cover bg-center bg-fixed bg-no-repeat"
                    style={{
                        backgroundImage: `url('/images/desktop/image-hero.jpg')`,
                    }}
                >
                    {/* <div
                        className="absolute h-full w-full z-0 "
                        style={{ backgroundColor: 'black' }}
                    /> */}
                    <nav className="relative z-10 pt-4 container-resp ">
                        <div className="grid grid-cols-2  ">
                            <div className="my-auto">
                                <img
                                    src="/images/logo.svg"
                                    alt="site-logo"
                                    className="w-36"
                                />
                            </div>
                            <div className="hidden lg:block">
                                <div
                                    id="menu"
                                    className="flex flex-row flex-nowrap float-right"
                                >
                                    <div>
                                        <a href="#">About</a>
                                    </div>
                                    <div>
                                        <a href="#">Careers</a>
                                    </div>
                                    <div>
                                        <a href="#">Events</a>
                                    </div>
                                    <div>
                                        <a href="#">Products</a>
                                    </div>
                                    <div>
                                        <a href="#">Support</a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:hidden">
                                <HamburgerMenuBtn
                                    showMenu={showMenu}
                                    setshowMenu={setShowMenu}
                                />
                            </div>
                        </div>
                    </nav>
                    <div
                        className="relative container-resp  mt-5 lg:mt-0 flex"
                        style={{ height: '80%' }}
                    >
                        <h1 className="self-center mx-auto md:mx-0 text-4xl w-11/12 md:w-2/3 2xl:w-full  md:text-6xl lg:text-7xl text-center md:text-left 2xl:text-center uppercase slogan border-4 p-4 md:p-7 md:pb-5 xl:p-9 leading-tight">
                            Immersive experiences that deliver
                        </h1>
                    </div>
                </section>
                <section className="mt-28 container-resp">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div
                            style={{
                                backgroundImage: `url('/images/desktop/image-interactive.jpg')`,
                                height: '30rem',
                            }}
                            className="bg-no-repeat bg-center bg-cover flex-grow-0 flex-shrink-0"
                        />

                        <div className="bg-white relative bottom-0 mt-auto transform p-5 md:p-20 lg:pb-0 lg:pr-0 lg:pl-20 lg:pt-20 text-center lg:text-left lg:-translate-x-20 ">
                            <h1 className="uppercase text-title leading-tight slogan mb-6">
                                The leader in interactive VR
                            </h1>
                            <p className="text-black text-opacity-40 leading-relaxed lg:text-justify">
                                Founded in 2011, Loopstudios has been producing
                                world-class virtual reality projects for some of
                                the best companies around the globe. Our
                                award-winning creations have transformed
                                businesses through digital experiences that bind
                                to their brand.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="mt-28 container-resp">
                    <div className="grid grid-cols-1 md:grid-cols-2 mb-11">
                        <div className="text-center md:text-left">
                            <h1 className="text-title slogan uppercase ">
                                Our creations
                            </h1>
                        </div>

                        <div className="hidden md:block my-auto">
                            <SeeAllBtn className="float-right" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 cursor-pointer">
                        {batchImages.map((name) => {
                            const imageName = `image-${name
                                .split(' ')
                                .join('-')}.jpg`
                            return (
                                <div
                                    className="uppercase mx-auto relative overflow-hidden shadow-sm"
                                    key={nanoid()}
                                    onMouseEnter={(e) => {
                                        e.currentTarget?.children[0].children[2].classList.add(
                                            'scale-125'
                                        )
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget?.children[0].children[2].classList.remove(
                                            'scale-125'
                                        )
                                    }}
                                >
                                    <picture>
                                        <source
                                            srcSet={`/images/mobile/${imageName}`}
                                            media="(max-width: 1024px)"
                                        />
                                        <source
                                            srcSet={`/images/desktop/${imageName}`}
                                            media="(min-width: 1025px)"
                                        />
                                        <img
                                            srcSet={`/images/mobile/${imageName}`}
                                            alt={name}
                                            className="darken z-0 transform transition duration-300"
                                        />
                                    </picture>

                                    <div className="absolute z-10 text-white bottom-0 text-sub-title slogan pb-3 pl-3 lg:p-8 transition duration-300">
                                        {name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="flex md:hidden justify-center mt-8">
                        <SeeAllBtn />
                    </div>
                </section>
            </main>

            <footer className="bg-black text-white mt-28 container-resp h-full pt-16 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-full lg:col-span-1 mb-8">
                        <img
                            className="mx-auto md:mx-0"
                            src="/images/logo.svg"
                            alt="LoopStudio Logos"
                        />
                        <ul className="flex flex-nowrap flex-col md:flex-row justify-center md:justify-start nav text-sm">
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Events</a>
                            </li>
                            <li>
                                <a href="#">Products</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-full lg:col-span-1 bg-black text-center md:text-right">
                        <div className="flex flex-nowrap justify-center md:justify-end mb-8 gap-4">
                            <a href="#">
                                <img
                                    src="/images/icon-facebook.svg"
                                    alt="facebook"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="/images/icon-twitter.svg"
                                    alt="facebook"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="/images/icon-pinterest.svg"
                                    alt="facebook"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="/images/icon-instagram.svg"
                                    alt="facebook"
                                />
                            </a>
                        </div>
                        <div className="opacity-50 text-sm">
                            © 2021 Loopstudios. All rights reserved.
                        </div>
                    </div>
                </div>
                <div className="attribution mt-8">
                    Challenge by{' '}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by{' '}
                    <a href="https://github.com/sahilbest999">Sahil Shahane</a>.
                </div>
            </footer>
        </div>
    )
}
