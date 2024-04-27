import RTAPIConstant from "./RTAPIConstant";

export const getUser = () => {
  return new Promise(resolve => {
    resolve(RTAPIConstant.USER_LIST)
  })
}

export const getUserById = request => {
  return new Promise(resolve => {
    const target = RTAPIConstant.USER_LIST.find(obj => obj.id == request?.id)
    resolve(target)
  })
}

export const submitUser = request => {
  return new Promise(resolve => {
    console.log('submitUser request', request)
  })
}