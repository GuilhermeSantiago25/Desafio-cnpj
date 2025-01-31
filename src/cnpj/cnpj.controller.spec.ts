import { Test, TestingModule } from '@nestjs/testing';
import { CnpjController } from './cnpj.controller';
import { CnpjService } from './cnpj.service';

describe('CnpjController', () => {
  let controller: CnpjController;
  let service: CnpjService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CnpjController],
      providers: [
        CnpjService,
        {
          provide: CnpjService,
          useValue: {
            validarCNPJAlfanumerico: jest.fn().mockReturnValue(true),
          },
        },
      ],
    }).compile();

    controller = module.get<CnpjController>(CnpjController);
    service = module.get<CnpjService>(CnpjService);
  });

  it('should validate CNPJ correctly', async () => {
    const validCnpj = '12ABC34501DE63';
    const response = await controller.validarCNPJAlfanumerico({
      cnpj: validCnpj,
    });
    expect(response.valido).toBe(true);
  });
});
