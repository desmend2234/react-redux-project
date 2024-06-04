import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import Username from '../features/user/Username'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../features/user/userSlice'
import CreateUser from '../features/user/CreateUser'
import LazyLoad from 'react-lazy-load'
// import Swiper bundle with all modules installed

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import './styles.css'
// import required modules
import { Pagination } from 'swiper/modules'
function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const username = useSelector((state) => state.user.username)

    return (
        <div className="container mx-auto my-16 min-h-full text-center">
            <section>
                <div className="p-5">
                    <div className="mb-5 items-center justify-center">
                        <div className="mb-4 grid gap-4 text-wrap md:grid-cols-1 lg:grid-cols-2">
                            <article className="text-left">
                                <h3 className="mb-2 text-balance text-6xl font-semibold uppercase ">
                                    Embark on the Ultimate Journey
                                </h3>
                                <p className="mb-10 whitespace-normal break-words text-xl normal-case">
                                    Embark on the ultimate journey and discover
                                    breathtaking destinations, unforgettable
                                    experiences, and incredible adventures. Your
                                    dream trip awaits—start exploring today!
                                </p>{' '}
                                {username === '' ? (
                                    <CreateUser />
                                ) : (
                                    <div className="my-2 pt-20">
                                        <Button type="primary" to="/menu/all">
                                            Continue ordering, {username}
                                        </Button>
                                    </div>
                                )}
                            </article>
                            <img
                                className="object-fit sm:hidden md:flex"
                                src={
                                    'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                }
                            />{' '}
                        </div>
                    </div>
                </div>
            </section>
            <h1 className="my-12 px-4 text-xl font-semibold uppercase text-stone-700 md:text-3xl">
                The best travel
                <br />
                <span className="uppercase text-blue-500">
                    Discover Your Next Adventure
                </span>
            </h1>
            {username && (
                <div
                    className="absolute right-10 flex "
                    style={{ top: '8rem' }}
                >
                    <p className="hidden uppercase text-stone-700 md:flex">
                        Welcome,
                    </p>
                    <p className="items-center uppercase text-stone-700">
                        <Username />
                    </p>
                </div>
            )}

            <section className="my-14 bg-slate-100 py-10">
                <div className=" grid gap-3 p-5 md:lg:grid-cols-1 lg:grid-cols-3">
                    <div className="grid-flow-row grid-cols-2">
                        <img
                            className="object-fit "
                            src={
                                'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            }
                        />
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Harum expedita aspernatur sint ea saepe nam,
                            nisi fuga blanditiis doloremque tempora, quas
                            libero. Aspernatur, temporibus sequi nemo iure autem
                            rem explicabo.
                        </p>
                    </div>
                    <div className="grid-flow-row grid-cols-2">
                        <img
                            className="object-fit "
                            src={
                                'https://images.unsplash.com/photo-1471874708433-acd480424946?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            }
                        />
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Harum expedita aspernatur sint ea saepe nam,
                            nisi fuga blanditiis doloremque tempora, quas
                            libero. Aspernatur, temporibus sequi nemo iure autem
                            rem explicabo.
                        </p>
                    </div>{' '}
                    <div className="grid-flow-row grid-cols-2">
                        <img
                            className="object-fit "
                            src={
                                'https://images.unsplash.com/photo-1609971190265-ef3cc54b55ff?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            }
                        />
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Harum expedita aspernatur sint ea saepe nam,
                            nisi fuga blanditiis doloremque tempora, quas
                            libero. Aspernatur, temporibus sequi nemo iure autem
                            rem explicabo.
                        </p>
                    </div>
                </div>
            </section>
            {/* <section>
                <div className="relative  flex h-full items-center justify-center p-5">
                    <img
                        src={`https://images.unsplash.com/photo-1531275090635-95f0974c3073?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                        className="object-fit  opacity-80"
                    />
                    <div className="absolute inset-0 m-5 bg-sky-800 bg-opacity-20"></div>
                    <div className="absolute m-5 text-wrap	bg-slate-200/50 italic md:w-80 lg:w-8/12">
                        <h1 className="font-semibold capitalize tracking-tight text-slate-100 md:text-2xl lg:text-4xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aut, perferendis?
                        </h1>
                    </div>
                </div>
            </section> */}
            <section>
                <div className="my-14 h-96 w-full flex-col  rounded  bg-stone-100">
                    <h2 className="py-4 text-4xl font-semibold text-stone-700">
                        What client say
                    </h2>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper h-80"
                        slidesPerView={2}
                        spaceBetween={20}
                        breakpoints={{
                            324: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 },
                        }}
                    >
                        <SwiperSlide className="flex  flex-col items-center justify-center ">
                            <div className="my-2 w-96 rounded-3xl bg-white">
                                <div className="mt-4 flex items-center gap-2  text-wrap rounded-lg px-4 ">
                                    <img
                                        className="object-fit my-2 h-24 rounded-full"
                                        src={
                                            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        }
                                    />
                                    <div className="flex-col text-left">
                                        <h3 className="text-xl">
                                            Natalie Audrey
                                        </h3>
                                        <div>NewYork,USA</div>
                                    </div>
                                </div>
                                <p className="mx-4 mb-4 text-left">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Molestias facere soluta
                                    cumque voluptatem debitis, asperiores a nemo
                                    incidunt voluptates. Eius?
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="flex  flex-col items-center justify-center ">
                            <div className="my-2 w-96 rounded-3xl bg-white">
                                <div className="mt-4 flex items-center gap-2  text-wrap rounded-lg px-4 ">
                                    <img
                                        className="object-fit my-2 h-24 rounded-full"
                                        src={
                                            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        }
                                    />
                                    <div className="flex-col text-left">
                                        <h3 className="text-xl">
                                            Natalie Audrey
                                        </h3>
                                        <div>NewYork,USA</div>
                                    </div>
                                </div>
                                <p className="mx-4 mb-4 text-left">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Molestias facere soluta
                                    cumque voluptatem debitis, asperiores a nemo
                                    incidunt voluptates. Eius?
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="flex  flex-col items-center justify-center ">
                            <div className="my-2 w-96 rounded-3xl bg-white">
                                <div className="mt-4 flex items-center gap-2  text-wrap rounded-lg px-4 ">
                                    <img
                                        className="object-fit my-2 h-24 rounded-full"
                                        src={
                                            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        }
                                    />
                                    <div className="flex-col text-left">
                                        <h3 className="text-xl">
                                            Natalie Audrey
                                        </h3>
                                        <div>NewYork,USA</div>
                                    </div>
                                </div>
                                <p className="mx-4 mb-4 text-left">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Molestias facere soluta
                                    cumque voluptatem debitis, asperiores a nemo
                                    incidunt voluptates. Eius?
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="flex  flex-col items-center justify-center ">
                            <div className="my-2 w-96 rounded-3xl bg-white">
                                <div className="mt-4 flex items-center gap-2  text-wrap rounded-lg px-4 ">
                                    <img
                                        className="object-fit my-2 h-24 rounded-full"
                                        src={
                                            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        }
                                    />
                                    <div className="flex-col text-left">
                                        <h3 className="text-xl">
                                            Natalie Audrey
                                        </h3>
                                        <div>NewYork,USA</div>
                                    </div>
                                </div>
                                <p className="mx-4 mb-4 text-left">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Molestias facere soluta
                                    cumque voluptatem debitis, asperiores a nemo
                                    incidunt voluptates. Eius?
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="bg-gray-600 bg-[url('https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-no-repeat bg-blend-multiply">
                <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
                        Embark Now: Adventure Awaits!
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
                        Join us on an unforgettable journey. Explore new
                        destinations, create lasting memories, and experience
                        the adventure of a lifetime. Dont wait—start your
                        adventure today!
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link
                            to="/menu/all"
                            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            Get started
                            <svg
                                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
