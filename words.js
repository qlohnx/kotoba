const vocabulary = {
'Овочі': `🥕|Морква|にんじん|ninjin
🧅|Цибуля|たまねぎ|tamanegi
🫑|Зелений перець|ピーマン|piiman
🌱|Спаржа|アスパラガス|asuparagasu
🥬|Брюссельська капуста|めキャベツ|mekyabetsu
🥬|Шпинат|ほうれんそう|hourensou
🌽|Кукурудза|とうもろこし|toumorokoshi
🥔|Картопля|じゃがいも|jagaimo
🍆|Баклажан|なす|nasu
🍅|Помідор|トマト|tomato
🥒|Огірок|きゅうり|kyuuri
🥬|Капуста|キャベツ|kyabetsu`,
'Фрукти': `🍉|Кавун|スイカ|suika
🍒|Черешня|さくらんぼ|sakuranbo
🍓|Полуниця|いちご|ichigo
🍑|Персик|もも|momo
🍍|Ананас|パイナップル|painappuru
🍇|Виноград|ぶどう|budou
🍋|Лимон|レモン|remon
🍈|Диня|メロン|meron
🍎|Яблуко|りんご|ringo
🍐|Груша|ようなし|younashi
🍌|Банан|バナナ|banana
🍊|Мандарин|みかん|mikan`,
'Кольори': `🔴|Червоний|あか|aka
🔵|Синій|あお|ao
🟡|Жовтий|きいろ|kiiro
🟢|Зелений|みどり|midori
⚪|Білий|しろ|shiro
⚫|Чорний|くろ|kuro
🟤|Коричневий|ちゃいろ|chairo
🟣|Фіолетовий|むらさき|murasaki
🩷|Рожевий|ピンク|pinku
🟠|Помаранчевий|オレンジ|orenji
🩶|Сірий|はいいろ|haiiro
🩵|Блакитний|みずいろ|mizuiro`,
'Дні тижня': `🌙|Понеділок|げつようび|getsuyoubi
🔥|Вівторок|かようび|kayoubi
💧|Середа|すいようび|suiyoubi
🌳|Четвер|もくようび|mokuyoubi
🪙|Пʼятниця|きんようび|kinyoubi
🌍|Субота|どようび|doyoubi
☀️|Неділя|にちようび|nichiyoubi`,
'Місяці': `|Січень|いちがつ|ichigatsu
|Лютий|にがつ|nigatsu
|Березень|さんがつ|sangatsu
|Квітень|しがつ|shigatsu
|Травень|ごがつ|gogatsu
|Червень|ろくがつ|rokugatsu
|Липень|しちがつ|shichigatsu
|Серпень|はちがつ|hachigatsu
|Вересень|くがつ|kugatsu
|Жовтень|じゅうがつ|juugatsu
|Листопад|じゅういちがつ|juuichigatsu
|Грудень|じゅうにがつ|juunigatsu`,
'Тварини': `🐕|Собака|いぬ|inu
🐈|Кіт|ねこ|neko
🐇|Кролик|うさぎ|usagi
🐁|Миша|ねずみ|nezumi
🐎|Кінь|うま|uma
🐄|Корова|うし|ushi
🐖|Свиня|ぶた|buta
🐑|Вівця|ひつじ|hitsuji
🐐|Коза|やぎ|yagi
🐦|Птах|とり|tori
🐔|Курка|にわとり|niwatori
🐟|Риба|さかな|sakana
🐒|Мавпа|さる|saru
🐻|Ведмідь|くま|kuma
🦊|Лисиця|きつね|kitsune
🐺|Вовк|おおかみ|ookami
🐅|Тигр|とら|tora
🦁|Лев|ライオン|raion
🐘|Слон|ぞう|zou
🦒|Жирафа|きりん|kirin
🐢|Черепаха|かめ|kame
🐍|Змія|へび|hebi
🐸|Жаба|かえる|kaeru
🦌|Олень|しか|shika
🐼|Панда|パンダ|panda`
};
const kana=['ゼロ','いち','に','さん','よん','ご','ろく','なな','はち','きゅう'];
const latin=['zero','ichi','ni','san','yon','go','roku','nana','hachi','kyuu'];
function numberWord(n){if(n<10)return [kana[n],latin[n]];let t=Math.floor(n/10),u=n%10;return [(t===1?'':kana[t])+'じゅう'+(u?kana[u]:''),(t===1?'':latin[t])+'juu'+(u?latin[u]:'')];}
vocabulary['Числа']=[...Array.from({length:100},(_,n)=>`|${n}|${numberWord(n).join('|')}`),'|100|ひゃく|hyaku','|1000|せん|sen','|10000|いちまん|ichiman'].join('\n');
const WORDS=Object.entries(vocabulary).flatMap(([category,rows])=>rows.split('\n').map((r,i)=>{const [emoji,uk,jp,romaji]=r.split('|');return {id:category+i,category,emoji,uk,jp,romaji}}));
