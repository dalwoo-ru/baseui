import { h, cx, createContext, useContext, useState, useRef, useCallback, useEffect, useMemo } from '../react.js';
import { Icon } from '../icons.js';
import { describe } from '../doc.js';
import { Button } from './Button.js';

const ToastContext = createContext(null);

/** Hook: const { toast, dismiss, update } = useToast(); toast({ message, status, icon, action, duration }) */
export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast: wrap your app in <ToastProvider>');
  return ctx;
}

function ToastItem({ item, onDismiss }) {
  const timer = useRef();
  const left = useRef(item.duration);
  const startedAt = useRef(0);
  const run = useCallback(() => {
    if (!left.current) return;
    startedAt.current = Date.now();
    timer.current = setTimeout(() => onDismiss(item.id), left.current);
  }, [item.id, onDismiss]);
  const pause = () => { clearTimeout(timer.current); left.current -= Date.now() - startedAt.current; };
  useEffect(() => { run(); return () => clearTimeout(timer.current); }, [run]);

  const { status, icon, action } = item;
  return h('div', {
    role: status === 'error' ? 'alert' : 'status', className: 'bui-toast',
    onMouseEnter: pause, onMouseLeave: run, onFocus: pause, onBlur: run,
  },
    (icon || status !== 'neutral') && h('span', { className: 'bui-toast__icon' }, icon || h(Icon, { name: status, size: 24 })),
    h('div', { className: 'bui-toast__text' }, item.message),
    action && h(Button, { variant: 'ghost', size: 'xsm', className: 'bui-toast__action', onClick: () => { action.onClick?.(); onDismiss(item.id); } }, action.label),
    h('button', { type: 'button', className: 'bui-toast__close', 'aria-label': 'Dismiss notification', onClick: () => onDismiss(item.id) },
      h(Icon, { name: 'close', size: 24 })));
}

export function ToastProvider({ children, placement = 'bottom-right', limit = 4 }) {
  const [items, setItems] = useState([]);
  const counter = useRef(0);
  const dismiss = useCallback((id) => setItems((list) => list.filter((t) => t.id !== id)), []);
  const toast = useCallback((options) => {
    const id = ++counter.current;
    setItems((list) => [...list, { status: 'neutral', duration: 5000, ...options, id }].slice(-limit));
    return id;
  }, [limit]);
  const update = useCallback((id, options) => setItems((list) => list.map((t) => (t.id === id ? { ...t, ...options } : t))), []);
  const api = useMemo(() => ({ toast, dismiss, update }), [toast, dismiss, update]);
  return h(ToastContext.Provider, { value: api }, children,
    h('div', { className: cx('bui-toast-region', `bui-toast-region--${placement}`), role: 'region', 'aria-label': 'Notifications' },
      items.map((item) => h(ToastItem, { key: item.id, item, onDismiss: dismiss }))));
}

describe(ToastProvider, 'Shows brief notifications: a message, an optional action and a close button. Call `useToast()` to add one.', {
  placement: ["'bottom-right' | 'bottom-center' | 'top-right' | 'top-center'", "'bottom-right'", 'Where the stack appears'],
  limit: ['number', '4', 'Maximum simultaneous toasts'],
  message: ['ReactNode', null, 'toast() option: the text'],
  status: ["'neutral' | 'success' | 'error' | 'info'", "'neutral'", 'toast() option: the icon; neutral has none'],
  icon: ['ReactNode', null, 'toast() option: a custom icon instead of the status one'],
  action: ['{ label: string; onClick?: () => void }', null, 'toast() option: an optional button; it closes the toast'],
  duration: ['number', '5000', 'toast() option: milliseconds before it closes; 0 keeps it open'],
});
