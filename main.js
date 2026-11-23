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
{id:1,e:"🍓",ja:"いちご",en:"Strawberry",vi:"Dâu tây",dja:"甘くてジューシーないちご。ベトナムの春に育つ完熟いちご。",den:"Sweet and juicy strawberries. Ripened in the Vietnamese spring.",dvi:"Dâu tây ngọt mọng. Chín rộ vào mùa xuân Việt Nam.",price:45000,price250:45000,price500:80000,stock:20,stock250:10,stock500:10,unit:"パック",uniten:"pack",unitvi:"hộp",pub:false,season:"spring",badge:"",variants:["250g","500g"]},
{id:2,e:"🥗",ja:"ベビーリーフ（ミックス）",en:"Baby Leaf Mix",vi:"Xà lách mix baby",dja:"数種類のレタスを混ぜた彩りサラダ。そのままドレッシングをかけて。",den:"A colorful mix of young lettuce leaves. Ready to eat with dressing.",dvi:"Hỗn hợp nhiều loại rau non đầy màu sắc. Ăn ngay với sốt salad.",price:50000,stock:29,unit:"袋",uniten:"bag",unitvi:"túi",pub:true,season:"all",badge:""},
{id:3,e:"🌿",ja:"ルッコラ",en:"Rocket (Arugula)",vi:"Rau rocket",dja:"ピリッとした風味が特徴のルッコラ。ピザやサラダに。",den:"Peppery rocket with a distinctive flavour. Perfect on pizza or salads.",dvi:"Rau rocket vị cay nhẹ đặc trưng. Dùng cho pizza hoặc salad.",price:50000,stock:30,unit:"袋",uniten:"bag",unitvi:"túi",pub:true,season:"all",badge:""},
{id:4,e:"🥬",ja:"水菜",en:"Mizuna",vi:"Rau Mizuna",dja:"シャキシャキとした食感の日本野菜。サラダや鍋に。",den:"Crisp Japanese mustard green. Great for salads and hotpot.",dvi:"Rau Nhật giòn sảng khoái. Dùng cho salad hoặc lẩu.",price:20000,stock:30,unit:"袋",uniten:"bag",unitvi:"túi",pub:false,season:"all",badge:""},
{id:5,e:"🥦",ja:"ケール",en:"Kale",vi:"Cải kale",dja:"栄養豊富なスーパーフード。スムージーやサラダに。",den:"Nutrient-rich superfood. Perfect for smoothies and salads.",dvi:"Siêu thực phẩm giàu dinh dưỡng. Tuyệt vời cho sinh tố và salad.",price:25000,stock:25,unit:"袋",uniten:"bag",unitvi:"túi",pub:false,season:"spring",badge:""},
{id:6,e:"🥕",ja:"人参",en:"Carrot",vi:"Cà rốt",dja:"甘みのある人参。生でも煮ても美味しい。",den:"Sweet and crunchy carrots. Delicious raw or cooked.",dvi:"Cà rốt ngọt giòn. Ngon dù ăn sống hay nấu chín.",price:15000,stock:40,unit:"本",uniten:"piece",unitvi:"củ",pub:false,season:"all",badge:""},
{id:7,e:"🥗",ja:"大根",en:"Daikon Radish",vi:"Củ cải trắng",dja:"さっぱりとした大根。煮物・漬物・サラダに。",den:"Mild and refreshing daikon. Great for stews, pickling, and salads.",dvi:"Củ cải trắng thanh mát. Dùng để kho, làm dưa hoặc salad.",price:15000,stock:30,unit:"本",uniten:"piece",unitvi:"củ",pub:false,season:"all",badge:""},
{id:8,e:"🥬",ja:"ほうれん草",en:"Spinach",vi:"Cải bó xôi",dja:"鉄分豊富なほうれん草。炒め物・スープに最適。",den:"Iron-rich spinach. Perfect for stir-fries and soups.",dvi:"Cải bó xôi giàu sắt. Hoàn hảo cho món xào và canh.",price:15000,stock:40,unit:"袋",uniten:"bag",unitvi:"túi",pub:false,season:"all",badge:""},
{id:9,e:"🥬",ja:"チンゲン菜",en:"Bok Choy",vi:"Cải ngọt",dja:"シャキシャキのチンゲン菜。炒め物やスープに。",den:"Crisp bok choy. Excellent stir-fried or in soups.",dvi:"Cải ngọt giòn ngon. Rất ngon khi xào hoặc nấu canh.",price:12000,stock:50,unit:"束",uniten:"bunch",unitvi:"bó",pub:false,season:"all",badge:""},
{id:10,e:"🌿",ja:"チョイサム（菜の花）",en:"Choy Sum",vi:"Cải ngồng",dja:"やわらかな菜の花。炒め物やお浸しに。",den:"Tender choy sum. Great stir-fried or blanched.",dvi:"Cải ngồng mềm ngon. Ngon nhất khi xào hoặc luộc.",price:12000,stock:50,unit:"束",uniten:"bunch",unitvi:"bó",pub:false,season:"all",badge:""},
{id:11,e:"🌱",ja:"小ねぎ",en:"Green Onion",vi:"Hành lá",dja:"薬味として万能。どんな料理にも合う。",den:"Versatile green onion. A perfect garnish for any dish.",dvi:"Hành lá đa năng. Dùng được trong mọi món ăn.",price:10000,stock:50,unit:"束",uniten:"bunch",unitvi:"bó",pub:false,season:"all",badge:""},
{id:12,e:"🍅",ja:"ミニトマト（アイコ）",en:"Cherry Tomato (Aiko)",vi:"Cà chua bi Aiko",dja:"甘みが強く美しいアイコトマト。そのままでも料理でも。",den:"Sweet and beautiful Aiko cherry tomatoes. Eat fresh or use in cooking.",dvi:"Cà chua bi Aiko ngọt và đẹp. Ăn tươi hoặc dùng để nấu.",price:65000,stock:13,unit:"パック",uniten:"pack",unitvi:"hộp",pub:true,season:"summer",badge:""},
{id:13,e:"🫑",ja:"パプリカ",en:"Bell Pepper",vi:"Ớt chuông",dja:"カラフルで甘いパプリカ。炒め物やサラダに色どりを。",den:"Colorful and sweet bell peppers. Add vibrancy to stir-fries and salads.",dvi:"Ớt chuông ngọt đầy màu sắc. Thêm màu sắc cho món xào và salad.",price:40000,stock:25,unit:"個",uniten:"piece",unitvi:"quả",pub:true,season:"summer",badge:""},
{id:14,e:"🍈",ja:"ゴーヤ",en:"Bitter Melon",vi:"Mướp đắng",dja:"ビタミン豊富なゴーヤ。ゴーヤチャンプルーに最適。",den:"Vitamin-rich bitter melon. Ideal for stir-fries.",dvi:"Mướp đắng giàu vitamin. Tuyệt vời để xào.",price:15000,stock:25,unit:"本",uniten:"piece",unitvi:"quả",pub:true,season:"summer",badge:""},
{id:15,e:"🌽",ja:"スイートコーン",en:"Sweet Corn",vi:"Ngô ngọt",dja:"みずみずしいスイートコーン。茹でてそのまま食べるのが一番。",den:"Juicy sweet corn. Best enjoyed simply boiled.",dvi:"Ngô ngọt mọng nước. Ngon nhất khi luộc ăn liền.",price:15000,stock:20,unit:"本",uniten:"ear",unitvi:"bắp",pub:false,season:"summer",badge:""},
{id:16,e:"🌽",ja:"もちとうもろこし",en:"Sticky Corn",vi:"Ngô nếp",dja:"もちもちした食感のもちとうもろこし。茹でて食べるのが一番。",den:"Glutinous sticky corn with chewy texture. Best boiled.",dvi:"Ngô nếp dẻo thơm. Ngon nhất khi luộc.",price:15000,stock:20,unit:"本",uniten:"ear",unitvi:"bắp",pub:false,season:"summer",badge:""},
{id:17,e:"🌿",ja:"オクラ",en:"Okra",vi:"Đậu bắp",dja:"ネバネバが体に良いオクラ。茹でてサラダや炒め物に。",den:"Nutritious okra with natural mucilage. Boiled for salads or stir-fried.",dvi:"Đậu bắp bổ dưỡng. Luộc ăn salad hoặc xào.",price:15000,stock:25,unit:"袋",uniten:"bag",unitvi:"túi",pub:false,season:"summer",badge:""},
{id:18,e:"🍆",ja:"なす",en:"Eggplant",vi:"Cà tím",dja:"肉厚でジューシーなベトナムのなす。炒め物や焼きなすに。",den:"Meaty and juicy Vietnamese eggplant. Great stir-fried or grilled.",dvi:"Cà tím Việt Nam dày thịt và mọng nước. Ngon khi xào hoặc nướng.",price:25000,stock:25,unit:"本",uniten:"piece",unitvi:"quả",pub:true,season:"summer",badge:""},
{id:19,e:"🥒",ja:"きゅうり",en:"Cucumber",vi:"Dưa leo",dja:"みずみずしいきゅうり。サラダや漬物に。",den:"Fresh and crisp cucumber. Great for salads or pickling.",dvi:"Dưa leo tươi mát và giòn. Dùng cho salad hoặc dưa chua.",price:12000,stock:30,unit:"本",uniten:"piece",unitvi:"quả",pub:false,season:"summer",badge:""},
{id:20,e:"🫘",ja:"いんげん豆",en:"Green Beans",vi:"Đậu cove",dja:"シャキシャキのいんげん豆。炒め物や茹でて。",den:"Crisp green beans. Delicious stir-fried or boiled.",dvi:"Đậu cove giòn. Ngon khi xào hoặc luộc.",price:15000,stock:25,unit:"袋",uniten:"bag",unitvi:"túi",pub:false,season:"summer",badge:""},
{id:21,e:"🥔",ja:"じゃがいも",en:"Potato",vi:"Khoai tây",dja:"ほくほくのじゃがいも。煮物・炒め物・ポテトサラダに。",den:"Fluffy potatoes. Perfect for stews, stir-fries, and potato salad.",dvi:"Khoai tây bùi bở. Dùng để kho, xào hoặc làm salad khoai tây.",price:15000,stock:30,unit:"個",uniten:"piece",unitvi:"củ",pub:false,season:"winter",badge:""},
{id:22,e:"🟣",ja:"ビーツ",en:"Beetroot",vi:"Củ dền",dja:"鮮やかな赤紫色のビーツ。サラダやスープに。",den:"Vibrant deep-red beetroot. Perfect for salads and soups.",dvi:"Củ dền đỏ tươi rực rỡ. Dùng cho salad và súp.",price:20000,stock:20,unit:"個",uniten:"piece",unitvi:"củ",pub:false,season:"winter",badge:""},
{id:23,e:"🥬",ja:"キャベツ",en:"Cabbage",vi:"Bắp cải",dja:"みずみずしいキャベツ。炒め物・スープ・コールスローに。",den:"Fresh and crisp cabbage. Great for stir-fry, soup, or coleslaw.",dvi:"Bắp cải tươi giòn. Dùng để xào, nấu canh hoặc làm salad.",price:150000,stock:25,unit:"個",uniten:"head",unitvi:"bắp",pub:true,season:"winter",badge:""},
{id:24,e:"🥦",ja:"コールラビ",en:"Kohlrabi",vi:"Su hào",dja:"さっぱりとしたコールラビ。炒め物や漬物に。",den:"Mild and refreshing kohlrabi. Great for stir-fry or pickling.",dvi:"Su hào thanh mát. Ngon khi xào hoặc làm dưa.",price:15000,stock:20,unit:"個",uniten:"piece",unitvi:"củ",pub:false,season:"winter",badge:""},
{id:25,e:"🥦",ja:"カリフラワー",en:"Cauliflower",vi:"Súp lơ trắng",dja:"真っ白なカリフラワー。炒め物やカレーに。",den:"White cauliflower. Perfect for stir-fry or curry.",dvi:"Súp lơ trắng. Ngon khi xào hoặc nấu cà ri.",price:20000,stock:15,unit:"個",uniten:"head",unitvi:"bông",pub:false,season:"winter",badge:""},
{id:26,e:"🥦",ja:"ブロッコリー",en:"Broccoli",vi:"Bông súp lơ xanh",dja:"栄養豊富なブロッコリー。茹でても炒めても美味しい。",den:"Nutrient-rich broccoli. Delicious boiled or stir-fried.",dvi:"Bông súp lơ xanh giàu dinh dưỡng. Ngon dù luộc hay xào.",price:20000,stock:15,unit:"個",uniten:"head",unitvi:"bông",pub:false,season:"winter",badge:""},
{id:27,e:"🥬",ja:"白菜",en:"Napa Cabbage",vi:"Cải thảo",dja:"やわらかな白菜。鍋料理・炒め物・漬物に。",den:"Tender napa cabbage. Perfect for hotpot, stir-fry, or pickling.",dvi:"Cải thảo mềm ngon. Dùng cho lẩu, xào hoặc làm dưa.",price:15000,stock:25,unit:"個",uniten:"head",unitvi:"bắp",pub:false,season:"winter",badge:""},
{id:28,e:"🌿",ja:"新商品",en:"Black Peanuts",vi:"Lạc đen khô",dja:"",den:"",dvi:"Thơm , ngon",price:60000,stock:10,unit:"個",uniten:"pack",unitvi:"150gam",pub:true,season:"all",badge:"NEW"},
{id:29,e:"🌿",ja:"新商品",en:"Malabar Spinach",vi:"Rau Mùng Tơi",dja:"",den:"",dvi:"",price:40000,stock:10,unit:"個",uniten:"pack",unitvi:"250gam",pub:true,season:"all",badge:"旬"},
{id:30,e:"🌿",ja:"新商品",en:"Banana",vi:"Chuối",dja:"",den:"",dvi:"",price:50000,stock:100,unit:"個",uniten:"pack",unitvi:"5 quả",pub:true,season:"all",badge:"旬"},
{id:31,e:"🌿",ja:"新商品",en:"Strawberry Jam",vi:"Mứt dâu tây",dja:"",den:"",dvi:"",price:180000,stock:20,unit:"個",uniten:"jar",unitvi:"200gam",pub:true,season:"all",badge:"NEW"},
{id:32,e:"🎃",ja:"かぼちゃ",en:"Pumpkin",vi:"Bí đỏ",dja:"ほくほく甘いかぼちゃ。スープ・炒め物に幅広く使えます。",den:"Sweet and fluffy pumpkin. Versatile for soups, stews, and stir-fries.",dvi:"",price:75000,stock:10,unit:"個",uniten:"piece",unitvi:"quả",pub:true,season:"all",badge:"NEW"}
];
var ORDERS = [];
var RECEIPT_ORDER = null;
var SHOP_OPEN = true;
var _shopTogglePending = false;
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
var sheetsViewUrl = "https://docs.google.com/spreadsheets/d/1HHiggHRhwGzERGsQRIwvGJ518Tt3DLSchxjOmOhjXW0/edit";
var pendingOrder = null, pendingScreenshot = null;
var currentQRMethod = null;
var currentReviewProductId = null;
var currentNotifyProductId = null;
var currentRating = 0;
var QR_IMGS = {momo:null,zalopay:null,vnpay:null};
var EJ = {service:"",template:"",pubkey:"",from:"sigpart123@gmail.com"};
var LINE_CHANNEL_TOKEN = "";
var LINE_ADMIN_USERID = "";
var LIFF_ID = "2012327298-k4OuH8dt";
(function(){
try {
var raw = localStorage.getItem("nny_ej");
if(raw){var c=JSON.parse(raw);EJ.service=c.service||"";EJ.template=c.template||"";EJ.pubkey=c.pubkey||"";EJ.from=c.from||EJ.from;EJ.admin=c.admin||"";}
if(EJ.pubkey){try{emailjs.init({publicKey:EJ.pubkey});}catch(e){}}
}catch(e){}
try{var r=localStorage.getItem("nny_reviews");if(r)REVIEWS=JSON.parse(r);}catch(e){}
try{var n=localStorage.getItem("nny_notify");if(n)NOTIFY_LIST=JSON.parse(n);}catch(e){}
try{var oh=localStorage.getItem("nny_hist");if(oh)ORDER_HISTORY=JSON.parse(oh);}catch(e){}
try{var qi=localStorage.getItem("nny_qr");if(qi){var q=JSON.parse(qi);QR_IMGS.momo=q.momo||null;QR_IMGS.zalopay=q.zalopay||null;QR_IMGS.vnpay=q.vnpay||null;}}catch(e){}
try{var _lnc=localStorage.getItem("nny_line_cfg");if(_lnc){var _lncj=JSON.parse(_lnc);LINE_CHANNEL_TOKEN=_lncj.token||"";LINE_ADMIN_USERID=_lncj.adminId||"";}}catch(e){}
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
ja:{hdrCart:"カート",shopTitle:"🥦 今週のお野菜",cartTtl:"🛒 カートの中身",cartBack:"← 買い物を続ける",sumQty:"商品点数",sumTot:"合計",toInfo:"購入に進む",infoTtl:"📋 注文情報",infoBack:"← カートに戻る",fcCust:"🙋 お客様情報",fcDel:"🛵 受け取り方法",fcPay:"支払い方法",fcNote:"📝 備考",flName:"お名前",flPhone:"電話番号",flZalo:"Zalo ID",flAddr:"住所",flEmail:"メールアドレス",req:"必須",delDeliver:"配達",delPickup:"直接受取",payCash:"現金",toConfirm:"注文内容を確認する",confirmTtl:"✔ 注文確認",confirmBack:"← 情報を修正する",ccLblItems:"注文商品",ccLblTot:"合計",ccLblCust:"お客様情報",ccLblDel:"受け取り方法",ccLblPay:"支払い方法",ccLblNote:"備考",placeLbl:"注文を確定する",rptTtl:"領収証 兼 注文書",rmlNo:"注文番号",rmlDate:"日時",rmlName:"お名前",rmlPhone:"電話番号",rmlAddr:"お届け先",rmlEmail:"メール",rmlDel:"受け取り",rmlPay:"支払い",rptItemsTtl:"ご注文内容",rthItem:"商品",rthQty:"数量",rthPrice:"単価",rthSub:"小計",rgtLbl:"合計金額",rntLbl:"備考：",rctShop:"買い物を続ける",rctHist:"📋 注文履歴",rptFarm:"ご注文ありがとうございます。配達は日曜日にエムハノイより順次お届けいたします。<br>ご質問等がございましたらお手数ですが、以下NICONICOYASAI公式LINEにてお気軽にご連絡ください。<br><a href='https://lin.ee/R9dAJtD' target='_blank' style='color:var(--g1);font-weight:700;'>https://lin.ee/R9dAJtD</a><br>NICO NICO YASAI ※ニコニコ野菜バンホー農場",pg1:"カート",pg2:"情報入力",pg3:"確認",pg4:"完了",heroEyebrow:"🌿 農薬不使用・化学肥料不使用",heroH1:"生産者と消費者の<br>顔と顔の見える関係づくり",heroSub:"ベトナムの大地で丁寧に育てた新鮮野菜を直接お届けします",spAll:"今週のお野菜",spSpring:"春",spSummer:"夏",spAutumn:"秋",spWinter:"冬",spYearround:"通年",shopTitleYearround:"🌿 通年野菜",badgeNew:"NEW",badgeRec:"⭐ おすすめ",badgeSeason:"🌿 旬",badgeNone:"なし",shopTitleSpring:"🌸 春に採れる野菜",shopTitleSummer:"☀️ 夏に採れる野菜",shopTitleAutumn:"🍂 秋に採れる野菜",shopTitleWinter:"❄️ 冬に採れる野菜",drawerTtl:"🌿 NICO NICO YASAI 管理",dtOrders:"📋 注文",dtDB:"🗄 データ",dtStats:"📊 売上",dtProducts:"🥦 商品",dtNotify:"🔔 入荷通知",dtSite:"⚙️ 設定",ocToggleDone:"✅ 完了にする",ocViewReceipt:"🖨 領収証",pubToggleOn:"🟢 公開中",pubToggleOff:"🔴 非公開",adminLangNote:"管理画面の言語：",ejWizTitle:"📧 メール自動送信の設定",ejStep1:"ステップ1: emailjs.com で無料登録",ejStep2:"ステップ2: 以下に入力",ejTestBtn:"🧪 テスト送信",ejSaveBtn:"💾 設定を保存",ejTestSuccess:"✅ 送信成功！メールが動作しています。",ejTestFail:"❌ 送信失敗。Service ID/Template ID/Public Keyを確認してください。",noOrders:"まだ注文はありません 📭",stockLabel:"在庫数",priceLabel:"価格",saveProduct:"💾 保存",deleteProduct:"🗑 削除",addProductBtn:"➕ 商品を追加",publishAll:"✅ 全て公開",hideAll:"🔴 全て非公開",seasonOnly:"🌸 季節だけ公開",exportData:"⬇ CSV ダウンロード",copyData:"📋 データをコピー",clearData:"🗑 データクリア",sheetsUrlLabel:"Google Sheets リンク:",sheetsSaveBtn:"リンクを保存",notifyEmpty:"入荷通知の登録はありません",adminQuickStats:"本日のサマリー",stlOrders:"総注文数",stlRev:"総売上",stlAvg:"平均注文",stlPub:"公開中商品",peNewLbl:"商品を追加",fabLbl:"管理・編集",abarBtnLbl:"管理",noOrders:"注文はまだありません",stNew:"新規",stDone:"完了",swarnLbl:"在庫少",soutLbl:"在庫切れ",swTitle:"⚠️ 在庫警告",pubLbl:"公開中",unpubLbl:"非公開",cartEmpty:"カートに商品がありません",addBtn:"カートへ",stockOut:"在庫なし",stockLow:"残り",navShop:"野菜を買う",navHist:"注文履歴",histBack:"← トップへ戻る",savedLbl:"前回の情報を自動入力",rctShop:"買い物を続ける",rctHist:"📋 注文履歴",rvEdit:"編集",histTtl:"📋 注文履歴",histBack:"← トップへ戻る",histEmpty:"注文履歴がありません",histLookup:"電話番号で注文を検索",histLookupBtn:"検索",histLookupEmpty:"この電話番号の注文は見つかりませんでした",histLookupPlaceholder:"電話番号を入力",hdrContact:"お問い合わせ",rvModalTitle:"レビュー",wrTitle:"✍ レビューを書く",rvSubmit:"投稿する",ntfModalTitle:"🔔 入荷通知",ntfDesc:"在庫が補充されたらメールでお知らせします。",ntfSubmit:"🔔 通知を受け取る",ntfSuccess:"✅ 登録しました！入荷時にご連絡します。",savedLbl:"前回の情報を自動入力",guideTtl4:"お問い合わせ",guideBody4:"<a href='https://lin.ee/UJ0Pjx6' target='_blank' rel='noopener' style='color:var(--g1);font-weight:700;'>NICO NICO YASAI公式LINE</a>",guideTtl1:"ご注文方法",guideBody1:"お野菜をカートに追加し、ご注文ください。ご注文後、Gmailにてご連絡いたします。<br><br>💬 購入後、チャットボタンより農家と直接やりとりが可能です。<br><br>⚠️ 季節の影響により、ご購入後にお求めのお野菜がない場合がございます。その際は別途ご対応させていただきます。ご理解の程、何卒よろしくお願いいたします。",guideTtl2:"配送について",guideTtl3:"お支払いについて",guideBody3:"現金でのお取引は行っておりません。お支払いは<b>銀行QR（銀行振込）のみ</b>となります。",heroBadge:"🌿 農薬不使用・化学肥料不使用",heroH1:"生産者と消費者の<br>顔と顔の見える関係づくり",heroSub:"ベトナムの大地で丁寧に育てた新鮮野菜を直接お届けします",farmLbl:"※ニコニコ野菜バンホー農場",rptFarm:"ご注文ありがとうございます。配達は日曜日にエムハノイより順次お届けいたします。<br>ご質問等がございましたらお手数ですが、以下NICONICOYASAI公式LINEにてお気軽にご連絡ください。<br><a href='https://lin.ee/R9dAJtD' target='_blank' style='color:var(--g1);font-weight:700;'>https://lin.ee/R9dAJtD</a><br>NICO NICO YASAI ※ニコニコ野菜バンホー農場",rvNamePh:"お名前（任意）",rvTextPh:"野菜の感想をお聞かせください...",payVietqr:"🏦 銀行QRコード",fcProfil:"👤 プロフィール（任意）",privacyNote:"※ご入力いただいた情報はプライバシーを保護した上で、サービス改善・品揃えの最適化のためにのみ活用します。",flAge:"年齢層",flGender:"性別",flFamily:"家族構成",flSource:"どこで知りましたか？",flNote:"配達時間の希望など",prog1:"カート",spAll:"今週のお野菜",spSpring:"春",spSummer:"夏",spAutumn:"秋",spWinter:"冬",prog2:"情報入力",prog3:"確認",prog4:"完了",selOptional:"-- 選択（任意）--",ageOpt1:"20代",ageOpt2:"30代",ageOpt3:"40代",ageOpt4:"50代以上",genderF:"女性",genderM:"男性",genderO:"その他",familyS:"1人",familyM:"2〜3人",familyL:"4人以上",sourceZalo:"Zalo",sourceFB:"Facebook",sourceRef:"知人の紹介",sourceMkt:"市場・店頭",sourceOth:"その他"},
vi:{hdrCart:"Giỏ hàng",shopTitle:"🥦 Rau tuần này",cartTtl:"🛒 Giỏ hàng",cartBack:"← Tiếp tục mua",sumQty:"Số lượng",sumTot:"Tổng cộng",toInfo:"Tiến hành mua",infoTtl:"📋 Thông tin đặt hàng",infoBack:"← Quay lại",fcCust:"🙋 Thông tin khách hàng",fcDel:"🛵 Hình thức nhận",fcPay:"Thanh toán",fcNote:"📝 Ghi chú",flName:"Họ và tên",flPhone:"Số điện thoại",flZalo:"Zalo ID",flAddr:"Địa chỉ",flEmail:"Email",req:"Bắt buộc",delDeliver:"Giao hàng",delPickup:"Nhận trực tiếp",payCash:"Tiền mặt",toConfirm:"Xem lại đơn hàng",confirmTtl:"✔ Xác nhận",confirmBack:"← Sửa thông tin",ccLblItems:"Sản phẩm",ccLblTot:"Tổng cộng",ccLblCust:"Thông tin khách",ccLblDel:"Hình thức nhận",ccLblPay:"Thanh toán",ccLblNote:"Ghi chú",placeLbl:"Xác nhận đặt hàng",rptTtl:"Hóa đơn / Phiếu đặt",rmlNo:"Mã đơn",rmlDate:"Ngày giờ",rmlName:"Họ tên",rmlPhone:"Điện thoại",rmlAddr:"Địa chỉ",rmlEmail:"Email",rmlDel:"Hình thức",rmlPay:"Thanh toán",rptItemsTtl:"Chi tiết đơn hàng",rthItem:"Sản phẩm",rthQty:"SL",rthPrice:"Đơn giá",rthSub:"Thành tiền",rgtLbl:"Tổng cộng",rntLbl:"Ghi chú：",rctShop:"Tiếp tục mua",rctHist:"📋 Lịch sử",rptFarm:"Cảm ơn bạn đã đặt hàng. Hàng sẽ được giao vào Chủ nhật từ cửa hàng em Hanoi.<br>Nếu có thắc mắc, vui lòng liên hệ qua LINE chính thức của NICONICOYASAI:<br><a href='https://lin.ee/R9dAJtD' target='_blank' style='color:var(--g1);font-weight:700;'>https://lin.ee/R9dAJtD</a><br>NICO NICO YASAI · Trang trại Bản Hồ",pg1:"Giỏ hàng",pg2:"Thông tin",pg3:"Xác nhận",pg4:"Hoàn tất",heroEyebrow:"🌿 Trồng không hóa chất",heroH1:"Xây dựng mối quan hệ mặt đối mặt<br>giữa người sản xuất và người tiêu dùng",heroSub:"Rau củ tươi ngon được trồng cẩn thận trên đất Việt Nam",spAll:"🌸 Tất cả",spSpring:"Xuân",spSummer:"Hè",spAutumn:"Thu",spWinter:"Đông",spYearround:"Quanh năm",shopTitleYearround:"🌿 Rau quanh năm",badgeNew:"NEW",badgeRec:"⭐ Nổi bật",badgeSeason:"🌿 Đặc sản",badgeNone:"Không có",shopTitleSpring:"🌸 Rau mùa Xuân",shopTitleSummer:"☀️ Rau mùa Hạ",shopTitleAutumn:"🍂 Rau mùa Thu",shopTitleWinter:"❄️ Rau mùa Đông",drawerTtl:"🌿 Bảng quản lý NICO NICO YASAI",dtOrders:"📋 Đơn hàng",dtDB:"🗄 Dữ liệu",dtStats:"📊 Doanh thu",dtProducts:"🥦 Sản phẩm",dtNotify:"🔔 Thông báo nhập hàng",dtSite:"⚙️ Cài đặt",ocToggleDone:"✅ Đánh dấu hoàn thành",ocViewReceipt:"🖨 Xem hóa đơn",pubToggleOn:"🟢 Đang bán",pubToggleOff:"🔴 Ẩn đi",adminLangNote:"Chọn ngôn ngữ bảng quản lý:",ejWizTitle:"📧 Thiết lập gửi email tự động",ejStep1:"Bước 1: Đăng ký miễn phí tại emailjs.com",ejStep2:"Bước 2: Điền thông tin bên dưới",ejTestBtn:"🧪 Gửi email thử",ejSaveBtn:"💾 Lưu cài đặt",ejTestSuccess:"✅ Gửi thử thành công! Email đang hoạt động.",ejTestFail:"❌ Gửi thất bại. Kiểm tra lại Service ID / Template ID / Public Key.",noOrders:"Chưa có đơn hàng nào 📭",stockLabel:"Tồn kho",priceLabel:"Giá bán",saveProduct:"💾 Lưu sản phẩm",deleteProduct:"🗑 Xóa",addProductBtn:"➕ Thêm sản phẩm mới",publishAll:"✅ Hiện tất cả",hideAll:"🔴 Ẩn tất cả",seasonOnly:"🌸 Chỉ hiện theo mùa",exportData:"⬇ Tải xuống CSV",copyData:"📋 Sao chép dữ liệu",clearData:"🗑 Xóa dữ liệu",sheetsUrlLabel:"Liên kết Google Sheets:",sheetsSaveBtn:"Lưu liên kết",notifyEmpty:"Chưa có yêu cầu thông báo nhập hàng",adminQuickStats:"Tổng quan hôm nay",stlOrders:"Tổng đơn",stlRev:"Doanh thu",stlAvg:"TB đơn",stlPub:"Đang bán",peNewLbl:"Thêm sản phẩm",fabLbl:"Quản lý",abarBtnLbl:"Quản lý",noOrders:"Chưa có đơn hàng",stNew:"Mới",stDone:"Hoàn thành",swarnLbl:"Gần hết",soutLbl:"Hết hàng",swTitle:"⚠️ Cảnh báo",pubLbl:"Đang bán",unpubLbl:"Ẩn",cartEmpty:"Giỏ hàng trống",addBtn:"Thêm",stockOut:"Hết hàng",stockLow:"Còn",navShop:"Mua rau",navHist:"Lịch sử",histTtl:"📋 Lịch sử đặt hàng",histBack:"← Quay về trang chủ",savedLbl:"Tự động điền thông tin lần trước",rctShop:"Tiếp tục mua",rctHist:"📋 Lịch sử đặt hàng",rvSubmit:"Gửi đánh giá",rvEdit:"Sửa",histBack:"← Quay lại",histEmpty:"Chưa có lịch sử đặt hàng",histLookup:"Tra cứu đơn hàng bằng số điện thoại",histLookupBtn:"Tìm kiếm",histLookupEmpty:"Không tìm thấy đơn hàng với số điện thoại này",histLookupPlaceholder:"Nhập số điện thoại",hdrContact:"Liên hệ",rvModalTitle:"Đánh giá",wrTitle:"✍ Viết đánh giá",rvSubmit:"Gửi",ntfModalTitle:"🔔 Thông báo nhập hàng",ntfDesc:"Chúng tôi sẽ thông báo khi sản phẩm có hàng.",ntfSubmit:"🔔 Đăng ký nhận thông báo",ntfSuccess:"✅ Đã đăng ký! Chúng tôi sẽ thông báo khi có hàng.",savedLbl:"Tự động điền thông tin cũ",guideTtl4:"Liên hệ",guideBody4:"<a href='https://lin.ee/UJ0Pjx6' target='_blank' rel='noopener' style='color:var(--g1);font-weight:700;'>LINE chính thức NICO NICO YASAI</a>",guideTtl1:"Cách đặt hàng",guideBody1:"Thêm rau củ vào giỏ hàng và đặt mua. Sau khi đặt hàng, chúng tôi sẽ liên hệ với bạn qua Gmail.<br><br>💬 Sau khi mua hàng, bạn có thể liên lạc trực tiếp với nông dân qua nút Chat.<br><br>⚠️ Do ảnh hưởng của mùa vụ, sau khi đặt hàng có thể xảy ra tình trạng hết sản phẩm. Trong trường hợp đó, chúng tôi sẽ liên hệ và xử lý riêng. Rất mong quý khách thông cảm và ủng hộ chúng tôi.",guideTtl2:"Về giao hàng",guideTtl3:"Về thanh toán",guideBody3:"Chúng tôi không nhận tiền mặt. Vui lòng thanh toán bằng <b>mã QR ngân hàng (chuyển khoản)</b>.",heroBadge:"🌿 Không thuốc trừ sâu · Không phân bón hóa học",heroH1:"Kết nối trực tiếp<br>giữa nông dân và người tiêu dùng",heroSub:"Rau tươi trồng trên đất Việt Nam được giao trực tiếp đến bạn",farmLbl:"Trang trại NICO NICO YASAI Bản Hồ",rptFarm:"Cảm ơn bạn đã đặt hàng. Hàng sẽ được giao vào Chủ nhật từ cửa hàng em Hanoi.<br>Nếu có thắc mắc, vui lòng liên hệ qua LINE chính thức của NICONICOYASAI:<br><a href='https://lin.ee/R9dAJtD' target='_blank' style='color:var(--g1);font-weight:700;'>https://lin.ee/R9dAJtD</a><br>NICO NICO YASAI · Trang trại Bản Hồ",rvNamePh:"Tên của bạn (tùy chọn)",rvTextPh:"Hãy chia sẻ cảm nhận về rau của bạn...",payVietqr:"🏦 QR Ngân hàng",fcProfil:"👤 Hồ sơ (tùy chọn)",privacyNote:"※Thông tin bạn cung cấp sẽ được bảo mật và chỉ dùng để cải thiện dịch vụ và tối ưu hóa sản phẩm.",flAge:"Độ tuổi",flGender:"Giới tính",flFamily:"Thành phần gia đình",flSource:"Bạn biết đến chúng tôi qua đâu?",flNote:"Ghi chú thêm (thời gian giao hàng mong muốn...)",prog1:"Giỏ hàng",spAll:"Rau tuần này",spSpring:"Xuân",spSummer:"Hạ",spAutumn:"Thu",spWinter:"Đông",prog2:"Thông tin",prog3:"Xác nhận",prog4:"Hoàn tất",selOptional:"-- Chọn (tùy chọn) --",ageOpt1:"20-29 tuổi",ageOpt2:"30-39 tuổi",ageOpt3:"40-49 tuổi",ageOpt4:"50 tuổi trở lên",genderF:"Nữ",genderM:"Nam",genderO:"Khác",familyS:"1 người",familyM:"2-3 người",familyL:"4 người trở lên",sourceZalo:"Zalo",sourceFB:"Facebook",sourceRef:"Bạn bè giới thiệu",sourceMkt:"Chợ / cửa hàng",sourceOth:"Khác"},
en:{hdrCart:"Cart",shopTitle:"🥦 This Week's Vegetables",cartTtl:"🛒 Your Cart",cartBack:"← Continue Shopping",sumQty:"Items",sumTot:"Total",toInfo:"Proceed to Purchase",infoTtl:"📋 Order Information",infoBack:"← Back to Cart",fcCust:"🙋 Customer Info",fcDel:"🛵 Delivery Method",fcPay:"Payment",fcNote:"📝 Notes",flName:"Full Name",flPhone:"Phone Number",flZalo:"Zalo ID",flAddr:"Address",flEmail:"Email Address",req:"Required",delDeliver:"Delivery",delPickup:"Pickup",payCash:"Cash",toConfirm:"Review Order",confirmTtl:"✔ Order Confirmation",confirmBack:"← Edit Info",ccLblItems:"Items",ccLblTot:"Total",ccLblCust:"Customer Info",ccLblDel:"Delivery",ccLblPay:"Payment",ccLblNote:"Notes",placeLbl:"Place Order",rptTtl:"Receipt & Order",rmlNo:"Order No.",rmlDate:"Date",rmlName:"Name",rmlPhone:"Phone",rmlAddr:"Address",rmlEmail:"Email",rmlDel:"Delivery",rmlPay:"Payment",rptItemsTtl:"Order Details",rthItem:"Item",rthQty:"Qty",rthPrice:"Unit Price",rthSub:"Subtotal",rgtLbl:"Total",rntLbl:"Notes:",rctShop:"Continue Shopping",rctHist:"📋 Order History",rptFarm:"Thank you for your order. Delivery is every Sunday from em Hanoi store.<br>For inquiries, please contact us via our official NICONICOYASAI LINE:<br><a href='https://lin.ee/R9dAJtD' target='_blank' style='color:var(--g1);font-weight:700;'>https://lin.ee/R9dAJtD</a><br>NICO NICO YASAI · Ban Ho Farm",pg1:"Cart",pg2:"Info",pg3:"Review",pg4:"Done",heroEyebrow:"🌿 Pesticide-Free & No Chemical Fertilizers",heroH1:"Farm-to-Table<br>Fresh from Vietnam",heroSub:"Fresh organic vegetables grown with care, delivered directly to you",spAll:"🥬 This Week's Veg",spSpring:"Spring",spSummer:"Summer",spAutumn:"Autumn",spWinter:"Winter",spYearround:"Year-round",shopTitleYearround:"🌿 Year-round Vegetables",badgeNew:"NEW",badgeRec:"⭐ Recommended",badgeSeason:"🌿 In Season",badgeNone:"None",shopTitleSpring:"🌸 Spring Vegetables",shopTitleSummer:"☀️ Summer Vegetables",shopTitleAutumn:"🍂 Autumn Vegetables",shopTitleWinter:"❄️ Winter Vegetables",drawerTtl:"🌿 NICO NICO YASAI Admin",dtOrders:"📋 Orders",dtDB:"🗄 Data",dtStats:"📊 Sales",dtProducts:"🥦 Products",dtNotify:"🔔 Restock",dtSite:"⚙️ Settings",ocToggleDone:"✅ Mark Done",ocViewReceipt:"Receipt",pubToggleOn:"🟢 Public",pubToggleOff:"🔴 Hidden",adminLangNote:"Admin language:",ejWizTitle:"📧 Email Auto-Send Setup",ejStep1:"Step 1: Register at emailjs.com (free)",ejStep2:"Step 2: Enter your credentials",ejTestBtn:"🧪 Test Send",ejSaveBtn:"💾 Save Settings",ejTestSuccess:"✅ Success! Email is working.",ejTestFail:"❌ Failed. Check Service/Template/Public Key.",noOrders:"No orders yet 📭",stockLabel:"Stock",priceLabel:"Price",saveProduct:"💾 Save",deleteProduct:"🗑 Delete",addProductBtn:"➕ Add Product",publishAll:"✅ Publish All",hideAll:"🔴 Hide All",seasonOnly:"🌸 Seasonal Only",exportData:"⬇ Download CSV",copyData:"📋 Copy Data",clearData:"🗑 Clear Data",sheetsUrlLabel:"Google Sheets Link:",sheetsSaveBtn:"Save Link",notifyEmpty:"No restock notifications",adminQuickStats:"Today's Summary",stlOrders:"Total Orders",stlRev:"Total Revenue",stlAvg:"Avg Order",stlPub:"Live Products",peNewLbl:"Add Product",fabLbl:"Admin",abarBtnLbl:"Admin",stNew:"New",stDone:"Done",swarnLbl:"Low Stock",soutLbl:"Out of Stock",swTitle:"⚠️ Stock Warning",pubLbl:"Public",unpubLbl:"Hidden",cartEmpty:"Your cart is empty",addBtn:"Add to Cart",stockOut:"Out of Stock",stockLow:"Only ",navShop:"Shop",navHist:"Order History",histTtl:"📋 Order History",histBack:"← Back to Top",savedLbl:"Auto-fill from last order",rctShop:"Continue Shopping",rctHist:"📋 Order History",rvSubmit:"Submit Review",rvEdit:"Edit",histBack:"← Back",histEmpty:"No order history",rvModalTitle:"Review",wrTitle:"✍ Write a Review",rvSubmit:"Submit",ntfModalTitle:"🔔 Restock Alert",ntfDesc:"We'll email you when this item is back in stock.",ntfSubmit:"🔔 Notify Me",ntfSuccess:"✅ Registered! We'll notify you when it's back.",savedLbl:"Auto-filled from last order",payVietqr:"Bank Transfer (VietQR)",stDone:"Done",stPending:"Pending Payment",histLookup:"Look up by phone",histLookupBtn:"Search",histLookupEmpty:"No orders found for this number",histLookupPlaceholder:"Enter phone number",hdrContact:"Contact",farmLbl:"Ban Ho NICO NICO YASAI Farm",rptFarm:"Thank you for your order. Delivery is every Sunday from em Hanoi store.<br>For inquiries, please contact us via our official NICONICOYASAI LINE:<br><a href='https://lin.ee/R9dAJtD' target='_blank' style='color:var(--g1);font-weight:700;'>https://lin.ee/R9dAJtD</a><br>NICO NICO YASAI · Ban Ho Farm",payVietqr:"🏦 Bank QR Code",fcProfil:"👤 Profile (optional)",privacyNote:"※Your information will be kept private and used only to improve our service.",flAge:"Age Group",flGender:"Gender",flFamily:"Household Size",flSource:"How did you find us?",flNote:"Delivery time preference, etc.",prog1:"Cart",spAll:"This Week",spSpring:"Spring",spSummer:"Summer",spAutumn:"Autumn",spWinter:"Winter",prog2:"Info",prog3:"Confirm",prog4:"Done",ageOpt1:"20s",ageOpt2:"30s",ageOpt3:"40s",ageOpt4:"50+",genderF:"Female",genderM:"Male",genderO:"Other",familyS:"1 person",familyM:"2-3 people",familyL:"4+ people",sourceZalo:"Zalo",sourceFB:"Facebook",sourceRef:"Friend referral",sourceMkt:"Market / store",sourceOth:"Other",heroBadge:"🌿 No Pesticides · No Chemical Fertilizers",heroH1:"Connecting farmers<br>directly with consumers",heroSub:"Fresh vegetables grown on Vietnamese soil, delivered straight to you",farmLbl:"※Nico Nico Yasai — Ban Ho Farm",guideTtl4:"Contact",guideBody4:"<a href='https://lin.ee/UJ0Pjx6' target='_blank' rel='noopener' style='color:var(--g1);font-weight:700;'>NICO NICO YASAI Official LINE</a>",guideTtl1:"How to Order",guideBody1:"Add vegetables to your cart and place your order. We will contact you by Gmail after your order is confirmed.<br><br>💬 After purchase, you can communicate directly with the farmer via the Chat button.<br><br>⚠️ Due to seasonal conditions, some items may be unavailable after ordering. In such cases, we will contact you separately. We appreciate your understanding.",guideTtl2:"Delivery",guideTtl3:"Payment",guideBody3:"We do not accept cash. Payment is by <b>bank QR code (bank transfer) only</b>.",rptFarm:"Thank you for your order. Delivery is every Sunday from em Hanoi store.<br>For inquiries, please contact us via our official NICONICOYASAI LINE:<br><a href='https://lin.ee/R9dAJtD' target='_blank' style='color:var(--g1);font-weight:700;'>https://lin.ee/R9dAJtD</a><br>NICO NICO YASAI · Ban Ho Farm",rvNamePh:"Your name (optional)",rvTextPh:"Share your thoughts about the vegetables...",rvSubmit:"Submit Review"}
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
?"Thông thường, chỉ vào Chủ nhật hàng tuần, chúng tôi tổ chức buổi bán hàng trực tiếp tại cửa hàng em Hanoi (12:00〜16:00), đóng gói rau và giao qua Grab. Bạn cũng có thể nhận hàng tại cửa hàng trong buổi bán. Vào các ngày không có buổi bán trực tiếp, hàng sẽ được giao từ trang trại."
:lang==="en"
?"We normally hold a weekly direct sales event at em Hanoi store every Sunday (12:00–16:00), where we pack and deliver vegetables via Grab. Pickup at the store is also available during the event. On days without a direct sales event, orders will be shipped directly from the farm."
:"通常、毎週日曜日のみ、em Hanoi店にて直売会を開催（12:00〜16:00）しており、そこから野菜を梱包しGrabにてお届けします。直売会での受け取りも可能です。直売会がない日に関しては、農場より順次お届けいたします。";
var warn=lang==="vi"
?"<br><br>⚠️ Do ảnh hưởng của thời tiết và mưa, rau có thể thay đổi trong ngày giao. Việc giao hàng cũng có thể mất nhiều thời gian hơn bình thường. Mong quý khách thông cảm."
:lang==="en"
?"<br><br>⚠️ Due to weather conditions including rain, available vegetables may change on delivery day. Delivery may also take longer than usual. We appreciate your understanding."
:"<br><br>⚠️ 雨天等の天候の影響により、当日ご希望のお野菜が変更になる場合や、配達に時間がかかる場合がございます。あらかじめご了承ください。";
el.innerHTML=txt+warn+'<br><br>📍 <a href="https://maps.app.goo.gl/gY9DihnYPJmGUiAq6" target="_blank" style="color:var(--g1);font-weight:700;">12 P. Nguyễn Văn Ngọc, Cống Vị, Giảng Võ, Hà Nội 100000, Vietnam</a>';
})();
s("guide-ttl3","guideTtl3");h("guide-body3","guideBody3");
s("guide-ttl4","guideTtl4");h("guide-body4","guideBody4");
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
s("hdr-cart-lbl","hdrCart"); s("shop-title","shopTitle"); s("cart-ttl","cartTtl"); s("fc-order-lbl","toInfo");
s("cart-back","cartBack"); s("sum-qty-lbl","sumQty"); s("sum-tot-lbl","sumTot");
s("to-info-lbl","toInfo"); s("info-ttl","infoTtl"); s("info-back","infoBack");
s("fc-cust","fcCust"); s("fc-del","fcDel"); s("fc-pay","fcPay"); s("fc-note","fcNote");
s("del-deliver","delDeliver"); s("del-pickup","delPickup"); s("pay-cash","payCash");
if(typeof updatePickupAvailability==="function")updatePickupAvailability();
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
var addrHint=document.getElementById("addr-hint"); if(addrHint) addrHint.textContent=L("※部屋番号等わかる範囲でご記入ください","※Please include room number etc. as much as you know","※Vui lòng ghi rõ số phòng và các thông tin địa chỉ bạn biết");
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
var ns=document.getElementById("nav-shop");if(ns)ns.classList.toggle("active",v==="shop"||v==="cart"||v==="info"||v==="confirm"||v==="receipt");
document.getElementById("nav-hist").classList.toggle("active",v==="history");
var fc=document.getElementById("float-cart");if(fc)fc.style.visibility=(v==="cart"||v==="info"||v==="confirm"||v==="receipt")?"hidden":"";
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
function downloadProductList(){
var prods=PRODUCTS.filter(function(p){return p.pub;});
var rows=prods.map(function(p){
var name=lang==="vi"?p.vi:lang==="en"?p.en:p.ja;
var unit=lang==="vi"?p.unitvi:lang==="en"?p.uniten:p.unit;
var price=p.variants&&p.variants.length?p.variants.map(function(v){return v+(v==="250g"?": "+vnd(p.price250):v==="500g"?": "+vnd(p.price500):": "+vnd(p.price));}).join(" / "):vnd(p.price)+"/"+unit;
return '<tr><td style="padding:8px 12px;font-size:16px;">'+p.e+'</td><td style="padding:8px 12px;font-weight:600;">'+name+'</td><td style="padding:8px 12px;color:#2d6a2d;font-weight:700;">'+price+'</td><td style="padding:8px 12px;color:#555;">在庫: '+p.stock+'</td></tr>';
}).join("");
var html='<!DOCTYPE html><html><head><meta charset="UTF-8"><title>NICO NICO YASAI — 野菜リスト</title>'
+'<style>body{font-family:sans-serif;max-width:700px;margin:0 auto;padding:20px;}h1{color:#1a3d1a;font-size:20px;margin-bottom:4px;}p{color:#888;font-size:13px;margin-bottom:16px;}table{width:100%;border-collapse:collapse;}tr:nth-child(even){background:#f6faf6;}td{border-bottom:1px solid #e0e8e0;vertical-align:middle;}@media print{body{padding:0;}button{display:none;}}</style>'
+'</head><body><h1>🥦 NICO NICO YASAI — 野菜リスト</h1><p>'+new Date().toLocaleDateString("ja-JP",{year:"numeric",month:"long",day:"numeric"})+'</p>'
+'<button onclick="window.print()" style="margin-bottom:16px;padding:8px 16px;background:#2d6a2d;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:13px;">🖨 印刷 / PDF保存</button>'
+'<table><thead><tr style="background:#1a3d1a;color:#fff;"><th style="padding:8px 12px;text-align:left;">　</th><th style="padding:8px 12px;text-align:left;">商品名</th><th style="padding:8px 12px;text-align:left;">価格</th><th style="padding:8px 12px;text-align:left;">在庫</th></tr></thead><tbody>'+rows+'</tbody></table>'
+'</body></html>';
var w=window.open("","_blank");if(w){w.document.write(html);w.document.close();}
}
function goHistory(){renderHistory();showView("history");}
function goInfo(){
if(!Object.keys(cart).length){alert(L("カートに商品を追加してください","Please add items to cart","Vui lòng thêm sản phẩm"));return;}
loadSaved(); showSavedBadge(); showView("info");
}
function goConfirm(){
if(!selDel){alert(L("受け取り方法を選択してください","Please select a delivery method","Vui lòng chọn phương thức nhận hàng"));var el=document.getElementById("fc-del");if(el)el.scrollIntoView({behavior:"smooth",block:"center"});return;}
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
function esc(s){return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}
function hashPin(pin){return crypto.subtle.digest('SHA-256',new TextEncoder().encode(String(pin))).then(function(buf){return Array.from(new Uint8Array(buf)).map(function(b){return b.toString(16).padStart(2,'0');}).join('');});}
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
if(typeof applyViPatches==="function")applyViPatches();
var grid=document.getElementById("pgrid");
if(!grid){console.error("[NNY] pgrid not found");return;}
var list=PRODUCTS.filter(function(p){
if(season==="all") return p.pub!==false;
if(season==="yearround") return p.season==="all"||(Array.isArray(p.season)&&p.season.indexOf("all")>=0);
var id=Number(p.id);
var pSea=p.season;
var inSea=(typeof pSea==="string"&&pSea===season)||(Array.isArray(pSea)&&pSea.indexOf(season)>=0);
if(!inSea){
  if(season==="spring")inSea=[1,5].indexOf(id)>=0;
  else if(season==="summer")inSea=[12,13,14,15,16,17,18,19,20].indexOf(id)>=0;
  else if(season==="autumn")inSea=[12,13,17,18,19,20].indexOf(id)>=0;
  else if(season==="winter")inSea=[13,21,22,23,24,25,26,27].indexOf(id)>=0;
}
return inSea;
});
if(season==="all"&&list.length===0&&PRODUCTS.length>0){list=PRODUCTS.slice();}
if(list.length===0){grid.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:40px;color:#888;">商品が見つかりません (PRODUCTS:'+PRODUCTS.length+'件, season:'+season+')</div>';return;}
var cnt=document.getElementById("shop-count");if(cnt)cnt.textContent=list.length+(L(" 品"," items"," sp"));
var html="";
list.forEach(function(p,idx){
var nm=L(p.ja||p.vi||p.en,p.en||p.ja||p.vi,p.vi||p.ja||p.en), nmsub=L(p.vi,p.vi,p.ja||p.en);
var desc=L(p.dja||p.dvi||p.den,p.den||p.dja||p.dvi,p.dvi||p.dja||p.den)||"", unit=L(p.unit,p.uniten||p.unit,p.unitvi);
var inCart=cart[p.id]||0;var _totalStock=p.stock||0;if(p.variants&&p.variants.length>0){var _vTotal=0,_vStock=0;p.variants.forEach(function(v){var ck=p.id+"_"+v;_vTotal+=(cart[ck]?cart[ck]:0);var sk="stock"+v.replace("g","");_vStock+=(p[sk]!==undefined?p[sk]:p.stock);});inCart=_vTotal;_totalStock=_vStock;}var oos=(season==="all"&&_totalStock===0);var low=(season==="all"&&_totalStock>0&&_totalStock<=5);
var _seasonBadge="";
var _rb=p.badge||"";var _tb=_rb==="NEW"?T("badgeNew"):_rb==="おすすめ"?T("badgeRec"):_rb==="旬"?T("badgeSeason"):_rb==="送料無料"?L("🚚 送料無料","🚚 Free Shipping","🚚 Miễn ship"):_rb;
var bdgTxt=oos?L("在庫なし","Out of Stock","Hết hàng"):(_seasonBadge||_tb);
var bdgCls=oos?"badge-grey":_seasonBadge?"badge-green":(_rb==="送料無料"?"badge-ship":"badge-gold");
var rv=REVIEWS[p.id]||[], avg=avgRating(p.id);
var avgTxt=rv.length?stars(avg)+'<span class="star-count">('+rv.length+')</span>':'';
var rvPreview='';
if(rv.length){
var recent=rv.slice(-2).reverse();
rvPreview='<div class="pcard-reviews">';
recent.forEach(function(r){
rvPreview+='<div class="pcard-rv-item">'
+'<span class="pcard-rv-stars">'+stars(r.rating)+'</span>'
+'<span class="pcard-rv-name">'+esc(r.name||L("匿名","Anonymous","Ẩn danh"))+'</span>'
+'<div class="pcard-rv-text">'+esc(r.text||'')+'</div>'
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
if(bdgTxt) html+='<span class="pcard-badge '+bdgCls+'">'+esc(bdgTxt)+'</span>';
html+='<div class="pcard-body">';
html+='<div class="pcard-name">'+esc(nm)+'</div>';
html+='<div class="pcard-sub">'+esc(nmsub)+'</div>';
html+=starHtml;
html+='<div class="pcard-desc">'+esc(desc)+'</div>';
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
function renderCartView(){var entries=Object.keys(cart),el=document.getElementById("cart-list-el");if(!entries.length){el.innerHTML='<div class="cart-empty"><div class="cart-empty-ico">🛒</div><div>'+L("カートは空です","Cart is empty","Giỏ hàng trống")+'</div></div>';document.getElementById("sum-qty-val").textContent="0"+L("点","items","sp");document.getElementById("sum-tot-val").textContent=vnd(0);return;}var html="";entries.forEach(function(ck){var qty=cart[ck];if(!qty)return;var meta=CART_META[ck];var pid=meta?meta.id:(ck.indexOf("_")>0?ck.split("_")[0]:ck);var p=PRODUCTS.find(function(x){return Number(x.id)===Number(pid);});if(!p)return;var price=meta?meta.price:p.price;var unit=L(p.unit,p.uniten||p.unit,p.unitvi);var nm=L(p.ja,p.en||p.ja,p.vi);var dispName=esc(nm)+(meta&&meta.variant?" "+esc(meta.variant):"");html+='<div class="cart-row"><div class="cart-emoji">'+p.e+'</div><div class="cart-info"><div class="cart-name">'+dispName+'</div><div class="cart-sub">'+vnd(price)+' / '+unit+'</div></div><div class="cart-ctrl"><button class="cqbtn" onclick="chgVariantQty(Object.keys(cart)['+entries.indexOf(ck)+'],-1)">−</button><span class="cqnum">'+qty+'</span><button class="cqbtn" onclick="chgVariantQty(Object.keys(cart)['+entries.indexOf(ck)+'],1)">＋</button></div><div class="cart-price">'+vnd(qty*price)+'</div></div>';});el.innerHTML=html;document.getElementById("sum-qty-val").textContent=cartCount()+L("点","items","sp");document.getElementById("sum-tot-val").textContent=vnd(cartTotal());}
function buildConfirm(){
var tot=0, html="";
Object.keys(cart).forEach(function(ck){var qty=cart[ck];var meta=CART_META[ck];var pid=meta?meta.id:(ck.indexOf("_")>0?ck.split("_")[0]:ck);var p=PRODUCTS.find(function(x){return Number(x.id)===Number(pid);});if(!p)return;
var price=meta?meta.price:p.price;var nm=L(p.ja,p.en||p.ja,p.vi)+(meta&&meta.variant?" "+meta.variant:""); tot+=qty*price;
html+='<div class="cc-item"><span>'+p.e+' '+nm+' × '+qty+'</span><span style="font-weight:700">'+vnd(qty*price)+'</span></div>';
});
document.getElementById("cc-items").innerHTML=html;
document.getElementById("cc-tot-val").textContent=vnd(tot);
var _hasFreeShipConf=Object.keys(cart).some(function(ck){var _m=CART_META[ck];var _pid=_m?_m.id:(ck.indexOf("_")>0?ck.split("_")[0]:ck);var _pp=PRODUCTS.find(function(x){return Number(x.id)===Number(_pid);});return _pp&&_pp.freeShip;});
var _sf=selDel==="deliver"&&!_hasFreeShipConf?_shippingFee:0,_gt=tot+_sf;
var _sr=document.getElementById("cc-ship-row");if(_sr){if(_sf>0){_sr.style.display="";var _sv=document.getElementById("cc-ship-val");if(_sv)_sv.textContent=vnd(_sf);}else _sr.style.display="none";}
var _gr=document.getElementById("cc-grand-row");if(_gr){if(_sf>0){_gr.style.display="";var _gv=document.getElementById("cc-grand-val");if(_gv)_gv.textContent=vnd(_gt);}else _gr.style.display="none";}
var n=document.getElementById("inp-name").value, ph=document.getElementById("inp-phone").value,
z=document.getElementById("inp-zalo").value, a=document.getElementById("inp-addr").value, em=document.getElementById("inp-email").value;
document.getElementById("cc-cust").innerHTML=esc(n)+"<br>"+esc(ph)+(z?" · Zalo:"+esc(z):"")+"<br>"+esc(a)+(em?"<br>📧 "+esc(em):"");
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
if(!SHOP_OPEN){alert(lang==="ja"?"現在、農場を閉めています。ご注文はお受けできません。\n再開時にまたご利用ください。":"Nông trại hiện đang đóng cửa. Vui lòng thử lại sau khi mở cửa trở lại.");return;}
var _nameEl=document.getElementById("inp-name"),_phoneEl=document.getElementById("inp-phone");
var _nameVal=(_nameEl&&_nameEl.value||"").trim(),_phoneVal=(_phoneEl&&_phoneEl.value||"").trim();
if(!_nameVal){
if(_nameEl){_nameEl.focus();_nameEl.style.borderColor="#c0392b";}
alert(lang==="ja"?"お名前を入力してください":"Vui lòng nhập họ tên / Please enter your name");return;
}
if(!_phoneVal){
if(_phoneEl){_phoneEl.focus();_phoneEl.style.borderColor="#c0392b";}
alert(lang==="ja"?"電話番号を入力してください":"Vui lòng nhập số điện thoại / Please enter your phone number");return;
}
if(_nameEl)_nameEl.style.borderColor="";if(_phoneEl)_phoneEl.style.borderColor="";
var _ts=Date.now(),_rnd=Math.floor(Math.random()*900)+100;var no="#NNY-"+(_ts.toString(36).toUpperCase().slice(-4))+_rnd;
var _freeShipInCart=Object.keys(cart).some(function(ck){var _m=CART_META[ck];var _pid=_m?_m.id:(ck.indexOf("_")>0?ck.split("_")[0]:ck);var _pp=PRODUCTS.find(function(x){return Number(x.id)===Number(_pid);});return _pp&&_pp.freeShip;});
var ts=new Date().toLocaleString("ja-JP"), tot=cartTotal()+(selDel==="deliver"&&!_freeShipInCart?_shippingFee:0);
var name=document.getElementById("inp-name").value, phone=document.getElementById("inp-phone").value,
zalo=document.getElementById("inp-zalo").value, addr=document.getElementById("inp-addr").value,
email=document.getElementById("inp-email").value, note=document.getElementById("inp-note").value;
var items=[];
Object.keys(cart).forEach(function(ck){var qty=cart[ck];if(!qty)return;var meta=CART_META[ck];var pid=meta?meta.id:(ck.indexOf("_")>0?ck.split("_")[0]:ck);var p=PRODUCTS.find(function(x){return Number(x.id)===Number(pid);});if(!p)return;var price=meta?meta.price:p.price;var variant=meta?meta.variant:"";var nm_ja=p.ja+(variant?" "+variant:""),nm_vi=p.vi+(variant?" "+variant:"");var unit=p.unit,unitvi=p.unitvi;
items.push({id:p.id,qty:qty,ja:nm_ja,vi:nm_vi,e:p.e,price:price,unit:unit,unitvi:unitvi});});
// カート内に送料無料商品があれば送料0円
var _hasFreeShip=Object.keys(cart).some(function(ck){var meta=CART_META[ck];var pid=meta?meta.id:(ck.indexOf("_")>0?ck.split("_")[0]:ck);var p=PRODUCTS.find(function(x){return Number(x.id)===Number(pid);});return p&&p.freeShip;});
var shipFeeVal=selDel==="deliver"&&!_hasFreeShip?_shippingFee:0;
var _lineNotify=document.getElementById("inp-line-notify");
var _lineUid="";try{_lineUid=localStorage.getItem("nny_line_uid")||"";}catch(e){}
console.log("[NNY] order lineUserId:",_lineUid||"(なし)","token:",LINE_CHANNEL_TOKEN?"あり":"(なし)");
pendingOrder={no:no,ts:ts,tot:tot,name:name,phone:phone,zalo:zalo,addr:addr,email:email,delivery:selDel,payment:selPay,note:note,items:items,status:"new",shippingFee:shipFeeVal,lineNotify:!!(_lineNotify&&_lineNotify.checked),lineUserId:_lineUid};
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
try{localStorage.setItem("nny_last_phone",order.phone);}catch(e){}
try{localStorage.setItem("nny_orders",JSON.stringify(ORDERS));}catch(e){}
saveProducts();
Object.keys(cart).forEach(function(id){
var p=PRODUCTS.find(function(x){return x.id==id;});
if(p&&typeof fbSaveProduct==="function")fbSaveProduct(p);
});
if(order.screenshot&&typeof uploadScreenshot==="function"){
var _ssData=order.screenshot;
order.screenshot=null;
if(typeof fbSaveOrder==="function")fbSaveOrder(order);
function _doUpload(){
uploadScreenshot(order.no,_ssData,function(data){
if(data){
order.screenshotUrl=order.no.replace(/[^a-zA-Z0-9]/g,'-');
var _i=ORDERS.findIndex(function(o){return o.no===order.no;});
if(_i>=0){ORDERS[_i].screenshotUrl=order.screenshotUrl;}
try{localStorage.setItem("nny_orders",JSON.stringify(ORDERS));}catch(e){}
if(typeof fbSaveOrder==="function")fbSaveOrder(Object.assign({},order));
}
});
}
if(fbDb&&fbAuth&&fbAuth.currentUser){_doUpload();}
else if(fbAuth){fbAuth.signInAnonymously().then(function(){_doUpload();}).catch(function(){_doUpload();});}
else{setTimeout(_doUpload,2000);}
} else {
if(typeof fbSaveOrder==="function")fbSaveOrder(Object.assign({},order,{screenshot:null}));
}
cart={};
saveCust();
renderProducts(); updateCartBtn();
buildReceipt(order);
showView("receipt");
if(!order.lineUserId){setTimeout(function(){sendEmail(order);},600);}
setTimeout(function(){sendToSheets(order);},1000);
setTimeout(function(){sendLineOrderConfirm(order);},1200);
setTimeout(function(){sendNewOrderEmailToAdmin(order);},1500);
}
function buildReceipt(o){
RECEIPT_ORDER = o;
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
function _buildHistHTML(myOrders, statusMap){
var html='<div class="hist-list">';
myOrders.forEach(function(o){
var items=o.items.map(function(i){return i.e+" "+(lang==="ja"?i.ja:i.vi)+" ×"+i.qty;}).join("　");
var st=statusMap[o.no]||o.status;
var stCls=st==="done"?"hst-done":st==="cancelled"?"hst-cancelled":"hst-new";
var stLbl=st==="done"?(lang==="ja"?"完了":"Xong"):st==="cancelled"?(lang==="ja"?"キャンセル済":"Đã hủy"):(lang==="ja"?"進行中":"Đang xử lý");
html+='<div class="hist-card">';
html+='<div class="hist-card-hdr"><span class="hist-no">'+escHtml(o.no)+'</span><span class="hist-date">'+escHtml(o.ts||"")+'</span><span class="hist-status '+stCls+'">'+stLbl+'</span></div>';
html+='<div class="hist-card-body">';
html+='<div class="hist-items">'+items+'</div>';
html+='<div class="hist-tot">'+vnd(o.tot)+'</div>';
html+='<div class="hist-actions">';
html+='<button class="hist-act-btn" onclick="showHistReceipt(\''+escHtml(o.no)+'\')">🖨 '+(lang==="ja"?"領収証":"Hóa đơn")+'</button>';
html+='<button class="hist-act-btn" onclick="openChatFromHistory(\''+escHtml(o.no)+'\')" style="color:var(--g1);border-color:var(--g1);">💬 '+(lang==="ja"?"チャット":"Chat")+'</button>';
html+='</div>';
html+='</div></div>';
});
return html+'</div>';
}
function searchHistByPhone(){
var ph=(prompt(lang==="ja"?"電話番号を入力してください":"Nhập số điện thoại của bạn")||"").trim();
if(!ph)return;
try{localStorage.setItem("nny_last_phone",ph);}catch(e){}
if(!fbEnabled||!fbDb){renderHistory();return;}
var el=document.getElementById("hist-list-el");
el.innerHTML='<div style="text-align:center;padding:20px;color:var(--muted);font-size:12px;">'+(lang==="ja"?"検索中...":"Đang tìm kiếm...")+'</div>';
fbDb.collection("orders").get().then(function(snap){
var found=[];
snap.forEach(function(doc){var d=doc.data();if(d&&d.phone===ph)found.push(d);});
found.sort(function(a,b){return (b.no||"").localeCompare(a.no||"");});
var myNos=ORDER_HISTORY.map(function(x){return x.no;});
found.forEach(function(fo){if(myNos.indexOf(fo.no)<0){ORDER_HISTORY.push(fo);}});
ORDER_HISTORY.sort(function(a,b){return (b.no||"").localeCompare(a.no||"");});
saveOrderHistory();
renderHistory();
}).catch(function(e){
el.innerHTML='<div style="text-align:center;padding:20px;color:#c0392b;font-size:12px;">❌ '+(e&&e.message||"エラー")+'</div>';
});
}
function renderHistory(){
var el=document.getElementById("hist-list-el");
var myOrders=ORDER_HISTORY.slice().reverse();
if(!myOrders.length){
el.innerHTML='<div class="hist-empty"><div class="hist-empty-ico">📋</div><div>'+T("histEmpty")+'</div>'+'<br><button onclick="searchHistByPhone()" style="margin-top:12px;padding:10px 20px;background:var(--g1);color:#fff;border:none;border-radius:8px;font-size:14px;cursor:pointer;">'+(lang==="ja"?"📞 電話番号で注文を探す":"📞 Tìm đơn hàng bằng số điện thoại")+'</button></div>';return;
}
// 先にローカルデータで描画し、Firebaseでステータスだけ非同期更新
el.innerHTML=_buildHistHTML(myOrders,{});
if(fbEnabled&&fbDb){
var nos=myOrders.map(function(o){return o.no.replace(/[^a-zA-Z0-9]/g,"-");});
var promises=nos.map(function(docId){return fbDb.collection("orders").doc(docId).get();});
Promise.all(promises).then(function(docs){
var statusMap={};
docs.forEach(function(doc){
if(doc.exists){var d=doc.data();if(d&&d.no&&d.status)statusMap[d.no]=d.status;}
});
el.innerHTML=_buildHistHTML(myOrders,statusMap);
}).catch(function(){});
}
}
function openChatFromHistory(no){
var o=ORDER_HISTORY.find(function(x){return x.no===no;});
if(!o){alert("注文が見つかりません");return;}
CHAT_PREV_VIEW="history";
startChat(no, o);
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
html+='<span style="font-size:11px;font-weight:700;">'+esc(r.name||L("匿名","Anonymous","Ẩn danh"))+'</span>';
html+='<span style="font-size:10px;color:var(--muted);">'+esc(r.date)+'</span>';
if(!r.sid||r.sid===_mySessionId){html+='<button onclick="editReviewByUser('+pid+','+realIdx+')" style="margin-left:auto;font-size:10px;padding:2px 8px;background:var(--gp);color:var(--g1);border:1px solid var(--g3);border-radius:4px;cursor:pointer;">✏️ '+L('編集','Edit','Sửa')+'</button>';}
html+='</div>';
html+='<div style="font-size:12px;line-height:1.5;color:var(--forest);">'+esc(r.text)+'</div>';
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
function pickDelPickup(el){
var msg=lang==="vi"
?"Nhận hàng trực tiếp tại Em Hanoi chỉ có vào Chủ nhật hàng tuần.\n⏰ Thời gian nhận hàng: 13:00 – 15:00\n📍 Em Hanoi, 12 P. Nguyễn Văn Ngọc, Hà Nội\n\nBạn đồng ý nhận hàng trong khung giờ trên không?"
:"毎週日曜日のEm Hanoiでの直売会での直接受取となります。\n⏰ 受取時間：13:00 – 15:00\n📍 Em Hanoi（12 P. Nguyễn Văn Ngọc, Hà Nội）\n\n上記時間内でのお受け取りに同意しますか？";
if(!confirm(msg)){return;}
pickDel(el,"pickup");
}
function updatePickupAvailability(){}
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
if(!pendingScreenshot&&!(window.pendingOrder&&window.pendingOrder.screenshot)){
alert(lang==="ja"?'送金スクリーンショットをアップロードしてから確定してください。':'Vui lòng tải ảnh xác nhận chuyển khoản trước khi xác nhận.');
return;
}
closeQR();finalizeOrder();}
function handleQRImg(ev){
var f=ev.target.files[0];if(!f)return;
var r=new FileReader();r.onload=function(e){
var data=e.target.result;
if(currentQRMethod&&(currentQRMethod==="momo"||currentQRMethod==="zalopay"||currentQRMethod==="vnpay")){
QR_IMGS[currentQRMethod]=data;saveQRImgs();
var photo=document.getElementById("qr-photo"),ph=document.getElementById("qr-ph");
if(photo){photo.src=data;photo.style.display="block";}
if(ph)ph.style.display="none";
}
// スクショをpendingOrderに保存
if(window.pendingOrder)window.pendingOrder.screenshot=data;
pendingScreenshot=data;
};r.readAsDataURL(f);
}
function closeSSModal(){
var el=document.getElementById("ss-modal-overlay");
if(el)el.style.display="none";
}
function buildEmailBody(o){
var dmap={deliver:T("delDeliver"),pickup:T("delPickup")};
var pmap={momo:"MoMo",zalopay:"ZaloPay",vnpay:"VNPay",vietqr:L("🏦 銀行振込（VietQR）","🏦 Bank Transfer (VietQR)","🏦 Chuyển khoản ngân hàng (VietQR)")};
var lines=(o.items||[]).map(function(i){var nm=lang==="ja"?i.ja:i.vi,unit=lang==="ja"?i.unit:i.unitvi;return " "+i.e+" "+nm+" × "+i.qty+" "+unit+" = "+vnd(i.qty*i.price);}).join("\n");
var shipFee=o.shippingFee||0;
var shipLine=shipFee>0?(lang==="ja"?"\n 🛵 送料（Grab）= "+vnd(shipFee):"\n 🛵 Phí giao hàng (Grab) = "+vnd(shipFee)):"";
if(lang==="ja"){
return o.name+" 様\n\nNICO NICO 便をご利用いただきありがとうございます。\nご注文を承りました。\n\n"+
"━━━━━━━━━━━━━━━━\n■ 注文番号："+o.no+"\n■ 日時："+o.ts+"\n━━━━━━━━━━━━━━━━\n\n"+
"【ご注文内容】\n"+lines+shipLine+"\n\n【合計金額】"+vnd(o.tot)+"\n【受け取り方法】"+(dmap[o.delivery]||o.delivery)+"\n【お支払い】"+(pmap[o.payment]||o.payment)+"\n【お届け先】"+o.addr+
(o.note?"\n【備考】"+o.note:"")+
"\n\n💬 農家との直接チャット\n購入後、チャットボタンより農家と直接やりとりが可能です。\n以下のURLより注文履歴を開き、チャットボタンをタップしてください。\nhttps://hanoi-order.niconicoyasai.jp/"+
"\n\n━━━━━━━━━━━━━━━━\n通常金曜日〜日曜日16:00の間にいただいたご注文はエムハノイにて、直接お受取りあるいはGrabにて、お届けいたします。\n平日（月曜日〜木曜日）のご注文分はバンホー農場よりGrabにて、お届けいたします。\n雨天等の天候の影響により、当日ご希望のお野菜が変更になる場合や、配達に時間がかかる場合がございます。あらかじめご了承ください。\nご質問はNICONICOYASAI公式LINE: https://lin.ee/R9dAJtD\n\nNICO NICO 便\n※ニコニコ野菜バンホー農場\n━━━━━━━━━━━━━━━━";
} else {
return "Kính gửi "+o.name+"\n\nCảm ơn bạn đã đặt hàng tại NICO NICO YASAI.\n\n"+
"━━━━━━━━━━━━━━━━\n■ Mã đơn: "+o.no+"\n■ Ngày: "+o.ts+"\n━━━━━━━━━━━━━━━━\n\n"+
"【Chi tiết】\n"+lines+shipLine+"\n\n【Tổng】"+vnd(o.tot)+"\n【Hình thức】"+(dmap[o.delivery]||o.delivery)+"\n【Thanh toán】"+(pmap[o.payment]||o.payment)+"\n【Địa chỉ】"+o.addr+
(o.note?"\n【Ghi chú】"+o.note:"")+
"\n\n💬 Chat trực tiếp với nông dân\nSau khi mua hàng, bạn có thể liên lạc trực tiếp với nông dân qua nút Chat.\nMở lịch sử đặt hàng tại URL sau và nhấn nút Chat:\nhttps://hanoi-order.niconicoyasai.jp/"+
"\n\n━━━━━━━━━━━━━━━━\nĐơn đặt từ thứ 7 đến 16:00 Chủ nhật sẽ được giao từ cửa hàng M-Hanoi. Ngày thường giao từ trang trại Vân Hòa.\nDo thời tiết (mưa v.v.), rau theo yêu cầu có thể bị thay đổi hoặc thời gian giao hàng có thể bị chậm hơn. Mong bạn thông cảm.\nMọi thắc mắc vui lòng liên hệ LINE: https://lin.ee/R9dAJtD\n\nNICO NICO 便\n※ Trang trại Vân Hòa\n━━━━━━━━━━━━━━━━";
}
}
function sendEmail(o){
if(!o.email)return;
var subject=(lang==="ja"?"【ご注文確認】NICO NICO 便 ":"【Xác nhận đơn hàng】NICO NICO 便 ")+o.no;
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
var _PII_TTL=30*24*60*60*1000; // 30日
function onLineNotifyCheck(cb){
var area=document.getElementById("line-auth-area");
if(!area)return;
if(cb.checked){
area.style.display="block";
var uid="";try{uid=localStorage.getItem("nny_line_uid")||"";}catch(e){}
if(uid){_updateLineAuthUI(true);}else{
_updateLineAuthUI(false);
var _isPWA=(window.navigator.standalone===true||window.matchMedia("(display-mode:standalone)").matches);
if(_isPWA){
// PWAモード: 別タブ(Safari)でliff.htmlを開きPWA画面はそのまま維持
window.open("/liff.html","_blank");
scheduleLineAuthCheck();
}else{
// 通常ブラウザ: 同タブで遷移し認証後に画面復元
}
}catch(e){}
})();
var _hi=document.getElementById("hero-img");if(_hi){_hi.style.objectPosition="center 30%";}
if(typeof normalizeReviews==="function")normalizeReviews();
_needFbProductSync=true;
applyI18n();
_applyShopStatusUI();
renderHistory();
loadSheetUrl();
updateLangBtn();
setSeason("all");
if(FB_CFG&&FB_CFG.apiKey)showProductSkeletons();
if(typeof updatePickupAvailability==="function")updatePickupAvailability();
// ?chat=注文番号 でチャット画面を直接開く（農家返信メールリンク対応）
(function(){
try{
var _p=new URLSearchParams(window.location.search);
var _cn=_p.get("chat");
if(!_cn)return;
function _openChat(order){
try{localStorage.setItem("nny_last_phone",order.phone||"");}catch(e){}
if(ORDER_HISTORY.findIndex(function(x){return x.no===order.no;})<0){
ORDER_HISTORY.unshift(order);saveOrderHistory();
}
startChat(_cn,order);
}
var _co=ORDER_HISTORY.find(function(x){return x.no===_cn;});
if(_co){setTimeout(function(){_openChat(_co);},500);return;}
// localStorageにない → Firestoreから取得
setTimeout(function(){
if(fbEnabled&&fbDb){
var _docId=_cn.replace(/[^a-zA-Z0-9]/g,"-");
fbDb.collection("orders").doc(_docId).get().then(function(doc){
if(doc.exists){_openChat(doc.data());}
else{goHistory();showView("history");}
}).catch(function(){goHistory();showView("history");});
}else{goHistory();showView("history");}
},800);
}catch(e){}
})();
if(window.__ADMIN_AUTO_OPEN){
var us=document.getElementById("user-screen");if(us)us.style.display="none";
setTimeout(function(){openAdmin();},100);
}
if(window.__OWNER_AUTO_OPEN){
var us2=document.getElementById("user-screen");if(us2)us2.style.display="none";
var os=document.getElementById("owner-screen");
if(os){os.style.display="flex";os.style.flexDirection="column";os.style.zIndex="99999";os.classList.add("on");}
setTimeout(function(){
if(typeof renderOwnerDashboard!=="function")return;
if(typeof fbEnabled!=="undefined"&&fbEnabled&&typeof fbDb!=="undefined"&&fbDb){
fbDb.collection("orders").get().then(function(snap){
var a=[];snap.forEach(function(doc){a.push(doc.data());});
if(a.length)ORDERS=a;
loadOwnerPaymentsFromFirestore(function(){renderOwnerDashboard();autoSendInvoiceIfNeeded();});
}).catch(function(){loadOwnerPaymentsFromFirestore(function(){renderOwnerDashboard();autoSendInvoiceIfNeeded();});});
}else{loadOwnerPaymentsFromFirestore(function(){renderOwnerDashboard();autoSendInvoiceIfNeeded();});}
},100);
}
}
// 初期化
if(document.readyState==="loading"){
document.addEventListener("DOMContentLoaded",initApp);
} else {
initApp();
}
// タブ/ウィンドウが再表示されたとき管理画面を強制リフレッシュ
document.addEventListener("visibilitychange",function(){
if(document.visibilityState==="visible"&&typeof fbEnabled!=="undefined"&&fbEnabled&&typeof fbDb!=="undefined"&&fbDb){
var as=document.getElementById("admin-screen");
if(as&&as.classList.contains("on")&&typeof loadFromFirebase==="function"){
loadFromFirebase(function(){if(typeof renderAdminAll==="function")renderAdminAll();});
}
}
});
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


// ─────────────────────────────────────────
// CHAT MODULE (Firestore)
// ─────────────────────────────────────────
var CHAT_ORDER_NO = null;
var CHAT_LISTENER = null;
var CHAT_CUSTOMER_NAME = "";
var CHAT_PREV_VIEW = "receipt";

function chatKey(orderNo){
  return (orderNo||"").replace(/[^a-zA-Z0-9_-]/g,'-');
}
function escHtml(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function getFarmerIconHTML(size){
  var img=document.getElementById("hero-img");
  var src=img?img.src:"";
  if(src){
    return '<div style="width:'+size+'px;height:'+size+'px;border-radius:50%;background-image:url(\''+src+'\');background-size:300% auto;background-position:15% center;flex-shrink:0;display:inline-block;vertical-align:middle;overflow:hidden;"></div>';
  }
  return '';
}

function openChat(){
  try{
    var o = RECEIPT_ORDER || ORDERS[ORDERS.length-1] || (ORDER_HISTORY && ORDER_HISTORY[ORDER_HISTORY.length-1]);
    if(!o){ alert("注文が見つかりません。"); return; }
    CHAT_PREV_VIEW="receipt";
    startChat(o.no||"unknown", o);
  }catch(err){ alert("チャットエラー: "+err.message); }
}

function startChat(orderNo, order){
  CHAT_ORDER_NO = orderNo;
  CHAT_CUSTOMER_NAME = (order&&order.name)||"";
  showView("chat");
  var info = document.getElementById("chat-order-info");
  if(info && order) info.textContent = "注文番号: " + orderNo + "  |  " + (order.name||"");
  loadChatMessages(orderNo);
}

function loadChatMessages(orderNo){
  var msgs = document.getElementById("chat-messages");
  if(!msgs) return;
  if(!fbEnabled||!fbDb){ msgs.innerHTML='<div class="chat-empty">Firebase接続が必要です</div>'; return; }
  msgs.innerHTML = '<div class="chat-empty">読み込み中...</div>';
  if(CHAT_LISTENER){ try{CHAT_LISTENER();}catch(e){} CHAT_LISTENER=null; }
  CHAT_LISTENER = fbDb.collection("chats").doc(chatKey(orderNo))
    .collection("messages").orderBy("ts")
    .onSnapshot(function(snap){
      var all=[]; snap.forEach(function(d){all.push(d.data());}); renderChatMessages(all, msgs);
    }, function(){ msgs.innerHTML='<div class="chat-empty">まだメッセージはありません</div>'; });
}

function renderChatMessages(all, el){
  if(!el) el = document.getElementById("chat-messages");
  if(!el) return;
  if(!all||!all.length){ el.innerHTML='<div class="chat-empty">まだメッセージはありません</div>'; return; }
  el.innerHTML = all.map(function(m){
    var isMe=m.role==="customer";
    var sender=isMe?"":getFarmerIconHTML(20)+'<span style="vertical-align:middle;margin-left:4px;">Bach Manh Ha</span>';
    var trl=m.translation?'<div class="chat-translation">→ '+escHtml(m.translation)+'</div>':'';
    var t=m.ts?new Date(m.ts).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}):'';
    return '<div class="chat-msg '+(isMe?"me":"them")+'">'
      +(sender?'<div class="chat-sender">'+sender+'</div>':'')
      +'<div class="chat-bubble">'+escHtml(m.text)+'</div>'+trl
      +'<div class="chat-time">'+t+'</div></div>';
  }).join('');
  el.scrollTop=el.scrollHeight;
}

var ADMIN_CHAT_CUST_LANG='ja';
var ADMIN_BODY_SAVED_HTML="";
var ADMIN_SAVED_SCROLL=0;
function detectMsgLang(text){
  if(/[぀-ヿ一-鿿㐀-䶿]/.test(text)) return 'ja';
  if(/^[\x00-\x7F\s]+$/.test(text.trim())) return 'en';
  return 'vi';
}
function sendChatMessage(){
  var inp=document.getElementById("chat-input"); if(!inp)return;
  var text=inp.value.trim(); if(!text||!CHAT_ORDER_NO)return;
  if(!fbEnabled||!fbDb){alert("Firebase接続が必要です");return;}
  inp.value=""; inp.disabled=true;
  var srcLang=detectMsgLang(text);
  var tgtLang=srcLang==='en'?'vi':(srcLang==='ja'?'vi':'ja');
  var _doSend=function(translated){
    var msg={role:"customer",text:text,translation:translated||"",lang:srcLang,ts:Date.now(),customerName:CHAT_CUSTOMER_NAME||""};
    var key=chatKey(CHAT_ORDER_NO);
    fbDb.collection("chats").doc(key).collection("messages").add(msg).then(function(){
      fbDb.collection("chats").doc(key).set({orderNo:CHAT_ORDER_NO,lastMsg:text,lastTs:Date.now(),unread:true},{merge:true});
      // 農家にメール通知
      var _farmTargets=["bachhasonmochi@gmail.com"];
      if(EJ.admin&&EJ.admin!=="bachhasonmochi@gmail.com")_farmTargets.push(EJ.admin);
      if(EJ.service&&EJ.template&&EJ.pubkey&&typeof emailjs!=="undefined"){
        var _chatLink="https://hanoi-order.niconicoyasai.jp/admin/?chat="+encodeURIComponent(CHAT_ORDER_NO);
        var _custName=CHAT_CUSTOMER_NAME||CHAT_ORDER_NO;
        var _body="お客様("+_custName+")からチャットメッセージが届きました。\n\n注文番号: "+CHAT_ORDER_NO+"\nメッセージ: "+text+"\n\n以下のリンクから直接チャット画面を開けます:\n"+_chatLink;
        _farmTargets.forEach(function(toEmail){
          emailjs.send(EJ.service,EJ.template,{to_email:toEmail,to_name:"農家",from_name:"NICO NICO YASAI",reply_to:EJ.from||"",subject:"💬 チャットメッセージ - "+CHAT_ORDER_NO,message:_body}).catch(function(){});
        });
      }
    }).catch(function(e){console.error("[NNY] chat send:",e);});
    inp.disabled=false;
  };
  try{
    translateText(text,tgtLang,srcLang,function(translated){
      _doSend(translated===text?"":translated);
    });
    setTimeout(function(){if(inp.disabled){_doSend("");}},5000);
  }catch(e){_doSend("");}
}

document.addEventListener("keydown",function(e){
  if(e.key==="Enter"&&!e.shiftKey){
    var inp=document.getElementById("chat-input");
    if(inp&&document.activeElement===inp){e.preventDefault();sendChatMessage();}
  }
});

function restoreAdminBody(){
  var adminScreen=document.getElementById("admin-screen");
  if(!adminScreen||!ADMIN_BODY_SAVED_HTML)return;
  adminScreen.innerHTML=ADMIN_BODY_SAVED_HTML;
  ADMIN_BODY_SAVED_HTML="";
  var sp=ADMIN_SAVED_SCROLL||0;
  adminScreen.scrollTop=sp;
  requestAnimationFrame(function(){adminScreen.scrollTop=sp;});
}
function adminChatFromOrder(orderNo){
  var adminScreen=document.getElementById("admin-screen");
  if(!adminScreen)return;
  if(!ADMIN_BODY_SAVED_HTML)ADMIN_BODY_SAVED_HTML=adminScreen.innerHTML;
  ADMIN_SAVED_SCROLL=adminScreen.scrollTop;
  adminScreen.scrollTop=0;
  adminScreen.innerHTML=''
    +'<div style="background:#1a6b2a;padding:0 16px;height:56px;display:flex;align-items:center;gap:12px;">'
    +'<button type="button" onclick="restoreAdminBody()" style="background:#fff;border:none;color:#1a6b2a;border-radius:8px;padding:10px 20px;font-size:14px;font-weight:800;cursor:pointer;font-family:inherit;">← 戻る</button>'
    +'<span style="font-family:\'Shippori Mincho B1\',serif;font-size:16px;font-weight:800;color:#fff;">💬 '+escHtml(orderNo)+'</span>'
    +'</div>'
    +'<div style="padding:16px;max-width:640px;margin:0 auto;display:flex;flex-direction:column;gap:12px;min-height:calc(100vh - 56px);">'
    +'<div id="adm-inline-msgs" style="background:#fff;border:1px solid #c4dcc8;border-radius:12px;padding:16px;display:flex;flex-direction:column;gap:10px;min-height:200px;"><div style="color:#aaa;text-align:center;padding:20px;font-size:13px;">読み込み中...</div></div>'
    +'<div style="background:#fff;border:1px solid #c4dcc8;border-radius:12px;padding:12px;display:flex;gap:10px;align-items:flex-end;">'
    +'<textarea id="adm-inline-inp" rows="2" placeholder="日本語 / Tiếng Việt / English..." style="flex:1;border:1.5px solid #c4dcc8;border-radius:8px;padding:10px;font-size:16px;font-family:inherit;resize:none;outline:none;max-height:72px;overflow-y:auto;"></textarea>'
    +'<button type="button" onclick="adminSendChatInline(\''+escHtml(orderNo)+'\')" style="background:#1a6b2a;color:#fff;border:none;border-radius:8px;padding:10px 18px;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap;font-family:inherit;">送信</button>'
    +'</div>'
    +'<div id="adm-chat-hint" style="font-size:10px;color:#888;text-align:center;">自動翻訳対応</div>'
    +'</div>';
  adminScreen.scrollTop=0;
  requestAnimationFrame(function(){adminScreen.scrollTop=0;});
  var msgsEl=document.getElementById("adm-inline-msgs");
  if(!fbEnabled||!fbDb){
    msgsEl.innerHTML='<div style="color:#aaa;text-align:center;padding:20px;font-size:13px;">Firebase未接続</div>';
    return;
  }
  fbDb.collection("chats").doc(chatKey(orderNo)).set({unread:false},{merge:true}).catch(function(){});
  fbDb.collection("chats").doc(chatKey(orderNo)).collection("messages").orderBy("ts").get()
    .then(function(snap){
      if(!msgsEl)return;
      if(snap.empty){msgsEl.innerHTML='<div style="color:#aaa;text-align:center;padding:20px;font-size:13px;">まだメッセージはありません</div>';return;}
      var custMsg=snap.docs.map(function(d){return d.data();}).find(function(m){return m.role==='customer';});
      if(custMsg&&custMsg.lang){ADMIN_CHAT_CUST_LANG=custMsg.lang;}
      var hint=document.getElementById('adm-chat-hint');
      if(hint)hint.textContent=ADMIN_CHAT_CUST_LANG==='en'?'English↔Vietnamese自動翻訳':'日本語↔ベトナム語 自動翻訳';
      msgsEl.innerHTML=snap.docs.map(function(d){
        var m=d.data();var isF=m.role==="farmer";
        var trlParts=[];
        if(m.translation)trlParts.push(escHtml(m.translation));
        if(m.translationJa)trlParts.push('🇯🇵 '+escHtml(m.translationJa));
        if(m.translationEn)trlParts.push('🇬🇧 '+escHtml(m.translationEn));
        var trl=trlParts.length?'<div style="font-size:11px;color:#888;font-style:italic;margin-top:3px;">'+trlParts.join('<br>')+'</div>':'';
        return '<div style="display:flex;flex-direction:column;align-self:'+(isF?"flex-end":"flex-start")+';max-width:82%;gap:2px;">'
          +(isF?'<div style="font-size:10px;color:#888;display:flex;align-items:center;gap:4px;">'+getFarmerIconHTML(18)+'Bach Manh Ha</div>':'')
          +'<div style="background:'+(isF?"#1a6b2a":"#f2f2f2")+';color:'+(isF?"#fff":"#222")+';padding:10px 14px;border-radius:12px;font-size:13px;line-height:1.5;">'+escHtml(m.text)+'</div>'
          +trl+'</div>';
      }).join('');
      msgsEl.scrollTop=msgsEl.scrollHeight;
    }).catch(function(e){if(msgsEl)msgsEl.innerHTML='<div style="color:red;font-size:12px;padding:12px;">エラー: '+escHtml(String(e))+'</div>';});
}
function adminSendChatInline(orderNo){
  var inp=document.getElementById("adm-inline-inp");if(!inp)return;
  var text=inp.value.trim();if(!text)return;
  if(!fbEnabled||!fbDb){alert("Firebase未接続");return;}
  inp.disabled=true;inp.value="";
  var srcLang=detectMsgLang(text);
  var custOrder=ORDERS.find(function(x){return x.no===orderNo;});
  function _notifyCust(msgText){
    if(!custOrder)return;
    var custName=custOrder.name||"";
    var chatLink="https://hanoi-order.niconicoyasai.jp/?chat="+encodeURIComponent(orderNo);
    // LINEがある場合はLINEのみ通知
    if(custOrder.lineUserId){
      var lineMsg="農家より連絡が届きました🌿\n\n「"+msgText+"」\n\n以下のリンクから直接チャットを開けます:\n"+chatLink;
      _sendLineMsg(custOrder.lineUserId,lineMsg);
      return;
    }
    // LINEなし → メールで通知
    if(!custOrder.email||!EJ.service||!EJ.template||!EJ.pubkey)return;
    try{emailjs.init({publicKey:EJ.pubkey});}catch(e){}
    var subj="NICO NICO便ハノイ - 農家より連絡があります / Nông dân có tin nhắn cho bạn";
    var bodyJa=custName+" 様\n\n農家 Bach Manh Ha より連絡が届きました。\n\n注文番号: "+orderNo+"\n\n以下のリンクから直接チャット画面を開けます:\n"+chatLink+"\n\nNICO NICO YASAI";
    var bodyVi=custName+" ơi,\n\nNông dân Bach Manh Ha có tin nhắn cho bạn về đơn hàng "+orderNo+".\n\nNhấn vào link dưới đây để mở chat trực tiếp:\n"+chatLink+"\n\nNICO NICO YASAI";
    emailjs.send(EJ.service,EJ.template,{to_email:custOrder.email,to_name:custName,from_name:"NICO NICO YASAI",reply_to:"bachhasonmochi@gmail.com",subject:subj,message:bodyJa+"\n\n---\n\n"+bodyVi,order_no:orderNo}).catch(function(){});
  }
  function _save(msg){
    fbDb.collection("chats").doc(chatKey(orderNo)).collection("messages").add(msg)
      .then(function(){
        fbDb.collection("chats").doc(chatKey(orderNo)).set({lastMsg:msg.text,lastTs:Date.now(),unread:false},{merge:true});
        _notifyCust(msg.translation||msg.text);
        inp.disabled=false;
        adminChatFromOrder(orderNo);
      }).catch(function(e){inp.disabled=false;alert("送信失敗: "+e.message);});
  }
  var custLang=ADMIN_CHAT_CUST_LANG||'ja';
  translateText(text,custLang,srcLang,function(tr){_save({role:"farmer",text:text,translation:(tr===text?"":tr),lang:srcLang,ts:Date.now()});});
}

function renderAdminChat(){
  var el=document.getElementById("admin-chat-content"); if(!el)return;
  if(!fbEnabled||!fbDb){el.innerHTML='<p style="color:var(--muted);font-size:13px;">Firebase接続が必要です</p>';return;}
  el.innerHTML='<p style="color:var(--muted);font-size:13px;">読み込み中...</p>';
  fbDb.collection("chats").get().then(function(snap){
    if(snap.empty){el.innerHTML='<p style="color:var(--muted);font-size:13px;">チャットはまだありません</p>';return;}
    var items=snap.docs.map(function(d){return Object.assign({id:d.id},d.data());});
    items.sort(function(a,b){return (b.lastTs||0)-(a.lastTs||0);});
    el.innerHTML='<div class="admin-chat-list">'+items.map(function(m){
      var ts=m.lastTs?new Date(m.lastTs).toLocaleDateString():"";
      return '<div class="admin-chat-item'+(m.unread?" unread":"")+'" onclick="adminOpenChat(\''+escHtml(m.orderNo||m.id)+'\')">'
        +'<div class="admin-chat-item-no">'+escHtml(m.orderNo||m.id)+(m.unread?' 🔴':'')+'</div>'
        +'<div class="admin-chat-item-preview">'+escHtml((m.lastMsg||"").slice(0,40))+'</div>'
        +'<div style="font-size:10px;color:var(--muted)">'+ts+'</div></div>';
    }).join('')+'</div>';
  }).catch(function(e){el.innerHTML='<p style="color:red;font-size:12px;">エラー: '+escHtml(String(e))+'</p>';});
}

function adminOpenChat(orderNo){
  var el=document.getElementById("admin-chat-content"); if(!el)return;
  el.innerHTML='<button class="admin-chat-back" onclick="renderAdminChat()">← 一覧</button>'
    +'<div style="font-weight:700;font-size:13px;margin:8px 0;">'+escHtml(orderNo)+'</div>'
    +'<div id="admin-chat-msgs" style="display:flex;flex-direction:column;gap:8px;max-height:300px;overflow-y:auto;background:var(--gs);border-radius:var(--r);padding:12px;margin-bottom:10px;"></div>'
    +'<div style="display:flex;gap:8px;">'
    +'<textarea id="admin-chat-input" rows="2" style="flex:1;border:1.5px solid var(--border);border-radius:var(--r);padding:8px;font-size:13px;font-family:inherit;resize:none;" placeholder="ベトナム語で返信..."></textarea>'
    +'<button onclick="adminSendChat(\''+escHtml(orderNo)+'\')" style="background:var(--g1);color:#fff;border:none;border-radius:var(--r);padding:10px 16px;font-size:13px;font-weight:700;cursor:pointer;">送信</button>'
    +'</div>'
    +'<div style="font-size:11px;color:var(--muted);margin-top:6px;">ベトナム語で書くと日本語に自動翻訳されます</div>';
  fbDb.collection("chats").doc(chatKey(orderNo)).set({unread:false},{merge:true});
  var el2=document.getElementById("admin-chat-msgs");
  fbDb.collection("chats").doc(chatKey(orderNo)).collection("messages").orderBy("ts").get()
    .then(function(snap){
      if(!el2)return;
      if(snap.empty){el2.innerHTML='<div style="color:var(--muted);font-size:12px;text-align:center;padding:20px;">メッセージなし</div>';return;}
      el2.innerHTML=snap.docs.map(function(d){
        var m=d.data(); var isMe=m.role==="farmer";
        var trl=m.translation?'<div style="font-size:11px;color:var(--muted);font-style:italic;">→ '+escHtml(m.translation)+'</div>':'';
        return '<div style="display:flex;flex-direction:column;align-self:'+(isMe?"flex-end":"flex-start")+';max-width:80%;gap:2px;">'
          +'<div style="font-size:10px;color:var(--muted);">'+(isMe?"農家 🌱":"顧客")+'</div>'
          +'<div style="background:'+(isMe?"var(--g1)":"var(--wh)")+';color:'+(isMe?"#fff":"var(--ink)")+';border:'+(isMe?"none":"1px solid var(--border)")+';padding:8px 12px;border-radius:12px;font-size:13px;">'+escHtml(m.text)+'</div>'
          +trl+'</div>';
      }).join('');
      el2.scrollTop=el2.scrollHeight;
    }).catch(function(){if(el2)el2.innerHTML='<div style="color:var(--muted);font-size:12px;text-align:center;padding:20px;">メッセージなし</div>';});
}

function adminSendChat(orderNo){
  var inp=document.getElementById("admin-chat-input"); if(!inp)return;
  var text=inp.value.trim(); if(!text)return;
  inp.value=""; inp.disabled=true;
  translateText(text,"ja","vi",function(translated){
    var msg={role:"farmer",text:text,translation:translated,ts:Date.now()};
    fbDb.collection("chats").doc(chatKey(orderNo)).collection("messages").add(msg).then(function(){
      fbDb.collection("chats").doc(chatKey(orderNo)).set({lastMsg:text,lastTs:Date.now(),unread:false},{merge:true});
      inp.disabled=false; adminOpenChat(orderNo);
      // 顧客通知（LINE優先、なければメール）
      var _co=ORDERS.find(function(x){return x.no===orderNo;});
      if(_co){
        var chatLink="https://hanoi-order.niconicoyasai.jp/?chat="+encodeURIComponent(orderNo);
        var _notifText=translated||text;
        if(_co.lineUserId){
          _sendLineMsg(_co.lineUserId,"農家より連絡が届きました🌿\n\n「"+_notifText+"」\n\n以下のリンクから直接チャットを開けます:\n"+chatLink);
        }else if(_co.email&&EJ.service&&EJ.template&&EJ.pubkey&&typeof emailjs!=="undefined"){
          var subj2="NICO NICO便ハノイ - 農家より連絡があります / Nông dân có tin nhắn cho bạn";
          var bodyJa2=(_co.name||"")+" 様\n\n農家 Bach Manh Ha より連絡が届きました。\n\n注文番号: "+orderNo+"\n\n以下のリンクから直接チャット画面を開けます:\n"+chatLink+"\n\nNICO NICO YASAI";
          var bodyVi2=(_co.name||"")+" ơi,\n\nNông dân Bach Manh Ha có tin nhắn cho bạn về đơn hàng "+orderNo+".\n\nNhấn vào link dưới đây để mở chat trực tiếp:\n"+chatLink+"\n\nNICO NICO YASAI";
          emailjs.send(EJ.service,EJ.template,{to_email:_co.email,to_name:_co.name||"",from_name:"NICO NICO YASAI",reply_to:"bachhasonmochi@gmail.com",subject:subj2,message:bodyJa2+"\n\n---\n\n"+bodyVi2}).catch(function(){});
        }
      }
    }).catch(function(e){console.error(e);inp.disabled=false;});
  });
}
