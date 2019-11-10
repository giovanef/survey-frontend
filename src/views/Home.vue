<template>
  <div class="pools">
    <div class="pools-utils">
      <router-link to="/pools/new" tag="button" class="btn">
        Adicionar
      </router-link>
    </div>

    <ul class="pools-list">
      <li>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat quo nam inventore tenetur.
        </p>
      </li>
      <li>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat quo nam inventore tenetur.
        </p>
      </li>
      <li>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat quo nam inventore tenetur.
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pools: [],
    };
  },
  mounted() {
  },
};
</script>
