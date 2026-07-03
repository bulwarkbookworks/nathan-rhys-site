<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sm">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"
    doctype-system="about:legacy-compat" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, follow" />
        <title>XML Sitemap &#8212; Nathan Rhys</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,650;14..32,750&amp;family=Literata:opsz,wght@7..72,400;7..72,500;7..72,650&amp;family=Marcellus&amp;display=swap" rel="stylesheet" />
        <style>
          :root {
            color-scheme: dark;
            --color-background: #071512;
            --color-background-deep: #040907;
            --color-surface: #0f241d;
            --color-surface-soft: #17362c;
            --color-secondary: #d6b15f;
            --color-accent: #75d7d0;
            --color-accent-deep: #2f7d76;
            --color-text-main: #f2eadc;
            --color-text-muted: #b8c8bb;
            --font-display: "Marcellus", "Georgia", serif;
            --font-serif: "Literata", "Georgia", serif;
            --font-sans: "Inter", "system-ui", sans-serif;
            --page-gutter: clamp(1rem, 4vw, 2rem);
            --radius-panel: 1.5rem;
            --shadow-lifted: 0 2rem 6rem rgba(0, 0, 0, 0.45);
          }

          * { box-sizing: border-box; }

          body {
            margin: 0;
            min-height: 100vh;
            background: var(--color-background);
            color: var(--color-text-main);
            font-family: var(--font-sans);
            -webkit-font-smoothing: antialiased;
          }

          body::before {
            content: "";
            position: fixed;
            inset: 0;
            pointer-events: none;
            background:
              radial-gradient(circle at 20% 5%, rgba(117, 215, 208, 0.10), transparent 26rem),
              radial-gradient(circle at 82% 18%, rgba(214, 177, 95, 0.10), transparent 24rem),
              linear-gradient(180deg, rgba(4, 9, 7, 0) 0%, rgba(4, 9, 7, 0.40) 100%);
            z-index: -1;
          }

          .container {
            width: min(100% - calc(var(--page-gutter) * 2), 72rem);
            margin-inline: auto;
          }

          .sitemap-header {
            padding-block: clamp(3.5rem, 9vw, 6rem) 2rem;
          }

          .eyebrow {
            margin: 0 0 0.85rem;
            color: var(--color-accent);
            font-family: var(--font-sans);
            font-size: 0.78rem;
            font-weight: 750;
            letter-spacing: 0.22em;
            text-transform: uppercase;
          }

          .sitemap-header h1 {
            margin: 0;
            font-family: var(--font-display);
            color: var(--color-text-main);
            font-size: clamp(2.4rem, 6vw, 4.5rem);
            line-height: 1.0;
            letter-spacing: -0.035em;
            text-wrap: balance;
          }

          .lede {
            max-width: 44rem;
            margin: 1.2rem 0 0;
            color: var(--color-text-muted);
            font-family: var(--font-serif);
            font-size: clamp(1.05rem, 2vw, 1.35rem);
            line-height: 1.6;
          }

          .lede strong { color: var(--color-secondary); font-weight: 650; }

          .sitemap-main { padding-bottom: clamp(4rem, 9vw, 8rem); }

          .table-panel {
            border: 1px solid color-mix(in srgb, var(--color-secondary) 18%, transparent);
            border-radius: var(--radius-panel);
            background:
              linear-gradient(135deg, rgba(15, 36, 29, 0.92), rgba(7, 21, 18, 0.78));
            box-shadow: var(--shadow-lifted);
            overflow: hidden;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.95rem;
          }

          thead th {
            padding: 1.1rem 1.25rem;
            text-align: left;
            font-family: var(--font-sans);
            font-size: 0.72rem;
            font-weight: 750;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--color-accent);
            background: rgba(4, 9, 7, 0.4);
            border-bottom: 1px solid color-mix(in srgb, var(--color-secondary) 18%, transparent);
          }

          tbody td {
            padding: 0.95rem 1.25rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            vertical-align: top;
          }

          tbody tr:last-child td { border-bottom: none; }

          tbody tr:hover td { background: rgba(117, 215, 208, 0.05); }

          tbody td a {
            color: var(--color-accent);
            text-decoration: none;
            font-family: var(--font-serif);
            word-break: break-word;
            transition: color 180ms ease;
          }

          tbody td a:hover { color: var(--color-secondary); }

          .col-meta {
            color: var(--color-text-muted);
            white-space: nowrap;
            font-variant-numeric: tabular-nums;
          }

          .index-icon {
            display: inline-block;
            margin-right: 0.55rem;
            color: var(--color-secondary);
          }

          .group-row td {
            background: rgba(4, 9, 7, 0.4);
            font-family: var(--font-sans);
            font-size: 0.72rem;
            font-weight: 750;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }

          .group-row td a {
            color: var(--color-text-muted);
            font-family: var(--font-sans);
            text-transform: none;
            letter-spacing: normal;
          }

          .group-row:hover td { background: rgba(4, 9, 7, 0.4); }

          .sitemap-footer {
            padding-block: 2.5rem;
            border-top: 1px solid color-mix(in srgb, var(--color-secondary) 18%, transparent);
            background: rgba(4, 9, 7, 0.72);
            color: var(--color-text-muted);
            font-size: 0.88rem;
          }

          .sitemap-footer .container {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem 1rem;
            align-items: center;
            justify-content: space-between;
          }

          .sitemap-footer p { margin: 0; }

          .sitemap-footer__brand {
            color: var(--color-secondary);
            font-weight: 750;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          @media (max-width: 640px) {
            .col-meta { white-space: normal; }
            thead th, tbody td { padding-inline: 0.9rem; }
            .sitemap-footer .container { justify-content: center; text-align: center; }
          }
        </style>
      </head>
      <body>
        <header class="sitemap-header">
          <div class="container">
            <p class="eyebrow">XML Sitemap</p>
            <xsl:choose>
              <xsl:when test="sm:sitemapindex">
                <h1>XML Sitemap</h1>
                <p class="lede">
                  This sitemap lists
                  <strong><xsl:value-of select="count(document(sm:sitemapindex/sm:sitemap/sm:loc)/sm:urlset/sm:url)" /></strong>
                  page<xsl:if test="count(document(sm:sitemapindex/sm:sitemap/sm:loc)/sm:urlset/sm:url) != 1">s</xsl:if>
                  across
                  <strong><xsl:value-of select="count(sm:sitemapindex/sm:sitemap)" /></strong>
                  sitemap<xsl:if test="count(sm:sitemapindex/sm:sitemap) != 1">s</xsl:if>,
                  for search engines. You were probably looking for the
                  <a href="/">home page</a>.
                </p>
              </xsl:when>
              <xsl:otherwise>
                <h1>XML Sitemap</h1>
                <p class="lede">
                  This sitemap lists
                  <strong><xsl:value-of select="count(sm:urlset/sm:url)" /></strong>
                  page<xsl:if test="count(sm:urlset/sm:url) != 1">s</xsl:if>
                  for search engines. You were probably looking for the
                  <a href="/">home page</a>.
                </p>
              </xsl:otherwise>
            </xsl:choose>
          </div>
        </header>

        <main class="sitemap-main">
          <div class="container">
            <div class="table-panel">
              <xsl:choose>
                <xsl:when test="sm:sitemapindex">
                  <table>
                    <thead>
                      <tr>
                        <th>URL</th>
                        <th>Last Modified</th>
                      </tr>
                    </thead>
                    <tbody>
                      <xsl:for-each select="sm:sitemapindex/sm:sitemap">
                        <tr class="group-row">
                          <td colspan="2">
                            <span class="index-icon">&#9662;</span>
                            <a href="{sm:loc}"><xsl:value-of select="sm:loc" /></a>
                          </td>
                        </tr>
                        <xsl:for-each select="document(sm:loc)/sm:urlset/sm:url">
                          <tr>
                            <td>
                              <a href="{sm:loc}"><xsl:value-of select="sm:loc" /></a>
                            </td>
                            <td class="col-meta">
                              <xsl:choose>
                                <xsl:when test="sm:lastmod">
                                  <xsl:value-of select="substring(sm:lastmod, 1, 10)" />
                                </xsl:when>
                                <xsl:otherwise>&#8212;</xsl:otherwise>
                              </xsl:choose>
                            </td>
                          </tr>
                        </xsl:for-each>
                      </xsl:for-each>
                    </tbody>
                  </table>
                </xsl:when>
                <xsl:otherwise>
                  <table>
                    <thead>
                      <tr>
                        <th>URL</th>
                        <th>Last Modified</th>
                        <th>Change Freq.</th>
                        <th>Priority</th>
                      </tr>
                    </thead>
                    <tbody>
                      <xsl:for-each select="sm:urlset/sm:url">
                        <tr>
                          <td>
                            <a href="{sm:loc}"><xsl:value-of select="sm:loc" /></a>
                          </td>
                          <td class="col-meta">
                            <xsl:choose>
                              <xsl:when test="sm:lastmod">
                                <xsl:value-of select="substring(sm:lastmod, 1, 10)" />
                              </xsl:when>
                              <xsl:otherwise>&#8212;</xsl:otherwise>
                            </xsl:choose>
                          </td>
                          <td class="col-meta">
                            <xsl:choose>
                              <xsl:when test="sm:changefreq">
                                <xsl:value-of select="sm:changefreq" />
                              </xsl:when>
                              <xsl:otherwise>&#8212;</xsl:otherwise>
                            </xsl:choose>
                          </td>
                          <td class="col-meta">
                            <xsl:choose>
                              <xsl:when test="sm:priority">
                                <xsl:value-of select="sm:priority" />
                              </xsl:when>
                              <xsl:otherwise>&#8212;</xsl:otherwise>
                            </xsl:choose>
                          </td>
                        </tr>
                      </xsl:for-each>
                    </tbody>
                  </table>
                </xsl:otherwise>
              </xsl:choose>
            </div>
          </div>
        </main>

        <footer class="sitemap-footer">
          <div class="container">
            <p class="sitemap-footer__brand">Nathan Rhys</p>
            <p>Generated XML Sitemap</p>
          </div>
        </footer>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
