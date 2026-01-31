import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Simple sentence conversion.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama gampahata yanavaa.');
  await page.getByText('මම ගම්පහට යනවා.').click();
});

test('Pos_Fun_0002 - Compound sentence conversion.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api maathara kadeeta kaeema kanna yanavaa saha passe mooda tharidhu chithrapatiya balanna yanavaa.');
  await page.getByText('අපි මාතර කඩේට කෑම කන්න යනවා සහ පස්සෙ මෝඩ තරිදු චිත්‍රපටිය බලන්න යනවා.').click();
});


test('Pos_Fun_0003 - Complex conditional sentence.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa vaeda aerilaa enakal mama nivasata velaa kaalaya gatha karagena balan innavaa.');
  await page.getByText('ඔයා වැඩ ඇරිලා එනකල් මම නිවසට වෙලා කාලය ගත කරගෙන බලන් ඉන්නවා.').click();
});

test('Pos_Fun_0004 - Interrogative question form.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('svaaBhaavika gas minis jiivithayata saha sampuurNa pRUThiviyatama athishaya vaedhagath vee. gas nomaethi lookayak sithannavath apahasuya, mandha eevaa apata oksijan labaa dhena praDhaana muulaashraya vana baevini. gas vaayugoolayee thibena kaaban dayoksayid avashooShaNaya kara oksijan nidhahas kiriima magin parisara samathulithathaavaya pavathvaa ganii. emenma gas vaesi jalaya pRUThiviyata raDHAvaa gaeniimata saha Bhuumi asThaavarathaavaya vaeLaekviimatadha dhaayaka vee. gas magin pakShiinta, sathunta, haa kudaa jiiviinta vaasasThaana sapayana athara jaiva viviDhathvaya raeka gaeniimata vishaala Bhuumikaavak itu karayi. shrii lQQkaava vaeni dhuupath ratakata svaaBhaavika vanaanthara visheeShayen vaedhagath vana athara eevaa apee kaalaguNaya mRUdhu karamin vaayu uShNathvaya paalanaya karayi. gas naethi viima heethuven vanaanthara vinaashaya, viyaLi kaalaguNaya, gQQvathura, haa Bhuumi kaadhaeli vaeni gaetalu vaedi viya haeka. emenma gas minisunta auShaDha, aahaara, lii, saha sevaNa labaa dhena aganaa sampathaki. puraaNa kaalayee sitama minisun gasvalata garu kaLee eevaa jiivithaya raeka gannaa mithuran lesa dhaekiima heethuveni. adha dhina , aDhika vRUththiiya sQQvarDhanaya, nagariikaraNaya, haa akramavath kaepiim heethuven svaaBhaavika gas dhaedi avadhaanamakata lakva aetha. ebaevin gas raeka gaeniima rajayee vagakiimak pamaNak nova, saeema pudhgalayekugeema samaaja vagakiimak vee. api adha gas raeka gannee naethnam, heta dhavasee apee dharuvanta husma gaeniimata sudhusu parisarayak ithiri veevidha?');
  await page.getByText('ස්වාභාවික ගස් මිනිස් ජීවිතයට සහ සම්පූර්ණ පෘථිවියටම අතිශය වැදගත් වේ. ගස් නොමැති ලෝකයක් සිතන්නවත් අපහසුය, මන්ද ඒවා අපට ඔක්සිජන් ලබා දෙන ප්‍රධාන මූලාශ්‍රය වන බැවිනි. ගස් වායුගෝලයේ තිබෙන කාබන් ඩයොක්සයිඩ් අවශෝෂණය කර ඔක්සිජන් නිදහස් කිරීම මගින් පරිසර සමතුලිතතාවය පවත්වා ගනී. එමෙන්ම ගස් වැසි ජලය පෘථිවියට රඳවා ගැනීමට සහ භූමි අස්ථාවරතාවය වැළැක්වීමටද දායක වේ. ගස් මගින් පක්ෂීන්ට, සතුන්ට, හා කුඩා ජීවීන්ට වාසස්ථාන සපයන අතර ජෛව විවිධත්වය රැක ගැනීමට විශාල භූමිකාවක් ඉටු කරයි. ශ්‍රී ලංකාව වැනි දූපත් රටකට ස්වාභාවික වනාන්තර විශේෂයෙන් වැදගත් වන අතර ඒවා අපේ කාලගුණය මෘදු කරමින් වායු උෂ්ණත්වය පාලනය කරයි. ගස් නැති වීම හේතුවෙන් වනාන්තර විනාශය, වියළි කාලගුණය, ගංවතුර, හා භූමි කාදැලි වැනි ගැටලු වැඩි විය හැක. එමෙන්ම ගස් මිනිසුන්ට ඖෂධ, ආහාර, ලී, සහ සෙවණ ලබා දෙන අගනා සම්පතකි. පුරාණ කාලයේ සිටම මිනිසුන් ගස්වලට ගරු කළේ ඒවා ජීවිතය රැක ගන්නා මිතුරන් ලෙස දැකීම හේතුවෙනි. අද දින , අධික වෘත්තීය සංවර්ධනය, නගරීකරණය, හා අක්‍රමවත් කැපීම් හේතුවෙන් ස්වාභාවික ගස් දැඩි අවදානමකට ලක්ව ඇත. එබැවින් ගස් රැක ගැනීම රජයේ වගකීමක් පමණක් නොව, සෑම පුද්ගලයෙකුගේම සමාජ වගකීමක් වේ. අපි අද ගස් රැක ගන්නේ නැත්නම්, හෙට දවසේ අපේ දරුවන්ට හුස්ම ගැනීමට සුදුසු පරිසරයක් ඉතිරි වේවිද?').click();
});

test('Pos_Fun_0005 - Imperative command form.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('magee aNa paridhi ivath venna.');
  await page.getByText('මගේ අණ පරිදි ඉවත් වෙන්න.').click();
});

test('Pos_Fun_0006 - Negative sentence conversion.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama ee potha genath dhenne naee.');
  await page.getByText('මම ඒ පොත ගෙනත් දෙන්නෙ නෑ.').click();
});

test('Pos_Fun_0007 - Formal greeting conversion.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('suba dhavasak !');
  await page.getByText('සුබ දවසක් !').click();
});

test('Pos_Fun_0008 - Request for action.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata meeka kiyalaa dhenna.');
  await page.getByText('මට මේක කියලා දෙන්න.').click();
});

test('Pos_Fun_0009 - Response with negation.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('naee, eeka eyaata adha karanna baee vaeda nisaa ithin eeka nisaa mama heta karalaa dhennam.');
  await page.getByText('නෑ, ඒක එයාට අද කරන්න බෑ වැඩ නිසා ඉතින් ඒක නිසා මම හෙට කරලා දෙන්නම්.').click();
});

test('Pos_Fun_0010 - Polite apology/phrasing.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karuNaakaralaa oyaa mata eekata samaava dhenna mama eeka karee hithalaa neveyi. mama aaye vaeradhi karanne naee.');
  await page.getByText('කරුණාකරලා ඔයා මට ඒකට සමාව දෙන්න මම ඒක කරේ හිතලා නෙවෙයි. මම ආයෙ වැරදි කරන්නේ නෑ.').click();
});

test('Pos_Fun_0011 - Informal slang expression.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('uba meheta varen.');
  await page.getByText('උබ මෙහෙට වරෙන්.').click();
});

test('Pos_Fun_0012 - Daily status expression.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata kammaeliyi.');
  await page.getByText('මට කම්මැලියි.').click();
});

test('Pos_Fun_0013 - Multi-word collocation.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('naevathilaa yanna.');
  await page.getByText('නැවතිලා යන්න.').click();
});

test('Pos_Fun_0014 - Repeated word for emphasis.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('aluth aluth');
  await page.getByText('අලුත් අලුත්').click();
});

test('Pos_Fun_0015 - Past tense variation.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('kasun pereedhaa gamata giyaa.');
  await page.getByText('කසුන් පෙරේදා ගමට ගියා.').click();
});

test('Pos_Fun_0016 - Present tense with adverb.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama dhaen naanavaa.');
  await page.getByText('මම දැන් නානවා.').click();
});

test('Pos_Fun_0017 - Simple negation pattern.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama hithuve naee.');
  await page.getByText('මම හිතුවෙ නෑ.').click();
});

test('Pos_Fun_0018 - Singular pronoun variation.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa yanavadha?');
  await page.getByText('ඔයා යනවද?').click();
});

test('Pos_Fun_0019 - Plural pronoun variation.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaalaa yanavadha?');
  await page.getByText('ඔයාලා යනවද?').click();
});

test('Pos_Fun_0020 - Technical brand term.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Youtube');
  await page.getByText('Youtube').click(); 
});

test('Pos_Fun_0021 - Mixed English + Singlish.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('supun river ekata yanne naanna.');
  await page.getByText('සුපුන් river එකට යන්නෙ නාන්න.').click();
});

test('Pos_Fun_0022 - Currency format handling.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('GBP 100');
  await page.getByText('GBP 100').click();
});

test('Pos_Fun_0023 - Units of measurement.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('10 L');
  await page.getByText('10 L').click();
});


test('Pos_UI_0001 - Clearing input resets UI.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama yanavaa');
  await page.getByText('Clear').click(); 
  await expect(page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' })).toBeEmpty();
});

//Negative


test('Neg_Fun_0001 - Missing space stress test.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('maMagedharayanavae');
  await page.getByText('මම ගෙදර යනවා').click();
});

test('Neg_Fun_0002 - Phonetic typographical error.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyae enevanem');
  await page.getByText('ඔයා එනවනම්').click();
});

test('Neg_Fun_0003 - Continuous character repetition.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('yanavaeaaaaaaaaa');
  await page.getByText('යනවා').click();
});

test('Neg_Fun_0004 - Mixed English logic failure.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('The potha is on the mesa.');
  await page.getByText('The පොත is on the mesa.').click();
});

test('Neg_Fun_0005 - Ambiguous phonetic input.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('keatha');
  await page.getByText('කත').click();
});

test('Neg_Fun_0006 - Special symbol interference.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama @#$ Yanae');
  await page.getByText('මම @#$ යන').click();
});

test('Neg_Fun_0007 - Non-standard slang usage.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adoooo siraaaawata');
  await page.getByText('අඩෝ සිරාවට').click();
});

test('Neg_Fun_0008 - Acronym phonetic conversion.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ram');
  await page.getByText('ram').click();
});

test('Neg_Fun_0009 - Markdown/Formatting tags.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('**bold** MaNNE');
  await page.getByText('**bold** මන්නෙ').click();
});

test('Neg_Fun_0010 - Numeric mixed string.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('baetha 123 KaNNa');
  await page.getByText('බත් 123 කන්න').click();
});