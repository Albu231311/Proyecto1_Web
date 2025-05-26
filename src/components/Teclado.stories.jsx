import Teclado from './Teclado';

export default {
  title: 'Calculadora/Teclado',
  component: Teclado,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    onNumero: { action: 'número presionado' },
    onOperacion: { action: 'operación seleccionada' },
    onIgual: { action: 'igual presionado' },
    onLimpiar: { action: 'limpiar presionado' },
    onCambiarSigno: { action: 'cambiar signo presionado' },
    onBorrarUltimo: { action: 'borrar último presionado' },
  },
};

export const Default = {
  args: {
    onNumero: (num) => console.log('Número:', num),
    onOperacion: (op) => console.log('Operación:', op),
    onIgual: () => console.log('Igual presionado'),
    onLimpiar: () => console.log('Limpiar presionado'),
    onCambiarSigno: () => console.log('Cambiar signo presionado'),
    onBorrarUltimo: () => console.log('Borrar último presionado'),
  },
};

export const InteraccionCompleta = {
  name: 'Interacción completa',
  args: {
    onNumero: (num) => console.log('Número:', num),
    onOperacion: (op) => console.log('Operación:', op),
    onIgual: () => console.log('Igual presionado'),
    onLimpiar: () => console.log('Limpiar presionado'),
    onCambiarSigno: () => console.log('Cambiar signo presionado'),
    onBorrarUltimo: () => console.log('Borrar último presionado'),
  },
  play: async ({ canvasElement }) => {
    const { within, userEvent } = await import('@storybook/testing-library');
    const canvas = within(canvasElement);
    
    // Simula presionar algunos números
    await userEvent.click(canvas.getByText('5'));
    await new Promise(resolve => setTimeout(resolve, 500));
    
    await userEvent.click(canvas.getByText('+'));
    await new Promise(resolve => setTimeout(resolve, 500));
    
    await userEvent.click(canvas.getByText('3'));
    await new Promise(resolve => setTimeout(resolve, 500));
    
    await userEvent.click(canvas.getByText('='));
  },
};