<template>
  <div>
    <header>
      <div id="links">
        <NuxtLink to="/options"><IconsOptions/></NuxtLink>
        <NuxtLink to="/informations"><IconsInformations /></NuxtLink>
      </div>
      <NuxtLink to="/">EcoClicker</NuxtLink>
      <NuxtLink to="/documentation">Documentation</NuxtLink>
    </header>
    <NuxtPage />
  </div>
</template>