let handler = async (m, { command, text }) => m.reply(`

*🎭━━─━━━⌠🎭⌡━━━─━━🎭*
*❈╎مـرحـبـاً انـا بوت نقابة『 وندر 𓆩🎭𓆪 』🤖╎❈*
*🎭━━─━━━⌠🎭⌡━━━─━━⚜️*
*❖┃قــائمــه┋📜┋الاوامر┃❖*
*🎭━━─━━━⌠🎭⌡━━━─━━🎭*

*🎭━━─━━⌠ قائمه الجروب ⌡━━─━━🎭*

🎭⇜ .منشن 
🎭 منشن جماعي لكل الاعضاء 📧


🎭⇜ .منشنلي
🎭⇜ البوت يمنشن لك 🐤


🎭⇜استماره
🎭⇜يجيب لك استمارة الاستقبال 🖤🎭

🎭⇜ .وهمي
🎭 منشن وهمي لكل الاعضاء 👽


🎭⇜ .رستر
🎭 يسوي رستارت لرابط القروب ♻️


🎭⇜ .الاوامر
🎭⇜ لعرض اوامر البوت 📜
 

🎭⇜ .الاستقبال
🎭 يجلب لك رابط الاستقبال 🌐


🎭⇜ .المطور
🎭⇜ يجلب لك رقم المطور 🧑‍💻


🎭⇜ .ترقيه
🎭⇜ ترقيه عضو لمشرف ↖️


🎭⇜ .تخفيض
🎭⇜ تخفيض مشرف لعضو ↙️


🎭⇜ .اضافه
🎭⇜ اضافه عضو للقروب 🚸


🎭⇜ .طرد
🎭⇜ طرد عضو من القروب 🐍


🎭⇜ .حذف
🎭 حذف رسائل الاعضاء في الجروب 🦦


🎭⇜ .المشرفين
🎭 يعرض لك قائمه المشرفين ✨


🎭⇜ .لينك
🎭 يجلب لك رابط الجروب 🪀


🎭⇜ .تغيرالترحيب
🎭⇜ تغيير ترحيب البوت 🎉


🎭 .تغيرالمغادره
🎭⇜ تغيير مغادره البوت 🗑️

*🎭━━─━━⌠ قائمه التحويل ⌡━━─━━🎭*

🎭⇜ .ملصق
🎭 تحويل الصور وفيديوهات لملصق 🎴


🎭⇜ .سرقه
🎭 سرقه الملصقات بحقوقك 🎴


🎭⇜ .لصوره
🎭 تحويل الملصقات لصور 🔂


🎭⇜ .لفيديو
🎭 تحويل الملصق المتحرك لفيديو ♻️


🎭⇜ .لصوتي
🎭 تحويل الفيديوهات لصوت 🔁


🎭⇜ .تليجراف
🎭 رفع الصور وعمل لها رابط 📠


🎭⇜ .صوره
🎭⇜ يجلب لك صور من جوجل 🖼️

*🎭━━─━━⌠ قائمه التسليه ⌡━━─━━🎭*

🎭⇜ .بروفايل
🎭⇜ يجلب لك معلومات بروفايلك 🪪


🎭⇜ .اكس-او
🎭⇜ لعبه اكس او للتسليه 🎮


🎭⇜ .مغادره
🎭⇜ مغادره الجوله في اكس او ❌


🎭⇜ .توب
🎭⇜ يجيب توب 10 اللي تختارهم 🏆


🎭⇜ .شاذ
🎭⇜ امزح مع صاحبك بالمنشن 🏳️‍🌈


🎭⇜ .الحب
🎭⇜ مقياس حب الاصدقاء 🫂


🎭⇜ .صراحه
🎭⇜ لعبه الصراحه 🎋

*🎭━━─━━━⌠🎭⌡━━━─━━🎭*
*❈↲╎مـعلۅمـه يمـنع سـب الـبـوت مـنعاً بـاتاً ۅمـن يخالف يبـلع انذار القـۅانين هاذه خاصـه بـنقـابـه فـقـط*
*🎭━━─━━━⌠🎭⌡━━━─━━🎭*
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(اوامر|الاوامر|menu\القائمه)$/i

export default handler
