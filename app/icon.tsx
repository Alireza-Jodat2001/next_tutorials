import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

const Icon = () => new ImageResponse(<div>✅</div>, { ...size });

export default Icon;
