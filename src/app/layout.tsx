import "../app/scss/global.scss";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>My Page Title</title>
                <meta name="description" content="Description of my page" />
                <meta property="og:type" content="website" />
            </head>
            <body>{children}</body>
        </html>
    );
}
