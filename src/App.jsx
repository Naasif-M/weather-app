import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import { BsSearchHeart } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { TiWeatherCloudy } from "react-icons/ti";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import axios from "axios";

function App() {
  const [city, setCity] = useState("Coimbatore");
  const [weather, setWeather] = useState("Clear Sky");
  const [humidity, setHumidity] = useState(76);
  const [wind, setWind] = useState(3);
  const [visible, setVisible] = useState(2);
  const [inputCity, setInputCity] = useState("");
  const [temp, setTemp] = useState(16);
  const [hightemp, setHightemp] = useState(16);
  const [lowtemp, setLowtemp] = useState(16);
  const today = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[today.getDay()];
  const day = today.getDate(); // Day of the month (1–31)
  const monthName = today.toLocaleString("default", { month: "short" }); // Month (0–11) + 1
  const hours = today.getHours(); // Hours (0–23)
  const minutes = today.getMinutes();

  const apiKey = "ec02fd95f3215d0752baefb32f9369d5";

  useEffect(() => {
    const fetchstart = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=coimbatore&appid=${apiKey}&units=metric`
        );

        setVisible(res.data.visibility);
        setWind(res.data.wind.speed);
        setWeather(res.data.weather[0].description);
        setHumidity(res.data.main.humidity);
        setTemp(Math.round(res.data.main.temp));
        setHightemp(Math.round(res.data.main.temp_max));
        setLowtemp(Math.round(res.data.main.temp_min)); // rounding to int
      } catch (err) {
        alert("City not found!");
      }
    };
    fetchstart();
  }, []);
  const fetchWeatherByLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
          );
          setCity(res.data.name);
          setVisible(res.data.visibility);
          setWind(res.data.wind.speed);
          setWeather(res.data.weather[0].description);
          setHumidity(res.data.main.humidity);
          setTemp(Math.round(res.data.main.temp));
          setHightemp(Math.round(res.data.main.temp_max));
          setLowtemp(Math.round(res.data.main.temp_min));
        } catch (err) {
          alert("Failed to fetch weather for your location.");
        }
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const fetchWeather = async () => {
    if (!inputCity) return;

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`
      );
      setCity(inputCity);
      setVisible(res.data.visibility);
      setWind(res.data.wind.speed);
      setWeather(res.data.weather[0].description);
      setHumidity(res.data.main.humidity);
      setTemp(Math.round(res.data.main.temp));
      setHightemp(Math.round(res.data.main.temp_max));
      setLowtemp(Math.round(res.data.main.temp_min)); // rounding to int
    } catch (err) {
      alert("City not found!");
    }
  };
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/images/bg.jpg)",
          filter: "brightness(35%)",
        }}
        className=" z-0 fixed bg-cover bg-no-repeat inset-0 bg-center h-screen"
      ></div>
      <div className="selection:bg-[#FFA500] selection:text-black relative h-screen">
        <div
          className="shadow-md shadow-black overflow-hidden
 relative lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-[65%] top-[10%] backdrop-blur-sm border-[2px] lg:w-[40%] lg:h-[60%] h-[50%] border-gray-300 rounded-md bg-transparent text-gray-300 mx-10 "
        >
          <div className="absolute mt-6 right-0 flex gap-2 mr-4  ">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") fetchWeather();
              }}
              onChange={(e) => setInputCity(e.target.value)}
              placeholder="Type City"
              className=" pl-2 placeholder-gray-500 placeholder-opacity-75 text-black font-chewy tracking-wider text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFA500] bg-gray-300 min-w-[60px] lg:w-[300px]"
            ></input>
            <BsSearchHeart
              onClick={fetchWeather}
              className="hover:text-[#FFA500] p-[5px] hover:border-[#FFA500] text-3xl border-[1px] border-gray-300 rounded-md"
            />
            <IoLocationOutline
              onClick={fetchWeatherByLocation}
              className="hover:text-[#FFA500] hover:border-[#FFA500] p-[5px] text-3xl border-[1px] border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-20 ml-8 flex flex-col gap-6">
            <div>
              <h1 className=" capitalize lowercase font-chewy mb-2 tracking-wider text-3xl lg:text-4xl text-gray-300">
                {city}
              </h1>
              <h1 className="font-recursive lg:text-md text-sm font-light">
                {dayName +
                  " " +
                  day +
                  " " +
                  monthName +
                  " " +
                  hours +
                  ":" +
                  minutes}
              </h1>
            </div>
            <div>
              <div className="animate-pulse ml-2 flex gap-2 font-chewy ">
                <h1 className="lg:text-6xl text-2xl">{temp}</h1>
                <p className=" lg:text-2xl text-xl ">° C | ° F</p>
              </div>
              <div className="font-recursive ">
                <h1>{weather}</h1>
                <p className="font-light text-xs">
                  H: {hightemp} °C | L:{lowtemp} °C
                </p>
              </div>
            </div>
            <TiWeatherCloudy className="text-8xl " />
          </div>
          <div className="left-[150px] text-xs lg:text-md  ml-4 flex  flex-col gap-3 bottom-10 absolute">
            <div className="flex gap-1">
              <IoIosWater className="mt-1" />
              <p>Humidity:</p>
              <p className="animate-pulse">{humidity}%</p>
            </div>
            <div className="flex gap-1">
              <FaWind className="mt-1" />
              <p>Wind:</p>
              <p className="animate-pulse">{wind}</p>
              <p className="animate-pulse">mph</p>
            </div>
            <div className="flex gap-1">
              <MdVisibility className="mt-1" />
              <p>Visibilty:</p>
              <p className="animate-pulse">{visible}</p>
              <p className="animate-pulse">m</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
