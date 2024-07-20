import { gsap } from 'gsap'

export const logic = () => {
  const parallax_el = document.querySelectorAll(
    '.parallax'
  ) as NodeListOf<HTMLElement>
  const main = document.querySelector('main') as HTMLElement

  const handleMouseMoveEvent = () => {
    let xValue = 0,
      yValue = 0,
      rotateDegree = 0

    window.addEventListener('mousemove', (e) => {
      xValue = e.clientX - window.innerWidth / 2
      yValue = e.clientY - window.innerHeight / 2

      rotateDegree = (xValue / (window.innerWidth / 2)) * 20

      parallax_el.forEach((el) => {
        const speedx = Number(el.dataset.speedx ?? 1)
        const speedy = Number(el.dataset.speedy ?? 1)
        const speedz = Number(el.dataset.speedz ?? 1)
        const rotateSpeed = Number(el.dataset.rotation ?? 0)

        const layerLeftPos = parseFloat(getComputedStyle(el).left)
        const isInLeft = layerLeftPos < window.innerWidth / 2 ? 1 : -1
        const zValue = (e.clientX - layerLeftPos) * isInLeft * 0.1

        el.style.transform = `translateX(calc(-50% + ${
          -xValue * speedx * 0.5
        }px))
         translateY(calc(-50% + ${yValue * speedy * 0.25}px)) 
        perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${
          rotateDegree * rotateSpeed
        }deg)`
      })
    })
  }

  const animate = () => {
    Array.from(parallax_el)
      .filter((el) => !el.classList.contains('text'))
      .forEach((el) => {
        gsap.to(el, {
          top: `${Number(el.dataset.distance)}%`,
          duration: Number(el.dataset.duration ?? 1) * 2,
          delay: Number(el.dataset.delay ?? 0) * 2,
          ease: 'power2.inOut',
        })
      })

    gsap.to('.text h2', {
      opacity: 1,
      duration: 1.5,
      delay: 1.25,
      transform: 'translateY(-100%)',
    })

    gsap.to('.text h1', {
      opacity: 1,
      duration: 1.5,
      delay: 1.25,
      transform: 'translateY(-60%)',
    })

    gsap.to('.hide', {
      duration: 1.5,
      opacity: 1,
      delay: 1.5,
      onComplete: () => handleMouseMoveEvent(),
    })
  }

  return {
    animate,
  }
}
