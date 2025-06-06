'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PopupContextType {
  openPopup: () => void;
  closePopup: () => void;
}

const PopupTalkToExpertContext = createContext<PopupContextType | undefined>(undefined);

export const usePopupTalkToExpert = () => {
  const context = useContext(PopupTalkToExpertContext);
  if (!context) {
    throw new Error('usePopupTalkToExpert must be used within a PopupTalkToExpertProvider');
  }
  return context;
};

interface PopupTalkToExpertProviderProps {
  children: ReactNode;
}

const PopupTalkToExpertProvider = ({ children }: PopupTalkToExpertProviderProps) => {
  const [open, setOpen] = useState(false);

  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  return (
    <PopupTalkToExpertContext.Provider value={{ openPopup, closePopup }}>
      {children}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl p-0 w-full max-w-2xl relative animate-slideUp">
            {/* Accent Bar */}
            <div className="h-2 w-full bg-[#021F29] rounded-t-2xl mb-0" />
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold z-10"
              onClick={closePopup}
              aria-label="Close"
            >
              &times;
            </button>
            <form 
              action="https://forms.zohopublic.in/remitso263/form/ComplianceTalktoexpert/formperma/Wqm0tqeHeyRn9lFDm676G5RUesCsVF-TO-MeRBGPgsg/htmlRecords/submit" 
              name="form" 
              id="form" 
              method="POST" 
              acceptCharset="UTF-8" 
              encType="multipart/form-data" 
              className="flex flex-col gap-4 px-8 py-8"
            >
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />
              <h2 className="text-2xl font-bold text-[#00374A] mb-2 text-center tracking-tight">Talk to expert</h2>
              {/* Name */}
              <label className="text-sm font-medium text-[#00374A] mb-1">Name <em className="text-red-500">*</em></label>
              <div className="flex flex-col md:flex-row gap-3">
                <input 
                  type="text" 
                  maxLength={255} 
                  name="Name_First" 
                  placeholder="First Name" 
                  className="border rounded text-[#000] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1ecbe1] flex-1" 
                  required 
                />
                <input 
                  type="text" 
                  maxLength={255} 
                  name="Name_Last" 
                  placeholder="Last Name" 
                  className="border rounded text-[#000] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1ecbe1] flex-1" 
                  required 
                />
              </div>
              <label className="text-sm font-medium text-[#00374A]">Email <em className="text-red-500">*</em></label>
              {/* Email */}
              <input 
                type="text" 
                maxLength={255} 
                name="Email" 
                placeholder="Share your work email" 
                className="border rounded text-[#000] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1ecbe1]" 
                required 
              />
              {/* Dropdown */}
              <label className="text-sm font-medium text-[#00374A]">Service of Interest <em className="text-red-500">*</em></label>
              <select 
                name="Dropdown" 
                className="border rounded text-[#000] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1ecbe1]" 
                required
              >
                <option value="-Select-">-Select-</option>
                <option value="Consulting">Consulting</option>
                <option value="Licensing">Licensing</option>
              </select>
              <button 
                type="submit" 
                className="bg-[#021F29] text-white rounded px-6 py-2 font-semibold shadow hover:from-[#1ecbe1] hover:to-[#00374A] transition mt-2 tracking-wide"
              >
                Submit
              </button>
            </form>
          </div>
          <style jsx>{`
            @keyframes slideUp { 
              from { transform: translateY(40px); opacity: 0; } 
              to { transform: translateY(0); opacity: 1; } 
            }
            .animate-slideUp { 
              animation: slideUp 0.4s cubic-bezier(.4,2,.6,1) both; 
            }
            @keyframes fadeIn { 
              from { opacity: 0; } 
              to { opacity: 1; } 
            }
            .animate-fadeIn { 
              animation: fadeIn 0.3s both; 
            }
          `}</style>
        </div>
      )}
    </PopupTalkToExpertContext.Provider>
  );
};

export default PopupTalkToExpertProvider; 