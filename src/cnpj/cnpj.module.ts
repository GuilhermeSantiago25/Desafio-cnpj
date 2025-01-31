import { Module } from '@nestjs/common';
import { CnpjService } from './cnpj.service';
import { CnpjController } from './cnpj.controller';

@Module({
  controllers: [CnpjController],
  providers: [CnpjService],
})
export class CnpjModule {}
