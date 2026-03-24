export const metadata = {
  title: 'Vicky Portfolio',
  description: 'Design portfolio by Vicky',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
