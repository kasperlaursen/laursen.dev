import type { Post } from "$lib/types";
import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ fetch }) => {
  const response = await fetch(`/api/posts`);
  const posts = (await response.json()) as Post[];

  return {
    posts,
  };
};
