import { h } from '../react.js';
import { Modal, Button } from '../base.js';
import { describe } from '../doc.js';

export function AlertDialog({ open, onOpenChange, title, description, confirmLabel = 'Confirm', cancelLabel = 'Cancel', onConfirm, destructive = false }) {
  const close = () => onOpenChange(false);
  return h(Modal, {
    open, onOpenChange, title, header: 'title-only',
    primaryAction: h(Button, { onClick: () => { onConfirm && onConfirm(); close(); }, customBackground: destructive ? 'var(--baseui-color-background-error-inverted)' : undefined, variant: destructive ? 'custom' : 'primary', customColor: destructive ? '#ffffff' : undefined }, confirmLabel),
    secondaryAction: h(Button, { variant: 'secondary', onClick: close }, cancelLabel),
  }, description);
}
describe(AlertDialog, 'A dialog that interrupts the user for a decision. Always has a confirm and a cancel action.', {
  open: ['boolean', null, 'Open state.'],
  onOpenChange: ['(open: boolean) => void', null, 'Called when it should open or close.'],
  title: ['ReactNode', null, 'Question or statement.'],
  description: ['ReactNode', null, 'Explains the consequence.'],
  confirmLabel: ['string', "'Confirm'", 'Confirm button text.'],
  cancelLabel: ['string', "'Cancel'", 'Cancel button text.'],
  onConfirm: ['() => void', null, 'Called when confirmed.'],
  destructive: ['boolean', 'false', 'Style the confirm button as destructive.'],
});
