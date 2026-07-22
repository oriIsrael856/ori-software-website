// ⚙️ כל הפרטים האישיים של האתר במקום אחד — לעדכן כאן בלבד.
export const site = {
  // TODO: לאשר/לעדכן את השם המלא
  name: "אורי ישראל",
  firstName: "אורי",
  brand: "Ori Software Solutions",
  brandShort: "Ori Software",
  role: "פתרונות תוכנה בהתאמה אישית",
  positioning:
    "אני מאתר צרכים וכאבים אמיתיים בעסק שלכם — ופותר אותם עם טכנולוגיה שעובדת.",

  // TODO: לעדכן מספר וואטסאפ בפורמט בינלאומי בלי + (למשל 972501234567)
  whatsapp: "972500000000",
  whatsappMessage: "היי, הגעתי מהאתר שלך ואשמח לדבר על פרויקט",

  // TODO: לעדכן קישור לינקדאין אמיתי
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/oriIsrael856",
  email: "orisrael1234@gmail.com",

  url: "https://example.com", // TODO: דומיין סופי
} as const;

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;
