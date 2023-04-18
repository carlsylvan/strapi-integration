'use strict';

/**
 * computer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::computer.computer');
