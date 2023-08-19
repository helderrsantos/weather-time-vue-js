interface IconToBackgroundClass {
  [key: string]: string;
}

const iconToBackgroundClass:IconToBackgroundClass = {
  '01d':'background-sol',
  '02d':'background-sol-com-nuvem',
  '03d':'background-sol-com-nuvem',
  '04d':'background-nublado',
  '09d':'background-chuvoso',
  '10d':'background-sol-com-chuva',
  '11d':'background-temporal',
  '13d':'background-neve',
  '50d':'background-temporal',
  '01n':'background-noite',
  '02n':'background-noite',
  '03n':'background-noiteNublada',
  '04n':'background-noiteNublada',
  '09n':'background-noiteChuvosa',
  '10n':'background-noiteChuvosa',
  '11n':'background-noiteChuvosa',
  '13n':'background-noiteComNeve',
  '50n':'background-noiteChuvosa',
}

export function getBackgroundClass(icon: string): string {
  return iconToBackgroundClass[icon] || '';
}
