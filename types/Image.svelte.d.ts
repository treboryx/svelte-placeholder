/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ImageProps {
  /**
   * @default undefined
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
}

export default class Image extends SvelteComponentTyped<ImageProps, {}, {}> {}
