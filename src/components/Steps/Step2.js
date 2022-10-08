import React from 'react'
import fields from '../../data/step2Data'
import Dropdown from '../Dropdown'
import Error from '../Error'

const Step2 = () => {
  const renderFields = () => fields.map(field => {
    return (
      field.type === 'dropdown' ?
          (
            <Dropdown
              key={field.name}
              field={field}
            />
          )
        :
        null
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
