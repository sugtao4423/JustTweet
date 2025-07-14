const onClicked = async (tab) => {
  const options = await chrome.storage.sync.get(['prefix'])
  const prefix = options.prefix ?? ''

  const params = new URLSearchParams({
    text: prefix + tab.title,
    url: tab.url,
  })
  const url = 'https://twitter.com/intent/tweet?' + params.toString()

  const width = 550
  const height = 450
  const currentWindow = await chrome.windows.getCurrent()
  const left = currentWindow.left + (currentWindow.width - width) / 2
  const top = currentWindow.top + (currentWindow.height - height) / 2

  await chrome.windows.create({
    url,
    type: 'popup',
    width,
    height,
    left: Math.floor(left),
    top: Math.floor(top),
  })
}

chrome.action.onClicked.addListener(onClicked)
