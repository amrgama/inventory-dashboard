export interface InventoryItem {
  _id: string;
  name: string;
  sku: string;
  quantity: number;
  price: number;
  category?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateInventoryDto {
  name: string;
  sku: string;
  quantity: number;
  price: number;
  category?: string;
  description?: string;
}

export type UpdateInventoryDto = Partial<CreateInventoryDto>;
