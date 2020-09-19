import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
            <section class="footer-links">
            <input type="hidden" id="selected-training-material" name="selected-training-material" value=""/>
                <div class="container">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="product">
                                <div class="first-links clearfix">
                                    <h4>POPULAR PRODUCTS</h4>
                                    <ul>
                                        <li><a href="/commercial-liability-insurance/commercial-general-liability"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Commercial_General_Liability'});"
                                            >Commercial General Liability</a></li>
                                        <li><a href="/property-insurance/constructions-all-risk-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Construction_All_Risks'});"
                                            >Construction All Risk</a></li>	
                                        <li><a href="/commercial-liability-insurance/director-officer-liability-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Director_Officers_Insurance'});"
                                            >Directors &amp; Officers Liability</a></li>	
                                        <li><a href="/commercial-liability-insurance/doctor-professional-indemnity"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Doctors_Professional_indemnity'});"
                                            >Doctors Professional Indemnity</a></li>	
                                        <li><a href="/property-insurance/engineering-all-risk-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Engineering_All_Risks'});"
                                            >Engineering All Risk</a></li>
                                        <li><a href="/commercial-liability-insurance/errors-&-omissions-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Professional_Idemnnity_Insurance'});"
                                            >Errors &amp; Omissions</a></li>	
                                        <li><a href="/individual-insurance/health-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Health_Insurance'});"
                                            >Family Health Insurance</a></li>	
                                        <li><a href="/group-insurance/group-health-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Group_Health_Insurance'});"
                                            >Group Health Insurance</a></li>	
                                        
                                    </ul>
                                    <ul>
                                        <li><a href="/group-insurance/group-personal-accident-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Group_Personal_Accident'});"
                                            >Group Personal Accident</a></li>	
                                        <li><a href="/individual-insurance/home-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Home_Insurance'});"
                                            >Home Insurance</a></li>	
                                        <li><a href="/marine-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Marine_Insurance'});"
                                            >Marine Insurance</a></li>	
                                        <li><a href="/property-insurance/motor-fleet-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Motor_Flee_Insurance'});"
                                            >Motor Fleet Insurance</a></li>	
                                        <li><a href="/property-insurance/office-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Office_Insurance'});"
                                            >Office Insurance</a></li>	
                                        <li><a href="/individual-insurance/term-life-keyman-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Term_life_Insurance'});"
                                            >Term Life &amp; Keyman</a></li>	
                                        <li><a href="/individual-insurance/travel-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Travel_Insurance'});"
                                            >Travel Insurance</a></li>	
                                        <li><a href="/group-insurance/group-workmen-compensation-insurance"
                                            onClick="ga('send', 'event', { eventCategory: 'Footer_Link', eventAction: 'Footer_Link_Click', eventLabel: 'Footer_Link_Group_Workmen_Insurance'});"
                                            >Workmen Compensation/ Employees Compensation</a></li>
        
                                    </ul>
                                </div>
                            </div>
                            <div class="about-securenow">
                                <div class="first-links about-links">
                                    <h4>USEFUL LINKS</h4>
                                    <ul>
                                        <li><a href="/about-us">About Us</a></li>
                                        <li>
                                            
                                            
                                            
                                            
                                                <a href="https://securenow.in/blog/alliances">Alliances</a>
                                            
                                        </li>
                                        <li><a href="http://securenow.in/blog/" target="_blank">Blog</a></li>
                                        <li><a href="/careers">Careers</a></li>
                                        <li><a href="https://s3.ap-south-1.amazonaws.com/static-files-website/documents/Code+of+Conduct_IRDA+2018.pdf" target="_blank">Code of Conduct</a></li>
                                        <li><a href="/complaints">Complaints</a></li>
                                        <li><a href="javascript:void(0);" class="openClaimForm">Download Claim Forms</a></li>
                                        <li><a href="javascript:void(0);" class="openNetworkHospitalForm">Download Hospital List</a></li>
                                        <li><a href="javascript:void(0);" class="openProposalForm">Download Proposal Forms</a></li>
                                        <li><a href="javascript:void(0);" class="openPolicyWordingForm">Download Policy Wordings</a></li>
                                        <li class="sm-dropdown">
                                            <a href="javascript:void(0);" id="training-form" onclick="">Download Training Material</a>
                                            <div class="sm-drop">
                                                <div class="sm-drop-inner">
                                                    <div id="" class="deep-dropdown">Product
                                                        <div class="sm-drop">
                                                            <div class="sm-drop-inner">
                                                                <div id ="" onclick="openTrainingForm('Group Mediclaim Insurance.pdf');">Group Mediclaim Insurance</div>
                                                                <div id="" onclick="openTrainingForm('Group Personal Accident Insurance.pdf');">Group Personal Accident Insurance</div>
                                                                <div id="" onclick="openTrainingForm('Group Term Life Insurance.pdf');">Group Term Life Insurance</div>
                                                                <div id ="" onclick="openTrainingForm('EDLI.pdf');">EDLI</div>
                                                                <div id ="" onclick="openTrainingForm('Engineering - CAR and EAR.pdf');">Engineering - CAR & EAR</div>
                                                                <div id ="" onclick="openTrainingForm('Fire Insurance.pdf');">Fire Insurance</div>
                                                                <div id ="" onclick="openTrainingForm('Liability Insurances.pdf');">Liability Insurance</div>
                                                                <div id ="" onclick="openTrainingForm('Marine Insurance.pdf');">Marine Insurance</div>
                                                                <div id ="" onclick="openTrainingForm('Retail Insurances.pdf');">Retail Insurance</div>
                                                                <div id ="" onclick="openTrainingForm('Workmen Compensation Insurance.pdf');">Workmen Compensation/ Employees Compensation Insurance</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="" class="deep-dropdown">Personal Skills
                                                        <div class="sm-drop">
                                                            <div class="sm-drop-inner">
                                                                <div id ="" onclick="openTrainingForm('Conflict Resolution.pdf');">Conflict Resolution</div>
                                                                <div id="" onclick="openTrainingForm('Client Engagement_Workshop Presentation.pdf');">Client Engagement Workshop</div>
                                                                <div id="" onclick="openTrainingForm('Communication Skills.pdf');">Communication Skills</div>
                                                                <div id="" onclick="openTrainingForm('Deal Making_Workshop Presentation.pdf');">Deal Making Workshop Presentation</div>
                                                                <div id="" onclick="openTrainingForm('Leading Self.pdf');">Leading Self</div>
                                                                <div id="" onclick="openTrainingForm('Performance Review Session_SecureNow.pdf');">Performance Review</div>
                                                                <div id="" onclick="openTrainingForm('Team Building_Workshop.pdf');">Team Building Workshop</div>
                                                                <div id="" onclick="openTrainingForm('Training Skills.pdf');">Training Skills</div>
                                                                <div id="" onclick="openTrainingForm('Email Etiquettes_Basics.pdf');">Email Etiquettes</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul>
        
                                        <li><a href="https://securenow.in/hospital-locator/#/" target="_blank">Hospital Locator</a></li>
                                        <li><a href="/how-we-work">How We Work</a></li>
                                        <li><a href="http://ibai.org/" target="_blank">IBAI</a></li>
                                        <li><a href="https://securenow.in/insuropedia/" target="_blank">Insuropedia</a></li>
                                        <li><a href="https://s3.ap-south-1.amazonaws.com/static-files-website/documents/ISNP.pdf" target="_blank">ISNP</a></li>
                                        <li><a href="/media">Media</a></li>
                                        <li><a href="https://static-files-website.s3.ap-south-1.amazonaws.com/documents/Credentials_PDF.pdf" target="_blank">Our Credentials</a></li>
                                        <li><a href="https://securenow.in/terms-of-use/privacy-policy">Privacy Policy</a></li>
                                        
                                        <li><a href="https://securenow.in/blog/securenow-radio/">SecureNow Radio</a></li>
                                        <li><a href="/sitemap/">Sitemap</a></li>
                                        <li><a href="/terms-of-use/terms">Terms and Conditions</a></li>
                                        <li><a href="/video"
                                        
                                        >Videos</a></li>
                                    </ul>
                                    <div class="clearfix"></div>
                                </div>
                                <ul class="app-store-icon">
                                    <li class="app-store">
                                        <a href="https://play.google.com/store/apps/details?id=com.notify&hl=en" class="google-play" target="_blank"></a>
                                    </li>
                                    <li class="app-store">
                                        <a href="https://itunes.apple.com/in/app/notify-securenow/id1120648218?mt=8" class="app-store" target="_blank"></a>
                                    </li>
                                </ul>	
                            </div>
                            <div class="connect pb-0">
                                <div class="social-links">
                                    <h4>CONNECT WITH US</h4>
                                    <h4>Like, Share or Tweet on -</h4>
                                    <div class="socials">
                                    
                                        <span itemscopeitemtype="http://schema.org/Organization">
                                            <a itemprop="sameAs" target="_blank" href="https://www.facebook.com/SecureNow"><span class="social-icon facebook"></span></a>
                                            <a itemprop="sameAs" target="_blank" href="https://www.quora.com/profile/Kapil-Mehta-2"><span class="social-icon quora"></span></a>
                                            <a itemprop="sameAs" target="_blank" href="https://www.youtube.com/user/SecureNowIndia"><span class="social-icon youtube"></span></a>
                                            <a itemprop="sameAs" target="_blank" href="https://www.linkedin.com/company/securenow-insurance-broker"><span class="social-icon linkedin"></span></a>
                                        
                                            <a itemprop="sameAs" target="_blank" href="https://twitter.com/SecureNowIndia"><span class="social-icon twitter"></span></a>
                                            <a itemprop="sameAs" target="_blank" href="https://wa.me/919999207828?text=I%20need%20Assistance.%20Please%20resolve%20my%20query">
                                                <span class="">
                                                    <img src="./assets/public/redesign/icons/whatsapp.png" width="25"/>
                                                </span>
                                            </a>
                                        </span>
                                
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="pull-left" id="siteseal"></div>
                                </div>				
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="services">
                <div class="container">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="row">
                            <div class="col-lg-3 col-xs-6 iconcls" onclick="openContactMeModal()">
                                <div class="support call">
                                    <span><img src="https://s3.ap-south-1.amazonaws.com/static-files-website/footer-icons/call-answer.png"/></span>
                                    <span class="lg-text">CALL</span>
                                    <span><a class="ctcMobile" href="tel: +91 9696683999" onClick="ga('send', 'event', { eventCategory: 'Call_Icon', eventAction: 'Button_Click', eventLabel:'Contact_Me_form'});">&nbsp; +91 9696683999</a></span>
                                </div>
                            </div>
                            <div class="col-lg-3 col-xs-6 iconcls" >
                                <a href="https://securenow.in/insuropedia/">
                                <div class="support faq">
                                    <span><img src="https://s3.ap-south-1.amazonaws.com/static-files-website/footer-icons/help-round-button.png"/></span>
                                    <span class="lg-text">FAQ</span>
                                    <span>Product FAQs</span>
                                </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-xs-6 iconcls">
                                <a href="mailto:support@securenow.in">
                                <div class="support email">
                                    <span><img src="https://s3.ap-south-1.amazonaws.com/static-files-website/footer-icons/mail-black-envelope-symbol.png"/></span>
                                    <span class="lg-text">EMAIL</span>
                                    <span>support@securenow.in</span>
                                </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-xs-6 iconcls">
                                <a href="/notify">
                                    <div class="support notify">
                                        <span><img src="./assets/public/redesign/icons/notify-icon.svg" width="30"/></span>
                                        <span class="lg-text">NOTIFY</span>
                                        <span>24x7x365</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-xs-6 iconcls">
                                <a target="_blank" href="https://wa.me/919999207828?text=I%20need%20Assistance.%20Please%20resolve%20my%20query">
                                    <div class="support">
                                        <span><img src="./assets/public/redesign/icons/whatsapp.png" width="30"/></span>
                                        <span class="lg-text">WHATSAPP</span>
                                        <span>&nbsp; +91 9696683999</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="copyright">
                <div class="container">
                    <p>
                        SecureNow Insurance Broker Pvt. Ltd. IRDAI Certificate No: 425,
                        Date of License: 2nd Dec, 2017, License valid till 1st Dec, 2020,
                        Registered Address: C4/4 Safdarjung Dev Area, New Delhi 110016,<br/>
                        Principal Officer: Abhishek Bondia, Contact Details of Principal
                        Officer: abhishekbondia@securenow.in  +91 9696683999,<br/>
                        Directors: Abhishek Bondia and Kapil Mehta, Category of License:
                        Direct, Insurance is the subject matter of solicitation
                    </p>
                </div>
            </section>
        <div class="remodal small-modal common-modal extra-small" data-remodal-id="emailSentModal" id="emailSentModal" role="dialog" data-remodal-options="hashTracking: false, closeOnOutsideClick: false" aria-labelledby="modal1Title" aria-describedby="modal1Desc">
            <button data-remodal-action="close" class="remodal-close" aria-label="Close"></button>
            <div id="thankyouBuyNow" class="thankYouMessage remodal-content">
                 <h3>Thank You!</h3>
                 <h4 class="text-success align-center-successMessage">Quote has been emailed to <span id="sentQuoteEmailAddress"></span></h4>
            </div>
        </div>
        
            <script src="./assets/public/chatNew-62682a82a4f928e0fba61a22bbe75716.js" type="text/javascript" ></script>
        
        <script type="text/javascript">
        
            var chatInitiationSource = "";
        
        </script>
        
        
        <div id="chatBoxWindow" class="chat-box">
        
            <div class="chat-box-head">
                <span id="queryBoxheader">Need help? Call us</span>
                <div class="chat-action">
                    <a href="javascript:void(0);" class="minimizeChat" onclick="minimizeChat(this);">
                        <span class="glyphicon glyphicon-minus"></span>
                    </a>
                    <a href="javascript:void(0);" class="maximizeChat" onclick="maximizeChat(this);" style={{display: 'none'}}>
                        <span class="glyphicon glyphicon-modal-window"></span>
                    </a>
                    <a href="javascript:void(0);" class="closeChat" onclick="closeQueryBox();">
                        <span class="glyphicon glyphicon-remove"></span>
                    </a>
                </div>
            </div>
        
        
            <div class="container">
                <div id="chatProcess" class="chat">
        
                    <div class="spinner"></div>
        
                    <div class="scroll-chat">
                        <ul id="scrollChat">
                            <li class="receive welcome" style={{display: 'none'}}><span>Hi! Welcome to SecureNow!</span></li>
                            <li class="receive question user-name" style={{display: 'none'}}><span>May I know your name?</span></li>
                        </ul>
                    </div>
        
                    <div class="input-box">
        
        
                        <input type="text" name="" placeholder="Type here.." id="textBox"/>
        
        
                        <div class="bottom-buttons hide"></div>
        
        
                        <button type="button" id="sendButton" disabled>
                            <span class="send"></span>
                            <span class="done"></span>
                            <span class="pass"></span>
                        </button>
        
                    </div>
        
                </div>
        
        
                <div id="thankYouMsg" class="chat" style={{display: 'none'}}>
                    <img src="https://s3.ap-south-1.amazonaws.com/static-files-website/common-images/securenow-logo-large.png" class="chat-logo"/>
                    <hr/>
                    <div class="thankYou">
                        <h2>Thanks</h2>
                        <p>We will contact you shortly to discuss further.</p>
                    </div>
                </div>
            </div>
        </div>
        
        
        </div>  

        );
    }
}