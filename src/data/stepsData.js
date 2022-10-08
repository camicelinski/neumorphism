const stepsData = [
  {
    name: 'Welcome',
    title: 'book inquiry',
    actions: [
      {
        txt: 'start',
        type: 'next'
      }
    ]
  },
  {
    name: 'Step1',
    label: 'personal',
    title: 'your data',
    actions: [
      {
        txt: 'back',
        type: 'prev'
      },
      {
        txt: 'next',
        type: 'next'
      }
    ]
  },
  {
    name: 'Step2',
    label: 'category',
    title: 'your profile',
    actions: [
      {
        txt: 'back',
        type: 'prev'
      },
      {
        txt: 'next',
        type: 'next'
      }
    ]
  },
  {
    name: 'Step3',
    label: 'preferences',
    title: 'your preferences',
    actions: [
      {
        txt: 'back',
        type: 'prev'
      },
      {
        txt: 'submit',
        type: 'submit'
      }
    ]
  },
  {
    name: 'Success',
    label: 'summary',
    title: 'inquiry summary'
  }
]

export default stepsData
