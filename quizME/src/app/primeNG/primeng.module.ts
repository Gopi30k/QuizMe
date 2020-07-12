import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SelectButtonModule } from "primeng/selectbutton";
import { ButtonModule } from "primeng/button";
import { PaginatorModule } from "primeng/paginator";
import { FieldsetModule } from "primeng/fieldset";
import { RadioButtonModule } from "primeng/radiobutton";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from "primeng/dialog";
import { ResultComponent } from "../result/result.component";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { VirtualScrollerModule } from "primeng/virtualscroller";
import { CardModule } from "primeng/card";
export const primengComponents = [
  InputTextModule,
  DropdownModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  SelectButtonModule,
  ButtonModule,
  PaginatorModule,
  FieldsetModule,
  RadioButtonModule,
  ConfirmDialogModule,
  DialogModule,
  DynamicDialogModule,
  VirtualScrollerModule,
  CardModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [primengComponents],
  entryComponents: [ResultComponent],
})
export class PrimengModule {}
