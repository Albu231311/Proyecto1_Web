import Display from './Display';

export default {
  title: 'Calculadora/Display',
  component: Display,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    valor: {
      control: { type: 'text' },
      description: 'Valor a mostrar en el display',
    },
  },
};

export const Default = {
  args: {
    valor: '0',
  },
};

export const ConNumero = {
  name: 'Con número simple',
  args: {
    valor: '123',
  },
};

export const ConDecimal = {
  name: 'Con número decimal',
  args: {
    valor: '123.45',
  },
};

export const NumeroLargo = {
  name: 'Número largo (límite)',
  args: {
    valor: '123456789',
  },
};

export const ConError = {
  name: 'Estado de error',
  args: {
    valor: 'ERROR',
  },
};

export const NumeroNegativo = {
  name: 'Número negativo',
  args: {
    valor: '-456.78',
  },
};