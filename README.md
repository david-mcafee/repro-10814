# repro-10814

Issue:
[https://github.com/aws-amplify/amplify-js/issues/10814](https://github.com/aws-amplify/amplify-js/issues/10814)

Dane's investigation:
[https://github.com/aws-amplify/amplify-js/tree/fix-sort-key-index-name](https://github.com/aws-amplify/amplify-js/tree/fix-sort-key-index-name)

This schema from the API docs also fails:
[https://docs.amplify.aws/cli/graphql/data-modeling/#has-many-relationships](https://docs.amplify.aws/cli/graphql/data-modeling/#has-many-relationships)

Which is different from the DataStore docs:
[https://docs.amplify.aws/lib/datastore/relational/q/platform/js/#updated-schema](https://docs.amplify.aws/lib/datastore/relational/q/platform/js/#updated-schema)

Potentially related: https://github.com/aws-amplify/amplify-js/issues/10864
