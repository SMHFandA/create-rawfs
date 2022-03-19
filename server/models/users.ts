import {
  INTEGER,
  STRING,
} from 'sequelize';

import db from '../util/database';

const User = db.define('users', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
});

export default User;
