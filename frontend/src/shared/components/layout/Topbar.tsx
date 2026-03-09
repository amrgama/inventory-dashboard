import { Group, Avatar, Text, Stack } from '@mantine/core';

export const Topbar = () => {
  return (
    <Group justify="flex-end" px="xl" h="100%">
      <Group gap="sm">
        <Stack gap={0} align="flex-end">
          <Text size="sm" fw={500} c="dimmed">Admin User</Text>
        </Stack>
        <Avatar 
          radius="xl" 
          color="gray.2" 
          c="gray.7" 
          size="md"
        >
          AU
        </Avatar>
      </Group>
    </Group>
  );
};
