// import React from "react"
import { round } from "mathjs"
export default function NumberWithCommas({ numb }) {
  //   let x = Number(numb).toPrecision(2)
  let x = round(numb, 2)

  x = x.toString()
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}