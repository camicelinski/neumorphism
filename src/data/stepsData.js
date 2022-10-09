const stepsData = [
  {
    name: 'Welcome',
    title: 'find your next reading',
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
    title: 'enter your data',
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
    title: 'choose a category',
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
    title: 'set your preferences',
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
    label: 'results',
    title: 'your next reading'
  }
]

export default stepsData
