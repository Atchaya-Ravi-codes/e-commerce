import type { Breakpoint } from "../../types/breakpoint";
import { useBreakpoint } from "../../hooks/useBreakpoint/useBreakpoint";

export function useIsBreakpoint(...breakpoints: Breakpoint[]): boolean {
    const breakpoint = useBreakpoint();

    if (!breakpoint) {
        return false;
    }

    return breakpoints.includes(breakpoint);
}
