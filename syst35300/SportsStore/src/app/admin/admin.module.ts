import { NgModule } from '@anglular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';

let routing = RouterModule.forChild ([
    { path: "auth", component: AuthComponent },
    { path: "admin", component: AdminComponent },
    { path: "**", redirectTo: "auth" }
]);

@NgModule
({
    imports: [CommonModule, FormsModule, routing],
    declarations: [AuthComponent, AdminComponent]
})
export class AdminModule {}