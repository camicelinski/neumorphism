import React from 'react'
import fields from '../../data/step2Data'
import Input from '../Input'

const Step2 = () => {
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
    </div>
  )
}

export default Step2