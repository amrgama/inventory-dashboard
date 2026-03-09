import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { inventoryApi } from '../api/inventory.api';
import { type CreateInventoryDto, type UpdateInventoryDto } from '../types/inventory.types';

export const useInventory = (search?: string) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ['inventory', search],
    queryFn: () => inventoryApi.findAll(search),
  });

  const createMutation = useMutation({
    mutationFn: (dto: CreateInventoryDto) => inventoryApi.create(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inventory'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, dto }: { id: string; dto: UpdateInventoryDto }) =>
      inventoryApi.update(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inventory'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => inventoryApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inventory'] });
    },
  });

  return {
    query,
    createMutation,
    updateMutation,
    deleteMutation,
  };
};
