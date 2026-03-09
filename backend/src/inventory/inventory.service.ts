import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import type { IInventoryRepository } from './repositories/inventory.repository.interface';
import { INVENTORY_REPOSITORY } from './repositories/inventory.repository.interface';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(
    @Inject(INVENTORY_REPOSITORY)
    private readonly inventoryRepository: IInventoryRepository,
  ) {}

  async findAll(search?: string) {
    return this.inventoryRepository.findAll(search);
  }

  async findById(id: string) {
    const item = await this.inventoryRepository.findById(id);
    if (!item) throw new NotFoundException(`Item ${id} not found`);
    return item;
  }

  async create(dto: CreateInventoryDto) {
    dto.sku = dto.sku.toUpperCase();
    try {
      return await this.inventoryRepository.create(dto);
    } catch (error: unknown) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        error.code === 11000
      ) {
        throw new ConflictException(`SKU "${dto.sku}" already exists`);
      }
      throw error;
    }
  }

  async update(id: string, dto: UpdateInventoryDto) {
    await this.findById(id);
    return this.inventoryRepository.update(id, dto);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.inventoryRepository.delete(id);
    return { message: 'Item deleted successfully' };
  }
}
