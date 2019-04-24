import graphene
from graphene_django import DjangoObjectType

from .models import Article


class ArticleType(DjangoObjectType):
    class Meta:
        model = Article


class Query(graphene.ObjectType):
    articles = graphene.List(ArticleType)

    def resolve_articles(self, info, **kwargs):
        return Article.objects.all()  # pylint: disable=no-member

# Mutation


class CreateArticle(graphene.Mutation):
    id = graphene.Int()
    title = graphene.String()
    content = graphene.String()

    # nanti akan dipanggil seperti ini
    # mutation { createArticle(title: "xxx", content: "xxx") { id\n title\n content\n }}
    class Arguments:
        title = graphene.String()
        content = graphene.String()

    def mutate(self, info, title, content):
        article = Article(title=title, content=content)
        article.save()

        # pylint: disable=no-member
        return CreateArticle(
            id=article.id,
            title=article.title,
            content=article.content,
        )


class Mutation(graphene.ObjectType):
    create_article = CreateArticle.Field()
