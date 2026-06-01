const http = require('http');

http.get('http://localhost:3000/grade1', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // HTML内の .drill-page 要素を簡易的に分割して探す
    // Next.jsのHTMLストリームや静的マークアップを解析する
    const pages = data.split('class="drill-page');
    
    console.log(`Total drill pages found in HTML: ${pages.length - 1}`);
    
    for (let i = 1; i < pages.length; i++) {
      const pageHtml = pages[i];
      // ページ番号のクラスか、もしくはテキスト内にページ番号があるか確認
      // ページヘッダーのページ番号 (e.g. <span class="drill-header__page-number number">28</span>)
      const pageNumMatch = pageHtml.match(/drill-header__page-number[^>]*>(\d+)</) || 
                           pageHtml.match(/page-number[^>]*>(\d+)</);
      
      if (pageNumMatch) {
        const pageNum = parseInt(pageNumMatch[1], 10);
        if (pageNum === 28) {
          console.log(`\n=== Found Page 28! ===`);
          
          // 単元タイトルを抽出
          const titleMatch = pageHtml.match(/drill-header__unit-title[^>]*>([^<]+)</);
          if (titleMatch) {
            console.log(`Unit Title: ${titleMatch[1].trim()}`);
          }
          
          // セクションタイトルを抽出
          const sectionMatch = pageHtml.match(/section-title__text[^>]*>([^<]+)</);
          if (sectionMatch) {
            console.log(`Section: ${sectionMatch[1].trim()}`);
          }
          
          // 問題文の一部（ラオス語等）を抽出するために、いくつかのテキストをダンプ
          const textSnippets = pageHtml.match(/<p[^>]*>([^<]+)<\/p>/g) || [];
          console.log('Text snippets on this page:');
          textSnippets.slice(0, 10).forEach(s => {
            console.log(`  - ${s.replace(/<[^>]+>/g, '').trim()}`);
          });
          
          // gridやflexに関するスタイルがどう出力されているか確認
          console.log('\nStyles/Classes in this page:');
          const gridMatch = pageHtml.match(/gridTemplateColumns[^;]+/g) || [];
          gridMatch.forEach(g => console.log(`  - ${g}`));
          
          return;
        }
      }
    }
    console.log('Page 28 was not found by direct page number class.');
  });
}).on('error', (err) => {
  console.error('Error fetching page:', err);
});
