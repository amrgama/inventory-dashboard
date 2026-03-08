import { InventoryItem } from '../schemas/inventory.schema';
import { CreateInventoryDto } from '../dto/create-inventory.dto';
import { UpdateInventoryDto } from '../dto/update-inventory.dto';

export interface IInventoryRepository {
  findAll(search?: string): Promise<InventoryItem[]>;
  findById(id: string): Promise<InventoryItem | null>;
  create(dto: CreateInventoryDto): Promise<InventoryItem>;
  update(id: string, dto: UpdateInventoryDto): Promise<InventoryItem | null>;
  delete(id: string): Promise<void>;
}

export const INVENTORY_REPOSITORY = 'INVENTORY_REPOSITORY';
