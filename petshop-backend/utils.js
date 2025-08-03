const dayjs = require('dayjs')

function isWeekend(dateString) {
  const date = dayjs(dateString, 'DD/MM/YYYY')
  const day = date.day()
  return day === 0 || day === 6
}

module.exports = { isWeekend }
