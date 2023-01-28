import type { PostResult } from "$lib/types";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
  });

  return json(sortedPosts);
};

const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob("../../blog/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata }: PostResult = (await resolver()) as PostResult;
      const postPath = `${path.slice(2, -3)}`;

      return {
        meta: metadata,
        path: postPath,
      };
    })
  );

  return allPosts;
};
