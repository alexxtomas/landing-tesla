import { $, $$ } from '../../../utils/functions'
const $header = $('#landing-header') as HTMLElement
const $$sections = $$('.landing-section') as NodeListOf<HTMLElement>

const observerOptions = {
  root: null,
  rootMargin: '0px', // en cuanto se vea el elemento
  threshold: 0.9 // porcentaje de visibilidad
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const { isIntersecting } = entry
    if (isIntersecting) {
      const color = entry.target.getAttribute('data-header-color') as string
      $header.style.color = color
    }
  })
}, observerOptions)

$$sections.forEach((section) => observer.observe(section))
