import React, { useContext } from 'react'
import formContext from '../../context/formContext'
import SummaryCreator from '../../helpers/SummaryCreator'
import StyledSummary from './Summary.styled'

const Summary = () => {
  const formHandler = useContext(formContext)

  const renderSummary = () => {
    const { name, lastName, email, title, author } = SummaryCreator(formHandler.formState)

    return (
      <StyledSummary>
        <div>
          <h3>{title}</h3>
          <p>by <span>{author}</span></p>
        </div>
        <p>
          Dear<span>{` ${name} ${lastName}`}</span>, we wish you a great reading!
        </p>
        <p>
          We sent a copy of the results also to your email{' '}
          <span>{email}</span>.
        </p>
      </StyledSummary>
    )
  }

  return <div>{renderSummary()}</div>
}

export default Summary
