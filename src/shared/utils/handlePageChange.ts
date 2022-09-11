export const handlePageChange = (action: void) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  action
}
