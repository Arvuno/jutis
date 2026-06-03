# Jutis

Canton blockchain ekosistemi için premium web extension cüzdan — statik HTML/CSS site ve tasarım sistemi.

## İçerik

```
Jutis/
├── vault/          ← Production-ready statik site
│   ├── index.html  ·  feature.html  ·  security.html  ·  login.html  ·  signup.html  ·  waitlist.html
│   ├── styles/     ← Design tokens, base, layout, components
│   ├── components/ ← Tekrar kullanılabilir HTML parçaları
│   ├── dashboard/  ← Authenticated cüzdan arayüzü
│   ├── developers/ ← Geliştirici dokümantasyonu
│   ├── docs/       ← Ürün dokümantasyonu
│   ├── admin/      ← Yönetim paneli
│   ├── blog/       ← Blog şablonları
│   ├── mobile/     ← Mobile UI mock'ları
│   ├── partner/    ← Partner portal
│   └── legal/      ← Privacy / terms / cookies
└── reference/      ← Tasarım kaynak dosyaları (deploy edilmez)
```

Detaylı yapı, design tokens ve sayfa referansları için: [`vault/README.md`](vault/README.md).

## Hızlı Başlangıç

Backend yok — herhangi bir HTML dosyasını doğrudan tarayıcıda aç:

```bash
# Doğrudan aç
xdg-open vault/index.html

# veya yerel statik sunucu
npx serve vault/
```

## Design System

Tüm sayfalar CSS'i bu sırayla yükler:

```html
<link rel="stylesheet" href="styles/tokens.css">
<link rel="stylesheet" href="styles/base.css">
<link rel="stylesheet" href="styles/layout.css">
<link rel="stylesheet" href="styles/components.css">
```

Ana token'lar:

| Token | Değer | Kullanım |
|-------|-------|----------|
| `--bg-main` | `#1a1d23` | Sayfa arka planı |
| `--bg-card` | `#232730` | Kart yüzeyleri |
| `--accent` | `#dce87a` | Jutis lime — CTA & aktif durumlar |
| `--fg-primary` | `#e6e8ec` | Birincil metin |
| `--font-display` | Plus Jakarta Sans | Başlıklar |
| `--font-sans` | Inter | Gövde |
| `--font-mono` | JetBrains Mono | Kod blokları |

## Durum

Bu site **statik prototip / tasarım referansı** niteliğindedir:

- Backend, auth, blockchain bağlantısı yok
- SDK henüz yayınlanmadı
- Form'lar yalnızca UI seviyesinde
- Canton testnet entegrasyonu dokümante edildi, canlı değil

## Lisans

İç kullanım. Tüm hakları Jutis ekibine aittir.
