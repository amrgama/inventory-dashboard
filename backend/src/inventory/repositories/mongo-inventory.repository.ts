import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InventoryItem } from '../schemas/inventory.schema';
import { CreateInventoryDto } from '../dto/create-inventory.dto';
import { UpdateInventoryDto } from '../dto/update-inventory.dto';
import { IInventoryRepository } from './inventory.repository.interface';

@Injectable()
export class MongoInventoryRepository implements IInventoryRepository {
  constructor(
    @InjectModel(InventoryItem.name)
    private readonly model: Model<InventoryItem>,
  ) {}

  async findAll(search?: string): Promise<InventoryItem[]> {
    const query = search
      ? {
          $or: [
            { name: { $regex: search, $options: 'i' } },
            { sku: { $regex: search, $options: 'i' } },
          ],
        }
      : {};
    return this.model.find(query).sort({ createdAt: -1 });
  }

  async findById(id: string): Promise<InventoryItem | null> {
    return this.model.findById(id);
  }

  async create(dto: CreateInventoryDto): Promise<InventoryItem> {
    return new this.model(dto).save();
  }

  async update(
    id: string,
    dto: UpdateInventoryDto,
  ): Promise<InventoryItem | null> {
    return this.model.findByIdAndUpdate(id, dto, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id);
  }
}
