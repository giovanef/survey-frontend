<template>
  <div class="pools">
    <template v-if="poolLoading">
      <loading></loading>
    </template>
    <template v-else-if="poolError">
      <error :error="poolError"></error>
    </template>
    <template v-else>
      <pools-view :pool="pool"></pools-view>
    </template>
  </div>
</template>

<script>
import api from '@/services/api';

import Loading from '@/components/ui/Loading.vue';
import Error from '@/components/ui/Error.vue';
import PoolsView from '@/components/features/PoolsView.vue';

export default {
  data() {
    return {
      pool: null,
      poolLoading: true,
      poolError: false,
    };
  },
  mounted() {
    api
      .get(`/pools/${this.$route.params.id}`)
      .then((response) => {
        this.pool = response.data;
        this.poolLoading = false;
      })
      .catch((error) => {
        this.poolError = error;
        this.poolLoading = false;
      });
  },
  components: {
    Loading,
    Error,
    PoolsView,
  },
};
</script>
