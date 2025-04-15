import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import tw from "twin.macro"
import { PrimaryButton } from "~/components/misc/Buttons"
import MessageToast from "~/components/misc/MessageToast"
import "~/styles/popup.css"

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
    position: "relative",
  },
}))

export default function AgeVerificationModal() {
  const isBrowser = typeof window !== "undefined"
  const classes = useStyles()

  const [dob, setDob] = useState("")
  const [ageVerified, setAgeVerified] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [open, setOpen] = useState(true)

  // Age threshold for verification (18 years old)
  const ageThreshold = 18

  // Function to calculate age from DOB
  const calculateAge = dob => {
    const birthDate = new Date(dob)
    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1
    }
    return age
  }

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault()

    if (!dob) {
      setErrorMessage("Please enter your date of birth.")
      return
    }

    const age = calculateAge(dob)

    if (age >= ageThreshold) {
      setAgeVerified(true)
      setErrorMessage("")
      setOpen(false) // Close modal if age is valid
      if (isBrowser) {
        sessionStorage.setItem("ageVerified", "true") // Store verified status
      }
    } else {
      setAgeVerified(false)
      setErrorMessage(`You must be at least ${ageThreshold} years old.`)
      if (isBrowser) {
        window.location.href = "https://www.google.com"
      }
    }
  }

  const handleClose = () => {
    setOpen(false)
    if (isBrowser) {
      sessionStorage.setItem("ageVerified", "true") // Remember that the modal was closed
    }
  }

  return (
    <div>
      <MessageToast sent={ageVerified} setSent={setAgeVerified} />
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
            <div className="popup-x" onClick={handleClose}>
              X
            </div>
            <h1 css={tw`mb-6 text-3xl text-blue-900`}>Age Verification</h1>
            <h2 css={tw`mb-4 text-xl font-bold text-blue-900`}>
              Please Verify Your Age
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              To access this content, please verify that you are over 18 years
              of age by entering your Date of Birth.
            </p>

            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            <form
              id="age-verification-form"
              name="age-verification-form"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              css={tw`flex flex-wrap`}
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="form-name"
                value="age-verification-form"
              />
              <label className="formLabel" htmlFor="dob-input">
                Date of Birth
              </label>
              <input
                required
                css={tw`w-full`}
                name="dob"
                id="dob-input"
                type="date"
                value={dob}
                onChange={e => setDob(e.target.value)}
              />

              <PrimaryButton type="submit">Verify Age</PrimaryButton>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
