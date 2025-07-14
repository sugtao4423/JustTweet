;(async () => {
  const options = await chrome.storage.sync.get(['prefix'])
  const prefix = options.prefix ?? ''

  const result = prompt('Set Prefix', prefix)
  if (result !== null) {
    await chrome.storage.sync.set({ prefix: result })
    alert(`Prefix Saved!\n'${result}'`)
  }
  window.close()
})()
