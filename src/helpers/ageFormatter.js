const ageFormatter = (age) => {
  switch (age.toString().slice(-1)) {
    case '0':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      return ' лет'
    case '1':
      return ' год'
    case '2':
    case '3':
    case '4':
      return ' года'
    default:
      return
  }
}

export default ageFormatter