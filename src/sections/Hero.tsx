import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Frost Drift Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="frost-layer opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient glow-text mb-4">
            陈心洁
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-slate-300 mb-2 font-medium"
        >
          自动化测试工程师 · 重庆理工大学
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          计算机科学与技术专业在读本科生。专注于自动化测试、数据挖掘与编译原理实践。
          从招聘信息中洞察岗位需求，在代码与测试用例中构建质量壁垒。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={() => {
              const el = document.querySelector('#projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-sky-400/40 text-sky-300 font-medium text-sm hover:bg-sky-400/10 hover:border-sky-400/60 transition-all duration-300"
          >
            查看我的项目
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">
              <ChevronDown size={16} />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none z-10" />
    </section>
  );
}
