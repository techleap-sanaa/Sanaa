function Header() {
  return (
    <div className="w-screen h-[80px] justify-between px-6 py-3 flex flex-row bg-black fixed top-0 left-0 z-10">
      <div className="flex flex-row w-full h-full justify-between text-center py-2 pr-[39px] pl-[39px] rounded-[50px] bg-white align-middle">
        <h1 className="font-adumu font-normal text-2xl leading-[100%] uppercase align-middle">SANAA</h1>
        <div className="flex flex-row gap-8">
          <p href="#" className="font-lato font-semibold text-base leading-[100%] uppercase">HOME</p>
          <p href="#" className="font-lato font-semibold text-base leading-[100%] uppercase">ABOUT US</p>
          <p href="#" className="font-lato font-semibold text-base leading-[100%] uppercase">FOR ARTISTS</p>
          <p href="#" className="font-lato font-semibold text-base leading-[100%] uppercase">CATEGORIES</p>
        </div>
        <div className="flex flex-row gap-8">
          <button className="px-4 py-2 border border-[#E10600] rounded-full font-lato font-bold text-base leading-none tracking-normal text-[#E10600]">Log In</button>
          <button className="pt-[6px] pb-[6px] px-4 rounded-full bg-[#E10600] font-lato font-bold text-base leading-none text-center text-white">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Header;
