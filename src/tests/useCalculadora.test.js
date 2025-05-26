import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useCalculadora } from '../hooks/useCalculadora';

describe('useCalculadora', () => {
  let result;

  beforeEach(() => {
    const { result: hookResult } = renderHook(() => useCalculadora());
    result = hookResult;
  });

  it('debe realizar operaciones básicas correctamente', () => {
    expect(result.current.display).toBe('0');

    // Suma: 5 + 3 = 8
    act(() => result.current.agregarNumero('5'));
    act(() => result.current.seleccionarOperacion('+'));
    act(() => result.current.agregarNumero('3'));
    act(() => result.current.presionarIgual());
    expect(result.current.display).toBe('8');

  });

  it('debe manejar números decimales y validaciones', () => {
    act(() => result.current.limpiar());
    
    // Agregar decimal: 3.14
    act(() => result.current.agregarNumero('3'));
    act(() => result.current.agregarNumero('.'));
    act(() => result.current.agregarNumero('1'));
    act(() => result.current.agregarNumero('4'));
    expect(result.current.display).toBe('3.14');

    // No debe permitir segundo punto decimal
    act(() => result.current.agregarNumero('.'));
    expect(result.current.display).toBe('3.14');

    // Respetar límite de 9 caracteres
    act(() => result.current.limpiar());
    for (let i = 1; i <= 10; i++) {
      act(() => result.current.agregarNumero(i.toString().slice(-1)));
    }
    expect(result.current.display).toBe('123456789');
  });

  it('debe manejar casos de error correctamente', () => {
    // División por cero: 5 / 0 = ERROR
    act(() => result.current.limpiar());
    act(() => result.current.agregarNumero('5'));
    act(() => result.current.seleccionarOperacion('/'));
    act(() => result.current.agregarNumero('0'));
    act(() => result.current.presionarIgual());
    expect(result.current.display).toBe('ERROR');

  });

  it('debe manejar funciones auxiliares correctamente', () => {
    // Cambiar signo
    act(() => result.current.limpiar());
    act(() => result.current.agregarNumero('5'));
    act(() => result.current.cambiarSigno());
    expect(result.current.display).toBe('-5');
    
    act(() => result.current.cambiarSigno());
    expect(result.current.display).toBe('5');

    // Borrar último carácter
    act(() => result.current.agregarNumero('2'));
    act(() => result.current.agregarNumero('3'));
    expect(result.current.display).toBe('523');
    
    act(() => result.current.borrarUltimo());
    expect(result.current.display).toBe('52');
    
    act(() => result.current.borrarUltimo());
    expect(result.current.display).toBe('5');
    
    act(() => result.current.borrarUltimo());
    expect(result.current.display).toBe('0');
  });
});