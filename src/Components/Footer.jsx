import img from "../assets/Outbound.png";

export const Footer = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p className="font-bold text-left font-poppins text-4xl m-0 p-0">
            Jadoo.
          </p>
          <p className="mt-1 w-[45%] mb-4 text-[#5E6282] m-0 p-0 text-left text-sm">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div>
          <img src={img}></img>
        </div>
      </div>
      <div className="flex justify-center space-x-9 mt-2">
        <div>
          <h1 className="m-0 p-0 font-bold ">Company</h1>
          <p className="m-0 p-0 text-left text-sm text-[#6F727B]">About</p>
          <p className="m-0 p-0 text-left text-sm text-[#6F727B]">Carrers</p>
          <p className="m-0 p-0 text-left text-sm text-[#6F727B]">Mobile</p>
        </div>
        <div>
          <h1 className="m-0 p-0 font-bold text-left">Contact</h1>
          <p className="m-0 p-0 text-left text-[#6F727B] text-sm">help/faq</p>
          <p className="m-0 p-0 text-left text-sm text-[#6F727B] ">press</p>
          <p className="m-0 p-0 text-left text-sm text-[#6F727B] ">
            affiliates
          </p>
        </div>
        <div>
          <h1 className="font-bold m-0 p-0 text-left">More</h1>
          <p className="m-0 p-0 text-left text-[#6F727B] text-sm">Airlifees</p>
          <p className="m-0 p-0 text-left text-sm  text-[#6F727B]">Airlines</p>
          <p className="m-0 p-0 text-left text-sm  text-[#6F727B]">low fare</p>
        </div>
      </div>
    </div>
  );
};
