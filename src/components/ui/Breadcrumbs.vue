<template>
  <div class="breadcrumbs">
    <ul class="breadcrumb">
      <template v-for="(item, index) in items">
        <li :key="index">
          <router-link :to="item.to">
            {{ item.title }}
          </router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
