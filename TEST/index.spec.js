import { evaluatePath,
  transformToAbsPath,
  recognizeIfIsFile,
  getFiles,
  getMDContent,
  convertMDToHtml,
  extractATagAttr,
  createArrLinkObj} from '../SRC/Models/links.js';

import {extractHref,
  verifyLink,
  addVerification} from '../SRC/Models/validate.js';

import {calculateStats} from '../SRC/Models/stats.js';

const input = 'ruta string';
const input2 = {};
const input3 = [];
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


  describe('recognizeIfIsFile', () => {
    it('debería ser una función', () => {
      expect(typeof recognizeIfIsFile).toBe('function');
    });
    it('Debería retornar un dato de tipo booleano', () => {
      expect(recognizeIfIsFile(input)).toEqual(true);
    });
  });

  describe('getFiles', () => {
    it('debería ser una función', () => {
      expect(typeof getFiles).toBe('function');
    });
    it('Debería retornar un dato de tipo array', () => {
      expect(typeof getFiles(input)).toBe('object');
    });
  });

  describe('getMDContent', () => {
    it('debería ser una función', () => {
      expect(typeof getMDContent).toBe('function');
    });
    it('Debería retornar un dato de tipo string', () => {
      expect(typeof getMDContent(input)).toBe('string');
    });
  });

  describe('convertMDToHtml', () => {
    it('debería ser una función', () => {
      expect(typeof convertMDToHtml).toBe('function');
    });
    it('Debería retornar un dato de tipo string', () => {
      expect(typeof convertMDToHtml(input)).toBe('string');
    });
  });

  describe('extractATagAttr', () => {
    it('debería ser una función', () => {
      expect(typeof extractATagAttr).toBe('function');
    });
    it('Debería retornar un dato de tipo objeto', () => {
      expect(typeof extractATagAttr(input)).toBe('object');
    });
  });

  describe('createArrLinkObj', () => {
    it('debería ser una función', () => {
      expect(typeof createArrLinkObj).toBe('function');
    });
    it('Debería retornar un dato de tipo objeto', () => {
      expect(typeof createArrLinkObj(input2)).toBe('object');
    });
  });

  describe('extractHref', () => {
    it('debería ser una función', () => {
      expect(typeof extractHref).toBe('function');
    });
    it('Debería retornar un dato de tipo objeto', () => {
      expect(typeof extractHref(input3)).toBe('object');
    });
  });

  describe('verifyLink', () => {
    it('debería ser una función', () => {
      expect(typeof verifyLink).toBe('function');
    });
    it('Debería retornar un dato de tipo objeto', () => {
      expect(typeof verifyLink(input3)).toBe('object');
    });
  });

  describe('addVerification', () => {
    it('debería ser una función', () => {
      expect(typeof addVerification).toBe('function');
    });
    it('Debería retornar un dato de tipo objeto', () => {
      expect(typeof addVerification(input3)).toBe('object');
    });
  });

  describe('calculateStats', () => {
    it('debería ser una función', () => {
      expect(typeof calculateStats).toBe('function');
    });
    it('Debería retornar un dato de tipo objeto', () => {
      expect(typeof calculateStats(input3)).toBe('object');
    });
  });
  

