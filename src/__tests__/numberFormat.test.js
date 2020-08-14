import React from "react"
import { random, round } from "mathjs"
import { render, screen } from "@testing-library/react"
import NumberWithCommas from "../components/misc/NumberWithCommas"

test("<NumberWithCommas>", () => {
  const numberTester = random(4500000)
  const roundedNumberWithCommas = round(numberTester, 2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  render(<NumberWithCommas numb={numberTester} />)
  // screen.debug()
  expect(
    screen.getByRole("generic", { name: /number with commas/i })
  ).toHaveTextContent(roundedNumberWithCommas)
  // expect(screen.getByTestId("item-price")).toHaveTextContent(
  //   `${roundedNumberWithCommas}`
  // )
})
