import React, { useContext } from 'react'
import formContext from '../../context/formContext'
import SummaryCreator from '../../helpers/SummaryCreator'
import SummaryItem from './SummaryItem'
import StyledSummary from './Summary.styled'

const Summary = () => {
  const formHandler = useContext(formContext)

  const renderSummaryItems = (items) =>
    items.map((item) => (
      <SummaryItem
        item={item}
        key={item.label}
      />
    ))

  const renderSummary = () => {
    const { name, email, summaryItemsList } = SummaryCreator(formHandler.formState)

    return (
      <StyledSummary>
        <p>
          <span>{name}</span>, you will find your answer below. We sent a copy also to your email{' '}
          <span>{email}</span>.
        </p>
        <ul>{renderSummaryItems(summaryItemsList)}</ul>
      </StyledSummary>
    )
  }

  return <div>{renderSummary()}</div>
}

export default Summary
