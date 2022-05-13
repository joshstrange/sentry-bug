<template>
  <q-page class="row items-center justify-evenly">
    <q-btn @click="reproduce">Reproduce</q-btn>
  </q-page>
</template>

<script lang="ts">
import ExampleComponent from 'components/ExampleComponent.vue';

import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: { ExampleComponent }
})
export default class PageIndex extends Vue {
	reproduce() {
		this.$router.push('/test');
	}
};

</script>
