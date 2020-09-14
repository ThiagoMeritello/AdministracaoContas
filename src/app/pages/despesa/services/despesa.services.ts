import { Injectable, Injector } from "@angular/core";
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

import { Despesa } from '../models/Despesa';

@Injectable()
export class DespesaServices extends BaseResourceService<Despesa> {
    constructor(protected injector: Injector) {
        super("api/despesa", injector, Despesa.fromJson);
    }
}