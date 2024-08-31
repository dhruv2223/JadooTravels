import company1 from "../assets/image 25.png";
import company5 from "../assets/image 28.png";
import company2 from "../assets/image 27.png";
import company3 from "../assets/image 30.png";
import company4 from "../assets/image 31.png";

export const Companies = () => {
  return (
    <div className="flex justify-center items-center space-x-3 lg:space-x-44">
      <div>
        <img className="grayscale hover:filter-none" src={company2}></img>
      </div>

      <div>
        <img className="grayscale hover:filter-none" src={company4}></img>
      </div>
      <div>
        <img className="grayscale hover:filter-none" src={company1}></img>
      </div>
      <div>
        <img className="grayscale hover:filter-none" src={company3}></img>
      </div>

      <div>
        <img className="grayscale hover:filter-none" src={company5}></img>
      </div>
    </div>
  );
};
