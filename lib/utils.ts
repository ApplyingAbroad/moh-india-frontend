export const slugify = (text: string) => {
  return text?.toString().trim().toLowerCase().split(' ').join('-')
}
