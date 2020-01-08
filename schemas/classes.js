export default {
  name: "classes",
  title: "Classes",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "date",
      title: "Date",
      type: "datetime"
    },
    {
      name: "formlink",
      title: "Form Link",
      type: "string"
    },
    {
      name: "desc",
      title: "Description",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },

    {
      name: "body",
      title: "Body",
      type: "markdown"
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" }
    },
    {
      name: "mainImage",
      title: "Banner",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }]
    },
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string"
    },
    {
      name: "metaKeywords",
      title: "Meta Keywords",
      type: "string"
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text"
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Published", value: "published" },
          { title: "Unpublished", value: "unpublished" }
        ]
      }
    }
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage"
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
