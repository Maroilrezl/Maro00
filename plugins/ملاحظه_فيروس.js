//ان الله وملائكته يصلون على النبي يا أيها الذين آمنوا صلوا عليه وسلموا تسليما كثيرا
//قدر تعبي ب متابعه للقناه
//الكود شغال علي جورو و مستك
let timeout = 120000
let minimumvirus = 2 
import { createRequire } from 'module';
import fetch from 'node-fetch';
const require = createRequire(import.meta.url);
const fs = require('fs');

let فيروسات = {
  isActive: false,
  players: {},
حقن:5
  اصابه: 5
};
let توثيق = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//يتم تحديد الاسسيات
let handler = async (m, { conn, command, text }) => {
  let args = text.trim().split(/  /).slice(1);
  //لل عايز يتعلم ده كود انضمام من لعبه شطرنج مش حوار هو لازم تكون بس عندك خبره
  switch (command) {
    case 'فيروس':
      if (!فيروسات.isActive) {
        فيروسات.isActive = true;
        فيروسات.players = {};
        m.reply('𒄟 ❰لـقـد بـدات الـفـيروسـات فـي الـانـتـشـار❱\n> ¹ قم بكتابه (.فيروس) لبدا وتشغيل اللعبه\n> ² استخدم (.اصابه) ل اصابه احد الاعبين بي الفيروس ثم سيتم اضافته تلقائيا\n> ³ اكتب (.حقنه) لي تخفيف فيروسات الاعب عندما يجاوب اجابه صحيحه\n> ⁴ اكتب (.نتيجه) سوف تظهر قائمه المشاركين و فايروساتهم\n> By 👾 Itachi 2024 👾');
      } else {
        m.reply('> اللعبه شغاله حالياً');
      }
      break;
    case 'اصابه':
      if (!فيروسات.isActive) {
        m.reply('> لا يوجد احد قام بتشغيل اللعبه');
        return;
      }
      let newPlayer = m.quoted ? m.quoted.sender.split('@')[0] : null;
      if (newPlayer && !فيروسات.players[newPlayer]) {
        فيروسات.players[newPlayer] = فيروسات.اصابه;
        m.reply(`تـمـت اصابه @${newPlayer} اصبح لديه ${فيروسات.اصابه} فيروسات`);
      } else {
        m.reply('> منشن او رد علي رساله اي حد ل تصيبه');
      }
      //لوضع فيروس
      break;
    case 'نتيجه':
      if (!فيروسات.isActive) {
        m.reply('لـم تبـدأ اللعبة بـعد.');
        return;
      }
      let message = '*╯═─────═👾═─────═╰*\n*لوحه الفيروسات فـي الفاعليه*\n\n';
      for (let player in فيروسات.players) {
        let نتيجه = '👾'.repeat(فيروسات.players[player]);
        //لعرض النتائج 
        message += `*𒄟 ❰ @${player}❱فيروساتك𒄟 ❰${نتيجه}❱*\n\n`;
      }
      m.reply(message);
      break;
    case 'حقنه':
      if (!فيروسات.isActive) {
        m.reply('> لا يوجد احد قام بتشغيل اللعبه');
      } else {
        let لاعب = m.quoted ? m.quoted.sender.split('@')[0] : null;
        if (لاعب && فيروسات.players[لاعب]) {
          فيروسات.players[لاعب]--;
          if (فيروسات.players[لاعب] === 0) {
          } else {
            m.reply(`مـبـروك لقد تـم ازالـه عنـك فيروس @${لاعب}\n>اقتربت من  الشفاء`);
          }
        } else {
          m.reply('>منشن المستخدم او رسالته');
        }
      }
      break;
    default:
      m.reply(`𒄟 ❰لـقـد بـدات الـفـيروسـات فـي الـانـتـشـار❱\n> ¹ قم بكتابه (.فيروس) لبدا وتشغيل اللعبه\n> ² استخدم (.اصابه) ل اصابه احد الاعبين بي الفيروس ثم سيتم اضافته تلقائيا\n> ³ اكتب (.حقنه) لي تخفيف فيروسات الاعب عندما يجاوب اجابه صحيحه\n> ⁴ اكتب (.نتيجه) سوف تظهر قائمه المشاركين و فايروساتهم\n*┏═───═⊱⬩⊰🐦‍🔥⊱⬩⊰═───═┓*
*『 فـعـالـيـة الـفـيـروسـات👾 』↶*
*༺═━═⊱╊⊰🐦‍🔥⊱╉⊰═━═༻*
*⌬↫عـدد الـمـشـاركـيـن🔢╎حسب』*
*⌬↫الـمـقـدم🧑🏻‍💻╎ايتاتشي 』*
*⌬↫الـوقـت🕒╎عند اكتمال العدد 』*
*༺═━═⊱╊⊰🐦‍🔥⊱╉⊰═━═༻*
*⌝شـرح الـفـعـالـيـة╎📓⌞*

*• كل مشارك لديه 5فيروسات ويجب عليه التخلص منها و اول شخص يقوم بالتخلص من جميع فيروساته يحصل عل المركز الأول وهكذا.*

*• يتخلص المشاركين من فيروساهم عن طريق الحصول على النقاط في الأسئلة التي سيقدمها المقدم، كتابة، صور، الخ...*

*✾ملاحظة ⛔¦ كل نقطتين يحصل عليها المشارك تساوي محو فيروس واحد فقط』*

*༺═━═⊱╊⊰🐦‍🔥⊱╉⊰═━═༻*
*● ~تــ✍︎ــوقــيــع ↯:~*
*⌞ ❯⏐ 𝐵𝛩𝑇 𝐸𝑅𝑺𝑁╎🐦‍🔥⌝*
*┗═───═⊱⬩⊰🐦‍🔥⊱⬩⊰═───═┛*\n> By 👾 Itachi 2024 👾`conn.sendmassage (m.chat,توثيق);

handler.command = /^(فيروس|اصابه|نتيجه|حقنه)$/i;
handler.admin  = true;
handler.botAdmin = true;
handler.owner = true;
export default handler;
//نصيحه مني مش شرط تكون متعلم لغه كامله وتعمل امر/ اهم حاجه تكون عارف الاسسيات بس
// حقوق ايتاتشي 2024
