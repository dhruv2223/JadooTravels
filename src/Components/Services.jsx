export const Services = ({ img, heading, subheading }) => {
  return (
    <div className="shadow-xl w-[267px] h-[314px] rounded-[36px] hover:shadow-2xl">
      <div className="flex items-center justify-center">
        <img src={img}></img>
      </div>

      <div className="text-center font-semibold">
        <h2>{heading}</h2>
      </div>
      <div className="text-center text-wrap w-[181px] mx-auto">
        {subheading}
      </div>
    </div>
  );
};
