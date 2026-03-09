import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { InventoryItem, InventorySchema } from './schemas/inventory.schema';
import { INVENTORY_REPOSITORY } from './repositories/inventory.repository.interface';
import { MongoInventoryRepository } from './repositories/mongo-inventory.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: InventoryItem.name, schema: InventorySchema },
    ]),
  ],
  controllers: [InventoryController],
  providers: [
    InventoryService,
    {
      provide: INVENTORY_REPOSITORY,
      useClass: MongoInventoryRepository,
    },
  ],
})
export class InventoryModule {}
