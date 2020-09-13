import { Injectable, Injector } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

import { Conta } from '../models/Conta';

import * as moment from "moment";

@Injectable()
export class ControleContasServices extends BaseResourceService<Conta> {
    constructor(protected injector: Injector) {
        super("api/conta", injector, Conta.fromJson);
    }
}