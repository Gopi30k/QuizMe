import { Pipe, PipeTransform, SecurityContext } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
  name: "sanitizeHtml",
})
export class SanitizeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: any): SafeHtml {
   return atob(value);
  // var textArea = document.createElement("textarea");
  // textArea.innerHTML = atob(value);
  // return textArea.value;
  }
}
