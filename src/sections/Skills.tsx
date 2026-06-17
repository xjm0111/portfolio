import { motion } from 'framer-motion';
import {
  Code2, Database, Terminal, GitBranch, Container, Gauge,
  BarChart3, FileCode, Bug, Layers, Wrench, TestTube, Cloud,
} from 'lucide-react';

const skills = [
  {
    category: '编程语言',
    items: [
      { name: 'Python', level: 85, icon: Code2, desc: '主力语言，测试脚本与数据处理' },
      { name: 'Java', level: 45, icon: FileCode, desc: '面向对象基础，测试中常用' },
      { name: 'C/C++', level: 40, icon: Code2, desc: '编译原理课程实践' },
    ],
  },
  {
    category: '测试框架 & 工具',
    items: [
      { name: 'Selenium', level: 75, icon: TestTube, desc: 'UI 自动化测试核心工具' },
      { name: 'Pytest', level: 70, icon: Bug, desc: 'Python 测试框架与参数化' },
      { name: 'Requests', level: 70, icon: Cloud, desc: 'HTTP 接口测试封装' },
      { name: 'JMeter', level: 60, icon: Gauge, desc: '性能测试与负载模拟' },
      { name: 'Postman', level: 70, icon: Wrench, desc: '接口调试与集合测试' },
    ],
  },
  {
    category: 'DevOps & 环境',
    items: [
      { name: 'Linux', level: 65, icon: Terminal, desc: '服务器操作与 Shell 脚本' },
      { name: 'Git', level: 60, icon: GitBranch, desc: '版本控制与团队协作' },
      { name: 'Jenkins', level: 40, icon: Layers, desc: 'CI/CD 流水线构建' },
      { name: 'Docker', level: 35, icon: Container, desc: '容器化部署测试环境' },
      { name: 'MySQL', level: 65, icon: Database, desc: '数据库查询与测试数据准备' },
    ],
  },
  {
    category: '数据 & 分析',
    items: [
      { name: 'Pandas', level: 55, icon: BarChart3, desc: '数据清洗与结构化分析' },
      { name: 'Charles/Fiddler', level: 70, icon: Wrench, desc: '网络抓包与接口分析' },
      { name: '禅道/JIRA', level: 60, icon: Layers, desc: '缺陷管理与测试流程' },
    ],
  },
];

function SkillCard({ name, level, icon: Icon, desc, index }: {
  name: string; level: number; icon: React.ElementType; desc: string; index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 card-hover"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg bg-slate-700/50 flex items-center justify-center group-hover:bg-sky-400/10 transition-colors">
          <Icon size={18} className="text-slate-400 group-hover:text-sky-400 transition-colors" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-slate-200">{name}</h4>
          <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
        </div>
      </div>
      <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-purple-500"
        />
      </div>
      <div className="mt-1.5 text-right text-xs text-slate-500">{level}%</div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">技能栈</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            基于 100+ 条真实招聘数据提炼的岗位核心技能，从刚需到加分项持续构建中
          </p>
        </motion.div>

        <div className="space-y-12">
          {skills.map((group) => (
            <div key={group.category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg font-semibold text-slate-200 mb-5 flex items-center gap-2"
              >
                <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-sky-400 to-purple-500" />
                {group.category}
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.items.map((skill, sIdx) => (
                  <SkillCard key={skill.name} {...skill} index={sIdx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
