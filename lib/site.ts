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

  whatsapp: "972549913804",
  whatsappMessage: "היי, הגעתי מהאתר שלך ואשמח לדבר על פרויקט",

  linkedin: "https://www.linkedin.com/in/oriisrael/",
  github: "https://github.com/oriIsrael856",
  email: "orisrael1234@gmail.com",

  url: "https://orisoftware.co.il",
} as const;

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;
