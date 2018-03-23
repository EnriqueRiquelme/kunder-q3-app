import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner';
@NgModule({
	declarations: [
		HomeComponent,
		BannerComponent
	],
	imports: [],
	exports: [
		HomeComponent,
		BannerComponent
	],
	entryComponents: [
		BannerComponent
	]
})
export class ComponentsModule {}
