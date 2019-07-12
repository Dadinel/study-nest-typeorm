import { Controller, Get, Body, Post, Param, Put, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    getCats() : Array<Cat> {
        return this.catsService.getCats();
    }

    @Post()
    addCat(@Body() cat: Cat) {
        return this.catsService.addCat(cat);
    }

    @Get('/:id')
    getCat(@Param('id') id: string) {
        return this.catsService.getCat(id);
    }

    @Put()
    updateCat(@Body() cat: Cat) {
        return this.catsService.updateCat(cat)
    }

    @Delete('/:id')
    deleteCat(@Param('id') id: string) {
        return this.catsService.deleteCat(id);
    }
}