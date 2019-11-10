<template>
  <div class="error">
    <p>
      Tivemos um problema ao recuperar os dados do servidor.<br>
      Tente novamente mais tarde.
    </p>

    <button class="btn" @click.prevent="onTryAgain">
      Tentar Novamente
    </button>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      default: false,
    },
  },
  created() {
    console.error(this.error);
  },
  methods: {
    onTryAgain() {
      window.location.reload();
    },
  },
};
</script>

<style lang="scss">
  .error {
    text-align: center;
    padding: 30px 0;
  }
</style>
