
export default class DataValidator {
  constructor () {
    this.timezoneOffset = new Date().getTimezoneOffset() * 60000
    // this.currentTime = new Date(Date.now()).getTime()
  }

  checkDataErrors (inputName, inputValue) {
    if (!this[inputName]) {
      return null
    }
    return !(!this[inputName].required && inputValue.trim().length === 0) ? this.isDataValid(inputName, inputValue) : null
  }

  isDataValid (inputName, inputValue) {
    const isDataValid = this.isMatchRegex(inputName, inputValue.trim())
    const isDateCorrect = this.checkIsDate(inputName, inputValue)
    return !isDataValid || !isDateCorrect ? this.createErrObject(inputName) : null
  }

  isMatchRegex (inputName, inputValue) {
    return this[inputName].regExp.test(inputValue)
  }

  checkIsDate (inputName, inputValue) {
    return inputName === 'birthDate' ? this.isPastDate(inputValue) : true
  }

  isPastDate (inputValue) {
    const currentDate = this.getCurrentDate()
    return new Date(inputValue) <= new Date(currentDate)
  }

  getCurrentDate () {
    return new Date(Date.now() - this.timezoneOffset).toISOString().slice(0, 10)
  }

  createErrObject (inputName) {
    return {
      [inputName]: this[inputName].err
    }
  }
}
