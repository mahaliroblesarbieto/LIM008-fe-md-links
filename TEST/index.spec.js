import { evaluatePath,
  transformToAbsPath} from '../SRC/Models/links.js';

const input = 'ruta string';
  describe('evaluatePath', () => {
    it('debería ser una función', () => {
      expect(typeof evaluatePath).toBe('function');
    });
    it('Debería retornar un dato de tipo booleano', () => {
      expect(evaluatePath(input)).toEqual(true);
    });
  });

  describe('transformToAbsPath', () => {
    it('debería ser una función', () => {
      expect(typeof transformToAbsPath).toBe('function');
    });
    it('Debería retornar un dato de tipo string', () => {
      expect(typeof transformToAbsPath(input)).toBe('string');
    });
  });