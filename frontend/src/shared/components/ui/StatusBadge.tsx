import { Badge, type MantineColor } from '@mantine/core';

interface StatusBadgeProps {
  quantity: number;
}

export const StatusBadge = ({ quantity }: StatusBadgeProps) => {
  let label = 'In Stock';
  let color: MantineColor = 'status-green.6';

  if (quantity === 0) {
    label = 'Out of Stock';
    color = 'status-red.6';
  } else if (quantity < 10) {
    label = 'Low Stock';
    color = 'orange';
  }

  return (
    <Badge color={color} variant="light" size='lg' radius="xl">
      {label}
    </Badge>
  );
};
