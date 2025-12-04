import React from "react";


export default function Hero() {
    return(
        <section className="bg-black w-screen h-screen overflow-hidden">
            <div className="mx-auto flex min-h-[88vh] max-w-6xl items-center px-6 py-20">
                <div className="mx-auto max-w-3xl text-center pt-40">
                    <h1 className="font-clash text-balance text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                        Discover.Explore. 
                        <br/>
                        Support.Connect.
                    </h1>

                    <p className="font-lato mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
                        Sanaa is where Kenyan talent meets global opportunity. It is a bold space for creators to shine
                        and fans to connect. 
                    </p>

                    <div className="font-lato mt-10 flex justify-center">
                        <button size="lg"
                                className="rounded-full bg-red-600 px-12 py-2.5 text-white text-base font-semibold hover:bg-red-500">
                        Discover Creators Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

