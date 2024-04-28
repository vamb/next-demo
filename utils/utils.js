export const handleQuery = iterator => {
  const temp = {}
  let result = iterator?.next()
  temp[result?.value?.[0]] = result?.value?.[1]
  while(!result?.done) {
    result = iterator.next()
    if(result?.value?.[0]) {
      temp[result?.value?.[0]] = result?.value?.[1]
    }
  }
  return temp
}
