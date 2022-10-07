import {
  convertArrToObj,
  // countHoursDifference,
  // countTime,
  getInputNames
  // prepareSummaryItemsList
} from './helpersFunctions'
import formFieldsStep1 from '../data/step1Data'
import formFieldsStep2 from '../data/step2Data'
import formFieldsStep3 from '../data/step3Data'

const SummaryCreator = (dataToFilter) => {
  const getEnteredValues = () => {
    const fields = formFieldsStep1.concat(formFieldsStep2, formFieldsStep3)
    const fieldsNamesList = getInputNames(fields)
    const enteredValuesList = fieldsNamesList.map((fieldName) => {
      const { value: fieldValue } = dataToFilter[fieldName]
      return {
        [fieldName]: fieldValue
      }
    })
    return convertArrToObj(enteredValuesList)
  }

  const prepareDataToShow = () => {
    const enteredData = getEnteredValues()
    return getNeededData(enteredData)
  }

  return prepareDataToShow()
}

export default SummaryCreator
