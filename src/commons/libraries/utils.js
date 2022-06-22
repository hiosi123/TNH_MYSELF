export const getDate = (date) => {
  const newdate = new Date(date)
  const YYYY = newdate.getFullYear()
  const MM = newdate.getMonth() + 1
  const dd = newdate.getDate()
  const result = `${YYYY}-${MM}-${dd}`
  return result
}