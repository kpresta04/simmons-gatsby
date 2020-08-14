import React from "react"
import { round } from "mathjs"
export default function NumberWithCommas({ numb = 0 }) {
  //   let x = Number(numb).toPrecision(2)
  let x = round(Number(numb), 2)

  x = x.toString()
  x = x.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return (
    <span aria-label="Number With Commas" data-testid="item-price">
      {x}
    </span>
  )
}
