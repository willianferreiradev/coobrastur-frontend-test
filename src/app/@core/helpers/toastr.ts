import toastr from 'toastr';

/**
 *   Título da mensagem Uma classe a ser adicionada
 *
 * @param message - Message to be displayed
 * @param title - Message title
 * @param cssClass - Position where the toastr will be displayed
 */
export function showToastError(
  message: string,
  title: string,
  position = 'toast-bottom-right'
): void {
  toastr.error(message, title, {
    positionClass: position,
    progressBar: true
  });
}

/**
 *   Título da mensagem Uma classe a ser adicionada
 *
 * @param message - Message to be displayed
 * @param title - Message title
 * @param cssClass - Position where the toastr will be displayed
 */
export function showToastSuccess(
  message: string,
  title: string,
  position = 'toast-bottom-right'
): void {
  toastr.success(message, title, {
    positionClass: position,
    progressBar: true
  });
}
