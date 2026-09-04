export function LiveProjectButton({ href, name }: { href: string | null; name: string }) {
  const label = <>LIVE PROJECT <span aria-hidden="true">↗</span></>;
  return href
    ? <a className="live-project" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${name} live project in a new tab`}>{label}</a>
    : <button className="live-project" type="button" disabled aria-label={`${name} live project link is not available yet`} title="Project link will be added later">{label}</button>;
}
