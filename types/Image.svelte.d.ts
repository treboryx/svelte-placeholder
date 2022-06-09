/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ImageProps {
  /**
   * @default "skeleton"
   */
  placeholder?: string;

  /**
   * @default undefined
   */
  src: string;

  /**
   * @default undefined
   */
  alt?: string;

  /**
   * @default undefined
   */
  width?: string | number;

  /**
   * @default undefined
   */
  height?: string | number;

  /**
   * @default "lazy"
   */
  loading?: "lazy" | "eager";

  /**
   * @default "browser"
   */
  darkMode?: "browser" | true | false;
}

export default class Image extends SvelteComponentTyped<ImageProps, {}, {}> {}
