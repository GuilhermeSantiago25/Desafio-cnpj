import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CnpjDto } from './dto/cnpj.dto';
import { CnpjService } from './cnpj.service';

@Controller('cnpj')
export class CnpjController {
  constructor(private readonly cnpjService: CnpjService) {}

  @Get('validar-alfanumerico')
  @UsePipes(new ValidationPipe({ transform: true }))
  validarCNPJAlfanumerico(@Query() cnpjDto: CnpjDto): { valido: boolean } {
    const valido = this.cnpjService.validarCNPJAlfanumerico(cnpjDto.cnpj);
    return { valido };
  }
}
