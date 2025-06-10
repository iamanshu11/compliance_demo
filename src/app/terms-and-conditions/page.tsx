'use client';

import React from 'react';


const TermsAndConditionsPage: React.FC = () => {
    return (
        <main className="terms-and-conditions">
            <div className="min-h-screen flex flex-col">
                <main className="flex-grow w-full bg-[#021F29]">
                    <div className="container mx-auto px-4 py-12 mt-12 ">
                        <h1 className="text-4xl md:text-6xl font-bold text-center text-white">Terms and Conditions</h1>
                        <div className="mt-6">

                            <h2 className="text-2xl font-bold text-white mb-2 mt-4">1. Introduction</h2>
                            <p className="text-white mb-2">These Terms and Conditions ("Agreement") govern the partnership between RemitSo, trading name for Prymara Consulting, ("we," "us," or "our") and the Partner ("you" or "your") (each a “Party” and together, the “Parties”). By signing up as a partner, you agree to be bound by this Agreement.</p>

                            <h2 className="text-2xl font-bold text-white mb-2 mt-4">2. Definitions</h2>
                            <p className="text-white mb-2">Partner: A financial consultant or payment gateway provider that has entered into this Agreement with RemitSo to promote and/or integrate with the RemitSo platform.</p>
                            <p className="text-white mb-2">RemitSo Platform: The online platform provided by RemitSo that facilitates remittance transactions for businesses. </p>
                            <p className="text-white mb-2">Intellectual Property Rights: All intellectual property rights, including but not limited to trademarks, logos, copyrights, and patents.</p>

                            <h2 className="text-2xl font-bold text-white mb-2 mt-4">3. Partner Obligations</h2>
                            <p className="text-white mb-2">Promotion: Actively promote the RemitSo Platform to your clients and network</p>
                            <p className="text-white mb-2">Integration (if applicable): If you are a payment gateway partner, integrate your payment gateway with the RemitSo Platform according to our technical specifications.</p>
                            <p className="text-white mb-2">Compliance: Comply with all applicable laws and regulations in your jurisdiction.</p>
                            <p className="text-white mb-2">Confidentiality: Maintain the confidentiality of any confidential information provided by RemitSo.</p>

                            <h2 className="text-2xl font-bold text-white mb-2 mt-4">4. RemitSo Obligations</h2>
                            <p className="text-white mb-2">Platform Access: Provide you with access to the RemitSo Platform and necessary support.</p>
                            <p className="text-white mb-2">Marketing Materials: Provide you with marketing materials, including logos and promotional content.</p>
                            <p className="text-white mb-2">Technical Support (if applicable): Provide technical support for payment gateway integration.</p>

                            <h2 className="text-2xl font-bold text-white mb-2 mt-4">5. Logo Usage</h2>
                            <p className="text-white mb-2">RemitSo Logo: We grant you a non-exclusive, non-transferable license to use our logo for the purpose of promoting the RemitSo Platform.</p>
                            <p className="text-white mb-2">Partner Logo: You grant us a non-exclusive, non-transferable license to use your logo on our website and digital assets for the purpose of identifying you as a partner.</p>

                            <h2 className="text-2xl font-bold text-white mb-2 mt-4">6. Fees and Commissions (if applicable)</h2>
                            <p className="text-white mb-2">Payment Gateway Partners: We may agree on a commission structure for successful transactions processed through your payment gateway</p>
                            <p className="text-white mb-2">Financial Consultants: We may agree on a referral fee structure for clients you refer to RemitSo.</p>

                            <h2 className="text-2xl font-bold text-white mb-2 mt-4">7. Term and Termination</h2>
                            <p className="text-white mb-2">Term: This Agreement shall commence on the Effective Date of signing and continue for an initial term of 1 year. Thereafter, this Agreement shall automatically renew for successive periods of 2 years unless either Party provides written notice of termination at least 60 days prior to the end of the then-current term.</p>
                            <p className="text-white mb-2">Termination: This Agreement may be terminated by either Party for any reason upon written notice to the other Party.</p>
                            <p className="text-white mb-2">Termination for Breach: This Agreement may be terminated by either Party immediately upon written notice to the other Party if the other Party breaches any material provision of this Agreement and fails to cure such breach within 15 days after written notice of such breach.</p>

                            <h2 className="text-2xl font-bold text-white mb-2 mt-4">8. Disclaimer</h2>
                            <p className="text-white mb-2">No Warranty: The RemitSo Platform is provided "as is" without any warranties, express or implied.</p>
                            <p className="text-white mb-2">Limitation of Liability: RemitSo shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with this Agreement.</p>

                            <h2 className="text-2xl font-bold text-white mb-2 mt-4">9. Indemnification</h2>
                            <p className="text-white mb-2">You agree to indemnify and hold RemitSo harmless from any and all claims, losses, damages, liabilities, costs, and expenses (including attorneys' fees) arising out of or in connection with your breach of this Agreement or your use of the RemitSo Platform.</p>

                            <h2 className="text-2xl font-bold text-white mb-2 mt-4">10. Governing Law</h2>
                            <p className="text-white mb-2">This Agreement shall be governed by and construed in accordance with the laws of Government of India</p>

                            <h2 className="text-2xl font-bold text-white mb-2 mt-4">11. Entire Agreement
                            </h2>
                            <p className="text-white mb-2">This Agreement constitutes the entire agreement between the Parties with respect to the subject matter hereof and supersedes all prior or contemporaneous communications, representations, or agreements, whether oral or written.</p>

                            <h2 className="text-2xl font-bold text-white mb-2 mt-4">12. Severability</h2>
                            <p className="text-white mb-2">If any provision of this Agreement is held to be invalid or unenforceable, such provision shall be struck from this Agreement and the remaining provisions shall remain in full force and effect.</p>

                            <h2 className="text-2xl font-bold text-white mb-2 mt-4">13. Waiver</h2>
                            <p className="text-white mb-2">No waiver of any provision of this Agreement shall be effective unless in writing and signed by the waiving Party.</p>

                            <h2 className="text-2xl font-bold text-white mb-2 mt-4">14. Notices</h2>
                            <p className="text-white mb-2">All notices and other communications hereunder shall be in writing and shall be deemed to have been duly given when delivered in person, upon the first business day following deposit in the mail, postage prepaid, certified or registered, return receipt requested, addressed as follows:</p>
                            <p className="text-white mb-2">If to RemitSo: Bizzhub Aspire, 100 Feet Rd, Koramangala, Bengaluru, Karnataka 560095 India</p>

                            <h2 className="text-2xl font-bold text-white mb-2 mt-4">15. Amendments</h2>
                            <p className="text-white mb-2">This Agreement may be amended only by a written instrument signed by both Parties</p>
                        </div>
                    </div>
                </main>
            </div>
        </main>
    );
};

export default TermsAndConditionsPage; 