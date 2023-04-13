import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "../Images/banner.png";
import Image1 from "../Images/icon-compass@2x.png";
import Image2 from "../Images/icon-umberella@2x.png";
import Image3 from "../Images/icon-wind@2x.png";

export default function Home() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");

  const current = new Date(`${data.current.last_updated}`);
  const forecastday = new Date(`${data.forecast.forecastday[1].date}`);
  const forecastday2 = new Date(`${data.forecast.forecastday[2].date}`);

  const options = { weekday: "long" };

  let day = new Intl.DateTimeFormat("en-US", options).format(current);
  console.log(day);

  let day2 = new Intl.DateTimeFormat("en-US", options).format(forecastday);
  console.log(day2);

  let day3 = new Intl.DateTimeFormat("en-US", options).format(forecastday2);
  console.log(day3);

  async function getData() {
    let { data } = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=84c6a7a1f4ea4d2383a165523231703&q=Egypt&days=3&aqi=no&alerts=no`
    );
    setData(data);
    console.log(data);
    console.log(data.forecast.forecastday[1].date);
  }

  useEffect(() => {
    getData();
  }, []);

  async function handleSearch(word) {
    let { data } = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${word}&days=3`
    );
    setData(data);
    console.log(data);
  }

  return (
    <>
      <section id="hero" style={{ backgroundImage: `url(${Image})` }}>
        <div className="container">
          <div className="text-center">
            <input
              type="text"
              className="search"
              placeholder="Find your location..."
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            <button
              className="btn btn-info find"
              value={user}
              onClick={() => {
                handleSearch(user);
              }}
            >
              Find
            </button>
          </div>
        </div>
        <div className="container mt-5 home">
          <div className="row gx-0 gy-5">
            <div className="col-md-4 col-sm-12">
              <div className="box h-100">
                <div className="box-top">
                  <h5>{day}</h5>
                </div>
                <div className="box-body">
                  <p>{data.location.name}</p>
                  <div className="temp">
                    <h1>
                      {data.current.feelslike_c}
                      <sup>o</sup>C
                    </h1>
                    <img
                      src={data.current.condition.icon}
                      className="pe-4 w-25"
                      alt=""
                    />
                  </div>
                  <h6 className="sunny">{data.current.condition.text}</h6>
                </div>
                <div className="box-bottom">
                  <div className=" d-flex align-items-center">
                    <img src={Image2} className="" alt="" />
                    <p className="par pt-3 ps-1">20%</p>
                  </div>
                  <div className="d-flex align-items-center  px-4">
                    <img src={Image3} className="" alt="" />
                    <p className="par pt-3 ps-1">18Km/h</p>
                  </div>
                  <div className="d-flex align-items-center ">
                    <img src={Image1} className="" alt="" />
                    <p className="par pt-3 ps-1">East</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="box2 h-100">
                <div className="box2-top text-center">
                  <h5 className="text-center">{day2}</h5>
                </div>
                <div className="box2-body text-center">
                  <img
                    src={data.forecast.forecastday[1].day.condition.icon}
                    alt=""
                  />
                  <h2 className="fw-bolder fs-3">
                    {data.forecast.forecastday[1].day.maxtemp_c}
                    <sup>o</sup>C
                  </h2>
                  <p className="fs-5">
                    {data.forecast.forecastday[1].day.mintemp_c}
                    <sup>o</sup>
                  </p>
                  <p className="sunny">
                    {data.forecast.forecastday[1].day.condition.text}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="box3 h-100">
                <div className="box3-top text-center">
                  <h5 className="text-center">{day3}</h5>
                </div>
                <div className="box3-body text-center">
                  <img
                    src={data.forecast.forecastday[2].day.condition.icon}
                    alt=""
                  />
                  <h2 className="fw-bolder fs-3">
                    {data.forecast.forecastday[2].day.maxtemp_c}
                    <sup>o</sup>C
                  </h2>
                  <p className="fs-5">
                    {data.forecast.forecastday[2].day.mintemp_c}
                    <sup>o</sup>
                  </p>
                  <p className="sunny">
                    {data.forecast.forecastday[2].day.condition.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
