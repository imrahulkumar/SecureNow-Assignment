import React, { Component } from 'react';

export default class Main extends Component {
    render() {
        return (
            <div>
                <input type='hidden' id='selectedProduct' name='selectedProduct' value="129" />
                <input type='hidden' id='isCalculator' name='isCalculator' value="true" />
                <input type='hidden' id='askContactInfo' name='askContactInfo' value="true" />
                <form id='form' name='form' style={{ display: 'hidden' }} action="/api/v1/public/retrieveProposalDetails"
                    method="POST">
                    <input type="hidden" id="prospectId" name="prospectId" value="" />
                    <input type="hidden" id="quoteId" name="quoteId" value="" />
                    <input type="hidden" id="option" name="option" value="" />
                    <input type="hidden" id="partnerId" name="partnerId" value="" />
                </form>
                <div class="col-sm-12 center">
                    <div id="calculatorErrorMessage" class="error-message error-message-calculator"></div>
                </div>


                <div id="section-1">
                    <div class="wizard br/eadcrumb">
                        <div class="container">
                            <ul class="nav nav-tabs" role="tablist">
                                <i class="fa fa-home pull-left"></i>
                                <li class="active" itemscope itemtype="http://data-vocabulary.org/Br/eadcrumb">
                                    <a href="https://securenow.in" title="Home" itemprop="url">
                                        <span itemprop="title">Home</span>
                                    </a>
                                </li>
                                <li class="disabled" itemscope itemtype="http://data-vocabulary.org/Br/eadcrumb">
                                    <a>
                                        <i class="fa fa-chevron-right"></i>
                                        <span itemprop="title">Specials</span>
                                    </a>
                                </li>
                                <li class="disabled" itemscope itemtype="http://data-vocabulary.org/Br/eadcrumb">
                                    <a href="https://securenow.in/specials/religare-personal-accident-insurance" itemprop="url">
                                        <i class="fa fa-chevron-right"></i>
                                        <span itemprop="title">Care Health Insurance Limited (formerly known as Religare Health
									Insurance Company Limited's Personal Accident Insurance)</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <section class="group group-accident-insurance family-health new-group-accident-insurance">
                        <div class="group_banner" id="iriaBannerId">
                            <div id="iriaBannerLogoId">
                                <div class="iria-logo-img">
                                    <img src="./assets/images/IRIA_Banner_LOGO.png" />
                                </div>
                                <span class="iria-logo-text">Designed For IRIA Members</span>
                            </div>

                            <div class="group_form_main">
                                <div class="content">
                                    <div class="content-box mobile-banner">
                                        <div class="black-box">
                                            <div class="group_form_content_left">
                                                <h1 class="title">Care Health Insurance Limited (formerly known as Religare
											Health Insurance Company Limited's Personal Accident Insurance)</h1>
                                                <p>Buy Rs 1 Crore Personal Accident Insurance @ Rs 8 per day</p>
                                                <ul>
                                                    <li>Cover for Accidental Death and Permanent Disability</li>
                                                    <li>Accidental hospitalization upto Rs. 1,00,000</li>
                                                    <li>Instant policy issuance</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="black-box">
                                            <div class="wizard">
                                                <div class="wizard-inner">
                                                    <div class="connecting-line"></div>
                                                    <ul class="nav nav-tabs" role="tablist">
                                                        <li id="navigationStep1" role="presentation" class="active"
                                                            onclick="adjustBannerForContactDetails();">
                                                            <a href="#step1" data-toggle="tab" aria-controls="step1" role="tab"
                                                                title="Step 1"> <i class="icon"></i> Contact Information</a>
                                                        </li>

                                                        <li role="presentation" class="disabled"><a href="#step3"
                                                            data-toggle="tab" aria-controls="step3" role="tab"
                                                            title="Step 3"> <i class="icon"></i> Quote
													</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <form role="form">
                                                <div class="tab-content">

                                                    <div id="contactFormErrorMessage" class="error-message">All fields required
											</div>


                                                    <div class="tab-pane active" role="tabpanel" id="step1">
                                                        <div class="group_form">
                                                            <div class="group_form_row">
                                                                <div class="group_form_row_col"><i></i></div>
                                                                <div class="group_form_row_col">

                                                                    <input type="text" class="form-control" name="company"
                                                                        onkeydown="preventCompanyWhiteSpaceAtFirst(event)"
                                                                        id="company" placeholder="Name" value=""
                                                                        oninput="isValidTextLength(this);removeSpecials(this);"
                                                                        onchange="setProspectIdNull();"
                                                                        onkeypress="hideError();" autofocus required />

                                                                </div>
                                                            </div>
                                                            <div class="group_form_row">
                                                                <div class="group_form_row_col img-two"><i></i></div>
                                                                <div class="group_form_row_col">
                                                                    <input type="text" class="form-control" name="location"
                                                                        id="location"
                                                                        onkeydown="preventLocationWhiteSpaceAtFirst(event)"
                                                                        placeholder="City" value=""
                                                                        oninput="isValidTextLength(this)"
                                                                        onchange="setProspectIdNull();"
                                                                        onkeypress="hideError();" required />

                                                                </div>
                                                            </div>
                                                            <div class="group_form_row">
                                                                <div class="group_form_row_col img-three"><i></i></div>
                                                                <div class="group_form_row_col">
                                                                    <input type="number" class="form-control" name="mobile"
                                                                        id="mobile" placeholder="Mobile" value=""
                                                                        oninput="isValidMobileLength(this);"
                                                                        onchange="setProspectIdNull();"
                                                                        onkeypress="hideError();" required />
                                                                </div>
                                                            </div>
                                                            <div class="group_form_row">
                                                                <div class="group_form_row_col img-four"><i></i></div>
                                                                <div class="group_form_row_col">
                                                                    <input type="email" class="form-control" name="email"
                                                                        id="email" placeholder="Email" value=""
                                                                        onchange="setProspectIdNull();"
                                                                        onkeypress="hideError();" required />
                                                                </div>
                                                            </div>

                                                            <div class="group_form_row">

                                                                <div class="group_form_button">
                                                                    <button type="button" id="firstNextPA"
                                                                        class="btn btn-default next-step"
                                                                        onClick=" ga('send', 'event', { eventCategory: 'Get_Quote', eventAction: 'Next_Button', eventLabel:'Quote_Next_Button_RPAI'});">Next</button>
                                                                    <p class="note-cta">Get quote if you agree to our <a
                                                                        href="https://securenow.in/terms-of-use/terms"
                                                                        target="_blank">Terms of Use</a> and <a
                                                                            href="https://securenow.in/terms-of-use/privacy-policy"
                                                                            target="_blank">Privacy Policy</a></p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="group group-accident-insurance">


                        <div class="clearfix"></div>

                        <div class="contact-us-strip">
                            <div>Leave a message and we'll call you back.</div>
                            <a id="openContactMeForm" class="three-d-button" href="javascript:void(0);"
                                onClick="ga('send', 'event', { eventCategory: 'Contact Me', eventAction: 'Button_Click', eventLabel:'Contact me '});">CONTACT
						ME</a>
                        </div>

                        <div class="group_product_advantage">
                            <div class="content">
                                <div class="container">
                                    <h2>Advantages of Care Health Insurance Limited (formerly known as Religare Health
								Insurance Company Limited's Personal Accident Insurance)</h2>
                                    <div class="product-items clearfix">
                                        <div class="product-item-boxes clearfix">
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                <div class="product-item-box">
                                                    <div class="product_icon_img"><span
                                                        class="why-img sprite-gpa img-one"></span></div>
                                                    <span>
                                                        Comprehensive Cover<br />
                                                        <span>Our exclusive personal accident product covers accidental
                                                        death, permanent total and partial disability, fracture and
													hospitalization due to accidents.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                <div class="product-item-box">
                                                    <div class="product_icon_img"><span
                                                        class="why-img sprite-tlki img-one"></span></div>
                                                    <span>
                                                        Nominal Cost<br />
                                                        <span>For a Rs 20 lacs cover the cost is about 0.04% of the sum
                                                        assured. For higher sum assureds, the rate reduces to about
													0.02% of the sum assured.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                <div class="product-item-box">
                                                    <div class="product_icon_img"><span
                                                        class="why-img sprite-tlki img-two"></span></div>
                                                    <span>
                                                        Easy To Buy<br />
                                                        <span>Securenow's existing clients and registered users of SecureNow
                                                        App can buy this exclusive product. Just click on the "Buy Now"
													button above. No medical tests needed.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                <div class="product-item-box">
                                                    <div class="product_icon_img"><span
                                                        class="why-img sprite-wc img-one"></span></div>
                                                    <span>
                                                        Worldwide Coverage<br />
                                                        <span>Care Health Insurance Limited (formerly known as Religare
                                                        Health Insurance Company Limited's Personal Accident Insurance)
                                                        policy cover is applicable worldwide. So, even if you are
                                                        travelling abr/oad for on work or holiday the cover is
													valid</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="benifit_overview">
                            <div class="container">
                                <h2>Benefits of Our Personal Accident Insurance</h2>
                                <div class="row benifit_overview_row">
                                    <div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 col_cmn">
                                        <div class="img sprite-gpa img-one"></div>
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                                        <h3 class="title">Accidental Death Benefit</h3>
                                        <ul>
                                            <li>Our personal accident insurance provides 24*7 worldwide coverage for
                                            accidental death. Accidents in offical and non-official working hours are
										covered. </li>
                                            <li>Cause of death includes road accidents, work-place incidents, or mishaps at
										home</li>
                                            <li>Compensation, upto 100% sum assured, is paid to the beneficiary of the
										insured</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="row benifit_overview_row">
                                    <div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 col_cmn">
                                        <div class="img sprite-gpa img-three"></div>
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                                        <h3 class="title">Disabilities Covered</h3>
                                        <ul>
                                            <li>Our accidental insurance plan pays a pre-specified proportion of the sum
                                            assured in case the insured suffers from an accidental related permanent
										disability.</li>
                                            <li>Partial disability to specific body parts is covered with payout between 2
										to 70% of sum assured</li>
                                            <li>Total disability such as loss of both eyes or limbs is covered with payout
										of 100% of sum insured</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="row benifit_overview_row">
                                    <div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 col_cmn">
                                        <div class="img sprite-gpa img-two"></div>
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                                        <h3 class="title">Medical Expenses</h3>
                                        <ul>
                                            <li>The Personal Accident insurance will also cover specific accidental medical
										expenses. This is a supplementary cover to standard health insurance </li>
                                            <li>Emergency accidental hospitalization cover is available upto Rs 1,00,000
									</li>
                                            <li>Outpatient expenses (OPD) for fractures is covered upto Rs 20,000.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="faq faq-category">
                            <div class="container">
                                <h2>FAQs</h2>
                                <ul class="nav nav-tabs nav-tabs-faq" role="tablist">
                                    <li role="presentation" class="active"><a href="#coverage" aria-controls="coverages"
                                        role="tab" data-toggle="tab">Coverages</a></li>
                                    <li role="presentation"><a href="#claims" aria-controls="messages" role="tab"
                                        data-toggle="tab">Claims</a></li>
                                    <li role="presentation"><a href="#premium" aria-controls="profile" role="tab"
                                        data-toggle="tab">Premium</a></li>
                                    <li role="presentation"><a href="#general" aria-controls="messages" role="tab"
                                        data-toggle="tab">Others</a></li>
                                </ul>

                                <div class="tab-content tab-content-faq">
                                    <div role="tabpanel" class="tab-pane fade active in" id="coverage">
                                        <div class="panel-group" id="accordionCoverage" role="tablist"
                                            aria-multiselectable="true">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordionCoverage"
                                                            href="#colapsCover1"
                                                            class="collapsed"><span>1.&nbsp;</span><span>What are the
                                                            coverages offered under this exclusive personal accident
														insurance plan?</span></a>
                                                    </h4>
                                                </div>
                                                <div id="colapsCover1" class="panel-collapse collapse" style={{ height: '0px' }}>
                                                    <div class="panel-body">
                                                        The Personal Accident insurance provides extended coverages at a
                                                        reasonable premium. It covers accidental death, permanent, partial
                                                        or total disability, and fractures typically not covered in other
                                                        insurances. It also covers accidental hospitalization expenses upto
                                                        Rs. 1,00,000.
											</div>
                                                </div>
                                            </div>

                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordionCoverage"
                                                            href="#colapsCover2"
                                                            class="collapsed"><span>2.&nbsp;</span><span>What is not covered
														under this personal accidental insurance policy?</span></a>
                                                    </h4>
                                                </div>
                                                <div id="colapsCover2" class="panel-collapse collapse" style={{ height: '0px' }}>
                                                    <div class="panel-body">
                                                        Standard exclusions includes natural death, self inflicted injuries,
                                                        intoxication, death or injury due to any sexually transmitted
                                                        diseases, due to war and criminal acts, while engaging in an
                                                        adventure sport or hazardous activity, due to pregnancy including
                                                        childbirth, miscarriage, abortion or complication arising there from
                                                        etc.
											</div>
                                                </div>
                                            </div>

                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordionCoverage"
                                                            href="#colapsCover3"
                                                            class="collapsed"><span>3.&nbsp;</span><span>What are the
                                                            add-ons provided in exclusive personal accidental
														insurance?</span></a>
                                                    </h4>
                                                </div>
                                                <div id="colapsCover3" class="panel-collapse collapse" style={{ height: '0px' }}>
                                                    <div class="panel-body">
                                                        Additional benefits provided under our exclusive personal accident
                                                        insurance includes coverage for fractures upto Rs. 20,000 and
                                                        accidental hospitalization upto Rs. 1,00,000. One more extended
                                                        coverage is that sum insured can be chosen maximum upto 1 crore
                                                        under our exclusive personal accident insurance plan.
											</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade" id="claims">
                                        <div class="panel-group" id="accordionClaims" role="tablist"
                                            aria-multiselectable="true">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordionClaims"
                                                            href="#colapsClaim1"
                                                            class="collapsed"><span>1.&nbsp;</span><span>What are the
                                                            documents required to claim under our personal accident
														insurance?</span></a>
                                                    </h4>
                                                </div>
                                                <div id="colapsClaim1" class="panel-collapse collapse" style={{ height: '0px' }}>
                                                    <div class="panel-body">
                                                        While making a claim under a personal accident insurance, nominee is
                                                        required to produce complete personal information along with the
                                                        death certificate (in case of death), dully filled claim form,
                                                        panchnama, FIR report, post-mortem report, hospitalization report,
                                                        medical bills and medical certificate.
											</div>
                                                </div>
                                            </div>

                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordionClaims"
                                                            href="#colapsClaim2"
                                                            class="collapsed"><span>2.&nbsp;</span><span>How to file a claim
														under our personal accident insurance?</span></a>
                                                    </h4>
                                                </div>
                                                <div id="colapsClaim2" class="panel-collapse collapse" style={{ height: '0px' }}>
                                                    <div class="panel-body">
                                                        Process to file a claim under this insurance starts from intimation
                                                        of claim. Policyholder should intimate SecureNow and should submit
                                                        all the required documents along with duly signed claim form within
                                                        the specified time. There onwards, we will follow up with Care
                                                        Health Insurance Limited (formerly known as Religare Health
                                                        Insurance Company Limited) to get your claims get passed.
											</div>
                                                </div>
                                            </div>

                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordionClaims"
                                                            href="#colapsClaim3"
                                                            class="collapsed"><span>3.&nbsp;</span><span>How much of my
                                                            claim will be payable in case of fractures due to accident
														under this policy?</span></a>
                                                    </h4>
                                                </div>
                                                <div id="colapsClaim3" class="panel-collapse collapse" style={{ height: '0px' }}>
                                                    <div class="panel-body">
                                                        Our personal accident insurance covers fractures which is very
                                                        unlikely to get in other products available in the market. In case
                                                        of claim for fracture due to accident, a compensation benefit is
                                                        paid maximum upto Rs. 20,000 as per the fracture table of Care
                                                        Health Insurance Limited (formerly known as Religare Health
                                                        Insurance Company Limited) health insurance's group secure product.
											</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade" id="premium">
                                        <div class="panel-group" id="accordionPremium" role="tablist"
                                            aria-multiselectable="true">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordionPremium"
                                                            href="#colapsPrem1" class="collapsed"><span>1.&nbsp;</span><span>How
                                                            is the premium
                                                            amount of our personal accident insurance
														determined?</span></a>
                                                    </h4>
                                                </div>
                                                <div id="colapsPrem1" class="panel-collapse collapse" style={{ height: '0px' }}>
                                                    <div class="panel-body">
                                                        Our premium amount is determined on the basis of selected sum
                                                        insured. Premium is computed by considering the covers being
                                                        provided which also includes add on cover such as fractures and
                                                        accidental hospitalization. This product is available at this
                                                        premium only for Securenow and SecureNow App clients.
											</div>
                                                </div>
                                            </div>

                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordionPremium"
                                                            href="#colapsPrem2"
                                                            class="collapsed"><span>2.&nbsp;</span><span>What is the right
                                                            sum insured to buy under the personal accident
														insurance?</span></a>
                                                    </h4>
                                                </div>
                                                <div id="colapsPrem2" class="panel-collapse collapse" style={{ height: '0px' }}>
                                                    <div class="panel-body">
                                                        A general thumb rule is to look for a cover that is atleast 10 times
                                                        of your annual income. The higher the insurance cover, the more is
                                                        the security. One can also consider other factors also such as
                                                        his/her current and future liabilities. In our policy you can choose
                                                        sum insured starting from 10 lakhs to 1 crore.
											</div>
                                                </div>
                                            </div>

                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordionPremium"
                                                            href="#colapsPrem3" class="collapsed"><span>3.&nbsp;</span><span>Why
                                                            should I prefer
                                                            this product over personal accident insurance product
														available in market?</span></a>
                                                    </h4>
                                                </div>
                                                <div id="colapsPrem3" class="panel-collapse collapse" style={{ height: '0px' }}>
                                                    <div class="panel-body">
                                                        Our exclusive personal accident insurance product with Care Health
                                                        Insurance Limited (formerly known as Religare Health Insurance
                                                        Company Limited) provides comprehensive coverage at an affordable
                                                        premium. Premium for this policy is discounted atleast 70% compared
                                                        to the standard products available in the market. Moreover, coverage
                                                        for accidental hospitalization expenses, and fracture is not
                                                        commonly available.
											</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade" id="general">
                                        <div class="panel-group" id="accordionGeneral" role="tablist"
                                            aria-multiselectable="true">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordionGeneral"
                                                            href="#colapsGeneral1"
                                                            class="collapsed"><span>1.&nbsp;</span><span>What is the
                                                            eligibility criteria to buy this personal accident insurance
														policy?</span></a>
                                                    </h4>
                                                </div>
                                                <div id="colapsGeneral1" class="panel-collapse collapse" style={{ height: '0px' }}>
                                                    <div class="panel-body">
                                                        An individual who is a registered user of our app 'SecureNow App'
                                                        (available on both Android and iOS) or is our client can buy this
                                                        personal accident insurance policy. Minimum entry age to buy this
                                                        product is 18 years and maximum entry age is 70 years. Policy tenure
                                                        is of one year.
											</div>
                                                </div>
                                            </div>

                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordionGeneral"
                                                            href="#colapsGeneral2"
                                                            class="collapsed"><span>2.&nbsp;</span><span>What is the claim
                                                            payment method being offered under this personal accident
														insurance product for hospitalization expenses?</span></a>
                                                    </h4>
                                                </div>
                                                <div id="colapsGeneral2" class="panel-collapse collapse" style={{ height: '0px' }}>
                                                    <div class="panel-body">
                                                        Claims can be processed on reimbursement basis under this personal
                                                        accident insurance product. In case of any claim, first you need to
                                                        submit the claim documents in a stipulated time limit. After the
                                                        submission, Care Health Insurance Limited (formerly known as
                                                        Religare Health Insurance Company Limited) would review the document
                                                        and then transfer the passed claim amount to your bank account
                                                        directly.
											</div>
                                                </div>
                                            </div>

                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordionGeneral"
                                                            href="#colapsGeneral3"
                                                            class="collapsed"><span>3.&nbsp;</span><span>Do I need a
                                                            personal accident insurance policy, when I already have a
														health insurance policy?</span></a>
                                                    </h4>
                                                </div>
                                                <div id="colapsGeneral3" class="panel-collapse collapse" style={{ height: '0px' }}>
                                                    <div class="panel-body">
                                                        Yes, because the risks covered are different in both the policies.
                                                        Health insurance covers medical treatment costs, particularly
                                                        hospitalization. Personal accident covers accidental death and
                                                        disabilities. Under accidental insurance, lump sum payment is made
                                                        depending upon the type of claim, unlike health insurance where only
                                                        amount of treatment is paid. Also, you would be also able to claim
                                                        small incidents such as fracture in this exclusive accident
                                                        insurance which is not covered under health policy.
											</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="insuropedia-new">
                            <div class="container insuropedia-border-bottom">
                                <h2>Insuropedia</h2>
                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div class="insuropedia-box">
                                        <h3 class="title">What are the different types of Disabilities covered under a Group
									Personal Accident Plan?</h3>
                                        <div class="insuropedia-box-text"><span>Group personal accident insurance plans
                                        cover multiple types of disabilities. The disabilities caused by accidents
                                        are classified under the following three sections for determining
										compensation:</span>
                                            <ul>
                                                <li>Permanent Total Disablement (PTD)</li>
                                                <li>Permanent Partial Disablement (PPD)</li>
                                                <li>Temporary Total Disablement (TTD)</li>
                                            </ul>
                                        </div>
                                        <a href="https://securenow.in/insuropedia/what-are-different-types-disabilities-covered-group-personal-accident-plan"
                                            target="_blank" class="button-nobg read-more-btn">Read More</a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div class="insuropedia-box">
                                        <h3 class="title">How is the Claim Processed Under Group Personal Accident
									Insurance?</h3>
                                        <div class="insuropedia-box-text"><span>Steps to follow in case of a death
										claim</span>
                                            <ul>
                                                <li>Assignee named under the policy should immediately notify the policy
											issuing office.</li>
                                                <li>Submit the claim form along with the death certificate, post-mortem
											report, police report and original copy of the policy.</li>
                                                <li>Documents Required</li>
                                                <li>Claim Form</li>
                                                <li>Photo ID</li>
                                            </ul>
                                        </div>
                                        <a href="https://securenow.in/insuropedia/how-is-the-claim-processed-group-personal-accident-insurance"
                                            target="_blank" class="button-nobg read-more-btn">Read More</a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div class="insuropedia-box">
                                        <h3 class="title">What Is Not Covered Under Group Personal Accident Insurance?</h3>
                                        <div class="insuropedia-box-text"><span>The below-mentioned causes of injury or
                                        death are not covered or included under a group personal accident
										insurance:</span>
                                            <ul>
                                                <li>Additional payment for a claim after it has been paid</li>
                                                <li>Any pre-existing condition and disability or accident arising out of it
										</li>
                                                <li>Consequential loss of any kind and legal liability</li>
                                            </ul>
                                        </div>
                                        <a href="https://securenow.in/insuropedia/what-is-not-covered-under-group-personal-accident-insurance"
                                            target="_blank" class="button-nobg read-more-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section class="search-area">
                            <div class="container">
                                <h2>Search Insuropedia - Enter Your Question.</h2>
                                <div class="input-area">
                                    <input type="text" id="searchQuestion" class="form-control extra-pad"
                                        placeholder="Have a question? Ask or enter a search term?"
                                        onkeyup="searchInsuropedia();" />
                                    <div class="loader"></div>
                                    <div id="searchResult"></div>
                                </div>
                            </div>
                        </section>

                        <div class="why_secure_now">
                            <div class="overlay">
                                <div class="container">
                                    <h2>Why SecureNow</h2>
                                    <div class="content">
                                        <div class="row">
                                            <div class="col-sm-4 col-md-4 col-sm-4 col-lg-4 col-xs-12">
                                                <div class="in">
                                                    <div class="high_main">
                                                        <div class="high">Deep Product<br />Knowledge</div>
                                                    </div>
                                                    <p>Leverage specialized underwriters and international experts unique
												for each line of business.</p>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-md-4 col-sm-4 col-lg-4 col-xs-12">
                                                <div class="in">
                                                    <div class="high_main">
                                                        <div class="high">Cost-effective<br />Insurance</div>
                                                    </div>
                                                    <p>Works with all the leading insurers to discover the best price for
												most comprehensive features.</p>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-md-4 col-sm-4 col-lg-4 col-xs-12">
                                                <div class="in">
                                                    <div class="high_main">
                                                        <div class="high">Quick Turnaround<br />Time</div>
                                                    </div>
                                                    <p>Get cover note issued within 24 hours. All service requests are
												resolved in pre-defined TATs.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-4 col-md-4 col-sm-4 col-lg-4 col-xs-12">
                                                <div class="in">
                                                    <div class="high_main">
                                                        <div class="high">Strong Claims<br />Support</div>
                                                    </div>
                                                    <p>Manage all aspects of claim including insurer, surveyor & TPA
												co-ordination, and documentation.</p>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-md-4 col-sm-4 col-lg-4 col-xs-12">
                                                <div class="in">
                                                    <div class="high_main">
                                                        <div class="high">Value-Added<br />Services</div>
                                                    </div>
                                                    <p>Receive risk diagnostic reports, themographic studies, policy
												analysis, and wellness programs.</p>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-md-4 col-sm-4 col-lg-4 col-xs-12">
                                                <div class="in">
                                                    <div class="high_main">
                                                        <div class="high">Policy Administration System<br />(PAM)</div>
                                                    </div>
                                                    <p>Access your insurance policies through single login; service
												requests, MIS, and renewal alerts.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="greay_area">
                            <div class="container">
                                <div class="content">
                                    <div class="row">

                                        <div class="col-sm-3 col-md-3 col-sm-3 col-lg-3 col-xs-6">
                                            <a href="javascript:void(0)" class="openProposalForm">
                                                <div class="img_part">
                                                    <i></i>
                                                </div>
                                                <div>PROPOSAL FORMS <span class="glyphicon glyphicon-download-alt"
                                                    aria-hidden="true"></span></div>
                                            </a>
                                        </div>

                                        <div class="col-sm-3 col-md-3 col-sm-3 col-lg-3 col-xs-6">
                                            <a href="javascript:void(0)" class="openClaimForm">
                                                <div class="img_part img-two">
                                                    <i></i>
                                                </div>
                                                <div>CLAIM FORMS <span class="glyphicon glyphicon-download-alt"
                                                    aria-hidden="true"></span></div>
                                            </a>
                                        </div>

                                        <div class="clearfix visible-xs"></div>

                                        <div class="col-sm-3 col-md-3 col-sm-3 col-lg-3 col-xs-6">
                                            <a href="javascript:void(0)" class="openPolicyWordingForm">
                                                <div class="img_part img-three">
                                                    <i></i>
                                                </div>
                                                <div>POLICY WORDINGS <span class="glyphicon glyphicon-download-alt"
                                                    aria-hidden="true"></span></div>
                                            </a>
                                        </div>



                                        <div class="col-sm-3 col-md-3 col-sm-3 col-lg-3 col-xs-6">
                                            <a href="javascript:void(0)" class="openNetworkHospitalForm">
                                                <div class="img_part img-four">
                                                    <i></i>
                                                </div>
                                                <div>NETWORK HOSPITAL LIST <span class="glyphicon glyphicon-download-alt"
                                                    aria-hidden="true"></span></div>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="clearfix"></div>


                        <section class="blogs">
                            <div class="container">
                                <h2>Blog</h2>
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4 col-xs-12 blog-container">
                                            <div class="inner-part">
                                                <div class="img-part">
                                                    <div class="date" id="date0"></div>
                                                    <img src="https://s3.ap-south-1.amazonaws.com/static-files-website/common-images/blog-default.jpg"
                                                        class="img-responsive" id="blogImage0" alt="" />
                                                    <a class="text-bottom" id="blogTitle0" target="_blank"></a>
                                                </div>
                                                <p class="text-part" id="blogContent0"></p>
                                                <a href="#" class="btn-orange read-more" id="blogButton0" target="_blank">Read
											More</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-xs-12 blog-container">
                                            <div class="inner-part">
                                                <div class="img-part">
                                                    <div class="date" id="date1"></div>
                                                    <img src="https://s3.ap-south-1.amazonaws.com/static-files-website/common-images/blog-default.jpg"
                                                        class="img-responsive" id="blogImage1" alt="" />
                                                    <a class="text-bottom" id="blogTitle1" target="_blank"></a>
                                                </div>
                                                <p class="text-part" id="blogContent1"></p>
                                                <a href="#" class="btn-orange read-more" id="blogButton1" target="_blank">Read
											More</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-xs-12 blog-container">
                                            <div class="inner-part">
                                                <div class="img-part">
                                                    <div class="date" id="date2"></div>
                                                    <img src="https://s3.ap-south-1.amazonaws.com/static-files-website/common-images/blog-default.jpg"
                                                        class="img-responsive" id="blogImage2" alt="" />
                                                    <a class="text-bottom" id="blogTitle2" target="_blank"></a>
                                                </div>
                                                <p class="text-part" id="blogContent2"></p>
                                                <a href="#" class="btn-orange read-more" id="blogButton2" target="_blank">Read
											More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div id="section-2" style={{ display: 'none' }}>
                    <div class="relative">
                        <a href="javascript:void(0);" class="goback-btn" onclick="hideSection2();"><span>Back</span></a>
                    </div>

                    <div class="remodal small-modal common-modal extra-small" id="BuyNowModal" data-remodal-id="BuyNowModal"
                        role="dialog" data-remodal-options="hashTracking: false, closeOnOutsideClick: false"
                        aria-labelledby="modal1Title" aria-describedby="modal1Desc">
                        <button data-remodal-action="close" class="remodal-close" aria-label="Close"></button>
                        <div class="remodal-content">
                            <div id="thankyouBuyNow" class="thankYouMessage">
                                <h3>Thank You</h3>
                                <h4 class="text-success align-center-successMessage">We will call you back within 24 hours.</h4>
                            </div>
                            <div id="buyNowSection" role="tabpanel" class="tab-pane active">
                                <div class="form-feild">
                                    <div class="input-field">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="modal-footer" class="modal-footer">
                            <div id="errorMessageBuyNow" class="error-message error-message-popup">Please enter mobile number
					</div>
                        </div>
                    </div>

                    <section class="section-big quote-details">
                        <div class="container price_container_main">
                            <div class="container price_container">
                                <table class="quote-details-table quote-details-table-mobile table-religarePA">
                                    <tbody>
                                        <tr class="first no-border">
                                            <td class="table-width">
                                                <div></div>
                                            </td>
                                            <td class="">
                                                <div></div>
                                            </td>
                                        </tr>
                                        <tr class="no-border table-header">
                                            <td class="main-title">Proposal for Securenow Care Health <br />Insurance Limited
										(formerly known as Religare Health Insurance Company Limited's Personal Accident
										Insurance) Policy</td>
                                            <td>
                                                <div>
                                                    <div class="insurer-image">
                                                        <img src="https://s3.ap-south-1.amazonaws.com/static-files-website/insurers/careLogo.png"
                                                            class="img-responsive" alt="Insurere" />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="no-border">
                                            <td class="color-border">
                                                <div>
                                                    <span>Total Premium<br /> (INR, excluding taxes)</span>
                                                </div>
                                            </td>
                                            <td class="premium">
                                                <div>
                                                    <div class="premium-circle">
                                                        <div>
                                                            <span> <span class="rupee-symbol">&#8377;</span>
                                                            </span> <span class="digit" id="netPremium0"></span>
                                                            <span class="text">per annum</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="">

                                            </td>
                                            <td class="button-row">
                                                <div class="btn_row hidden-lg visible-sm visible-xs">
                                                    <div class="col">
                                                        <button class="btn btn-default"
                                                            style={{ background: '#e25a24 !important', width: '56px', color: '#fff' }}
                                                            onclick="buyNowProposalPage(); ga('send', 'event', { eventCategory: 'Religare_Personal_Accident_Insurance_Calculator', eventAction: 'Quote_Buy_Button', eventLabel:'RPAI_Calculator_Quote_Buy_Button'});">Buy</button>
                                                    </div>
                                                </div>
                                                <div class="btn_row">
                                                    <div class="col"><a href="javascript:void(0)"
                                                        onClick="openPopUp('downloadPdf')"></a></div>
                                                    <div class="col">
                                                        <button type="button" class="btn btn-default"
                                                            onclick="openPopUp('sendPdf'); ga('send', 'event', { eventCategory: 'Religare_Personal_Accident_Insurance_Calculator', eventAction: 'Quote_Email_Button', eventLabel:'RPAI_Calculator_Quote_Email_Button'});">Email</button>
                                                    </div>
                                                    <div class="col hidden-xs hidden-sm">
                                                        <button class="btn btn-default"
                                                            onclick="buyNowProposalPage(); ga('send', 'event', { eventCategory: 'Religare_Personal_Accident_Insurance_Calculator', eventAction: 'Quote_Buy_Button', eventLabel:'RPAI_Calculator_Quote_Buy_Button'});">Buy</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="no-border">
                                            <td colspan="2" class="blue-strip">
                                                <div class="blue-strip-content">
                                                    <div>Covers Opted For</div>
                                                </div>
                                            </td>
                                            <td style={{ display: 'none' }}></td>
                                        </tr>
                                        <tr>
                                            <td class="">
                                                <div>
                                                    <span>Sum Insured</span>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div>
                                                    <select onchange="getQuotes()" name="sumInsuredValue" class="form-control"
                                                        id="sumInsuredValue">
                                                        <option value="15 Lacs">15 Lacs</option>
                                                        <option value="20 Lacs">20 Lacs</option>
                                                        <option value="30 Lacs">30 Lacs</option>
                                                        <option value="40 Lacs">40 Lacs</option>
                                                        <option value="50 Lacs">50 Lacs</option>
                                                        <option value="75 Lacs">75 Lacs</option>
                                                        <option value="1 Crore">1 Crore</option>
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="">
                                                <div>
                                                    <span>Policy Tenure</span>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div>
                                                    12 Months
										</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="">
                                                <div>
                                                    <span>Accidental Death</span>
                                                    <i class="tooltip01 orange-bulb" data-toggle="tooltip"
                                                        data-original-title="100% of sum assured would be payable in case of accidental death."></i>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div>
                                                    <icon class="right"></icon>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="">
                                                <div>
                                                    <span>Permanent Total Disability</span>
                                                    <i class="tooltip01 orange-bulb" data-toggle="tooltip"
                                                        data-original-title="100% of sum assured would be payable in case both limbs or both eyes are accidentally disabled."></i>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div>
                                                    <icon class="right"></icon>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="">
                                                <div>
                                                    <span>Permanent Partial Disability</span>
                                                    <i class="tooltip01 orange-bulb" data-toggle="tooltip"
                                                        data-original-title="Proportion of sum assured payout would depend on extent of disability."></i>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div>
                                                    <icon class="right"></icon>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="">
                                                <div>
                                                    <span>Medical Expenses</span>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div>
                                                    <select class="form-control" id="medicalExpenses"
                                                        onChange="getQuotes();">
                                                        <option value="Covered" selected>Covered</option>
                                                        <option value="Not Covered">Not Covered</option>
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="accidentalBlock">
                                            <td class="">
                                                <div>
                                                    <span>Accidental Hospitalization</span>
                                                    <i class="tooltip01 orange-bulb" data-toggle="tooltip"
                                                        data-original-title="Actual medical expenses for more than 24 hrs hospitalization upto 1 lacs."></i>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div id="accidentalHospitalization"></div>
                                            </td>
                                        </tr>
                                        <tr id="fractureBlock">
                                            <td class="">
                                                <div>
                                                    <span>Fractures</span>
                                                    <i class="tooltip01 orange-bulb" data-toggle="tooltip"
                                                        data-original-title="Actual medical expenses including OPD treatment for fractures upto 20,000."></i>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div id="fractures"></div>
                                            </td>
                                        </tr>
                                        <tr class="no-border">
                                            <td colspan="2" class="blue-strip">
                                                <div class="blue-strip-content">
                                                    <div>Conditions</div>
                                                </div>
                                            </td>
                                            <td style={{ display: 'none' }}></td>
                                        </tr>
                                        <tr>
                                            <td class="">
                                                <div>
                                                    <span>No claims history</span>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div>
                                                    <icon class="right"></icon>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="">
                                                <div>
                                                    <span>Filled-Up Proposal Form</span>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div>
                                                    <icon class="right"></icon>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="no-border">
                                            <td>
                                                <div class="last-border">
                                                    <span>&#8902; Minimum Entry Age is 18 and maximum entry age is 70</span><br />
                                                    <span># Sum Assured should be maximum 10 times of annual income</span><br />
                                                    <span>Note : These are indicative prices. Insurance is the subject
												<br />matter of solicitation.</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>



                    <div class="remodal common-modal small-modal" id="BuyNowModal-with-proposalForm"
                        data-remodal-id="contact-me-modal" role="dialog"
                        data-remodal-options="hashTracking: false, closeOnOutsideClick: false" aria-labelledby="modal1Title"
                        aria-describedby="modal1Desc">
                        <button data-remodal-action="close" class="remodal-close" aria-label="Close"></button>
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="remodal-header">
                                    <h4>Contact Info</h4>
                                </div>
                                <div id="thankyouBuyNowNew" class="message" style={{ display: 'none' }}>
                                    <p class="heading">Thank You</p>
                                    <div class="separater"></div>
                                    <p class="text-success align-center-successMessage">We will call you back within 24 hours.
							</p>
                                </div>
                                <div id="contactFormFamilyHealthInsurance" class="buyNowSection-with-proposalForm"
                                    role="tabpanel" class="tab-pane active">
                                    <div class="form-group">
                                        <div class="form-label">
                                            <label class="sprite-modal icon-person" for=""></label>
                                        </div>
                                        <div class="form-field">
                                            <input type="text" name="name" id="name" class="form-control custom"
                                                placeholder="Name" value="" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-label">
                                            <label class="sprite-modal icon-location" for=""></label>
                                        </div>
                                        <div class="form-field">
                                            <input type="text" name="location" id="location" class="form-control custom"
                                                placeholder="City" value="" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-label">
                                            <label class="sprite-modal icon-mobile" for=""></label>
                                        </div>
                                        <div class="form-field input-group">
                                            <input type="number" value="" name="mobile" id="mobile" class="form-control custom"
                                                placeholder="Mobile" value="" maxlength="10"
                                                oninput="isValidMobileLength(this);" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-label">
                                            <label class="sprite-modal icon-email" for=""></label>
                                        </div>
                                        <div class="form-field">
                                            <input type="text" name="email" id="email" class="form-control custom"
                                                placeholder="Email" value="" />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="form-label">
                                            <label class="familyreferral" for=""><img
                                                src="https://s3.ap-south-1.amazonaws.com/static-files-website/Referral-icon.png"
                                                class="referralImageNew" /></label>
                                        </div>
                                        <div class="form-field">
                                            <input type="number" name="couponCode" id="couponCode" class="form-control custom"
                                                placeholder="Coupon Code" value="" />
                                        </div>
                                    </div>

                                </div>
                                <div class="text-center">
                                    <div class="text-right">
                                        <div id="errorMessageProposalPopUp" class="error-message"></div>
                                        <button type="button" id="buy-now" class="btn-orange common-btn proposal-btn"
                                            onclick="submit(); ga('send', 'event', { eventCategory: 'Contact_Info_Buy', eventAction: 'Next_Button', eventLabel:'Contact_Info_Buy_Next_Button_RPAI'});">Next</button>
                                        <p class="note" style={{ textAlign: 'center' }}>Get quote if you agree to our <a
                                            href="https://securenow.in/terms-of-use/terms" target="_blank">Terms of Use</a>
									and <a href="https://securenow.in/terms-of-use/privacy-policy"
                                                target="_blank">Privacy Policy</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="footer-action">
                    <a href="javascript:void(0);"
                        onclick="chatReplica('chat-website'); ga('send', 'event', { eventCategory: 'Chat_With_Us', eventAction: 'Button_Click', eventLabel:'Chat With Us_Welcome_To Secure Now'});"
                        class="chat-button">
                        <i class="chat-icon"></i> Chat With Us
			</a>

                    <a href="javascript:void(0);" id="page-to-top" class="page-to-top"><span
                        class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a>
                </div>
            </div>
        );
    }
}

