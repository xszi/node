'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  validate: {
    enable: true,
    package: 'egg-validate',
  }
  // alinode: {
  //   enable: true,
  //   package: 'egg-alinode',
  //   env: [ 'prod', 'test' ],
  // },
};
