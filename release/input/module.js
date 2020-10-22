import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElInput } from './input';
import { FormsModule } from '@angular/forms';
import { ElFormItem } from '../form/form-item';
import { NgxMaskModule, IConfig } from 'ngx-mask';
var ElInputsModule = /** @class */ (function () {
    function ElInputsModule() {
    }
    /**
     * @return {?}
     */
    ElInputsModule.forRoot = function () {
        return { ngModule: ElInputsModule, providers: [ElFormItem] };
    };
    ElInputsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ElInput],
                    exports: [ElInput],
                    imports: [CommonModule, FormsModule, NgxMaskModule.forRoot({validation: true,})],
                    entryComponents: [ElInput],
                },] },
    ];
    /**
     * @nocollapse
     */
    ElInputsModule.ctorParameters = function () { return []; };
    return ElInputsModule;
}());
export { ElInputsModule };
function ElInputsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElInputsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElInputsModule.ctorParameters;
}
//# sourceMappingURL=module.js.map