import { createGraphQLClient } from "@solid-primitives/graphql";
export const newQuery = createGraphQLClient(
  "https://megalo-graphql-app.azurewebsites.net/api/src"
);
