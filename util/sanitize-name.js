
// HAP-NodeJS requires accessory names to start and end with a letter or
// number, and to only contain letters, numbers, spaces, apostrophes and a
// few common punctuation characters.
const sanitizeName = name => {
  return name
    .replace(/[^\p{L}\p{N} '.,-]/gu, '')
    .replace(/\s+/g, ' ')
    .replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '')
    .trim()
}

module.exports = {
  sanitizeName,
}
