import { AppShell, Box, Group, Title, ThemeIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

export const AppShellWrapper = ({ children }: { children: React.ReactNode }) => {
  const [opened] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 240,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
      styles={(theme) => ({
        main: {
          backgroundColor: theme.other.softWhite,
        },
      })}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group gap="xs">
            <ThemeIcon color="brand-teal" size="lg" radius="md" />
            <Title order={3} c="brand-teal.6" fw={800} style={{ letterSpacing: '-0.5px' }}>
              Company
            </Title>
          </Group>
          <Topbar />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Box p="lg">
          {children}
        </Box>
      </AppShell.Main>
    </AppShell>
  );
};
