import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { Cat } from './cat.entity';

@Module({
    imports: [Cat],
    providers: [CatsService],
    controllers: [CatsController]
})
export class CatsModule {}