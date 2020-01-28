import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IndexComponent } from "./index/index.component";
import { MeComponent } from "./me/me.component";

@NgModule({
  declarations: [IndexComponent, MeComponent],
  imports: [CommonModule]
})
export class AppModule {}
