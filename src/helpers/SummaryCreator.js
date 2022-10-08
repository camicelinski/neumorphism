import {
  convertArrToObj,
  getInputNames,
  prepareSummaryItemsList
} from './helpersFunctions'
import booksData from '../data/booksData'
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

  const getEdition = ({ newRelease }) => {
    if (!newRelease) {
      const edition = 'oldEditions'
      return booksData[edition]
    }
    const edition = 'newReleases'
    return booksData[edition]
  }

  const getCategory = ({ category }, booksList) => {
    return booksList[category]
  }

  const getBookInfo = ({ size }, booksList) => {
    return booksList[size]
  }

  const getNeededData = (enteredData) => {
    const editionList = getEdition(enteredData)
    const categoryList = getCategory(enteredData, editionList)

    const { title, author } = getBookInfo(enteredData, categoryList)
    const { name, lastName, email, category, size } = enteredData

    const summaryItemsList = prepareSummaryItemsList({
      title,
      author
    })

    return { name, lastName, email, category, size, summaryItemsList }
  }

  const prepareDataToShow = () => {
    const enteredData = getEnteredValues()
    return getNeededData(enteredData)
  }

  return prepareDataToShow()
}

export default SummaryCreator
