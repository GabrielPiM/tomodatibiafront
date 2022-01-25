import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CharCardComponent } from './search/char-card/char-card.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { SearchResultCardComponent } from './search/search-result-card/search-result-card.component';
import { LoadMoreComponent } from './search/load-more/load-more.component';

import { HuntDetailComponent } from './hunt/hunt-detail/hunt-detail.component';
import { HuntAddComponent } from './hunt/hunt-add/hunt-add.component';
import { MyHuntComponent } from './user/my-hunt/my-hunt.component';
import { HuntDifficultyComponent } from './hunt/hunt-add/feature-components/hunt-difficulty/hunt-difficulty.component';
import { HuntVersionsComponent } from './hunt/hunt-add/feature-components/hunt-versions/hunt-versions.component';
import { HuntSpecialRequirementsComponent } from './hunt/hunt-add/feature-components/hunt-special-requirements/hunt-special-requirements.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FormComponent,
    FooterComponent,
    CharCardComponent,
    SearchResultComponent,
    SearchResultCardComponent,
    LoadMoreComponent,
    HuntVersionsComponent,
    HuntDetailComponent,
    HuntAddComponent,
    MyHuntComponent,
    HuntDifficultyComponent,
    HuntSpecialRequirementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
