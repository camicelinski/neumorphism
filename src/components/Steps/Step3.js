import React from 'react'
import fields from '../../data/step3Data'
import Checkbox from '../Checkbox'
import Dropdown from '../Dropdown'
import Error from '../Error'

const Step3 = () => {
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
          (
            <Checkbox
              key={field.name}
              field={field}
            />
          )
    )
  })

  return (
    <div>
      {renderFields()}
      <Error isCenter />
    </div>
  )
}

export default Step3
