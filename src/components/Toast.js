import { h, cx, createContext, useContext, useState, useRef, useCallback, useEffect, useMemo } from '../react.js';
import { Icon } from '../icons.js';
import { describe } from '../doc.js';

const ToastContext = createContext(null);

/** Hook: const { toast, dismiss } = useToast(); toast({ title, description, status, duration }) */
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

  return h('div', {
    role: item.status === 'error' ? 'alert' : 'status', className: cx('bui-toast', `bui-toast--${item.status}`),
    onMouseEnter: pause, onMouseLeave: run, onFocus: pause, onBlur: run,
  },
    h(Icon, { name: item.status, size: 24, className: 'bui-toast__icon' }),
    h('div', { className: 'bui-toast__body' },
      item.title && h('div', { className: 'bui-toast__title' }, item.title),
      item.description && h('div', { className: 'bui-toast__text' }, item.description)),
    h('button', { type: 'button', className: 'bui-toast__close', 'aria-label': 'Dismiss notification', onClick: () => onDismiss(item.id) },
      h(Icon, { name: 'close', size: 20 })));
}

export function ToastProvider({ children, placement = 'bottom-right', limit = 4 }) {
  const [items, setItems] = useState([]);
  const counter = useRef(0);
  const dismiss = useCallback((id) => setItems((list) => list.filter((t) => t.id !== id)), []);
  const toast = useCallback((options) => {
    const id = ++counter.current;
    setItems((list) => [...list, { status: 'info', duration: 5000, ...options, id }].slice(-limit));
    return id;
  }, [limit]);
  const api = useMemo(() => ({ toast, dismiss }), [toast, dismiss]);
  return h(ToastContext.Provider, { value: api }, children,
    h('div', { className: cx('bui-toast-region', `bui-toast-region--${placement}`), role: 'region', 'aria-label': 'Notifications' },
      items.map((item) => h(ToastItem, { key: item.id, item, onDismiss: dismiss }))));
}

describe(ToastProvider, 'Shows brief notifications. Call `useToast()` to add one.', {
  placement: ["'bottom-right' | 'bottom-center' | 'top-right' | 'top-center'", "'bottom-right'", 'Where the stack appears'],
  limit: ['number', '4', 'Maximum simultaneous toasts'],
});
