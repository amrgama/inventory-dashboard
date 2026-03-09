import { Title, Text, SimpleGrid, Paper, Group, ThemeIcon, Stack, Center } from '@mantine/core';
import { Package, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';

const stats = [
  { title: 'Total Items', value: '1,240', icon: Package, color: 'blue' },
  { title: 'Total Value', value: 'SAR 45,200', icon: TrendingUp, color: 'brand-teal' },
  { title: 'Low Stock', value: '8', icon: AlertTriangle, color: 'orange' },
  { title: 'In Stock', value: '1,150', icon: CheckCircle2, color: 'status-green' },
];

export const DashboardPage = () => {
  return (
    <Stack gap="xl">
      <Title order={2} fw={700}>Dashboard Overview</Title>
      
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
        {stats.map((stat) => (
          <Paper key={stat.title} withBorder p="md" radius="md" shadow="sm">
            <Group>
              <ThemeIcon color={stat.color} variant="light" size="xl" radius="md">
                <stat.icon size={24} />
              </ThemeIcon>
              <div>
                <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
                  {stat.title}
                </Text>
                <Text fw={700} size="xl">
                  {stat.value}
                </Text>
              </div>
            </Group>
          </Paper>
        ))}
      </SimpleGrid>

      <Paper withBorder p="xl" radius="md" h={300}>
        <Center h="100%">
          <Text c="dimmed">Dashboard charts and detailed analytics will be displayed here.</Text>
        </Center>
      </Paper>
    </Stack>
  );
};
