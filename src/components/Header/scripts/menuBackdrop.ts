import { $, $$ } from '../../../utils/functions'
const $$lists = $$('#landing-header li') as NodeListOf<HTMLElement>
const $menuBackDrop = $('#menu-backdrop') as HTMLElement

$$lists.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    const { left, top, width, height } = item.getBoundingClientRect()

    $menuBackDrop.style.setProperty('--left', `${left}px`)
    $menuBackDrop.style.setProperty('--top', `${top}px`)
    $menuBackDrop.style.setProperty('--width', `${width}px`)
    $menuBackDrop.style.setProperty('--height', `${height}px`)

    $menuBackDrop.style.opacity = '1'
    $menuBackDrop.style.visibility = 'visible'
  })

  item.addEventListener('mouseleave', () => {
    $menuBackDrop.style.opacity = '0'
    $menuBackDrop.style.visibility = 'hidden'
  })
})
