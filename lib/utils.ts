export const slugify = (text: string) => {
  return text?.toString().trim().toLowerCase().split(' ').join('-')
}

export function capitalizeWords(str: string) {
  // Split the string into an array of words
  if (str) {
    const words = str?.split(' ')

    // Capitalize the first letter of each word
    const capitalizedWords = words.map((word) => {
      const firstLetter = word.charAt(0).toUpperCase()
      const restOfWord = word.slice(1)
      return firstLetter + restOfWord
    })

    // Join the capitalized words back into a string
    const capitalizedString = capitalizedWords.join(' ')

    return capitalizedString
  } else {
    return str
  }
}
