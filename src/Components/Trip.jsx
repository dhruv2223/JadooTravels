import greece from "../assets/greece.jpeg";
import leaf from "../assets/leaf 1.svg";
import map from "../assets/map 1.svg";
import send from "../assets/send 2.svg";
import building from "../assets/building 1.svg";

export const Trip = ({ location, date, planner, noOfPeople }) => {
  return (
    <div className="m-6 h-[400px] w-[370px] rounded-[26px] border-[1px]">
      <div className="flex flex-col items-center">
        <img
          className="w-[321px] h-[161px] rounded-[24px] mt-6"
          src={greece}
          alt="Greece"
        />
      </div>
      <div className="m-6">
        <div className="mt-[8px] ">{location}</div>
        <div className="mt-[8px]">{`${date} | by ${planner}`}</div>
        <div className="flex justify-start space-x-4">
          <div className="rounded-full w-[36px] h-[36px] bg-[#F5F5F5] flex items-center justify-center">
            <img
              src={leaf}
              className="align-middle mr-[14px] w-[14px] h-[14px]"
              alt="Leaf"
            />
          </div>
          <div className="rounded-full w-[36px] h-[36px] bg-[#F5F5F5] flex items-center justify-center">
            <img src={map} className=" mr-[6px] w-[14px] h-[14px] " alt="Map" />
          </div>
          <div className="rounded-full w-[36px] h-[36px] bg-[#F5F5F5] flex items-center justify-center">
            <img
              src={send}
              className=" mr-[6px] h-[14px] w-[14px]"
              alt="Send"
            />
          </div>
        </div>
        <div className="flex flex-start">
          <img src={building} className="mr-[6px]" alt="Building" />
          <div>{`${noOfPeople} people going`}</div>
        </div>
      </div>
    </div>
  );
};
