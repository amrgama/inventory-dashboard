import { 
  Modal, 
  TextInput, 
  NumberInput, 
  Textarea, 
  Button, 
  Group, 
  Stack,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';
import type { InventoryItem, CreateInventoryDto } from '../types/inventory.types';

interface InventoryModalProps {
  opened: boolean;
  onClose: () => void;
  onSubmit: (values: CreateInventoryDto) => void;
  initialValues?: InventoryItem | null;
  loading?: boolean;
}

export const InventoryModal = ({ 
  opened, 
  onClose, 
  onSubmit, 
  initialValues,
  loading 
}: InventoryModalProps) => {
  const form = useForm<CreateInventoryDto>({
    initialValues: {
      name: '',
      sku: '',
      quantity: 0,
      price: 0,
      category: '',
      description: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      sku: (value) => (/^[A-Z0-9-]+$/.test(value) ? null : 'Invalid SKU format'),
      quantity: (value) => (value < 0 ? 'Quantity cannot be negative' : null),
      price: (value) => (value < 0 ? 'Price cannot be negative' : null),
    },
  });

  useEffect(() => {
    if (initialValues) {
      form.setValues({
        name: initialValues.name,
        sku: initialValues.sku,
        quantity: initialValues.quantity,
        price: initialValues.price,
        category: initialValues.category || '',
        description: initialValues.description || '',
      });
    } else {
      form.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues, opened]);

  return (
    <Modal 
      opened={opened} 
      onClose={onClose} 
      title={initialValues ? 'Edit Item' : 'Add New Item'}
      size="md"
      radius="md"
      centered
    >
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Name"
            placeholder="Item name"
            required
            {...form.getInputProps('name')}
          />
          <TextInput
            label="SKU"
            placeholder="INV-001"
            required
            disabled={!!initialValues}
            {...form.getInputProps('sku')}
          />
          <Group grow>
            <NumberInput
              label="Quantity"
              placeholder="0"
              min={0}
              required
              {...form.getInputProps('quantity')}
            />
            <NumberInput
              label="Price (SAR)"
              placeholder="0.00"
              min={0}
              decimalScale={2}
              required
              {...form.getInputProps('price')}
            />
          </Group>
          <TextInput
            label="Category"
            placeholder="e.g. Raw Materials"
            {...form.getInputProps('category')}
          />
          <Textarea
            label="Description"
            placeholder="Item details..."
            {...form.getInputProps('description')}
          />
          <Group justify="flex-end" mt="md">
            <Button variant="outline" color="gray" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" color="brand-teal" loading={loading}>
              {initialValues ? 'Update Item' : 'Create Item'}
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
};
