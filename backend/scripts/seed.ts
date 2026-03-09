import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { InventoryService } from '../src/inventory/inventory.service';
import { CreateInventoryDto } from '../src/inventory/dto/create-inventory.dto';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  // Get the service instance from the NestJS application context
  const inventoryService = app.get(InventoryService);

  const items: CreateInventoryDto[] = [
    {
      sku: 'INV-001',
      name: 'Steel Pipe 20mm',
      category: 'Raw Materials',
      quantity: 1240,
      price: 45.00,
      description: 'High-grade steel pipe for industrial construction'
    },
    {
      sku: 'INV-002',
      name: 'Copper Wire 50m',
      category: 'Electronics',
      quantity: 8,
      price: 120.00,
      description: 'Insulated copper wire for electrical wiring'
    },
    {
      sku: 'INV-003',
      name: 'Safety Gloves (L)',
      category: 'Safety Gear',
      quantity: 500,
      price: 15.00,
      description: 'Heavy-duty protective gloves'
    },
    {
      sku: 'INV-004',
      name: 'Industrial Bolt M12',
      category: 'Fasteners',
      quantity: 10000,
      price: 0.50,
      description: 'Standard M12 bolts for structural assembly'
    },
    {
      sku: 'INV-005',
      name: 'Packaging Box XL',
      category: 'Packaging',
      quantity: 5,
      price: 3.00,
      description: 'Extra large cardboard boxes for shipping'
    }
  ];

  console.log('🌱 Seeding inventory items...');

  for (const item of items) {
    try {
      await inventoryService.create(item);
      console.log(`✅ Created: ${item.sku} - ${item.name}`);
    } catch (error) {
      // In case the SKU already exists, we catch the error (likely ConflictException)
      console.log(`⚠️  Skipped ${item.sku}: ${error.message}`);
    }
  }

  console.log('🚀 Seeding complete!');
  await app.close();
}

bootstrap();
