import {DefaultCrudRepository} from '@loopback/repository';
import {TDemo, TDemoRelations} from '../models';
import {DsdemoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TDemoRepository extends DefaultCrudRepository<
  TDemo,
  typeof TDemo.prototype.id,
  TDemoRelations
> {
  constructor(
    @inject('datasources.dsdemo') dataSource: DsdemoDataSource,
  ) {
    super(TDemo, dataSource);
  }
}
