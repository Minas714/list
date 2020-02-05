import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountArchivedAdsComponent } from './account-archived-ads/account-archived-ads.component';
import { AccountCloseComponent } from './account-close/account-close.component';
import { AccountFavouriteAdsComponent } from './account-favourite-ads/account-favourite-ads.component';
import { AccountHomeComponent } from './account-home/account-home.component';
import { AccountMessageComposeComponent } from './account-message-compose/account-message-compose.component';
import { AccountMessageDetalisComponent } from './account-message-detalis/account-message-detalis.component';
import { AccountMessageInboxComponent } from './account-message-inbox/account-message-inbox.component';
import { AccountMyadsComponent } from './account-myads/account-myads.component';
import { AccountPendingApprovalAdsComponent } from './account-pending-approval-ads/account-pending-approval-ads.component';
import { AccountSavedSearchComponent } from './account-saved-search/account-saved-search.component';
import { AdsDetalisComponent } from './ads-detalis/ads-detalis.component';
import { AdsDetailsVerticalthumbComponent } from './ads-details-verticalthumb/ads-details-verticalthumb.component';
import { AdsDetailsAutomobileComponent } from './ads-details-automobile/ads-details-automobile.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { BlogDetalisComponent } from './blog-detalis/blog-detalis.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CategoryComponent } from './category/category.component';
import { EventCategoryComponent } from './event-category/event-category.component';
import { EventDetalisComponent } from './event-detalis/event-detalis.component';
import { EventHomeComponent } from './event-home/event-home.component';
import { FaqComponent } from './faq/faq.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { IndexMapComponent } from './index-map/index-map.component';
import { IndexV2Component } from './index-v2/index-v2.component';
import { JobDetalisComponent } from './job-detalis/job-detalis.component';
import { JobHomeComponent } from './job-home/job-home.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobLoginComponent } from './job-login/job-login.component';
import { JobPostComponent } from './job-post/job-post.component';
import { JobSignupComponent } from './job-signup/job-signup.component';
import { LoginComponentt } from './login/login.component';
import { PostAdsComponent } from './post-ads/post-ads.component';
import { PostingSuccessComponent } from './posting-success/posting-success.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { SignupComponent } from './signup/signup.component';
import { StatementsComponent } from './statements/statements.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { CommonModule }   from '@angular/common';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AccountArchivedAdsComponent,
    AccountCloseComponent,
    AccountFavouriteAdsComponent,
    AccountHomeComponent,
    AccountMessageComposeComponent,
    AccountMessageDetalisComponent,
    AccountMessageInboxComponent,
    AccountMyadsComponent,
    AccountPendingApprovalAdsComponent,
    AccountSavedSearchComponent,
    AdsDetalisComponent,
    AdsDetailsVerticalthumbComponent,
    AdsDetailsAutomobileComponent,
    BlankPageComponent,
    BlogDetalisComponent,
    BlogsComponent,
    CategoryComponent,
    EventCategoryComponent,
    EventDetalisComponent,
    EventHomeComponent,
    FaqComponent,
    ForgotPasswordComponent,
    FormComponent,
    IndexComponent,
    IndexMapComponent,
    IndexV2Component,
    JobDetalisComponent,
    JobHomeComponent,
    JobListComponent,
    JobLoginComponent,
    JobPostComponent,
    JobSignupComponent,
    
    PostAdsComponent,
    PostingSuccessComponent,
    PropertyDetailsComponent,
    PropertyListComponent,
    SellerProfileComponent,
    SignupComponent,
    StatementsComponent,
    SubCategoryComponent,
    TermsConditionsComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    AuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
