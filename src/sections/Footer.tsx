import { ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800/50 py-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © 2026 陈心洁 | 自动化测试工程师 · 重庆理工大学
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors"
        >
          回到顶部
          <span className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-sky-400/50 transition-colors">
            <ArrowUp size={14} />
          </span>
        </button>
      </div>
    </footer>
  );
}
