type Props = {
  url: string;
  borderRadius: number;
  alt: string;
  width: number;
  height: number;
};

export default function Image({
  width,
  url,
  borderRadius,
  alt,
  height,
}: Props) {
  return (
    <div>
      <img
        src={url}
        alt={alt}
        style={{
          borderRadius: `${borderRadius}px`,
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
    </div>
  );
}
