import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dsdemo',
  connector: 'mysql',
  url: 'mysql://demo_dbadmin:zaq12wsx!@@localhost/demo_db',
  host: 'localhost',
  port: 3306,
  user: 'demo_dbadmin',
  password: 'zaq12wsx!@',
  database: 'demo_db'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DsdemoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dsdemo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dsdemo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
