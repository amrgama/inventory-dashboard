import { Test, TestingModule } from '@nestjs/testing';
import { InventoryService } from './inventory.service';
import { INVENTORY_REPOSITORY } from './repositories/inventory.repository.interface';
import { NotFoundException, ConflictException } from '@nestjs/common';

describe('InventoryService', () => {
  let service: InventoryService;
  let repository: Record<string, jest.Mock>;

  const mockItem = {
    _id: '123',
    name: 'Test Item',
    sku: 'TEST-SKU',
    quantity: 10,
    price: 100,
    description: 'Test Description',
  };

  const mockRepository = {
    findAll: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InventoryService,
        {
          provide: INVENTORY_REPOSITORY,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<InventoryService>(InventoryService);
    repository = module.get(INVENTORY_REPOSITORY);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all items', async () => {
      repository.findAll.mockResolvedValue([mockItem]);
      const result = await service.findAll();
      expect(result).toEqual([mockItem]);
    });
  });

  describe('findById', () => {
    it('should return an item if found', async () => {
      repository.findById.mockResolvedValue(mockItem);
      const result = await service.findById('123');
      expect(result).toEqual(mockItem);
    });

    it('should throw NotFoundException if not found', async () => {
      repository.findById.mockResolvedValue(null);
      await expect(service.findById('123')).rejects.toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('should create a new item', async () => {
      repository.create.mockResolvedValue(mockItem);
      const result = await service.create({
        name: 'Test Item',
        sku: 'test-sku',
        quantity: 10,
        price: 100,
      });
      expect(result).toEqual(mockItem);
      expect(repository.create).toHaveBeenCalledWith({
        name: 'Test Item',
        sku: 'TEST-SKU',
        quantity: 10,
        price: 100,
      });
    });

    it('should throw ConflictException if SKU exists', async () => {
      repository.create.mockRejectedValue({ code: 11000 });
      await expect(
        service.create({
          name: 'Test Item',
          sku: 'TEST-SKU',
          quantity: 10,
          price: 100,
        }),
      ).rejects.toThrow(ConflictException);
    });
  });

  describe('update', () => {
    it('should update an item', async () => {
      repository.findById.mockResolvedValue(mockItem);
      repository.update.mockResolvedValue({ ...mockItem, quantity: 20 });
      const result = await service.update('123', { quantity: 20 });
      expect(result?.quantity).toBe(20);
    });
  });

  describe('delete', () => {
    it('should delete an item', async () => {
      repository.findById.mockResolvedValue(mockItem);
      repository.delete.mockResolvedValue(undefined);
      const result = await service.delete('123');
      expect(result).toEqual({ message: 'Item deleted successfully' });
    });
  });
});
