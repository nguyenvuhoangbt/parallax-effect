type Layer = {
  png: string
  webp: string
  class: string
  speedx?: number
  speedy?: number
  speedz?: number
  rotation?: number
  distance?: number
  delay?: number
  duration?: number
}

export const layers: Layer[] = [
  {
    png: '/img/background.png',
    webp: '/img/background.webp',
    class: `parallax bg-img absolute w-[195%] -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none
        top-full left-[50%]
      `,
    speedx: 0.3,
    speedy: 0.38,
    speedz: 0,
    rotation: 0,
    distance: 5,
    duration: 1,
  },
  {
    png: '/img/fog_7.png',
    webp: '/img/fog_7.webp',
    class:
      'parallax absolute w-[124%] top-[150%] left-[65%] -translate-x-1/2 -translate-y-1/2 z-[2] pointer-events-none',
    speedx: 0.27,
    speedy: 0.32,
    speedz: 0,
    rotation: 0,
    distance: 80,
    delay: 0.25,
    duration: 0.75,
  },
  {
    png: '/img/mountain_10.png',
    webp: '/img/mountain_10.webp',
    class:
      'parallax absolute w-[45%] top-[130%] left-[65%] -translate-x-1/2 -translate-y-1/2 z-[3] pointer-events-none',
    speedx: 0.195,
    speedy: 0.305,
    speedz: 0.15,
    rotation: 0,
    distance: 60,
    delay: 0.25,
    duration: 0.75,
  },
  {
    png: '/img/fog_6.png',
    webp: '/img/fog_6.webp',
    class:
      'parallax absolute w-[92%] top-[130%] left-[33%] -translate-x-1/2 -translate-y-1/2 z-[4] pointer-events-none',
    speedx: 0.25,
    speedy: 0.28,
    speedz: 0,
    rotation: 0,
    distance: 85,
    delay: 0.25,
    duration: 0.75,
  },
  {
    png: '/img/mountain_9.png',
    webp: '/img/mountain_9.webp',
    class:
      'parallax absolute w-[25%] top-[150%] left-[15%] -translate-x-1/2 -translate-y-1/2 z-[5] pointer-events-none',
    speedx: 0.125,
    speedy: 0.155,
    speedz: 0.15,
    rotation: 0.02,
    distance: 65,
    delay: 0.25,
    duration: 0.75,
  },
  {
    png: '/img/mountain_8.png',
    webp: '/img/mountain_8.webp',
    class:
      'parallax absolute w-[51%] top-[200%] left-[38%] -translate-x-1/2 -translate-y-1/2 z-[6] pointer-events-none',
    speedx: 0.1,
    speedy: 0.11,
    speedz: 0,
    rotation: 0.02,
    distance: 68,
    delay: 0.25,
    duration: 0.75,
  },
  {
    png: '/img/fog_5.png',
    webp: '/img/fog_5.webp',
    class:
      'parallax absolute w-[75%] top-[150%] left-[49%] -translate-x-1/2 -translate-y-1/2 z-[7] pointer-events-none',
    speedx: 0.16,
    speedy: 0.105,
    speedz: 0,
    rotation: 0,
    distance: 70,
    delay: 0.25,
    duration: 0.75,
  },
  {
    png: '/img/mountain_7.png',
    webp: '/img/mountain_7.webp',
    class:
      'parallax absolute w-[33%] top-[150%] left-[72%] -translate-x-1/2 -translate-y-1/2 z-[8] pointer-events-none',
    speedx: 0.1,
    speedy: 0.03,
    speedz: 0.1,
    rotation: 0.09,
    distance: 65,
    delay: 0.35,
    duration: 0.55,
  },
  {
    png: '/img/mountain_6.png',
    webp: '/img/mountain_6.webp',
    class:
      'parallax absolute w-[25%] top-[130%] left-[85%] -translate-x-1/2 -translate-y-1/2 z-[10] pointer-events-none',
    speedx: 0.065,
    speedy: 0.005,
    speedz: 0.05,
    rotation: 0.12,
    distance: 60,
    delay: 0.35,
    duration: 0.6,
  },
  {
    png: '/img/fog_4.png',
    webp: '/img/fog_4.webp',
    class:
      'parallax absolute w-[35%] top-[130%] left-[47%] -translate-x-1/2 -translate-y-1/2 z-[11] pointer-events-none',
    speedx: 0.135,
    speedy: 0.32,
    speedz: 0,
    distance: 90,
    delay: 0.25,
    duration: 0.75,
  },
  {
    png: '/img/mountain_5.png',
    webp: '/img/mountain_5.webp',
    class:
      'parallax absolute w-[38%] top-[140%] left-[57%] -translate-x-1/2 -translate-y-1/2 z-[12] pointer-events-none',
    speedx: 0.08,
    speedy: 0.055,
    speedz: 0.5,
    rotation: 0.1,
    distance: 85,
    delay: 0.5,
    duration: 0.35,
  },
  {
    png: '/img/fog_3.png',
    webp: '/img/fog_3.webp',
    class:
      'parallax absolute w-[29%] top-[110%] left-[52%] -translate-x-1/2 -translate-y-1/2 z-[7] pointer-events-none',
    speedx: 0.11,
    speedy: 0.018,
    speedz: 0,
    rotation: 0,
    distance: 70,
    delay: 0.25,
    duration: 0.75,
  },
  {
    png: '/img/mountain_4.png',
    webp: '/img/mountain_4.webp',
    class:
      'parallax absolute w-[47%] top-[140%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-[14] pointer-events-none',
    speedx: 0.059,
    speedy: 0.024,
    speedz: 0.5,
    rotation: 0,
    distance: 85,
    delay: 0.5,
    duration: 0.35,
  },
  {
    png: '/img/mountain_3.png',
    webp: '/img/mountain_3.webp',
    class:
      'parallax absolute w-[27%] top-[130%] left-[96%] -translate-x-1/2 -translate-y-1/2 z-[15] pointer-events-none',
    speedx: 0.04,
    speedy: 0.018,
    speedz: 0.75,
    rotation: 0.05,
    distance: 70,
    delay: 0.6,
    duration: 0.3,
  },
  {
    png: '/img/fog_2.png',
    webp: '/img/fog_2.webp',
    class:
      'parallax absolute w-[95%] top-[130%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-[4] pointer-events-none',
    speedx: 0.15,
    speedy: 0.0115,
    speedz: 0,
    rotation: 0,
    distance: 70,
    delay: 0.25,
    duration: 0.75,
  },
  {
    png: '/img/mountain_2.png',
    webp: '/img/mountain_2.webp',
    class:
      'parallax absolute w-[41%] top-[140%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-[17] pointer-events-none',
    speedx: 0.0235,
    speedy: 0.025,
    speedz: 0.5,
    rotation: 0.15,
    distance: 85,
    delay: 0.6,
    duration: 0.3,
  },
  {
    png: '/img/mountain_1.png',
    webp: '/img/mountain_1.webp',
    class:
      'parallax absolute w-[29%] top-[140%] left-[6%] -translate-x-1/2 -translate-y-1/2 z-[18] pointer-events-none',
    speedx: 0.027,
    speedy: 0.018,
    speedz: 0.75,
    rotation: 0.2,
    distance: 60,
    delay: 0.6,
    duration: 0.4,
  },
  {
    png: '/img/sun_rays.png',
    webp: '/img/sun_rays.webp',
    class:
      'absolute w-[39%] top-0 right-0 z-[19] pointer-events-none hide opacity-0',
  },
  {
    png: '/img/black_shadow.png',
    webp: '/img/black_shadow.webp',
    class:
      'absolute w-full bottom-0 right-0 z-[20] pointer-events-none hide opacity-0',
  },
  {
    png: '/img/fog_1.png',
    webp: '/img/fog_1.webp',
    class:
      'parallax absolute w-[124%] top-[130%] left-[66%] -translate-x-1/2 -translate-y-1/2 z-[2] pointer-events-none',
    speedx: 0.12,
    speedy: 0.01,
    distance: 70,
    delay: 0.75,
    duration: 0.5,
  },
]
