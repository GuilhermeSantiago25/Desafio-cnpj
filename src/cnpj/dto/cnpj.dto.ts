import { Transform } from 'class-transformer';
import { IsString, Length, Matches } from 'class-validator';

export class CnpjDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @Length(14, 18, { message: 'O CNPJ deve ter entre 14 e 18 caracteres' })
  cnpj: string;
}
