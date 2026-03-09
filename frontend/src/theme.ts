import { createTheme, type MantineColorsTuple } from '@mantine/core';

// Deep Teal: #0D3131 (Primary)
// Light Mint: #E6F9F6 (Highlight)
const brandTeal: MantineColorsTuple = [
  '#E6F9F6',
  '#cce9e3',
  '#99d3c7',
  '#66bdab',
  '#33a78f',
  '#1a957d',
  '#0D3131',
  '#0a2929',
  '#082222',
  '#061b1b',
];

// Cool Gray: #8898AA
const coolGray: MantineColorsTuple = [
  '#F8F9FA',
  '#F1F3F5',
  '#E9ECEF',
  '#DEE2E6',
  '#CED4DA',
  '#ADB5BD',
  '#8898AA', // 6: Cool Gray
  '#495057',
  '#343A40',
  '#212529',
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
    'cool-gray': coolGray,
    'status-red': statusRed,
    'status-green': statusGreen,
  },
  primaryColor: 'brand-teal',
  primaryShade: 6,
  white: '#FFFFFF', // Pure White
  other: {
    softWhite: '#F8F9FB',
  },
});
