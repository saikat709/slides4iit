import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { getPresentationBySlug, ownerInfo } from '../presentations/registry.js';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export default function PresentationPage({ defaultSlug }) {
  const { slug } = useParams();
  const location = useLocation();
  const rawPath = location.pathname.replace(/^\/+/, '').split('/')[0];
  const activeSlug = defaultSlug || slug || rawPath;
  const navigate = useNavigate();
  const presentation = getPresentationBySlug(activeSlug);

  useEffect(() => {
    if (presentation) {
      document.title = `${presentation.title} — ${presentation.subtitle} | ${ownerInfo.name}`;
    } else {
      document.title = `Presentation Not Found | ${ownerInfo.name}`;
    }
  }, [presentation]);

  if (!presentation) {
    return (
      <div className="min-h-screen bg-[#240004] text-white flex flex-col items-center justify-center p-6 text-center select-none">
        <div className="w-16 h-16 rounded-2xl bg-flame-maroon border border-flame-pink/30 flex items-center justify-center mb-4 text-flame-pink shadow-xl">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Presentation Not Found</h1>
        <p className="text-sm text-flame-pink/70 max-w-md mb-6 font-mono">
          No presentation matching <span className="text-white bg-black/40 px-2 py-0.5 rounded">/{activeSlug || 'unknown'}</span> was found in the registry.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-flame-pink hover:bg-white text-flame-maroon font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-black/50"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Presentations</span>
        </Link>
      </div>
    );
  }

  const PresentationComponent = presentation.component;
  return <PresentationComponent presentationMeta={presentation} onExitToHub={() => navigate('/')} />;
}
