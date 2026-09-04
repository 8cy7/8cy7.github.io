import type { CSSProperties } from 'react';
// Visible bounds ignore transparent padding. Source PNG bytes remain untouched.
export type AssetSpec = { file: string; source: [number, number]; bounds: [number, number, number, number] };
export function Asset({asset, className = '', priority = false}: {asset: AssetSpec; className?: string; priority?: boolean}) {
  const [x, y, right, bottom] = asset.bounds;
  const w = right - x, h = bottom - y;
  const style = {'--asset-ratio': `${w} / ${h}`, '--image-width': `${asset.source[0] / w * 100}%`, '--image-left': `${-x / w * 100}%`, '--image-top': `${-y / h * 100}%`} as CSSProperties;
  return <span className={`asset ${className}`} style={style} aria-hidden="true"><img src={`/assets/hero/${asset.file}`} alt="" width={asset.source[0]} height={asset.source[1]} draggable={false} fetchPriority={priority ? 'high' : 'auto'} decoding="async" /></span>;
}
