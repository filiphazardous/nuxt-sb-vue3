export default function useStringUtility() {
  const removeHyphens = (arg: string | undefined | null) => {
    return arg ? arg.replace(/-/g, '') : '';
  };

  return {
    removeHyphens,
  };
}
