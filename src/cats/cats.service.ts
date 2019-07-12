import { Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
    cats: Array<Cat> = [];
    nextID: number = 0;

    getCats(): Array<Cat> {
        return this.cats;
    }

    addCat(cat: Cat): Cat {
        this.nextID++;
        cat.id = this.nextID.toString();
        this.cats.push(cat);
        return cat;
    }

    getCat(id: string) {
        let cat: Cat;

        cat = this.cats.find( cat => cat.id == id);

        return cat;
    }

    updateCat(cat: Cat): Cat {
        let catBefore: Cat;
        catBefore = this.findCatByID(cat.id);

        if(catBefore) {
            catBefore.name = cat.name;
            catBefore.collor = cat.collor;
        }

        return catBefore;
    }

    deleteCat(id: string) {
        this.cats = this.cats.filter( catObj => catObj.id !== id);
        return this.cats;
    }

    private findCatByID(id: string): Cat {
        return this.cats.find( cat => cat.id == id);
    }
}