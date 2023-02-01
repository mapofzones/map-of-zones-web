import { ReactComponent as WatermarkSVG } from 'assets/watermark.svg';

export function Watermark() {
  return (
    <WatermarkSVG
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '78px',
        width: '220px',
      }}
    />
  );
}
