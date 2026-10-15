// Единая точка доступа к React и общим хелперам для компонентов baseui.
import { t as requireReact } from '../lib/react-BZJXY1be.js';

export const React = requireReact();
export const h = React.createElement;
export const {
  Fragment, createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState,
} = React;

/** Склейка классов: cx('a', cond && 'b') */
export const cx = (...parts) => parts.filter(Boolean).join(' ');

/**
 * Контролируемое/неконтролируемое состояние: value + defaultValue + onChange.
 * Соглашение всех компонентов baseui: `value`, `defaultValue`, `onValueChange`.
 */
export function useControllable(value, defaultValue, onChange) {
  const [inner, setInner] = useState(defaultValue);
  const controlled = value !== undefined;
  const current = controlled ? value : inner;
  const set = useCallback((next) => {
    if (!controlled) setInner(next);
    if (onChange) onChange(next);
  }, [controlled, onChange]);
  return [current, set];
}
