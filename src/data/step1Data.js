const formFieldsStep1 = [
  {
    name: 'name',
    label: 'name',
    type: 'text',
    regExp: /^[a-zA-Z]{3,}(?:(-| )[a-zA-Z]+){0,2}$/,
    err: 'min. 3 letters',
    required: true
  },
  {
    name: 'lastName',
    label: 'last name',
    type: 'text'
  },
  {
    name: 'email',
    label: 'e-mail',
    type: 'text'
  },
  {
    name: 'phone',
    label: 'phone number',
    type: 'tel'
  }
]

export default formFieldsStep1
