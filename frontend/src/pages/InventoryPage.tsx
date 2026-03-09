import { 
  Title, 
  Group, 
  Button, 
  TextInput, 
  ActionIcon, 
  Stack, 
  Loader, 
  Center,
  Text 
} from '@mantine/core';
import { Search, Filter, Plus } from 'lucide-react';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useInventory } from '../features/inventory/hooks/useInventory';
import { InventoryTable } from '../features/inventory/components/InventoryTable';
import { InventoryModal } from '../features/inventory/components/InventoryModal';
import { useDebounce } from '../shared/hooks/useDebounce';
import type { InventoryItem, CreateInventoryDto } from '../features/inventory/types/inventory.types';

export const InventoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

  const { query, createMutation, updateMutation, deleteMutation } = useInventory(debouncedSearch);

  const handleEdit = (item: InventoryItem) => {
    setSelectedItem(item);
    open();
  };

  const handleCreate = () => {
    setSelectedItem(null);
    open();
  };

  const handleSubmit = async (values: CreateInventoryDto) => {
    if (selectedItem) {
      await updateMutation.mutateAsync({ id: selectedItem._id, dto: values });
    } else {
      await createMutation.mutateAsync(values);
    }
    close();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      await deleteMutation.mutateAsync(id);
    }
  };

  return (
    <Stack gap="xl">
      <Title order={2} fw={700}>Inventory Items</Title>

      <Group justify="space-between">
        <Group gap="sm" style={{ flex: 1, maxWidth: 400 }}>
          <TextInput
            placeholder="Search..."
            leftSection={<Search size={16} color="gray" />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
            style={{ flex: 1 }}
            radius="md"
            size="md"
          />
          <ActionIcon 
            variant="filled" 
            color="brand-teal" 
            size="input-md" 
            radius="md"
          >
            <Search size={20} />
          </ActionIcon>
        </Group>

        <Group>
          <Button 
            variant="outline" 
            color="cool-gray" 
            leftSection={<Filter size={18} />}
            radius="md"
            size="md"
          >
            Filter
          </Button>
          <Button 
            color="brand-teal" 
            leftSection={<Plus size={18} />}
            onClick={handleCreate}
            radius="md"
            size="md"
          >
            Add Item
          </Button>
        </Group>
      </Group>

      {query.isLoading ? (
        <Center py="xl">
          <Loader color="brand-teal" size="xl" />
        </Center>
      ) : query.isError ? (
        <Center py="xl">
          <Text color="red">Error loading inventory. Please check backend connection.</Text>
        </Center>
      ) : (
        <InventoryTable 
          items={query.data || []} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      )}

      <InventoryModal
        opened={opened}
        onClose={close}
        onSubmit={handleSubmit}
        initialValues={selectedItem}
        loading={createMutation.isPending || updateMutation.isPending}
      />
    </Stack>
  );
};
