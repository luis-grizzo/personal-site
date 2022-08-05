export const handlePageChange = (action: () => void, delay = 0) => {
  return setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    action()
  }, delay)
}
