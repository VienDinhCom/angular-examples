import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MeComponent } from "./me/me.component";
import { ProjectListComponent } from "./projects/project-list/project-list.component";
import { ProjectCreateComponent } from "./projects/project-create/project-create.component";
import { ProjectEditComponent } from "./projects/project-edit/project-edit.component";
import { ProjectDetailComponent } from "./projects/project-detail/project-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [
    MeComponent,
    ProjectListComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    ProjectDetailComponent,
    DashboardComponent
  ],
  imports: [CommonModule]
})
export class AppModule {}
