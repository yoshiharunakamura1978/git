export default function Contact() {
  // Googleフォームの公開URL（末尾に embedded=true が付いてるやつやで）
  // 自分のフォームを作ったら、ここのURLを差し替えてな！
  const googleFormUrl = "https://docs.google.com/forms/d/1enGMNvyf2ZxekTo__HOUTBDzX8ftgGd8TvrGLQfcA_k/viewform?embedded=true";

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', color: '#5D4037' }}>Contact</h1>
        <p style={{ color: '#8D6E63' }}>
          イベントのご予約や、お店へのご質問など<br />
          お気軽にお問い合わせください。
        </p>
      </header>

      {/* フォームの外枠 */}
      <div style={{
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        border: '1px solid #EFEBE9'
      }}>
        <iframe
          src={googleFormUrl}
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          style={{ display: 'block' }}
        >
          読み込み中...
        </iframe>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center', color: '#8D6E63', fontSize: '0.9rem' }}>
        <p>※回答には数日いただく場合がございます。お急ぎの方はお電話にてご連絡ください。</p>
      </div>
    </main>
  );
}
