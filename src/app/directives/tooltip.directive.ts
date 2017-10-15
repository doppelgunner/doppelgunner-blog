import { Directive, ElementRef, Input, Renderer2, OnInit, HostListener } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[dgTooltip]'
})
export class TooltipDirective implements OnInit {
  @Input() dgTooltip: string;

  constructor(public renderer: Renderer2, public el: ElementRef) {
  }

  ngOnInit() {
    this.renderer.setAttribute(this.el.nativeElement,"data-toggle","tooltip");
    this.renderer.setAttribute(this.el.nativeElement,"data-placement","top");
    this.renderer.setAttribute(this.el.nativeElement,"title",this.dgTooltip);
  }

  @HostListener('mouseenter') onMouseEnter() {
    $(this.el.nativeElement).tooltip('show');
  }

  @HostListener('mouseleave') onMouseLeave() {
    $(this.el.nativeElement).tooltip('hide');
  }

  @HostListener('click') onClick() {
    $(this.el.nativeElement).tooltip('hide');
  }
}
