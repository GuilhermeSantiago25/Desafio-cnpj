import { Test, TestingModule } from '@nestjs/testing';
import { CnpjService } from './cnpj.service';

describe('CnpjService', () => {
  let service: CnpjService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CnpjService],
    }).compile();

    service = module.get<CnpjService>(CnpjService);
  });

  it('should return true for a valid CNPJ', () => {
    const validCnpj = '12ABC34501DE63';
    const result = service.validarCNPJAlfanumerico(validCnpj);
    expect(result).toBe(true);
  });

  it('should return false for an invalid CNPJ', () => {
    const invalidCnpj = '12ABC34501DE64';
    const result = service.validarCNPJAlfanumerico(invalidCnpj);
    expect(result).toBe(false);
  });
});
