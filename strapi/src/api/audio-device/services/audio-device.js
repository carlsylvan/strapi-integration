'use strict';

/**
 * audio-device service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::audio-device.audio-device');
