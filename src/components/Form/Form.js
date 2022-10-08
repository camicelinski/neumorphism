import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../../hooks'
import formContext from '../../context/formContext'
import StyledForm from './Form.styled'
import Switcher from '../Switcher'
import Content from '../Content'
import Title from '../Title'
import ProgressBar from '../ProgressBar'

const Form = ({ toggleTheme, isDarkMode }) => {
  const [step, setStep] = useState(0)

  const {
    formState,
    errors,
    handleChange,
    handleDropdownChange,
    handleCheckboxChange,
    validateFieldOnBlur,
    validateStepData,
    // dateErr,
    removeFieldError
  } = useForm()

  const { Provider } = formContext

  const showNextStep = () => setStep(step + 1)

  const showPrevStep = () => setStep(step - 1)

  const showFollowingStep = (direction) => {
    direction === 'next' ? showNextStep() : showPrevStep()
  }
  const handleStepChange = (direction, stepNumber) => {
    if (stepNumber === 0 || direction === 'prev') {
      return showFollowingStep(direction)
    }
    const isStepDataValid = validateStepData(stepNumber)
    return isStepDataValid ? showFollowingStep(direction) : null
  }

  const handleSubmit = (e, stepNumber) => {
    e.preventDefault()
    const isStepDataValid = validateStepData(stepNumber)
    return isStepDataValid ? showFollowingStep('next') : null
  }

  return (
    <Provider
      value={{
        formState,
        handleChange,
        handleDropdownChange,
        handleCheckboxChange,
        errors,
        validateFieldOnBlur,
        removeFieldError
      }}
    >
      <StyledForm>
        <Switcher
          name={'themeSwitcher'}
          isOn={isDarkMode}
          handleChange={toggleTheme}
        />
        <Title>
          <h1>find the perfect book</h1>
        </Title>
        <Content
          step={step}
          handleStepChange={handleStepChange}
          handleSubmit={handleSubmit}
        />
        <ProgressBar step={step} />
      </StyledForm>
    </Provider>
  )
}

Form.propTypes = {
  toggleTheme: PropTypes.func,
  isDarkMode: PropTypes.bool,
  handleSubmit: PropTypes.func
}

export default Form
