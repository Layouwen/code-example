export const getAge = (str: string) => {
  const targetYear = Number(str.slice(0, 4))
  const targetMonth = Number(str.slice(4, 6))
  const targetDay = Number(str.slice(6, 8))
  const date = new Date()
  const nowYear = date.getFullYear()
  const nowMonth = date.getMonth() + 1
  const nowDay = date.getDate()
  let age = nowYear - targetYear
  if ((targetMonth === nowMonth && targetDay < nowDay) || targetMonth < nowMonth) {
    age--
  }
  return age
}
