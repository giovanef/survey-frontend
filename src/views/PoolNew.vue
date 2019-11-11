<template>
  <div>
    <breadcrumbs :items="breadcrumbs"></breadcrumbs>

    <div class="pools">
      <div class="title">Adicionar Enquete</div>

      <pools-form></pools-form>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue';
import PoolsForm from '@/components/features/PoolsForm.vue';

export default {
  data() {
    return {
      breadcrumbs: [
        { title: 'Home', to: { name: 'home' } },
        { title: 'Adicionar enquete', to: { name: 'pools-new' } },
      ],
    };
  },
  components: {
    Breadcrumbs,
    PoolsForm,
  },
};
</script>
