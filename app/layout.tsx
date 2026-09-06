import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Мусульманские знакомства для никаха — «Линара женит»',description:'Помогаем мусульманам найти мужа или жену: знакомства через менеджера, помощь в выборе и проверка кандидатов. Оставьте анкету бесплатно.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ru"><body>{children}</body></html>}
