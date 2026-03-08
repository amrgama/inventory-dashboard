import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { ResponseInterceptor } from '../common/interceptors/response.interceptor';

@Controller('items')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(ResponseInterceptor)
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  findAll(@Query('search') search?: string) {
    return this.inventoryService.findAll(search);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.inventoryService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateInventoryDto) {
    return this.inventoryService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateInventoryDto) {
    return this.inventoryService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.inventoryService.delete(id);
  }
}
