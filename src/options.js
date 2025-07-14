const [prefixInput, saveButton, message] = document.querySelectorAll(
  '#prefix, #save, #message'
)

const showMessage = (text) => {
  message.innerText = text
  setTimeout(() => {
    message.innerText = ''
  }, 3000)
}

saveButton.addEventListener('click', async () => {
  const newPrefix = prefixInput.value
  await chrome.storage.sync.set({ prefix: newPrefix })
  showMessage(`Prefix Saved!\n'${newPrefix}'`)
})

const main = async () => {
  try {
    const result = await chrome.storage.sync.get(['prefix'])
    prefixInput.value = result.prefix ?? ''
  } catch (error) {
    saveButton.disabled = true
    prefixInput.disabled = true

    showMessage('Error retrieving options. Please try again later.')
    console.error('Error retrieving options:', error)
  }
}
main()
