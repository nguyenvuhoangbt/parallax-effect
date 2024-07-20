<template>
  <header
    class="min-w-[375px] overflow-hidden fixed w-full z-[9999] py-[0.5rem] border-b-[1px] border-solid border-[#ffffff1a] hide opacity-0 xl:py-[0.9rem]"
  >
    <nav class="my-0 mx-auto px-5 flex justify-between items-end xl:px-20">
      <picture
        class="w-[75px] xl:w-[100px] py-3"
        style="transition: 0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99)"
      >
        <source srcset="/img/logo.webp" type="image/webp" />
        <source srcset="/img/logo.png" type="image/png" />
        <img src="/img/logo.png" alt="Travelo" />
      </picture>
      <ul class="flex items-center">
        <li>
          <NuxtLink
            to="#"
            class="block no-underline text-white py-3 px-4 uppercase font-light text-[0.73rem] xl:text-[0.83rem] xl:py-3 xl:px-6"
            >Login</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="#"
            class="block no-underline text-white py-3 px-4 uppercase font-light text-[0.73rem] xl:text-[0.83rem] xl:py-3 xl:px-6"
            >Sign up</NuxtLink
          >
        </li>
        <li>
          <NuxtIcon
            class="block py-3 px-4 text-[0.85rem] xl:text-[1.05rem] xl:py-3 xl:px-6"
            name="search"
            filled
            style="stroke: white"
          />
        </li>
        <li class="pl-4 xl:pl-6">
          <a
            class="flex p-0 w-[30px] h-[30px] rounded-[50%] bg-[#737373b3] backdrop-blur-[10px] justify-center items-center xl:w-[37px] xl:h-[37px]"
            href="#"
            ><div
              class="bar relative w-[52%] h-[1px] bg-white rounded-sm before:content-[''] before:absolute before:w-[60%] before:h-full before:bg-inherit before:rounded-sm before:left-1/2 before:top-[-5px] before:-translate-x-1/2 after:content-[''] after:absolute after:w-[60%] after:h-full after:bg-inherit after:rounded-sm after:left-1/2 after:top-[5px] after:-translate-x-1/2"
            ></div
          ></a>
        </li>
      </ul>
    </nav>
  </header>
</template>
