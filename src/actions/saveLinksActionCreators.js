export function saveLinksToStore(payload) {
  console.log('saveLinksToStore(payload)', payload)
  return {
    type: 'SAVE_LINKS',
    payload
  }
}
