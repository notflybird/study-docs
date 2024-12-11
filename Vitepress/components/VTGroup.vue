<script lang="ts" setup>
import VTCodeGroupTab from './index.vue';
import { useSlots} from 'vue'
const children = useSlots().default?.()
const tabs = children?.filter(({ type }) => type === VTCodeGroupTab)
</script>

<template>
  <div class="vt-code-group">
    <div>
        <span>npm</span>
        <span>pnpm</span>
        <span>yarn</span>
    </div>
    <div class="vt-code-group-contents">
      <component
        v-for="tab, idx in tabs"
        :key="idx"
        :is="tab"
      />
    </div>
  </div>
</template>
