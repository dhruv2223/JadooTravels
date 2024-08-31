import email from "../assets/Group 46.svg";

export const Subscribe = () => {
  return (
    <div className="w-full mx-auto bg-[#DFD7F9] h-auto lg:h-[407px] rounded-bl-[20px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] flex flex-col justify-center items-center p-4 lg:p-8 lg:rounded-tl-[129px]">
      <div className="text-center w-[90%] sm:w-[80%] lg:w-[60%] text-[1.2em] sm:text-[1.5em] lg:text-[2em] mb-4 lg:mb-8">
        Subscribe to get information, latest news, and other interesting offers
        about Jadoo
      </div>
      <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 gap-x-4 w-full justify-center items-center">
        <div className="flex items-center bg-white p-2 rounded-md shadow-md w-full lg:w-auto">
          <img src={email} alt="Email icon" className="h-[35px] w-[35px]" />
          <input
            className="h-[35px] ml-4 p-2 border-none outline-none w-full lg:w-auto"
            placeholder="Your Email"
          />
        </div>
        <button className="bg-[#FF946D] text-white h-[35px] px-6 rounded-md shadow-md w-full lg:w-auto">
          Submit
        </button>
      </div>
    </div>
  );
};
