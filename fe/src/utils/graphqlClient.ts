import { createGraphQLClient } from "@solid-primitives/graphql";
export const newQuery = createGraphQLClient(
  "http://localhost:4000/api/graphql"
);
