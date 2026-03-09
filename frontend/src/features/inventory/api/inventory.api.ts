import axiosInstance from '../../../shared/api/axiosInstance';
import type { ApiResponse } from '../../../shared/types/api.types';
import type { 
  InventoryItem, 
  CreateInventoryDto, 
  UpdateInventoryDto 
} from '../types/inventory.types';

export const inventoryApi = {
  findAll: async (search?: string): Promise<InventoryItem[]> => {
    const { data } = await axiosInstance.get<ApiResponse<InventoryItem[]>>('/items', {
      params: { search },
    });
    return data.data;
  },

  findById: async (id: string): Promise<InventoryItem> => {
    const { data } = await axiosInstance.get<ApiResponse<InventoryItem>>(`/items/${id}`);
    return data.data;
  },

  create: async (dto: CreateInventoryDto): Promise<InventoryItem> => {
    const { data } = await axiosInstance.post<ApiResponse<InventoryItem>>('/items', dto);
    return data.data;
  },

  update: async (id: string, dto: UpdateInventoryDto): Promise<InventoryItem> => {
    const { data } = await axiosInstance.put<ApiResponse<InventoryItem>>(`/items/${id}`, dto);
    return data.data;
  },

  delete: async (id: string): Promise<void> => {
    await axiosInstance.delete(`/items/${id}`);
  },
};
