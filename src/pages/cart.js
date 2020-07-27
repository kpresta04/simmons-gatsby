import React, { useContext } from "react"
import StoreContext from "~/context/StoreContext"
import Layout from "~/components/Layout/Layout"
import tw from "twin.macro"
import PrimaryButton from "~/components/buttons/PrimaryButton.component.js"

const Title = tw.h4`text-lg font-bold`
const Header = tw.h1`text-3xl text-center my-12 font-bold`

export default function Cart() {
  const { isCartOpen, cart, checkout, removeProductFromCart } = useContext(
    StoreContext
  )

  console.log(checkout.lineItems)
  console.log(checkout)
  return (
    <Layout>
      <div
        style={{
          minHeight: "70vh",
        }}
      >
        <Header>Cart</Header>
        <div style={{ width: "fit-content", margin: "0 auto" }}>
          <table className="cart">
            <thead className="cart__row cart__row--heading">
              <tr>
                <th scope="col">Product</th>
                <th className="text-right" scope="col">
                  Price
                </th>
                <th className="text-right small--hide" scope="col">
                  Quantity
                </th>
                <th className="text-right small--hide" scope="col">
                  Total
                </th>
              </tr>
            </thead>

            <tbody>
              {checkout.lineItems.map((item, index) => (
                <tr
                  className="cart__row"
                  data-cart-item=""
                  data-cart-item-key="34647472832663:170b5e18aa7da4f68a54bff755974c1f"
                  data-cart-item-url="/products/shipping-box?variant=34647472832663"
                  data-cart-item-title="Shipping Box and Free Shipping Label"
                  data-cart-item-index="1"
                  data-cart-item-quantity="1"
                  key={index}
                >
                  <td
                    className="cart__meta small--text-left"
                    data-cart-table-cell=""
                  >
                    <div className="cart__product-information">
                      <div className="cart__image-wrapper">
                        <img
                          className="cart_image"
                          style={{ maxHeight: "95px" }}
                          src={item.variant.image.src}
                          alt="Product"
                        ></img>
                      </div>
                      <div>
                        <div className="list-view-item__title">
                          <Title>{item.title}</Title>
                        </div>

                        <p className="cart__remove">
                          <button
                            style={{
                              borderBottom: "1px solid currentColor",
                              paddingBottom: "1px",
                            }}
                            className="text-link text-link--accent"
                            aria-label={`Remove ${item.title}`}
                            data-cart-remove=""
                            onClick={() => removeProductFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="cart__price text-right">
                    <div data-cart-item-price="">${item.variant.price}</div>

                    {/* <div className="cart__qty medium-up--hide">
                    <label
                      htmlFor="updates_34647472832663:170b5e18aa7da4f68a54bff755974c1f"
                      className="cart__qty-label"
                      aria-label="Quantity"
                      data-quantity-label-mobile=""
                    >
                      Qty
                    </label>
                    <h1 style={{ margin: "0 1rem" }}>Qty: {item.quantity}</h1>

                    <input
                      id="updates_34647472832663:170b5e18aa7da4f68a54bff755974c1f"
                      className="cart__qty-input"
                      type="number"
                      value="1"
                      min="0"
                      pattern="[0-9]*"
                      data-quantity-input=""
                      data-quantity-item="1"
                      data-quantity-input-mobile=""
                    />
                  </div> */}
                  </td>
                  <td className="cart__quantity-td text-right small--hide">
                    <div className="cart__qty">
                      {/* <label
                      htmlFor="updates_large_34647472832663:170b5e18aa7da4f68a54bff755974c1f"
                      className="cart__qty-label"
                      data-quantity-label-desktop=""
                    >
                      Quantity
                    </label> */}
                      <input
                        id="updates_large_34647472832663:170b5e18aa7da4f68a54bff755974c1f"
                        className="cart__qty-input"
                        type="number"
                        name="updates[]"
                        defaultValue={item.quantity}
                        min="0"
                        pattern="[0-9]*"
                        onChange={e => {
                          console.log(e.target.value)
                        }}
                        data-quantity-input=""
                        data-quantity-item="1"
                        data-quantity-input-desktop=""
                      />
                    </div>
                  </td>
                  <td
                    className="cart__final-price text-right small--hide"
                    data-cart-item-line-price=""
                  >
                    ${Number(item.quantity) * Number(item.variant.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 style={{ margin: "3rem 0 2rem", textAlign: "right" }}>
            Subtotal{" "}
            <span className="cart_subtotal">${checkout.totalPrice}</span>
            <br />
            <br />
            Shipping and tax calculated at checkout
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "3rem",
            }}
          >
            <PrimaryButton>
              <a href={checkout.webUrl}>Check Out</a>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Layout>
  )
}
