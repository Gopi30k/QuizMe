import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SelectButtonModule } from "primeng/selectbutton";
import { ButtonModule } from "primeng/button";

export const primengComponents = [
  InputTextModule,
  DropdownModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  SelectButtonModule,
  ButtonModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [primengComponents],
})
export class PrimengModule {}
