import { performance } from 'perf_hooks';

const handler = async (m, { conn, text }) => {
    const start = `❍┇🚀ابدأ تفجير لجروب┇⤪`;
    await m.reply(start);

    const old = performance.now();

    // محاكاة خطوات اختراق الكون
    await simulateCosmicHacking(m);

    const neww = performance.now();
    const speed = `   اكتمل تبنيد مشرفين ${neww - old} ولم يبقى الى يوهان ! 🛸🌠`;

    const cosmicInfo = `
🪐 معلومات لجروب الذي تم تفجيره 🪐
الاسم: ${text}
الموقع: واتساب
العمر: ${getRandomAge()} مليار سنة
الوزن: ${getRandomWeight()} كتلة كونية
الرمز السري:اعضاء اصنام
IPV6: 7e4:8fe3:1265:ff9f:42b:سعادة:مضحك:وقت%42
UPNP: ممكن في جميع الأبعاد
DMZ: 42.42.42.42
عنوان الكوني MAC: 42:42:42:42:42:42
مزود الخدمة: شركة واتساب 
DNS: 42.42.42.42
DNS البديل: 42.42.42.1
DNS فائض الأبعاد: DNS عنوان حاسوب مارك
WAN: 42.42.42.42
نوع WAN: محرك الانطلاق تفجير
بوابة: 42.0.0.1
قناع الشبكة: 255.255.255.0
منافذ UDP المفتوحة: 8080، 8081، 8082
منافذ TCP المفتوحة: 80، 443
بائع الموجه: موجه المرح الكوني
نموذج الجهاز: ExoPC-42
نوع الاتصال: محرك الانطلاق الكوني
عدد قفزات ICMP: 42، 42، 42
عنوان الكوني MAC الخارجي: 42:42:42:42:42:42
قفزات المودم للجروب: 42.42.42.42
في لواتساب التي تم تفجيرها: مشرفين، دخول، خروج، بوابة 9
HTTP: عطارد:42 -> لجروب:43
HTTP: مارس:42 -> لجروب:44
HTTP: زحل:42 -> لجروب:45
UDP: كيوتو:42 -> الكون:46
TCP: الارض:42 -> لجروب:47
TCP: زهرة:42 -> لجروب:48
TCP: معدل:42 -> ضرر:49
عنوان لجروب MAC: 42:42:42:42:42:42
قفزات لجروب للمودم: 42، 42، 42
`;

    m.reply(speed);
    m.reply(cosmicInfo, null, { mentions: conn.parseMention(cosmicInfo) });
    m.react('☠');
};

handler.help = ['اختراق-كوني <الاسم>'];
handler.tags = ['مرح'];
handler.command = /^اخترق|اختراق-كوني|تفجير|مرح-كوني/i;

export default handler;

function getRandomAge() {
    return (Math.random() * 13 + 0.5).toFixed(2);
}

function getRandomWeight() {
    return (Math.random() * 1.5 + 0.1).toFixed(2);
}

async function simulateCosmicHacking(m) {
    await m.reply(`☠️ تم بدأ تفجير...`);
    await m.reply(`🌚 جاري تحصين الدفاع ...`);
    await m.reply(`🫡 تم تحصين المفجر...`);
    await m.reply(`🫵🏻 جاري تبنيد مشرفين...`);
    await m.reply(`🗣   تم تبنيد المشرفين...`);
    await m.reply(`🌌  جاري حسب معدل اضرار...`);
    await m.reply(`🦾 حدث خطأ اثناء تبنيد تم تصليح خطأ من قبل  المحور   ..`);
    await m.reply(`🚀   تم حسب لمعدل وجاري عرض نتائج...`);
    await m.reply(`✨ نجاح عملية تفجير  لجروب!`);
}
