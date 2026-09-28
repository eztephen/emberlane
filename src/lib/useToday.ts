import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Day of the week on the visitor's device (0 = Sunday). Null during server render,
// so statically generated HTML never claims the wrong day.
export function useToday(): number | null {
  return useSyncExternalStore(
    subscribe,
    () => new Date().getDay(),
    () => null,
  );
}
