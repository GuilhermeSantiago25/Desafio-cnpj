import { Controller, Get, Query } from '@nestjs/common';
import { CnpjService } from './cnpj.service';

@Controller('cnpj')
export class CnpjController {
  constructor(private readonly cnpjService: CnpjService) {}

  @Get('validar-alfanumerico')
  validarCNPJAlfanumerico(@Query('cnpj') cnpj: string): { valido: boolean } {
    const valido = this.cnpjService.validarCNPJAlfanumerico(cnpj);
    return { valido };
  }
}
