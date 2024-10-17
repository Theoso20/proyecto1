import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('appDelivery', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;