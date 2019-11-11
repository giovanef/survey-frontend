<template>
  <form class="pools-form" @submit.prevent="onSubmitForm">
    <div class="field">
      <label for="description">Descrição da enquente</label>
      <input id="description" type="text" v-model="description" placeholder="Descrição">
    </div>

    <div class="field">
      <label>Opções da enquente</label>
      <template v-for="(item, index) in options">
        <div class="dynamic-field" :key="index">
          <input
            class="mb-5" type="text" placeholder="Descrição da Opção"
            v-model="options[index]"
          >
          <i class="fas fa-times remove" @click="onOptionRemove(index)"></i>
        </div>
      </template>

      <button type="button" class="btn btn-block mb-10" @click="onOptionAdd">
        Adicionar opção
      </button>
    </div>

    <button type="submit" class="btn btn-primary">
      Salvar
    </button>
  </form>
</template>

<script>
import Swal from 'sweetalert2';

import api from '@/services/api';

export default {
  data() {
    return {
      description: '',
      options: [],
    };
  },
  methods: {
    onOptionAdd() {
      this.options.push('');
    },
    onOptionRemove(index) {
      this.options.splice(index, 1);
    },
    onSubmitForm() {
      api
        .post('/pools', {
          description: this.description,
          options: this.options,
        })
        .then(() => {
          Swal.fire(
            'Sucesso',
            'A enquete foi criada!',
            'success',
          ).then(() => {
            this.$router.push({ name: 'home' });
          });
        })
        .catch((error) => {
          Swal.fire(
            'Ops!',
            error.response.data.message,
            'error',
          );
        });
    },
  },
};
</script>
