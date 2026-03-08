import {
  IsString,
  IsNotEmpty,
  MaxLength,
  Matches,
  IsNumber,
  Min,
  IsOptional,
} from 'class-validator';

export class CreateInventoryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-Z0-9-]+$/, { message: 'Invalid SKU format' })
  sku: string;

  @IsNumber()
  @Min(0)
  quantity: number;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @IsOptional()
  description?: string;
}
