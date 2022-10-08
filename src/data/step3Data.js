const formFieldsStep3 = [
  {
    name: 'size',
    label: 'size',
    type: 'dropdown',
    items: [
      { value: 'short', label: 'short (up to 100 pages)' },
      { value: 'medium', label: 'medium (100-300 pages)' },
      { value: 'long', label: 'long (more than 300 pages)' }
    ],
    order: 1
  },
  {
    name: 'newRelease',
    label: 'new release',
    type: 'checkbox'
  }
]

export default formFieldsStep3
