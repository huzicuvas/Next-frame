import React, { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';
import {
  Sparkles,
  Send,
  Bot,
  User,
  Trash2,
  Copy,
  Check,
  Zap,
  Film,
  BrainCircuit,
  MessageSquare,
  ArrowRight,
  RefreshCw,
  AlertCircle,
  X,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { ChatMessage, ChatMode } from '../types';

interface GeminiChatbotProps {
  isFloatingModal?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

const MODES: {
  id: ChatMode;
  name: string;
  badge: string;
  description: string;
  model: string;
  icon: React.ReactNode;
}[] = [
  {
    id: 'faq',
    name: 'What We Make & Deliverables',
    badge: 'Core Services',
    description: 'Ad formats, AI creators, 3D CGI simulations, hook cut-downs & specs',
    model: 'gemini-3.7-flash',
    icon: <Sparkles className="w-4 h-4 text-blue-400" />,
  },
  {
    id: 'pricing',
    name: 'Pricing & Batch Quotes',
    badge: 'Cost & Terms',
    description: 'Package costs, custom quotes, volume discounts & commercial rights',
    model: 'gemini-3.1-pro-preview',
    icon: <BrainCircuit className="w-4 h-4 text-indigo-400" />,
  },
  {
    id: 'process',
    name: 'How We Make It (48h Pipeline)',
    badge: 'Production Tech',
    description: 'Generative AI pipeline, no camera crew, no sample shipping required',
    model: 'gemini-3.1-flash-lite',
    icon: <Zap className="w-4 h-4 text-amber-400" />,
  },
];

const STARTER_PROMPTS = [
  {
    label: '📦 What exact ad formats do you make?',
    prompt: 'What kinds of video ads does Hook Frames Studio make, and what files/formats are included in the final delivery?',
    mode: 'faq' as ChatMode,
  },
  {
    label: '💰 What are your 4 pricing tiers & packages?',
    prompt: 'Can you explain Hook Frames Studio\'s 4 pricing tiers ($75 Single Video, $200 Hook Pack, $150 60s, and Custom Package) and what is included in each?',
    mode: 'pricing' as ChatMode,
  },
  {
    label: '⚡ How does your 48-hour pipeline work?',
    prompt: 'How do you make the ads so quickly without a physical film crew or actors? Explain the step-by-step process.',
    mode: 'process' as ChatMode,
  },
  {
    label: '🚢 Do I need to ship physical product samples?',
    prompt: 'Do I need to mail physical product samples to you for 3D CGI or AI creator ads, or can you work with digital photos and links?',
    mode: 'process' as ChatMode,
  },
];

const INITIAL_MESSAGE: ChatMessage = {
  id: 'init-1',
  role: 'assistant',
  content: `👋 **Welcome to Hook Frames Studio Q&A & Pricing Desk!**\n\nAsk us anything about our ad production services:\n- **What we make:** Synthetic UGC creator ads, 3D CGI simulations & 3–5+ hook variation packs\n- **How we make it:** 100% crewless AI & CGI pipeline with 48-hour turnaround\n- **How much it costs:** Transparent pricing tiers ($75 Single, $200 Hook Pack, $150 60s, Custom quotes) & 100% commercial usage rights\n\n*Select a topic or click one of the questions below to get started.*`,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  modelUsed: 'gemini-3.7-flash',
  modeUsed: 'faq',
};

export const GeminiChatbot: React.FC<GeminiChatbotProps> = ({
  isFloatingModal = false,
  isOpen = true,
  onClose,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [currentMode, setCurrentMode] = useState<ChatMode>('faq');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string, overrideMode?: ChatMode) => {
    const messageContent = (textToSend || input).trim();
    if (!messageContent || isLoading) return;

    const activeMode = overrideMode || currentMode;
    if (overrideMode) {
      setCurrentMode(overrideMode);
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modeUsed: activeMode,
    };

    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);
    setInput('');
    setErrorMessage(null);
    setIsLoading(true);

    try {
      // Build conversation payload for multi-turn server route
      const payloadMessages = updatedHistory.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const activeConfig = MODES.find((m) => m.id === activeMode) || MODES[0];

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: payloadMessages,
          mode: activeMode,
          modelOverride: activeConfig.model,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to receive response from Gemini server.');
      }

      const assistantMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: data.reply || 'No response content returned.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: data.modelUsed || activeConfig.model,
        modeUsed: activeMode,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error('Chat submit error:', err);
      setErrorMessage(err.message || 'An error occurred while contacting Gemini API.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyMessage = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const clearChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setErrorMessage(null);
  };

  const currentModeInfo = MODES.find((m) => m.id === currentMode) || MODES[0];

  if (isFloatingModal && !isOpen) {
    return null;
  }

  const containerClasses = isFloatingModal
    ? `fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-all`
    : `w-full max-w-7xl mx-auto`;

  const cardClasses = isFloatingModal
    ? `relative w-full ${isExpanded ? 'max-w-6xl h-[92vh]' : 'max-w-4xl h-[85vh]'} bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300`
    : `w-full bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl flex flex-col h-[750px] overflow-hidden`;

  return (
    <div className={containerClasses} id="gemini-chatbot-container">
      <div className={cardClasses}>
        {/* Top Chatbot Header */}
        <div className="px-5 sm:px-7 py-4 bg-neutral-950 border-b border-neutral-800/90 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400 shadow-inner">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                  Nextframe Studio Q&A & Pricing Desk
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </h3>
                <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 hidden sm:inline-block">
                  {currentModeInfo.model}
                </span>
              </div>
              <p className="text-xs text-neutral-400 hidden sm:block">
                Ask about ad deliverables, batch costs, 48-hour pipeline, and commercial terms
              </p>
            </div>
          </div>

          {/* Header Controls */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              id="clear-chat-history-btn"
              onClick={clearChat}
              title="Reset conversation"
              className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors text-xs flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline font-mono">Clear</span>
            </button>

            {isFloatingModal && (
              <>
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  title={isExpanded ? 'Restore size' : 'Expand window'}
                  className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  id="close-floating-chat-btn"
                  onClick={onClose}
                  title="Close chat"
                  className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Persona / Mode Selector Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-neutral-900/90 border-b border-neutral-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          <span className="text-[11px] font-mono text-neutral-500 shrink-0 uppercase tracking-wider pl-1 hidden sm:inline">
            Role Mode:
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {MODES.map((mode) => {
              const isActive = currentMode === mode.id;
              return (
                <button
                  key={mode.id}
                  id={`chat-mode-btn-${mode.id}`}
                  type="button"
                  onClick={() => setCurrentMode(mode.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 border ${
                    isActive
                      ? 'bg-blue-500/15 border-blue-500/40 text-blue-300 shadow-sm'
                      : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                  }`}
                >
                  {mode.icon}
                  <span className="font-semibold">{mode.name}</span>
                  <span className="text-[10px] font-mono opacity-70 hidden md:inline">
                    ({mode.badge})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Conversation Thread */}
        <div
          id="chat-messages-thread"
          className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#0A0A0B]"
        >
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                id={`chat-message-${msg.id}`}
                className={`flex gap-3 max-w-3xl ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                    isUser
                      ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                      : 'bg-neutral-900 border-neutral-800 text-blue-400'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble Container */}
                <div
                  className={`relative group rounded-3xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed border shadow-md ${
                    isUser
                      ? 'bg-blue-600 text-white border-blue-500 rounded-tr-none'
                      : 'bg-neutral-900 text-neutral-200 border-neutral-800 rounded-tl-none'
                  }`}
                >
                  {/* Message Metadata Header for AI */}
                  {!isUser && (
                    <div className="flex items-center justify-between gap-4 mb-2 pb-1.5 border-b border-neutral-800 text-[10px] font-mono text-neutral-400">
                      <div className="flex items-center gap-1.5">
                        <span className="text-blue-400 font-semibold uppercase">
                          {msg.modeUsed ? MODES.find((m) => m.id === msg.modeUsed)?.name : 'AI Strategist'}
                        </span>
                        {msg.modelUsed && (
                          <>
                            <span>•</span>
                            <span className="text-neutral-500">{msg.modelUsed}</span>
                          </>
                        )}
                      </div>
                      <span>{msg.timestamp}</span>
                    </div>
                  )}

                  {/* Message Content with Markdown */}
                  <div className={`markdown-content space-y-2.5 ${isUser ? 'text-white' : 'text-neutral-200'}`}>
                    <div className="markdown-body">
                      <Markdown>{msg.content}</Markdown>
                    </div>
                  </div>

                  {/* Actions for Assistant */}
                  {!isUser && (
                    <div className="mt-3 pt-2 flex items-center justify-between border-t border-neutral-800/80 text-[11px] font-mono text-neutral-400">
                      <button
                        type="button"
                        id={`copy-msg-btn-${msg.id}`}
                        onClick={() => copyMessage(msg.content, msg.id)}
                        className="flex items-center gap-1 hover:text-white transition-colors"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-green-400" />
                            <span className="text-green-400">Copied to clipboard</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-neutral-400" />
                            <span>Copy Script / Text</span>
                          </>
                        )}
                      </button>
                      <a
                        href={`mailto:hello@nextframe.studio?subject=Request%20Production%20of%20AI%20Generated%20Concept&body=${encodeURIComponent(
                          'Hi Nextframe team,\n\nI created this ad concept using your AI Strategist:\n\n' +
                            msg.content +
                            '\n\nPlease provide a production estimate and timeline.'
                        )}`}
                        className="text-neutral-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                      >
                        <span>Produce this Ad</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                  {/* User Timestamp */}
                  {isUser && (
                    <div className="text-right text-[10px] opacity-75 font-mono mt-1">
                      {msg.timestamp}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex gap-3 max-w-2xl mr-auto">
              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 text-blue-400 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-3xl rounded-tl-none p-4 text-xs font-mono text-neutral-300 flex items-center gap-3">
                <RefreshCw className="w-4 h-4 text-blue-400 animate-spin" />
                <span>Thinking with {currentModeInfo.name} ({currentModeInfo.model})...</span>
              </div>
            </div>
          )}

          {/* Error Message banner */}
          {errorMessage && (
            <div className="p-4 rounded-2xl bg-red-950/40 border border-red-800/60 text-red-200 text-xs flex items-start gap-2.5 max-w-2xl mx-auto">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold">Unable to complete request</p>
                <p className="text-neutral-300 text-[11px]">{errorMessage}</p>
                <button
                  type="button"
                  onClick={() => handleSendMessage()}
                  className="mt-2 px-3 py-1 rounded-full bg-red-900 hover:bg-red-800 text-white font-mono text-[10px] transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Starter Chips */}
        <div className="px-4 sm:px-6 py-2.5 bg-neutral-950 border-t border-neutral-800/80 shrink-0 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider shrink-0">
              Suggested:
            </span>
            {STARTER_PROMPTS.map((item, idx) => (
              <button
                key={idx}
                id={`starter-prompt-btn-${idx}`}
                type="button"
                onClick={() => handleSendMessage(item.prompt, item.mode)}
                disabled={isLoading}
                className="px-3 py-1 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-medium transition-all shrink-0 hover:border-neutral-700 disabled:opacity-50"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-5 bg-neutral-950 border-t border-neutral-800 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-end gap-2 sm:gap-3"
          >
            <div className="relative flex-1 bg-neutral-900 border border-neutral-800 focus-within:border-blue-500/70 rounded-2xl p-2 sm:p-3 transition-colors shadow-inner">
              <textarea
                ref={inputRef}
                id="chatbot-input-textarea"
                rows={2}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`Ask ${currentModeInfo.name} (e.g. "What do you make?", "How much does a batch cost?", "How does the 48h turnaround work?")...`}
                disabled={isLoading}
                className="w-full bg-transparent text-white placeholder-neutral-500 text-xs sm:text-sm resize-none focus:outline-none max-h-32"
              />
              <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-neutral-500">
                <span>Shift + Enter for new line</span>
                <span>Active: {currentModeInfo.model}</span>
              </div>
            </div>

            <button
              type="submit"
              id="send-chat-message-btn"
              disabled={!input.trim() || isLoading}
              className="p-3.5 sm:p-4 rounded-2xl bg-white hover:bg-blue-500 hover:text-white text-black disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-black transition-all shadow-lg active:scale-95 shrink-0 flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
