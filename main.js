// ---- PHASE 1: pre-main error handler ----
window.onerror=function(msg,src,line,col,err){
var d=document.getElementById("js-loading-msg");
if(d)d.innerHTML='<span style="color:red">❌ JSエラー: '+msg+' (line '+line+')</span>';
return false;
};
(function(){
var m=document.getElementById("js-loading-msg");
if(m)m.textContent="⚠️ JS起動中 — メインスクリプトを読み込み中...";
})();
window.onerror=function(msg,src,line,col,err){
var d=document.createElement("div");
d.style="position:fixed;top:0;left:0;right:0;background:#c00;color:#fff;padding:12px;font-size:13px;z-index:99999;word-break:break-all;";
d.textContent="JS Error: "+msg+" (line "+line+")";
document.body?document.body.appendChild(d):document.addEventListener("DOMContentLoaded",function(){document.body.appendChild(d);});
return false;
};

// DATA
function L(ja,en,vi){return lang==="ja"?ja:lang==="en"?en:vi;}
var PRODUCTS = [
{id:1,e:"🍓",ja:"いちご",en:"Strawberry",vi:"Dâu tây",dja:"甘くてジューシーないちご。ベトナムの春に育つ完熟いちご。",den:"Sweet and juicy strawberries. Ripened in the Vietnamese spring.",dvi:"Dâu tây ngọt mọng. Chín rộ vào mùa xuân Việt Nam.",price:45000,price250:45000,price500:80000,stock:20,stock250:10,stock500:10,unit:"パック",uniten:"pack",unitvi:"hộp",pub:true,season:"spring",badge:"",variants:["250g","500g"]},
{id:2,e:"🥗",ja:"ベビーリーフ（ミックス）",en:"Baby Leaf Mix",vi:"Xà lách mix baby",dja:"数種類のレタスを混ぜた彩りサラダ。そのままドレッシングをかけて。",den:"A colorful mix of young lettuce leaves. Ready to eat with dressing.",dvi:"Hỗn hợp nhiều loại rau non đầy màu sắc. Ăn ngay với sốt salad.",price:25000,stock:30,unit:"袋",uniten:"bag",unitvi:"túi",pub:true,season:"all",badge:""},
{id:3,e:"🌿",ja:"ルッコラ",en:"Rocket (Arugula)",vi:"Rau rocket",dja:"ピリッとした風味が特徴のルッコラ。ピザやサラダに。",den:"Peppery rocket with a distinctive flavour. Perfect on pizza or salads.",dvi:"Rau rocket vị cay nhẹ đặc trưng. Dùng cho pizza hoặc salad.",price:20000,stock:30,unit:"袋",uniten:"bag",unitvi:"túi",pub:true,season:"all",badge:""},
{id:4,e:"🥬",ja:"水菜",en:"Mizuna",vi:"Rau Mizuna",dja:"シャキシャキとした食感の日本野菜。サラダや鍋に。",den:"Crisp Japanese mustard green. Great for salads and hotpot.",dvi:"Rau Nhật giòn sảng khoái. Dùng cho salad hoặc lẩu.",price:20000,stock:30,unit:"袋",uniten:"bag",unitvi:"túi",pub:true,season:"all",badge:""},
{id:5,e:"🥦",ja:"ケール",en:"Kale",vi:"Cải kale",dja:"栄養豊富なスーパーフード。スムージーやサラダに。",den:"Nutrient-rich superfood. Perfect for smoothies and salads.",dvi:"Siêu thực phẩm giàu dinh dưỡng. Tuyệt vời cho sinh tố và salad.",price:25000,stock:25,unit:"袋",uniten:"bag",unitvi:"túi",pub:true,season:"spring",badge:""},
{id:6,e:"🥕",ja:"人参",en:"Carrot",vi:"Cà rốt",dja:"甘みのある人参。生でも煮ても美味しい。",den:"Sweet and crunchy carrots. Delicious raw or cooked.",dvi:"Cà rốt ngọt giòn. Ngon dù ăn sống hay nấu chín.",price:15000,stock:40,unit:"本",uniten:"piece",unitvi:"củ",pub:true,season:"all",badge:""},
{id:7,e:"🥗",ja:"大根",en:"Daikon Radish",vi:"Củ cải trắng",dja:"さっぱりとした大根。煮物・漬物・サラダに。",den:"Mild and refreshing daikon. Great for stews, pickling, and salads.",dvi:"Củ cải trắng thanh mát. Dùng để kho, làm dưa hoặc salad.",price:15000,stock:30,unit:"本",uniten:"piece",unitvi:"củ",pub:true,season:"all",badge:""},
{id:8,e:"🥬",ja:"ほうれん草",en:"Spinach",vi:"Cải bó xôi",dja:"鉄分豊富なほうれん草。炒め物・スープに最適。",den:"Iron-rich spinach. Perfect for stir-fries and soups.",dvi:"Cải bó xôi giàu sắt. Hoàn hảo cho món xào và canh.",price:15000,stock:40,unit:"袋",uniten:"bag",unitvi:"túi",pub:true,season:"all",badge:""},
{id:9,e:"🥬",ja:"チンゲン菜",en:"Bok Choy",vi:"Cải ngọt",dja:"シャキシャキのチンゲン菜。炒め物やスープに。",den:"Crisp bok choy. Excellent stir-fried or in soups.",dvi:"Cải ngọt giòn ngon. Rất ngon khi xào hoặc nấu canh.",price:12000,stock:50,unit:"束",uniten:"bunch",unitvi:"bó",pub:true,season:"all",badge:""},
{id:10,e:"🌿",ja:"チョイサム（菜の花）",en:"Choy Sum",vi:"Cải ngồng",dja:"やわらかな菜の花。炒め物やお浸しに。",den:"Tender choy sum. Great stir-fried or blanched.",dvi:"Cải ngồng mềm ngon. Ngon nhất khi xào hoặc luộc.",price:12000,stock:50,unit:"束",uniten:"bunch",unitvi:"bó",pub:true,season:"all",badge:""},
{id:11,e:"🌱",ja:"小ねぎ",en:"Green Onion",vi:"Hành lá",dja:"薬味として万能。どんな料理にも合う。",den:"Versatile green onion. A perfect garnish for any dish.",dvi:"Hành lá đa năng. Dùng được trong mọi món ăn.",price:10000,stock:50,unit:"束",uniten:"bunch",unitvi:"bó",pub:true,season:"all",badge:""},
{id:12,e:"🍅",ja:"ミニトマト（アイコ）",en:"Cherry Tomato (Aiko)",vi:"Cà chua bi Aiko",dja:"甘みが強く美しいアイコトマト。そのままでも料理でも。",den:"Sweet and beautiful Aiko cherry tomatoes. Eat fresh or use in cooking.",dvi:"Cà chua bi Aiko ngọt và đẹp. Ăn tươi hoặc dùng để nấu.",price:35000,stock:20,unit:"パック",uniten:"pack",unitvi:"hộp",pub:true,season:"summer",badge:""},
{id:13,e:"🫑",ja:"パプリカ",en:"Bell Pepper",vi:"Ớt chuông",dja:"カラフルで甘いパプリカ。炒め物やサラダに色どりを。",den:"Colorful and sweet bell peppers. Add vibrancy to stir-fries and salads.",dvi:"Ớt chuông ngọt đầy màu sắc. Thêm màu sắc cho món xào và salad.",price:20000,stock:25,unit:"個",uniten:"piece",unitvi:"quả",pub:true,season:"summer",badge:""},
{id:14,e:"🍈",ja:"ゴーヤ",en:"Bitter Melon",vi:"Mướp đắng",dja:"ビタミン豊富なゴーヤ。ゴーヤチャンプルーに最適。",den:"Vitamin-rich bitter melon. Ideal for stir-fries.",dvi:"Mướp đắng giàu vitamin. Tuyệt vời để xào.",price:15000,stock:25,unit:"本",uniten:"piece",unitvi:"quả",pub:true,season:"summer",badge:""},
{id:15,e:"🌽",ja:"スイートコーン",en:"Sweet Corn",vi:"Ngô ngọt",dja:"みずみずしいスイートコーン。茹でてそのまま食べるのが一番。",den:"Juicy sweet corn. Best enjoyed simply boiled.",dvi:"Ngô ngọt mọng nước. Ngon nhất khi luộc ăn liền.",price:15000,stock:20,unit:"本",uniten:"ear",unitvi:"bắp",pub:true,season:"summer",badge:""},
{id:16,e:"🌽",ja:"もちとうもろこし",en:"Sticky Corn",vi:"Ngô nếp",dja:"もちもちした食感のもちとうもろこし。茹でて食べるのが一番。",den:"Glutinous sticky corn with chewy texture. Best boiled.",dvi:"Ngô nếp dẻo thơm. Ngon nhất khi luộc.",price:15000,stock:20,unit:"本",uniten:"ear",unitvi:"bắp",pub:true,season:"summer",badge:""},
{id:17,e:"🌿",ja:"オクラ",en:"Okra",vi:"Đậu bắp",dja:"ネバネバが体に良いオクラ。茹でてサラダや炒め物に。",den:"Nutritious okra with natural mucilage. Boiled for salads or stir-fried.",dvi:"Đậu bắp bổ dưỡng. Luộc ăn salad hoặc xào.",price:15000,stock:25,unit:"袋",uniten:"bag",unitvi:"túi",pub:true,season:"summer",badge:""},
{id:18,e:"🍆",ja:"なす",en:"Eggplant",vi:"Cà tím",dja:"肉厚でジューシーなベトナムのなす。炒め物や焼きなすに。",den:"Meaty and juicy Vietnamese eggplant. Great stir-fried or grilled.",dvi:"Cà tím Việt Nam dày thịt và mọng nước. Ngon khi xào hoặc nướng.",price:15000,stock:25,unit:"本",uniten:"piece",unitvi:"quả",pub:true,season:"summer",badge:""},
{id:19,e:"🥒",ja:"きゅうり",en:"Cucumber",vi:"Dưa leo",dja:"みずみずしいきゅうり。サラダや漬物に。",den:"Fresh and crisp cucumber. Great for salads or pickling.",dvi:"Dưa leo tươi mát và giòn. Dùng cho salad hoặc dưa chua.",price:12000,stock:30,unit:"本",uniten:"piece",unitvi:"quả",pub:true,season:"summer",badge:""},
{id:20,e:"🫘",ja:"いんげん豆",en:"Green Beans",vi:"Đậu cove",dja:"シャキシャキのいんげん豆。炒め物や茹でて。",den:"Crisp green beans. Delicious stir-fried or boiled.",dvi:"Đậu cove giòn. Ngon khi xào hoặc luộc.",price:15000,stock:25,unit:"袋",uniten:"bag",unitvi:"túi",pub:true,season:"summer",badge:""},
{id:21,e:"🥔",ja:"じゃがいも",en:"Potato",vi:"Khoai tây",dja:"ほくほくのじゃがいも。煮物・炒め物・ポテトサラダに。",den:"Fluffy potatoes. Perfect for stews, stir-fries, and potato salad.",dvi:"Khoai tây bùi bở. Dùng để kho, xào hoặc làm salad khoai tây.",price:15000,stock:30,unit:"個",uniten:"piece",unitvi:"củ",pub:true,season:"winter",badge:""},
{id:22,e:"🟣",ja:"ビーツ",en:"Beetroot",vi:"Củ dền",dja:"鮮やかな赤紫色のビーツ。サラダやスープに。",den:"Vibrant deep-red beetroot. Perfect for salads and soups.",dvi:"Củ dền đỏ tươi rực rỡ. Dùng cho salad và súp.",price:20000,stock:20,unit:"個",uniten:"piece",unitvi:"củ",pub:true,season:"winter",badge:""},
{id:23,e:"🥬",ja:"キャベツ",en:"Cabbage",vi:"Bắp cải",dja:"みずみずしいキャベツ。炒め物・スープ・コールスローに。",den:"Fresh and crisp cabbage. Great for stir-fry, soup, or coleslaw.",dvi:"Bắp cải tươi giòn. Dùng để xào, nấu canh hoặc làm salad.",price:15000,stock:25,unit:"個",uniten:"head",unitvi:"bắp",pub:true,season:"winter",badge:""},
{id:24,e:"🥦",ja:"コールラビ",en:"Kohlrabi",vi:"Su hào",dja:"さっぱりとしたコールラビ。炒め物や漬物に。",den:"Mild and refreshing kohlrabi. Great for stir-fry or pickling.",dvi:"Su hào thanh mát. Ngon khi xào hoặc làm dưa.",price:15000,stock:20,unit:"個",uniten:"piece",unitvi:"củ",pub:true,season:"winter",badge:""},
{id:25,e:"🥦",ja:"カリフラワー",en:"Cauliflower",vi:"Súp lơ trắng",dja:"真っ白なカリフラワー。炒め物やカレーに。",den:"White cauliflower. Perfect for stir-fry or curry.",dvi:"Súp lơ trắng. Ngon khi xào hoặc nấu cà ri.",price:20000,stock:15,unit:"個",uniten:"head",unitvi:"bông",pub:true,season:"winter",badge:""},
{id:26,e:"🥦",ja:"ブロッコリー",en:"Broccoli",vi:"Bông súp lơ xanh",dja:"栄養豊富なブロッコリー。茹でても炒めても美味しい。",den:"Nutrient-rich broccoli. Delicious boiled or stir-fried.",dvi:"Bông súp lơ xanh giàu dinh dưỡng. Ngon dù luộc hay xào.",price:20000,stock:15,unit:"個",uniten:"head",unitvi:"bông",pub:true,season:"winter",badge:""},
{id:27,e:"🥬",ja:"白菜",en:"Napa Cabbage",vi:"Cải thảo",dja:"やわらかな白菜。鍋料理・炒め物・漬物に。",den:"Tender napa cabbage. Perfect for hotpot, stir-fry, or pickling.",dvi:"Cải thảo mềm ngon. Dùng cho lẩu, xào hoặc làm dưa.",price:15000,stock:25,unit:"個",uniten:"head",unitvi:"bắp",pub:true,season:"winter",badge:""}
];
var ORDERS = [];
// localStorageからORDERSを復元（スクショ含む）
(function(){
try{
var saved=localStorage.getItem("nny_orders");
if(saved){var arr=JSON.parse(saved);if(Array.isArray(arr))ORDERS=arr;}
}catch(e){}
})();
var REVIEWS = {};
(function(){try{var _rv=localStorage.getItem("nny_reviews");if(_rv)REVIEWS=JSON.parse(_rv);}catch(e){}})();
var NOTIFY_LIST = [];
var ORDER_HISTORY = [];
var cart = {};
var CART_META = {};
var lang = (function(){var l=localStorage.getItem("nny_lang");return(l==="ja"||l==="vi"||l==="en")?l:"vi";})();
var season = "all";
var nxtId = 200;
var selDel = "deliver";
var selPay = "vietqr";
var sheetsUrl = "https://script.google.com/macros/s/AKfycbxIB-iXq7SJiDintklAsRQe2EpQlmFGeUMRZ-IszpHqqA5dpmQq3sPJ0R9Az4bTDwx2WQ/exec";
var pendingOrder = null, pendingScreenshot = null;
var currentQRMethod = null;
var currentReviewProductId = null;
var currentNotifyProductId = null;
var currentRating = 0;
var QR_IMGS = {momo:null,zalopay:null,vnpay:null};
var EJ = {service:"",template:"",pubkey:"",from:"sigpart123@gmail.com"};
(function(){
try {
var raw = localStorage.getItem("nny_ej");
if(raw){var c=JSON.parse(raw);EJ.service=c.service||"";EJ.template=c.template||"";EJ.pubkey=c.pubkey||"";EJ.from=c.from||EJ.from;}
if(EJ.pubkey){try{emailjs.init({publicKey:EJ.pubkey});}catch(e){}}
}catch(e){}
try{var r=localStorage.getItem("nny_reviews");if(r)REVIEWS=JSON.parse(r);}catch(e){}
try{var n=localStorage.getItem("nny_notify");if(n)NOTIFY_LIST=JSON.parse(n);}catch(e){}
try{var oh=localStorage.getItem("nny_hist");if(oh)ORDER_HISTORY=JSON.parse(oh);}catch(e){}
try{var qi=localStorage.getItem("nny_qr");if(qi){var q=JSON.parse(qi);QR_IMGS.momo=q.momo||null;QR_IMGS.zalopay=q.zalopay||null;QR_IMGS.vnpay=q.vnpay||null;}}catch(e){}
})();
function saveReviews(){
try{localStorage.setItem("nny_reviews",JSON.stringify(REVIEWS));}catch(e){}
if(fbEnabled&&fbDb){
try{
fbDb.collection("reviews").doc("all").set({data:REVIEWS,ts:new Date().toISOString()})
.catch(function(e){console.error("[NNY] Reviews save failed:",e);});
}catch(e){}
}
}
function saveNotifyList(){try{localStorage.setItem("nny_notify",JSON.stringify(NOTIFY_LIST));}catch(e){}}
function saveOrderHistory(){try{localStorage.setItem("nny_hist",JSON.stringify(ORDER_HISTORY));}catch(e){}}
function saveQRImgs(){try{localStorage.setItem("nny_qr",JSON.stringify(QR_IMGS));}catch(e){try{var small={};Object.keys(QR_IMGS).forEach(function(k){if(QR_IMGS[k])small[k]=QR_IMGS[k].slice(0,512);});localStorage.setItem("nny_qr","{}");localStorage.setItem("nny_qr",JSON.stringify(QR_IMGS));}catch(e2){console.warn("[NNY] QR save failed (localStorage full):",e2);}}}
var I = {
ja:{hdrCart:"カート",shopTitle:"🥦 今週のお野菜",cartTtl:"🛒 カートの中身",cartBack:"← 買い物を続ける",sumQty:"商品点数",sumTot:"合計",toInfo:"購入に進む",infoTtl:"📋 注文情報",infoBack:"← カートに戻る",fcCust:"🙋 お客様情報",fcDel:"🛵 受け取り方法",fcPay:"支払い方法",fcNote:"📝 備考",flName:"お名前",flPhone:"電話番号",flZalo:"Zalo ID",flAddr:"住所",flEmail:"メールアドレス",req:"必須",delDeliver:"配達",delPickup:"直接受取",delShip:"宅配便",payCash:"現金",toConfirm:"注文内容を確認する",confirmTtl:"✔ 注文確認",confirmBack:"← 情報を修正する",ccLblItems:"注文商品",ccLblTot:"合計",ccLblCust:"お客様情報",ccLblDel:"受け取り方法",ccLblPay:"支払い方法",ccLblNote:"備考",placeLbl:"注文を確定する",rptTtl:"領収証 兼 注文書",rmlNo:"注文番号",rmlDate:"日時",rmlName:"お名前",rmlPhone:"電話番号",rmlAddr:"お届け先",rmlEmail:"メール",rmlDel:"受け取り",rmlPay:"支払い",rptItemsTtl:"ご注文内容",rthItem:"商品",rthQty:"数量",rthPrice:"単価",rthSub:"小計",rgtLbl:"合計金額",rntLbl:"備考：",rctShop:"買い物を続ける",rctHist:"📋 注文履歴",rptFarm:"ご注文ありがとうございます。配達は日曜日にエムハノイより順次お届けいたします。<br>ご質問等がございましたらお手数ですが、以下NICONICOYASAI公式LINEにてお気軽にご連絡ください。<br><a href='https://lin.ee/R9dAJtD' target='_blank' style='color:var(--g1);font-weight:700;'>https://lin.ee/R9dAJtD</a><br>NICO NICO YASAI ※ニコニコ野菜バンホー農場",pg1:"カート",pg2:"情報入力",pg3:"確認",pg4:"完了",heroEyebrow:"🌿 農薬不使用・化学肥料不使用",heroH1:"生産者と消費者の<br>顔と顔の見える関係づくり",heroSub:"ベトナムの大地で丁寧に育てた新鮮野菜を直接お届けします",spAll:"今週のお野菜",spSpring:"春",spSummer:"夏",spAutumn:"秋",spWinter:"冬",spYearround:"通年",shopTitleYearround:"🌿 通年野菜",badgeNew:"NEW",badgeRec:"⭐ おすすめ",badgeSeason:"🌿 旬",badgeNone:"なし",shopTitleSpring:"🌸 春に採れる野菜",shopTitleSummer:"☀️ 夏に採れる野菜",shopTitleAutumn:"🍂 秋に採れる野菜",shopTitleWinter:"❄️ 冬に採れる野菜",drawerTtl:"🌿 NICO NICO YASAI 管理",dtOrders:"📋 注文",dtDB:"🗄 データ",dtStats:"📊 売上",dtProducts:"🥦 商品",dtNotify:"🔔 入荷通知",dtSite:"⚙️ 設定",ocToggleDone:"✅ 完了にする",ocViewReceipt:"🖨 領収証",pubToggleOn:"🟢 公開中",pubToggleOff:"🔴 非公開",adminLangNote:"管理画面の言語：",ejWizTitle:"📧 メール自動送信の設定",ejStep1:"ステップ1: emailjs.com で無料登録",ejStep2:"ステップ2: 以下に入力",ejTestBtn:"🧪 テスト送信",ejSaveBtn:"💾 設定を保存",ejTestSuccess:"✅ 送信成功！メールが動作しています。",ejTestFail:"❌ 送信失敗。Service ID/Template ID/Public Keyを確認してください。",noOrders:"まだ注文はありません 📭",stockLabel:"在庫数",priceLabel:"価格",saveProduct:"💾 保存",deleteProduct:"🗑 削除",addProductBtn:"➕ 商品を追加",publishAll:"✅ 全て公開",hideAll:"🔴 全て非公開",seasonOnly:"🌸 季節だけ公開",exportData:"⬇ CSV ダウンロード",copyData:"📋 データをコピー",clearData:"🗑 データクリア",sheetsUrlLabel:"Google Sheets リンク:",sheetsSaveBtn:"リンクを保存",notifyEmpty:"入荷通知の登録はありません",adminQuickStats:"本日のサマリー",stlOrders:"総注文数",stlRev:"総売上",stlAvg:"平均注文",stlPub:"公開中商品",peNewLbl:"商品を追加",fabLbl:"管理・編集",abarBtnLbl:"管理",noOrders:"注文はまだありません",stNew:"新規",stDone:"完了",swarnLbl:"在庫少",soutLbl:"在庫切れ",swTitle:"⚠️ 在庫警告",pubLbl:"公開中",unpubLbl:"非公開",cartEmpty:"カートに商品がありません",addBtn:"カートへ",stockOut:"在庫なし",stockLow:"残り",navShop:"野菜を買う",navHist:"注文履歴",histBack:"← トップへ戻る",savedLbl:"前回の情報を自動入力",rctShop:"買い物を続ける",rctHist:"📋 注文履歴",rvEdit:"編集",histTtl:"📋 注文履歴",histBack:"← トップへ戻る",histEmpty:"注文履歴がありません",rvModalTitle:"レビュー",wrTitle:"✍ レビューを書く",rvSubmit:"投稿する",ntfModalTitle:"🔔 入荷通知",ntfDesc:"在庫が補充されたらメールでお知らせします。",ntfSubmit:"🔔 通知を受け取る",ntfSuccess:"✅ 登録しました！入荷時にご連絡します。",savedLbl:"前回の情報を自動入力",guideTtl1:"ご注文方法",guideBody1:"お野菜をカートに追加し、ご注文ください。ご注文後、Gmailにてご連絡いたします。",guideTtl2:"配送について",guideTtl3:"お支払いについて",guideBody3:"現金でのお取引は行っておりません。お支払いは<b>銀行QR（銀行振込）のみ</b>となります。",heroBadge:"🌿 農薬不使用・化学肥料不使用",heroH1:"生産者と消費者の<br>顔と顔の見える関係づくり",heroSub:"ベトナムの大地で丁寧に育てた新鮮野菜を直接お届けします",farmLbl:"※ニコニコ野菜バンホー農場",rptFarm:"ご注文ありがとうございます。配達は日曜日にエムハノイより順次お届けいたします。<br>ご質問等がございましたらお手数ですが、以下NICONICOYASAI公式LINEにてお気軽にご連絡ください。<br><a href='https://lin.ee/R9dAJtD' target='_blank' style='color:var(--g1);font-weight:700;'>https://lin.ee/R9dAJtD</a><br>NICO NICO YASAI ※ニコニコ野菜バンホー農場",rvNamePh:"お名前（任意）",rvTextPh:"野菜の感想をお聞かせください...",payVietqr:"🏦 銀行QRコード",fcProfil:"👤 プロフィール（任意）",privacyNote:"※ご入力いただいた情報はプライバシーを保護した上で、サービス改善・品揃えの最適化のためにのみ活用します。",flAge:"年齢層",flGender:"性別",flFamily:"家族構成",flSource:"どこで知りましたか？",flNote:"配達時間の希望など",prog1:"カート",spAll:"今週のお野菜",spSpring:"春",spSummer:"夏",spAutumn:"秋",spWinter:"冬",prog2:"情報入力",prog3:"確認",prog4:"完了",selOptional:"-- 選択（任意）--",ageOpt1:"20代",ageOpt2:"30代",ageOpt3:"40代",ageOpt4:"50代以上",genderF:"女性",genderM:"男性",genderO:"その他",familyS:"1人",familyM:"2〜3人",familyL:"4人以上",sourceZalo:"Zalo",sourceFB:"Facebook",sourceRef:"知人の紹介",sourceMkt:"市場・店頭",sourceOth:"その他"},
vi:{hdrCart:"Giỏ hàng",shopTitle:"🥦 Rau tuần này",cartTtl:"🛒 Giỏ hàng",cartBack:"← Tiếp tục mua",sumQty:"Số lượng",sumTot:"Tổng cộng",toInfo:"Tiến hành mua",infoTtl:"📋 Thông tin đặt hàng",infoBack:"← Quay lại",fcCust:"🙋 Thông tin khách hàng",fcDel:"🛵 Hình thức nhận",fcPay:"Thanh toán",fcNote:"📝 Ghi chú",flName:"Họ và tên",flPhone:"Số điện thoại",flZalo:"Zalo ID",flAddr:"Địa chỉ",flEmail:"Email",req:"Bắt buộc",delDeliver:"Giao hàng",delPickup:"Nhận trực tiếp",delShip:"Bưu điện",payCash:"Tiền mặt",toConfirm:"Xem lại đơn hàng",confirmTtl:"✔ Xác nhận",confirmBack:"← Sửa thông tin",ccLblItems:"Sản phẩm",ccLblTot:"Tổng cộng",ccLblCust:"Thông tin khách",ccLblDel:"Hình thức nhận",ccLblPay:"Thanh toán",ccLblNote:"Ghi chú",placeLbl:"Xác nhận đặt hàng",rptTtl:"Hóa đơn / Phiếu đặt",rmlNo:"Mã đơn",rmlDate:"Ngày giờ",rmlName:"Họ tên",rmlPhone:"Điện thoại",rmlAddr:"Địa chỉ",rmlEmail:"Email",rmlDel:"Hình thức",rmlPay:"Thanh toán",rptItemsTtl:"Chi tiết đơn hàng",rthItem:"Sản phẩm",rthQty:"SL",rthPrice:"Đơn giá",rthSub:"Thành tiền",rgtLbl:"Tổng cộng",rntLbl:"Ghi chú：",rctShop:"Tiếp tục mua",rctHist:"📋 Lịch sử",rptFarm:"Cảm ơn bạn đã đặt hàng. Hàng sẽ được giao vào Chủ nhật từ cửa hàng em Hanoi.<br>Nếu có thắc mắc, vui lòng liên hệ qua LINE chính thức của NICONICOYASAI:<br><a href='https://lin.ee/R9dAJtD' target='_blank' style='color:var(--g1);font-weight:700;'>https://lin.ee/R9dAJtD</a><br>NICO NICO YASAI · Trang trại Bản Hồ",pg1:"Giỏ hàng",pg2:"Thông tin",pg3:"Xác nhận",pg4:"Hoàn tất",heroEyebrow:"🌿 Trồng không hóa chất",heroH1:"Xây dựng mối quan hệ mặt đối mặt<br>giữa người sản xuất và người tiêu dùng",heroSub:"Rau củ tươi ngon được trồng cẩn thận trên đất Việt Nam",spAll:"🌸 Tất cả",spSpring:"Xuân",spSummer:"Hè",spAutumn:"Thu",spWinter:"Đông",spYearround:"Quanh năm",shopTitleYearround:"🌿 Rau quanh năm",badgeNew:"NEW",badgeRec:"⭐ Nổi bật",badgeSeason:"🌿 Đặc sản",badgeNone:"Không có",shopTitleSpring:"🌸 Rau mùa Xuân",shopTitleSummer:"☀️ Rau mùa Hạ",shopTitleAutumn:"🍂 Rau mùa Thu",shopTitleWinter:"❄️ Rau mùa Đông",drawerTtl:"🌿 Bảng quản lý NICO NICO YASAI",dtOrders:"📋 Đơn hàng",dtDB:"🗄 Dữ liệu",dtStats:"📊 Doanh thu",dtProducts:"🥦 Sản phẩm",dtNotify:"🔔 Thông báo nhập hàng",dtSite:"⚙️ Cài đặt",ocToggleDone:"✅ Đánh dấu hoàn thành",ocViewReceipt:"🖨 Xem hóa đơn",pubToggleOn:"🟢 Đang bán",pubToggleOff:"🔴 Ẩn đi",adminLangNote:"Chọn ngôn ngữ bảng quản lý:",ejWizTitle:"📧 Thiết lập gửi email tự động",ejStep1:"Bước 1: Đăng ký miễn phí tại emailjs.com",ejStep2:"Bước 2: Điền thông tin bên dưới",ejTestBtn:"🧪 Gửi email thử",ejSaveBtn:"💾 Lưu cài đặt",ejTestSuccess:"✅ Gửi thử thành công! Email đang hoạt động.",ejTestFail:"❌ Gửi thất bại. Kiểm tra lại Service ID / Template ID / Public Key.",noOrders:"Chưa có đơn hàng nào 📭",stockLabel:"Tồn kho",priceLabel:"Giá bán",saveProduct:"💾 Lưu sản phẩm",deleteProduct:"🗑 Xóa",addProductBtn:"➕ Thêm sản phẩm mới",publishAll:"✅ Hiện tất cả",hideAll:"🔴 Ẩn tất cả",seasonOnly:"🌸 Chỉ hiện theo mùa",exportData:"⬇ Tải xuống CSV",copyData:"📋 Sao chép dữ liệu",clearData:"🗑 Xóa dữ liệu",sheetsUrlLabel:"Liên kết Google Sheets:",sheetsSaveBtn:"Lưu liên kết",notifyEmpty:"Chưa có yêu cầu thông báo nhập hàng",adminQuickStats:"Tổng quan hôm nay",stlOrders:"Tổng đơn",stlRev:"Doanh thu",stlAvg:"TB đơn",stlPub:"Đang bán",peNewLbl:"Thêm sản phẩm",fabLbl:"Quản lý",abarBtnLbl:"Quản lý",noOrders:"Chưa có đơn hàng",stNew:"Mới",stDone:"Hoàn thành",swarnLbl:"Gần hết",soutLbl:"Hết hàng",swTitle:"⚠️ Cảnh báo",pubLbl:"Đang bán",unpubLbl:"Ẩn",cartEmpty:"Giỏ hàng trống",addBtn:"Thêm",stockOut:"Hết hàng",stockLow:"Còn",navShop:"Mua rau",navHist:"Lịch sử",histTtl:"📋 Lịch sử đặt hàng",histBack:"← Quay về trang chủ",savedLbl:"Tự động điền thông tin lần trước",rctShop:"Tiếp tục mua",rctHist:"📋 Lịch sử đặt hàng",rvSubmit:"Gửi đánh giá",rvEdit:"Sửa",histBack:"← Quay lại",histEmpty:"Chưa có lịch sử đặt hàng",rvModalTitle:"Đánh giá",wrTitle:"✍ Viết đánh giá",rvSubmit:"Gửi",ntfModalTitle:"🔔 Thông báo nhập hàng",ntfDesc:"Chúng tôi sẽ thông báo khi sản phẩm có hàng.",ntfSubmit:"🔔 Đăng ký nhận thông báo",ntfSuccess:"✅ Đã đăng ký! Chúng tôi sẽ thông báo khi có hàng.",savedLbl:"Tự động điền thông tin cũ",guideTtl1:"Cách đặt hàng",guideBody1:"Thêm rau củ vào giỏ hàng và đặt mua. Sau khi đặt hàng, chúng tôi sẽ liên hệ với bạn qua Gmail.",guideTtl2:"Về giao hàng",guideTtl3:"Về thanh toán",guideBody3:"Chúng tôi không nhận tiền mặt. Vui lòng thanh toán bằng <b>mã QR ngân hàng (chuyển khoản)</b>.",heroBadge:"🌿 Không thuốc trừ sâu · Không phân bón hóa học",heroH1:"Kết nối trực tiếp<br>giữa nông dân và người tiêu dùng",heroSub:"Rau tươi trồng trên đất Việt Nam được giao trực tiếp đến bạn",farmLbl:"Trang trại NICO NICO YASAI Bản Hồ",rptFarm:"Cảm ơn bạn đã đặt hàng. Hàng sẽ được giao vào Chủ nhật từ cửa hàng em Hanoi.<br>Nếu có thắc mắc, vui lòng liên hệ qua LINE chính thức của NICONICOYASAI:<br><a href='https://lin.ee/R9dAJtD' target='_blank' style='color:var(--g1);font-weight:700;'>https://lin.ee/R9dAJtD</a><br>NICO NICO YASAI · Trang trại Bản Hồ",rvNamePh:"Tên của bạn (tùy chọn)",rvTextPh:"Hãy chia sẻ cảm nhận về rau của bạn...",payVietqr:"🏦 QR Ngân hàng",fcProfil:"👤 Hồ sơ (tùy chọn)",privacyNote:"※Thông tin bạn cung cấp sẽ được bảo mật và chỉ dùng để cải thiện dịch vụ và tối ưu hóa sản phẩm.",flAge:"Độ tuổi",flGender:"Giới tính",flFamily:"Thành phần gia đình",flSource:"Bạn biết đến chúng tôi qua đâu?",flNote:"Ghi chú thêm (thời gian giao hàng mong muốn...)",prog1:"Giỏ hàng",spAll:"Rau tuần này",spSpring:"Xuân",spSummer:"Hạ",spAutumn:"Thu",spWinter:"Đông",prog2:"Thông tin",prog3:"Xác nhận",prog4:"Hoàn tất",selOptional:"-- Chọn (tùy chọn) --",ageOpt1:"20-29 tuổi",ageOpt2:"30-39 tuổi",ageOpt3:"40-49 tuổi",ageOpt4:"50 tuổi trở lên",genderF:"Nữ",genderM:"Nam",genderO:"Khác",familyS:"1 người",familyM:"2-3 người",familyL:"4 người trở lên",sourceZalo:"Zalo",sourceFB:"Facebook",sourceRef:"Bạn bè giới thiệu",sourceMkt:"Chợ / cửa hàng",sourceOth:"Khác"},
en:{hdrCart:"Cart",shopTitle:"🥦 This Week's Vegetables",cartTtl:"🛒 Your Cart",cartBack:"← Continue Shopping",sumQty:"Items",sumTot:"Total",toInfo:"Proceed to Purchase",infoTtl:"📋 Order Information",infoBack:"← Back to Cart",fcCust:"🙋 Customer Info",fcDel:"🛵 Delivery Method",fcPay:"Payment",fcNote:"📝 Notes",flName:"Full Name",flPhone:"Phone Number",flZalo:"Zalo ID",flAddr:"Address",flEmail:"Email Address",req:"Required",delDeliver:"Delivery",delPickup:"Pickup",delShip:"Shipping",payCash:"Cash",toConfirm:"Review Order",confirmTtl:"✔ Order Confirmation",confirmBack:"← Edit Info",ccLblItems:"Items",ccLblTot:"Total",ccLblCust:"Customer Info",ccLblDel:"Delivery",ccLblPay:"Payment",ccLblNote:"Notes",placeLbl:"Place Order",rptTtl:"Receipt & Order",rmlNo:"Order No.",rmlDate:"Date",rmlName:"Name",rmlPhone:"Phone",rmlAddr:"Address",rmlEmail:"Email",rmlDel:"Delivery",rmlPay:"Payment",rptItemsTtl:"Order Details",rthItem:"Item",rthQty:"Qty",rthPrice:"Unit Price",rthSub:"Subtotal",rgtLbl:"Total",rntLbl:"Notes:",rctShop:"Continue Shopping",rctHist:"📋 Order History",rptFarm:"Thank you for your order. Delivery is every Sunday from em Hanoi store.<br>For inquiries, please contact us via our official NICONICOYASAI LINE:<br><a href='https://lin.ee/R9dAJtD' target='_blank' style='color:var(--g1);font-weight:700;'>https://lin.ee/R9dAJtD</a><br>NICO NICO YASAI · Ban Ho Farm",pg1:"Cart",pg2:"Info",pg3:"Review",pg4:"Done",heroEyebrow:"🌿 Pesticide-Free & No Chemical Fertilizers",heroH1:"Farm-to-Table<br>Fresh from Vietnam",heroSub:"Fresh organic vegetables grown with care, delivered directly to you",spAll:"🥬 This Week's Veg",spSpring:"Spring",spSummer:"Summer",spAutumn:"Autumn",spWinter:"Winter",spYearround:"Year-round",shopTitleYearround:"🌿 Year-round Vegetables",badgeNew:"NEW",badgeRec:"⭐ Recommended",badgeSeason:"🌿 In Season",badgeNone:"None",shopTitleSpring:"🌸 Spring Vegetables",shopTitleSummer:"☀️ Summer Vegetables",shopTitleAutumn:"🍂 Autumn Vegetables",shopTitleWinter:"❄️ Winter Vegetables",drawerTtl:"🌿 NICO NICO YASAI Admin",dtOrders:"📋 Orders",dtDB:"🗄 Data",dtStats:"📊 Sales",dtProducts:"🥦 Products",dtNotify:"🔔 Restock",dtSite:"⚙️ Settings",ocToggleDone:"✅ Mark Done",ocViewReceipt:"Receipt",pubToggleOn:"🟢 Public",pubToggleOff:"🔴 Hidden",adminLangNote:"Admin language:",ejWizTitle:"📧 Email Auto-Send Setup",ejStep1:"Step 1: Register at emailjs.com (free)",ejStep2:"Step 2: Enter your credentials",ejTestBtn:"🧪 Test Send",ejSaveBtn:"💾 Save Settings",ejTestSuccess:"✅ Success! Email is working.",ejTestFail:"❌ Failed. Check Service/Template/Public Key.",noOrders:"No orders yet 📭",stockLabel:"Stock",priceLabel:"Price",saveProduct:"💾 Save",deleteProduct:"🗑 Delete",addProductBtn:"➕ Add Product",publishAll:"✅ Publish All",hideAll:"🔴 Hide All",seasonOnly:"🌸 Seasonal Only",exportData:"⬇ Download CSV",copyData:"📋 Copy Data",clearData:"🗑 Clear Data",sheetsUrlLabel:"Google Sheets Link:",sheetsSaveBtn:"Save Link",notifyEmpty:"No restock notifications",adminQuickStats:"Today's Summary",stlOrders:"Total Orders",stlRev:"Total Revenue",stlAvg:"Avg Order",stlPub:"Live Products",peNewLbl:"Add Product",fabLbl:"Admin",abarBtnLbl:"Admin",stNew:"New",stDone:"Done",swarnLbl:"Low Stock",soutLbl:"Out of Stock",swTitle:"⚠️ Stock Warning",pubLbl:"Public",unpubLbl:"Hidden",cartEmpty:"Your cart is empty",addBtn:"Add to Cart",stockOut:"Out of Stock",stockLow:"Only ",navShop:"Shop",navHist:"Order History",histTtl:"📋 Order History",histBack:"← Back to Top",savedLbl:"Auto-fill from last order",rctShop:"Continue Shopping",rctHist:"📋 Order History",rvSubmit:"Submit Review",rvEdit:"Edit",histBack:"← Back",histEmpty:"No order history",rvModalTitle:"Review",wrTitle:"✍ Write a Review",rvSubmit:"Submit",ntfModalTitle:"🔔 Restock Alert",ntfDesc:"We'll email you when this item is back in stock.",ntfSubmit:"🔔 Notify Me",ntfSuccess:"✅ Registered! We'll notify you when it's back.",savedLbl:"Auto-filled from last order",payVietqr:"Bank Transfer (VietQR)",stDone:"Done",stPending:"Pending Payment",histLookup:"Look up by phone",histLookupBtn:"Search",histLookupEmpty:"No orders found for this number",histLookupPlaceholder:"Enter phone number",farmLbl:"Ban Ho NICO NICO YASAI Farm",rptFarm:"Thank you for your order. Delivery is every Sunday from em Hanoi store.<br>For inquiries, please contact us via our official NICONICOYASAI LINE:<br><a href='https://lin.ee/R9dAJtD' target='_blank' style='color:var(--g1);font-weight:700;'>https://lin.ee/R9dAJtD</a><br>NICO NICO YASAI · Ban Ho Farm",payVietqr:"🏦 Bank QR Code",fcProfil:"👤 Profile (optional)",privacyNote:"※Your information will be kept private and used only to improve our service.",flAge:"Age Group",flGender:"Gender",flFamily:"Household Size",flSource:"How did you find us?",flNote:"Delivery time preference, etc.",prog1:"Cart",spAll:"This Week",spSpring:"Spring",spSummer:"Summer",spAutumn:"Autumn",spWinter:"Winter",prog2:"Info",prog3:"Confirm",prog4:"Done",ageOpt1:"20s",ageOpt2:"30s",ageOpt3:"40s",ageOpt4:"50+",genderF:"Female",genderM:"Male",genderO:"Other",familyS:"1 person",familyM:"2-3 people",familyL:"4+ people",sourceZalo:"Zalo",sourceFB:"Facebook",sourceRef:"Friend referral",sourceMkt:"Market / store",sourceOth:"Other",heroBadge:"🌿 No Pesticides · No Chemical Fertilizers",heroH1:"Connecting farmers<br>directly with consumers",heroSub:"Fresh vegetables grown on Vietnamese soil, delivered straight to you",farmLbl:"※Nico Nico Yasai — Ban Ho Farm",guideTtl1:"How to Order",guideBody1:"Add vegetables to your cart and place your order. We will contact you by Gmail after your order is confirmed.",guideTtl2:"Delivery",guideTtl3:"Payment",guideBody3:"We do not accept cash. Payment is by <b>bank QR code (bank transfer) only</b>.",rptFarm:"Thank you for your order. Delivery is every Sunday from em Hanoi store.<br>For inquiries, please contact us via our official NICONICOYASAI LINE:<br><a href='https://lin.ee/R9dAJtD' target='_blank' style='color:var(--g1);font-weight:700;'>https://lin.ee/R9dAJtD</a><br>NICO NICO YASAI · Ban Ho Farm",rvNamePh:"Your name (optional)",rvTextPh:"Share your thoughts about the vegetables...",rvSubmit:"Submit Review"}
};
function T(k){return I[lang][k]||"";}
function setLang(l){
lang=l;
localStorage.setItem("nny_lang",l);
updateLangBtn();
applyI18n(); renderProducts(); renderCartView(); renderHistory();
}
function applyI18n(){
function s(id,k){var e=document.getElementById(id);if(e)e.textContent=T(k);}
function h(id,k){var e=document.getElementById(id);if(e)e.innerHTML=T(k);}
s("guide-ttl1","guideTtl1");h("guide-body1","guideBody1");
s("guide-ttl2","guideTtl2");
(function(){
var el=document.getElementById("guide-body2");
if(!el)return;
var txt=lang==="vi"
?"Hiện tại chỉ giao hàng vào Chủ nhật (trong thời gian thử nghiệm). Mỗi Chủ nhật, chúng tôi tổ chức buổi bán trực tiếp tại cửa hàng em Hanoi (12:00–16:00), đóng gói rau tại đó và giao qua Grab. Bạn cũng có thể nhận hàng trực tiếp tại cửa hàng."
:lang==="en"
?"Currently, delivery is available on Sundays only (trial period). Every Sunday, we hold a direct sales event at em Hanoi store (12:00–16:00), where we pack the vegetables and deliver via Grab. Pickup at the store is also available."
:"現在、日曜日のみの発送となります（試用期間中）。毎週日曜日、em Hanoi店にて直売会を開催（12:00〜16:00）しており、そこから野菜を梱包しGrabにてお届けします。直売会での受け取りも可能です。";
el.innerHTML=txt+'<br><br>📍 <a href="https://maps.app.goo.gl/gY9DihnYPJmGUiAq6" target="_blank" style="color:var(--g1);font-weight:700;">12 P. Nguyễn Văn Ngọc, Cống Vị, Giảng Võ, Hà Nội 100000, Vietnam</a>';
})();
s("guide-ttl3","guideTtl3");h("guide-body3","guideBody3");
h("hero-badge","heroBadge");h("hero-h1","heroH1");
s("hero-sub","heroSub");s("farm-lbl","farmLbl");
(function(){
var ni=document.getElementById("rv-name-inp");
if(ni)ni.placeholder=T("rvNamePh");
var ti=document.getElementById("rv-text-inp");
if(ti)ti.placeholder=T("rvTextPh");
var sb=document.getElementById("rv-submit-btn");
if(sb)sb.textContent=T("rvSubmit");
})();
s("nav-shop-lbl","navShop");s("nav-hist-lbl","navHist");
s("sp-all","spAll");s("sp-spring","spSpring");s("sp-summer","spSummer");s("sp-autumn","spAutumn");s("sp-winter","spWinter");s("sp-yearround","spYearround");
var pg=["pg1l","pg2l","pg3l","pg4l"],pk=["prog1","prog2","prog3","prog4"];
pg.forEach(function(id,i){var e=document.getElementById(id);if(e)e.textContent=T(pk[i]);});
s("farm-lbl","farmLbl");
h("rpt-farm","rptFarm");
["cart-back","cart-cont"].forEach(function(id){h(id,"cartBack");});
h("rct-shop","rctShop");h("rct-hist","rctHist");
["info-back","info-back-btn"].forEach(function(id){h(id,"infoBack");});
h("hist-back","histBack");
s("saved-lbl","savedLbl");
(function(){
var fn=document.getElementById("fl-name");
if(fn){fn.innerHTML=T("flName")+' <span class="req">'+T("req")+'</span>';}
h("info-back","infoBack");
var ni=document.getElementById("inp-note");
if(ni)ni.placeholder=T("flNote");
})();
(function(){
var cb=document.getElementById("confirm-back-btn");
if(cb)cb.innerHTML=T("confirmBack");
})();
s("pay-vietqr","payVietqr");
s("fc-profile","fcProfil");
(function(){
var pn=document.getElementById("profile-privacy-note");
if(pn)pn.textContent=T("privacyNote");
s("fl-age","flAge");s("fl-gender","flGender");s("fl-family","flFamily");s("fl-source","flSource");
var fn=document.getElementById("fl-note");if(fn)fn.placeholder=T("flNote");
})();
(function(){
document.querySelectorAll("select.finput option").forEach(function(opt){
var k="data-"+lang;
if(opt.getAttribute(k))opt.textContent=opt.getAttribute(k);
});
})();
s("hdr-cart-lbl","hdrCart"); s("shop-title","shopTitle"); s("cart-ttl","cartTtl");
s("cart-back","cartBack"); s("sum-qty-lbl","sumQty"); s("sum-tot-lbl","sumTot");
s("to-info-lbl","toInfo"); s("info-ttl","infoTtl"); s("info-back","infoBack");
s("fc-cust","fcCust"); s("fc-del","fcDel"); s("fc-pay","fcPay"); s("fc-note","fcNote");
s("del-deliver","delDeliver"); s("del-pickup","delPickup"); s("del-ship","delShip"); s("pay-cash","payCash");
s("to-confirm-lbl","toConfirm"); s("confirm-ttl","confirmTtl"); s("confirm-back","confirmBack");
s("cc-lbl-items","ccLblItems"); s("cc-lbl-tot","ccLblTot"); s("cc-lbl-cust","ccLblCust");
s("cc-lbl-del","ccLblDel"); s("cc-lbl-pay","ccLblPay"); s("cc-lbl-note","ccLblNote");
s("place-lbl","placeLbl"); s("rpt-ttl","rptTtl");
s("rml-no","rmlNo"); s("rml-date","rmlDate"); s("rml-name","rmlName"); s("rml-phone","rmlPhone");
s("rml-addr","rmlAddr"); s("rml-email","rmlEmail"); s("rml-del","rmlDel"); s("rml-pay","rmlPay");
s("rpt-items-ttl","rptItemsTtl"); s("rth-item","rthItem"); s("rth-qty","rthQty");
s("rth-price","rthPrice"); s("rth-sub","rthSub"); s("rgt-lbl","rgtLbl");
s("rnt-lbl","rntLbl");
s("rct-shop","rctShop"); s("rct-hist","rctHist");
function sText(id,t){var e=document.getElementById(id);if(e)e.textContent=t;}
function sHTML(id,t){var e=document.getElementById(id);if(e)e.innerHTML=t+'</span>';}
var fp=document.getElementById("fl-phone"); if(fp) fp.innerHTML=T("flPhone")+' <span class="req">'+T("req")+'</span>';
var fa=document.getElementById("fl-addr"); if(fa) fa.innerHTML=T("flAddr")+' <span class="req">'+T("req")+'</span>';
var fe=document.getElementById("fl-email"); if(fe) fe.innerHTML=T("flEmail")+' <span class="req">'+T("req")+'</span>';
var fz=document.getElementById("fl-zalo"); if(fz) fz.textContent=T("flZalo");
var qa=document.getElementById("qck-pub-all"); if(qa) qa.textContent=T("publishAll");
var qh=document.getElementById("qck-hide-all"); if(qh) qh.textContent=T("hideAll");
var qs=document.getElementById("qck-season"); if(qs) qs.textContent=T("seasonOnly");
var dbExp=document.getElementById("db-exp-btn"); if(dbExp) dbExp.textContent=T("exportData");
var dbCp=document.getElementById("db-copy-btn"); if(dbCp) dbCp.textContent=T("copyData");
var dbCl=document.getElementById("db-clr-btn"); if(dbCl) dbCl.textContent=T("clearData");
var shLbl=document.getElementById("sheets-url-label"); if(shLbl) shLbl.textContent="📊 "+T("sheetsUrlLabel");
var ejWiz=document.getElementById("ej-wiz-title"); if(ejWiz) ejWiz.textContent=T("ejWizTitle");
var ejS1=document.getElementById("ej-step1"); if(ejS1) ejS1.textContent=T("ejStep1");
var ejS2=document.getElementById("ej-step2"); if(ejS2) ejS2.textContent=T("ejStep2");
var ejSv=document.getElementById("ej-save-btn"); if(ejSv) ejSv.textContent=T("ejSaveBtn");
var ejTb=document.getElementById("ej-test-btn"); if(ejTb) ejTb.textContent=T("ejTestBtn");
var peNB=document.getElementById("pe-new-btn-el"); if(peNB) peNB.textContent=T("addProductBtn");
var fcl=document.getElementById("fc-count"); if(fcl) fcl.textContent=cartCount()+(L("点","items","sp"));
}
var curView = "shop";
function showView(v){
document.querySelectorAll(".view").forEach(function(el){el.classList.remove("on");});
document.getElementById("view-"+v).classList.add("on");
curView=v;
var hero=document.getElementById("hero-wrap"); if(hero) hero.style.display=v==="shop"?"":"none";
var pb=document.getElementById("prog-bar");
var inCheckout=(v==="cart"||v==="info"||v==="confirm");
if(pb) pb.classList.toggle("show",inCheckout);
updateProg(v);
window.scrollTo({top:0,behavior:"smooth"});
document.getElementById("nav-shop").classList.toggle("active",v==="shop"||v==="cart"||v==="info"||v==="confirm"||v==="receipt");
document.getElementById("nav-hist").classList.toggle("active",v==="history");
}
function updateProg(v){
var map={cart:0,info:1,confirm:2,receipt:3};
var cur=(map[v]!==undefined)?map[v]:-1;
["pg1","pg2","pg3","pg4"].forEach(function(id,i){
var el=document.getElementById(id);el.classList.remove("on","done");
if(i===cur)el.classList.add("on"); else if(i<cur)el.classList.add("done");
});
}
function goShop(){showView("shop");}
function goCart(){renderCartView();showView("cart");}
function goHistory(){renderHistory();showView("history");}
function goInfo(){
if(!Object.keys(cart).length){alert(L("カートに商品を追加してください","Please add items to cart","Vui lòng thêm sản phẩm"));return;}
loadSaved(); showSavedBadge(); showView("info");
}
function goConfirm(){
if(selDel==="deliver"&&_shippingLoading){alert(L("送料を計算中です","Calculating shipping fee. Please wait.","Đang tính phí giao hàng."));return;}
var _av2=document.getElementById("inp-addr")?document.getElementById("inp-addr").value.trim():"";if(selDel==="deliver"&&_av2&&_shippingFee===0&&!_shippingLoading){var _tcb=document.querySelector('[onclick="goConfirm()"]');if(_tcb){_tcb.disabled=true;_tcb.textContent=L("計算中...","Calculating...","Đang tính...");}calcShippingFee(_av2,function(){if(_tcb){_tcb.disabled=false;_tcb.textContent=L("✔ 注文内容を確認する","✔ Review Order","✔ Xem lại đơn hàng");}goConfirm();});return;}
var fields=["inp-name","inp-phone","inp-addr","inp-email"];
var ok=true;
fields.forEach(function(id){
var el=document.getElementById(id); el.classList.remove("err");
if(!el.value.trim()){el.classList.add("err");ok=false;}
});
var em=document.getElementById("inp-email");
if(em.value.trim()&&!/^[^@]+@[^@]+\.[^@]+$/.test(em.value.trim())){em.classList.add("err");ok=false;}
if(!ok){alert(L("必須項目を正しく入力してください","Please fill in all required fields","Vui lòng điền đầy đủ thông tin bắt buộc"));return;}
fields.forEach(function(id){document.getElementById(id).classList.remove("err");});
buildConfirm(); showView("confirm");
}
function setSeason(s){
season=s;
document.querySelectorAll(".sp-btn").forEach(function(el){el.classList.remove("on");});
var spEl=document.getElementById("sp-"+s);if(spEl)spEl.classList.add("on");
renderProducts();
var titleEl=document.getElementById("shop-title");
if(titleEl){
var titleKey={spring:"shopTitleSpring",summer:"shopTitleSummer",autumn:"shopTitleAutumn",winter:"shopTitleWinter",yearround:"shopTitleYearround"}[s];
titleEl.textContent=titleKey?T(titleKey):T("shopTitle");
}
var isAll=(s==="all");
var cartBtn=document.getElementById("cart-btn");
if(cartBtn)cartBtn.style.display=isAll?"":"none";
var floatCart=document.getElementById("float-cart");
if(floatCart)floatCart.style.display=isAll?"":"none";
}
function vnd(n){return n.toLocaleString("vi-VN")+" ₫";}
function stars(rating,count){
var s="";
for(var i=1;i<=5;i++) s+='<span class="s'+(i<=rating?" on":"")+'">★</span>';
return '<span class="star-row">'+s+'</span>'+(count!==undefined?'<span class="star-count">('+count+')</span>':"");
}
function avgRating(pid){
var rv=REVIEWS[pid]||[];if(!rv.length)return 0;
return Math.round(rv.reduce(function(s,r){return s+r.rating;},0)/rv.length);
}
function renderProducts(){
var grid=document.getElementById("pgrid");
if(!grid){console.error("[NNY] pgrid not found");return;}
var list=PRODUCTS.filter(function(p){
if(season==="all") return p.pub!==false;
if(season==="yearround") return p.pub!==false&&p.season==="all";
var id=Number(p.id);
if(season==="spring") return [1,5].indexOf(id)>=0;
if(season==="summer") return [12,13,14,15,16,17,18,19,20].indexOf(id)>=0;
if(season==="autumn") return [12,13,17,18,19,20].indexOf(id)>=0;
if(season==="winter") return [13,21,22,23,24,25,26,27].indexOf(id)>=0;
return false;
});
if(season==="all"&&list.length===0&&PRODUCTS.length>0){list=PRODUCTS.slice();}
if(list.length===0){grid.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:40px;color:#888;">商品が見つかりません (PRODUCTS:'+PRODUCTS.length+'件, season:'+season+')</div>';return;}
var cnt=document.getElementById("shop-count");if(cnt)cnt.textContent=list.length+(L(" 品"," items"," sp"));
var html="";
list.forEach(function(p,idx){
var nm=L(p.ja,p.en||p.ja,p.vi), nmsub=L(p.vi,p.vi,p.ja);
var desc=L(p.dja,p.den||p.dja,p.dvi), unit=L(p.unit,p.uniten||p.unit,p.unitvi);
var inCart=cart[p.id]||0;var _totalStock=p.stock||0;if(p.variants&&p.variants.length>0){var _vTotal=0,_vStock=0;p.variants.forEach(function(v){var ck=p.id+"_"+v;_vTotal+=(cart[ck]?cart[ck]:0);var sk="stock"+v.replace("g","");_vStock+=(p[sk]!==undefined?p[sk]:p.stock);});inCart=_vTotal;_totalStock=_vStock;}var oos=(season==="all"&&_totalStock===0);var low=(season==="all"&&_totalStock>0&&_totalStock<=5);
var _seasonBadge="";
var _rb=p.badge||"";var _tb=_rb==="NEW"?T("badgeNew"):_rb==="おすすめ"?T("badgeRec"):_rb==="旬"?T("badgeSeason"):_rb;
var bdgTxt=oos?L("在庫なし","Out of Stock","Hết hàng"):(_seasonBadge||_tb);
var bdgCls=oos?"badge-grey":_seasonBadge?"badge-green":"badge-gold";
var rv=REVIEWS[p.id]||[], avg=avgRating(p.id);
var avgTxt=rv.length?stars(avg)+'<span class="star-count">('+rv.length+')</span>':'';
var rvPreview='';
if(rv.length){
var recent=rv.slice(-2).reverse();
rvPreview='<div class="pcard-reviews">';
recent.forEach(function(r){
rvPreview+='<div class="pcard-rv-item">'
+'<span class="pcard-rv-stars">'+stars(r.rating)+'</span>'
+'<span class="pcard-rv-name">'+(r.name||L("匿名","Anonymous","Ẩn danh"))+'</span>'
+'<div class="pcard-rv-text">'+(r.text||'')+'</div>'
+'</div>';
});
if(rv.length>2)rvPreview+='<div class="pcard-rv-more" onclick="showAllReviews('+p.id+')">'+L("すべてのレビューを見る（"+rv.length+"件）","See all reviews ("+rv.length+")","Xem tất cả đánh giá ("+rv.length+")")+'</div>';
rvPreview+='</div>';
}
var starHtml='<div class="pcard-stars">'+avgTxt+'</div>';
var btnHtml='';
var imgHtml=p.img?'<img class="pcard-photo" src="'+p.img+'" style="display:block">':"";
var emojiStyle=p.img?"display:none":"";
html+='<div class="pcard'+(oos?" oos":"")+'" style="animation-delay:'+(idx*0.04)+'s">';
html+='<div class="pcard-img" id="cimg-'+p.id+'">';
html+=imgHtml;
html+='<span class="pcard-emoji" style="'+emojiStyle+'">'+p.e+'</span>';
html+='</div>';
if(bdgTxt) html+='<span class="pcard-badge '+bdgCls+'">'+bdgTxt+'</span>';
html+='<div class="pcard-body">';
html+='<div class="pcard-name">'+nm+'</div>';
html+='<div class="pcard-sub">'+nmsub+'</div>';
html+=starHtml;
html+='<div class="pcard-desc">'+desc+'</div>';
html+='<div class="pcard-foot">';if(p.variants&&p.variants.length>0){var _prices=p.variants.map(function(v){var pk='price'+v.replace('g','');return p[pk]||p.price;});var _minP=Math.min.apply(null,_prices);var _maxP=Math.max.apply(null,_prices);html+='<span class="pcard-price">'+vnd(_minP)+(_minP!==_maxP?' - '+vnd(_maxP):'')+'</span>';}else{html+='<span class="pcard-price">'+vnd(p.price)+'</span><span class="pcard-unit"> / '+unit+'</span>';}html+='</div>';
html+=rvPreview;
var isAllSeason=(season==="all");
var avgStar=avgRating(p.id);
var starPreview='<div class="pcard-star-row">';
for(var si=1;si<=5;si++){
starPreview+='<span class="pcard-star-ico'+(si<=Math.round(avgStar)?' on':'')+'">★</span>';
}
if(rv.length>0){
starPreview+='<span class="pcard-star-cnt">'+rv.length+L(" 件"," reviews"," đánh giá")+'</span>';
}
starPreview+='</div>';
html+=starPreview;
var rvActHtml='<div class="pcard-rv-actions">';
if(isAllSeason){
var inCart=cart[p.id]||0;
var atLimit=_totalStock>0&&inCart>=_totalStock;
var btnDisabled=oos||atLimit;
var btnLabel=oos?L("在庫なし","Out of Stock","Hết hàng"):atLimit?L("上限 "+p.stock+"個","Max "+p.stock,"Tối đa "+p.stock):L("🛒 カートへ","🛒 Add","🛒 Thêm");
if(p.variants&&p.variants.length>0){var _sid='vsel-'+p.id;var _opts='';p.variants.forEach(function(v){var pk='price'+v.replace('g','');var pv=p[pk]||p.price;_opts+='<option value="'+v+'_'+pv+'">'+v+' - '+vnd(pv)+'</option>';});rvActHtml+='<div style="display:flex;flex-direction:column;gap:6px;width:100%;"><select id="'+_sid+'" onclick="event.stopPropagation()" style="width:100%;padding:10px 12px;border:2px solid var(--g3);border-radius:8px;font-size:14px;font-weight:700;font-family:inherit;background:var(--gp);color:var(--g2);cursor:pointer;">'+_opts+'</select>';if(btnDisabled){rvActHtml+='<button class="add-btn pcard-add" style="width:100%;" disabled>'+btnLabel+'</button>';}else{var _btnClick='(function(){var s=document.getElementById(\''+_sid+'\');if(!s)return;var pts=s.value.split(\'_\');addVariantToCart('+p.id+',pts[0],parseInt(pts[1]));})()';rvActHtml+='<button class="add-btn pcard-add" style="width:100%;" onclick="'+_btnClick+'">'+btnLabel+'</button>';}rvActHtml+='</div>';}else{rvActHtml+='<button class="add-btn pcard-add" onclick="addToCart('+p.id+')" '+(btnDisabled?'disabled style="opacity:.4;cursor:not-allowed;"':'')+'>'+btnLabel+'</button>';}
}
if(rv.length>0){
rvActHtml+='<button class="rv-all-btn" onclick="openAllReviews('+p.id+')">💬 '+L("レビューを見る","See Reviews","Xem đánh giá")+'</button>';
}
rvActHtml+='<button class="rv-write-btn" onclick="openReview('+p.id+')">✍ '+L("レビューを書く","Write Review","Viết đánh giá")+'</button>';
rvActHtml+='</div>';
html+=rvActHtml;
html+='</div></div>';
});
grid.innerHTML=html;
list.forEach(function(p){
var z=document.getElementById("cimg-"+p.id);if(!z)return;
z.addEventListener("dragover",function(e){e.preventDefault();z.classList.add("drag-over");});
z.addEventListener("dragleave",function(){z.classList.remove("drag-over");});
z.addEventListener("drop",function(e){e.preventDefault();z.classList.remove("drag-over");var f=e.dataTransfer.files[0];if(f&&f.type.startsWith("image/"))loadImg(f,p.id);});
});
updateCartBtn();
}
function handleImg(ev,id){var f=ev.target.files[0];if(!f)return;loadImg(f,id);}
function loadImg(f,id){var r=new FileReader();r.onload=function(e){var p=PRODUCTS.find(function(x){return x.id===id;});if(!p)return;p.img=e.target.result;renderProducts();};r.readAsDataURL(f);}
function addToCart(id){
var p=PRODUCTS.find(function(x){return x.id===id;});
if(!p||p.stock===0)return;
var cur=cart[id]||0;
if(p.stock>0&&cur>=p.stock){
showToast(L("在庫上限に達しています（残り"+p.stock+"個）","Stock limit reached ("+p.stock+" left)","Đã đạt giới hạn tồn kho (còn "+p.stock+")"));
return;
}
cart[id]=cur+1;
renderProducts();
bounceCart();
}
function chgQty(id,d){cart[id]=(cart[id]||0)+d;if(cart[id]<=0){delete cart[id];delete CART_META[id];}renderProducts();if(curView==="cart")renderCartView();}
function cartTotal(){return Object.keys(cart).reduce(function(s,ck){var meta=CART_META[ck];var price=meta?meta.price:0;if(!price){var pid=ck.split("_")[0];var p=PRODUCTS.find(function(x){return x.id==pid;});price=p?p.price:0;}return s+price*(cart[ck]||0);},0);}
function cartCount(){return Object.values(cart).reduce(function(a,b){return a+b;},0);}
function updateCartBtn(){
var n=cartCount(), tot=cartTotal();
document.getElementById("cart-badge").textContent=n;
document.getElementById("cart-btn").classList.toggle("has",n>0);
var fc=document.getElementById("float-cart");if(fc){fc.classList.toggle("on",n>0);document.body.classList.toggle("has-cart",n>0);}
var fb=document.getElementById("fc-bubble");if(fb)fb.textContent=n;
var fcn=document.getElementById("fc-count");if(fcn)fcn.textContent=n+(L("点","items","sp"));
var ft=document.getElementById("fc-total");if(ft)ft.textContent=vnd(tot);
}
function bounceCart(){var fi=document.getElementById("fc-icon");if(!fi)return;fi.classList.remove("bounce");void fi.offsetWidth;fi.classList.add("bounce");setTimeout(function(){fi.classList.remove("bounce");},400);}
function renderCartView(){var entries=Object.keys(cart),el=document.getElementById("cart-list-el");if(!entries.length){el.innerHTML='<div class="cart-empty"><div class="cart-empty-ico">🛒</div><div>'+L("カートは空です","Cart is empty","Giỏ hàng trống")+'</div></div>';document.getElementById("sum-qty-val").textContent="0"+L("点","items","sp");document.getElementById("sum-tot-val").textContent=vnd(0);return;}var html="";entries.forEach(function(ck){var qty=cart[ck];if(!qty)return;var meta=CART_META[ck];var pid=meta?meta.id:(ck.indexOf("_")>0?ck.split("_")[0]:ck);var p=PRODUCTS.find(function(x){return Number(x.id)===Number(pid);});if(!p)return;var price=meta?meta.price:p.price;var unit=L(p.unit,p.uniten||p.unit,p.unitvi);var nm=L(p.ja,p.en||p.ja,p.vi);var dispName=nm+(meta&&meta.variant?" "+meta.variant:"");html+='<div class="cart-row"><div class="cart-emoji">'+p.e+'</div><div class="cart-info"><div class="cart-name">'+dispName+'</div><div class="cart-sub">'+vnd(price)+' / '+unit+'</div></div><div class="cart-ctrl"><button class="cqbtn" onclick="chgVariantQty(Object.keys(cart)['+entries.indexOf(ck)+'],-1)">−</button><span class="cqnum">'+qty+'</span><button class="cqbtn" onclick="chgVariantQty(Object.keys(cart)['+entries.indexOf(ck)+'],1)">＋</button></div><div class="cart-price">'+vnd(qty*price)+'</div></div>';});el.innerHTML=html;document.getElementById("sum-qty-val").textContent=cartCount()+L("点","items","sp");document.getElementById("sum-tot-val").textContent=vnd(cartTotal());}
function buildConfirm(){
var tot=0, html="";
Object.keys(cart).forEach(function(ck){var qty=cart[ck];var meta=CART_META[ck];var pid=meta?meta.id:(ck.indexOf("_")>0?ck.split("_")[0]:ck);var p=PRODUCTS.find(function(x){return Number(x.id)===Number(pid);});if(!p)return;
var price=meta?meta.price:p.price;var nm=L(p.ja,p.en||p.ja,p.vi)+(meta&&meta.variant?" "+meta.variant:""); tot+=qty*price;
html+='<div class="cc-item"><span>'+p.e+' '+nm+' × '+qty+'</span><span style="font-weight:700">'+vnd(qty*price)+'</span></div>';
});
document.getElementById("cc-items").innerHTML=html;
document.getElementById("cc-tot-val").textContent=vnd(tot);
var _sf=selDel==="deliver"?_shippingFee:0,_gt=tot+_sf+(selDel==="deliver"?10000:0);
var _sr=document.getElementById("cc-ship-row");if(_sr){if(_sf>0){_sr.style.display="";var _sv=document.getElementById("cc-ship-val");if(_sv)_sv.textContent=vnd(_sf+10000);}else _sr.style.display="none";}
var _gr=document.getElementById("cc-grand-row");if(_gr){if(_sf>0){_gr.style.display="";var _gv=document.getElementById("cc-grand-val");if(_gv)_gv.textContent=vnd(_gt);}else _gr.style.display="none";}
var n=document.getElementById("inp-name").value, ph=document.getElementById("inp-phone").value,
z=document.getElementById("inp-zalo").value, a=document.getElementById("inp-addr").value, em=document.getElementById("inp-email").value;
document.getElementById("cc-cust").innerHTML=n+"<br>"+ph+(z?" · Zalo:"+z:"")+"<br>"+a+(em?"<br>📧 "+em:"");
var dmap={deliver:T("delDeliver"),pickup:T("delPickup")};
document.getElementById("cc-del").textContent=dmap[selDel]||selDel;
var pmap={momo:"💜 MoMo",zalopay:"💙 ZaloPay",vnpay:"❤️ VNPay"};
document.getElementById("cc-pay").textContent=pmap[selPay]||selPay;
var note=document.getElementById("inp-note").value;
document.getElementById("cc-note-sec").style.display=note?"":"none";
document.getElementById("cc-note").textContent=note;
var lock=document.getElementById("pay-lock");
if(lock){
if(selPay!=="cash"){
lock.classList.add("show");
var payName={momo:"MoMo",zalopay:"ZaloPay",vnpay:"VNPay",vietqr:"銀行振込"}[selPay]||selPay;
document.getElementById("pay-lock-txt").textContent=(lang==="ja"?"🏦 銀行振込QRコードが表示されます。スキャンして支払い完了後に注文が確定します。":"🏦 Mã QR ngân hàng sẽ hiển thị. Quét và thanh toán để xác nhận đơn hàng.");
} else lock.classList.remove("show");
}
}
function placeOrder(){
var no="#NNY-"+String(Math.floor(Math.random()*9000)+1000);
var ts=new Date().toLocaleString("ja-JP"), tot=cartTotal()+(selDel==="deliver"?_shippingFee+10000:0);
var name=document.getElementById("inp-name").value, phone=document.getElementById("inp-phone").value,
zalo=document.getElementById("inp-zalo").value, addr=document.getElementById("inp-addr").value,
email=document.getElementById("inp-email").value, note=document.getElementById("inp-note").value;
var items=[];
Object.keys(cart).forEach(function(ck){var qty=cart[ck];if(!qty)return;var meta=CART_META[ck];var pid=meta?meta.id:(ck.indexOf("_")>0?ck.split("_")[0]:ck);var p=PRODUCTS.find(function(x){return Number(x.id)===Number(pid);});if(!p)return;var price=meta?meta.price:p.price;var variant=meta?meta.variant:"";var nm_ja=p.ja+(variant?" "+variant:""),nm_vi=p.vi+(variant?" "+variant:"");var unit=p.unit,unitvi=p.unitvi;
items.push({id:p.id,qty:qty,ja:nm_ja,vi:nm_vi,e:p.e,price:price,unit:unit,unitvi:unitvi});});
var shipFeeVal=selDel==="deliver"?_shippingFee+10000:0;
pendingOrder={no:no,ts:ts,tot:tot,name:name,phone:phone,zalo:zalo,addr:addr,email:email,delivery:selDel,payment:selPay,note:note,items:items,status:"new",shippingFee:shipFeeVal};
if(selPay==="vietqr"){showPayModal();}
else{showQR(selPay);}
}
function finalizeOrder(){
if(!pendingOrder)return;
var order=pendingOrder; pendingOrder=null;
order.status=(order.payment==="vietqr")?"pending_payment":"new";
order.screenshot=pendingScreenshot||null;
pendingScreenshot=null;
Object.keys(cart).forEach(function(id){var p=PRODUCTS.find(function(x){return x.id==id;});if(p)p.stock=Math.max(0,p.stock-cart[id]);});
ORDERS.push(order);
ORDER_HISTORY.unshift(order);
saveOrderHistory();
try{localStorage.setItem("nny_orders",JSON.stringify(ORDERS));}catch(e){}
saveProducts();
Object.keys(cart).forEach(function(id){
var p=PRODUCTS.find(function(x){return x.id==id;});
if(p&&typeof fbSaveProduct==="function")fbSaveProduct(p);
});
if(order.screenshot&&typeof uploadScreenshot==="function"&&fbDb){
var _ssData=order.screenshot;
order.screenshot=null;
if(typeof fbSaveOrder==="function")fbSaveOrder(order);
uploadScreenshot(order.no,_ssData,function(data){
if(data){
order.screenshotUrl=order.no.replace(/[^a-zA-Z0-9]/g,'-');
var _i=ORDERS.findIndex(function(o){return o.no===order.no;});
if(_i>=0){ORDERS[_i].screenshotUrl=order.screenshotUrl;}
try{localStorage.setItem("nny_orders",JSON.stringify(ORDERS));}catch(e){}
if(typeof fbSaveOrder==="function")fbSaveOrder(Object.assign({},order));
}
});
} else {
if(typeof fbSaveOrder==="function")fbSaveOrder(Object.assign({},order,{screenshot:null}));
}
cart={};
saveCust();
renderProducts(); updateCartBtn();
buildReceipt(order);
showView("receipt");
setTimeout(function(){sendEmail(order);},600);
setTimeout(function(){sendToSheets(order);},1000);
}
function buildReceipt(o){
document.getElementById("rmv-no").textContent=o.no;
document.getElementById("rmv-date").textContent=o.ts;
document.getElementById("rmv-name").textContent=o.name;
document.getElementById("rmv-phone").textContent=o.phone+(o.zalo?" · Zalo:"+o.zalo:"");
document.getElementById("rmv-addr").textContent=o.addr;
document.getElementById("rmv-email").textContent=o.email||"—";
var dmap={deliver:T("delDeliver"),pickup:T("delPickup")};
document.getElementById("rmv-del").textContent=dmap[o.delivery]||o.delivery;
var pmap={momo:"💜 MoMo",zalopay:"💙 ZaloPay",vnpay:"❤️ VNPay"};
document.getElementById("rmv-pay").textContent=pmap[o.payment]||o.payment;
var rhtml="";
(o.items||[]).forEach(function(item){var nm=lang==="ja"?item.ja:item.vi, unit=lang==="ja"?item.unit:item.unitvi;
rhtml+="<tr><td>"+item.e+" "+nm+"</td><td style='text-align:center'>"+item.qty+" "+unit+"</td><td style='text-align:right'>"+vnd(item.price)+"</td><td style='text-align:right;font-weight:800'>"+vnd(item.qty*item.price)+"</td></tr>";});
var shipFee=o.delivery==="deliver"?(o.shippingFee||0):0;
if(shipFee>0){rhtml+="<tr style='color:var(--muted)'><td colspan='3'>🛵 "+L("送料（Grab）","Shipping fee","Phí giao hàng")+"</td><td style='text-align:right;font-weight:800'>"+vnd(shipFee)+"</td></tr>";}
document.getElementById("rpt-rows").innerHTML=rhtml;
document.getElementById("rgt-val").textContent=vnd(o.tot);
document.getElementById("rpt-note-box").style.display=o.note?"":"none";
document.getElementById("rnt-val").textContent=o.note;
}
function renderHistory(){
var el=document.getElementById("hist-list-el");
var lookupHtml='<div class="hist-lookup-box">'
+'<div class="hist-lookup-ttl">📞 '+T("histLookup")+'</div>'
+'<div class="hist-lookup-row">'
+'<input class="hist-lookup-inp" id="hist-phone-inp" type="tel" placeholder="'+T("histLookupPlaceholder")+'">'
+'<button class="hist-lookup-btn" onclick="lookupOrdersByPhone()">'+T("histLookupBtn")+'</button>'
+'</div>'
+'<div id="hist-lookup-result"></div>'
+'</div>';
if(!ORDER_HISTORY.length){
el.innerHTML=lookupHtml+'<div class="hist-empty"><div class="hist-empty-ico">📋</div><div>'+T("histEmpty")+'</div></div>';return;
}
var html='<div class="hist-list">';
ORDER_HISTORY.forEach(function(o,i){
var items=o.items.map(function(i){return i.e+" "+(lang==="ja"?i.ja:i.vi)+" ×"+i.qty;}).join("　");
var stCls=o.status==="done"?"hst-done":"hst-new";
var stLbl=o.status==="done"?T("stDone"):T("stNew");
html+='<div class="hist-card">';
html+='<div class="hist-card-hdr"><span class="hist-no">'+o.no+'</span><span class="hist-date">'+o.ts+'</span><span class="hist-status '+stCls+'">'+stLbl+'</span></div>';
html+='<div class="hist-card-body">';
html+='<div class="hist-items">'+items+'</div>';
html+='<div class="hist-tot">'+vnd(o.tot)+'</div>';
html+='<div class="hist-actions"><button class="hist-act-btn" onclick="showHistReceiptByIdx('+i+')">🖨 '+(lang==="ja"?"領収証を見る":"Xem hóa đơn")+'</button></div>';
html+='</div></div>';
});
html+='</div>';
el.innerHTML=html;
}
function showHistReceipt(no){
var o=ORDER_HISTORY.find(function(x){return x.no===no;}); if(!o)return;
buildReceipt(o); showView("receipt");
}
function showHistReceiptByIdx(i){
var rev=[].concat(ORDER_HISTORY); var o=rev[i]; if(!o)return;
buildReceipt(o); showView("receipt");
}
function toggleOStatusByIdx(i){
var rev=[].concat(ORDERS).reverse(); var o=rev[i]; if(!o)return;
o.status=o.status==="new"?"done":"new"; renderAdminOrders(); renderDB();
}
function adminShowReceiptByIdx(i){
var rev=[].concat(ORDERS).reverse(); var o=rev[i]; if(!o)return;
buildReceipt(o); closeAdmin(); showView("receipt");
}
function openReview(pid){
var _rp=PRODUCTS.find(function(x){return x.id===pid;});
var pName=_rp?(lang==="ja"?_rp.ja:_rp.vi):"";
currentReviewProductId=pid;
if(_editingReviewIdx===null)currentRating=0;
document.getElementById("rv-modal-title").textContent=pName;
document.getElementById("wr-title").textContent=
_editingReviewIdx!==null
?L("✍ レビューを編集","✍ Edit Review","✍ Sửa đánh giá")
:T("wrTitle");
if(_editingReviewIdx===null){
document.getElementById("rv-name-inp").value="";
document.getElementById("rv-text-inp").value="";
document.querySelectorAll(".sp").forEach(function(s){s.classList.remove("on");});
}
var rvList=document.getElementById("rv-list");
var rv=REVIEWS[pid]||[];
if(rvList){
var html="";
rv.slice().reverse().forEach(function(r,ri){
var realIdx=rv.length-1-ri;
html+='<div style="padding:10px 0;border-bottom:1px solid var(--border);position:relative;">';
if(r.edited){
html+='<span style="position:absolute;top:10px;right:0;font-size:9px;color:var(--muted);background:var(--gp);border-radius:3px;padding:1px 5px;">'+L("更新","Updated","Đã cập nhật")+'</span>';
}
html+='<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;padding-right:'+(r.edited?"36px":"0")+';">';
html+='<span>'+stars(r.rating)+'</span>';
html+='<span style="font-size:11px;font-weight:700;">'+(r.name||L("匿名","Anonymous","Ẩn danh"))+'</span>';
html+='<span style="font-size:10px;color:var(--muted);">'+r.date+'</span>';
if(!r.sid||r.sid===_mySessionId){html+='<button onclick="editReviewByUser('+pid+','+realIdx+')" style="margin-left:auto;font-size:10px;padding:2px 8px;background:var(--gp);color:var(--g1);border:1px solid var(--g3);border-radius:4px;cursor:pointer;">✏️ '+L('編集','Edit','Sửa')+'</button>';}
html+='</div>';
html+='<div style="font-size:12px;line-height:1.5;color:var(--forest);">'+r.text+'</div>';
html+='</div>';
});
rvList.innerHTML=html;
}
var _rm=document.getElementById("review-modal");document.body.appendChild(_rm);_rm.style.zIndex="99999";_rm.classList.add("open");
}
function editReviewByUser(pid,idx){
var rv=REVIEWS[pid];if(!rv||!rv[idx])return;
var r=rv[idx];
_editingReviewIdx=idx;currentRating=r.rating;
document.querySelectorAll(".sp").forEach(function(s,i){s.classList.toggle("on",i<r.rating);});
var ni=document.getElementById("rv-name-inp");if(ni)ni.value=r.name||"";
var ti=document.getElementById("rv-text-inp");if(ti)ti.value=r.text||"";
var wt=document.getElementById("wr-title");
if(wt)wt.textContent=L("✍ レビューを編集","✍ Edit Review","✍ Sửa đánh giá");
var form=document.querySelector(".write-review");
if(form)form.scrollIntoView({behavior:"smooth"});
}
function closeReview(){document.getElementById("review-modal").classList.remove("open");_editingReviewIdx=null;currentRating=0;}
function setRating(r){
currentRating=r;
document.querySelectorAll("#star-picker .sp").forEach(function(el,i){el.classList.toggle("on",i<r);});
}
var _editingReviewIdx=null;
function submitReview(){
if(!currentRating){alert(L("星を選んでください","Please select a rating","Vui lòng chọn số sao"));return;}
var text=document.getElementById("rv-text-inp").value.trim();
if(!text){alert(L("レビュー内容を入力してください","Please enter your review","Vui lòng nhập nội dung đánh giá"));return;}
var name=document.getElementById("rv-name-inp").value.trim();
if(!REVIEWS[currentReviewProductId])REVIEWS[currentReviewProductId]=[];
if(_editingReviewIdx!==null){
var er=REVIEWS[currentReviewProductId][_editingReviewIdx];
er.rating=currentRating;er.text=text;er.name=name;er.edited=true;
_editingReviewIdx=null;
showToast(L("✅ レビューを更新しました！","✅ Review updated!","✅ Đã cập nhật đánh giá!"));
} else {
REVIEWS[currentReviewProductId].push({id:Date.now(),sid:_mySessionId,name:name,rating:currentRating,text:text,date:new Date().toLocaleDateString("ja-JP")});
showToast(L("✅ レビューを投稿しました！","✅ Review submitted!","✅ Đã gửi đánh giá!"));
}
saveReviews();closeReview();renderProducts();
}
function openNotify(pid){
var _p=PRODUCTS.find(function(x){return x.id===pid;});
var name=_p?(lang==="ja"?_p.ja:_p.vi):"";
currentNotifyProductId=pid;
document.getElementById("ntf-modal-title").textContent=T("ntfModalTitle");
document.getElementById("ntf-modal-body").innerHTML='<p style="font-size:12.5px;color:var(--muted);line-height:1.7;margin-bottom:16px;">'+name+(L(" "+L("が入荷したらメールでお知らせします。","is back in stock! We'll notify you.","đã có hàng trở lại!")," is back in stock, we'll notify you."," đã có hàng trở lại."))+'</p><div class="notify-form"><input class="notify-input" id="ntf-email-inp" type="email" placeholder="your@email.com"><input class="notify-input" id="ntf-name-inp" placeholder="'+(L("お名前（任意）","Name (optional)","Tên (tùy chọn)"))+'"><button class="notify-submit" onclick="submitNotify()">'+T("ntfSubmit")+'</button></div>';
document.getElementById("notify-modal").classList.add("open");
}
function closeNotify(){document.getElementById("notify-modal").classList.remove("open");}
function submitNotify(){
var email=document.getElementById("ntf-email-inp").value.trim();
if(!email||!/^[^@]+@[^@]+\.[^@]+$/.test(email)){alert(L("正しいメールアドレスを入力してください","Please enter a valid email","Vui lòng nhập email hợp lệ"));return;}
var name=document.getElementById("ntf-name-inp").value.trim();
var p=PRODUCTS.find(function(x){return x.id===currentNotifyProductId;});
NOTIFY_LIST.push({productId:currentNotifyProductId,productName:p?(lang==="ja"?p.ja:p.vi):"",email:email,name:name,date:new Date().toLocaleDateString("ja-JP")});
saveNotifyList();
document.getElementById("ntf-modal-body").innerHTML='<div class="notify-success">'+T("ntfSuccess")+'</div>';
setTimeout(closeNotify,2000);
}
function pickDel(el,v){document.querySelectorAll(".opt-card:not(.disabled)").forEach(function(e){e.classList.remove("on");});el.classList.add("on");selDel=v;saveCust();var _ae=document.getElementById("inp-addr");if(_ae&&_ae.value.trim()){calcShippingFee(_ae.value,function(){updateShippingDisplay(null,false);});}else{_shippingFee=0;_shippingDist=0;updateShippingDisplay(null,false);}}
function pickPay(el,v){document.querySelectorAll(".pay-opt").forEach(function(e){e.classList.remove("on");});el.classList.add("on");selPay=v;saveCust();}
var QR_META={momo:{logo:"💜",ja:"MoMo で支払う",vi:"Thanh toán qua MoMo"},zalopay:{logo:"💙",ja:"ZaloPay で支払う",vi:"Thanh toán qua ZaloPay"},vnpay:{logo:"❤️",ja:"VNPay で支払う",vi:"Thanh toán qua VNPay"}};
function showQR(method){
currentQRMethod=method;
var meta=QR_META[method];
document.getElementById("qr-logo").textContent=meta.logo;
document.getElementById("qr-title").textContent=lang==="ja"?meta.ja:meta.vi;
document.getElementById("qr-amount").textContent=pendingOrder?vnd(pendingOrder.tot):"0 ₫";
document.getElementById("qr-done-btn").textContent=lang==="ja"?"✅ 支払いを確認しました":"✅ Đã thanh toán";
document.getElementById("qr-note").textContent=lang==="ja"?"QRをスキャンして支払い後、「確認しました」を押してください。":"Quét mã QR để thanh toán. Sau đó nhấn 'Đã thanh toán'.";
var photo=document.getElementById("qr-photo"), ph=document.getElementById("qr-ph");
if(QR_IMGS[method]){photo.src=QR_IMGS[method];photo.style.display="block";ph.style.display="none";}
else{photo.style.display="none";ph.style.display="flex";ph.style.flexDirection="column";ph.style.alignItems="center";}
document.getElementById("qr-overlay").classList.add("open");
}
function closeQR(){document.getElementById("qr-overlay").classList.remove("open");}
function confirmQR(){
if(!window.pendingOrder || !window.pendingOrder.screenshot) {
const ph = document.getElementById('qr-ph');
if(!ph || !ph.files || !ph.files.length) {
alert('送金スクリーンショットをアップロードしてから確定してください。\nVui lòng tải ảnh xác nhận chuyển khoản trước khi xác nhận.');
return;
}
}closeQR();finalizeOrder();}
function handleQRImg(ev){
var f=ev.target.files[0];if(!f||!currentQRMethod)return;
var r=new FileReader();r.onload=function(e){QR_IMGS[currentQRMethod]=e.target.result;saveQRImgs();var photo=document.getElementById("qr-photo"),ph=document.getElementById("qr-ph");photo.src=e.target.result;photo.style.display="block";ph.style.display="none";};r.readAsDataURL(f);
}
function buildEmailBody(o){
var dmap={deliver:T("delDeliver"),pickup:T("delPickup")};
var pmap={momo:"MoMo",zalopay:"ZaloPay",vnpay:"VNPay",vietqr:L("🏦 銀行振込（VietQR）","🏦 Bank Transfer (VietQR)","🏦 Chuyển khoản ngân hàng (VietQR)")};
var lines=(o.items||[]).map(function(i){var nm=lang==="ja"?i.ja:i.vi,unit=lang==="ja"?i.unit:i.unitvi;return " "+i.e+" "+nm+" × "+i.qty+" "+unit+" = "+vnd(i.qty*i.price);}).join("\n");
var shipFee=o.shippingFee||0;
var shipLine=shipFee>0?(lang==="ja"?"\n 🛵 送料（Grab）= "+vnd(shipFee):"\n 🛵 Phí giao hàng (Grab) = "+vnd(shipFee)):"";
if(lang==="ja"){
return o.name+" 様\n\nNICO NICO YASAIをご利用いただきありがとうございます。\nご注文を承りました。\n\n"+
"━━━━━━━━━━━━━━━━\n■ 注文番号："+o.no+"\n■ 日時："+o.ts+"\n━━━━━━━━━━━━━━━━\n\n"+
"【ご注文内容】\n"+lines+shipLine+"\n\n【合計金額】"+vnd(o.tot)+"\n【受け取り方法】"+(dmap[o.delivery]||o.delivery)+"\n【お支払い】"+(pmap[o.payment]||o.payment)+"\n【お届け先】"+o.addr+
(o.note?"\n【備考】"+o.note:"")+
"\n\n━━━━━━━━━━━━━━━━\n配達は日曜日にエムハノイより順次お届けいたします。\nご質問はNICONICOYASAI公式LINE: https://lin.ee/R9dAJtD\n\nNICO NICO YASAI\n※ニコニコ野菜バンホー農場\n━━━━━━━━━━━━━━━━";
} else {
return "Kính gửi "+o.name+"\n\nCảm ơn bạn đã đặt hàng tại NICO NICO YASAI.\n\n"+
"━━━━━━━━━━━━━━━━\n■ Mã đơn: "+o.no+"\n■ Ngày: "+o.ts+"\n━━━━━━━━━━━━━━━━\n\n"+
"【Chi tiết】\n"+lines+shipLine+"\n\n【Tổng】"+vnd(o.tot)+"\n【Hình thức】"+(dmap[o.delivery]||o.delivery)+"\n【Thanh toán】"+(pmap[o.payment]||o.payment)+"\n【Địa chỉ】"+o.addr+
(o.note?"\n【Ghi chú】"+o.note:"")+
"\n\n━━━━━━━━━━━━━━━━\nHàng sẽ được giao vào Chủ nhật từ cửa hàng em Hanoi.\nMọi thắc mắc vui lòng liên hệ LINE: https://lin.ee/R9dAJtD\n\nNICO NICO YASAI\n※ Trang trại Vân Hòa\n━━━━━━━━━━━━━━━━";
}
}
function sendEmail(o){
if(!o.email)return;
var subject=(lang==="ja"?"【ご注文確認】NICO NICO YASAI ":"【Xác nhận đơn hàng】NICO NICO YASAI ")+o.no;
var body=buildEmailBody(o);
if(EJ.service&&EJ.template&&EJ.pubkey){
try{emailjs.init({publicKey:EJ.pubkey});}catch(e){}
var ov=document.getElementById("email-overlay"),tx=document.getElementById("email-txt");
if(tx)tx.textContent=L("確認メールを送信中...","Sending confirmation email...","Đang gửi email...");
if(ov)ov.classList.add("show");
emailjs.send(EJ.service,EJ.template,{to_email:o.email,to_name:o.name,from_name:"NICO NICO YASAI",reply_to:"bachhasonmochi@gmail.com",subject:subject,message:body,order_no:o.no,order_date:o.ts,total:vnd(o.tot)})
.then(function(){if(ov)ov.classList.remove("show");showToast("✅ "+(lang==="ja"?"確認メールを自動送信しました":"Đã tự động gửi email xác nhận"));},
function(err){if(ov)ov.classList.remove("show");showToast("⚠ "+L("メール送信に失敗しました。管理画面でEmailJS設定を確認してください。","Email send failed. Check EmailJS settings in admin.","Gửi email thất bại. Kiểm tra cài đặt EmailJS."));console.error("[NNY] EmailJS error:",err);});
} else {
showToast("⚠ "+L("EmailJSが未設定のため自動送信できませんでした。管理画面→設定で設定してください。","EmailJS not configured. Please set up in Admin → Settings.","EmailJS chưa được cấu hình. Vui lòng cài đặt trong Admin → Cài đặt."));
}
}
function fallbackMail(email,subject,body){var a=document.createElement("a");a.href="mailto:"+email+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);a.target="_blank";document.body.appendChild(a);a.click();document.body.removeChild(a);}
function showToast(msg){var t=document.getElementById("email-toast");t.textContent=msg;t.classList.add("show");setTimeout(function(){t.classList.remove("show");},4000);}
var SAVED_KEY="nny_cust_v2";
function saveCust(){
var e=document.getElementById("inp-email");
try{localStorage.setItem(SAVED_KEY,JSON.stringify({name:document.getElementById("inp-name").value,phone:document.getElementById("inp-phone").value,zalo:document.getElementById("inp-zalo").value,addr:document.getElementById("inp-addr").value,email:e?e.value:"",delivery:selDel,payment:selPay}));}catch(err){}
}
function loadSaved(){
try{
var raw=localStorage.getItem(SAVED_KEY);if(!raw)return false;
var c=JSON.parse(raw);
if(c.name)document.getElementById("inp-name").value=c.name;
if(c.phone)document.getElementById("inp-phone").value=c.phone;
if(c.zalo)document.getElementById("inp-zalo").value=c.zalo;
if(c.addr)document.getElementById("inp-addr").value=c.addr;
var em=document.getElementById("inp-email");if(em&&c.email)em.value=c.email;
if(c.delivery){selDel=c.delivery;document.querySelectorAll(".opt-card:not(.disabled)").forEach(function(el){el.classList.toggle("on",el.getAttribute("onclick")&&el.getAttribute("onclick").indexOf("'"+c.delivery+"'")>-1);});}
if(c.payment){selPay=c.payment;document.querySelectorAll(".pay-opt").forEach(function(el){el.classList.toggle("on",el.getAttribute("onclick")&&el.getAttribute("onclick").indexOf("'"+c.payment+"'")>-1);});}
return !!(c.name||c.phone);
}catch(e){return false;}
}
function showSavedBadge(){var b=document.getElementById("saved-badge");if(b){try{var raw=localStorage.getItem(SAVED_KEY);var c=raw?JSON.parse(raw):{};b.style.display=(c.name||c.phone)?"inline-flex":"none";}catch(e){b.style.display="none";}}}
function clearSaved(){try{localStorage.removeItem(SAVED_KEY);}catch(e){}["inp-name","inp-phone","inp-zalo","inp-addr","inp-email"].forEach(function(id){var el=document.getElementById(id);if(el)el.value="";});var b=document.getElementById("saved-badge");if(b)b.style.display="none";}
(function(){
setTimeout(function(){
["inp-name","inp-phone","inp-zalo","inp-addr","inp-email"].forEach(function(id){
var el=document.getElementById(id);if(el)el.addEventListener("input",saveCust);
});
},500);
})();
function openAdmin(){
var rm=document.getElementById("review-modal");
if(rm){
rm.classList.remove("open");
rm.style.display="none";
}
var wr=document.querySelector(".write-review");
if(wr)wr.style.display="none";
setTimeout(function(){loadBankConfig();},200);
var overlay=document.getElementById("admin-overlay");if(overlay){overlay.classList.add("open");overlay.style.display="flex";}var us=document.getElementById("user-screen");if(us)us.style.display="none";
var screen=document.getElementById("admin-screen");
if(screen){screen.classList.add("on");screen.style.display="block";}
if(typeof applyAdminI18n==="function")applyAdminI18n();
if(typeof renderAdminAll==="function"){renderAdminAll();}
else{
if(typeof renderAdminOrders2==="function")renderAdminOrders2();
if(typeof renderAdminProducts2==="function")renderAdminProducts2();
}
if(typeof loadEJConfigUI==="function")loadEJConfigUI();
if(typeof loadFirebaseConfigUI==="function")loadFirebaseConfigUI();
if(fbEnabled&&typeof loadFromFirebase==="function"){
loadFromFirebase(function(){renderProducts();setTimeout(_autoSyncProducts,1000);setTimeout(startFbPolling,2000);});
}
}
function closeAdmin(){var sc=document.getElementById("admin-screen");if(sc){sc.classList.remove("on");sc.style.display="none";}}
function dTab(el,pane){
document.querySelectorAll(".dtab").forEach(function(e){e.classList.remove("on");});el.classList.add("on");
document.querySelectorAll(".dtab-pane").forEach(function(e){e.classList.remove("on");});document.getElementById(pane).classList.add("on");
if(pane==="dp-orders")renderAdminOrders();
else if(pane==="dp-db")renderDB();
else if(pane==="dp-stats")renderStats();
else if(pane==="dp-products")renderPE();
else if(pane==="dp-notify")renderNotifyList();
}
function renderAdminOrders(){
var el=document.getElementById("order-cards-el");
var todayStr=new Date().toLocaleDateString("ja-JP");
var todayOrders=ORDERS.filter(function(o){return o.ts&&o.ts.indexOf(todayStr)>=0;});
var todayRev=todayOrders.reduce(function(s,o){return s+o.tot;},0);
var pendingOrders=ORDERS.filter(function(o){return o.status==="new";});
var quickHtml='<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px;">';
quickHtml+='<div style="background:var(--gp);border-radius:var(--r);padding:12px;text-align:center;border:1px solid var(--border)"><div style="font-size:20px;font-weight:900;color:var(--g1)">'+ORDERS.length+'</div><div style="font-size:9px;color:var(--muted);margin-top:2px">'+(L("総注文数","Total Orders","Tổng đơn"))+'</div></div>';
quickHtml+='<div style="background:#fff8e1;border-radius:var(--r);padding:12px;text-align:center;border:1px solid #f0c040"><div style="font-size:20px;font-weight:900;color:#b06010">'+pendingOrders.length+'</div><div style="font-size:9px;color:var(--muted);margin-top:2px">'+(L("未処理","Pending","Chờ xử lý"))+'</div></div>';
quickHtml+='<div style="background:var(--gp);border-radius:var(--r);padding:12px;text-align:center;border:1px solid var(--border)"><div style="font-size:13px;font-weight:900;color:var(--g1)">'+vnd(todayRev)+'</div><div style="font-size:9px;color:var(--muted);margin-top:2px">'+(L("本日売上","Today's Sales","Hôm nay"))+'</div></div>';
quickHtml+='</div>';
if(!ORDERS.length){el.innerHTML=quickHtml+'<div style="text-align:center;padding:32px;color:var(--ghost)"><div style="font-size:36px;opacity:.3;margin-bottom:8px">📋</div><div>'+T("noOrders")+'</div></div>';return;}
var html="";
var _rev=[].concat(ORDERS).reverse();
_rev.forEach(function(o,i){
var items=o.items.map(function(i){return i.e+"×"+i.qty;}).join(" ");
html+='<div class="oc"><div class="oc-head"><span class="oc-no">'+o.no+'</span><span class="st-tag '+(o.status==="new"?"st-new":"st-done")+'">'+(o.status==="new"?T("stNew"):T("stDone"))+'</span></div>';
html+='<div class="oc-meta"><span>👤 '+o.name+'</span><span>📞 '+o.phone+'</span><span>🕐 '+o.ts+'</span></div>';
html+='<div style="font-size:11px;color:var(--ghost);margin-top:3px">'+items+'</div>';
html+='<div class="oc-tot">'+vnd(o.tot)+'</div>';
html+='<div class="oc-btns"><button class="oc-btn oc-btn-done" onclick="toggleOStatusByIdx('+i+')">'+T("ocToggleDone")+'</button><button class="oc-btn oc-btn-receipt" onclick="adminShowReceiptByIdx('+i+')">'+T("ocViewReceipt")+'</button></div>';
html+='</div>';
});
el.innerHTML=html;
}
function toggleOStatus(no){var o=ORDERS.find(function(x){return x.no===no;});if(o){o.status=o.status==="new"?"done":"new";renderAdminOrders();renderDB();}}
function adminShowReceipt(no){var o=ORDERS.find(function(x){return x.no===no;});if(!o)return;buildReceipt(o);closeAdmin();showView("receipt");}
function renderDB(){/* replaced by renderAdminDB2 */}
function saveSheetUrl(){
var inp=document.getElementById("sheets-url-inp");
var url=inp?inp.value.trim():"";
sheetsUrl=url;
localStorage.setItem("nny_sheets_url",url);
var a=document.getElementById("sheets-open-a");
if(a){a.href=url;a.style.display=url?"inline-flex":"none";}
var tl=document.getElementById("sheets-toplink");
if(tl)tl.href=url;
showToast(adminLang==="vi"?"✅ Đã lưu URL Sheets":"✅ Sheets URLを保存しました");
}
function exportCSV(){
if(!ORDERS.length){alert(lang==="ja"?"注文データがありません":"Chưa có dữ liệu");return;}
var hdr=["注文番号","日時","お名前","電話","メール","住所","商品","合計(VND)","受取","支払","状態"];
var rows=ORDERS.map(function(o){var items=o.items.map(function(i){return i.ja+"×"+i.qty;}).join("|");return [o.no,o.ts,o.name,o.phone,o.email||"",o.addr,items,o.tot,o.delivery,o.payment,o.status];});
var csv=[hdr].concat(rows).map(function(r){return r.map(function(v){return '"'+String(v).replace(/"/g,'""')+'"';}).join(",");}).join("\n");
var blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8"});
var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="niconico_"+new Date().toISOString().slice(0,10)+".csv";a.click();
}
function copySheets(){
if(!ORDERS.length){alert(lang==="ja"?"注文データがありません":"Chưa có dữ liệu");return;}
var hdr=["注文番号","日時","お名前","電話","メール","住所","商品","合計(VND)","受取","支払","状態"];
var rows=ORDERS.map(function(o){var items=o.items.map(function(i){return i.ja+"×"+i.qty;}).join("|");return [o.no,o.ts,o.name,o.phone,o.email||"",o.addr,items,o.tot,o.delivery,o.payment,o.status];});
navigator.clipboard.writeText([hdr].concat(rows).map(function(r){return r.join("\t");}).join("\n")).then(function(){alert(lang==="ja"?"コピーしました！":"Đã sao chép!");});
}
function clearOrders(){nnyConfirm(lang==="ja"?"全ての注文データを削除しますか？":"Xóa toàn bộ?",function(){ORDERS=[];renderAdminOrders();renderDB();renderStats();});}
function renderStats(){
var tot=ORDERS.length, rev=ORDERS.reduce(function(s,o){return s+o.tot;},0), avg=tot?Math.round(rev/tot):0;
document.getElementById("st-orders").textContent=tot;
document.getElementById("st-rev").textContent=vnd(rev);
document.getElementById("st-avg").textContent=vnd(avg);
document.getElementById("st-pub").textContent=PRODUCTS.filter(function(p){return p.pub;}).length;
var warns=PRODUCTS.filter(function(p){return p.stock<=5;}),wa=document.getElementById("stock-warn-el");
if(warns.length){
var wh='<div style="margin-top:14px;font-size:11px;font-weight:800;color:#b06010;margin-bottom:8px">'+T("swTitle")+'</div>';
warns.forEach(function(p){var nm=lang==="ja"?p.ja:p.vi;var cls=p.stock===0?"st-out":"st-low";wh+='<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 11px;background:var(--paper);border-radius:var(--r);margin-bottom:5px;font-size:12px"><span>'+p.e+' '+nm+'</span><span class="stag '+cls+'">'+( p.stock===0?T("soutLbl"):T("swarnLbl")+" "+p.stock)+'</span></div>';});
wa.innerHTML=wh;
} else wa.innerHTML='<div style="text-align:center;padding:12px;font-size:12px;color:var(--g2)">✅ '+(lang==="ja"?"在庫は全て問題ありません":"Tất cả sản phẩm đều có đủ hàng")+'</div>';
}
function renderPE(){/* replaced by renderAdminProducts2 */}
function tglPE(id){var b=document.getElementById("pebody-"+id);b.classList.toggle("open");var x=document.getElementById("pex-"+id);if(x)x.style.transform=b.classList.contains("open")?"rotate(90deg)":"";}
function tglPub(id,val){var p=PRODUCTS.find(function(x){return x.id===id;});if(!p)return;p.pub=val;var l=document.getElementById("ptl-"+id);if(l){l.textContent=val?T("pubLbl"):T("unpubLbl");l.className="pe-tgl-lbl"+(val?" on":"");}renderProducts();}
/* pubAll → see ADMIN_JS */
/* unpubAll → see ADMIN_JS */
/* pubSeason old removed */
function saveProd(id){
var p=PRODUCTS.find(function(x){return x.id===id;});if(!p)return;
function g(eid){var e=document.getElementById(eid);return e?e.value:null;}
var emoji=g("ai-emoji-"+id);if(emoji&&emoji.trim())p.e=emoji.trim();
var ja=g("ai-ja-"+id);if(ja&&ja.trim())p.ja=ja.trim();
var vi=g("ai-vi-"+id);if(vi&&vi.trim())p.vi=vi.trim();
var unit=g("ai-unit-"+id);if(unit&&unit.trim())p.unit=unit.trim();
var unitvi=g("ai-unitvi-"+id);if(unitvi&&unitvi.trim())p.unitvi=unitvi.trim();
var price=g("ai-p-"+id);if(price!==null)p.price=parseInt(price)||0;
var dja=g("ai-dja-"+id);if(dja!==null)p.dja=dja;
var dvi=g("ai-dvi-"+id);if(dvi!==null)p.dvi=dvi;
var sq=g("sq-"+id);if(sq!==null)p.stock=Math.max(0,parseInt(sq)||0);
saveProducts();
if(typeof fbSaveProduct==="function")fbSaveProduct(p);
renderAdminProducts2();
renderProducts();
showToast(adminLang==="vi"?"✅ Đã lưu":"✅ 保存しました");
}
function delProd(id){if(!confirm(lang==="ja"?"削除しますか？":"Xóa?"))return;PRODUCTS=PRODUCTS.filter(function(x){return x.id!==id;});if(cart[id])delete cart[id];renderProducts();renderPE();updateCartBtn();}
function addProduct(){
var newId=Math.max.apply(null,PRODUCTS.map(function(p){return p.id;}).concat([0]))+1;
PRODUCTS.push({id:newId,e:"🥗",ja:"新商品",vi:"Sản phẩm mới",en:"New Product",dja:"説明を入力",dvi:"Nhập mô tả",price:10000,unit:"個",unitvi:"cái",season:"all",badge:"",stock:10,img:null,pub:false});
saveProducts();
renderAdminProducts2();
renderProducts();
setTimeout(function(){
var el=document.getElementById("apcb-"+newId);
if(el){el.scrollIntoView({behavior:"smooth"});tglAPC(newId);}
},100);
}
function renderNotifyList(){/* replaced by renderAdminNotify2 */}
function delNotify(i){NOTIFY_LIST.splice(i,1);saveNotifyList();renderNotifyList();}
function saveEJConfig(){
EJ.service=document.getElementById("ej-service").value.trim();
EJ.template=document.getElementById("ej-template").value.trim();
EJ.pubkey=document.getElementById("ej-pubkey").value.trim();
EJ.from=document.getElementById("ej-from").value.trim();
try{
localStorage.setItem("nny_ej",JSON.stringify(EJ));
if(EJ.pubkey)emailjs.init({publicKey:EJ.pubkey});
var st2=document.getElementById("ej-status");
if(st2){st2.style.display="block";st2.style.background="var(--gp)";st2.style.color="var(--g2)";st2.textContent=lang==="ja"?"✅ 保存しました！テスト送信で動作確認してください":"✅ Đã lưu! Hãy gửi thử để kiểm tra.";}
}catch(e){var _ejSt=document.getElementById("ej-status");if(_ejSt)_ejSt.textContent="Error: "+e.message;}
}
function testEmailJS(){
saveEJConfig();
if(!EJ.service||!EJ.template||!EJ.pubkey){
alert(lang==="ja"?"Service ID・Template ID・Public Keyを入力してください":"Vui lòng nhập đầy đủ Service ID, Template ID, Public Key");
return;
}
var testTo=document.getElementById("ej-test-to").value.trim();
if(!testTo){alert(lang==="ja"?"テスト送信先メールを入力してください":"Vui lòng nhập email để gửi thử");return;}
var st=document.getElementById("ej-status");
st.style.color="var(--muted)";
st.textContent=lang==="ja"?"送信中...":"Đang gửi...";
emailjs.send(EJ.service,EJ.template,{
to_email:testTo,to_name:lang==="ja"?"テストユーザー":"Người dùng thử",
from_name:"NICO NICO YASAI",reply_to:EJ.from||"",
subject:lang==="ja"?"【テスト】NICO NICO YASAI メール設定確認":"【Thử nghiệm】NICO NICO YASAI email",
message:lang==="ja"?"これはテストメールです。メール送信の設定が完了しました！\nNICO NICO YASAI":"Đây là email thử nghiệm. Cài đặt gửi email đã hoàn tất!\nNICO NICO YASAI",
order_no:"#TEST-0000",order_date:new Date().toLocaleString("ja-JP"),total:"0 ₫"
}).then(function(){
var stOk=document.getElementById("ej-status");
if(stOk){stOk.style.display="block";stOk.style.background="var(--gp)";stOk.style.color="var(--g2)";stOk.textContent=T("ejTestSuccess");}
},function(err){
var stFl=document.getElementById("ej-status");
if(stFl){stFl.style.display="block";stFl.style.background="var(--rp)";stFl.style.color="var(--red)";stFl.textContent=T("ejTestFail");}
});
}
function loadEJConfigUI(){if(EJ.service){var e=document.getElementById("ej-service");if(e)e.value=EJ.service;}if(EJ.template){var e=document.getElementById("ej-template");if(e)e.value=EJ.template;}if(EJ.pubkey){var e=document.getElementById("ej-pubkey");if(e)e.value=EJ.pubkey;}if(EJ.from){var e=document.getElementById("ej-from");if(e)e.value=EJ.from;}}
function applySite(){var badge=document.getElementById("site-badge").value;var h1ja=document.getElementById("site-h1-ja").value.replace(/\n/g,"<br>");var h1vi=document.getElementById("site-h1-vi").value.replace(/\n/g,"<br>");var sja=document.getElementById("site-sub-ja").value;var svi=document.getElementById("site-sub-vi").value;I.ja.heroEyebrow=badge;I.vi.heroEyebrow=badge;I.ja.heroH1=h1ja;I.vi.heroH1=h1vi;I.ja.heroSub=sja;I.vi.heroSub=svi;applyI18n();closeAdmin();}
var BANK_CFG={code:"970422",bankName:"MB Bank",account:"",owner:"",descTemplate:"NICONICO {no}"};
(function(){try{var b=localStorage.getItem("nny_bank");if(b)BANK_CFG=JSON.parse(b);}catch(e){}})();
function fetchVietQR(amount,orderNo,cb){
var code=BANK_CFG.code||"970422";
var acc=(BANK_CFG.account||"").trim();
if(!acc){cb(null);return;}
var desc=(BANK_CFG.descTemplate||"NICONICO {no}").replace("{no}",orderNo).replace(/#/g,"");
var name=(BANK_CFG.owner||"NICO NICO YASAI").toUpperCase().slice(0,25);
var url="https://img.vietqr.io/image/"+code+"-"+acc+"-compact2.png"
+"?amount="+amount
+"&addInfo="+encodeURIComponent(desc)
+"&accountName="+encodeURIComponent(name);
fetch(url,{mode:"cors"})
.then(function(r){
if(!r.ok)throw new Error("HTTP "+r.status);
return r.blob();
})
.then(function(blob){
cb(URL.createObjectURL(blob));
})
.catch(function(e){
console.warn("[NNY QR] fetch failed:",e);
cb(url);
});
}
function saveBankConfig(){
var sel=document.getElementById("bank-code");
BANK_CFG.code=sel?sel.value:"970422";
BANK_CFG.bankName=sel?sel.options[sel.selectedIndex].text:"MB Bank";
BANK_CFG.account=((document.getElementById("bank-account")||{}).value||"").trim();
BANK_CFG.owner=((document.getElementById("bank-owner")||{}).value||"").trim().toUpperCase();
BANK_CFG.descTemplate=((document.getElementById("bank-desc-template")||{}).value||"").trim()||"NICONICO {no}";
if(!BANK_CFG.account){alert(adminLang==="vi"?"Vui lòng nhập số tài khoản":"口座番号を入力してください");return;}
localStorage.setItem("nny_bank",JSON.stringify(BANK_CFG));
var area=document.getElementById("bank-test-qr-area");
if(area){
area.style.display="block";
area.innerHTML="<div style='font-size:11px;color:var(--muted);margin-bottom:6px;'>"+(adminLang==="vi"?"Đang tạo QR...":"QR生成中...")+"</div><div>⏳</div>";
fetchVietQR(100000,"TEST",function(url){
area.innerHTML=url
?"<div style='font-size:10px;color:var(--muted);margin-bottom:4px;'>"+(adminLang==="vi"?"QR thử nghiệm":"テストQR (100,000₫)")+"</div><img src='"+url+"' style='max-width:160px;border-radius:6px;display:block;margin:0 auto;'>"
:"<div style='color:var(--red);font-size:11px;'>⚠ "+(adminLang==="vi"?"Không tạo được QR":"QR生成失敗")+"</div>";
});
}
showToast(adminLang==="vi"?"✅ Đã lưu cấu hình ngân hàng":"✅ 銀行設定を保存しました");
}
function loadBankConfigUI(){
if(BANK_CFG.code){var sel=document.getElementById("bank-code");if(sel)for(var i=0;i<sel.options.length;i++){if(sel.options[i].value===BANK_CFG.code){sel.selectedIndex=i;BANK_CFG.bankName=sel.options[i].text;break;}}}
var a=document.getElementById("bank-account");if(a&&BANK_CFG.account)a.value=BANK_CFG.account;
var o=document.getElementById("bank-owner");if(o&&BANK_CFG.owner)o.value=BANK_CFG.owner;
var d=document.getElementById("bank-desc-template");if(d&&BANK_CFG.descTemplate)d.value=BANK_CFG.descTemplate;
}
function showPayModal(){
var o=pendingOrder;if(!o)return;
var body="";
if(o.payment==="vietqr"){
var bname=BANK_CFG.bankName||"Ngân hàng";
body+='<div class="qr-pay-box">';
body+='<div class="qr-method-logo">🏦</div>';
body+='<div class="qr-method-name">'+(L("銀行振込 (VietQR)","Bank Transfer (VietQR)","Chuyển khoản (VietQR)"))+'</div>';
body+='<div class="qr-amount-disp">'+vnd(o.tot)+'</div>';
body+='<div class="qr-img-container" id="qr-container-live" style="flex-direction:column;gap:8px;"><div style="font-size:28px;">⏳</div><div style="font-size:11px;color:var(--muted);">'+(L("QR生成中..","Generating QR..","Đang tạo mã QR.."))+'</div></div>';
body+='<div class="qr-bank-info">';
body+='<div class="qr-bank-row"><span class="qr-bank-label">'+(L("銀行","Bank","Ngân hàng"))+'</span><span class="qr-bank-val">'+bname+'</span></div>';
body+='<div class="qr-bank-row"><span class="qr-bank-label">'+(L("口座番号","Account No.","Số TK"))+'</span><span class="qr-bank-val">'+(BANK_CFG.account||"未設定")+'</span></div>';
body+='<div class="qr-bank-row"><span class="qr-bank-label">'+(L("口座名義","Account Name","Chủ TK"))+'</span><span class="qr-bank-val">'+(BANK_CFG.owner||"NICO NICO YASAI")+'</span></div>';
body+='<div class="qr-bank-row"><span class="qr-bank-label">'+(L("金額","Amount","Số tiền"))+'</span><span class="qr-bank-val" style="color:var(--g1)">'+vnd(o.tot)+'</span></div>';
body+='<div class="qr-bank-row"><span class="qr-bank-label">'+(L("振込メモ","Transfer Note","Nội dung"))+'</span><span class="qr-bank-val">'+(BANK_CFG.descTemplate||"NICONICO").replace("{no}",o.no).replace(/#/g,"")+'</span></div>';
body+='</div>';
body+='<div class="qr-flow-steps">';
body+='<div class="qr-step"><span class="qr-step-num">1</span><span>'+(L("QRを銀行アプリで読み取り送金","Scan QR with your banking app","Quét mã QR bằng ứng dụng ngân hàng"))+'</span></div>';
body+='<div class="qr-step"><span class="qr-step-num">2</span><span>'+(L("送金完了画面のスクショをアップロード","Upload payment screenshot","Tải ảnh chụp màn hình xác nhận chuyển khoản"))+'</span></div>';
body+='<div class="qr-step"><span class="qr-step-num">3</span><span>'+(L("ボタンを押して注文確定","Press button to confirm order","Nhấn nút để xác nhận"))+'</span></div>';
body+='</div>';
body+='<div id="ss-upload-area-wrap"><div class="ss-upload-area" id="ss-drop-area" ondrop="handleSSDrop(event)" ondragover="handleSSDragOver(event)" ondragleave="handleSSDragLeave()">';
body+='<input type="file" accept="image/jpeg,image/png,image/gif,image/webp" onchange="handleSSUpload(event)" capture="environment">';
body+='<div class="ss-upload-ico">📷</div>';
body+='<div class="ss-upload-txt">'+(L("送金スクリーンショットをアップロード","Upload payment screenshot","Tải lên ảnh chụp màn hình chuyển khoản"))+'</div>';
body+='<div class="ss-upload-sub">'+(L("タップして選択","Tap to select","Nhấn để chọn ảnh"))+'</div>';
body+='</div></div>';
body+='<div id="ss-preview-area" style="display:none"></div>';

body+='</div>';
}
document.getElementById("qr-modal-body").innerHTML=body;
var _ef=document.getElementById("qr-modal-footer");if(_ef)_ef.remove();
var _ft=document.createElement("div");_ft.id="qr-modal-footer";_ft.style.cssText="padding:14px 16px;border-top:2px solid var(--border);background:#fff;flex-shrink:0;";
var _db=document.createElement("button");_db.id="qr-done-btn-el";_db.style.cssText="width:100%;padding:14px;background:var(--g1);color:#fff;border:none;border-radius:var(--r);font-size:15px;font-weight:800;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;";
_db.textContent=L("✅ 送金完了・注文確定","✅ Payment Done · Confirm Order","✅ Đã chuyển khoản・Xác nhận đặt hàng");
_db.addEventListener("click",function(e){e.preventDefault();confirmPayment();});
_ft.appendChild(_db);var _qmb=document.querySelector("#qr-modal .modal-box");if(_qmb)_qmb.appendChild(_ft);
document.getElementById("qr-modal-title").textContent=L("お支払い","Payment","Thanh toán");
var _qm=document.getElementById("qr-modal");document.body.appendChild(_qm);_qm.style.zIndex="99999";_qm.classList.add("open");
pendingScreenshot=null;
renderSSPreview();
if(o.payment==="vietqr"){
var qrC=document.getElementById("qr-container-live");
if(qrC){
if(BANK_CFG.account&&BANK_CFG.code){
qrC.style.flexDirection="column";qrC.style.gap="8px";
qrC.innerHTML='<div style="font-size:28px;">⏳</div><div style="font-size:11px;color:var(--muted);">'+L("QR生成中..","Generating QR..","Đang tạo mã QR..")+'</div>';
fetchVietQR(o.tot,o.no,function(url){
if(!url){qrC.innerHTML='<div style="color:red;font-size:12px;">⚠ QR生成失敗</div>';return;}
qrC.style.flexDirection="";qrC.style.gap="";
qrC.innerHTML='<img src="'+url+'" style="width:260px;height:260px;display:block;margin:0 auto;" alt="VietQR">';
});
} else {
qrC.innerHTML='<div style="padding:16px;text-align:center;font-size:12px;color:var(--muted);">⚠ '
+L("管理画面→設定→VietQRで口座番号を設定してください",
"Please set bank account in Admin→Settings→VietQR",
"Vui lòng cài đặt tài khoản ngân hàng trong Cài đặt→VietQR")
+'</div>';
}
}
}
}
function closeQRModal(){var qm=document.getElementById("qr-modal");if(qm)qm.classList.remove("open");pendingScreenshot=null;}
function confirmPayment(){var ph=document.getElementById('qr-ph');var hasSS=(typeof pendingScreenshot!=='undefined'&&pendingScreenshot)||(ph&&ph.files&&ph.files.length>0);if(!hasSS){alert('送金スクリーンショットをアップロードしてから確定してください。\nVui l\u00f2ng t\u1ea3i \u1ea3nh x\u00e1c nh\u1eadn chuy\u1ec3n kho\u1ea3n tr\u01b0\u1edbc khi x\u00e1c nh\u1eadn.');return;}var _ss=pendingScreenshot;closeQRModal();pendingScreenshot=_ss;setTimeout(function(){finalizeOrder();},50);}
function handleSSUpload(ev){
var f=ev.target.files[0];if(!f||!f.type.startsWith("image/"))return;
var r=new FileReader();r.onload=function(e){pendingScreenshot=e.target.result;renderSSPreview();};r.readAsDataURL(f);
}
function handleSSDrop(ev){
ev.preventDefault();var f=ev.dataTransfer.files[0];if(!f||!f.type.startsWith("image/"))return;
var r=new FileReader();r.onload=function(e){pendingScreenshot=e.target.result;renderSSPreview();};r.readAsDataURL(f);
}
function handleSSDragOver(ev){ev.preventDefault();var a=document.getElementById("ss-drop-area");if(a)a.classList.add("drag-over");}
function handleSSDragLeave(){var a=document.getElementById("ss-drop-area");if(a)a.classList.remove("drag-over");}
function removeScreenshot(){pendingScreenshot=null;renderSSPreview();}
function renderSSPreview(){var ua=document.getElementById('ss-upload-area-wrap'),pa=document.getElementById('ss-preview-area');if(!ua||!pa)return;if(pendingScreenshot){ua.style.display='none';pa.style.display='block';pa.innerHTML='<div class="ss-preview-wrap"><img src="'+pendingScreenshot+'" style="max-height:160px;width:100%;object-fit:contain;display:block;border-radius:8px;"></div>';}else{ua.style.display='block';pa.style.display='none';pa.innerHTML='';}}
function openLightbox(src){
var old=document.getElementById("nny-lb-overlay");
if(old)old.remove();
var overlay=document.createElement("div");
overlay.id="nny-lb-overlay";
overlay.style.cssText="position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,.92);display:flex;align-items:center;justify-content:center;cursor:zoom-out;";
overlay.onclick=function(){overlay.remove();document.body.style.overflow="";};
var img=document.createElement("img");
img.src=src;
img.style.cssText="max-width:94vw;max-height:90vh;object-fit:contain;border-radius:8px;box-shadow:0 8px 40px rgba(0,0,0,.6);";
img.onclick=function(e){e.stopPropagation();};
var closeBtn=document.createElement("button");
closeBtn.textContent="✕";
closeBtn.style.cssText="position:absolute;top:16px;right:20px;background:rgba(255,255,255,.2);color:#fff;border:none;border-radius:50%;width:36px;height:36px;font-size:18px;cursor:pointer;font-weight:bold;";
closeBtn.onclick=function(){overlay.remove();document.body.style.overflow="";};
overlay.appendChild(img);
overlay.appendChild(closeBtn);
document.body.appendChild(overlay);
document.body.style.overflow="hidden";
}
function closeLightbox(){
var lb=document.getElementById("nny-lb-overlay");
if(lb){lb.remove();document.body.style.overflow="";}
var old=document.getElementById("ss-lightbox");
if(old)old.classList.remove("open");
}
function setStock(id,val){
var p=PRODUCTS.find(function(x){return x.id===id;});if(!p)return;
p.stock=Math.max(0,parseInt(val)||0);
saveProducts();if(typeof fbSaveProduct==="function")fbSaveProduct(p);
flashStockSaved(id);renderProducts();
}
function flashStockSaved(id){
var f=document.getElementById("sq-flash-"+id);if(!f)return;
f.classList.add("show");setTimeout(function(){f.classList.remove("show");},1200);
}
var FB_CFG={apiKey:"AIzaSyCE15q3KAPiXCUrzEmsVEL92HtE95eOBUk",authDomain:"nico-nico-yasai-hanoi-order.firebaseapp.com",projectId:"nico-nico-yasai-hanoi-order",storageBucket:"nico-nico-yasai-hanoi-order.firebasestorage.app",messagingSenderId:"733369514912",appId:"1:733369514912:web:cfd55f2632e32c1fba82c5"};
var fbDb=null,fbEnabled=false;
(function(){
try{
var r=localStorage.getItem("nny_fb");
if(r){
var saved=JSON.parse(r);
if(saved.projectId)FB_CFG=Object.assign({},FB_CFG,saved);
}
}catch(e){}
var _fbInitTry=0;
function doFirebaseInit(){
_fbInitTry++;
if(typeof firebase==='undefined'){
if(_fbInitTry<30){setTimeout(doFirebaseInit,500);}
else{console.error('[NNY Firebase] SDK読み込みタイムアウト');}
return;
}
var ok=initFirebase();
if(ok){
loadFromFirebase(function(){renderProducts();setTimeout(_autoSyncProducts,1000);setTimeout(startFbPolling,2000);});
} else if(_fbInitTry<30){
setTimeout(doFirebaseInit,500);
}
}
window.addEventListener('load',function(){
setTimeout(doFirebaseInit,100);
});
})();
function initFirebase(){
try{
if(!FB_CFG.projectId||!FB_CFG.apiKey){
console.error('[NNY Firebase] 設定不足: projectId=',FB_CFG.projectId);
return false;
}
if(typeof firebase==='undefined'){
console.error('[NNY Firebase] Firebase SDK未読み込み');
return false;
}
if(fbDb){fbEnabled=true;updateFBStatus(true,FB_CFG.projectId);return true;}
var app;
try{
app=firebase.app();
}catch(e2){
app=firebase.initializeApp({
apiKey:FB_CFG.apiKey,
authDomain:FB_CFG.authDomain,
projectId:FB_CFG.projectId,
storageBucket:FB_CFG.storageBucket,
messagingSenderId:FB_CFG.messagingSenderId||'',
appId:FB_CFG.appId
});
}
fbDb=firebase.firestore();
try{fbDb.settings({experimentalForceLongPolling:true});}catch(se){}
fbEnabled=true;
updateFBStatus(true,FB_CFG.projectId);
return true;
}catch(e){
console.error('[NNY Firebase] 接続エラー:',e.message);
fbEnabled=false;
updateFBStatus(false,'');
return false;
}
}
function updateFBStatus(ok,msg){
var ico=document.getElementById("fb-status-ico"),txt=document.getElementById("fb-status-txt"),bar=document.getElementById("fb-status-bar");
if(!ico||!txt||!bar)return;
if(ok){ico.textContent="🟢";txt.textContent=(adminLang==="vi"?"Đã kết nối: ":"接続済み: ")+msg;bar.style.cssText="background:var(--gp);border-color:var(--g3);color:var(--g1)";}
else{ico.textContent="⚪";txt.textContent=adminLang==="vi"?"Chưa kết nối Firebase":"Firebase未接続";bar.style.cssText="background:#fff8e1;border-color:#f0c040;color:#7a5c00";}
}
function saveFirebaseConfig(){
FB_CFG.apiKey=((document.getElementById("fb-apikey")||{}).value||"").trim();
FB_CFG.authDomain=((document.getElementById("fb-authdomain")||{}).value||"").trim();
FB_CFG.projectId=((document.getElementById("fb-projectid")||{}).value||"").trim();
FB_CFG.storageBucket=((document.getElementById("fb-bucket")||{}).value||"").trim();
FB_CFG.appId=((document.getElementById("fb-appid")||{}).value||"").trim();
FB_CFG.messagingSenderId=((document.getElementById("fb-senderid")||{}).value||"").trim();
if(!FB_CFG.projectId){alert(adminLang==="vi"?"Vui lòng nhập Project ID":"Project IDを入力してください");return;}
localStorage.setItem("nny_fb",JSON.stringify(FB_CFG));
var ok=initFirebase();
var res=document.getElementById("fb-result");
if(res){res.style.display="block";res.style.background=ok?"var(--gp)":"var(--rp)";res.style.color=ok?"var(--g2)":"var(--red)";res.textContent=ok?(adminLang==="vi"?"✅ Kết nối thành công! Đang đồng bộ...":"✅ 接続成功！同期中..."):(adminLang==="vi"?"❌ Kết nối thất bại":"❌ 接続失敗");}
if(ok)syncToFirebase();
}
function loadFBConfigUI(){
var fields={"fb-apikey":"apiKey","fb-authdomain":"authDomain","fb-projectid":"projectId","fb-bucket":"storageBucket","fb-appid":"appId"};
Object.keys(fields).forEach(function(id){var e=document.getElementById(id);if(e&&FB_CFG[fields[id]])e.value=FB_CFG[fields[id]];});
if(fbEnabled)updateFBStatus(true,FB_CFG.projectId);
}
function syncToFirebase(){
if(!fbEnabled||!fbDb){showToast(adminLang==="vi"?"⚠ Firebase chưa kết nối":"⚠ Firebase未接続");return;}
var b=fbDb.batch();
ORDERS.forEach(function(o){b.set(fbDb.collection("orders").doc(o.no.replace(/[^a-zA-Z0-9]/g,"-")),o);});
b.set(fbDb.collection("settings").doc("notify_list"),{list:NOTIFY_LIST});
b.commit().then(function(){
var done=0;
PRODUCTS.forEach(function(p){
fbSaveProduct(p);
done++;
if(done===PRODUCTS.length)showToast(adminLang==="vi"?"☁️ Đồng bộ thành công!":"☁️ 同期完了！商品・画像も保存しました");
});
}).catch(function(e){console.error(e);});
}
function loadFromFirebase(cb){
if(!fbEnabled||!fbDb){if(cb)cb(false);return;}
var d={o:false,p:false,n:false};
function chk(){if(d.o&&d.p&&d.n&&cb)cb(true);}
fbDb.collection("orders").get().then(function(s){var a=[];s.forEach(function(doc){a.push(doc.data());});if(a.length){
var localOrders=ORDERS;
ORDERS=a.map(function(fbOrder){
var local=localOrders.find(function(lo){return lo.no===fbOrder.no;});
if(local&&local.screenshot&&!fbOrder.screenshotUrl)fbOrder.screenshot=local.screenshot;
if(local&&local.screenshotUrl)fbOrder.screenshotUrl=local.screenshotUrl;
return fbOrder;
});
localOrders.forEach(function(lo){
if(!ORDERS.find(function(o){return o.no===lo.no;}))ORDERS.push(lo);
});
}
d.o=true;chk();
fbDb.collection("reviews").doc("all").get().then(function(doc){
if(doc.exists&&doc.data().data){
var fbRv=doc.data().data;
Object.keys(fbRv).forEach(function(pid){
if(!REVIEWS[pid]||REVIEWS[pid].length===0)REVIEWS[pid]=fbRv[pid];
});
if(typeof normalizeReviews==="function")normalizeReviews();
try{localStorage.setItem("nny_reviews",JSON.stringify(REVIEWS));}catch(e){}
}
}).catch(function(){});}).catch(function(){d.o=true;chk();});
d.p=true;chk();
fbDb.collection("settings").doc("notify_list").get().then(function(doc){if(doc.exists&&doc.data().list)NOTIFY_LIST=doc.data().list;d.n=true;chk();}).catch(function(){d.n=true;chk();});
}
function fbSaveOrder(o){if(!fbEnabled||!fbDb)return;fbDb.collection("orders").doc(o.no.replace(/[^a-zA-Z0-9]/g,"-")).set(o).catch(function(e){console.error(e);});}
function fbSaveNotifyList(){if(!fbEnabled||!fbDb)return;fbDb.collection("settings").doc("notify_list").set({list:NOTIFY_LIST}).catch(function(e){console.error(e);});}
var analyticsPeriod="month";
function setPeriod(p,btn){analyticsPeriod=p;document.querySelectorAll(".period-tab").forEach(function(el){el.classList.remove("on");});if(btn)btn.classList.add("on");renderAnalytics();}
function filterByPeriod(orders){
var now=new Date();
return orders.filter(function(o){
var d=new Date(o.ts);if(isNaN(d.getTime())){var m=(o.ts||"").match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);if(m)d=new Date(m[1],m[2]-1,m[3]);}
if(isNaN(d.getTime()))return true;
if(analyticsPeriod==="month")return d.getFullYear()===now.getFullYear()&&d.getMonth()===now.getMonth();
if(analyticsPeriod==="3months"){var t=new Date(now);t.setMonth(now.getMonth()-3);return d>=t;}
return true;
});
}
function vndS(n){return n>=1000000?(n/1000000).toFixed(1)+"M":n>=1000?(n/1000).toFixed(0)+"K":String(n);}
function renderAnalytics(){
var orders=filterByPeriod(ORDERS);
var tot=orders.reduce(function(s,o){return s+o.tot;},0);
var avg=orders.length?Math.round(tot/orders.length):0;
var items=orders.reduce(function(s,o){return s+(o.items||[]).reduce(function(ss,i){return ss+i.qty;},0);},0);
function setEl(id,v){var e=document.getElementById(id);if(e)e.textContent=v;}
setEl("kpi-rev",vnd(tot));setEl("kpi-orders",orders.length);setEl("kpi-avg",vnd(avg));setEl("kpi-items",items);
var sub=document.getElementById("chart-rev-sub");
if(sub)sub.textContent=analyticsPeriod==="month"?new Date().toLocaleDateString("ja-JP",{year:"numeric",month:"long"}):analyticsPeriod==="3months"?(adminLang==="vi"?"3 tháng gần nhất":"直近3ヶ月"):(adminLang==="vi"?"Toàn bộ":"全期間");
renderLineChart(orders);renderProductBar(orders);renderPayDonut(orders);renderAgeDonut(orders);renderHowKnowBar(orders);renderRepeatStats(orders);
}
function renderLineChart(orders){
var svg=document.getElementById("line-svg");if(!svg)return;
var nd=analyticsPeriod==="3months"?90:analyticsPeriod==="month"?new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate():60;
var start=new Date();start.setDate(start.getDate()-nd+1);start.setHours(0,0,0,0);
var dm={};for(var i=0;i<nd;i++){var d=new Date(start);d.setDate(start.getDate()+i);dm[d.getMonth()+"/"+d.getDate()]=0;}
orders.forEach(function(o){var d=new Date(o.ts);if(isNaN(d.getTime())){var m=(o.ts||"").match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);if(m)d=new Date(m[1],m[2]-1,m[3]);}var k=d.getMonth()+"/"+d.getDate();if(dm.hasOwnProperty(k))dm[k]+=o.tot;});
var vals=Object.values(dm),keys=Object.keys(dm),mx=Math.max.apply(null,vals)||1;
var W=600,H=150,PL=40,PR=10,PT=10,PB=30,iW=W-PL-PR,iH=H-PT-PB,n=vals.length;
var pts=vals.map(function(v,i){return(PL+i/(n-1||1)*iW).toFixed(1)+","+(PT+iH*(1-v/mx)).toFixed(1);});
var html="";
for(var g=0;g<=4;g++){var gy=PT+g/4*iH;html+='<line x1="'+PL+'" y1="'+gy.toFixed(1)+'" x2="'+(W-PR)+'" y2="'+gy.toFixed(1)+'" stroke="#e6f4e8" stroke-width="1"/>';}
html+='<path d="M '+PL+","+(PT+iH)+" L "+pts[0]+" "+pts.slice(1).map(function(p){return"L "+p;}).join(" ")+" L "+(PL+iW)+","+(PT+iH)+' Z" fill="rgba(26,107,42,0.08)"/>';
html+='<polyline points="'+pts.join(" ")+'" fill="none" stroke="#2b8a3e" stroke-width="2.5"/>';
var step=Math.ceil(n/8);
keys.forEach(function(k,i){if(i%step===0||i===n-1){var x=PL+i/(n-1||1)*iW;html+='<text x="'+x.toFixed(1)+'" y="'+(H-8)+'" text-anchor="middle" fill="#9ab0a0" font-size="9">'+k+'</text>';}});
svg.innerHTML=html;
}
var PAL=["#1a6b2a","#2b8a3e","#3da84f","#72c47f","#c9960a","#a8ddb0","#e8c060","#f0e080"];
function renderBarChart(cid,data){
var el=document.getElementById(cid);if(!el)return;
if(!data.length){el.innerHTML='<div class="no-data-msg"><div class="no-data-ico">📊</div>'+(adminLang==="vi"?"Chưa có dữ liệu":"データなし")+'</div>';return;}
var mv=data[0].val||1,html="";
data.forEach(function(d,i){var pct=Math.round(d.val/mv*100),col=PAL[i%PAL.length];
html+='<div class="bar-row"><div class="bar-label" title="'+d.label+'">'+d.label+'</div><div class="bar-track"><div class="bar-fill" style="width:'+pct+'%;background:'+col+';">'+(pct>18?'<span class="bar-val">'+d.display+'</span>':"")+'</div>'+(pct<=18&&d.val>0?'<span class="bar-val outside">'+d.display+'</span>':"")+'</div></div>';
});
el.innerHTML=html;
}
function renderDonut(sid,lid,data){
var svg=document.getElementById(sid),leg=document.getElementById(lid);if(!svg||!leg)return;
var total=data.reduce(function(s,d){return s+d.val;},0);
if(!total){svg.innerHTML='<text x="50" y="55" text-anchor="middle" fill="#9ab0a0" font-size="10">'+(adminLang==="vi"?"Trống":"なし")+'</text>';leg.innerHTML="";return;}
var cx=50,cy=50,r=38,ri=24,angle=-Math.PI/2,html="",lh="";
data.forEach(function(d){
var sw=d.val/total*Math.PI*2;
var x1=cx+r*Math.cos(angle),y1=cy+r*Math.sin(angle),x2=cx+r*Math.cos(angle+sw),y2=cy+r*Math.sin(angle+sw);
var xi1=cx+ri*Math.cos(angle),yi1=cy+ri*Math.sin(angle),xi2=cx+ri*Math.cos(angle+sw),yi2=cy+ri*Math.sin(angle+sw);
var lg=sw>Math.PI?1:0;
if(sw>0.01)html+='<path d="M '+x1.toFixed(2)+','+y1.toFixed(2)+' A '+r+','+r+' 0 '+lg+',1 '+x2.toFixed(2)+','+y2.toFixed(2)+' L '+xi2.toFixed(2)+','+yi2.toFixed(2)+' A '+ri+','+ri+' 0 '+lg+',0 '+xi1.toFixed(2)+','+yi1.toFixed(2)+' Z" fill="'+d.color+'" stroke="#fff" stroke-width="1.5"/>';
angle+=sw;
lh+='<div class="donut-legend-item"><span class="donut-dot" style="background:'+d.color+'"></span><span class="donut-lbl">'+d.label+'</span><span class="donut-pct">'+Math.round(d.val/total*100)+'%</span></div>';
});
svg.innerHTML=html;leg.innerHTML=lh;
}
function renderProductBar(orders){
var m={};
orders.forEach(function(o){
(o.items||[]).forEach(function(it){
var lbl=adminLang==="vi"?(it.vi||it.ja):it.ja;
m[lbl]=(m[lbl]||0)+it.qty;
});
});
renderBarChart("bar-products",Object.keys(m).map(function(k){
return{label:k,val:m[k],display:m[k]+(adminLang==="vi"?" sp":" 個")};
}).sort(function(a,b){return b.val-a.val;}).slice(0,8));
}
function renderPayDonut(orders){
var m={vietqr:0};orders.forEach(function(o){m.vietqr++;});
renderDonut("donut-pay","legend-pay",[{label:"VietQR",val:m.vietqr,color:"#1a6b2a"}].filter(function(d){return d.val>0;}));
}
function renderAgeDonut(orders){
var m={"20s":0,"30s":0,"40s":0,"50plus":0,"":0};orders.forEach(function(o){var k=o.age||"";if(!m.hasOwnProperty(k))k="";m[k]++;});
var lb={"20s":"20代","30s":"30代","40s":"40代","50plus":"50+","":"不明"},cl={"20s":"#3da84f","30s":"#1a6b2a","40s":"#72c47f","50plus":"#c9960a","":"#ccc"};
renderDonut("donut-age","legend-age",Object.keys(m).filter(function(k){return m[k]>0;}).map(function(k){return{label:lb[k],val:m[k],color:cl[k]};}));
}
function renderHowKnowBar(orders){
var m={zalo:0,facebook:0,friend:0,market:0,other:0,"":0};orders.forEach(function(o){var k=o.howknow||"";if(!m.hasOwnProperty(k))k="";m[k]++;});
var lb={zalo:"Zalo",facebook:"Facebook",friend:adminLang==="vi"?"Bạn bè":"知人",market:adminLang==="vi"?"Chợ":"市場",other:adminLang==="vi"?"Khác":"他","":adminLang==="vi"?"Không rõ":"不明"};
renderBarChart("bar-howknow",Object.keys(m).filter(function(k){return m[k]>0;}).map(function(k){return{label:lb[k],val:m[k],display:m[k]+(adminLang==="vi"?" người":" 人")};}).sort(function(a,b){return b.val-a.val;}));
}
function renderRepeatStats(orders){
var el=document.getElementById("repeat-stats");if(!el)return;
var m={};orders.forEach(function(o){var k=((o.email||o.phone||"").trim()).toLowerCase();if(k)m[k]=(m[k]||0)+1;});
var total=Object.keys(m).length,rep=Object.values(m).filter(function(c){return c>1;}).length,pct=total?Math.round(rep/total*100):0;
el.innerHTML='<div style="text-align:center;margin-bottom:16px;"><div class="stat-val" style="font-size:36px;">'+pct+'%</div><div style="font-size:11px;color:var(--muted);margin-top:4px;">'+(adminLang==="vi"?"Tỷ lệ khách quay lại":"リピート率")+'</div></div><div style="background:var(--gs);border-radius:3px;height:18px;overflow:hidden;margin-bottom:10px;"><div style="height:100%;width:'+pct+'%;background:var(--g1);border-radius:3px;"></div></div><div style="display:flex;justify-content:space-between;font-size:10.5px;color:var(--muted);"><span>🔄 '+rep+'</span><span>1️⃣ '+(total-rep)+'</span><span>👥 '+total+'</span></div>';
}
function openReceiptPDF(){
var card=document.querySelector("#view-receipt .receipt-card");
if(!card){showToast(L("領収証が見つかりません","Receipt not found","Không tìm thấy hóa đơn"));return;}
var styleId="receipt-print-style";
var old=document.getElementById(styleId);if(old)old.remove();
var style=document.createElement("style");
style.id=styleId;
style.textContent="@media print{"
+"body>*{display:none!important;}"
+"#user-screen{display:block!important;}"
+".view{display:none!important;}"
+"#view-receipt{display:block!important;}"
+".receipt-actions,.receipt-foot,.float-cart,header,.prog-bar,.admin-fab{display:none!important;}"
+".receipt-card{box-shadow:none!important;border:none!important;max-width:100%!important;}"
+".main{padding:0!important;}"
+"body{background:#fff!important;}"
+"}";
document.head.appendChild(style);
var us=document.getElementById("user-screen");
var prevDisplay=us?us.style.display:"";
if(us)us.style.display="block";
var views=document.querySelectorAll(".view");
var prevViews=[];
views.forEach(function(v){prevViews.push(v.style.display);v.style.display="none";});
var rv=document.getElementById("view-receipt");
if(rv)rv.style.display="block";
setTimeout(function(){
window.print();
setTimeout(function(){
style.remove();
if(us)us.style.display=prevDisplay;
views.forEach(function(v,i){v.style.display=prevViews[i]||"";});
},500);
},100);
}
var histReceiptOrder=null;
function showHistReceipt(i){
var o=ORDER_HISTORY[i];
if(!o){alert(L("注文データが見つかりません","Order not found","Không tìm thấy dữ liệu đơn hàng"));return;}
if(!o.items)o.items=[];
histReceiptOrder=o;
var body=buildReceiptHTML(o);
var el=document.getElementById("hist-receipt-body");if(el)el.innerHTML=body;
var ttl=document.getElementById("hrm-title");if(ttl)ttl.textContent="📄 "+o.no;
var modal=document.getElementById("hist-receipt-modal");
if(modal){modal.style.display="flex";modal.style.alignItems="center";modal.style.justifyContent="center";}
document.body.style.overflow="hidden";
}
function closeHistReceiptModal(){
var m=document.getElementById("hist-receipt-modal");if(m)m.style.display="none";
document.body.style.overflow="";
}
function pdfHistReceipt(){
if(!histReceiptOrder)return;
buildReceipt(histReceiptOrder);
var us=document.getElementById("user-screen");if(us)us.style.display="block";
document.querySelectorAll(".view").forEach(function(el){el.classList.remove("on");el.style.display="none";});
var rv=document.getElementById("view-receipt");if(rv){rv.classList.add("on");rv.style.display="block";}
closeHistReceiptModal();
setTimeout(function(){openReceiptPDF();},300);
}
function buildReceiptHTML(o){
var pm={vietqr:"🏦 "+L("銀行振込","Bank Transfer","Chuyển khoản")};
var dm={deliver:L("配達","Delivery","Giao hàng"),pickup:L("受取","Pickup","Tự lấy"),ship:L("配送","Shipping","Giao hàng")};
var rows="";
(o.items||[]).forEach(function(it){
var nm=lang==="ja"?(it.ja||""):lang==="en"?(it.en||it.ja||""):(it.vi||""),unit=lang==="ja"?(it.unit||""):lang==="en"?(it.uniten||it.unit||""):(it.unitvi||it.unit||"");
rows+="<tr><td style='padding:7px 8px;'>"+it.e+" "+nm+"</td><td style='text-align:center;padding:7px 8px;'>"+it.qty+" "+unit+"</td><td style='text-align:right;padding:7px 8px;'>"+vnd(it.price)+"</td><td style='text-align:right;font-weight:800;padding:7px 8px;color:#1a6b2a'>"+vnd(it.qty*it.price)+"</td></tr>";
});
return "<div style='text-align:center;padding:16px 0 12px;'><div style='font-size:32px;margin-bottom:6px;'>🌿</div><div style='font-size:20px;font-weight:900;color:#1a6b2a;'>NICO NICO YASAI</div><div style='font-size:11px;color:#666;margin-top:4px;'>"+(L("ご注文ありがとうございます","Thank you for your order","Cảm ơn bạn đã đặt hàng"))+"</div></div>"
+"<table style='width:100%;border-collapse:collapse;font-size:11.5px;margin-bottom:12px;'>"
+"<tr style='background:#f5faf5;'><td style='padding:7px 8px;font-weight:700;'>"+(L("注文番号","Order No.","Mã đơn"))+"</td><td style='padding:7px 8px;font-weight:800;color:#1a6b2a;'>"+(o.no||"")+"</td></tr>"
+"<tr><td style='padding:7px 8px;font-weight:700;'>"+(L("日時","Date","Ngày"))+"</td><td style='padding:7px 8px;'>"+(o.ts||"")+"</td></tr>"
+"<tr style='background:#f5faf5;'><td style='padding:7px 8px;font-weight:700;'>"+(L("お名前","Name","Tên"))+"</td><td style='padding:7px 8px;'>"+(o.name||"")+"</td></tr>"
+"<tr><td style='padding:7px 8px;font-weight:700;'>"+(L("電話","Phone","ĐT"))+"</td><td style='padding:7px 8px;'>"+(o.phone||"")+"</td></tr>"
+"<tr style='background:#f5faf5;'><td style='padding:7px 8px;font-weight:700;'>"+(L("住所","Address","Địa chỉ"))+"</td><td style='padding:7px 8px;'>"+(o.addr||"")+"</td></tr>"
+"<tr><td style='padding:7px 8px;font-weight:700;'>"+(L("受取","Delivery","Nhận"))+"</td><td style='padding:7px 8px;'>"+(dm[o.delivery]||o.delivery||"")+"</td></tr>"
+"<tr style='background:#f5faf5;'><td style='padding:7px 8px;font-weight:700;'>"+(L("支払い","Payment","TT"))+"</td><td style='padding:7px 8px;'>"+(pm[o.payment]||o.payment||"")+"</td></tr>"
+"</table>"
+"<table style='width:100%;border-collapse:collapse;font-size:11.5px;'><thead><tr style='background:#1a6b2a;color:#fff;'><th style='padding:7px 8px;text-align:left;'>"+(L("商品","Item","Sản phẩm"))+"</th><th style='padding:7px 8px;text-align:center;'>"+(L("数量","Qty","SL"))+"</th><th style='padding:7px 8px;text-align:right;'>"+(L("単価","Unit Price","Đơn giá"))+"</th><th style='padding:7px 8px;text-align:right;'>"+(L("小計","Subtotal","T.tiền"))+"</th></tr></thead><tbody>"+rows+"</tbody>"
+"<tfoot><tr style='border-top:2px solid #1a6b2a;'><td colspan='3' style='padding:10px 8px;font-weight:800;font-size:13px;text-align:right;'>"+(L("合計","Total","Tổng"))+"</td><td style='padding:10px 8px;font-weight:900;font-size:17px;color:#1a6b2a;text-align:right;'>"+vnd(o.tot)+"</td></tr></tfoot></table>"
+(o.note?"<div style='margin-top:12px;padding:10px 12px;background:#f5faf5;border-radius:6px;font-size:11.5px;'><b>"+(L("備考：","Notes: ","Ghi chú: "))+"</b>"+o.note+"</div>":"");
}
// ADMIN — 変数
var ADMIN_PIN = "1234";
var adminLang = "vi";
(function(){
try{var p=localStorage.getItem("nny_pin");if(p)ADMIN_PIN=p;}catch(e){}
try{var l=localStorage.getItem("nny_admin_lang");if(l)adminLang=l;}catch(e){}
})();
// PIN 認証
function openPinGate(){
var gate=document.getElementById("pin-gate");
if(!gate)return;
document.body.appendChild(gate);
gate.style.cssText="position:fixed;inset:0;z-index:99999;background:rgba(5,20,8,.92);display:flex;align-items:center;justify-content:center;";
var inp=document.getElementById("pin-input");
if(inp){inp.value="";setTimeout(function(){inp.focus();},100);}
}
function closePinGate(){
var gate=document.getElementById("pin-gate");
if(gate){
gate.classList.remove("open");
gate.style.display="none";
}
}
function checkPin(){
const MAX_FAIL = 10;
const LOCK_MS = 30 * 60 * 1000;
const lockUntil = parseInt(localStorage.getItem('nny_pin_lock') || '0');
if(lockUntil > Date.now()) {
const rem = Math.ceil((lockUntil - Date.now()) / 60000);
alert('アカウントがロックされています。' + rem + '分後に再試行してください。\nTài khoản bị khóa. Thử lại sau ' + rem + ' phút.');
return false;
}
var inp=document.getElementById("pin-input");
if(!inp)return;
var val=inp.value.trim();
if(val==="140506"){
var _g=document.getElementById("pin-gate");
if(_g){_g.classList.remove("open");_g.style.display="none";}
var _us=document.getElementById("user-screen");
if(_us){_us.style.display="none";}
var _as=document.getElementById("admin-screen");
if(_as){_as.classList.remove("on");_as.style.display="none";}
var _os=document.getElementById("owner-screen");
if(_os){
_os.style.display="flex";
_os.style.flexDirection="column";
_os.style.zIndex="99999";
_os.classList.add("on");
setTimeout(function(){
  if(typeof renderOwnerDashboard!=="function")return;
  if(typeof fbEnabled!=="undefined"&&fbEnabled&&typeof fbDb!=="undefined"&&fbDb){
    fbDb.collection("orders").get().then(function(snap){
      var a=[];snap.forEach(function(doc){a.push(doc.data());});
      if(a.length)ORDERS=a;
      renderOwnerDashboard();
      autoSendInvoiceIfNeeded();
    }).catch(function(){renderOwnerDashboard();autoSendInvoiceIfNeeded();});
  }else{renderOwnerDashboard();autoSendInvoiceIfNeeded();}
},100);
}
} else if(val===ADMIN_PIN){
closePinGate();
setTimeout(function(){openAdmin();},30);
} else {
inp.value="";
inp.style.borderColor="var(--red)";
var err=document.getElementById("pin-error");
if(err){err.style.display="block";}
setTimeout(function(){inp.style.borderColor="";if(err)err.style.display="none";},1500);
}
}
document.addEventListener("keydown",function(e){
var gate=document.getElementById("pin-gate");
if(gate&&gate.style.display!=="none"&&gate.style.display!==""&&e.key==="Enter")checkPin();
});
// 管理画面 開閉
function openAdmin(){
var us=document.getElementById("user-screen");
var as=document.getElementById("admin-screen");
if(us)us.style.display="none";
if(as)as.classList.add("on");
loadEJConfigUI();loadBankConfigUI();loadFBConfigUI();
applyAdminI18n();
if(fbEnabled){
loadFromFirebase(function(ok){
renderAdminAll();
if(typeof renderAnalytics==="function")renderAnalytics();
if(ok)showToast(adminLang==="vi"?"☁️ Đã tải dữ liệu từ cloud":"☁️ クラウドからデータを読み込みました");
});
} else {
renderAdminAll();
if(typeof renderAnalytics==="function")renderAnalytics();
}
}
function exitAdmin(){
var _rm=document.getElementById("review-modal");
if(_rm){_rm.classList.remove("open");_rm.style.display="";}
var _wr=document.querySelector(".write-review");
if(_wr)_wr.style.display="";
var _as=document.getElementById("admin-screen");
if(_as){_as.classList.remove("on");_as.style.display="none";}
var as=document.getElementById("admin-screen");
var us=document.getElementById("user-screen");
if(as)as.classList.remove("on");
if(us)us.style.display="block";
renderProducts();
}
// 言語切替
function setAdminLang(l){
adminLang=l;
localStorage.setItem("nny_admin_lang",l);
var bja=document.getElementById("adm-btn-ja");
var bvi=document.getElementById("adm-btn-vi");
if(bja)bja.classList.toggle("on",l==="ja");
if(bvi)bvi.classList.toggle("on",l==="vi");
applyAdminI18n();
renderAdminAll();
if(typeof renderAnalytics==="function")renderAnalytics();
if(typeof renderAdminProducts2==="function")renderAdminProducts2();
}
function applyAdminI18n(){
var isVi=adminLang==="vi";
function s(id,t){var e=document.getElementById(id);if(e)e.textContent=t;}
s("adm-title-sub",isVi?"Quản lý trang trại":"農場管理システム");
s("adm-exit-btn",isVi?"← Thoát":"← 戻る");
s("adm-orders-ttl",isVi?"Đơn hàng":"注文一覧");
s("adm-products-ttl",isVi?"Sản phẩm":"商品管理");
s("adm-pay-ttl",isVi?"Cấu hình thanh toán":"支払い設定");
s("adm-db-ttl",isVi?"Dữ liệu đơn hàng":"注文データ");
s("adm-notify-ttl",isVi?"Thông báo nhập hàng":"入荷通知");
s("adm-settings-ttl",isVi?"Cài đặt":"設定");
s("adm-analytics-ttl",isVi?"Phân tích dữ liệu":"データ分析");
s("aq-total-lbl",isVi?"Tổng đơn hàng":"総注文数");
s("aq-pending-lbl",isVi?"Chờ xử lý":"未処理");
s("aq-rev-lbl",isVi?"Doanh thu":"売上合計");
s("aq-pub-lbl",isVi?"Sản phẩm":"公開商品数");
s("adm-pub-all-btn",isVi?"✅ Hiện tất cả":"✅ 全公開");
s("adm-hide-all-btn",isVi?"🔴 Ẩn tất cả":"🔴 全非公開");
s("adm-season-btn",isVi?"🌸 Theo mùa":"🌸 季節のみ");
s("adm-add-prod-btn",isVi?"➕ Thêm sản phẩm":"➕ 商品を追加");
s("adm-csv-btn",isVi?"⬇ CSV":"⬇ CSV");
s("adm-copy-btn",isVi?"📋 Copy":"📋 コピー");
s("adm-clear-btn",isVi?"🗑 Xóa tất cả":"🗑 クリア");
s("adm-bank-save-btn",isVi?"💾 Lưu cấu hình":"💾 設定を保存");
s("adm-sheets-save",isVi?"💾 Lưu":"💾 保存");
s("adm-vietqr-ttl",isVi?"VietQR — Tài khoản ngân hàng":"VietQR — 銀行口座設定");
s("adm-vietqr-desc",isVi?"Nhập thông tin tài khoản ngân hàng. Khi khách đặt hàng, QR sẽ tự động tạo.":"銀行口座を設定すると注文時にQRが自動生成されます。");
s("period-month",isVi?"Tháng này":"今月");
s("period-3m",isVi?"3 tháng":"3ヶ月");
s("period-all",isVi?"Tất cả":"全期間");
s("kpi-rev-lbl",isVi?"Doanh thu":"売上");
s("kpi-orders-lbl",isVi?"Đơn hàng":"注文数");
s("kpi-avg-lbl",isVi?"Đơn TB":"平均単価");
s("kpi-items-lbl",isVi?"SP bán ra":"販売数量");
s("chart-rev-title",isVi?"Doanh thu theo ngày":"日別売上推移");
s("chart-prod-title",isVi?"Sản phẩm bán chạy":"商品別ランキング");
s("chart-pay-title",isVi?"Phương thức thanh toán":"支払い方法");
s("chart-age-title",isVi?"Độ tuổi khách hàng":"顧客年齢層");
s("chart-howknow-title",isVi?"Biết qua kênh nào":"流入経路");
s("chart-repeat-title",isVi?"Khách hàng quay lại":"リピート率");
s("ej-save-btn",isVi?"💾 Lưu cài đặt":"💾 設定を保存");
s("ej-test-btn",isVi?"🧪 Gửi thử":"🧪 テスト送信");
s("fb-sync-btn",isVi?"☁️ Đồng bộ ngay":"☁️ 今すぐ同期");
var pinCard=document.getElementById("pin-change-card-title");
if(pinCard)pinCard.textContent=isVi?"🔐 Đổi mã PIN quản trị":"🔐 管理者PINを変更";
var pinLbl=document.getElementById("pin-change-lbl");
if(pinLbl)pinLbl.textContent=isVi?"Mã PIN mới (tối thiểu 4 ký tự)":"新しいPINコード（4文字以上）";
var pinBtn=document.getElementById("pin-change-btn");
if(pinBtn)pinBtn.textContent=isVi?"💾 Đổi PIN":"💾 PINを変更";
var siteTtl=document.getElementById("adm-site-ttl");
if(siteTtl)siteTtl.textContent=isVi?"🌿 Nội dung trang":"🌿 サイト設定";
var siteSave=document.getElementById("adm-site-save-btn");
if(siteSave)siteSave.textContent=isVi?"💾 Lưu":"💾 保存";
var gtCard=document.getElementById("gtrans-card-title");
if(gtCard)gtCard.textContent=isVi?"🌐 Google Dịch API":"🌐 Google翻訳 API";
var gtDesc=document.getElementById("gtrans-desc");
if(gtDesc)gtDesc.textContent=isVi?"Tự động dịch tên và mô tả sản phẩm.":"商品名・説明を自動翻訳します。";
var gtSave=document.getElementById("gtrans-save-btn");
if(gtSave)gtSave.textContent=isVi?"💾 Lưu":"💾 保存";
var rvTtl=document.getElementById("adm-review-ttl");
if(rvTtl)rvTtl.textContent=isVi?"Quản lý đánh giá":"レビュー管理";
var qrTtl=document.getElementById("qr-modal-title");
if(qrTtl)qrTtl.textContent=isVi?"Thanh toán":"お支払い";
var qrDone=document.getElementById("qr-done-btn");
if(qrDone)qrDone.textContent=isVi?"✅ Xác nhận đơn hàng":"✅ 注文確定";
var ntfTtl=document.getElementById("ntf-modal-title");
if(ntfTtl)ntfTtl.textContent=isVi?"🔔 Thông báo nhập hàng":"🔔 入荷通知";
var ntfDesc=document.getElementById("ntf-modal-desc");
if(ntfDesc)ntfDesc.textContent=isVi?"Chúng tôi sẽ thông báo qua email khi hàng được bổ sung.":"在庫が補充されたらメールでお知らせします。";
var ntfBtn=document.getElementById("ntf-submit-btn");
if(ntfBtn)ntfBtn.textContent=isVi?"🔔 Nhận thông báo":"🔔 通知を受け取る";
var hrm=document.getElementById("hrm-title");
if(hrm)hrm.textContent=isVi?"📄 Hóa đơn":"📄 領収証";
var ssUpload=document.getElementById("ss-upload-label");
if(ssUpload)ssUpload.textContent=isVi?"📷 Tải lên ảnh chuyển khoản":"📷 スクリーンショットをアップロード";
s("adm-exp-lbl",isVi?"Xuất dữ liệu":"データ出力");
s("sheets-url-label",isVi?"📊 Google Sheets URL":"📊 Sheets URL");
var fbCard=document.getElementById("fb-card-title");
if(fbCard)fbCard.textContent=isVi?"🔥 Firebase — Lưu trữ đám mây":"🔥 Firebase — クラウド保存";
var topTitle=document.getElementById("adm-topbar-title");
if(topTitle)topTitle.innerHTML='<img class="admin-topbar-logo" src="'+topTitle.querySelector("img").src+'" alt=""><span>'+(isVi?"Bảng điều khiển":"管理パネル")+'</span>';
var exitLbl=document.getElementById("adm-exit-lbl");
if(exitLbl)exitLbl.textContent=isVi?"Thoát":"退出";
var admSub=document.getElementById("adm-title-sub");
if(admSub)admSub.textContent=isVi?"Quản lý trang trại":"農場管理システム";
var fbSub=document.getElementById("fb-card-subtitle");
if(fbSub)fbSub.textContent=isVi?"Lưu trữ dữ liệu đám mây":"クラウドデータ保存";
var ejSub=document.getElementById("ej-card-subtitle");
if(ejSub)ejSub.textContent=isVi?"Gửi email tự động":"自動メール送信";
s("chart-hour-title",isVi?"Đơn hàng theo giờ":"時間帯別注文");
s("chart-family-title",isVi?"Quy mô gia đình":"家族構成");
s("chart-gender-title",isVi?"Giới tính khách hàng":"性別");
s("chart-repeat-title",isVi?"Khách hàng quay lại":"リピート率");
}
// renderAdminAll
function renderAdminAll(){
renderAdminStats();
renderAdminOrders2();
renderAdminProducts2();
renderAdminDB2();
renderAdminNotify2();
renderAdminReviews();
}
// 統計
function renderAdminStats(){
var total=ORDERS.length;
var pending=ORDERS.filter(function(o){return o.status!=="done";}).length;
var rev=ORDERS.filter(function(o){return o.status==="done";}).reduce(function(s,o){return s+o.tot;},0);
var pub=PRODUCTS.filter(function(p){return p.pub;}).length;
function setEl(id,v){var e=document.getElementById(id);if(e)e.textContent=v;}
setEl("aq-total",total);
setEl("aq-pending",pending);
setEl("aq-rev",vnd(rev));
setEl("aq-pub",pub);
}
// 注文一覧
function renderAdminOrders2(){
var elP=document.getElementById("adm-orders-list-pending");
var elD=document.getElementById("adm-orders-list-done");
if(!elP||!elD)return;
if(!ORDERS.length){
elP.innerHTML='<div style="text-align:center;padding:32px;color:var(--ghost);font-size:13px;">'+(adminLang==="vi"?"Chưa có đơn hàng nào":"注文はまだありません")+'</div>';
elD.innerHTML="";
return;
}
var sorted=[].concat(ORDERS).sort(function(a,b){return a.ts<b.ts?1:-1;});
var pending=sorted.filter(function(o){return o.status!=="done";});
var done=sorted.filter(function(o){return o.status==="done";});
var cntP=document.getElementById("ord-tab-cnt-pending");
var cntD=document.getElementById("ord-tab-cnt-done");
if(cntP)cntP.textContent=pending.length;
if(cntD)cntD.textContent=done.length;
var lblP=document.getElementById("ord-tab-lbl-pending");
var lblD=document.getElementById("ord-tab-lbl-done");
if(lblP)lblP.textContent=adminLang==="vi"?"⏳ Chờ thanh toán":"⏳ 入金待ち";
if(lblD)lblD.textContent=adminLang==="vi"?"✅ Hoàn thành":"✅ 完了";
function renderCard(o){
var realIdx=ORDERS.indexOf(o);
var statusCls=o.status==="done"?"st-done":o.status==="pending_payment"?"st-pending":"st-new";
var statusTxt=o.status==="done"?(adminLang==="vi"?"✅ Hoàn thành":"✅ 完了"):o.status==="pending_payment"?(adminLang==="vi"?"⏳ Chờ thanh toán":"⏳ 入金待ち"):(adminLang==="vi"?"🆕 Mới":"🆕 新規");
var tglBtn=o.status==="pending_payment"
?'<button class="ao-btn primary" onclick="toggleOrderStatus('+realIdx+')" style="background:#f0c040;color:#7a5c00;border-color:#f0c040;">'+(adminLang==="vi"?"✅ Xác nhận đã nhận tiền":"✅ 入金確認する")+'</button>'
:'<button class="ao-btn'+(o.status==="done"?"":" primary")+'" onclick="toggleOrderStatus('+realIdx+')">'+(o.status==="done"?(adminLang==="vi"?"↩ Hoàn tác":"↩ 戻す"):(adminLang==="vi"?"✅ Hoàn thành":"✅ 完了にする"))+'</button>';
var items=(o.items||[]).map(function(it){return it.e+" "+(adminLang==="vi"?it.vi:it.ja)+"×"+it.qty;}).join("、");
var isOpen=o.status!=="done";
var bodyId="ao-body-"+realIdx;
var html='<div class="ao-card">';
html+='<div class="ao-head" style="cursor:pointer;" onclick="_toggleOC('+realIdx+')">';
html+='<span class="ao-no">'+o.no+'</span>';
html+='<span class="ao-date">'+o.ts+'</span>';
html+='<span class="st-tag '+statusCls+'">'+statusTxt+'</span>';
html+='<span style="margin-left:auto;font-size:12px;color:var(--muted);">'+(isOpen?"▲":"▼")+'</span>';
html+='</div>';
html+='<div id="'+bodyId+'" style="display:'+(isOpen?"block":"none")+';">';
html+='<div class="ao-body">';
html+='<div class="ao-meta">👤 '+o.name+' · 📞 '+o.phone+(o.email?' · '+o.email:"")+'</div>';
html+='<div class="ao-meta">🏠 '+(o.addr||"")+'</div>';
html+='<div class="ao-items">'+items+'</div>';
if(o.payment==="vietqr"){
html+='<div style="display:flex;align-items:center;gap:8px;margin-top:6px;padding-top:6px;border-top:1px solid var(--gp);">';
html+='<span style="font-size:10px;font-weight:800;color:var(--muted);">'+(adminLang==="vi"?"Ảnh CK:":"送金証明:")+'</span>';
var ssDocId=o.screenshotUrl||null;
if(ssDocId){
html+='<img class="ao-ss-thumb" id="ss-thumb-'+realIdx+'" src="" alt="ss" onclick="loadAndShowSS('+realIdx+')" style="width:80px;height:60px;object-fit:cover;border-radius:6px;border:2px solid var(--g3);cursor:zoom-in;background:#f0f0f0;" data-docid="'+ssDocId+'">';
setTimeout(function(ri,did){
if(!fbDb)return;
fbDb.collection('screenshots').doc(did).get().then(function(doc){
if(doc.exists){var thumb=document.getElementById('ss-thumb-'+ri);if(thumb)thumb.src=doc.data().data;}
}).catch(function(){});
}.bind(null,realIdx,ssDocId),300);
html+='<div style="display:flex;flex-direction:column;gap:3px;margin-left:4px;">';
html+='<span style="font-size:10px;font-weight:800;color:var(--muted);">'+(adminLang==="vi"?"Ảnh CK: ✅":"送金証明: ✅")+'</span>';
html+='<span style="font-size:14px;font-weight:900;color:var(--g1);">'+vnd(o.tot)+'</span>';
if(o.status!=="done"){html+='<button onclick="confirmPayAdmin('+realIdx+')" style="margin-top:4px;background:var(--g1);color:#fff;border:none;border-radius:6px;padding:5px 10px;font-size:11px;font-weight:800;cursor:pointer;">✅ '+(adminLang==="vi"?"Xác nhận nhận tiền":"入金確認→完了")+'</button>';}
html+='</div>';
} else {
html+='<div style="display:flex;flex-direction:column;gap:3px;">';
html+='<span style="font-size:10.5px;color:var(--ghost);">⚠ '+(adminLang==="vi"?"Chưa có ảnh":"スクショなし")+'</span>';
html+='<span style="font-size:14px;font-weight:900;color:var(--g1);">'+vnd(o.tot)+'</span>';
html+='</div>';
}
html+='</div>';
}
html+='<div class="ao-tot">'+vnd(o.tot)+'</div>';
html+='<div class="ao-btns">'+tglBtn;
html+='<button class="ao-btn" onclick="adminViewReceipt('+realIdx+')">'+(adminLang==="vi"?"📄 Hóa đơn":"📄 領収証")+'</button>';
html+='</div></div></div></div>';
return html;
}
var htmlP="", htmlD="";
if(pending.length){pending.forEach(function(o){htmlP+=renderCard(o);});}
else{htmlP='<div style="text-align:center;padding:24px;color:var(--ghost);font-size:13px;">'+(adminLang==="vi"?"Không có đơn chờ":"入金待ちの注文はありません")+'</div>';}
if(done.length){done.forEach(function(o){htmlD+=renderCard(o);});}
else{htmlD='<div style="text-align:center;padding:24px;color:var(--ghost);font-size:13px;">'+(adminLang==="vi"?"Chưa có đơn hoàn thành":"完了した注文はありません")+'</div>';}
elP.innerHTML=htmlP;
elD.innerHTML=htmlD;
}
function switchOrderTab(tab){
var lP=document.getElementById("adm-orders-list-pending");
var lD=document.getElementById("adm-orders-list-done");
var bP=document.getElementById("ord-tab-btn-pending");
var bD=document.getElementById("ord-tab-btn-done");
if(lP)lP.style.display=tab==="pending"?"block":"none";
if(lD)lD.style.display=tab==="done"?"block":"none";
if(bP){bP.style.background=tab==="pending"?"var(--g1)":"#f5f5f5";bP.style.color=tab==="pending"?"#fff":"var(--g2)";}
if(bD){bD.style.background=tab==="done"?"var(--g1)":"#f5f5f5";bD.style.color=tab==="done"?"#fff":"var(--g2)";}
}
function toggleOrderCard(bodyId){
var el=document.getElementById(bodyId);
if(!el)return;
el.style.display=el.style.display==="none"?"block":"none";
}
function adminViewReceipt(i){
if(!ORDERS[i])return;
buildReceipt(ORDERS[i]);
exitAdmin();
showView("receipt");
}
// 商品管理
function renderAdminProducts2(){
var el=document.getElementById("adm-prod-grid");
if(!el)return;
var html="";
PRODUCTS.forEach(function(p){
var nm=adminLang==="vi"?p.vi:p.ja;
var sqHtml=(p.variants&&p.variants.length>0?(function(){var _ul=adminLang==="vi"?p.unitvi:p.unit;var rows='';p.variants.forEach(function(v){var sk="stock"+v.replace("g","");var sv=p[sk]!==undefined?p[sk]:p.stock;var pk="price"+v.replace("g","");var pv=p[pk]||p.price;rows+='<div style="background:var(--gp);border-radius:10px;padding:10px;">'+'<div style="font-size:13px;font-weight:800;color:var(--g1);margin-bottom:8px;">'+v+'</div>'+'<div style="display:flex;align-items:center;gap:4px;" onclick="event.stopPropagation()">'+'<button class="sqbtn" onclick="adjVariantStock('+p.id+",'"+v+"'"+',-1)">−</button>'+'<input class="sq-num" id="sq-'+p.id+'-'+v+'" type="number" value="'+sv+'" min="0" onchange="setVariantStock('+p.id+",'"+v+"'"+',this.value)" onclick="this.select()">'+'<button class="sqbtn" onclick="adjVariantStock('+p.id+",'"+v+"'"+',1)">＋</button>'+'<span style="font-size:11px;color:var(--muted);margin-left:3px;">'+_ul+'</span>'+'</div>'+'<div style="display:flex;align-items:center;gap:4px;margin-top:6px;" onclick="event.stopPropagation()">'+'<input type="number" id="pe-price-'+p.id+'-'+v+'" value="'+pv+'" min="0" step="1000" onchange="saveVariantPrice('+p.id+",'"+v+"'"+',this.value)" onclick="this.select()" style="width:80px;font-size:12px;font-weight:700;border:2px solid var(--g3);border-radius:6px;padding:4px 8px;text-align:right;">'+'<span style="font-size:11px;color:var(--g2);">₫</span>'+'</div>'+'</div>';});return '<div class="stock-quick" onclick="event.stopPropagation()"><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">'+rows+'</div></div>';})():'<div onclick="event.stopPropagation()" style="display:flex;flex-direction:column;gap:5px;"><div style="display:flex;align-items:center;gap:4px;"><button class="sqbtn" onclick="adjStock('+p.id+',-1)">−</button><input class="sq-num" id="sq-'+p.id+'" type="number" value="'+p.stock+'" min="0" onchange="setStock('+p.id+',this.value)" onclick="this.select()"><button class="sqbtn" onclick="adjStock('+p.id+',1)">＋</button><span style="font-size:11px;color:var(--muted);margin-left:3px;">'+(adminLang==="vi"?p.unitvi:p.unit)+'</span></div><div style="display:flex;align-items:center;gap:4px;"><input type="number" id="pe-price-'+p.id+'" value="'+p.price+'" min="0" step="1000" onchange="saveProductEdit('+p.id+')" onclick="this.select()" style="width:80px;font-size:12px;font-weight:700;border:2px solid var(--g3);border-radius:6px;padding:4px 8px;text-align:right;"><span style="font-size:11px;color:var(--g2);">₫</span></div></div>')
+'<div style="margin-top:6px;display:flex;align-items:center;gap:6px;">'
+'<span style="font-size:10px;color:var(--muted);white-space:nowrap;">'+(adminLang==="vi"?"Nhãn:":"バッジ:")+'</span>'
+'<select id="pe-badge-'+p.id+'" onchange="saveProductEdit('+p.id+')" style="font-size:11px;border:1px solid var(--border);border-radius:4px;padding:2px 4px;flex:1;">'+'<option value="" '+((!p.badge||p.badge==="")?"selected":"")+'>— '+(adminLang==="vi"?"Không có":adminLang==="en"?"None":"なし")+'</option>'+'<option value="NEW" '+(p.badge==="NEW"?"selected":"")+'>NEW</option>'+'<option value="おすすめ" '+(p.badge==="おすすめ"?"selected":"")+'>⭐ '+(adminLang==="vi"?"Nổi bật":adminLang==="en"?"Recommended":"おすすめ")+'</option>'+'<option value="旬" '+(p.badge==="旬"?"selected":"")+'>🌿 '+(adminLang==="vi"?"Đặc sản":adminLang==="en"?"In Season":"旬")+'</option>'+'</select>'
+'</div>'
+'<span class="sq-saved-flash" id="sq-flash-'+p.id+'">✅</span>';
html+='<div class="apc-card" id="apcb-'+p.id+'">';
html+='<div class="apc-head" onclick="tglAPC('+p.id+')" style="'+(p.pub?'':'opacity:0.6;')+'">';
html+='<div style="position:relative;flex-shrink:0;">';
html+='<div class="apc-img" id="apc-img-'+p.id+'">';
if(p.img)html+='<img src="'+p.img+'" alt="" style="display:block">';
else html+=p.e;
html+='</div>';
html+='<span style="position:absolute;bottom:-4px;right:-4px;font-size:10px;font-weight:800;padding:2px 5px;border-radius:6px;background:'+(p.pub?'var(--g1)':'#e53935')+';color:#fff;">'+(p.pub?(adminLang==="vi"?"ON":"公開"):(adminLang==="vi"?"OFF":"非公開"))+'</span>';
html+='</div>';
html+='<div class="apc-info"><div class="apc-name">'+nm+'</div><div class="apc-meta">'+vnd(p.price)+'</div></div>';
html+='<div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0;" onclick="event.stopPropagation()">';
html+=sqHtml;
html+='<label style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:11px;font-weight:800;color:'+(p.pub?'var(--g1)':'var(--muted)')+';white-space:nowrap;" onclick="event.stopPropagation()">';
html+='<input type="checkbox" '+(p.pub?'checked':'')+' onchange="togglePub('+p.id+',this.checked)" style="width:16px;height:16px;accent-color:var(--g1);cursor:pointer;">';
html+=(p.pub?(adminLang==="vi"?"Hiện":"公開"):(adminLang==="vi"?"Ẩn":"非公開"));
html+='</label>';
html+='</div>';
html+='<span class="apc-chevron" id="apce-'+p.id+'" style="margin-left:4px;">›</span>';
html+='</div>';
html+='<div class="apc-body" style="display:none;" id="apcpanel-'+p.id+'">';
html+='<label style="display:flex;align-items:center;gap:8px;margin-bottom:12px;cursor:pointer;">';
html+='<input type="checkbox" '+(p.pub?"checked":"")+'onchange="togglePub('+p.id+',this.checked)" style="width:18px;height:18px;accent-color:var(--g1);">';
html+='<span style="font-size:12px;font-weight:700;">'+(adminLang==="vi"?"Hiển thị":"公開")+'</span></label>';
html+='<div class="apc-field"><label class="apc-lbl">'+(adminLang==="vi"?"Biểu tượng (Emoji)":"絵文字")+'</label>';
html+='<input class="apc-inp" id="ai-emoji-'+p.id+'" value="'+(p.e||"🥗")+'" style="width:80px;font-size:20px;text-align:center;"></div>';
html+='<div class="apc-field"><label class="apc-lbl">'+(adminLang==="vi"?"Tên sản phẩm (Tiếng Nhật)":"商品名（日本語）")+'</label>';
html+='<input class="apc-inp" id="ai-ja-'+p.id+'" value="'+(p.ja||"")+'" placeholder="例：小松菜"></div>';
html+='<div class="apc-field"><label class="apc-lbl">'+(adminLang==="vi"?"Tên sản phẩm (Tiếng Việt)":"商品名（ベトナム語）")+'</label>';
html+='<input class="apc-inp" id="ai-vi-'+p.id+'" value="'+(p.vi||"")+'" placeholder="Ví dụ: Rau cải xanh"></div>';
html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">';
html+='<div class="apc-field"><label class="apc-lbl">'+(adminLang==="vi"?"Đơn vị (JP)":"単位（日本語）")+'</label>';
html+='<input class="apc-inp" id="ai-unit-'+p.id+'" value="'+(p.unit||"個")+'" placeholder="個/束/袋"></div>';
html+='<div class="apc-field"><label class="apc-lbl">'+(adminLang==="vi"?"Đơn vị (VI)":"単位（越語）")+'</label>';
html+='<input class="apc-inp" id="ai-unitvi-'+p.id+'" value="'+(p.unitvi||"cái")+'" placeholder="cái/bó/túi"></div>';
html+='</div>';
html+='<div class="apc-field"><label class="apc-lbl">'+(adminLang==="vi"?"Ảnh sản phẩm":"商品画像")+'</label>';
html+='<div class="apc-img-drop" id="apc-drop-'+p.id+'" ondrop="handleProdImgDrop(event,'+p.id+')" ondragover="event.preventDefault()">';
html+='<input type="file" accept="image/jpeg,image/png,image/gif,image/webp" onchange="handleProdImg(event,'+p.id+')">';
html+='<span>'+(adminLang==="vi"?"📷 Kéo thả hoặc chọn ảnh":"📷 ドラッグ or タップ")+'</span>';
html+='</div></div>';
html+='<div class="apc-field"><label class="apc-lbl">'+(adminLang==="vi"?"Giá (₫)":"価格（₫）")+'</label>';
html+='<input class="apc-inp" type="number" id="ai-p-'+p.id+'" value="'+p.price+'"></div>';
html+='<div class="apc-field"><label class="apc-lbl">'+(adminLang==="vi"?"Mô tả (tiếng Nhật)":"説明（日本語）")+'</label>';
html+='<textarea class="apc-inp" id="ai-dja-'+p.id+'" rows="2">'+( p.dja||"")+'</textarea></div>';
html+='<div class="apc-field"><label class="apc-lbl">'+(adminLang==="vi"?"Mô tả (tiếng Việt)":"説明（ベトナム語）")+'</label>';
html+='<textarea class="apc-inp" id="ai-dvi-'+p.id+'" rows="2">'+(p.dvi||p.dja||"")+'</textarea></div>';
html+='<div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;">';
html+='<button class="apc-save-btn" onclick="saveProd('+p.id+')">'+(adminLang==="vi"?"💾 Lưu":"💾 保存")+'</button>';
html+='<button class="apc-save-btn" onclick="autoTranslateProd('+p.id+')" style="background:var(--gold);color:#7a5c00;border-color:var(--gold);">🌐 '+(adminLang==="vi"?"Dịch tự động":"自動翻訳")+'</button>';
html+='<button class="apc-del-btn" onclick="delProd('+p.id+')">'+(adminLang==="vi"?"🗑 Xóa":"🗑 削除")+'</button>';
html+='</div>';
html+='</div>';
html+='</div>';
});
el.innerHTML=html;
}
function tglAPC(id){
var panel=document.getElementById("apcpanel-"+id);
var chev=document.getElementById("apce-"+id);
if(!panel)return;
var open=panel.style.display!=="none";
panel.style.display=open?"none":"block";
if(chev)chev.style.transform=open?"":"rotate(90deg)";
}
function togglePub(id,val){
var p=PRODUCTS.find(function(x){return x.id===id;});
if(p){p.pub=val;saveProducts();renderProducts();}
}
function handleProdImg(ev,id){
var f=ev.target.files[0];if(!f)return;
var reader=new FileReader();
reader.onload=function(e){
var p=PRODUCTS.find(function(x){return x.id===id;});
if(p){p.img=e.target.result;saveProducts();renderAdminProducts2();}
};
reader.readAsDataURL(f);
}
function handleProdImgDrop(ev,id){
ev.preventDefault();
var f=ev.dataTransfer.files[0];if(!f||!f.type.startsWith("image/"))return;
var reader=new FileReader();
reader.onload=function(e){
var p=PRODUCTS.find(function(x){return x.id===id;});
if(p){p.img=e.target.result;saveProducts();renderAdminProducts2();}
};
reader.readAsDataURL(f);
}
function saveProd(id){
var p=PRODUCTS.find(function(x){return x.id===id;});if(!p)return;
var emojiEl=document.getElementById("ai-emoji-"+id);
if(emojiEl&&emojiEl.value.trim())p.e=emojiEl.value.trim();
var jaEl=document.getElementById("ai-ja-"+id);
if(jaEl&&jaEl.value.trim())p.ja=jaEl.value.trim();
var viEl=document.getElementById("ai-vi-"+id);
if(viEl&&viEl.value.trim())p.vi=viEl.value.trim();
var unitEl=document.getElementById("ai-unit-"+id);
if(unitEl&&unitEl.value.trim())p.unit=unitEl.value.trim();
var unitviEl=document.getElementById("ai-unitvi-"+id);
if(unitviEl&&unitviEl.value.trim())p.unitvi=unitviEl.value.trim();
var priceEl=document.getElementById("ai-p-"+id);
if(priceEl)p.price=parseInt(priceEl.value)||0;
var djaEl=document.getElementById("ai-dja-"+id);
if(djaEl)p.dja=djaEl.value;
var dviEl=document.getElementById("ai-dvi-"+id);
if(dviEl)p.dvi=dviEl.value;
var sq=document.getElementById("sq-"+id);
if(sq)p.stock=Math.max(0,parseInt(sq.value)||0);
saveProducts();
if(typeof fbSaveProduct==="function")fbSaveProduct(p);
renderAdminProducts2();
renderProducts();
showToast(adminLang==="vi"?"✅ Đã lưu":"✅ 保存しました");
}
function delProd(id){
if(!confirm(adminLang==="vi"?"Xóa sản phẩm này?":"この商品を削除しますか？"))return;
PRODUCTS=PRODUCTS.filter(function(p){return p.id!==id;});
saveProducts();renderAdminProducts2();renderProducts();
}
function addProduct(){
var newId=Math.max.apply(null,PRODUCTS.map(function(p){return p.id;}))+1;
PRODUCTS.push({id:newId,e:"🌿",ja:"新商品",vi:"Sản phẩm mới",dja:"",dvi:"",price:0,stock:0,pub:false,img:null,unit:"個",unitvi:"sp",season:[]});
saveProducts();renderAdminProducts2();
}
function pubAll(){PRODUCTS.forEach(function(p){p.pub=true;});saveProducts();renderAdminProducts2();renderProducts();}
function unpubAll(){PRODUCTS.forEach(function(p){p.pub=false;});saveProducts();renderAdminProducts2();renderProducts();}
function pubSeason(){
var s=new Date().getMonth();
var seasonMap={0:"winter",1:"winter",2:"spring",3:"spring",4:"spring",5:"summer",6:"summer",7:"summer",8:"autumn",9:"autumn",10:"autumn",11:"winter"};
var cur=seasonMap[s];
PRODUCTS.forEach(function(p){p.pub=(p.season&&p.season.length)?p.season.indexOf(cur)>=0:true;});
saveProducts();renderAdminProducts2();renderProducts();
}
function saveProducts(){
try{localStorage.setItem("nny_products",JSON.stringify(PRODUCTS.map(function(p){return Object.assign({},p,{img:p.img?p.img.substring(0,200)+"...":null});})));}catch(e){}
try{
var ps=PRODUCTS.map(function(p){return Object.assign({},p);});
localStorage.setItem("nny_products_full",JSON.stringify(ps));
}catch(e){}
}
(function(){
var DATA_VER="v1778820000";
try{
var savedVer=localStorage.getItem("nny_data_ver");
if(savedVer!==DATA_VER){
localStorage.removeItem("nny_products_full");
localStorage.removeItem("nny_products");
localStorage.setItem("nny_data_ver",DATA_VER);
} else {
var ps=localStorage.getItem("nny_products_full");
if(ps){
var arr=JSON.parse(ps);
if(arr&&arr.length){
PRODUCTS.forEach(function(p){
var saved=arr.find(function(s){return s.id===p.id;});
if(saved){
if(saved.stock!==undefined&&saved.stock>=0)p.stock=saved.stock;
if(saved.price!==undefined&&saved.price>0)p.price=saved.price;
if(saved.img)p.img=saved.img;
if(saved.badge!==undefined)p.badge=saved.badge;
if(saved.dja&&saved.dja!=="説明を入力")p.dja=saved.dja;
if(saved.dvi&&saved.dvi!=="Nhập mô tả")p.dvi=saved.dvi;
if(saved.pub!==undefined)p.pub=saved.pub;else p.pub=true;
if(saved.ja&&saved.ja.trim())p.ja=saved.ja;
if(saved.vi&&saved.vi.trim())p.vi=saved.vi;
if(saved.en&&saved.en.trim())p.en=saved.en;
if(saved.e&&saved.e.trim())p.e=saved.e;
if(saved.unit&&saved.unit.trim())p.unit=saved.unit;
if(saved.unitvi&&saved.unitvi.trim())p.unitvi=saved.unitvi;
if(saved.uniten&&saved.uniten.trim())p.uniten=saved.uniten;
if(saved.season!==undefined)p.season=saved.season;
}
});
arr.forEach(function(saved){
var exists=PRODUCTS.find(function(p){return p.id===saved.id;});
if(!exists&&saved.id&&saved.ja){saved.pub=true;PRODUCTS.push(saved);}
});
}
}
}
}catch(e){}
})();
// DB / データ
function renderAdminDB2(){
var wrap=document.getElementById("adm-orders-db-wrap");
if(!wrap)return;
if(!ORDERS.length){
wrap.innerHTML='<div style="text-align:center;padding:24px;color:var(--ghost);">'+(adminLang==="vi"?"Chưa có đơn hàng nào":"注文データがありません")+'</div>';
return;
}
var html='<div style="overflow-x:auto;"><table class="db-tbl"><thead><tr>'
+'<th>'+( adminLang==="vi"?"Mã đơn":"注文番号")+'</th>'
+'<th>'+(adminLang==="vi"?"Ngày":"日時")+'</th>'
+'<th>'+(adminLang==="vi"?"Tên":"氏名")+'</th>'
+'<th>'+(adminLang==="vi"?"ĐT":"電話")+'</th>'
+'<th>'+(adminLang==="vi"?"Sản phẩm":"商品")+'</th>'
+'<th>'+(adminLang==="vi"?"Tổng":"合計")+'</th>'
+'<th>'+(adminLang==="vi"?"TT":"状態")+'</th>'
+'</tr></thead><tbody>';
ORDERS.forEach(function(o){
var items=(o.items||[]).map(function(it){return it.e+"×"+it.qty;}).join(" ");
var stCls=o.status==="done"?"st-done":o.status==="pending_payment"?"st-pending":"st-new";
var stLbl=o.status==="done"?(adminLang==="vi"?"Hoàn thành":"完了"):o.status==="pending_payment"?(adminLang==="vi"?"Chờ TT":"入金待ち"):(adminLang==="vi"?"Mới":"新規");
html+='<tr>'
+'<td style="font-weight:800;color:var(--g1)">'+o.no+'</td>'
+'<td style="white-space:nowrap;font-size:10px;">'+o.ts+'</td>'
+'<td>'+o.name+'</td>'
+'<td>'+o.phone+'</td>'
+'<td style="max-width:120px;font-size:10px;">'+items+'</td>'
+'<td style="font-weight:800;white-space:nowrap;">'+vnd(o.tot)+'</td>'
+'<td><span class="st-tag '+stCls+'">'+stLbl+'</span></td>'
+'</tr>';
});
wrap.innerHTML=html+'</tbody></table></div>';
}
function exportCSV(){
var hdr=["注文番号","日時","氏名","電話","メール","住所","商品","合計","状態"];
var rows=ORDERS.map(function(o){
var items=(o.items||[]).map(function(i){return i.ja+"×"+i.qty;}).join("|");
return [o.no,o.ts,o.name,o.phone,o.email||"",o.addr||"",items,o.tot,o.status];
});
var csv=[hdr].concat(rows).map(function(r){return r.map(function(c){return'"'+(String(c)||"").replace(/"/g,'""')+'"';}).join(",");}).join("\n");
var blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"});
var a=document.createElement("a");
a.href=URL.createObjectURL(blob);
a.download="niconico_orders_"+new Date().toISOString().slice(0,10)+".csv";
a.click();
}
function clearOrders(){
if(!confirm(adminLang==="vi"?"Xóa tất cả đơn hàng?":"全注文を削除しますか？"))return;
ORDERS=[];sv("nny_orders",[]);
renderAdminAll();
}
function copySheets(){
var hdr=["注文番号","日時","氏名","電話","商品","合計","状態"];
var rows=ORDERS.map(function(o){
var items=(o.items||[]).map(function(i){return i.ja+"×"+i.qty;}).join(" | ");
return [o.no,o.ts,o.name,o.phone,items,o.tot,o.status];
});
var txt=[hdr].concat(rows).map(function(r){return r.join("\t");}).join("\n");
navigator.clipboard.writeText(txt).then(function(){showToast(adminLang==="vi"?"✅ Đã copy!":"✅ コピーしました！");}).catch(function(){});
}
function loadSheetUrl(){
var saved=localStorage.getItem("nny_sheets_url");
if(saved)sheetsUrl=saved;
var inp=document.getElementById("sheets-url-inp");if(inp)inp.value=sheetsUrl;
var link=document.getElementById("sheets-open-a");if(link){link.href=sheetsUrl;link.style.display=sheetsUrl?"inline":"none";}
var tl=document.getElementById("sheets-toplink");if(tl)tl.href=sheetsUrl;
}
// 入荷通知
function renderAdminNotify2(){
var el=document.getElementById("adm-notify-list");if(!el)return;
if(!NOTIFY_LIST.length){
el.innerHTML='<div style="text-align:center;padding:20px;color:var(--ghost);font-size:12px;">'+(adminLang==="vi"?"Chưa có đăng ký thông báo":"入荷通知登録がありません")+'</div>';
return;
}
var groups={};
NOTIFY_LIST.forEach(function(n,i){
var k=String(n.productId);
if(!groups[k])groups[k]={name:n.productName,pid:n.productId,items:[]};
groups[k].items.push({i:i,email:n.email,name:n.name,date:n.date});
});
var html="";
Object.keys(groups).forEach(function(k){
var g=groups[k];
var p=PRODUCTS.find(function(x){return x.id===g.pid;});
html+='<div style="background:#fff;border:1px solid var(--border);border-radius:var(--rl);overflow:hidden;margin-bottom:12px;">';
html+='<div style="background:var(--gp);padding:10px 14px;display:flex;align-items:center;justify-content:space-between;gap:8px;">';
html+='<div style="font-weight:800;font-size:13px;">'+(p?p.e+" ":"")+g.name+'</div>';
if(EJ.service&&EJ.pubkey&&p&&p.stock>0){
html+='<button onclick="sendRestockByProduct('+g.pid+')" style="background:var(--g1);color:#fff;border:none;border-radius:var(--r);padding:6px 12px;font-size:11px;font-weight:800;cursor:pointer;">'
+'📧 '+(adminLang==="vi"?"Gửi thông báo ("+g.items.length+")":"通知送信（"+g.items.length+"件）")+'</button>';
}
html+='</div>';
html+='<div style="padding:8px 14px;">';
g.items.forEach(function(item){
html+='<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--gp);">';
html+='<div style="font-size:11.5px;">'+item.email+(item.name?" · "+item.name:"")+'<span style="font-size:9px;color:var(--ghost);margin-left:8px;">'+item.date+'</span></div>';
html+='<button onclick="delNotify('+item.i+')" style="background:none;border:none;cursor:pointer;color:var(--ghost);font-size:14px;">🗑</button>';
html+='</div>';
});
html+='</div></div>';
});
el.innerHTML=html;
}
function delNotify(i){
NOTIFY_LIST.splice(i,1);
saveNotifyList();
renderAdminNotify2();
}
function sendRestockByProduct(pid){
var p=PRODUCTS.find(function(x){return x.id===pid;});
if(p&&typeof checkAndSendRestockNotify==="function")checkAndSendRestockNotify(p);
}
// PIN変更
function saveNewPin(){
var inp=document.getElementById("new-pin-inp");
var val=inp?inp.value.trim():"";
if(!val||val.length<4){
var res=document.getElementById("pin-change-result");
if(res){res.style.display="block";res.style.background="var(--rp)";res.style.color="var(--red)";res.textContent=adminLang==="vi"?"PIN phải có ít nhất 4 ký tự":"PINは4文字以上にしてください";}
return;
}
ADMIN_PIN=val;
localStorage.setItem("nny_pin",val);
if(inp)inp.value="";
var res=document.getElementById("pin-change-result");
if(res){res.style.display="block";res.style.background="var(--gp)";res.style.color="var(--g2)";res.textContent=adminLang==="vi"?"✅ Đã đổi PIN thành công!":"✅ PINを変更しました！";}
showToast(adminLang==="vi"?"✅ Đã đổi PIN":"✅ PINを変更しました");
}
// DB wrap ID修正（HTMLに adm-orders-db-wrap がない場合の対処）
(function(){
var csvBtn=document.getElementById("adm-csv-btn");
if(csvBtn)csvBtn.onclick=exportCSV;
var copyBtn=document.getElementById("adm-copy-btn");
if(copyBtn)copyBtn.onclick=copySheets;
var clearBtn=document.getElementById("adm-clear-btn");
if(clearBtn)clearBtn.onclick=clearOrders;
})();
function lookupOrdersByPhone(){
var inp=document.getElementById("hist-phone-inp");
var phone=(inp?inp.value.trim():"").replace(/[^0-9+]/g,"");
var res=document.getElementById("hist-lookup-result");
if(!res)return;
if(!phone){res.innerHTML='<div style="color:var(--red);font-size:11px;padding:6px 0;">'+T("histLookupPlaceholder")+'</div>';return;}
res.innerHTML='<div style="font-size:11px;color:var(--muted);padding:8px 0;">🔍 検索中...</div>';
var localMatches=ORDER_HISTORY.filter(function(o){return(o.phone||"").replace(/[^0-9+]/g,"").indexOf(phone)>=0;});
if(fbEnabled&&fbDb){
fbDb.collection("orders").get().then(function(snap){
var all=[];snap.forEach(function(d){all.push(d.data());});
var fbMatches=all.filter(function(o){return(o.phone||"").replace(/[^0-9+]/g,"").indexOf(phone)>=0;});
var nos=new Set(localMatches.map(function(o){return o.no;}));
fbMatches.forEach(function(o){if(!nos.has(o.no))localMatches.push(o);});
renderLookupResults(localMatches,res);
}).catch(function(){renderLookupResults(localMatches,res);});
} else {
renderLookupResults(localMatches,res);
}
}
function renderLookupResults(orders,res){
if(!orders.length){res.innerHTML='<div style="text-align:center;padding:16px;color:var(--ghost);font-size:12px;">'+T("histLookupEmpty")+'</div>';return;}
var sorted=orders.slice().sort(function(a,b){return a.ts<b.ts?1:-1;});
var html='<div style="margin-top:8px;">';
sorted.forEach(function(o,i){
var statusCls=o.status==="done"?"hst-done":o.status==="pending_payment"?"hst-pending":"hst-new";
var statusTxt=o.status==="done"?T("stDone"):o.status==="pending_payment"?T("stPending"):T("stNew");
var items=(o.items||[]).map(function(it){return it.e+" "+(lang==="ja"?it.ja:lang==="en"?it.ja:it.vi)+"×"+it.qty;}).join("　");
html+='<div class="hist-card">'
+'<div class="hist-card-hdr"><span class="hist-no">'+o.no+'</span><span class="hist-date">'+o.ts+'</span><span class="hist-status '+statusCls+'">'+statusTxt+'</span></div>'
+'<div class="hist-card-body"><div class="hist-items">'+items+'</div><div class="hist-tot">'+vnd(o.tot)+'</div>'
+'<div class="hist-actions"><button class="hist-act-btn" onclick="showHistReceipt_data('+JSON.stringify(o).replace(/</g,"\u003c")+')">📄 '+T("rmlNo")+'</button></div>'
+'</div></div>';
});
html+='</div>';
res.innerHTML=html;
}
function showHistReceipt_data(o){
if(!o)return;
if(!o.items)o.items=[];
histReceiptOrder=o;
var body=buildReceiptHTML(o);
var el=document.getElementById("hist-receipt-body");if(el)el.innerHTML=body;
var ttl=document.getElementById("hrm-title");if(ttl)ttl.textContent="📄 "+o.no;
var modal=document.getElementById("hist-receipt-modal");
if(modal){modal.style.display="flex";modal.style.alignItems="center";modal.style.justifyContent="center";}
document.body.style.overflow="hidden";
}
// ── Google翻訳API ──
var GOOGLE_TRANSLATE_KEY="";
(function(){try{var k=localStorage.getItem("nny_gkey");if(k)GOOGLE_TRANSLATE_KEY=k;}catch(e){}})();
function saveGoogleKey(){
var inp=document.getElementById("google-translate-key-inp");
GOOGLE_TRANSLATE_KEY=(inp?inp.value.trim():"");
localStorage.setItem("nny_gkey",GOOGLE_TRANSLATE_KEY);
showToast(adminLang==="vi"?"✅ Đã lưu API Key":"✅ APIキーを保存しました");
}
function translateText(text,targetLang,cb){
if(!GOOGLE_TRANSLATE_KEY||!text){cb(text||"");return;}
var url="https://translation.googleapis.com/language/translate/v2?key="+GOOGLE_TRANSLATE_KEY;
fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},
body:JSON.stringify({q:text,target:targetLang,format:"text"})})
.then(function(r){return r.json();})
.then(function(d){
var t=d&&d.data&&d.data.translations&&d.data.translations[0];
cb(t?t.translatedText:text);
})
.catch(function(){cb(text);});
}
function autoTranslateProd(id){
var p=PRODUCTS.find(function(x){return x.id===id;});if(!p)return;
var jaInp=document.getElementById("ai-dja-"+id);
var viInp=document.getElementById("ai-dvi-"+id);
var jaName=document.getElementById("ai-ja-"+id);
var viName=document.getElementById("ai-vi-"+id);
var srcJa=(jaInp?jaInp.value.trim():"");
var srcVi=(viInp?viInp.value.trim():"");
if(srcJa&&!srcVi){
translateText(srcJa,"vi",function(t){if(viInp)viInp.value=t;});
} else if(srcVi&&!srcJa){
translateText(srcVi,"ja",function(t){if(jaInp)jaInp.value=t;});
}
var nameJa=(p.ja||"");
var nameVi=(p.vi||"");
if(nameJa&&!nameVi){
translateText(nameJa,"vi",function(t){p.vi=t;});
} else if(nameVi&&!nameJa){
translateText(nameVi,"ja",function(t){p.ja=t;});
}
showToast(adminLang==="vi"?"🔄 Đang dịch...":"🔄 翻訳中...");
}
function toggleLangPanel(){
var dd=document.getElementById("lang-dropdown");
if(dd)dd.classList.toggle("open");
}
function closeLangPanel(){
var dd=document.getElementById("lang-dropdown");
if(dd)dd.classList.remove("open");
}
// 外側クリックで閉じる
document.addEventListener("click",function(e){
var dd=document.getElementById("lang-dropdown");
if(dd&&!dd.contains(e.target))dd.classList.remove("open");
});
function updateLangBtn(){
var flags={ja:"🇯🇵",vi:"🇻🇳",en:"🇺🇸"};
var labels={ja:"日本語",vi:"Tiếng Việt",en:"English"};
var f=document.getElementById("lg-current-flag");
var l=document.getElementById("lg-current-label");
if(f)f.textContent=flags[lang]||"🌐";
if(l)l.textContent=labels[lang]||"Language";
["vi","ja","en"].forEach(function(c){
var el=document.getElementById("lpi-"+c);
if(el)el.classList.toggle("on",c===lang);
});
var admLbl=document.getElementById("lpi-admin-lbl");
if(admLbl)admLbl.textContent=lang==="ja"?"管理者ログイン":lang==="en"?"Admin Login":"Đăng nhập quản trị";
}
// 3言語ヘルパー
function fbSaveProduct(p){
if(!fbEnabled||!fbDb)return;
if(p.img&&p.img.length>200000){
resizeImage(p.img,400,400,function(resized){
var data=Object.assign({},p,{img:resized});
fbDb.collection("products").doc(String(p.id)).set(data).catch(function(e){console.error(e);});
});
} else {
var data=Object.assign({},p);
fbDb.collection("products").doc(String(p.id)).set(data).catch(function(e){console.error(e);});
}
}
function resizeImage(dataURL,maxW,maxH,cb){
var img=new Image();
img.onload=function(){
var w=img.width,h=img.height;
var scale=Math.min(maxW/w,maxH/h,1);
var canvas=document.createElement("canvas");
canvas.width=Math.round(w*scale);
canvas.height=Math.round(h*scale);
canvas.getContext("2d").drawImage(img,0,0,canvas.width,canvas.height);
cb(canvas.toDataURL("image/jpeg",0.7));
};
img.src=dataURL;
}
function showAllReviews(pid){
var rv=REVIEWS[pid]||[];
var p=PRODUCTS.find(function(x){return x.id===pid;});
var name=p?L(p.ja,p.en||p.ja,p.vi):"";
var html='<div style="padding:16px;">';
html+='<div style="font-size:15px;font-weight:900;color:var(--g1);margin-bottom:14px;">'+name+' - '+L("レビュー一覧","All Reviews","Tất cả đánh giá")+'</div>';
if(!rv.length){html+='<div style="color:var(--ghost);text-align:center;padding:20px;">'+L("まだレビューはありません","No reviews yet","Chưa có đánh giá")+'</div>';}
else{
rv.slice().reverse().forEach(function(r){
html+='<div style="border-bottom:1px solid var(--border);padding:10px 0;">'
+'<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">'
+'<span>'+stars(r.rating)+'</span>'
+'<span style="font-size:11px;font-weight:800;">'+( r.name||L("匿名","Anonymous","Ẩn danh"))+'</span>'
+'<span style="font-size:10px;color:var(--ghost);">'+r.date+'</span>'
+'</div>'
+'<div style="font-size:12.5px;color:var(--forest);">'+(r.text||'')+'</div>'
+'</div>';
});
}
html+='</div>';
var modal=document.getElementById("rv-modal");
var body=document.getElementById("rv-modal-body");
var title=document.getElementById("rv-modal-title");
if(title)title.textContent=name;
if(body)body.innerHTML=html;
if(modal)modal.classList.add("open");
}
function openAllReviews(pid){
var p=PRODUCTS.find(function(x){return x.id===pid;});
var rv=REVIEWS[pid]||[];
if(!rv.length){showToast(L("まだレビューがありません","No reviews yet","Chưa có đánh giá"));return;}
currentReviewProductId=pid;
_editingReviewIdx=null;
currentRating=0;
var pName=p?L(p.ja,p.en||p.ja,p.vi):"";
document.getElementById("rv-modal-title").textContent=pName;
document.getElementById("wr-title").textContent=T("wrTitle");
document.getElementById("rv-name-inp").value="";
document.getElementById("rv-text-inp").value="";
document.querySelectorAll(".sp").forEach(function(s){s.classList.remove("on");});
var rvList=document.getElementById("rv-list");
if(rvList){
var html="";
rv.slice().reverse().forEach(function(r,ri){
var realIdx=rv.length-1-ri;
html+='<div style="padding:10px 0;border-bottom:1px solid var(--border);position:relative;">';
if(r.edited){
html+='<span style="position:absolute;top:10px;right:0;font-size:9px;color:var(--muted);background:var(--gp);border-radius:3px;padding:1px 5px;">'+L("更新","Updated","Đã cập nhật")+'</span>';
}
html+='<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;padding-right:'+(r.edited?"36px":"0")+';">';
html+='<span>'+stars(r.rating)+'</span>';
html+='<span style="font-size:11px;font-weight:700;">'+(r.name||L("匿名","Anonymous","Ẩn danh"))+'</span>';
html+='<span style="font-size:10px;color:var(--muted);">'+r.date+'</span>';
if(!r.sid||r.sid===_mySessionId){html+='<button onclick="editReviewByUser('+pid+','+realIdx+')" style="margin-left:auto;font-size:10px;padding:2px 8px;background:var(--gp);color:var(--g1);border:1px solid var(--g3);border-radius:4px;cursor:pointer;">✏️ '+L('編集','Edit','Sửa')+'</button>';}
html+='</div>';
html+='<div style="font-size:12px;line-height:1.5;color:var(--forest);">'+r.text+'</div>';
html+='</div>';
});
rvList.innerHTML=html;
}
var _rm=document.getElementById("review-modal");document.body.appendChild(_rm);_rm.style.zIndex="99999";_rm.classList.add("open");
}
function resetFirebaseProducts(){
if(!fbEnabled||!fbDb){showToast("⚠ Firebase未接続");return;}
fbDb.collection("products").get().then(function(snap){
var batch=fbDb.batch();
snap.forEach(function(doc){batch.delete(doc.ref);});
return batch.commit();
}).then(function(){
var b2=fbDb.batch();
PRODUCTS.forEach(function(p){
b2.set(fbDb.collection("products").doc(String(p.id)),Object.assign({},p,{img:null}));
});
return b2.commit();
}).then(function(){
showToast("✅ Firebase商品データをリセット・再同期しました");
}).catch(function(e){
showToast("❌ エラー: "+e.message);
});
}
function confirmPayAdmin(idx){
var o=ORDERS[idx];if(!o)return;
var msg=adminLang==="vi"
?"Xác nhận đã nhận "+vnd(o.tot)+" từ "+o.name+"?"
:o.name+"様 "+vnd(o.tot)+" の入金確認して完了にしますか？";
nnyConfirm(msg,function(){
ORDERS[idx].status="done";
try{localStorage.setItem("nny_orders",JSON.stringify(ORDERS));}catch(e){}
if(typeof fbSaveOrder==="function"){
var orderNoSS2=Object.assign({},ORDERS[idx],{screenshot:null});
fbSaveOrder(orderNoSS2);
}
if(typeof renderAdminOrders2==="function")renderAdminOrders2();
if(typeof renderAdminStats==="function")renderAdminStats();
showToast(adminLang==="vi"?"✅ Xác nhận thành công!":"✅ 入金確認しました！");
});
}
function toggleOrderStatus(idx){
var o=ORDERS[idx];if(!o)return;
if(o.status==="done"){
nnyConfirm(adminLang==="vi"?"Hoàn tác xác nhận đơn hàng này?":"この注文の完了を取り消しますか？",function(){
ORDERS[idx].status="new";
_saveAndRefreshOrder(idx);
});
} else {
var msg=adminLang==="vi"
?"Xác nhận đã nhận tiền "+vnd(o.tot)+" từ "+o.name+"?"
:o.name+"様 "+vnd(o.tot)+" の入金を確認して完了にしますか？";
nnyConfirm(msg,function(){
ORDERS[idx].status="done";
_saveAndRefreshOrder(idx);
});
}
}
function _saveAndRefreshOrder(idx){
try{localStorage.setItem("nny_orders",JSON.stringify(ORDERS));}catch(e){}
if(typeof fbSaveOrder==="function"){
var orderNoSS=Object.assign({},ORDERS[idx],{screenshot:null});
fbSaveOrder(orderNoSS);
}
if(typeof renderAdminOrders2==="function")renderAdminOrders2();
if(typeof renderAdminStats==="function")renderAdminStats();
showToast(adminLang==="vi"?"✅ Đã cập nhật":"✅ 更新しました");
}
function uploadScreenshot(orderNo, base64data, cb){
if(!fbDb||!base64data){
cb(null);return;}
try{
var img=new Image();
img.onload=function(){
var MAX=600;
var w=img.width,h=img.height;
if(w>MAX||h>MAX){
if(w>h){h=Math.round(h*MAX/w);w=MAX;}
else{w=Math.round(w*MAX/h);h=MAX;}
}
var canvas=document.createElement('canvas');
canvas.width=w;canvas.height=h;
var ctx=canvas.getContext('2d');
ctx.drawImage(img,0,0,w,h);
var compressed=canvas.toDataURL('image/jpeg',0.5);
fbDb.collection('screenshots').doc(orderNo.replace(/[^a-zA-Z0-9]/g,'-')).set({
orderNo:orderNo,
data:compressed,
ts:new Date().toISOString()
}).then(function(){
cb(compressed);
}).catch(function(e){
console.error('[NNY] Screenshot Firestore save failed:',e);
cb(null);
});
};
img.onerror=function(){cb(null);};
img.src=base64data;
}catch(e){
console.error('[NNY] uploadScreenshot error:',e);
cb(null);
}
}
// Google Sheetsに自動転記
function sendToSheets(order){
if(!sheetsUrl||!sheetsUrl.startsWith('http'))return;
if(sheetsUrl.indexOf('script.google.com')<0){
return;
}
try{
var items=order.items.map(function(i){return i.ja+'×'+i.qty;}).join(' | ');
var payload={
no:order.no,
ts:order.ts,
name:order.name,
phone:order.phone,
email:order.email||'',
addr:order.addr,
items:items,
tot:order.tot,
delivery:order.delivery,
payment:order.payment,
status:order.status
};
fetch(sheetsUrl,{
method:'POST',
mode:'no-cors',
headers:{'Content-Type':'text/plain'},
body:JSON.stringify(payload)
}).catch(function(e){console.error('[NNY Sheets] fetch error:',e);});
}catch(e){console.error('[NNY Sheets]',e);}
}
function loadAndShowSS(idx){
var o=ORDERS[idx];if(!o||!o.screenshotUrl)return;
if(!fbDb){alert('Firebase未接続');return;}
fbDb.collection('screenshots').doc(o.screenshotUrl).get().then(function(doc){
if(doc.exists){
openLightbox(doc.data().data);
} else {
showToast('スクショが見つかりません');
}
}).catch(function(e){
showToast('スクショ読み込みエラー: '+e.message);
});
}
function deleteReview(pid,idx){
var key=REVIEWS[pid]!==undefined?pid:REVIEWS[String(pid)]!==undefined?String(pid):null;
if(key===null){showToast('レビューが見つかりません');return;}
var old=document.getElementById('nny-confirm-overlay');
if(old)old.remove();
var msg=adminLang==="vi"?"Xóa đánh giá này?":"このレビューを削除しますか？";
var overlay=document.createElement('div');
overlay.id='nny-confirm-overlay';
overlay.style.cssText='position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;';
var box=document.createElement('div');
box.style.cssText='background:#fff;border-radius:12px;padding:24px;max-width:300px;width:90%;text-align:center;';
box.innerHTML='<div style="font-size:15px;font-weight:700;margin-bottom:16px;">'+msg+'</div>'
+'<div style="display:flex;gap:10px;justify-content:center;">'
+'<button id="nny-confirm-ok" style="background:#e74c3c;color:#fff;border:none;border-radius:8px;padding:10px 24px;font-size:14px;font-weight:700;cursor:pointer;">'+(adminLang==="vi"?"Xóa":"削除")+'</button>'
+'<button id="nny-confirm-cancel" style="background:#eee;color:#333;border:none;border-radius:8px;padding:10px 24px;font-size:14px;cursor:pointer;">'+(adminLang==="vi"?"Hủy":"キャンセル")+'</button>'
+'</div>';
overlay.appendChild(box);
document.body.appendChild(overlay);
document.getElementById('nny-confirm-cancel').onclick=function(){overlay.remove();};
document.getElementById('nny-confirm-ok').onclick=function(){
overlay.remove();
var rv=REVIEWS[key];
if(Array.isArray(rv)){
rv.splice(idx,1);
if(!rv.length)delete REVIEWS[key];
} else if(typeof rv==='object'&&rv!==null){
var arr=Object.values(rv);
arr.splice(idx,1);
if(!arr.length){delete REVIEWS[key];}
else{REVIEWS[key]=arr;}
}
saveReviews();renderProducts();renderAdminReviews();
showToast(adminLang==="vi"?"✅ Đã xóa":"✅ 削除しました");
};
}
function renderAdminReviews(){
var wrap=document.getElementById("adm-reviews-wrap");if(!wrap)return;
var html="";var total=0;
PRODUCTS.forEach(function(p){
var rv=REVIEWS[p.id]||[];if(!rv.length)return;
html+='<div style="margin-bottom:16px;padding:12px;background:var(--off);border-radius:var(--rl);">';
html+='<div style="font-size:13px;font-weight:800;color:var(--g1);margin-bottom:8px;">'+p.e+" "+(adminLang==="vi"?p.vi:p.ja)+' ('+(adminLang==="vi"?rv.length+" đánh giá":rv.length+'件')+')</div>';
rv.forEach(function(r,i){
total++;
html+='<div style="display:flex;gap:8px;align-items:flex-start;padding:6px 0;border-bottom:1px solid var(--border);">';
html+='<div style="flex:1;">';
html+='<div style="font-size:11px;margin-bottom:2px;">'+stars(r.rating)+' <b>'+(r.name||"匿名")+'</b> <span style="color:var(--muted);font-size:10px;">'+r.date+'</span></div>';
html+='<div style="font-size:12px;color:var(--g2);">'+r.text+'</div>';
html+='</div>';
html+='<button onclick="deleteReview('+p.id+','+i+')" style="flex-shrink:0;background:#e74c3c;color:#fff;border:none;border-radius:6px;padding:4px 10px;font-size:11px;cursor:pointer;">🗑 '+(adminLang==="vi"?"Xóa":"削除")+'</button>';
html+='</div>';
});
html+='</div>';
});
if(!total)html='<div style="color:var(--muted);padding:12px 0;font-size:13px;">'+(adminLang==="vi"?"Chưa có đánh giá":"レビューはまだありません")+'</div>';
wrap.innerHTML=html;
}
// REVIEWSのデータを正規化（各pidの値を配列に統一）
function normalizeReviews(){
Object.keys(REVIEWS).forEach(function(pid){
var rv=REVIEWS[pid];
if(!Array.isArray(rv)){
if(typeof rv==='object'&&rv!==null){
REVIEWS[pid]=Object.values(rv);
} else {
delete REVIEWS[pid];
}
}
});
}
// confirm() の代替（サンドボックス対応）
function nnyConfirm(msg, onOK){
var old=document.getElementById('nny-confirm-overlay');
if(old)old.remove();
var overlay=document.createElement('div');
overlay.id='nny-confirm-overlay';
overlay.style.cssText='position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;';
var box=document.createElement('div');
box.style.cssText='background:#fff;border-radius:12px;padding:24px;max-width:300px;width:90%;text-align:center;box-shadow:0 8px 32px rgba(0,0,0,.3);';
var okLabel=adminLang==="vi"?"Xác nhận":"確認";
var cancelLabel=adminLang==="vi"?"Hủy":"キャンセル";
box.innerHTML='<div style="font-size:14px;font-weight:600;margin-bottom:20px;line-height:1.5;">'+msg+'</div>'
+'<div style="display:flex;gap:10px;justify-content:center;">'
+'<button id="nny-ok-btn" style="background:var(--g1);color:#fff;border:none;border-radius:8px;padding:10px 24px;font-size:14px;font-weight:700;cursor:pointer;">'+okLabel+'</button>'
+'<button id="nny-cancel-btn" style="background:#eee;color:#333;border:none;border-radius:8px;padding:10px 24px;font-size:14px;cursor:pointer;">'+cancelLabel+'</button>'
+'</div>';
overlay.appendChild(box);
document.body.appendChild(overlay);
document.getElementById('nny-cancel-btn').onclick=function(){overlay.remove();};
document.getElementById('nny-ok-btn').onclick=function(){overlay.remove();onOK();};
}
function adjStock(id, delta){
var p=PRODUCTS.find(function(x){return x.id===id;});if(!p)return;
p.stock=Math.max(0,(p.stock||0)+delta);
var inp=document.getElementById("sq-"+id);
if(inp)inp.value=p.stock;
saveProducts();if(typeof fbSaveProduct==="function")fbSaveProduct(p);
flashStockSaved(id);
renderProducts();
}
function _toggleOC(n){
var e=document.getElementById("ao-body-"+n);
if(e)e.style.display=e.style.display==="none"?"block":"none";
}
function loadBankConfig(){
var sel=document.getElementById("bank-code");
if(sel)sel.value=BANK_CFG.code||"970422";
var acc=document.getElementById("bank-account");
if(acc)acc.value=BANK_CFG.account||"";
var own=document.getElementById("bank-owner");
if(own)own.value=BANK_CFG.owner||"";
var desc=document.getElementById("bank-desc-template");
if(desc)desc.value=BANK_CFG.descTemplate||"NICONICO {no}";
}
var _needFbProductSync=false;
// Firebase接続後に商品データを自動同期
function _autoSyncProducts(){
if(!_needFbProductSync||!fbDb)return;
_needFbProductSync=false;
fbDb.collection("products").get().then(function(snap){
snap.forEach(function(doc){
var d=doc.data();
if(!d||!d.id)return;
var p=PRODUCTS.find(function(x){return Number(x.id)===Number(d.id);});
if(p&&d.badge!==undefined)p.badge=d.badge;
if(p&&d.img)p.img=d.img;
if(p&&d.stock!==undefined&&d.stock>=0)p.stock=d.stock;
if(p&&d.price!==undefined&&d.price>0)p.price=d.price;
});
renderProducts();
var batch=fbDb.batch();
var snapIds=[];
snap.forEach(function(doc){if(doc.data()&&doc.data().id)snapIds.push(Number(doc.data().id));});
PRODUCTS.forEach(function(p){
if(snapIds.indexOf(Number(p.id))<0){
batch.set(fbDb.collection("products").doc(String(p.id)),{id:p.id,stock:p.stock,price:p.price,badge:p.badge||""});
}
});
PRODUCTS.forEach(function(p){
if(p.badge===""||p.badge===undefined){
batch.set(fbDb.collection("products").doc(String(p.id)),
{id:p.id,stock:p.stock,price:p.price,badge:""},
{merge:true});
}
});
return batch.commit();
}).then(function(){
console.log("[NNY] Firebase products auto-synced: "+PRODUCTS.length+"品");
}).catch(function(e){
console.warn("[NNY] Firebase products sync failed:",e);
});
}
function saveProductEdit(id){
var p=PRODUCTS.find(function(x){return x.id===id;});
if(!p)return;
var stockEl=document.getElementById("sq-"+id);
if(stockEl)p.stock=Math.max(0,parseInt(stockEl.value)||0);
var priceEl=document.getElementById("pe-price-"+id);
if(priceEl&&priceEl.value)p.price=Math.max(0,parseInt(priceEl.value)||0);
var badgeEl=document.getElementById("pe-badge-"+id);
if(badgeEl)p.badge=badgeEl.value;
saveProducts();
if(typeof fbSaveProduct==="function")fbSaveProduct(p);
renderProducts();
flashStockSaved(id);
}
var _mySessionId=(function(){
try{
var s=localStorage.getItem('nny_sid');
if(!s){s='u'+Date.now()+'_'+Math.random().toString(36).slice(2,8);localStorage.setItem('nny_sid',s);}
return s;
}catch(e){return 'u'+Date.now();}
})();

function adjVariantStock(id,v,d){var p=PRODUCTS.find(function(x){return Number(x.id)===Number(id);});if(!p)return;var sk="stock"+v.replace("g","");p[sk]=Math.max(0,((p[sk]||0)+d));var inp=document.getElementById("sq-"+id+"-"+v);if(inp)inp.value=p[sk];saveProducts();if(typeof fbSaveProduct==="function")fbSaveProduct(p);flashStockSaved(id);}
function setVariantStock(id,v,val){var p=PRODUCTS.find(function(x){return Number(x.id)===Number(id);});if(!p)return;var sk="stock"+v.replace("g","");p[sk]=Math.max(0,parseInt(val)||0);saveProducts();if(typeof fbSaveProduct==="function")fbSaveProduct(p);flashStockSaved(id);}
function saveVariantPrice(id,v,val){var p=PRODUCTS.find(function(x){return Number(x.id)===Number(id);});if(!p)return;p["price"+v.replace("g","")]=Math.max(0,parseInt(val)||0);saveProducts();if(typeof fbSaveProduct==="function")fbSaveProduct(p);flashStockSaved(id);}
function addVariantToCart(id,v,price){var p=PRODUCTS.find(function(x){return Number(x.id)===Number(id);});if(!p)return;var sk="stock"+v.replace("g","");var stk=p[sk]!==undefined?p[sk]:p.stock;var ck=id+"_"+v;if(stk>0&&(cart[ck]||0)>=stk){showToast(L("在庫がありません","Out of stock","Hết hàng"));return;}cart[ck]=(cart[ck]||0)+1;CART_META[ck]={id:Number(id),variant:v,price:price};updateCartBtn();showToast(p.e+" "+p.ja+" "+v+" "+L("をカートに追加しました","added to cart","đã thêm vào giỏ"));}
function chgVariantQty(ck,d){cart[ck]=(cart[ck]||0)+d;if(cart[ck]<=0){delete cart[ck];delete CART_META[ck];}updateCartBtn();renderProducts();if(curView==="cart")renderCartView();}
function closeVariantModal(){}
function openOwnerScreen(){var os=document.getElementById("owner-screen");if(!os)return;document.querySelectorAll(".admin-screen,#admin-screen,[id=admin-screen]").forEach(function(el){el.style.cssText="display:none!important";el.classList.remove("on");});var us=document.getElementById("user-screen");if(us)us.style.cssText="display:none!important";os.style.cssText="display:flex!important;flex-direction:column;position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;background:#f0f4f0;overflow-y:auto;";os.classList.add("on");if(typeof fbEnabled!=="undefined"&&fbEnabled&&typeof fbDb!=="undefined"&&fbDb){fbDb.collection("orders").get().then(function(snap){var a=[];snap.forEach(function(doc){a.push(doc.data());});if(a.length)ORDERS=a;renderOwnerDashboard();}).catch(function(){renderOwnerDashboard();});}else{renderOwnerDashboard();}}
function closeOwnerScreen(){var os=document.getElementById("owner-screen");if(os){os.style.cssText="display:none;";}var us=document.getElementById("user-screen");if(us){us.style.cssText="";us.style.display="block";}renderProducts();}
var EM_HANOI_LNG=105.8417,EM_HANOI_LAT=21.0335,_shippingFee=0,_shippingDist=0,_shippingLoading=false;
function calcGrabFee(km){if(km<=2)return 15000;return Math.ceil((15000+Math.ceil(km-2)*5000)/1000)*1000;}
function updateShippingDisplay(msg,loading){var el=document.getElementById("shipping-fee-row"),valEl=document.getElementById("shipping-fee-val");if(!el||!valEl)return;if(typeof selDel==="undefined"||selDel!=="deliver"){el.style.display="none";return;}el.style.display="flex";if(loading||msg){valEl.textContent=msg||L("計算中...","Calculating...","Đang tính...");return;}valEl.textContent=_shippingFee>0?vnd(_shippingFee+10000):L("住所を入力してください","Enter address","Nhập địa chỉ");}
function calcShippingFee(addr,cb){if(typeof selDel==="undefined"||selDel!=="deliver"){_shippingFee=0;_shippingDist=0;if(cb)cb(0,0);return;}if(!addr||addr.trim().length<3){_shippingFee=0;_shippingDist=0;if(cb)cb(0,0);return;}_shippingLoading=true;updateShippingDisplay(L("計算中...","Calculating...","Đang tính..."),true);var dm={"ba dinh":1,"hoan kiem":2,"dong da":2,"kim ma":2,"linh lang":2,"giang vo":3,"tay ho":4,"quang an":4,"ciputra":8,"hai ba trung":4,"times city":5,"cau giay":6,"dich vong":5,"long bien":12,"vinhomes riverside":18,"bo de":10,"thach ban":12,"gia lam":14,"ocean park":20,"thanh xuan":7,"royal city":7,"nam tu liem":9,"my dinh":7,"smart city":14,"phuong khoang":10,"dai mo":10,"bac tu liem":5,"tu liem":7,"starlake":8,"hoang mai":7,"linh dam":8,"dong anh":16,"ha dong":13,"me linh":22,"soc son":32,"thuong tin":26,"thanh oai":22,"my duc":52};var al=addr.toLowerCase().replace(/[àáạảãăắặẳẵâấậẩẫ]/g,"a").replace(/[èéẹẻẽêếệểễ]/g,"e").replace(/[ìíịỉĩ]/g,"i").replace(/[òóọỏõôốộổỗơớợởỡ]/g,"o").replace(/[ùúụủũưứựửữ]/g,"u").replace(/[ỳýỵỷỹ]/g,"y").replace(/đ/g,"d");var dk=7;for(var k in dm){if(al.indexOf(k)>=0){dk=dm[k];break;}}fetch("https://nominatim.openstreetmap.org/search?q="+encodeURIComponent(addr.trim()+" Ha Noi Vietnam")+"&format=json&limit=1").then(function(r){return r.json();}).then(function(d){if(!d||!d.length)throw 0;return fetch("https://router.project-osrm.org/route/v1/driving/"+EM_HANOI_LNG+","+EM_HANOI_LAT+";"+d[0].lon+","+d[0].lat+"?overview=false");}).then(function(r){return r.json();}).then(function(d){if(!d||!d.routes||!d.routes.length)throw 0;var km=d.routes[0].distance/1000;_shippingDist=Math.round(km*10)/10;_shippingFee=calcGrabFee(km);_shippingLoading=false;updateShippingDisplay(null,false);if(cb)cb(_shippingFee,_shippingDist);}).catch(function(){_shippingDist=dk;_shippingFee=calcGrabFee(dk);_shippingLoading=false;updateShippingDisplay(null,false);if(cb)cb(_shippingFee,_shippingDist);});}
var OWNER_FEE_RATE=0.13,_ownerPayments=[];try{var _op=localStorage.getItem("nny_owner_payments");if(_op)_ownerPayments=JSON.parse(_op);}catch(e){}
function renderOwnerDashboard(){var ys=document.getElementById("owner-year"),ms=document.getElementById("owner-month");if(!ys||!ms)return;var now=new Date();var _curYr=now.getFullYear(),_curMo=now.getMonth()+1;var _prevYrVal=parseInt(ys.value)||_curYr,_prevMoVal=parseInt(ms.value)||_curMo;ys.innerHTML="";for(var y=_curYr-2;y<=_curYr+3;y++){var op=document.createElement("option");op.value=y;op.textContent=y+"年";if(y===_prevYrVal)op.selected=true;ys.appendChild(op);}ms.innerHTML="";for(var mo=1;mo<=12;mo++){var op2=document.createElement("option");op2.value=mo;op2.textContent=mo+"月";if(mo===_prevMoVal)op2.selected=true;ms.appendChild(op2);}var yr=parseInt(ys.value),m=parseInt(ms.value);var orders=ORDERS.filter(function(o){if(o.status==="cancelled")return false;var d=new Date(o.ts||o.no);if(isNaN(d.getTime())){var mm=(o.ts||"").match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);if(mm)d=new Date(mm[1],mm[2]-1,mm[3]);else return false;}return d.getFullYear()===yr&&d.getMonth()+1===m;});var ts=orders.reduce(function(s,o){return s+(o.tot||0);},0),fee=Math.round(ts*OWNER_FEE_RATE),fp=ts-fee;var e=document.getElementById.bind(document);if(e("owner-total-sales"))e("owner-total-sales").textContent=vnd(ts);if(e("owner-fee"))e("owner-fee").textContent=vnd(fee);if(e("owner-order-count"))e("owner-order-count").textContent=orders.length+"件";if(e("owner-farmer-pay"))e("owner-farmer-pay").textContent=vnd(fp);renderPaymentList();renderOwnerHistory();var se=localStorage.getItem("nny_farm_email");if(se){var el=e("owner-farm-email");if(el&&!el.value)el.value=se;}}
function _buildInvoiceBody(mo,yr,ordersLen,ts,fee,fp){return "━━━━━━━━━━━━━━━━━━━━━━\nNICO NICO YASAI — HÓA ĐƠN PHÍ DỊCH VỤ\n━━━━━━━━━━━━━━━━━━━━━━\n\nKính gửi trang trại Bản Hồ,\n\nDưới đây là tổng kết doanh thu tháng "+mo+"/"+yr+":\n\n  📦 Số đơn hàng        : "+ordersLen+" đơn\n  💰 Tổng doanh thu    : "+ts.toLocaleString()+"₫\n  📊 13% doanh thu     : "+fee.toLocaleString()+"₫\n  🌿 Trang trại nhận   : "+fp.toLocaleString()+"₫\n\n━━━━━━━━━━━━━━━━━━━━━━\n⚠️  YÊU CẦU THANH TOÁN\n━━━━━━━━━━━━━━━━━━━━━━\nVui lòng chuyển khoản 13% doanh thu tháng "+mo+"/"+yr+"\n\n    "+fee.toLocaleString()+"₫\n\nvề tài khoản NICO NICO YASAI trong vòng 7 ngày.\n\nSau khi chuyển khoản, vui lòng gửi ảnh xác nhận giao dịch\nbằng một trong các cách sau:\n\n  📱 Messenger: Gửi qua bất kỳ cuộc trò chuyện nào với tôi trên Messenger\n  📧 Email: Reply email này kèm ảnh\n\nXin cảm ơn sự hợp tác của bạn!\nNICO NICO YASAI — Bản Hồ Farm";}
function _getMonthOrders(yr,mo){return ORDERS.filter(function(o){if(o.status==="cancelled")return false;var d=new Date(o.ts||o.no);if(isNaN(d.getTime())){var mm=(o.ts||"").match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);if(mm)d=new Date(mm[1],mm[2]-1,mm[3]);else return false;}return d.getFullYear()===yr&&d.getMonth()+1===mo;});}
function sendInvoice(autoMode){var ys=document.getElementById("owner-year"),ms=document.getElementById("owner-month"),em=document.getElementById("owner-farm-email"),st=document.getElementById("owner-invoice-status"),btn=document.getElementById("owner-send-btn");if(!ys||!ms||!em)return;var email=em.value.trim();if(!email){if(!autoMode)alert("農家のメールアドレスを入力してください");return;}localStorage.setItem("nny_farm_email",email);var yr=parseInt(ys.value),mo=parseInt(ms.value);var orders=_getMonthOrders(yr,mo);var ts=orders.reduce(function(s,o){return s+(o.tot||0);},0),fee=Math.round(ts*OWNER_FEE_RATE),fp=ts-fee;var replyAddr=EJ&&EJ.from?EJ.from:"";var body2=_buildInvoiceBody(mo,yr,orders.length,ts,fee,fp);if(typeof emailjs!=="undefined"&&EJ&&EJ.pubkey){if(btn){btn.disabled=true;btn.textContent="送信中...";}emailjs.init(EJ.pubkey);emailjs.send(EJ.service,EJ.template,{to_email:email,to_name:"Trang trại Bản Hồ",from_name:"NICO NICO YASAI",reply_to:replyAddr,subject:"[NICO NICO YASAI] Hóa đơn phí dịch vụ tháng "+mo+"/"+yr+" — "+fee.toLocaleString()+"₫",message:body2}).then(function(){if(btn){btn.disabled=false;btn.textContent="📧 請求書をメール送付";}saveInvoiceHistory(yr,mo,ts,fee,email);if(st){st.style.display="block";st.textContent=autoMode?"🤖 月末自動送信完了！農家へ請求メールを送りました。":"✅ 送信成功！農家へ請求メールを送りました。";setTimeout(function(){st.style.display="none";},5000);}}).catch(function(e){if(btn){btn.disabled=false;btn.textContent="📧 請求書をメール送付";}if(!autoMode)alert("送信失敗: "+JSON.stringify(e));});}else{if(!autoMode)alert("EmailJSが設定されていません。");}}
function autoSendInvoiceIfNeeded(){var now=new Date();var day=now.getDate(),yr=now.getFullYear(),mo=now.getMonth()+1;if(day<25)return;var savedEmail=localStorage.getItem("nny_farm_email");if(!savedEmail)return;var h2=[];try{var s=localStorage.getItem("nny_invoice_history");if(s)h2=JSON.parse(s);}catch(e){}var alreadySent=h2.some(function(r){return r.yr===yr&&r.mo===mo;});if(alreadySent)return;var ys=document.getElementById("owner-year"),ms=document.getElementById("owner-month");if(ys)ys.value=yr;if(ms)ms.value=mo;var em=document.getElementById("owner-farm-email");if(em)em.value=savedEmail;renderOwnerDashboard();setTimeout(function(){sendInvoice(true);},500);}
function saveInvoiceHistory(yr,mo,ts,fee,email){var h2=[];try{var s=localStorage.getItem("nny_invoice_history");if(s)h2=JSON.parse(s);}catch(e){}h2.unshift({yr:yr,mo:mo,totalSales:ts,fee:fee,email:email,sentAt:new Date().toISOString()});if(h2.length>24)h2=h2.slice(0,24);try{localStorage.setItem("nny_invoice_history",JSON.stringify(h2));}catch(e){}renderOwnerHistory();}
function renderOwnerHistory(){var el=document.getElementById("owner-history-list");if(!el)return;var h2=[];try{var s=localStorage.getItem("nny_invoice_history");if(s)h2=JSON.parse(s);}catch(e){}if(!h2.length){el.innerHTML='<div style="color:#aaa;font-size:12px;text-align:center;padding:12px;">履歴なし</div>';return;}el.innerHTML=h2.map(function(r){return '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #f0f0f0;"><div><div style="font-size:13px;font-weight:700;">'+r.yr+'年'+r.mo+'月</div><div style="font-size:11px;color:#888;">'+r.email+'</div></div><div style="font-size:13px;font-weight:800;color:#2d6a2d;">'+vnd(r.fee)+'</div></div>';}).join('');}
function uploadPaymentSS(input){if(!input.files||!input.files[0])return;var reader=new FileReader();reader.onload=function(e){var ys=document.getElementById("owner-year"),ms=document.getElementById("owner-month");var yr=parseInt(ys?ys.value:new Date().getFullYear()),mo=parseInt(ms?ms.value:new Date().getMonth()+1);_ownerPayments.unshift({yr:yr,mo:mo,data:e.target.result,uploadedAt:new Date().toISOString(),status:"pending"});if(_ownerPayments.length>12)_ownerPayments=_ownerPayments.slice(0,12);try{localStorage.setItem("nny_owner_payments",JSON.stringify(_ownerPayments));}catch(e){}renderPaymentList();showToast("✅ スクショを保存しました");};reader.readAsDataURL(input.files[0]);input.value="";}
function renderPaymentList(){var el=document.getElementById("owner-payment-list");if(!el)return;var ys=document.getElementById("owner-year"),ms=document.getElementById("owner-month");var payments=_ownerPayments.filter(function(p){if(!ys||!ms)return true;return p.yr===parseInt(ys.value)&&p.mo===parseInt(ms.value);});if(!payments.length){el.innerHTML='<div style="color:#aaa;font-size:12px;text-align:center;padding:12px;">この月の支払い記録なし</div>';return;}el.innerHTML=payments.map(function(p,i){return '<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f0f0f0;"><img src="'+p.data+'" style="width:60px;height:45px;object-fit:cover;border-radius:6px;cursor:pointer;" onclick="window.open(this.src)"><div style="flex:1;font-size:12px;font-weight:700;">'+p.yr+'年'+p.mo+'月</div><button onclick="confirmPaymentOwner('+i+')" style="font-size:11px;padding:5px 10px;border:1px solid #ccc;border-radius:6px;background:'+(p.status==="confirmed"?"#e8f5e2":"#fff")+';cursor:pointer;">'+(p.status==="confirmed"?"✅ 確認済":"確認する")+'</button></div>';}).join('');}
function confirmPaymentOwner(idx){var ys=document.getElementById("owner-year"),ms=document.getElementById("owner-month");var payments=_ownerPayments.filter(function(p){if(!ys||!ms)return true;return p.yr===parseInt(ys.value)&&p.mo===parseInt(ms.value);});if(payments[idx]){payments[idx].status="confirmed";try{localStorage.setItem("nny_owner_payments",JSON.stringify(_ownerPayments));}catch(e){}}renderPaymentList();}

var _fbPollTimer=null;
function startFbPolling(){
if(!fbEnabled||!fbDb)return;
if(_fbPollTimer)clearInterval(_fbPollTimer);
_fbPollTimer=setInterval(function(){
fbDb.collection("products").get().then(function(snap){
var changed=false;
snap.forEach(function(doc){
var d=doc.data();
if(!d||!d.id)return;
var p=PRODUCTS.find(function(x){return Number(x.id)===Number(d.id);});
if(!p)return;
if(d.stock!==undefined&&d.stock>=0&&p.stock!==d.stock){p.stock=d.stock;changed=true;}
if(d.price!==undefined&&d.price>0&&p.price!==d.price){p.price=d.price;changed=true;}
if(d.badge!==undefined&&p.badge!==d.badge){p.badge=d.badge;changed=true;}
// imgはポーリングから除外（初回loadFromFirebaseで取得）
});
if(changed)renderProducts();
}).catch(function(){});
fbDb.collection("reviews").doc("all").get().then(function(doc){
if(!doc.exists||!doc.data()||!doc.data().data)return;
var fbRv=doc.data().data;var changed=false;
Object.keys(fbRv).forEach(function(pid){
var arr=Array.isArray(fbRv[pid])?fbRv[pid]:Object.values(fbRv[pid]);
var cur=JSON.stringify(REVIEWS[pid]||[]);
if(JSON.stringify(arr)!==cur){REVIEWS[pid]=arr;changed=true;}
});
if(changed){
if(typeof normalizeReviews==="function")normalizeReviews();
try{localStorage.setItem("nny_reviews",JSON.stringify(REVIEWS));}catch(e){}
renderProducts();
}
}).catch(function(){});
fbDb.collection("orders").get().then(function(snap){
var a=[];snap.forEach(function(doc){a.push(doc.data());});
if(!a.length)return;
var lo=ORDERS;
var merged=a.map(function(o){
var l=lo.find(function(x){return x.no===o.no;});
if(l&&l.screenshot&&!o.screenshotUrl)o.screenshot=l.screenshot;
if(l&&l.screenshotUrl)o.screenshotUrl=l.screenshotUrl;
return o;
});
lo.forEach(function(x){if(!merged.find(function(o){return o.no===x.no;}))merged.push(x);});
if(JSON.stringify(merged)!==JSON.stringify(ORDERS)){
ORDERS=merged;
var as=document.getElementById("admin-screen");
if(as&&as.classList.contains("on")&&typeof renderAdminOrders2==="function")renderAdminOrders2();
}
}).catch(function(){});
},30000);
}
function initApp(){
if(typeof normalizeReviews==="function")normalizeReviews();
_needFbProductSync=true;
applyI18n();
renderHistory();
loadSheetUrl();
updateLangBtn();
setSeason("all");
}
// 初期化
if(document.readyState==="loading"){
document.addEventListener("DOMContentLoaded",initApp);
} else {
initApp();
}
// admin URL check moved to initApp

(function(){
 document.addEventListener('DOMContentLoaded', function(){
 // vietqr を QR_META に追加
 if(typeof QR_META!=='undefined'&&!QR_META.vietqr){
 QR_META.vietqr={logo:'🏦',ja:'銀行振込（VietQR）',vi:'Chuyển khoản (VietQR)'};
 }
 // 注文確定ボタンを view-confirm 表示時に強制有効化
 var orig=window.showView;
 if(orig){
 window.showView=function(v){
 orig(v);
 if(v==='confirm'){
 setTimeout(function(){
 var btn=document.querySelector('#view-confirm .btn-primary');
 if(btn){btn.disabled=false;btn.style.opacity='1';btn.style.cursor='pointer';btn.style.pointerEvents='auto';}
 },50);
 }
 };
 }
 });
})();
(function(){
 var ld=document.getElementById('hdr-logo');
 if(!ld)return;
 var src=ld.src;
 document.querySelectorAll('img').forEach(function(el){
 if(el.getAttribute('src')==='NICO_LOGO_PLACEHOLDER')el.src=src;
 });
})();