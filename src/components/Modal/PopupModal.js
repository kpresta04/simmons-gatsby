import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import tw, { css } from "twin.macro"
import { PrimaryButton } from "~/components/misc/Buttons"
import MessageToast from "~/components/misc/MessageToast"

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "350px",
    marginLeft: "3rem",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    outline: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function TransitionsModal() {
  const isBrowser = typeof window !== "undefined"

  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const [sent, setSent] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    // if (isBrowser) {
    //   sessionStorage.setItem("modalSubmitted", "true")
    // }
  }

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <MessageToast sent={sent} setSent={setSent} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p> */}
            <h1 css={tw`text-3xl text-blue-900 mb-6`}>How Can We Help?</h1>
            <h2 css={tw`text-xl font-bold text-blue-900 mb-4`}>Contact Us</h2>
            <form
              id="popup-modal"
              name="popup-modal"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              css={tw`flex flex-wrap`}
              onSubmit={e => {
                // e.preventDefault()

                // setOpen(false)
                // setSent(true)
                if (isBrowser) {
                  sessionStorage.setItem("modalSubmitted", "true")
                }
              }}
            >
              <input type="hidden" name="form-name" value="popup-modal" />
              <label className="formLabel" htmlFor="name-input">
                Name
              </label>
              <input
                required
                css={tw`w-full`}
                name="name"
                placeholder="John Doe"
                id="name-input"
                type="text"
              ></input>
              <label className="formLabel" htmlFor="email-input">
                Email
              </label>
              <input
                css={tw`w-full`}
                required
                name="email"
                id="email-input"
                type="email"
                placeholder="john@mail.com"
              ></input>
              <label className="formLabel" htmlFor="message-box">
                Your Message
              </label>

              <textarea
                style={{ minHeight: "150px" }}
                css={tw`w-full outline-none`}
                id="message-box"
                name="message"
                required
              ></textarea>
              <PrimaryButton type="submit" value="Submit">
                Submit
              </PrimaryButton>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
