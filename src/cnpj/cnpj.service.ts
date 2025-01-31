import { Injectable } from '@nestjs/common';

@Injectable()
export class CnpjService {
  validarCNPJAlfanumerico(cnpj: string): boolean {
    cnpj = cnpj.replace(/[^A-Za-z0-9]/g, '');

    if (cnpj.length !== 14) return false;

    const valores = cnpj.split('').map((char) => {
      if (/[0-9]/.test(char)) {
        return parseInt(char, 10);
      } else if (/[A-Za-z]/.test(char)) {
        return char.toUpperCase().charCodeAt(0) - 48;
      }
      return 0;
    });

    const pesos1 = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
    let soma1 = valores
      .slice(0, 12)
      .reduce((acc, val, idx) => acc + val * pesos1[idx], 0);
    let resto1 = soma1 % 11;
    const dv1 = resto1 < 2 ? 0 : 11 - resto1;

    const pesos2 = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6];
    let soma2 = valores
      .slice(0, 13)
      .reduce((acc, val, idx) => acc + val * pesos2[idx], 0);
    let resto2 = soma2 % 11;
    const dv2 = resto2 < 2 ? 0 : 11 - resto2;

    return valores[12] === dv1 && valores[13] === dv2;
  }
}
