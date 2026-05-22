import Image from 'next/image';

export default function Loading() {
  return (
    <div className="route-loading-shell">
      <div className="route-loading-mark">
        <Image src="/media/ceiil-litt.png" alt="Capital Express Indemnity Insurance Limited" width={216} height={70} priority />
      </div>
      <div className="route-loading-bar" />
    </div>
  );
}
