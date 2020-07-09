import React, { useContext } from "react"
import StoreContext from "~/context/StoreContext"

export default function CartCount() {
  const { checkout } = useContext(StoreContext)
  // const [quantity, setQuantity] = useState(0)
  const quantity = checkout.lineItems.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return quantity > 0 ? (
    <div
      style={{
        position: "absolute",
        top: "-16px",
        left: "20px",
        borderRadius: "1.75em",
        backgroundColor: "rgba(114,114,114,0.9)",
        color: "white",
        fontSize: "0.8571428571rem",
        fontWeight: "500",
        lineHeight: "1.75em",
        whiteSpace: "nowrap",
        textAlign: "center",
        height: " 1.75em",
        padding: " 0 0.5833333333em",
        zIndex: "3",
      }}
    >
      {quantity}
    </div>
  ) : (
    <div></div>
  )
}
