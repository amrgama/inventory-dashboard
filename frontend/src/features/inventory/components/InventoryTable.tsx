import { 
  Table, 
  ActionIcon, 
  Group, 
  Text, 
  Paper, 
  ScrollArea, 
  Badge 
} from '@mantine/core';
import { Pencil, Trash2 } from 'lucide-react';
import { type InventoryItem } from '../types/inventory.types';
import { StatusBadge } from '../../../shared/components/ui/StatusBadge';

interface InventoryTableProps {
  items: InventoryItem[];
  onEdit: (item: InventoryItem) => void;
  onDelete: (id: string) => void;
}

export const InventoryTable = ({ items, onEdit, onDelete }: InventoryTableProps) => {
  const rows = items.map((item) => (
    <Table.Tr key={item._id}>
      <Table.Td>
        <Badge variant="filled" color="cool-gray.5" radius="sm" size='lg' fw={500}>
          {item.sku}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Text>{item.name}</Text>
      </Table.Td>
      <Table.Td>
        <Text>{item.category || '-'}</Text>
      </Table.Td>
      <Table.Td>{item.quantity.toLocaleString()}</Table.Td>
      <Table.Td>
        <Text>SAR {item.price.toFixed(2)}</Text>
      </Table.Td>
      <Table.Td>
        <StatusBadge quantity={item.quantity} />
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ActionIcon 
            variant="subtle" 
            color="gray" 
            onClick={() => onEdit(item)}
            size="sm"
          >
            <Pencil size={16} />
          </ActionIcon>
          <ActionIcon 
            variant="subtle" 
            color="gray" 
            onClick={() => onDelete(item._id)}
            size="sm"
          >
            <Trash2 size={16} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper withBorder radius="md" mt="xl" shadow="sm">
      <ScrollArea>
        <Table verticalSpacing="md" horizontalSpacing="xl" highlightOnHover>
          <Table.Thead bg="gray.0">
            <Table.Tr>
              <Table.Th c="cool-gray.6" fw={600}>SKU</Table.Th>
              <Table.Th c="cool-gray.6" fw={600}>Name</Table.Th>
              <Table.Th c="cool-gray.6" fw={600}>Category</Table.Th>
              <Table.Th c="cool-gray.6" fw={600}>Quantity</Table.Th>
              <Table.Th c="cool-gray.6" fw={600}>Price</Table.Th>
              <Table.Th c="cool-gray.6" fw={600}>Status</Table.Th>
              <Table.Th c="cool-gray.6" fw={600}>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </Paper>
  );
};
