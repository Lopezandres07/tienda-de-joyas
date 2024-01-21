

const pagination = (data, pages = 1, items = 6) => {
  console.log('data:', data)

  const pageInt = Number(pages)
  const itemsInt = Number(items)

  const startIndex = (pageInt - 1) * itemsInt
  const endIndex = pageInt * itemsInt

  const results = {}

  if (endIndex < data.length) {
    results.next = pageInt + 1
  }

  if (startIndex > 0) {
    results.previous = pageInt - 1
  }

  results.results = data.slice(startIndex, endIndex)

  return results
}

export default pagination