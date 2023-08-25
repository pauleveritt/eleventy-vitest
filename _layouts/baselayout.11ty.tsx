// @ts-ignore
import h from "vhtml";

export function render() {
  const siteTitle = "My Site";
  const content = "The Content";
  return (
    <html lang="en">
      <head>
        <title>{siteTitle}</title>
        <link rel="stylesheet"></link>
      </head>
      <body>
        <main className="container">{content}</main>
      </body>
    </html>
  );
}
