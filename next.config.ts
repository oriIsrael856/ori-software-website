import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content-Security-Policy — ראו ADR-006 ב-ARCHITECTURE.md.
 * 'unsafe-inline' ל-script נדרש ע"י סקריפטי ההידרציה של Next בעמודים סטטיים;
 * CSP מבוסס-nonce דורש רנדור דינמי לכל בקשה — טרייד-אוף מודע לטובת אתר סטטי מלא.
 * ב-dev נדרש גם 'unsafe-eval' ל-HMR.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // שנתיים HSTS כולל סאב-דומיינים — הדפדפן יסרב ל-HTTP אחרי הביקור הראשון
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // אין לאתר שום צורך בחיישנים/מצלמה — עיקרון ההרשאה המינימלית
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false, // לא מפרסמים גרסאות טכנולוגיה — צמצום שטח תקיפה
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
