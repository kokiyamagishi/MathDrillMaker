const http = require('http');

http.get('http://localhost:3000/grade1', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const pages = data.split('class="drill-page');
    console.log(`Total rendered pages: ${pages.length - 1}`);
    
    pages.slice(1).forEach((pageHtml, index) => {
      const pageNumMatch = pageHtml.match(/drill-header__page-number[^>]*>(\d+)</) || 
                           pageHtml.match(/page-number[^>]*>(\d+)</);
      
      const pageNum = pageNumMatch ? pageNumMatch[1] : 'No Page Num';
      
      // 単元タイトルを抽出
      const titleMatch = pageHtml.match(/drill-header__unit-title[^>]*>([^<]+)</) || ['','No Title'];
      const title = titleMatch[1].trim();
      
      // セクション
      const sectionMatch = pageHtml.match(/section-title__text[^>]*>([^<]+)</) || ['','No Section'];
      const section = sectionMatch[1].trim();
      
      console.log(`HTML Page ${index + 1} -> Header Printed Page: ${pageNum} [${title} - ${section}]`);
    });
  });
}).on('error', (err) => {
  console.error('Error fetching page:', err);
});
