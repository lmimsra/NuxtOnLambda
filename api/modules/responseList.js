const responseArray = {
  200: { message: 'success!' }
}

export default function(path) {
  return responseArray[path]
}
