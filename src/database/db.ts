import { Knex, knex } from 'knex';
import configs from './knexQueryBuilder/knexfile';

class KnexQueryBuilder {
  private readonly db: Knex;

  constructor() {
    if (process.env.NODE_ENV === 'development')
      this.db = knex(configs.development);
    else this.db = knex(configs.production);
  }

  public getDbInstance(): Knex {
    return this.db;
  }
}

export default new KnexQueryBuilder();
