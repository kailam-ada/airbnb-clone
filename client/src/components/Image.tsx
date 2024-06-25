interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
  }

export default function Image({src,...rest}: ImageProps) {
    src = src && src.includes('https://') 
    ? src 
    : 'http://localhost:4000/uploads/'+src;
    return (
        <img {...rest} src={src} alt=""/>
    );
}