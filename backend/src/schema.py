import graphene

import articles.schema


class Query(articles.schema.Query, graphene.ObjectType):
    pass


class Mutation(articles.schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
