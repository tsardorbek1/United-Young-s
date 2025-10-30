import React, { useEffect } from 'react';

interface JoinFormModalProps {
  onClose: () => void;
}

const JoinFormModal: React.FC<JoinFormModalProps> = ({ onClose }) => {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-800">Private Join Form</h3>
          <button onClick={onClose} aria-label="Close" className="text-slate-500 hover:text-slate-700">✕</button>
        </div>
        <p className="text-sm text-slate-600 mb-4">This form is visible only in owner mode.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input type="text" required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2AC1FF]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input type="email" required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2AC1FF]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Interest</label>
            <select className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2AC1FF]">
              <option>Learn</option>
              <option>Volunteer</option>
              <option>Partner</option>
            </select>
          </div>
          <div className="pt-2 flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded-lg bg-[#2AC1FF] text-white font-semibold hover:bg-opacity-90">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinFormModal;


