import React from 'react'
import StyledWelcome from './Welcome.styled'

const Welcome = () => {
  return (
    <StyledWelcome>
      <p>
        Are you unsure about which book to read next?
      </p>
      <p>
        Our app will help you to find the perfect title for your next reading.
      </p>
      <p>
        To find it out, please <span>complete a short form.</span>
      </p>
      <p>
        You are only <span>3 steps</span> away from finding the perfect book.
      </p>
      <p>
        Click on the button below to get started!
      </p>
    </StyledWelcome>
  )
}

export default Welcome
