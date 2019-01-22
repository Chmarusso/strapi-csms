'use strict';

/**
 * Menuitem.js controller
 *
 * @description: A set of functions called "actions" for managing `Menuitem`.
 */

module.exports = {

  /**
   * Retrieve menuitem records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.menuitem.search(ctx.query);
    } else {
      return strapi.services.menuitem.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a menuitem record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.menuitem.fetch(ctx.params);
  },

  /**
   * Count menuitem records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.menuitem.count(ctx.query);
  },

  /**
   * Create a/an menuitem record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.menuitem.add(ctx.request.body);
  },

  /**
   * Update a/an menuitem record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.menuitem.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an menuitem record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.menuitem.remove(ctx.params);
  }
};
