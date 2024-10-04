import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
@Component({
  standalone: true,
  template: '<div #vc></div>',
})
export class WrapperComponent implements AfterContentInit {
  @ViewChild('vc', { read: ElementRef, static: true })
  vc!: ElementRef;
  constructor(private route: ActivatedRoute) { }
  async ngAfterContentInit(): Promise<void> {
    
    const remoteName = this.route.snapshot.data['remoteName'];
    const exposedModule = this.route.snapshot.data['exposedModule'];
    const componentName = this.route.snapshot.data['componentName'];

    await loadRemoteModule({
      remoteName,
      exposedModule
    })

    const element = document.createElement(componentName);
    this.vc.nativeElement.appendChild(element);
  }
}