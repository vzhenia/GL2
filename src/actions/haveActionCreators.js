export function saveHaveStateToStore(payload) {
  return {
    type: 'SAVE_HAVE',
    payload
  }
}

export function saveHaveRequestToStore(payload) {
  return {
    type: 'SAVE_HAVE_REQUEST_LIST',
    payload
  }
}
