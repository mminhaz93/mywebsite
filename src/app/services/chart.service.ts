import { Injectable } from '@angular/core';
//Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ChartService {

    constructor(private db: AngularFireDatabase) { }

    getData(dataset: string) {
        return this.db.list(dataset)
    }
}
