import React, { useState, useEffect } from 'react';
import { X, Eye, EyeOff, ArrowUpRight, CheckCircle2, Mail, Phone, AlertCircle, Loader2 } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';
import { useAuth } from '../../context/AuthContext';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, authModalView, setAuthModalView } = useQuote();
  const { register, login, resetPassword, isFirebaseConfigured } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Forgot Password Options
  const [forgotMethod, setForgotMethod] = useState<'email' | 'phone'>('email');
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotPhone, setForgotPhone] = useState('');

  // Clear messages when modal opens or view changes
  useEffect(() => {
    setErrorMessage('');
    setIsSubmitted(false);
  }, [authModalView, isAuthModalOpen]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isAuthModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isAuthModalOpen]);

  // Form State
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    companyName: '',
    sector: '',
    state: '',
    city: '',
    gstin: '',
    password: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  if (!isAuthModalOpen) return null;

  const getFriendlyErrorMessage = (error: any) => {
    const code = error?.code || '';
    if (code === 'auth/email-already-in-use') {
      return 'An account with this email already exists. Please login instead.';
    }
    if (code === 'auth/invalid-email') {
      return 'Please enter a valid email address.';
    }
    if (code === 'auth/weak-password') {
      return 'Password is too weak. Please use at least 6 characters.';
    }
    if (code === 'auth/user-not-found' || code === 'auth/wrong-password' || code === 'auth/invalid-credential') {
      return 'Invalid email or password. Please verify and try again.';
    }
    if (code === 'auth/too-many-requests') {
      return 'Access temporarily disabled due to multiple failed attempts. Please try again later or reset your password.';
    }
    return error?.message || 'An error occurred. Please try again.';
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (registerData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (!isFirebaseConfigured) {
      setErrorMessage('Firebase credentials not configured yet. Please add your Firebase keys to your .env file.');
      return;
    }

    try {
      setIsLoading(true);
      await register(registerData);
      setSuccessMessage('Account created successfully! Welcome to Mihika Ayra Traders & Imports & Exports.');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        closeAuthModal();
      }, 2000);
    } catch (err: any) {
      setErrorMessage(getFriendlyErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!isFirebaseConfigured) {
      setErrorMessage('Firebase credentials not configured yet. Please add your Firebase keys to your .env file.');
      return;
    }

    try {
      setIsLoading(true);
      await login(loginData.email, loginData.password);
      setSuccessMessage('Signed in successfully! Welcome back.');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        closeAuthModal();
      }, 1800);
    } catch (err: any) {
      setErrorMessage(getFriendlyErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!isFirebaseConfigured) {
      setErrorMessage('Firebase credentials not configured yet. Please add your Firebase keys to your .env file.');
      return;
    }

    if (forgotMethod === 'phone') {
      setErrorMessage('Password reset via Phone OTP is undergoing maintenance. Please select Email to reset your password instantly.');
      return;
    }

    try {
      setIsLoading(true);
      await resetPassword(forgotEmail);
      setSuccessMessage(`Password reset link sent to ${forgotEmail}. Please check your inbox (and spam folder) to set a new password.`);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        closeAuthModal();
      }, 3500);
    } catch (err: any) {
      setErrorMessage(getFriendlyErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div
        className={`bg-white rounded-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-6 transition-all duration-300 ${
          authModalView === 'register' ? 'max-w-2xl' : 'max-w-md'
        }`}
      >
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-slate-100 flex items-center justify-between relative">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#031322]">
            Welcome to Mihika Ayra
          </h2>
          <button
            onClick={closeAuthModal}
            className="text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {errorMessage && (
            <div className="mb-5 p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3 text-rose-700 text-xs sm:text-sm animate-in fade-in duration-200">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-500" />
              <span className="leading-snug">{errorMessage}</span>
            </div>
          )}

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-serif">Success!</h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">{successMessage}</p>
            </div>
          ) : (
            <>
              {/* VIEW 1: REGISTER / CREATE ACCOUNT */}
              {authModalView === 'register' && (
                <form onSubmit={handleRegisterSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        First Name <span className="text-[#E63946]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter First Name"
                        value={registerData.firstName}
                        onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Last Name <span className="text-[#E63946]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Last Name"
                        value={registerData.lastName}
                        onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Email <span className="text-[#E63946]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter Email"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Mobile No */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Mobile No <span className="text-[#E63946]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter Mobile No"
                        value={registerData.mobile}
                        onChange={(e) => setRegisterData({ ...registerData, mobile: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Company Name <span className="text-[#E63946]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Company Name"
                        value={registerData.companyName}
                        onChange={(e) => setRegisterData({ ...registerData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Sector */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Sector <span className="text-[#E63946]">*</span>
                      </label>
                      <select
                        required
                        value={registerData.sector}
                        onChange={(e) => setRegisterData({ ...registerData, sector: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select Sector</option>
                        <option value="Agriculture & Spices">Agriculture & Spices</option>
                        <option value="Seafood & Frozen Foods">Seafood & Frozen Foods</option>
                        <option value="Jute & Textiles">Jute & Textiles</option>
                        <option value="Cold-Pressed Oils">Cold-Pressed Oils</option>
                        <option value="Chemicals & Minerals">Chemicals & Minerals</option>
                        <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                        <option value="Other Export Sector">Other Export Sector</option>
                      </select>
                    </div>

                    {/* State */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        State <span className="text-[#E63946]">*</span>
                      </label>
                      <select
                        required
                        value={registerData.state}
                        onChange={(e) => setRegisterData({ ...registerData, state: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select State</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Other State">Other State</option>
                      </select>
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        City <span className="text-[#E63946]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Select City"
                        value={registerData.city}
                        onChange={(e) => setRegisterData({ ...registerData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Gstin */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        GSTIN
                      </label>
                      <input
                        type="text"
                        placeholder="Enter GSTIN"
                        value={registerData.gstin}
                        onChange={(e) => setRegisterData({ ...registerData, gstin: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Password with Eye toggle */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                      Password <span className="text-[#E63946]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="Enter Password"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        className="w-full px-3.5 py-2.5 pr-10 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Terms & Conditions Checkbox */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-[#E63946] focus:ring-[#E63946] accent-[#E63946] cursor-pointer"
                    />
                    <label htmlFor="terms" className="text-xs sm:text-sm text-slate-600 cursor-pointer">
                      I agree with{' '}
                      <a href="#terms" className="text-[#E63946] hover:underline font-medium">
                        terms & conditions
                      </a>{' '}
                      <span className="text-[#E63946]">*</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#E63946] hover:bg-[#d62828] disabled:opacity-60 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm sm:text-base cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                        <span>Creating account...</span>
                      </>
                    ) : (
                      <>
                        <span>Create account</span>
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>

                  {/* Already signed up? Login */}
                  <div className="text-center pt-2 text-xs sm:text-sm text-slate-600">
                    Already signed up?{' '}
                    <button
                      type="button"
                      onClick={() => setAuthModalView('login')}
                      className="text-[#E63946] font-bold hover:underline cursor-pointer"
                    >
                      Login
                    </button>
                  </div>
                </form>
              )}

              {/* VIEW 2: LOGIN */}
              {authModalView === 'login' && (
                <form onSubmit={handleLoginSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                      Email <span className="text-[#E63946]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter Email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                      Password <span className="text-[#E63946]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="Enter Password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        className="w-full px-3.5 py-2.5 pr-10 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Lost Password Row */}
                  <div className="flex items-center justify-between text-xs sm:text-sm pt-1">
                    <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-slate-300 text-[#E63946] focus:ring-[#E63946] accent-[#E63946] cursor-pointer"
                      />
                      <span>Remember me</span>
                    </label>

                    <button
                      type="button"
                      onClick={() => setAuthModalView('forgot')}
                      className="text-slate-600 hover:text-[#E63946] transition-colors font-medium underline"
                    >
                      Lost your password?
                    </button>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#E63946] hover:bg-[#d62828] disabled:opacity-60 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm sm:text-base cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                        <span>Signing in...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign in</span>
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>

                  {/* Not signed up? Create an account */}
                  <div className="text-center pt-2 text-xs sm:text-sm text-slate-600">
                    Not signed up?{' '}
                    <button
                      type="button"
                      onClick={() => setAuthModalView('register')}
                      className="text-[#E63946] font-bold hover:underline cursor-pointer"
                    >
                      Create an account.
                    </button>
                  </div>
                </form>
              )}

              {/* VIEW 3: FORGOT PASSWORD */}
              {authModalView === 'forgot' && (
                <form onSubmit={handleForgotSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                      Reset Password Via <span className="text-[#E63946]">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3 mb-2">
                      <button
                        type="button"
                        onClick={() => setForgotMethod('email')}
                        className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                          forgotMethod === 'email'
                            ? 'bg-[#E63946] text-white border-[#E63946] shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setForgotMethod('phone')}
                        className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                          forgotMethod === 'phone'
                            ? 'bg-[#E63946] text-white border-[#E63946] shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <Phone className="w-4 h-4" />
                        <span>Phone Number</span>
                      </button>
                    </div>
                  </div>

                  {forgotMethod === 'email' ? (
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-[#E63946]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter Registered Email"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Phone Number <span className="text-[#E63946]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter Registered Mobile Number"
                        value={forgotPhone}
                        onChange={(e) => setForgotPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#E63946] hover:bg-[#d62828] disabled:opacity-60 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm sm:text-base cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                        <span>Sending reset email...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Reset Link</span>
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>

                  {/* Back to Login or Create Account */}
                  <div className="flex items-center justify-between pt-2 text-xs sm:text-sm text-slate-600">
                    <button
                      type="button"
                      onClick={() => setAuthModalView('login')}
                      className="text-[#0077B6] font-bold hover:underline cursor-pointer"
                    >
                      ← Back to Login
                    </button>
                    <div>
                      Not signed up?{' '}
                      <button
                        type="button"
                        onClick={() => setAuthModalView('register')}
                        className="text-[#E63946] font-bold hover:underline cursor-pointer"
                      >
                        Create account
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
