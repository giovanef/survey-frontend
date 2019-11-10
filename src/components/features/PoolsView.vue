<template>
  <div>
    <div class="title">{{ pool.description }}</div>

    <div class="pools-vote">
      <form @submit.prevent="onFormSubmit">
        <template v-for="(option, index) in pool.options">
          <div :key="index">
            <input
              type="radio" name="options" :id="`radio-${index}`"
              :value="option.id" v-model="selectedOption"
            >
            <label :for="`radio-${index}`">
              {{ option.description }}
            </label>
          </div>
        </template>

        <div class="buttons">
          <button class="btn btn-primary" type="submit">Votar</button>

          <router-link
            :to="{ name: 'pools-stats', params: { id: pool.id } }"
            tag="button" class="btn"
          >
            Ver Resultados
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

import api from '@/services/api';

export default {
  data() {
    return {
      selectedOption: null,
    };
  },
  props: {
    pool: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onFormSubmit() {
      if (!this.selectedOption) {
        Swal.fire(
          'Ops!',
          'Você precisa selecionar uma opção.',
          'warning',
        );
      } else {
        api
          .post(`/pools/${this.pool.id}/vote`, { id: this.selectedOption })
          .then((response) => {
            Swal.fire(
              'Sucesso',
              `Voto confirmado na opção ${response.data.id}!`,
              'success',
            ).then(() => {
              this.$router.push({ name: 'pools-stats', parans: { id: this.pool.id } });
            });
          })
          .catch(() => {
            Swal.fire(
              'Ops!',
              'Houve um erro ao salvar seu voto, tente novamente mais tarde.',
              'error',
            );
          });
      }
    },
  },
};
</script>
