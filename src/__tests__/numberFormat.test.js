import React from "react"
import { random, round } from "mathjs"
import { render, cleanup } from "@testing-library/react"
import NumberWithCommas from "../components/misc/NumberWithCommas"

afterEach(cleanup)

test("<NumberWithCommas>", () => {
  const numberTester = random(4500000)
  const roundedNumberWithCommas = round(numberTester, 2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const { getByTestId, debug } = render(
    <NumberWithCommas numb={numberTester} />
  )
  // debug()
  expect(getByTestId("item-price")).toHaveTextContent(
    `${roundedNumberWithCommas}`
  )
  // expect(wrapper).toHaveTextContent("1,234")
})
