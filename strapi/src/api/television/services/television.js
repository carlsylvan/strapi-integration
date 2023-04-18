'use strict';

/**
 * television service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::television.television');
