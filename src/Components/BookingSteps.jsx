import selection from "../assets/selection 1.svg";
import swim from "../assets/water-sport 1.svg";
import taxi from "../assets/taxi 1.svg";

export const BookingSteps = () => {
  return (
    <div className="m-auto">
      <div className="w-full text-left text-[em]">Easy and fast</div>
      <div className="w-full text-left text-[2em] font-[700px] leading-[64.5px] mb-4 lg:3em">
        Book your next trip in 3 easy steps
      </div>

      <div className="flex justify-start space-x-4 mb-4 ">
        <div className="bg-[#F0BB1F] rounded-[13px] w-[47px] h-[48px] flex justify-center items-center">
          <img className=" w-[22px] h-[22px] " src={selection}></img>
        </div>
        <div>
          <h2 className="font-semibold text-[#5E6282] m-0 text-left">
            Select Destination
          </h2>
          <div className="font-normal max-w-[327px] text-wrap text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
            tortor tempus.
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <div className="flex justify-start space-x-4 mb-4">
          <div className="bg-[#F15A2B] rounded-[13px] w-[47px] h-[48px] flex justify-center items-center">
            <img className=" w-[22px] h-[22px] " src={swim}></img>
          </div>
          <div>
            <h2 className="font-semibold text-[#5E6282] m-0 text-left">
              Select Destination
            </h2>
            <div className="font-normal max-w-[327px] text-wrap text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </div>
          </div>
        </div>

        <div className="flex justify-start space-x-4  ">
          <div className="bg-[#006380] rounded-[13px] w-[47px] h-[48px] flex justify-center items-center">
            <img className=" w-[22px] h-[22px] " src={taxi}></img>
          </div>
          <div>
            <h2 className="font-semibold text-[#5E6282] m-0 text-left">
              Select Destination
            </h2>
            <div className="font-normal max-w-[327px] text-wrap text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
