'use strict';

/**
 * computer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::computer.computer');
