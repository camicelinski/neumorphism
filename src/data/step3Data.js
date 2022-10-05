const formFieldsStep3 = [
  {
    name: 'category',
    label: 'literature category',
    type: 'dropdown',
    items: [
      { value: 'arts', label: 'arts and photography' },
      { value: 'biography', label: 'biographis and memoirs' },
      { value: 'children', label: 'books for children' },
      { value: 'history', label: 'history' },
      { value: 'poetry', label: 'poetry' },
      { value: 'fiction', label: 'fiction' },
      { value: 'science', label: 'scientific/technical' }
    ],
    order: 2
  },
  {
    name: 'size',
    label: 'size',
    type: 'dropdown',
    items: [
      { value: 's', label: 'short (up to 100 pages)' },
      { value: 'm', label: 'medium (100-300 pages)' },
      { value: 'l', label: 'long (more than 300 pages)' }
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
