function FinalCTA(){
    return(
        <div className="relative w-screen h-[432px] gap-8 flex flex-col" >

            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('./final-cta-image.jpg')"}}></div>

            {/* Overlay color(the "tint") */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className= "relative z-10 text-white flex flex-col items-center justify-center h-full text-center space-y-6">
           <h1 className="leading-[59px] font-clash font-bold text-[48px] text-center">Start Your Journey With Sanaa</h1> 
           <p className="font-lato font-normal text-[24px] text-center leading-[173%]">Whether you're an artist ready to share your vision or a fan eager to connect, <br/>Sanaa is your space to grow, discover and belong.</p>
           <button className= "w-[152px] h-[40px] rounded-full pt-[6px] pr-4 pb-[6px] pl-4 bg-[#E10600] font-lato font-bold text-base leading-none text-center capitalize">Sign Up</button>
        </div>

        </div>
    )
}

export default FinalCTA;