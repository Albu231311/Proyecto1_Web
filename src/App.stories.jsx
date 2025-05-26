import App from './App';

export default {
  title: 'Calculadora/App Completa',
  component: App,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
};

export const CalculadoraCompleta = {
  name: 'Calculadora completa',
};

export const SumaBasica = {
  name: 'Demo: Suma básica',
  play: async ({ canvasElement }) => {
    const { within, userEvent } = await import('@storybook/testing-library');
    const { expect } = await import('@storybook/jest');
    const canvas = within(canvasElement);
    
    // Simula: 5 + 3 = 8
    await userEvent.click(canvas.getByText('5'));
    await new Promise(resolve => setTimeout(resolve, 300));
    
    await userEvent.click(canvas.getByText('+'));
    await new Promise(resolve => setTimeout(resolve, 300));
    
    await userEvent.click(canvas.getByText('3'));
    await new Promise(resolve => setTimeout(resolve, 300));
    
    await userEvent.click(canvas.getByText('='));
    
    // Verifica que el resultado sea correcto
    // Nota: Necesitarás ajustar el selector según tu componente Display
    await new Promise(resolve => setTimeout(resolve, 500));
    const display = canvas.getByText('8');
    await expect(display).toBeInTheDocument();
  },
};

export const MultiplicacionConDecimales = {
  name: 'Demo: Multiplicación con decimales',
  play: async ({ canvasElement }) => {
    const { within, userEvent } = await import('@storybook/testing-library');
    const canvas = within(canvasElement);
    
    // Simula: 2.5 × 4 = 10
    await userEvent.click(canvas.getByText('2'));
    await new Promise(resolve => setTimeout(resolve, 200));
    
    await userEvent.click(canvas.getByText('.'));
    await new Promise(resolve => setTimeout(resolve, 200));
    
    await userEvent.click(canvas.getByText('5'));
    await new Promise(resolve => setTimeout(resolve, 200));
    
    await userEvent.click(canvas.getByText('×'));
    await new Promise(resolve => setTimeout(resolve, 200));
    
    await userEvent.click(canvas.getByText('4'));
    await new Promise(resolve => setTimeout(resolve, 200));
    
    await userEvent.click(canvas.getByText('='));
  },
};

export const FuncionLimpiar = {
  name: 'Demo: Función limpiar',
  play: async ({ canvasElement }) => {
    const { within, userEvent } = await import('@storybook/testing-library');
    const canvas = within(canvasElement);
    
    // Introduce algunos números
    await userEvent.click(canvas.getByText('1'));
    await userEvent.click(canvas.getByText('2'));
    await userEvent.click(canvas.getByText('3'));
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Presiona limpiar
    await userEvent.click(canvas.getByText('C'));
  },
};

export const FuncionBorrarUltimo = {
  name: 'Demo: Borrar último dígito',
  play: async ({ canvasElement }) => {
    const { within, userEvent } = await import('@storybook/testing-library');
    const canvas = within(canvasElement);
    
    // Introduce algunos números
    await userEvent.click(canvas.getByText('1'));
    await userEvent.click(canvas.getByText('2'));
    await userEvent.click(canvas.getByText('3'));
    await userEvent.click(canvas.getByText('4'));
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Borra el último dígito
    await userEvent.click(canvas.getByText('⌫'));
    await new Promise(resolve => setTimeout(resolve, 300));
    
    await userEvent.click(canvas.getByText('⌫'));
  },
};

export const CambioDeSigno = {
  name: 'Demo: Cambio de signo',
  play: async ({ canvasElement }) => {
    const { within, userEvent } = await import('@storybook/testing-library');
    const canvas = within(canvasElement);
    
    // Introduce un número
    await userEvent.click(canvas.getByText('5'));
    await userEvent.click(canvas.getByText('0'));
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Cambia el signo
    await userEvent.click(canvas.getByText('+/-'));
  },
};