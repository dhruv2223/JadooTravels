import img from "../assets/midimg.png";
export const Mid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <div className="text-[#5E6282] text-left">Testimonials</div>
        <div className="text-6xl text-left font-bold mb-6">
          What People Say About Us.
        </div>
      </div>

      <div>
        <img src={img} alt=""></img>
      </div>
    </div>
  );
};
