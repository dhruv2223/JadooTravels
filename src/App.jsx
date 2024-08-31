import "./App.css";
import { Destinations } from "./Components/Destinations";
import { Services } from "./Components/Services";
import { Mid } from "./Components/Mid";
import { Footer } from "./Components/Footer";
import { Companies } from "./Components/Companies";
import { Subscribe } from "./Components/Subscribe";
import plane from "./assets/plane.png";
import { Travel } from "./Components/Travel";
import satellite from "./assets/satellite-dish.svg";
import mic from "./assets/image 25.svg";
import setting from "./assets/power-supply 1.svg";
import { BookingSteps } from "./Components/BookingSteps";
import { Trip } from "./Components/Trip";
import location1 from "./assets/location1.png";
import { NavBar } from "./Components/NavBar";
import location2 from "./assets/location2.jpeg";
import location3 from "./assets/location3.png";
function App() {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <Travel></Travel>
      </div>
      <p className="text-#5E6282 flex justify-center text-sm mt-6 mb-7">
        CATEGORY
      </p>
      <div className="font-bold text-5xl mb-16">We Offer Best Services</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16">
        <div className="flex justify-center items-center bg-center">
          <Services
            img={plane}
            heading={"Calculated Weather"}
            subheading={
              "Built Wicket longer admire do barton vanity itself do in it."
            }
          ></Services>
        </div>
        <div className="flex justify-center items-center mb-3 mt-5">
          <Services
            img={satellite}
            heading={"Calculated Weather"}
            subheading={
              "Built Wicket longer admire do barton vanity itself do in it."
            }
          ></Services>
        </div>
        <div className="flex justify-center items-center mb-3 mt-5">
          <Services
            img={mic}
            heading={"Calculated Weather"}
            subheading={
              "Built Wicket longer admire do barton vanity itself do in it."
            }
          ></Services>
        </div>

        <div className="flex justify-center items-center mb-3 mt-5">
          <Services
            img={setting}
            heading={"Calculated Weather"}
            subheading={
              "Built Wicket longer admire do barton vanity itself do in it."
            }
          ></Services>
        </div>
      </div>

      <p className="text-#5E6282 flex justify-center text-sm">Top Sellings</p>
      <div className="font-bold text-5xl mb-16">Top Destinations</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <div className="flex justify-center items-center ">
          <Destinations
            img={location1}
            location={"New York"}
            price={"1000"}
            days={"7"}
          ></Destinations>
        </div>
        <div className="flex justify-center items-center mt-5">
          <Destinations
            img={location2}
            location={"Paris"}
            price={"1200"}
            days={"5"}
          ></Destinations>
        </div>
        <div className="flex justify-center items-center mt-5">
          <Destinations
            img={location3}
            location={"Tokyo"}
            price={"1300"}
            days={"6"}
          ></Destinations>
        </div>
      </div>
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
          <BookingSteps></BookingSteps>
          <Trip
            location="Trip To Greece"
            date="14-29 June"
            planner="Dhruv Chotalia"
            noFOpPeople="5"
          ></Trip>
        </div>
      </div>
      <div className="mb-8">
        <Mid></Mid>
      </div>
      <div className="mb-8">
        <Companies></Companies>
      </div>
      <div className="mt-4">
        <Subscribe></Subscribe>
      </div>
      <div className="mt-8">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
