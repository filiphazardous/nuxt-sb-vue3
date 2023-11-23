<template>
  <div>
    <UnionenButton label="test"><template #prepend><HouseHomeMediumWrapped /></template></UnionenButton>
  </div>
</template>
<script setup lang="ts">
import { HouseHomeMedium, makeVueComponent } from '@unionen/icons';

const HouseHomeMediumWrapped = makeVueComponent(HouseHomeMedium);
</script>
