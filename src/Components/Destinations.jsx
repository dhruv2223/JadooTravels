import navigation from "../assets/navigation 1.png";
export const Destinations = ({ img, location, price, days }) => {
  return (
    <div className="w-[315px] h-[457px] rounded-[24px] shadow-lg">
      <div className="mb-3">
        <img
          className="object-cover rounded-[24px] w-[315px] h-[327px] "
          src={img}
        ></img>
      </div>
      <div className="h-[130px] ml-[20px] mr-[20px]">
        <div className="flex justify-between ">
          <div className="">{location}</div>
          <div>{`$${price}`}</div>
        </div>
        <div className="flex justify-start mt-[15px]">
          <img className="mr-[15px]" src={navigation}></img>
          <div>{`${days} days trip`}</div>
        </div>
      </div>
    </div>
  );
};
