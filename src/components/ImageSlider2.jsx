import React from "react";
import imageSlider1 from "../assets/image-slider-1.jpg";
import imageSlider2 from "../assets/image-slider-2.jpg";
import imageSlider3 from "../assets/image-slider-3.jpg";
import imageSlider5 from "../assets/image-slider-5.jpg";

const ImageSlider2 = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide carousal-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              style={{ marginTop: "20px" }}
              src={imageSlider1}
              height="500"
              width="200"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h4>Trading Journey Academy</h4>
              <p>India's Fastest Growing Trading & Investing Related Academy</p>
            </div>
          </div>
          <div class="carousel-item ">
            <img
              style={{ marginTop: "20px" }}
              src={imageSlider2}
              height="500"
              width="200"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h4>Best Mentors</h4>
              <p>
                Trading Journey is Having Best Mentors along the Globe to Guide
                You
              </p>
            </div>
          </div>
          <div class="carousel-item ">
            <img
              style={{ marginTop: "20px" }}
              src={imageSlider3}
              height="500"
              width="200"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h4>Best Technical Analysists</h4>
              <p>We are having the best technical analysists to guide you</p>
            </div>
          </div>
          <div class="carousel-item ">
            <img
              style={{ marginTop: "20px" }}
              src={imageSlider5}
              height="500"
              width="200"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h4>Go and Enroll Now</h4>
              <p>To Become Part of our Family Enroll Now </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider2;
