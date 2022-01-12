import {NgModule} from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
@NgModule({
    imports: [
      MatButtonToggleModule,
      MatIconModule,
      MatFormFieldModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatSidenavModule,
      MatInputModule,
      MatSelectModule
    ],
    exports: [
      MatButtonToggleModule,
      MatIconModule,
      MatFormFieldModule,
      MatDialogModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatSidenavModule,
      MatSelectModule
    ]
})

export class MaterialModule {
}
