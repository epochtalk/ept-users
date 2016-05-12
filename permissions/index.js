var Joi = require('joi');

var validation =  Joi.object().keys({
  update: Joi.object().keys({
    allow: Joi.boolean(),
    bypass: Joi.object().keys({
      priority: Joi.object().keys({
        admin: Joi.boolean(),
        mod: Joi.boolean()
      }).xor('admin', 'mod')
    })
  }),
  find: Joi.object().keys({
    allow: Joi.boolean(),
    bypass: Joi.object().keys({
      viewDeleted: Joi.boolean(),
      viewMoreInfo: Joi.boolean()
    })
  }),
  deactivate: Joi.object().keys({
    allow: Joi.boolean(),
    bypass: Joi.object().keys({
      priority: Joi.object().keys({
        admin: Joi.boolean(),
        mod: Joi.boolean()
      }).xor('admin', 'mod')
    })
  }),
  reactivate: Joi.object().keys({
    allow: Joi.boolean(),
    bypass: Joi.object().keys({
      priority: Joi.object().keys({
        admin: Joi.boolean(),
        mod: Joi.boolean()
      }).xor('admin', 'mod')
    })
  }),
  delete: Joi.object().keys({
    allow: Joi.boolean(),
    bypass: Joi.object().keys({
      priority: Joi.object().keys({
        admin: Joi.boolean(),
        mod: Joi.boolean()
      }).xor('admin', 'mod')
    })
  }),
});

var superAdministrator = {
  update: {
    allow: true,
    bypass: { priority: { admin: true } }
  },
  find: {
    allow: true,
    bypass: {
      viewDeleted: true,
      viewMoreInfo: true
    }
  },
  deactivate: {
    allow: true,
    bypass: { priority: { admin: true } }
  },
  reactivate: {
    allow: true,
    bypass: { priority: { admin: true } }
  },
  delete: {
    allow: true,
    bypass: { priority: { admin: true } }
  }
};

var administrator = {
  update: {
    allow: true,
    bypass: { priority: { admin: true } }
  },
  find: {
    allow: true,
    bypass: {
      viewDeleted: true,
      viewMoreInfo: true
    }
  },
  deactivate: {
    allow: true,
    bypass: { priority: { admin: true } }
  },
  reactivate: {
    allow: true,
    bypass: { priority: { admin: true } }
  },
  delete: {
    allow: true,
    bypass: { priority: { admin: true } }
  }
};

var globalModerator = {
  update: {
    allow: true,
    bypass: { priority: { mod: true } }
  },
  find: {
    allow: true,
    bypass: {
      viewDeleted: true,
      viewMoreInfo: true
    }
  },
  deactivate: {
    allow: true,
    bypass: { priority: { mod: true } }
  },
  reactivate: {
    allow: true,
    bypass: { priority: { mod: true } }
  },
  delete: {
    allow: true,
    bypass: { priority: { mod: true } }
  }
};

var moderator = {
  update: {
    allow: true,
    bypass: { priority: { mod: true } }
  },
  find: {
    allow: true,
    bypass: {
      viewDeleted: true,
      viewMoreInfo: true
    }
  },
  deactivate: {
    allow: true,
    bypass: { priority: { mod: true } }
  },
  reactivate: {
    allow: true,
    bypass: { priority: { mod: true } }
  },
  delete: {
    allow: true,
    bypass: { priority: { mod: true } }
  }
};

var patroller = {
  update: { allow: true },
  find: { allow: true },
  deactivate: { allow: true },
  reactivate: { allow: true }
};

var user = {
  update: { allow: true },
  find: { allow: true },
  deactivate: { allow: true },
  reactivate: { allow: true }
};

var newbie = {
  update: { allow: true },
  find: { allow: true },
  deactivate: { allow: true },
  reactivate: { allow: true }
};

var banned = {
  find: { allow: true }
};

var anonymous = {
  find: { allow: true }
};

var layout = {
  update: {
    title: 'Update User Accounts',
    bypasses: [ { description: 'Other Users', control: 'priority', } ],
  },
  find: {
    title: 'View User Accounts',
    bypasses: [
      { description: 'View Deactivated Accounts', control: 'viewDeleted', type: 'boolean' },
      { description: 'View Sensitive Information', control: 'viewMoreInfo', type: 'boolean'}
    ]
  },
  deactivate: {
    title: 'Deactivate User Accounts',
    bypasses: [ { description: 'Other Users', control: 'priority' } ]
  },
  reactivate: {
    title: 'Reactivate User Accounts',
    bypasses: [ { description: 'Other Users', control: 'priority' } ]
  },
  delete: {
    title: 'Delete User Accounts',
    bypasses: [ { description: 'Other Users', control: 'priority' } ]
  }
};

module.exports = {
  validation: validation,
  layout: layout,
  defaults: {
    superAdministrator: superAdministrator,
    administrator: administrator,
    globalModerator: globalModerator,
    moderator: moderator,
    patroller: patroller,
    user: user,
    newbie: newbie,
    banned: banned,
    anonymous: anonymous,
    private: {}
  }
};
