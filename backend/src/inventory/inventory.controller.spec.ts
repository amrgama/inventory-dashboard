import { Test, TestingModule } from '@nestjs/testing';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';

describe('InventoryController', () => {
  let controller: InventoryController;
  let service: Record<string, jest.Mock>;

  const mockItem = {
    _id: '123',
    name: 'Test Item',
    sku: 'TEST-SKU',
    quantity: 10,
    price: 100,
    description: 'Test Description',
  };

  const mockService = {
    findAll: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryController],
      providers: [
        {
          provide: InventoryService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<InventoryController>(InventoryController);
    service = module.get(InventoryService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all items', async () => {
      service.findAll.mockResolvedValue([mockItem]);
      const result = await controller.findAll();
      expect(result).toEqual([mockItem]);
    });
  });

  describe('findById', () => {
    it('should return an item', async () => {
      service.findById.mockResolvedValue(mockItem);
      const result = await controller.findById('123');
      expect(result).toEqual(mockItem);
    });
  });

  describe('create', () => {
    it('should create a new item', async () => {
      service.create.mockResolvedValue(mockItem);
      const result = await controller.create({
        name: 'Test Item',
        sku: 'TEST-SKU',
        quantity: 10,
        price: 100,
      });
      expect(result).toEqual(mockItem);
    });
  });

  describe('update', () => {
    it('should update an item', async () => {
      service.update.mockResolvedValue({ ...mockItem, quantity: 20 });
      const result = await controller.update('123', { quantity: 20 });
      expect(result?.quantity).toBe(20);
    });
  });

  describe('delete', () => {
    it('should delete an item', async () => {
      service.delete.mockResolvedValue({
        message: 'Item deleted successfully',
      });
      const result = await controller.delete('123');
      expect(result).toEqual({ message: 'Item deleted successfully' });
    });
  });
});
