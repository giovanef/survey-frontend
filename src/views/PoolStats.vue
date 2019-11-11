<template>
  <div>
    <breadcrumbs :items="breadcrumbs"></breadcrumbs>

    <div class="pools">
      <template v-if="poolLoading">
        <loading></loading>
      </template>
      <template v-else-if="poolError">
        <error :error="poolError"></error>
      </template>
      <template v-else>
        <pools-stats :pool="pool"></pools-stats>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';

import Breadcrumbs from '@/components/ui/Breadcrumbs.vue';
import Loading from '@/components/ui/Loading.vue';
import Error from '@/components/ui/Error.vue';
import PoolsStats from '../components/features/PoolsStats.vue';

export default {
  data() {
    return {
      breadcrumbs: [
        { title: 'Home', to: { name: 'home' } },
        {
          title: `Enquete ${this.$route.params.id}`,
          to: { name: 'pools-view', params: { id: this.$route.params.id } },
        },
        {
          title: 'Resultados',
          to: { name: 'pools-stats', params: { id: this.$route.params.id } },
        },
      ],
      pool: null,
      poolLoading: true,
      poolError: false,
    };
  },
  mounted() {
    api
      .get(`/pools/${this.$route.params.id}/stats`)
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
    Breadcrumbs,
    Loading,
    Error,
    PoolsStats,
  },
};
</script>
