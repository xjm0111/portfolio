import { motion } from 'framer-motion';
import { Mail, MapPin, Github, MessageCircle, ExternalLink } from 'lucide-react';

const contacts = [
  { icon: Mail, label: '邮箱', value: 'chen.xinjie@example.com', href: 'mailto:chen.xinjie@example.com' },
  { icon: Github, label: 'GitHub', value: 'github.com/xinjie-chen', href: 'https://github.com' },
  { icon: MapPin, label: '城市', value: '重庆市', href: null },
  { icon: MessageCircle, label: '微信', value: '心洁', href: null },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">联系方式</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            正在积极寻找自动化测试工程师 / 测试开发工程师岗位机会，欢迎联系交流
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-slate-800/50 border border-sky-400/20 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contacts.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-slate-700/30 border border-slate-700/40 hover:border-sky-400/40 hover:bg-sky-400/5 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center group-hover:bg-sky-400/10 transition-colors">
                        <item.icon size={18} className="text-sky-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                        <p className="text-sm text-slate-200 font-medium truncate flex items-center gap-1">
                          {item.value}
                          {item.href.startsWith('http') && (
                            <ExternalLink size={12} className="text-slate-500 shrink-0" />
                          )}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/30 border border-slate-700/40">
                      <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center">
                        <item.icon size={18} className="text-sky-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                        <p className="text-sm text-slate-200 font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
