import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
       <div className="remodal-bg">
             <div class="remodal-bg main-header">
                    <div class="container">
                        <div class="main-logo">
                            <a class="logo" href="/"><img alt="SecureNow"
                                src="https://s3.ap-south-1.amazonaws.com/static-files-website/common-images/securenow-logo.png" title="SecureNow" /></a>
                        </div>
                        <div class="right-nav">
                            <div class="whatsapp-number">
                                <span class="whatsapp-icon">
                                    <a target="_blank" class="" href="https://wa.me/919999207828?text=I%20need%20Assistance.%20Please%20resolve%20my%20query">
                                        <img src="/assets/public/redesign/icons/whatsapp-icon.png" width="25" /></a>
                                </span>
                            </div>
                            <div class="contact-number">
                                <span class="call-icon"></span><a class="ctcMobile" href="tel: +91 9696683999" onClick="ga('send', 'event', { eventCategory: 'Call_Icon', eventAction: 'Button_Click', eventLabel:'Call_Button_Click'});">&nbsp; +91 9696683999</a></div>
                            <a href="#" data-remodal-target="retrieve-quote-modal" class="gray-button" data-toggle="tooltip" data-placement="bottom" title="Please enter your mobile number to fetch quotes from your previous session" onClick="ga('send', 'event', { eventCategory: 'Returning User', eventAction: 'Button Click', eventLabel:' Returning User Header'});">Returning User</a>

                            <a href="https://securenow.in/login/auth" class="gray-button" onClick="ga('send', 'event', { eventCategory: 'Login', eventAction: 'Button_Click', eventLabel:'Login'});">Login</a>
                        </div>
                        <span class="mobile-menu" >
                            <button type="button" class="collapsed navbar-toggle"
                                data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false" >
                                <span class="sr-only">Toggle navigation</span> <span
                                    class="icon-bar"></span> <span class="icon-bar"></span> <span
                                        class="icon-bar"></span>
                            </button>
                        </span>
                        <div class="navigation">
                            <nav class="main-nav navbar-collapse collapse" id="bs-example-navbar-collapse-1" aria-expanded="false">
                                <ul class="navbar-nav clearfix">
                                    <li class="navbar-submenu">
                                        <a href="/group-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Group_Insurance'});"
                                        >Group Insurance</a>
                                        <span class="dropdown-toggle mobile-menu-anchor">&#43;</span>
                                        <ul class="navbar-dropdown dropdown-menu">
                                            <li><a href="/group-insurance/group-employees-deposit-linked-insurance"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Group_Employeed_Deposit_Linked_Innsurance'});">Group Employee's Deposit Linked Insurance (EDLI)</a></li>
                                            <li><a href="/group-insurance/group-gratuity"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Group_Gratuity_Insurance'});">Group Gratuity</a></li>
                                            <li><a href="/group-insurance/group-health-insurance"
                                                onClick="ga('send', 'event', { eventCategory: 'Contact_Information', eventAction: 'Next_Button', eventLabel:'Contact_Next_Button_GHI'});">Group Health Insurance</a></li>
                                            <li><a href="/group-insurance/group-personal-accident-insurance"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Group_Personal_Accident_Insurance'});">Group Personal Accident</a></li>
                                            <li><a href="/group-insurance/group-superannuation"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Group_Superannuation_Policy'});">Group Superannuation</a></li>
                                            <li><a href="/group-insurance/group-term-life-insurance"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Group_Term_Life_Insurance'});">Group Term Life Insurance</a></li>
                                            <li><a href="/group-insurance/group-travel-insurance"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Group_Travel_Insurance'});">Group Travel Insurance</a></li>
                                            <li><a href="/group-insurance/group-workmen-compensation-insurance"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Group_Workmen_Compensation_Insurance'});">Workmen Compensation/ Employees Compensation</a></li>
                                            <li><a href="/group-insurance/workers-mandatory-health-insurance">Workers Mandatory Health Insurance</a></li>
                                        </ul>
                                    </li>
                                    <li class="navbar-submenu">
                                        <a href="/commercial-insurance">Commercial Insurance</a>
                                        <span class="dropdown-toggle mobile-menu-anchor">&#43;</span>
                                        <ul class="dropdown-submenu navbar-dropdown dropdown-menu">
                                            <li class="clearfix">
                                                <a href="/commercial-liability-insurance"
                                                    onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Commercial_Liability_Insurance'});"
                                                >Liability Insurance</a>
                                                <span class="dropdown-toggle mobile-menu-anchor">&#43;</span>
                                                <ul class="navbar-dropdown dropdown-menu">
                                                    <li><a href="/commercial-liability-insurance/carrier-legal-liability"
                                                        onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Carrier Legal_Liability_Insurance'});"
                                                    >Carrier Legal Liability</a></li>
                                                    <li><a href="/commercial-liability-insurance/commercial-crime-insurance"
                                                        onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Commercial_Crime_Insurance'});"
                                                    >Commercial Crime</a></li>
                                                    <li><a href="/commercial-liability-insurance/commercial-general-liability"
                                                        onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Commercial_General_Liability_Insurance'});"
                                                    >Commercial General Liability</a></li>
                                                    <li><a href="/commercial-liability-insurance/cyber-risk-insurance"
                                                        onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Cyber_Risk_Insurance'});"
                                                    >Cyber Risk</a></li>
                                                    <li><a href="/commercial-liability-insurance/director-officer-liability-insurance"
                                                        onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Directors_and_Officers_Liability_Insurance'});"
                                                    >Directors &amp; Officers Liability</a></li>
                                                    <li><a href="/commercial-liability-insurance/errors-&-omissions-insurance"
                                                        onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Professional_Idemnnity_Insurance'});"
                                                    >Errors &amp; Omissions</a></li>
                                                    <li><a href="/commercial-liability-insurance/product-liability-insurance"
                                                        onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Product_Liability_Insurance'});"
                                                    >Product Liability</a></li>
                                                    <li><a href="/commercial-liability-insurance/title-insurance"
                                                    >Title Insurance</a></li>
                                                    <li><a href="/commercial-liability-insurance/trade-credit-insurance"
                                                    >Trade Credit Insurance</a></li>
                                                </ul>
                                            </li>
                                            <li class="clearfix">
                                                <a href="/marine-insurance"
                                                    onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Marine_Insuurance'});"
                                                >Marine Insurance</a>
                                                <span class="dropdown-toggle mobile-menu-anchor">&#43;</span>
                                                <ul class="navbar-dropdown dropdown-menu">
                                                    <li><a href="/marine-insurance/export-and-import-insurance" onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Export_Import_Insurance'});">Export &amp; Import Insurance</a></li>
                                                    <li><a href="/marine-insurance/inland-transit-insurance" onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Inland_Transit_Insurance'});">Inland Transit Insurance</a></li>
                                                    <li><a href="/marine-insurance/marine-hull-insurance" onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Marine_Full_Insurance'});">Marine Hull Insurance</a></li>
                                                    <li><a href="/marine-insurance/multimodal-transport-operator-insurance" onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Multimodal_Transport_Operator_Insurance'});">Multimodal Transport Operator Insurance</a></li>
                                                    <li><a href="/marine-insurance/specific-transits-insurance" onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Specific_Transit_Insurance'});">Specific Transits Insurance</a></li>
                                                </ul>
                                            </li>
                                            <li class="clearfix">
                                                <a href="/property-insurance"
                                                    onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Commercial_Property_insurance'});"
                                                >Property Insurance</a>
                                                <span class="dropdown-toggle mobile-menu-anchor">&#43;</span>
                                                <ul class="navbar-dropdown dropdown-menu">
                                                    <li><a href="/property-insurance/art-insurance"
                                                        onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Art_Insurance'});"
                                                    >Art Insurance</a></li>
                                                    <li><a href="/property-insurance/constructions-all-risk-insurance"
                                                        onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Construction_All_Risk_Insurance'});"
                                                    >Construction All Risk</a></li>
                                                    <li><a href="/property-insurance/engineering-all-risk-insurance"
                                                        onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Engineering_All_Risk_Insurance'});"
                                                    >Engineering All Risk</a></li>
                                                    <li><a href="/property-insurance/factory-and-warehouse-insurance"
                                                        onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Fire Insurance_for_Factory_and_Warehouse'});"
                                                    >Factory &amp; Warehouse Insurance</a></li>
                                                    <li><a href="/property-insurance/motor-fleet-insurance"
                                                        onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Motor_Fleet_innsurance'});"
                                                    >Motor Fleet Insurance</a></li>
                                                    <li><a href="/property-insurance/office-insurance"
                                                        onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Fire_Insurance_for_Office'});"
                                                    >Office Insurance</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="navbar-submenu">
                                        <a href="/individual-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Individual_Insurance'});"
                                        >Individual Insurance</a>
                                        <span class="dropdown-toggle mobile-menu-anchor">&#43;</span>
                                        <ul class="navbar-dropdown dropdown-menu">
                                            <li><a href="/individual-insurance/critical-illness-insurance"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Individual_Critical_Illness_Insurance'});"
                                            >Critical Illness</a></li>
                                            <li><a href="/individual-insurance/health-insurance"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Individual_Health_Insurance'});"
                                            >Family Health Insurance</a></li>
                                            <li><a href="/individual-insurance/home-insurance"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Individual_Home_Insurance'});"
                                            >Home Insurance</a></li>
                                            <li><a href="/individual-insurance/motor-insurance"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Indvidual_Motor_Insurance'});"
                                            >Motor Insurance</a></li>
                                            <li><a href="/individual-insurance/senior-citizen-insurance"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Senior_Citizen_Insurance'});"
                                            >Senior Citizen Insurance </a></li>
                                            <li><a href="/individual-insurance/term-life-keyman-insurance"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Individual_Term_life_Keyman Insurance'});"
                                            >Term Life &amp; Keyman</a></li>
                                            <li><a href="/individual-insurance/topup-health-insurance"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Individual_TopUp_Insurance'});"
                                            >Top Up Health Insurance</a></li>
                                            <li><a href="/individual-insurance/travel-insurance"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Individual_Travel_Insurance'});"
                                            >Travel Insurance</a></li>
                                            <li><a href="/individual-insurance/corona-kavach-insurance">Corona Kavach Insurance</a></li>

                                        </ul>
                                    </li>
                                    <li class="navbar-submenu">
                                        <a href="javascript:void(0)">Profession</a>
                                        <span class="dropdown-toggle mobile-menu-anchor">&#43;</span>
                                        <ul class="navbar-dropdown dropdown-menu">
                                            <li class="navbar-submenu"><a href="/profession/architects-insurance">Architects</a></li>
                                            <li class="navbar-submenu"><a href="/profession/auto-component-manufacturers-insurance">Auto Component Manufacturers</a></li>
                                            <li class="navbar-submenu"><a href="/profession/chartered-accountants-insurance">Chartered Accountants</a></li>
                                            <li class="navbar-submenu"><a href="/profession/doctor-professional-indemnity-insurance"
                                                onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Professional_Idemnnity_Insurance_For_Doctors'});"
                                            >Doctors</a></li>
                                            <li class="navbar-submenu"><a href="/profession/education-institution-insurance">Educational Institutions</a></li>
                                            <li class="navbar-submenu"><a href="/profession/freight-forwarder-insurance">Freight Forwarders</a></li>
                                            <li class="navbar-submenu"><a href="/profession/gym-and-health-clubs-insurance">Gym And Health Clubs</a></li>
                                            <li class="navbar-submenu"><a href="/profession/jewellers-block-insurance">Jewellers</a></li>
                                            <li class="navbar-submenu"><a href="/profession/lawyers-insurance">Lawyers</a></li>
                                            <li class="navbar-submenu"><a href="/profession/restaurant-package-policy">Restaurants</a></li>
                                            <li class="navbar-submenu"><a href="/profession/shopkeeper-package-policy">Shopkeepers</a></li>
                                        </ul>
                                    </li>
                                    <li class="navbar-submenu">
                                        <a href="javascript:void(0);">Specials</a>
                                        <span class="dropdown-toggle mobile-menu-anchor">&#43;</span>
                                        <ul class="navbar-dropdown dropdown-menu">
                                            <li>
                                                <a href="/specials/aditya-birla-health-insurance"
                                                    onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Individual_Religare_Aditya_Birla_Health_Insurance'});"
                                                >Aditya Birla Health Insurance for Notify Users</a>
                                            </li>
                                            <li>
                                                <a href="/specials/claims-advisory"

                                                >Claims Advisory</a>
                                            </li>
                                            <li>
                                                <a href="/specials/esecure-insurance"
                                                    onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Individual_ESecure_Insurance'});"
                                                >E@Secure Insurance</a>
                                            </li>
                                            <li>
                                                <a href="/specials/lic-jeevan-shanti-insurance"
                                                    onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Individual_Jeevan_Shanti'});"
                                                >LIC Jeevan Shanti</a>
                                            </li>
                                            <li>
                                                <a href="/specials/mint-securenow-mediclaim-ratings-insurance"
                                                    onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Individual_Mint_Mediclaim_Insurance'});"
                                                >Mint SecureNow Mediclaim Ratings</a>
                                            </li>
                                            <li>
                                                <a href="/specials/religare-personal-accident-insurance"
                                                    onClick="ga('send', 'event', { eventCategory: 'Main_Navigation', eventAction: 'Menu_Click', eventLabel: 'Menu_Individual_Religare_Personal_Accident_Insurance'});"
                                                >Care Health Insurance Limited (formerly known as Religare Health Insurance Company Limited's Personal Accident Insurance)</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>       
       </div>
       
        );
    }
}