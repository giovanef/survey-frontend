<template>
  <ul class="pools-list">
    <template v-for="(pool, index) in pools">
      <router-link
        :to="{ name: 'pools-view', params: { id: pool.id } }"
        tag="li" :key="index"
      >
        <p>{{ pool.description }}</p>
      </router-link>
    </template>
  </ul>
</template>

<script>
export default {
  props: {
    pools: {
      type: Array,
      required: true,
    },
  },
};
</script>
