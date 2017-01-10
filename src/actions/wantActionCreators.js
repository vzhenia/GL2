export function saveWantStateToStore(payload) {
  return {
    type: 'SAVE_WANT',
    payload
  }
}

export function saveWantRequestToStore(payload) {
  return {
    type: 'SAVE_WANT_REQUEST_LIST',
    payload
  }
}
