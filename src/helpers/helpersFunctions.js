import stepsData from '../data/stepsData'
import formFieldsStep1 from '../data/step1Data'
import formFieldsStep2 from '../data/step2Data'
import formFieldsStep3 from '../data/step3Data'

export const getStepsData = (step, dataToGet) => {
  const stepData = stepsData[step]
  return stepData[dataToGet]
}

export const convertArrToObj = (arr) => Object.assign({}, ...arr)

export const createStateData = () => {
  const fields = formFieldsStep1.concat(formFieldsStep2, formFieldsStep3)

  return fields.map((field) => {
    const { name, type } = field
    return {
      [name]: {
        value: type === 'checkbox' ? false : '',
        isValid: false,
        isFill: false
      }
    }
  })
}

export const createInitStateObj = () => convertArrToObj(createStateData())

export const getInputNames = (fields) => fields.map((field) => field.name)

export const isObjectEmpty = (obj) => Object.keys(obj).length === 0

const setItemData = (labelContent, valueContent) => ({
  label: labelContent,
  value: valueContent
})

export const prepareSummaryItemsList = (itemsData) => {
  const {
    title,
    author
  } = itemsData

  const titleItem = setItemData('book', `${title}`)
  const authorItem = setItemData('by', `${author}`)

  return [
    titleItem,
    authorItem
  ].filter((item) => item)
}
