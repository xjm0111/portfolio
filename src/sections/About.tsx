import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Mail, User } from 'lucide-react';

const infoItems = [
  { icon: GraduationCap, label: '学校', value: '重庆理工大学' },
  { icon: User, label: '专业', value: '计算机科学与技术' },
  { icon: Calendar, label: '年级', value: '2023 - 2027 届' },
  { icon: MapPin, label: '城市', value: '重庆市' },
  { icon: Mail, label: '邮箱', value: '心洁的邮箱' },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">关于我</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400/20 to-purple-500/20 flex items-center justify-center border border-sky-400/20">
                <User size={32} className="text-sky-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">陈心洁</h3>
                <p className="text-sm text-slate-400">自动化测试工程师方向</p>
              </div>
            </div>

            <div className="space-y-4">
              {infoItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 py-3 border-b border-slate-700/40 last:border-0">
                  <item.icon size={18} className="text-sky-400 shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm text-slate-200 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="prose prose-invert prose-slate max-w-none">
              <p className="text-slate-300 leading-relaxed text-base">
                我是陈心洁，重庆理工大学计算机科学与技术专业 2023 级本科生。正处于求职准备阶段，目标岗位为
                <span className="text-sky-400 font-medium"> 自动化测试工程师 / 测试开发工程师</span>。
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                我的学习方法是"需求驱动"——先从真实招聘数据中发现岗位核心能力要求，再有针对性地补齐技能短板。
                在实践过程中，我完成了从数据爬取、清洗、AI分析到测试工程全链路的多个项目，
                涵盖了 UI 自动化、接口自动化、性能测试、CI/CD 持续集成等关键领域。
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                我擅长用 Python 编写自动化测试脚本，熟悉 Selenium、Pytest、Requests 等主流工具，
                具备 Linux 服务器操作和 MySQL 数据库基础，同时正在深入 Jenkins 和 Docker 等 DevOps 工具。
                我相信测试不仅是发现 bug，更是保障产品质量与用户信任的核心环节。
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Python', 'Selenium', 'Pytest', 'MySQL', 'Linux'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
