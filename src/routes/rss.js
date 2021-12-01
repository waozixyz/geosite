export const get = async () => {

    const res = await fetch('https://geocats.net/geonews.json');
    const data = await res.json();
    const body = render(data);
    const headers = {
      'Cache-Control': `max-age=0, s-max-age=${600}`,
      'Content-Type': 'application/xml',
    };
    return {
      body,
      headers,
    };
  };
  
  const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
  <atom:link href="http://geocats.net/rss" rel="self" type="application/rss+xml" />
  <title>Geocats</title>
  <link>https://geocats.net</link>
  <description>A Retro-style 2D Action Platformer - Our adventure story takes the player through the world of GeoTerra, a place of both breathtaking beauty and chilling dystopian environments.</description>
  ${posts
    .map(
      (post) => `<item>
  <guid>https://geocats.net/geonews/${post.slug}</guid>
  <title>${(post.title.replace('&', 'and'))}</title>
  <link>https://geocats.net/geonews/${post.slug}</link>
  <description>${post.excerpt}</description>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>`
    )
    .join('')}
  </channel>
  </rss>
  `;
