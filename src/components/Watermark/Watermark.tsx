import logo from 'assets/logo-grey.png';

export function Watermark() {
  return (
    <img
      src={logo}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 0)',
      }}
    />
  );
}
