# repro-10814

Issue:
[https://github.com/aws-amplify/amplify-js/issues/10814](https://github.com/aws-amplify/amplify-js/issues/10814)

Dane's investigation:
[https://github.com/aws-amplify/amplify-js/tree/fix-sort-key-index-name](https://github.com/aws-amplify/amplify-js/tree/fix-sort-key-index-name)

This schema from the API docs also fails:
[https://docs.amplify.aws/cli/graphql/data-modeling/#has-many-relationships](https://docs.amplify.aws/cli/graphql/data-modeling/#has-many-relationships)

Which is different from the DataStore docs:
[https://docs.amplify.aws/lib/datastore/relational/q/platform/js/#updated-schema](https://docs.amplify.aws/lib/datastore/relational/q/platform/js/#updated-schema)

Schema from our E2E tests:

```graphql
# 2.1 hasMany - unidirectional
# NOTE: explicit connection for unidirectional hasMany required
type Post21 @model {
  customPostId: ID! @primaryKey(sortKeyFields: ["title"])
  title: String!
  content: String!
  rating: Int
  comments: [Comment21] @hasMany
}

type Comment21 @model {
  customCommentId: ID! @primaryKey(sortKeyFields: ["content"])
  post21CommentsCustomPostId: ID!
    @index(name: "byPost21", sortKeyFields: ["post21CommentsTitle"])
  post21CommentsTitle: String!
  content: String!
  rating: Int
}
```
