// JavaScript for interactivity
document.addEventListener('DOMContentLoaded', () => {
  const websiteName = document.getElementById('website-name')

  // Change color on hover
  websiteName.addEventListener('mouseover', () => {
    websiteName.style.color = '#ffeb3b'
    websiteName.style.cursor = 'pointer'
  })

  // Revert color when not hovered
  websiteName.addEventListener('mouseout', () => {
    websiteName.style.color = 'white'
  })
})
