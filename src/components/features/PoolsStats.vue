<template>
  <div>
    <div class="title">{{ `${pool.description} (${pool.views} visualizações)`  }}</div>

    <div class="pools-vote">
      <table>
        <thead>
          <tr>
            <th>Opção</th>
            <th>Número de Votos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(option, index) in pool.votes" :key="index">
            <td>{{ option.description }}</td>
            <td>{{ option.votes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pool: {
      type: Object,
      required: true,
    },
  },
};
</script>
