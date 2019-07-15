import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
    constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}
    cats: Array<Cat> = [];
    nextID: number = 0;

    async getCats(): Promise<Cat[]> {
        return await this.catRepository.find();
    }

    async addCat(cat: Cat): Promise<Cat> {
        if(!cat.birthday) {
            cat.birthday = new Date();
        }

        return await this.catRepository.save(cat);
    }

    async getCat(id: number): Promise<Cat> {
        return await this.catRepository.findOneOrFail(id);
    }

    async updateCat(id: number, cat: Cat): Promise<UpdateResult> {
        return await this.catRepository.update(id, cat);
    }

    async deleteCat(id: number): Promise<DeleteResult> {
        return await this.catRepository.delete(id);
    }
}