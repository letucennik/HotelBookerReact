import heroImage from "../assets/top_panel.jpg";

function HeroSection() {
  return (
    <section className="relative h-187.5 overflow-hidden text-white">
      <img
        src={heroImage}
        alt="Luxury hotel with pool"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 z-0 bg-black/25" />

      <div className="relative z-1 mx-auto h-full max-w-340 px-6 pt-37.5 md:px-12 lg:px-22.5">
        <div className="max-w-212.5">
          <div className="max-w-57.5 rounded-[14px] bg-[rgba(73,185,255,0.5)] px-3.25 py-1.5 font-outfit text-sm font-medium">
            The Ultimate Hotel Experience
          </div>

          <h1 className="mt-5 font-playfair text-6xl font-bold">
            Discover Your Perfect Getaway Destination
          </h1>

          <p className="mt-3.75 max-w-117.5 font-outfit text-[0.9375rem] font-normal leading-[1.1]">
            Unparalleled luxury and comfort await at the world’s most exclusive
            hotels and resorts. Start your journey today.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
