const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { slug } = ctx.params;
    const tags = await strapi
      .query("tags")
      .find({ _limit: 10, slug_in: slug.split(",") });
    return sanitizeEntity(tags, { model: strapi.models.tags });
  },
};

// api/category/controllers/category.js
/* const getCategoryTags = async (category) => {
  let tagIds = await strapi.connections.default.raw(
     `SELECT * FROM articles_tags__tags_articles WHERE article_id in (${articleIds.join()})`
   );

   tagIds = JSON.stringify(tagIds.rows);
   tagIds = JSON.parse(tagIds).map((a) => a.tag_id);

   const tags = await strapi
     .query("tag")
     .model.query((qb) => {
       qb.where("id", "in", tagIds);
     })
     .fetchAll({
       withRelated: [
         {
           articles: (qb) => {
             qb.where("category_id", "=", category.id);
           },
         },
       ],
     });

   return tags.toJSON();
}
strapi.query('restaurant').find({ _limit: 10, id_in: [1, 2] });

module.exports = {
 find: async (ctx) => {
   const { slug } = ctx.query;

   const categories = await strapi
     .query("category")
     .find(ctx.query, ["articles.tags", "quote.person"]);

   if (slug && categories[0]) {
     categories[0].tags = await getCategoryTags(categories[0]);
   }

   return categories;
 },
 findOne: async (ctx) => {
   const category = await strapi
     .query("category")
     .findOne({ id: ctx.params.id }, ["articles.tags"]);

   category.tags = await getCategoryTags(category);

   return category;
 },
}; */
