import { Comment, type Slot, Text, type VNode } from 'vue';

export default function useSlotUtility() {
  const asArray = <T>(arg: T | T[] | null) => {
    return Array.isArray(arg) ? arg : arg !== null ? [arg] : [];
  };

  const isVNodeEmpty = (vnode: VNode | VNode[] | undefined | null) => {
    return (
      !vnode ||
      asArray(vnode).every(
        (vnode) =>
          vnode.type === Comment ||
          (vnode.type === Text && !vnode.children?.length),
      )
    );
  };

  const isSlotEmpty = (slot: Slot | undefined | null, props: any = {}) => {
    return isVNodeEmpty(slot?.(props));
  };

  const hasSlotContent = (
    slot: Slot | undefined | null,
    props: any = {},
  ): boolean => {
    return !isSlotEmpty(slot, props);
  };

  return {
    asArray,
    isVNodeEmpty,
    isSlotEmpty,
    hasSlotContent,
  };
}
