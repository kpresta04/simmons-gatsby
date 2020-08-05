import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import tw, { css } from "twin.macro"

const SimpleSlider = ({ images }) => {
  const responsive = {
    0: { items: 1 },
  }
  const galleryItems = images.map((image, index) => (
    <img key={index} src={image} alt="Product" className="sliderImg" />
  ))
  return <AliceCarousel items={galleryItems} responsive={responsive} />
}

export default SimpleSlider
