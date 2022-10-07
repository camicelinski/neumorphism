import React from 'react'
// import formContext from '../../context/formContext'
import fields from '../../data/step2Data'
import Input from '../Input'
import Error from '../Error'

const Step2 = () => {
  // const formHandler = useContext(formContext)

  const renderFields = () => fields.map(field => {
    return (
      <Input
        key={field.name}
        field={field}
      />
    )
  })

  return (
    <div>
      {renderFields()}
      <Error isCenter />
    </div>
  )
}

export default Step2
