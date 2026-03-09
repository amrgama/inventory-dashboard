import { NavLink, Stack } from '@mantine/core';
import { LayoutDashboard, Package, ShoppingCart, BarChart3, Settings } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Package, label: 'Inventory', path: '/inventory' },
  { icon: ShoppingCart, label: 'Orders', path: '/orders' },
  { icon: BarChart3, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Stack gap="xs" p="md">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <NavLink
            key={item.label}
            label={item.label}
            leftSection={<item.icon size={20} strokeWidth={1.5} />}
            active={isActive}
            onClick={() => navigate(item.path)}
            variant="light"
            color="brand-teal"
            styles={(theme) => ({
              root: {
                borderRadius: theme.radius.md,
                fontWeight: 500,
                color: isActive ? theme.colors['brand-teal'][6] : theme.colors['cool-gray'][6],
                backgroundColor: isActive ? theme.colors['brand-teal'][0] : 'transparent',
                '&:hover': {
                  backgroundColor: isActive ? theme.colors['brand-teal'][0] : theme.colors['cool-gray'][0],
                },
              },
              label: {
                fontWeight: 500,
              },
            })}
          />
        );
      })}
    </Stack>
  );
};
