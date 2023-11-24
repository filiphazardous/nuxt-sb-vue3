<script lang="ts" setup>
import { computed } from "vue";
import {
  type IButton,
  IButtonColor,
  IButtonSize,
  IButtonType,
  IButtonVariant,
} from "./types/UnionenButton.interface";

const props = withDefaults(defineProps<IButton>(), {
  label: undefined,
  variant: IButtonVariant.Contained,
  type: IButtonType.Button,
  size: IButtonSize.Medium,
  colorScheme: IButtonColor.Primary,
  path: undefined,
  ariaLabel: undefined,
  loading: false,
  disabled: false,
});
const emit = defineEmits(["click"]);
const tag = computed(() => (props.path ? "a" : "button"));
const role = computed(() => (props.path ? "button" : undefined));
const title = computed(() => (props.path ? props.label : undefined));
const slots = useSlots();
const { hasSlotContent } = useSlotUtility();
const prepend = computed<boolean>(() => hasSlotContent(slots.prepend));
const append = computed<boolean>(() => hasSlotContent(slots.append));
function onClick() {
  emit("click");
}
</script>

<template>
  <component
    :is="tag"
    :aria-label="ariaLabel"
    :disabled="disabled"
    :path="path"
    :role="role"
    :title="title"
    :type="type"
    @click="onClick"
  >
    <div v-if="prepend" :class="[loading && 'invisible']" class="mr-3 h-6 w-6">
      <slot name="prepend" />
    </div>
    <span :class="[loading && 'invisible']">
      <slot>
        {{ label }}
      </slot>
    </span>
    <div v-if="append" :class="[loading && 'invisible']" class="ml-3 h-6 w-6">
      <slot name="append" />
    </div>
  </component>
</template>
