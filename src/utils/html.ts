/**
 * Remove tags HTML de uma string, deixando só o texto puro.
 * Usado para gerar previews de conteúdo formatado (ex: em EntryCard).
 */
export function stripHtml(html: string) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent ?? "";
}
