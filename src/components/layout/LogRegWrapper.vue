<template>
  <div
    class="logreg-container flex flex-column align-items-center gap-3 absolute top-50 left-50"
  >
    <div class="text-grey font-bold text-2xl text-center line-height-3">
      <slot name="header"></slot>
    </div>
    <div class="card px-4 py-6 flex flex-column gap-5 bg-white">
      <slot></slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logreg-container {
  transform: translate(-50%, -50%);

  .card {
    width: 35rem;
    border-radius: 1.2rem;
  }
}

@media only screen and (max-width: 600px) {
  .card {
    width: 30rem !important;
  }
}
</style>
