export * from './fetchData'
export * from './math'

export const callBackFn = (cb) => {
  cb()
}

export const callBackFnHasReturn = (cb) => {
  return cb()
}
