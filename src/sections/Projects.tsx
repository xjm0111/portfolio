import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3, Code2, TestTube, ChevronRight,
  BookOpen, FlaskConical, Layers,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  highlights: string[];
  details: string;
  techStack: string[];
  icon: React.ElementType;
  color: string;
  stats: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    id: 'project1',
    title: '基于 AI 的岗位能力标准分析',
    subtitle: '项目一：数据驱动的求职能力画像',
    tags: ['Python', '数据挖掘', 'AI分析', 'Pandas'],
    description:
      '在求职准备阶段，发现网络上招聘信息繁杂，难以精准定位企业对"自动化测试"岗位的核心要求。本项目采集 100+ 条真实招聘数据，进行结构化清洗与多维度分析，利用 WorkBuddy 配置 AI 读取流程，提取共性技能需求与能力图谱，生成可直接指导学习路径的岗位关键词表。',
    highlights: [
      '制定数据采集策略，爬取 100 条有效招聘信息并进行数据清洗',
      '构建岗位信息文档库，上传至 ima 知识库进行智能归类',
      '利用 WorkBuddy 设计 Prompt 提取共性技能需求，生成岗位关键词分级表',
      '产出《目标岗位分析报告》与《岗位关键词表》，指导后续技能提升',
    ],
    details:
      '本项目覆盖互联网科技头部企业（阿里、腾讯、字节、华为、美团、百度、蚂蚁集团）、IT咨询与技术服务、智能制造、汽车电子、金融通信等六大领域。分析维度涵盖专业背景、编程语言、技能要求、工具链、证书资质、项目经验、综合能力等七个方面。最终生成三阶段行动路线图（基础夯实→进阶提升→求职冲刺），实现从"盲目学习"到"精准对标"的求职策略转变。',
    techStack: ['Python', 'Pandas', 'WorkBuddy', 'ima 知识库', '数据清洗', 'AI Prompt Engineering'],
    icon: BarChart3,
    color: 'from-sky-400 to-cyan-300',
    stats: [
      { label: '招聘数据', value: '100+' },
      { label: '分析维度', value: '7' },
      { label: '关键词', value: '45+' },
      { label: '匹配度', value: '55%' },
    ],
  },
  {
    id: 'project2',
    title: '编译原理课程设计',
    subtitle: '项目二：Tiny 语言编译器与正则引擎',
    tags: ['C/C++', '编译原理', '正则引擎', '可视化'],
    description:
      '重庆理工大学《编译原理》课程综合设计。包含两个核心任务：一是实现完整的 Sample 语言编译程序（词法分析→语法分析→语义分析→中间代码→虚拟机解释执行）；二是实现日志文件关键词扫描器，完整展示从正则表达式到最小化 DFA 的编译链，并支持 Canvas 可视化渲染。',
    highlights: [
      '词法分析器支持恐慌模式错误恢复，一次性输出多行错误信息',
      '语法分析器采用递归下降子程序法，语义分析器实现符号表管理',
      '中间代码生成四元式，后端虚拟机基于 Tkinter 实现弹窗 I/O',
      '正则引擎实现：扩展正则规范化 → Thompson 算法 → NFA → DFA → Hopcroft 最小化',
      'Canvas 画布可视化渲染 NFA 和 Min DFA 状态图，支持用户自定义正则输入',
    ],
    details:
      '任务一编译器前端实现了完整的词法分析、语法分析、语义检查与四元式中间代码生成。后端虚拟机支持 read/write 弹窗输入输出，基于 Python Tkinter 实现。任务二日志扫描器从正则表达式出发，经过规范化、Thompson 构造 NFA、子集构造法转 DFA、Hopcroft 算法最小化，最终在 Canvas 上动态渲染状态转换图。拓展分析对比了课堂教学编译流程与华为毕昇编译器（LLVM 架构）的对应关系。',
    techStack: ['C/C++', 'Python', 'Tkinter', '正则表达式', '自动机理论', 'Canvas 绘图'],
    icon: Code2,
    color: 'from-purple-400 to-pink-300',
    stats: [
      { label: '编译阶段', value: '5' },
      { label: '测试用例', value: '4+' },
      { label: '正则引擎', value: '完整链' },
      { label: '可视化', value: 'Canvas' },
    ],
  },
  {
    id: 'project3',
    title: '全链路自动化测试工程实践',
    subtitle: '项目三：从 UI 到性能的持续测试体系',
    tags: ['Selenium', 'Pytest', 'Requests', 'Allure', 'Jenkins', 'Docker'],
    description:
      '以真实招聘需求为导向，从零搭建覆盖 UI 自动化、接口自动化、性能测试、CI/CD 持续集成的全链路测试工程体系。包含四个递进子项目：百度搜索 UI 自动化（热身）、电商接口自动化（进阶）、全链路测试平台（简历级）、性能测试平台（压测级）。',
    highlights: [
      'P1 - 百度搜索自动化：Selenium + Pytest + Page Object 模式，5 个用例全部通过',
      'P2 - 电商接口自动化：Requests + Pytest 参数化 + 数据驱动 + 会话管理，60+ 接口用例',
      'P3 - 全链路测试平台：UI + API 双栈测试，Allure 可视化报告，Jenkins + Docker CI/CD 就绪',
      'P4 - 性能测试平台：Locust + Flask 压测，支持用户并发模拟与负载报告生成',
    ],
    details:
      'P1 百度搜索自动化使用 Selenium WebDriver 配合 Pytest 框架，采用 Page Object 模式封装页面元素，支持失败自动截图。P2 电商接口自动化基于 Requests 库封装 HTTP 请求基类，实现 session/token 管理、接口关联（下单流程）、数据驱动（YAML/JSON）和自定义断言。P3 全链路平台整合 UI 与 API 测试，使用 Allure 生成可视化报告，配置 Jenkins Pipeline 和 Docker Compose 实现一键测试环境部署。P4 性能测试平台使用 Locust 对 Flask 模拟电商后端进行压测，生成响应时间分布、RPS、错误率等核心指标报告。',
    techStack: ['Selenium', 'Pytest', 'Requests', 'Allure', 'Jenkins', 'Docker', 'Locust', 'Flask', 'YAML/JSON'],
    icon: TestTube,
    color: 'from-emerald-400 to-teal-300',
    stats: [
      { label: '子项目', value: '4' },
      { label: '用例数', value: '65+' },
      { label: '通过率', value: '85%+' },
      { label: '技术栈', value: '9+' },
    ],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const isEven = index % 2 === 0;
  const Icon = project.icon;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
          !isEven ? 'lg:direction-rtl' : ''
        }`}
      >
        {/* Visual Side */}
        <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 md:p-10 group hover:border-sky-400/30 transition-all duration-300">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg shadow-sky-400/10 group-hover:scale-105 transition-transform duration-300`}>
              <Icon size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">{project.title}</h3>
            <p className="text-sm text-slate-400 mb-4">{project.subtitle}</p>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-slate-700/50 text-xs text-slate-300 border border-slate-600/50"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 font-medium transition-colors group/btn"
            >
              查看详情
              <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats Side */}
        <div className={`grid grid-cols-2 gap-4 ${!isEven ? 'lg:order-1' : ''}`}>
          {project.stats.map((stat, sIdx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-5 text-center card-hover"
            >
              <div className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Detail Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl bg-slate-900 border-slate-700 text-slate-100 max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}>
              <Icon size={24} className="text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold text-slate-100">{project.title}</DialogTitle>
            <p className="text-sm text-slate-400">{project.subtitle}</p>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                <BookOpen size={16} className="text-sky-400" />
                项目描述
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">{project.details}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                <FlaskConical size={16} className="text-sky-400" />
                核心成果
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <ChevronRight size={14} className="text-sky-400 mt-1 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                <Layers size={16} className="text-sky-400" />
                技术栈
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">项目展示</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            从数据洞察到编译器实现，再到全链路测试工程，每一个项目都对应真实岗位需求
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
