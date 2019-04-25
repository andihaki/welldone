import graphene
import graphql_jwt

import articles.schema
import users.schema


class Query(articles.schema.Query, users.schema.Query, graphene.ObjectType):
    pass


class Mutation(articles.schema.Mutation, users.schema.Mutation, graphene.ObjectType):
    # for authentication
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
