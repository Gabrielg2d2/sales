import imgPix from 'assets/flags/pix.svg'
import imgMasterCard from 'assets/flags/mastercard.svg'

type FlagProps = {
  src: string
  alt: string
}

function ImageFlag({ src, alt }: FlagProps) {
  return <img src={src} alt={alt} width="50px" height="30px" />
}

export function formatFlag(flag: string) {
  const flagKey = flag.toLowerCase()

  switch (flagKey) {
    case 'pix':
      return <ImageFlag src={imgPix} alt="pix" />
    case 'mastercard':
      return <ImageFlag src={imgMasterCard} alt="master card" />
    default:
      return '🏳️'
  }
}
