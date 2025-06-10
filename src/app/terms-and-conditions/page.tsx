'use client';

import React from 'react';

const TermsAndConditionsPage: React.FC = () => {
    return (
        <div className="terms-and-conditions">
            <div className="min-h-screen flex flex-col">
                <div className="flex-grow w-full bg-[#021F29]">
                    <div className="container mx-auto px-4 py-12 mt-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-8">Terms and Conditions</h1>
                        <div className="mt-6 max-w-4xl mx-auto space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                                <p className="text-white mb-4">By accessing or using RemitSo&apos;s services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Definitions</h2>
                                <ul className="text-white space-y-2">
                                    <li><strong>&quot;Service&quot;</strong> refers to the website and services provided by RemitSo.</li>
                                    <li><strong>&quot;User&quot;</strong> refers to any individual or entity using our Service.</li>
                                    <li><strong>&quot;Content&quot;</strong> refers to text, images, or other information that can be posted, uploaded, linked to or otherwise made available by Users.</li>
                                    <li><strong>&quot;Account&quot;</strong> refers to a unique account created for Users to access our Service.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Use of Service</h2>
                                <p className="text-white mb-4">Our Service is intended for business use only. You agree to use our Service only for lawful purposes and in accordance with these Terms.</p>
                                <p className="text-white mb-4">You are responsible for maintaining the confidentiality of your account and password.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                                <p className="text-white mb-4">The Service and its original content, features, and functionality are owned by RemitSo and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. User Content</h2>
                                <p className="text-white mb-4">You retain all rights to any Content you submit, post, or display on or through the Service. By submitting Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your Content.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Prohibited Activities</h2>
                                <p className="text-white mb-4">You may not:</p>
                                <ul className="text-white list-disc list-inside mb-4">
                                    <li>Use the Service for any illegal purpose</li>
                                    <li>Violate any laws in your jurisdiction</li>
                                    <li>Infringe upon the rights of others</li>
                                    <li>Interfere with or disrupt the Service</li>
                                    <li>Attempt to gain unauthorized access</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
                                <p className="text-white mb-4">We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                                <p className="text-white mb-4">In no event shall RemitSo be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimer</h2>
                                <p className="text-white mb-4">The Service is provided &quot;as is&quot; without any warranties, expressed or implied. We do not warrant that the Service will be uninterrupted or error-free.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
                                <p className="text-white mb-4">We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the top of these terms.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                                <p className="text-white mb-4">These Terms shall be governed by the laws of India, without regard to its conflict of law provisions.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
                                <p className="text-white mb-4">For any questions about these Terms, please contact us at:</p>
                                <p className="text-white mb-2">Email: legal@remitso.com</p>
                                <p className="text-white mb-2">Address: Bizzhub Aspire, 100 Feet Rd, Koramangala, Bengaluru, Karnataka 560095 India</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">13. Severability</h2>
                                <p className="text-white mb-4">If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditionsPage;
