import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import type { ClassValue } from "clsx";

export type { ClassValue };

export const classNames = (...classes: ClassValue[]) => twMerge(clsx(classes));
