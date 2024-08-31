import Decore from "../assets/Decore.svg";
import play from "../assets/Polygon 1.svg";
import traveller from "../assets/Traveller 1.png";

export const Travel = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-between lg:py-20">
      {/* Text Content */}
      <div className="lg:max-w-lg text-center lg:text-left">
        <div className="text-orange-500 font-semibold">
          Best Destinations around the world
        </div>
        <div className="text-4xl font-bold my-4">
          Travel, enjoy and live a new and full life
        </div>
        <div className="text-gray-600 mb-8">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start">
          <button className="bg-[#F1A501] text-white px-6 py-2 rounded mb-4 sm:mb-0 sm:mr-4">
            Find out more
          </button>
          <div className="flex items-center justify-center">
            <div className="rounded-full w-10 h-10 flex items-center justify-center bg-red-500">
              <img src={play} alt="Play Button" className="w-4 h-4" />
            </div>
            <span className="ml-2">Play Demo</span>
          </div>
        </div>
      </div>

      {/* Traveller and Decore Images */}
      <div className="hidden lg:block relative w-full lg:w-auto">
        {/* Decore Background */}
        <img
          src={Decore}
          alt="Decore"
          className="absolute inset-0 lg:w-full lg:h-auto"
        />
        {/* Traveller Image */}
        <img
          src={traveller}
          alt="Traveller"
          className="relative z-10 lg:w-full lg:h-auto"
        />
      </div>
    </div>
  );
};
