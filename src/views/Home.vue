<template>
  <div>
    <breadcrumbs :items="breadcrumbs"></breadcrumbs>

    <div class="pools">
      <div class="title">Enquetes</div>

      <div class="pools-utils">
        <router-link :to="{ name: 'pools-new' }" tag="button" class="btn btn-primary">
          Adicionar
        </router-link>
      </div>

      <template v-if="poolsLoading">
        <loading></loading>
      </template>
      <template v-else-if="poolsError">
        <error :error="poolsError"></error>
      </template>
      <template v-else>
        <pools-list :pools="pools"></pools-list>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';

import Breadcrumbs from '@/components/ui/Breadcrumbs.vue';
import Loading from '@/components/ui/Loading.vue';
import Error from '@/components/ui/Error.vue';
import PoolsList from '@/components/features/PoolsList.vue';

export default {
  data() {
    return {
      breadcrumbs: [
        { title: 'Home', to: { name: 'home' } },
      ],
      pools: [],
      poolsLoading: true,
      poolsError: false,
    };
  },
  mounted() {
    api.get('/pools')
      .then((response) => {
        this.poolsLoading = false;
        this.pools = response.data;
      })
      .catch((error) => {
        this.poolsError = error;
        this.poolsLoading = false;
      });
  },
  components: {
    Breadcrumbs,
    Loading,
    Error,
    PoolsList,
  },
};
</script>
