import { createTheme, type MantineColorsTuple } from '@mantine/core';

const brandTeal: MantineColorsTuple = [
  '#e6f4f1', // 0
  '#cce9e3', // 1
  '#99d3c7', // 2
  '#66bdab', // 3
  '#33a78f', // 4
  '#1a957d', // 5
  '#0d3131', // 6: PRIMARY COLOR
  '#0a2929', // 7
  '#082222', // 8
  '#061b1b', // 9: darkest
];

const statusRed: MantineColorsTuple = [
  '#fff5f5',
  '#ffe3e3',
  '#ffc9c9',
  '#ffa8a8',
  '#ff8787',
  '#fa5252',
  '#e74c3c',
  '#e03131',
  '#c92a2a',
  '#a61e1e',
];

const statusGreen: MantineColorsTuple = [
  '#ebfbee',
  '#d3f9d8',
  '#b2f2bb',
  '#8ce99a',
  '#69db7c',
  '#51cf66',
  '#2ecc71',
  '#37b24d',
  '#2f9e44',
  '#2b8a3e',
];

export const theme = createTheme({
  colors: {
    'brand-teal': brandTeal,
    'status-red': statusRed,
    'status-green': statusGreen,
  },
  primaryColor: 'brand-teal',
  primaryShade: 6,
});
