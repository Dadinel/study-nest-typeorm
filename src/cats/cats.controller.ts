import { Controller, Get, Body, Post, Param, Put, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    getCats(): Promise<Cat[]> {
        return this.catsService.getCats();
    }

    @Post()
    addCat(@Body() cat: Cat): Promise<Cat> {
        return this.catsService.addCat(cat);
    }

    @Get('/:id')
    getCat(@Param('id') id: number): Promise<Cat> {
        return this.catsService.getCat(id);
    }

    @Put('/:id')
    updateCat(@Param('id') id: number, @Body() cat: Cat): Promise<UpdateResult> {
        return this.catsService.updateCat(id, cat);
    }

    @Delete('/:id')
    deleteCat(@Param('id') id: number): Promise<DeleteResult> {
        return this.catsService.deleteCat(id);
    }
}