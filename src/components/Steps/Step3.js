import React from 'react'
import fields from '../../data/step3Data'
import Checkbox from '../Checkbox'
import Dropdown from '../Dropdown'
// import Input from '../Input'

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
    </div>
  )
}

export default Step3
