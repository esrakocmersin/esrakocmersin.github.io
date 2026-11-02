'use strict';

/* ==========================================================================
   2025-2026 MEB 4. SINIF DERSLER & VİDEO MÜFREDATI VERİ MODÜLÜ
   43 Ünite · 173 Sesli Anlatım Adımı · 430 Çözümlü Test Sorusu
   ========================================================================== */

const COURSE_LESSONS = {
  "tr-u1": {
    "id": "tr-u1",
    "subject": "Türkçe",
    "unitNo": "1. Ünite",
    "title": "Harf-Hece ve Sözcükte Anlam",
    "icon": "🇹🇷",
    "steps": [
      {
        "title": "Alfabemiz ve 29 Harf Dünyası",
        "badge": "1. Adım: Harfler",
        "slide": "assets/images/harfler_tablosu.svg",
        "narration": "Merhaba sevgili dördüncü sınıf kâşifim! Ben Bilge Baykuş. Bugün Türkçe dersimizin ilk ve en önemli konusu olan harfleri, heceleri, gerçek, mecaz ve terim anlamı adım adım keşfedeceğiz. Hazır mısın? Güzel dilimiz Türkçenin alfabesinde tam yirmi dokuz harf vardır. Bu harflerin sekiz tanesi ünlü, yani sesli harftir; yirmi bir tanesi ise ünsüz, yani sessiz harftir. Ünlü harflerimiz ikiye ayrılır: Kalın ünlüler A, I, O, U ve ince ünlüler E, İ, Ö, Ü. Kalın ünlüler gırtlaktan tok çıkar, ince ünlüler ise ağzın önünden zarifçe söylenir. Unutma; Türkçede her hecede mutlaka bir ünlü harf bulunur!",
        "audio": "assets/audio/courses/tr-u1_s1.mp3"
      },
      {
        "title": "Hece Treni ve Satır Sonu Kuralları",
        "badge": "2. Adım: Heceler",
        "slide": "assets/images/hece_treni.svg",
        "narration": "Şimdi hece trenimize binelim! Hece, ağzımızın tek bir hareketiyle çıkan sestir. Bir sözcükte kaç hece olduğunu bulmanın en sihirli yolu nedir biliyor musun? O sözcükteki ünlü harfleri saymak! Örneğin Cumhuriyet kelimesinde u, u, i ve e olmak üzere dört ünlü harf vardır; yani bu sözcük tam dört hecelidir! Peki satır sonuna sığmayan sözcükleri nasıl böleriz? Dikkat: Satır sonunda veya satır başında asla tek bir harf yalnız bırakılamaz! Araba sözcüğünü a tire raba diye bölemezsin; mutlaka ara tire ba şeklinde bölmelisin. Ayrıca özel isimlerde kesme işareti satır sonuna denk gelirse sadece kesme işareti konur, kısa çizgi konmaz!",
        "audio": "assets/audio/courses/tr-u1_s2.mp3"
      },
      {
        "title": "Sözcükte Gerçek (Temel) Anlam",
        "badge": "3. Adım: Gerçek Anlam",
        "slide": "assets/images/gercek_mecaz_terim.svg",
        "narration": "Geldik sözcüklerin anlam dünyasına! İlk durağımız Gerçek Anlam, yani Temel Anlam. Bir sözcüğü duyduğumuzda veya okuduğumuzda aklımıza gelen ilk, asıl ve sözlükteki anlamıdır. Herkes için aynı somut durumu ifade eder. Örneğin: Sıcak havada dondurma eridi dediğimizde erimek sözcüğü maddenin ısıyla sıvılaşmasıdır, yani gerçek anlamdır! Hava bugün çok sıcak dediğimizde havanın ısısını anlatır, yine gerçek anlamdır. Taş çok ağırdı dediğimizde tartılabilen fiziksel kütledir, tamamen gerçek anlamdır!",
        "audio": "assets/audio/courses/tr-u1_s3.mp3"
      },
      {
        "title": "Mecaz Anlam: Hayal Gücünün Kanatları",
        "badge": "4. Adım: Mecaz Anlam",
        "slide": "assets/images/gercek_mecaz_terim.svg",
        "narration": "Peki ya mecaz anlam nedir? Sözcüğün gerçek anlamından tamamen uzaklaşarak kazandığı yeni ve soyut anlama mecaz anlam denir. Burada sözcükler hayal gücümüzle yepyeni duygular anlatır! Örneğin: Arkadaşının sözlerine kalbi kırıldı cümlesini düşünelim. Bir kalp bardak gibi çıt diye kırılıp parçalanabilir mi? Hayır! Burada kırılmak, gücenmek ve üzülmek anlamındadır; yani mecazdır! Ya da: Bize çok soğuk davrandı dediğimizde hava ısısından değil, ilgisiz ve mesafeli davranmaktan bahsederiz. Bu da mecaz anlamdır!",
        "audio": "assets/audio/courses/tr-u1_s4.mp3"
      },
      {
        "title": "Terim Anlam ve Ünite Özeti",
        "badge": "5. Adım: Terim Anlam",
        "slide": "assets/images/gercek_mecaz_terim.svg",
        "narration": "Ve son durağımız: Terim Anlam! Bilim, sanat, spor veya bir meslek alanına ait özel kavramları anlatan sözcüklere terim denir. Matematikte üçgen, açı, kesir; sporda penaltı, korner, smaç; tiyatroda perde ve sahne; müzikte ise nota ve sol anahtarı birer terimdir! Eğer bir doktor 'Gözüne miyop teşhisi koydum' derse miyop tıbbi bir terimdir. Ama 'Öğretmenin gözüne girdi' dersek bu mecaz anlamdır. İşte bu kadar kolay! Harika dinledin, konuyu mükemmel kavradın. Şimdi öğrendiklerini pekiştirmek için on soruluk büyük ünite testine geçiyoruz. Bakalım kaçta kaç yapacaksın, haydi başla!",
        "audio": "assets/audio/courses/tr-u1_s5.mp3"
      }
    ],
    "quiz": [
      {
        "q": "Türk alfabesinde toplam 29 harf bulunmaktadır. Bu harflerden kaç tanesi ünlü (sesli), kaç tanesi ünsüz (sessiz) harftir?",
        "options": [
          "6 ünlü, 23 ünsüz",
          "8 ünlü, 21 ünsüz",
          "10 ünlü, 19 ünsüz",
          "8 ünlü, 22 ünsüz"
        ],
        "answer": 1,
        "explanation": "Alfabemizde 8 tane ünlü (a, e, ı, i, o, ö, u, ü) ve 21 tane ünsüz harf olmak üzere toplam 29 harf vardır."
      },
      {
        "q": "Aşağıdaki sözcüklerin hangisinde bulunan tüm ünlü harfler KALIN ÜNLÜDÜR?",
        "options": [
          "Kelebek",
          "Kitaplık",
          "Okulda",
          "Çiçekler"
        ],
        "answer": 2,
        "explanation": "Kalın ünlüler 'a, ı, o, u' harfleridir. 'Okulda' kelimesindeki 'o', 'u' ve 'a' harflerinin hepsi kalın ünlüdür."
      },
      {
        "q": "\"Kütüphanecilik\" sözcüğü hecelerine ayrıldığında toplam kaç heceden oluşur?",
        "options": [
          "4 hece",
          "5 hece",
          "6 hece",
          "7 hece"
        ],
        "answer": 2,
        "explanation": "Bir kelimedeki hece sayısı ünlü harf sayısına eşittir. Kü-tüp-ha-ne-ci-lik kelimesinde 6 ünlü harf (ü, ü, a, e, i, i) olduğu için tam 6 hecelidir."
      },
      {
        "q": "Aşağıdaki kelimelerden hangisi satır sonuna sığmadığında YANLIŞ bölünmüştür?",
        "options": [
          "ba- / balık",
          "a- / raba",
          "hanıme- / li",
          "kır- / mızı"
        ],
        "answer": 1,
        "explanation": "Satır sonunda veya başında tek bir harf bırakılamaz! 'a- / raba' bölünüşü kurala aykırıdır; doğrusu 'ara- / ba' olmalıdır."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde \"sıcak\" sözcüğü GERÇEK (TEMEL) ANLAMIYLA kullanılmıştır?",
        "options": [
          "Bizi kapıda çok sıcak karşıladılar.",
          "Yeni arkadaşına hiç sıcak davranmadı.",
          "Yaz aylarında öğle saatlerinde hava çok sıcak olur.",
          "Sıcak bir tebessümle herkesin gönlünü kazandı."
        ],
        "answer": 2,
        "explanation": "\"Hava çok sıcak olur\" cümlesinde sıcak, havanın ısısını yani sözlükteki ilk, gerçek anlamını ifade eder."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde \"kırılmak\" sözcüğü MECAZ ANLAMDA kullanılmıştır?",
        "options": [
          "Rüzgâr sert esince ağacın dalı kırıldı.",
          "Mutfakta düşen porselen tabak kırıldı.",
          "Arkadaşının kaba ve kırıcı sözlerine çok kırıldı.",
          "Futbol oynarken kol saatimin camı kırıldı."
        ],
        "answer": 2,
        "explanation": "Arkadaşının sözlerine kırılmak, fiziksel parçalanma değil, 'gücenmek, incinmek ve üzülmek' anlamında mecaz olarak kullanılmıştır."
      },
      {
        "q": "\"Ablam bebekle konuşurken çok TATLI bir ses tonu kullandı.\" cümlesinde geçen \"tatlı\" sözcüğünün kazandığı anlam aşağıdakilerden hangisidir?",
        "options": [
          "Şekerli ve lezzetli tat",
          "Sevimli, hoş ve cana yakın",
          "Acı olmayan yiyecek",
          "Ağır ve pahalı kumaş"
        ],
        "answer": 1,
        "explanation": "Buradaki tatlı sözcüğü şeker tadından tamamen uzaklaşarak 'hoş, sevimli, dinlemesi güzel' anlamında mecaz anlamda kullanılmıştır."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde TERİM ANLAMLI bir sözcük kullanılmıştır?",
        "options": [
          "Sabah erkenden kalkıp sahilde yürüyüş yaptık.",
          "Hakem maçın son dakikasında penaltı noktasını gösterdi.",
          "Annemin fırında pişirdiği kek çok güzel kokuyordu.",
          "Bahçedeki rengârenk gülleri ve papatyaları suladık."
        ],
        "answer": 1,
        "explanation": "'Penaltı', futbol sporuna ait özel bir kuralı ifade eden bir spor terimidir."
      },
      {
        "q": "\"Öğretmenimiz tahtaya bir ÜÇGEN çizdi ve iç AÇILARINI iletkiyle ölçtü.\" cümlesindeki altı çizili sözcükler hangi ders veya alanın terimleridir?",
        "options": [
          "Müzik",
          "Türkçe",
          "Matematik (Geometri)",
          "Sosyal Bilgiler"
        ],
        "answer": 2,
        "explanation": "'Üçgen' ve 'açı', matematik dersinin geometri dalına ait temel bilimsel terimlerdir."
      },
      {
        "q": "1. \"Bu karanlık sokakta lambalar yanmıyordu.\"\n2. \"Olayın arkasında karanlık işler dönüyordu.\"\n3. \"Tiyatro oyununun ikinci perdesi alkışlarla başladı.\"\nYukarıdaki numaralanmış cümlelerde altı çizili sözcüklerin anlam özellikleri sırasıyla hangi seçenekte doğru verilmiştir?",
        "options": [
          "1: Gerçek Anlam, 2: Mecaz Anlam, 3: Terim Anlam",
          "1: Mecaz Anlam, 2: Gerçek Anlam, 3: Terim Anlam",
          "1: Terim Anlam, 2: Mecaz Anlam, 3: Gerçek Anlam",
          "1: Gerçek Anlam, 2: Terim Anlam, 3: Mecaz Anlam"
        ],
        "answer": 0,
        "explanation": "1. cümlede karanlık = ışıksız (Gerçek), 2. cümlede karanlık = şüpheli/gizli (Mecaz), 3. cümlede perde = tiyatro bölümü (Terim) anlamındadır."
      }
    ],
    "questions": [
      {
        "q": "Türk alfabesinde toplam 29 harf bulunmaktadır. Bu harflerden kaç tanesi ünlü (sesli), kaç tanesi ünsüz (sessiz) harftir?",
        "options": [
          "6 ünlü, 23 ünsüz",
          "8 ünlü, 21 ünsüz",
          "10 ünlü, 19 ünsüz",
          "8 ünlü, 22 ünsüz"
        ],
        "answer": 1,
        "explanation": "Alfabemizde 8 tane ünlü (a, e, ı, i, o, ö, u, ü) ve 21 tane ünsüz harf olmak üzere toplam 29 harf vardır."
      },
      {
        "q": "Aşağıdaki sözcüklerin hangisinde bulunan tüm ünlü harfler KALIN ÜNLÜDÜR?",
        "options": [
          "Kelebek",
          "Kitaplık",
          "Okulda",
          "Çiçekler"
        ],
        "answer": 2,
        "explanation": "Kalın ünlüler 'a, ı, o, u' harfleridir. 'Okulda' kelimesindeki 'o', 'u' ve 'a' harflerinin hepsi kalın ünlüdür."
      },
      {
        "q": "\"Kütüphanecilik\" sözcüğü hecelerine ayrıldığında toplam kaç heceden oluşur?",
        "options": [
          "4 hece",
          "5 hece",
          "6 hece",
          "7 hece"
        ],
        "answer": 2,
        "explanation": "Bir kelimedeki hece sayısı ünlü harf sayısına eşittir. Kü-tüp-ha-ne-ci-lik kelimesinde 6 ünlü harf (ü, ü, a, e, i, i) olduğu için tam 6 hecelidir."
      },
      {
        "q": "Aşağıdaki kelimelerden hangisi satır sonuna sığmadığında YANLIŞ bölünmüştür?",
        "options": [
          "ba- / balık",
          "a- / raba",
          "hanıme- / li",
          "kır- / mızı"
        ],
        "answer": 1,
        "explanation": "Satır sonunda veya başında tek bir harf bırakılamaz! 'a- / raba' bölünüşü kurala aykırıdır; doğrusu 'ara- / ba' olmalıdır."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde \"sıcak\" sözcüğü GERÇEK (TEMEL) ANLAMIYLA kullanılmıştır?",
        "options": [
          "Bizi kapıda çok sıcak karşıladılar.",
          "Yeni arkadaşına hiç sıcak davranmadı.",
          "Yaz aylarında öğle saatlerinde hava çok sıcak olur.",
          "Sıcak bir tebessümle herkesin gönlünü kazandı."
        ],
        "answer": 2,
        "explanation": "\"Hava çok sıcak olur\" cümlesinde sıcak, havanın ısısını yani sözlükteki ilk, gerçek anlamını ifade eder."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde \"kırılmak\" sözcüğü MECAZ ANLAMDA kullanılmıştır?",
        "options": [
          "Rüzgâr sert esince ağacın dalı kırıldı.",
          "Mutfakta düşen porselen tabak kırıldı.",
          "Arkadaşının kaba ve kırıcı sözlerine çok kırıldı.",
          "Futbol oynarken kol saatimin camı kırıldı."
        ],
        "answer": 2,
        "explanation": "Arkadaşının sözlerine kırılmak, fiziksel parçalanma değil, 'gücenmek, incinmek ve üzülmek' anlamında mecaz olarak kullanılmıştır."
      },
      {
        "q": "\"Ablam bebekle konuşurken çok TATLI bir ses tonu kullandı.\" cümlesinde geçen \"tatlı\" sözcüğünün kazandığı anlam aşağıdakilerden hangisidir?",
        "options": [
          "Şekerli ve lezzetli tat",
          "Sevimli, hoş ve cana yakın",
          "Acı olmayan yiyecek",
          "Ağır ve pahalı kumaş"
        ],
        "answer": 1,
        "explanation": "Buradaki tatlı sözcüğü şeker tadından tamamen uzaklaşarak 'hoş, sevimli, dinlemesi güzel' anlamında mecaz anlamda kullanılmıştır."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde TERİM ANLAMLI bir sözcük kullanılmıştır?",
        "options": [
          "Sabah erkenden kalkıp sahilde yürüyüş yaptık.",
          "Hakem maçın son dakikasında penaltı noktasını gösterdi.",
          "Annemin fırında pişirdiği kek çok güzel kokuyordu.",
          "Bahçedeki rengârenk gülleri ve papatyaları suladık."
        ],
        "answer": 1,
        "explanation": "'Penaltı', futbol sporuna ait özel bir kuralı ifade eden bir spor terimidir."
      },
      {
        "q": "\"Öğretmenimiz tahtaya bir ÜÇGEN çizdi ve iç AÇILARINI iletkiyle ölçtü.\" cümlesindeki altı çizili sözcükler hangi ders veya alanın terimleridir?",
        "options": [
          "Müzik",
          "Türkçe",
          "Matematik (Geometri)",
          "Sosyal Bilgiler"
        ],
        "answer": 2,
        "explanation": "'Üçgen' ve 'açı', matematik dersinin geometri dalına ait temel bilimsel terimlerdir."
      },
      {
        "q": "1. \"Bu karanlık sokakta lambalar yanmıyordu.\"\n2. \"Olayın arkasında karanlık işler dönüyordu.\"\n3. \"Tiyatro oyununun ikinci perdesi alkışlarla başladı.\"\nYukarıdaki numaralanmış cümlelerde altı çizili sözcüklerin anlam özellikleri sırasıyla hangi seçenekte doğru verilmiştir?",
        "options": [
          "1: Gerçek Anlam, 2: Mecaz Anlam, 3: Terim Anlam",
          "1: Mecaz Anlam, 2: Gerçek Anlam, 3: Terim Anlam",
          "1: Terim Anlam, 2: Mecaz Anlam, 3: Gerçek Anlam",
          "1: Gerçek Anlam, 2: Terim Anlam, 3: Mecaz Anlam"
        ],
        "answer": 0,
        "explanation": "1. cümlede karanlık = ışıksız (Gerçek), 2. cümlede karanlık = şüpheli/gizli (Mecaz), 3. cümlede perde = tiyatro bölümü (Terim) anlamındadır."
      }
    ]
  },
  "tr-u2": {
    "id": "tr-u2",
    "subject": "Türkçe",
    "unitNo": "2. Ünite",
    "title": "Kelime Yapısı ve Anlam İlişkileri",
    "icon": "🇹🇷",
    "steps": [
      {
        "title": "Kök ve Ek Nedir? Basit Kelimeler",
        "badge": "1. Adım: Kelime Kökü",
        "slide": "assets/images/kelime_yapisi.svg",
        "narration": "Merhaba sevgili dördüncü sınıf kâşifim! Bu dersimizde kelimelerin sihirli dünyasına yolculuk yapıyoruz. Bir sözcüğün anlamlı en küçük parçasına kök denir. Örneğin \"göz\", \"ev\", \"balık\" birer köktür. Yapım eki almamış, kök durumundaki sözcüklere ise basit sözcükler diyoruz. \"Kitaplar\" veya \"evimiz\" kelimeleri çekim eki alsa bile anlamları değişmediği için yine basittir.",
        "audio": "assets/audio/courses/tr-u2_s1.mp3"
      },
      {
        "title": "Türemiş Kelimeler ve Yapım Ekleri",
        "badge": "2. Adım: Yeni Kelimeler",
        "slide": "assets/images/kelime_yapisi.svg",
        "narration": "Geldik türemiş kelimelere! Bir köke yapım eki eklenerek yepyeni anlamlı bir sözcük oluşturuluyorsa buna türemiş kelime denir. Örneğin \"göz\" organımızken, sonuna \"lük\" eklenince \"gözlük\" eşyası olur! \"Tuz\" yiyecekken \"tuzluk\" kap olur. Dilimizde en çok kullanılan yapım ekleri lik, ci, li ve siz ekleridir. Unutma, yapım eki yeni bir kelime doğurur!",
        "audio": "assets/audio/courses/tr-u2_s2.mp3"
      },
      {
        "title": "Bileşik Kelimeler: Güçlerini Birleştirenler",
        "badge": "3. Adım: Bileşik Sözcükler",
        "slide": "assets/images/kelime_yapisi.svg",
        "narration": "Bazen iki ayrı kelime el ele tutuşur ve yepyeni tek bir kavramı anlatır. İşte bunlara bileşik kelimeler denir! Örneğin \"Afyon\" ve \"Karahisar\" birleşince \"Afyonkarahisar\" şehri, \"aslan\" ve \"ağzı\" birleşince \"aslanağzı\" çiçeği, \"kuş\" ve \"burnu\" birleşince lezzetli bir çay olan \"kuşburnu\" oluşur. Bileşik kelimeler daima bitişik yazılır.",
        "audio": "assets/audio/courses/tr-u2_s3.mp3"
      },
      {
        "title": "Eş Anlam, Zıt Anlam ve Sesteş Sözcükler",
        "badge": "4. Adım: Anlam İlişkileri",
        "slide": "assets/images/kelime_yapisi.svg",
        "narration": "Son adımımızda kelimelerin dostluklarına bakalım. Yazılışları farklı ama anlamları aynı olan sözcüklere eş anlamlı kelimeler denir; \"al - kırmızı\", \"mektep - okul\" gibi. Anlamca birbirinin tam tersi olanlara zıt anlamlı kelimeler denir; \"soğuk - sıcak\", \"gece - gündüz\" gibi. Yazılışları aynı fakat anlamları tamamen farklı olanlara ise sesteş kelimeler deriz; nehir kenarındaki \"çay\" ile içtiğimiz \"çay\" gibi!",
        "audio": "assets/audio/courses/tr-u2_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Aşağıdaki kelimelerden hangisi YAPIM EKİ alarak türemiş bir kelimedir?",
        "options": [
          "Kitaplar",
          "Gözlükçü",
          "Evimiz",
          "Masada"
        ],
        "answer": 1,
        "explanation": "\"Gözlükçü\" sözcüğü hem \"-lük\" hem de \"-çü\" yapım eklerini alarak türemiş bir kelime olmuştur. Diğerleri sadece çekim eki almıştır."
      },
      {
        "q": "\"Kuşburnu\", \"akdeniz\" ve \"gecekondu\" sözcüklerinin ortak yapısal özelliği aşağıdakilerden hangisidir?",
        "options": [
          "Sadece bir kökten oluşmaları",
          "Bileşik kelime olmaları",
          "Zıt anlamlı olmaları",
          "Basit sözcük olmaları"
        ],
        "answer": 1,
        "explanation": "İki farklı sözcüğün birleşmesiyle yeni bir kavram oluşturan sözcüklere \"bileşik sözcük\" denir."
      },
      {
        "q": "\"Yıl - Sene\", \"Cevap - Yanıt\", \"Mektep - Okul\" sözcük çiftleri arasındaki anlam ilişkisi hangisidir?",
        "options": [
          "Zıt Anlamlı",
          "Eşsesli (Sesteş)",
          "Eş Anlamlı (Anlamdaş)",
          "Terim Anlam"
        ],
        "answer": 2,
        "explanation": "Yazılışları farklı, anlamları aynı olan bu kelimeler \"Eş Anlamlı (Anlamdaş)\" sözcüklerdir."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde \"ZIT ANLAMLI\" sözcükler bir arada kullanılmıştır?",
        "options": [
          "Gece gündüz demeden sınavına çalıştı.",
          "Sessiz ve sakin bir kasabada yaşıyorlardı.",
          "Okula erken gidip sırasına oturdu.",
          "Mavi kazağını dolaptan çıkarıp giydi."
        ],
        "answer": 0,
        "explanation": "\"Gece\" ile \"gündüz\" birbirinin tam zıddı (karşıtı) anlam ifade eder."
      },
      {
        "q": "1. \"Yaz tatilinde dedemin köyüne gideceğiz.\"\n2. \"Öğretmenimiz tahtadaki soruları deftere yaz dedi.\"\nYukarıdaki cümlelerde geçen \"yaz\" sözcükleri arasındaki ilişki nedir?",
        "options": [
          "Eşsesli (Sesteş)",
          "Zıt Anlamlı",
          "Mecaz Anlam",
          "Eş Anlamlı"
        ],
        "answer": 0,
        "explanation": "Yazılışları aynı ancak biri \"mevsim\", diğeri \"yazı yazma eylemi\" olduğu için sesteştir."
      },
      {
        "q": "\"Tuz\" kelimesine aşağıdaki eklerden hangisi getirilirse \"tuz koymaya yarayan kap\" anlamı kazanır?",
        "options": [
          "-cu",
          "-luk",
          "-lar",
          "-suz"
        ],
        "answer": 1,
        "explanation": "\"Tuz\" köküne \"-luk\" yapım eki geldiğinde \"tuzluk\" (tuz kabı) türemiş sözcüğü oluşur."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde SESTEŞ (EŞSESLİ) bir kelime kullanılmıştır?",
        "options": [
          "Kardeşim parkta ip atladı.",
          "Dedem bahçedeki kuru dalları kesti.",
          "Irmak kenarında oturup çay içtik.",
          "Kitaplarımı çantama düzgünce yerleştirdim."
        ],
        "answer": 2,
        "explanation": "\"Çay\" sözcüğü hem içecek hem de küçük akarsu anlamında kullanıldığı için sesteştir."
      },
      {
        "q": "Aşağıdaki sözcüklerden hangisi BASİT yapılı bir kelimedir?",
        "options": [
          "Sucu",
          "Simitçi",
          "Ağaç",
          "Kalemlik"
        ],
        "answer": 2,
        "explanation": "\"Ağaç\" herhangi bir yapım eki almamış, kök halinde basit bir sözcüktür."
      },
      {
        "q": "\"Tutsak\" kelimesinin EŞ ANLAMLISI aşağıdakilerden hangisidir?",
        "options": [
          "Hür",
          "Esir",
          "Zengin",
          "Yolcu"
        ],
        "answer": 1,
        "explanation": "\"Tutsak\" ile \"esir\" aynı anlamı taşıyan eş anlamlı sözcüklerdir."
      },
      {
        "q": "\"Cimri\" sözcüğünün ZIT ANLAMLISI hangi seçenekte doğru verilmiştir?",
        "options": [
          "Pinti",
          "Tutumlu",
          "Cömert",
          "Korkak"
        ],
        "answer": 2,
        "explanation": "Cimri (harcamaktan kaçınan) sözcüğünün zıt anlamlısı \"Cömert\" (eli açık, paylaşan) sözcüğüdür."
      }
    ],
    "quiz": [
      {
        "q": "Aşağıdaki kelimelerden hangisi YAPIM EKİ alarak türemiş bir kelimedir?",
        "options": [
          "Kitaplar",
          "Gözlükçü",
          "Evimiz",
          "Masada"
        ],
        "answer": 1,
        "explanation": "\"Gözlükçü\" sözcüğü hem \"-lük\" hem de \"-çü\" yapım eklerini alarak türemiş bir kelime olmuştur. Diğerleri sadece çekim eki almıştır."
      },
      {
        "q": "\"Kuşburnu\", \"akdeniz\" ve \"gecekondu\" sözcüklerinin ortak yapısal özelliği aşağıdakilerden hangisidir?",
        "options": [
          "Sadece bir kökten oluşmaları",
          "Bileşik kelime olmaları",
          "Zıt anlamlı olmaları",
          "Basit sözcük olmaları"
        ],
        "answer": 1,
        "explanation": "İki farklı sözcüğün birleşmesiyle yeni bir kavram oluşturan sözcüklere \"bileşik sözcük\" denir."
      },
      {
        "q": "\"Yıl - Sene\", \"Cevap - Yanıt\", \"Mektep - Okul\" sözcük çiftleri arasındaki anlam ilişkisi hangisidir?",
        "options": [
          "Zıt Anlamlı",
          "Eşsesli (Sesteş)",
          "Eş Anlamlı (Anlamdaş)",
          "Terim Anlam"
        ],
        "answer": 2,
        "explanation": "Yazılışları farklı, anlamları aynı olan bu kelimeler \"Eş Anlamlı (Anlamdaş)\" sözcüklerdir."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde \"ZIT ANLAMLI\" sözcükler bir arada kullanılmıştır?",
        "options": [
          "Gece gündüz demeden sınavına çalıştı.",
          "Sessiz ve sakin bir kasabada yaşıyorlardı.",
          "Okula erken gidip sırasına oturdu.",
          "Mavi kazağını dolaptan çıkarıp giydi."
        ],
        "answer": 0,
        "explanation": "\"Gece\" ile \"gündüz\" birbirinin tam zıddı (karşıtı) anlam ifade eder."
      },
      {
        "q": "1. \"Yaz tatilinde dedemin köyüne gideceğiz.\"\n2. \"Öğretmenimiz tahtadaki soruları deftere yaz dedi.\"\nYukarıdaki cümlelerde geçen \"yaz\" sözcükleri arasındaki ilişki nedir?",
        "options": [
          "Eşsesli (Sesteş)",
          "Zıt Anlamlı",
          "Mecaz Anlam",
          "Eş Anlamlı"
        ],
        "answer": 0,
        "explanation": "Yazılışları aynı ancak biri \"mevsim\", diğeri \"yazı yazma eylemi\" olduğu için sesteştir."
      },
      {
        "q": "\"Tuz\" kelimesine aşağıdaki eklerden hangisi getirilirse \"tuz koymaya yarayan kap\" anlamı kazanır?",
        "options": [
          "-cu",
          "-luk",
          "-lar",
          "-suz"
        ],
        "answer": 1,
        "explanation": "\"Tuz\" köküne \"-luk\" yapım eki geldiğinde \"tuzluk\" (tuz kabı) türemiş sözcüğü oluşur."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde SESTEŞ (EŞSESLİ) bir kelime kullanılmıştır?",
        "options": [
          "Kardeşim parkta ip atladı.",
          "Dedem bahçedeki kuru dalları kesti.",
          "Irmak kenarında oturup çay içtik.",
          "Kitaplarımı çantama düzgünce yerleştirdim."
        ],
        "answer": 2,
        "explanation": "\"Çay\" sözcüğü hem içecek hem de küçük akarsu anlamında kullanıldığı için sesteştir."
      },
      {
        "q": "Aşağıdaki sözcüklerden hangisi BASİT yapılı bir kelimedir?",
        "options": [
          "Sucu",
          "Simitçi",
          "Ağaç",
          "Kalemlik"
        ],
        "answer": 2,
        "explanation": "\"Ağaç\" herhangi bir yapım eki almamış, kök halinde basit bir sözcüktür."
      },
      {
        "q": "\"Tutsak\" kelimesinin EŞ ANLAMLISI aşağıdakilerden hangisidir?",
        "options": [
          "Hür",
          "Esir",
          "Zengin",
          "Yolcu"
        ],
        "answer": 1,
        "explanation": "\"Tutsak\" ile \"esir\" aynı anlamı taşıyan eş anlamlı sözcüklerdir."
      },
      {
        "q": "\"Cimri\" sözcüğünün ZIT ANLAMLISI hangi seçenekte doğru verilmiştir?",
        "options": [
          "Pinti",
          "Tutumlu",
          "Cömert",
          "Korkak"
        ],
        "answer": 2,
        "explanation": "Cimri (harcamaktan kaçınan) sözcüğünün zıt anlamlısı \"Cömert\" (eli açık, paylaşan) sözcüğüdür."
      }
    ]
  },
  "tr-u3": {
    "id": "tr-u3",
    "subject": "Türkçe",
    "unitNo": "3. Ünite",
    "title": "Metin Türleri ve Deyimler",
    "icon": "🇹🇷",
    "steps": [
      {
        "title": "Hikâye ve Hikâye Unsurları",
        "badge": "1. Adım: Hikâye Unsurları",
        "slide": "assets/images/metin_turleri_deyimler.svg",
        "narration": "Merhaba sevgili kâşif! Bir hikâyeyi okurken içindeki gizli şifreleri çözmeye ne dersin? Her hikâyenin dört temel unsuru vardır: Yaşanan olay, olayın geçtiği yer, olayın yaşandığı zaman ve olayda yer alan kişiler ya da kahramanlar. Bu dört unsuru bulduğunda hikâyeyi tam anlamıyla kavramış olursun!",
        "audio": "assets/audio/courses/tr-u3_s1.mp3"
      },
      {
        "title": "Masal ve Şiir Dünyası",
        "badge": "2. Adım: Masal ve Şiir",
        "slide": "assets/images/metin_turleri_deyimler.svg",
        "narration": "Şimdi masalların büyülü dünyasındayız! Masallar genellikle \"Bir varmış, bir yokmuş\" tekerlemesiyle başlar. Periler, devler, konuşan hayvanlar gibi olağanüstü kahramanlar içerir ve yer ile zaman belirsizdir. Şiirler ise duygularımızın ritmidir! Şiirin her satırına dize veya mısra, dört dizelik gruplara ise kıta veya dörtlük denir. Şiiri yazan kişiye ise şair deriz.",
        "audio": "assets/audio/courses/tr-u3_s2.mp3"
      },
      {
        "title": "Deyimlerin Renkli Dünyası",
        "badge": "3. Adım: Deyimler",
        "slide": "assets/images/metin_turleri_deyimler.svg",
        "narration": "Türkçemizi süsleyen harika kalıplaşmış sözlerimiz vardır: Deyimler! Deyimler en az iki sözcükten oluşur ve genellikle mecaz anlam taşır. Sözcüklerin yerleri asla değiştirilemez! Örneğin çok sevinen biri için \"Etekleri zil çalıyor\" deriz. Dikkatle gizlice dinleyene ise \"Kulak kabartıyor\" deriz. Deyimler bir durumu anlatır, atasözleri gibi öğüt vermez.",
        "audio": "assets/audio/courses/tr-u3_s3.mp3"
      },
      {
        "title": "Atasözü ile Deyim Arasındaki Fark",
        "badge": "4. Adım: Farkı Yakala",
        "slide": "assets/images/metin_turleri_deyimler.svg",
        "narration": "Harika bir ipucu: \"Deyim mi, atasözü mü?\" diye düşünüyorsan şuna dikkat et: Atasözleri geçmişten gelen derin hayat tecrübesi ve öğüt içerir. \"Damlaya damlaya göl olur\" bir atasözüdür ve bize tutumlu olmayı öğütler. \"Gözden düşmek\" ise anlık bir durumu anlatır ve bir deyimdir!",
        "audio": "assets/audio/courses/tr-u3_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Aşağıdakilerden hangisi bir HİKÂYENİN temel unsurlarından biri DEĞİLDİR?",
        "options": [
          "Olay",
          "Yer (Mekân)",
          "Şahıs / Varlık Kadrosu",
          "Deney Tüpleri"
        ],
        "answer": 3,
        "explanation": "Hikâye unsurları; olay, yer, zaman ve şahıslardır. Deney tüpleri fen bilgisi araçlarıdır."
      },
      {
        "q": "Şiirin her bir satırına ne ad verilir?",
        "options": [
          "Paragraf",
          "Dize (Mısra)",
          "Cümle",
          "Kıta"
        ],
        "answer": 1,
        "explanation": "Şiirin her satırına \"Dize\" ya da diğer adıyla \"Mısra\" denir."
      },
      {
        "q": "\"Bir varmış bir yokmuş, evvel zaman içinde, kalbur saman içinde...\" tekerlemesi hangi metin türünün başlangıcıdır?",
        "options": [
          "Haber Metni",
          "Masal",
          "Gezi Yazısı",
          "Dilekçe"
        ],
        "answer": 1,
        "explanation": "Tekerlemelerle başlayan, olağanüstü olayları anlatan metin türü Masaldır."
      },
      {
        "q": "\"Sınavdan tam not aldığını öğrenince etekleri zil çaldı.\" cümlesindeki deyimin anlamı nedir?",
        "options": [
          "Çok korkmak",
          "Çok sevinmek",
          "Çok öfkelenmek",
          "Çok yorulmak"
        ],
        "answer": 1,
        "explanation": "\"Etekleri zil çalmak\" deyimi çok sevinmek, neşelenmek ve havalara uçmak anlamına gelir."
      },
      {
        "q": "Aşağıdakilerden hangisi bir DEYİM DEĞİL, bir ATASÖZÜDÜR?",
        "options": [
          "Göz boyamak",
          "Ayağını yorganına göre uzat",
          "Pabucu dama atılmak",
          "Kulak misafiri olmak"
        ],
        "answer": 1,
        "explanation": "\"Ayağını yorganına göre uzat\" öğüt ve hayat dersi verdiği için bir atasözüdür."
      },
      {
        "q": "\"Belli etmemeye çalışarak yan masada konuşulanları dinledi.\" durumunu en iyi anlatan deyim hangisidir?",
        "options": [
          "Kulak kabartmak",
          "Göz yummak",
          "Can kulağıyla dinlemek",
          "Ağzı kulaklarına varmak"
        ],
        "answer": 0,
        "explanation": "Çaktırmadan, gizlice dinlemeye çalışmak \"kulak kabartmak\" deyimiyle karşılanır."
      },
      {
        "q": "Masalların en belirgin özelliği aşağıdakilerden hangisidir?",
        "options": [
          "Tarih ve saatin tam olarak belirtilmesi",
          "Gerçek hayatta aynen yaşanmış olması",
          "Olağanüstü kahramanlar ve yer/zaman belirsizliği",
          "Yalnızca yetişkinler için yazılması"
        ],
        "answer": 2,
        "explanation": "Masallarda Kaf Dağı, periler, cinler gibi olağanüstü ögeler yer alır; zaman ve yer belirsizdir."
      },
      {
        "q": "Şiirin dört dizeden oluşan her bir bölümüne ne ad verilir?",
        "options": [
          "Dörtlük (Kıta)",
          "Cümle",
          "Başlık",
          "Kafiye"
        ],
        "answer": 0,
        "explanation": "Dört dizeden oluşan şiir bölümlerine \"Dörtlük\" veya \"Kıta\" adı verilir."
      },
      {
        "q": "\"Burnu Kaf Dağı'nda olmak\" deyiminin anlamı nedir?",
        "options": [
          "Çok soğuktan üşümek",
          "Kendini çok beğenmek, kibirlenmek",
          "Çok uzaklara seyahat etmek",
          "Kokusunu çok iyi almak"
        ],
        "answer": 1,
        "explanation": "Burnu Kaf Dağında olmak, çok kibirlenmek ve kendisini herkesten üstün görmek demektir."
      },
      {
        "q": "Aşağıdakilerden hangisi kalıplaşmış olduğu için kelimeleri değiştirilemeyen söz grubudur?",
        "options": [
          "Hikâye başlıkları",
          "Deyimler",
          "Sıradan konuşma cümleleri",
          "Şiir isimleri"
        ],
        "answer": 1,
        "explanation": "Deyimler kalıplaşmış ifadelerdir; sözcüklerinin yeri değiştirilemez veya eş anlamlısı konamaz."
      }
    ],
    "quiz": [
      {
        "q": "Aşağıdakilerden hangisi bir HİKÂYENİN temel unsurlarından biri DEĞİLDİR?",
        "options": [
          "Olay",
          "Yer (Mekân)",
          "Şahıs / Varlık Kadrosu",
          "Deney Tüpleri"
        ],
        "answer": 3,
        "explanation": "Hikâye unsurları; olay, yer, zaman ve şahıslardır. Deney tüpleri fen bilgisi araçlarıdır."
      },
      {
        "q": "Şiirin her bir satırına ne ad verilir?",
        "options": [
          "Paragraf",
          "Dize (Mısra)",
          "Cümle",
          "Kıta"
        ],
        "answer": 1,
        "explanation": "Şiirin her satırına \"Dize\" ya da diğer adıyla \"Mısra\" denir."
      },
      {
        "q": "\"Bir varmış bir yokmuş, evvel zaman içinde, kalbur saman içinde...\" tekerlemesi hangi metin türünün başlangıcıdır?",
        "options": [
          "Haber Metni",
          "Masal",
          "Gezi Yazısı",
          "Dilekçe"
        ],
        "answer": 1,
        "explanation": "Tekerlemelerle başlayan, olağanüstü olayları anlatan metin türü Masaldır."
      },
      {
        "q": "\"Sınavdan tam not aldığını öğrenince etekleri zil çaldı.\" cümlesindeki deyimin anlamı nedir?",
        "options": [
          "Çok korkmak",
          "Çok sevinmek",
          "Çok öfkelenmek",
          "Çok yorulmak"
        ],
        "answer": 1,
        "explanation": "\"Etekleri zil çalmak\" deyimi çok sevinmek, neşelenmek ve havalara uçmak anlamına gelir."
      },
      {
        "q": "Aşağıdakilerden hangisi bir DEYİM DEĞİL, bir ATASÖZÜDÜR?",
        "options": [
          "Göz boyamak",
          "Ayağını yorganına göre uzat",
          "Pabucu dama atılmak",
          "Kulak misafiri olmak"
        ],
        "answer": 1,
        "explanation": "\"Ayağını yorganına göre uzat\" öğüt ve hayat dersi verdiği için bir atasözüdür."
      },
      {
        "q": "\"Belli etmemeye çalışarak yan masada konuşulanları dinledi.\" durumunu en iyi anlatan deyim hangisidir?",
        "options": [
          "Kulak kabartmak",
          "Göz yummak",
          "Can kulağıyla dinlemek",
          "Ağzı kulaklarına varmak"
        ],
        "answer": 0,
        "explanation": "Çaktırmadan, gizlice dinlemeye çalışmak \"kulak kabartmak\" deyimiyle karşılanır."
      },
      {
        "q": "Masalların en belirgin özelliği aşağıdakilerden hangisidir?",
        "options": [
          "Tarih ve saatin tam olarak belirtilmesi",
          "Gerçek hayatta aynen yaşanmış olması",
          "Olağanüstü kahramanlar ve yer/zaman belirsizliği",
          "Yalnızca yetişkinler için yazılması"
        ],
        "answer": 2,
        "explanation": "Masallarda Kaf Dağı, periler, cinler gibi olağanüstü ögeler yer alır; zaman ve yer belirsizdir."
      },
      {
        "q": "Şiirin dört dizeden oluşan her bir bölümüne ne ad verilir?",
        "options": [
          "Dörtlük (Kıta)",
          "Cümle",
          "Başlık",
          "Kafiye"
        ],
        "answer": 0,
        "explanation": "Dört dizeden oluşan şiir bölümlerine \"Dörtlük\" veya \"Kıta\" adı verilir."
      },
      {
        "q": "\"Burnu Kaf Dağı'nda olmak\" deyiminin anlamı nedir?",
        "options": [
          "Çok soğuktan üşümek",
          "Kendini çok beğenmek, kibirlenmek",
          "Çok uzaklara seyahat etmek",
          "Kokusunu çok iyi almak"
        ],
        "answer": 1,
        "explanation": "Burnu Kaf Dağında olmak, çok kibirlenmek ve kendisini herkesten üstün görmek demektir."
      },
      {
        "q": "Aşağıdakilerden hangisi kalıplaşmış olduğu için kelimeleri değiştirilemeyen söz grubudur?",
        "options": [
          "Hikâye başlıkları",
          "Deyimler",
          "Sıradan konuşma cümleleri",
          "Şiir isimleri"
        ],
        "answer": 1,
        "explanation": "Deyimler kalıplaşmış ifadelerdir; sözcüklerinin yeri değiştirilemez veya eş anlamlısı konamaz."
      }
    ]
  },
  "tr-u4": {
    "id": "tr-u4",
    "subject": "Türkçe",
    "unitNo": "4. Ünite",
    "title": "Sözcük Türleri ve Cümlenin Öğeleri",
    "icon": "🇹🇷",
    "steps": [
      {
        "title": "İsimler ve Sıfatlar (Önadlar)",
        "badge": "1. Adım: İsim & Sıfat",
        "slide": "assets/images/sozcuk_turleri_cumle.svg",
        "narration": "Merhaba sevgili kâşif! Cümleleri kuran sözcüklerin rollerini öğreniyoruz. Varlıkları tanıtan sözcüklere isim (ad) denir: \"masa\", \"kedi\", \"çiçek\". İsimlerin önüne gelerek onların rengini, durumunu, sayısını veya işaretini belirten sözcüklere ise sıfat yani önad denir! \"Kırmızı elma\", \"üç kalem\", \"bu çocuk\" dediğimizde baştaki sözcükler birer sıfattır.",
        "audio": "assets/audio/courses/tr-u4_s1.mp3"
      },
      {
        "title": "Zamirler (Adıllar) ve Fiiller (Eylemler)",
        "badge": "2. Adım: Zamir & Fiil",
        "slide": "assets/images/sozcuk_turleri_cumle.svg",
        "narration": "İsmin yerine geçen gizli kahramanlara zamir (adıl) denir: \"Ali geldi\" yerine \"O geldi\", \"kitabı aldım\" yerine \"bunu aldım\" deriz. İş, oluş ve hareket bildiren, zaman eki alan sözcüklere ise fiil yani eylem deriz: \"koşmak\", \"okudu\", \"yazıyor\", \"gelecek\". Fiil olmadan cümle tamamlanamaz!",
        "audio": "assets/audio/courses/tr-u4_s2.mp3"
      },
      {
        "title": "Cümlenin Temel Direği: Yüklem ve Özne",
        "badge": "3. Adım: Cümlenin Ögeleri",
        "slide": "assets/images/sozcuk_turleri_cumle.svg",
        "narration": "Bir cümleyi ayakta tutan iki büyük direk vardır. İlki yargıyı ve işi bildiren Yüklemdir! Kurallı cümlelerde yüklem genellikle cümlenin en sonundadır. İkinci direk ise o işi yapan Öz許nedir! Yükleme \"Kim?\" veya \"Ne?\" sorusunu sorduğumuzda bize hemen özneyi verir. Örneğin: \"Zeynep kitap okudu.\" cümlesinde okudu Yüklem, okuyan kim? Zeynep Öznedir!",
        "audio": "assets/audio/courses/tr-u4_s3.mp3"
      },
      {
        "title": "Nesne ve Kurallı Cümle Düzeni",
        "badge": "4. Adım: Nesne ve Düzen",
        "slide": "assets/images/sozcuk_turleri_cumle.svg",
        "narration": "Yapılan işten etkilenen varlığa Nesne denir. Yükleme \"Neyi?\", \"Kimi?\" veya \"Ne?\" diye sorduğumuzda nesneyi buluruz: \"Zeynep neyi okudu? Kitabı!\" Kitap burada nesnedir. Türkçemizde kurallı bir cümlede sıra: Özne + Nesne/Tümleç + Yüklem şeklindedir. Yüklem cümlenin sonunda olmalıdır.",
        "audio": "assets/audio/courses/tr-u4_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "\"Sarı balon gökyüzünde süzüldü.\" cümlesindeki \"sarı\" sözcüğü hangi türdedir?",
        "options": [
          "İsim",
          "Sıfat (Önad)",
          "Fiil (Eylem)",
          "Zamir (Adıl)"
        ],
        "answer": 1,
        "explanation": "\"Sarı\", balon isminin rengini belirten bir Sıfattır (Önad)."
      },
      {
        "q": "\"Ahmet dün akşam güzel bir hikâye okudu.\" cümlesinin YÜKLEMİ hangisidir?",
        "options": [
          "Ahmet",
          "dün akşam",
          "hikâye",
          "okudu"
        ],
        "answer": 3,
        "explanation": "Cümlede işi, hareketi ve yargıyı bildiren sözcük \"okudu\" yüklemdir."
      },
      {
        "q": "Aşağıdaki altı çizili sözcüklerden hangisi bir ZAMİR (ADIL)dir?",
        "options": [
          "Çocuklar bahçede top oynuyor.",
          "O, sınavdan yüz puan aldı.",
          "Kırmızı arabayı çok beğendi.",
          "Masadaki bardak kırıldı."
        ],
        "answer": 1,
        "explanation": "\"O\", bir kişinin ismi yerine kullanılan kişi zamiridir."
      },
      {
        "q": "\"Kuşlar baharın gelişiyle neşeyle ötüşüyor.\" cümlesinde İŞİ YAPAN (ÖZNE) kimdir/nedir?",
        "options": [
          "Bahar",
          "Kuşlar",
          "Neşeyle",
          "Ötüşüyor"
        ],
        "answer": 1,
        "explanation": "Yükleme \"Ötüşen kim?\" diye sorduğumuzda cevap \"Kuşlar\" yani öznedir."
      },
      {
        "q": "Aşağıdaki sözcüklerden hangisi bir FİİL (EYLEM) bildirmektedir?",
        "options": [
          "Kalem",
          "Masa",
          "Koşuyor",
          "Deniz"
        ],
        "answer": 2,
        "explanation": "\"Koşuyor\" şimdiki zamanda yapılan bir hareket bildirdiği için fiildir."
      },
      {
        "q": "\"Öğrenciler kütüphaneden yeni kitaplar aldı.\" cümlesindeki NESNE hangisidir?",
        "options": [
          "Öğrenciler",
          "Kütüphaneden",
          "Yeni kitaplar",
          "Aldı"
        ],
        "answer": 2,
        "explanation": "Yükleme \"Ne aldı?\" sorusunu sorduğumuzda etkilenen nesne \"yeni kitaplar\"dır."
      },
      {
        "q": "Aşağıdakilerden hangisi KURALLI bir cümledir?",
        "options": [
          "Gitti okula erkenden Ali.",
          "Ali erkenden okula gitti.",
          "Okula gitti erkenden Ali.",
          "Erkenden gitti okula Ali."
        ],
        "answer": 1,
        "explanation": "Kurallı cümlede yüklem daima cümlenin en sonunda yer alır: \"Ali erkenden okula gitti.\""
      },
      {
        "q": "\"Üç elma\", \"beşinci kat\", \"ikinci sıra\" tamlamalarındaki sayılar sıfatın hangi türüdür?",
        "options": [
          "Niteleme Sıfatı",
          "Sayı Sıfatı",
          "İşaret Sıfatı",
          "Soru Sıfatı"
        ],
        "answer": 1,
        "explanation": "Varlıkların sayısını ve sırasını belirten sıfatlara \"Sayı Sıfatı\" denir."
      },
      {
        "q": "\"Ben, sen, o, biz, siz, onlar\" sözcük grubuna genel olarak ne ad verilir?",
        "options": [
          "İşaret Sıfatları",
          "Kişi Zamirleri",
          "Durum Ekleri",
          "Zaman Zarfları"
        ],
        "answer": 1,
        "explanation": "İnsan isimlerinin yerine geçen sözcüklere \"Kişi (Şahıs) Zamirleri\" denir."
      },
      {
        "q": "\"Küçük çocuk kapıyı yavaşça açtı.\" cümlesinde ÖZNE ve YÜKLEM sırasıyla hangileridir?",
        "options": [
          "Küçük çocuk - açtı",
          "Kapıyı - yavaşça",
          "Yavaşça - çocuk",
          "Açtı - kapıyı"
        ],
        "answer": 0,
        "explanation": "Açtı = Yüklem. Açan kim? = Küçük çocuk (Özne)."
      }
    ],
    "quiz": [
      {
        "q": "\"Sarı balon gökyüzünde süzüldü.\" cümlesindeki \"sarı\" sözcüğü hangi türdedir?",
        "options": [
          "İsim",
          "Sıfat (Önad)",
          "Fiil (Eylem)",
          "Zamir (Adıl)"
        ],
        "answer": 1,
        "explanation": "\"Sarı\", balon isminin rengini belirten bir Sıfattır (Önad)."
      },
      {
        "q": "\"Ahmet dün akşam güzel bir hikâye okudu.\" cümlesinin YÜKLEMİ hangisidir?",
        "options": [
          "Ahmet",
          "dün akşam",
          "hikâye",
          "okudu"
        ],
        "answer": 3,
        "explanation": "Cümlede işi, hareketi ve yargıyı bildiren sözcük \"okudu\" yüklemdir."
      },
      {
        "q": "Aşağıdaki altı çizili sözcüklerden hangisi bir ZAMİR (ADIL)dir?",
        "options": [
          "Çocuklar bahçede top oynuyor.",
          "O, sınavdan yüz puan aldı.",
          "Kırmızı arabayı çok beğendi.",
          "Masadaki bardak kırıldı."
        ],
        "answer": 1,
        "explanation": "\"O\", bir kişinin ismi yerine kullanılan kişi zamiridir."
      },
      {
        "q": "\"Kuşlar baharın gelişiyle neşeyle ötüşüyor.\" cümlesinde İŞİ YAPAN (ÖZNE) kimdir/nedir?",
        "options": [
          "Bahar",
          "Kuşlar",
          "Neşeyle",
          "Ötüşüyor"
        ],
        "answer": 1,
        "explanation": "Yükleme \"Ötüşen kim?\" diye sorduğumuzda cevap \"Kuşlar\" yani öznedir."
      },
      {
        "q": "Aşağıdaki sözcüklerden hangisi bir FİİL (EYLEM) bildirmektedir?",
        "options": [
          "Kalem",
          "Masa",
          "Koşuyor",
          "Deniz"
        ],
        "answer": 2,
        "explanation": "\"Koşuyor\" şimdiki zamanda yapılan bir hareket bildirdiği için fiildir."
      },
      {
        "q": "\"Öğrenciler kütüphaneden yeni kitaplar aldı.\" cümlesindeki NESNE hangisidir?",
        "options": [
          "Öğrenciler",
          "Kütüphaneden",
          "Yeni kitaplar",
          "Aldı"
        ],
        "answer": 2,
        "explanation": "Yükleme \"Ne aldı?\" sorusunu sorduğumuzda etkilenen nesne \"yeni kitaplar\"dır."
      },
      {
        "q": "Aşağıdakilerden hangisi KURALLI bir cümledir?",
        "options": [
          "Gitti okula erkenden Ali.",
          "Ali erkenden okula gitti.",
          "Okula gitti erkenden Ali.",
          "Erkenden gitti okula Ali."
        ],
        "answer": 1,
        "explanation": "Kurallı cümlede yüklem daima cümlenin en sonunda yer alır: \"Ali erkenden okula gitti.\""
      },
      {
        "q": "\"Üç elma\", \"beşinci kat\", \"ikinci sıra\" tamlamalarındaki sayılar sıfatın hangi türüdür?",
        "options": [
          "Niteleme Sıfatı",
          "Sayı Sıfatı",
          "İşaret Sıfatı",
          "Soru Sıfatı"
        ],
        "answer": 1,
        "explanation": "Varlıkların sayısını ve sırasını belirten sıfatlara \"Sayı Sıfatı\" denir."
      },
      {
        "q": "\"Ben, sen, o, biz, siz, onlar\" sözcük grubuna genel olarak ne ad verilir?",
        "options": [
          "İşaret Sıfatları",
          "Kişi Zamirleri",
          "Durum Ekleri",
          "Zaman Zarfları"
        ],
        "answer": 1,
        "explanation": "İnsan isimlerinin yerine geçen sözcüklere \"Kişi (Şahıs) Zamirleri\" denir."
      },
      {
        "q": "\"Küçük çocuk kapıyı yavaşça açtı.\" cümlesinde ÖZNE ve YÜKLEM sırasıyla hangileridir?",
        "options": [
          "Küçük çocuk - açtı",
          "Kapıyı - yavaşça",
          "Yavaşça - çocuk",
          "Açtı - kapıyı"
        ],
        "answer": 0,
        "explanation": "Açtı = Yüklem. Açan kim? = Küçük çocuk (Özne)."
      }
    ]
  },
  "tr-u5": {
    "id": "tr-u5",
    "subject": "Türkçe",
    "unitNo": "5. Ünite",
    "title": "Cümlede Anlam ve Yargılar",
    "icon": "🇹🇷",
    "steps": [
      {
        "title": "Öznel ve Nesnel Yargılar",
        "badge": "1. Adım: Yargı Türleri",
        "slide": "assets/images/cumlede_anlam_yargilar.svg",
        "narration": "Merhaba sevgili kâşif! Bugün düşüncelerimizi tartıyoruz. Doğruluğu ya da yanlışlığı kişiden kişiye değişmeyen, herkesçe kabul edilen kanıtlanabilir cümlelere Nesnel Yargı deriz. Örneğin: \"Türkiye'nin başkenti Ankara'dır.\" Kişisel beğeni, duygu ve zevk içeren cümlelere ise Öznel Yargı deriz: \"En güzel renk mavidir.\" Biri kanıtlanır, diğeri zevktir!",
        "audio": "assets/audio/courses/tr-u5_s1.mp3"
      },
      {
        "title": "Neden-Sonuç ve Amaç-Sonuç Cümleleri",
        "badge": "2. Adım: Sebep & Amaç",
        "slide": "assets/images/cumlede_anlam_yargilar.svg",
        "narration": "Bir eylemin hangi gerekçeyle yapıldığını anlatan cümlelere Neden-Sonuç cümleleri denir: \"Kar yağdığı için okullar tatil edildi.\" Neden? Kar yağdı! Sonuç? Okullar tatil edildi. Eğer bir hedef için yapılıyorsa buna Amaç-Sonuç deriz: \"Sınavı kazanmak amacıyla çok çalıştı.\" Cümleye \"Hangi amaçla?\" diye sorarak farkı hemen bulabilirsin.",
        "audio": "assets/audio/courses/tr-u5_s2.mp3"
      },
      {
        "title": "Karşılaştırma İfadeleri",
        "badge": "3. Adım: Karşılaştırma",
        "slide": "assets/images/cumlede_anlam_yargilar.svg",
        "narration": "En az iki farklı varlık, olay ya da durumu birbiriyle kıyaslayan cümlelere Karşılaştırma İfadesi denir. Bu cümlelerde \"daha, en, göre, kadar, benzer şekilde\" gibi anahtar kelimeler kullanılır. Örneğin: \"Zürafa, filden daha uzundur.\" veya \"Sınıfın en çalışkanı Ayşe'dir.\" dediğimizde karşılaştırma yapmış oluruz.",
        "audio": "assets/audio/courses/tr-u5_s3.mp3"
      },
      {
        "title": "Genel ve Özel İfadeler",
        "badge": "4. Adım: Genel & Özel",
        "slide": "assets/images/cumlede_anlam_yargilar.svg",
        "narration": "Bir sözcük bütün bir türü kapsıyorsa Genel İfade, o türün tek bir örneğini anlatıyorsa Özel İfade olur. \"Meyveler sağlığa çok faydalıdır\" dediğimizde meyve geneldir. \"Amasya elması çok suludur\" dediğimizde ise elmanın özel bir çeşidini kastetmiş oluruz. Genelden özele sıralama yapmak düşüncelerimizi netleştirir.",
        "audio": "assets/audio/courses/tr-u5_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Aşağıdaki cümlelerin hangisi NESNEL (KANITLANABİLİR) bir yargı bildirir?",
        "options": [
          "En lezzetli meyve çilektir.",
          "Bir yıl on iki aydan oluşur.",
          "Mavi renk herkese çok yakışır.",
          "Kış mevsimi yazdan daha eğlencelidir."
        ],
        "answer": 1,
        "explanation": "\"Bir yıl on iki aydır\" ifadesi kişisel yoruma dayanmaz, bilimsel ve takvimsel bir gerçektir."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde ÖZNEL (KİŞİSEL GÖRÜŞ) bir anlatım vardır?",
        "options": [
          "Atatürk 1881 yılında Selanik'te doğdu.",
          "Kitap fuarı bu hafta sonu açılacak.",
          "Bu tablodaki renkler insana büyük bir huzur veriyor.",
          "Türkiye üç tarafı denizlerle çevrili bir ülkedir."
        ],
        "answer": 2,
        "explanation": "Huzur verme hissi kişiden kişiye değişir, dolayısıyla öznel bir yargıdır."
      },
      {
        "q": "\"Geç yattığı için sabah uyanamadı.\" cümlesindeki anlam ilişkisi aşağıdakilerden hangisidir?",
        "options": [
          "Amaç - Sonuç",
          "Neden - Sonuç",
          "Koşul (Şart) - Sonuç",
          "Karşılaştırma"
        ],
        "answer": 1,
        "explanation": "Uyanamamasının \"nedeni\" geç yatmasıdır; sebep-sonuç ilişkisidir."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde bir KARŞILAŞTIRMA yapılmıştır?",
        "options": [
          "Ali bugün okula erkenden geldi.",
          "Ahmet, sınıftaki herkesten daha hızlı koşuyor.",
          "Annem akşam için çok güzel bir çorba yaptı.",
          "Bahçedeki papatyalar açmaya başladı."
        ],
        "answer": 1,
        "explanation": "\"Herkesten daha hızlı\" ifadesi Ahmet ile sınıftaki diğer öğrencileri karşılaştırır."
      },
      {
        "q": "\"Kitap okumak insanın ufkunu açar.\" cümlesindeki \"kitap\" sözcüğünün kullanımı nasıldır?",
        "options": [
          "Özel İfade",
          "Genel İfade",
          "Mecaz İfade",
          "Terim İfade"
        ],
        "answer": 1,
        "explanation": "Burada tek bir kitap değil, dünyadaki tüm kitaplar genel anlamda kastedilmiştir."
      },
      {
        "q": "\"Kilo vermek amacıyla her sabah düzenli yürüyüş yapıyor.\" cümlesinin anlam özelliği nedir?",
        "options": [
          "Amaç - Sonuç",
          "Neden - Sonuç",
          "Öznel Yargı",
          "Abartma"
        ],
        "answer": 0,
        "explanation": "Yürüyüş yapmasının \"amacı/hedefi\" kilo vermektir; amaç-sonuç ilişkisidir."
      },
      {
        "q": "Aşağıdakilerden hangisi \"Özelden Genele\" doğru yapılan bir sıralamadır?",
        "options": [
          "Varlık - Canlı - Bitki - Papatya",
          "Papatya - Çiçek - Bitki - Canlı",
          "Dünya - Türkiye - Ankara - Çankaya",
          "Meyve - Elma - Amasya Elması"
        ],
        "answer": 1,
        "explanation": "Papatya tek bir türdür, çiçek ve bitki daha geniş, canlı ise en genel kavramdır."
      },
      {
        "q": "1. \"Hastalandığı için doktora gitti.\"\n2. \"İyileşmek için ilaçlarını düzenli içti.\"\nBu iki cümlenin anlam özellikleri sırasıyla hangisidir?",
        "options": [
          "1: Neden-Sonuç, 2: Amaç-Sonuç",
          "1: Amaç-Sonuç, 2: Neden-Sonuç",
          "1: Öznel, 2: Nesnel",
          "1: Karşılaştırma, 2: Neden-Sonuç"
        ],
        "answer": 0,
        "explanation": "1. cümlede hastalık bir nedendir; 2. cümlede iyileşmek ulaşılmak istenen bir amaçtır."
      },
      {
        "q": "\"Bugün hava dünkünden daha soğuk.\" cümlesinde hangi iki durum karşılaştırılmıştır?",
        "options": [
          "Yaz ile kış",
          "Bugünün havası ile dünün havası",
          "Rüzgâr ile yağmur",
          "Sabah ile akşam"
        ],
        "answer": 1,
        "explanation": "\"Bugün\" ile \"dün\"ün hava sıcaklığı \"daha soğuk\" denilerek karşılaştırılmıştır."
      },
      {
        "q": "Aşağıdaki cümlelerden hangisi kanıtlanabilirlik açısından diğerlerinden FARKLIDIR?",
        "options": [
          "Ankara Türkiye'nin başkentidir.",
          "Dünya Güneş'in etrafında dolanır.",
          "Kırmızı en dikkat çekici ve güzel renktir.",
          "Su 100 derecede kaynar."
        ],
        "answer": 2,
        "explanation": "İlk iki ve son seçenek kanıtlanabilir Nesnel yargılardır; kırmızı rengin güzelliği ise Özneldir."
      }
    ],
    "quiz": [
      {
        "q": "Aşağıdaki cümlelerin hangisi NESNEL (KANITLANABİLİR) bir yargı bildirir?",
        "options": [
          "En lezzetli meyve çilektir.",
          "Bir yıl on iki aydan oluşur.",
          "Mavi renk herkese çok yakışır.",
          "Kış mevsimi yazdan daha eğlencelidir."
        ],
        "answer": 1,
        "explanation": "\"Bir yıl on iki aydır\" ifadesi kişisel yoruma dayanmaz, bilimsel ve takvimsel bir gerçektir."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde ÖZNEL (KİŞİSEL GÖRÜŞ) bir anlatım vardır?",
        "options": [
          "Atatürk 1881 yılında Selanik'te doğdu.",
          "Kitap fuarı bu hafta sonu açılacak.",
          "Bu tablodaki renkler insana büyük bir huzur veriyor.",
          "Türkiye üç tarafı denizlerle çevrili bir ülkedir."
        ],
        "answer": 2,
        "explanation": "Huzur verme hissi kişiden kişiye değişir, dolayısıyla öznel bir yargıdır."
      },
      {
        "q": "\"Geç yattığı için sabah uyanamadı.\" cümlesindeki anlam ilişkisi aşağıdakilerden hangisidir?",
        "options": [
          "Amaç - Sonuç",
          "Neden - Sonuç",
          "Koşul (Şart) - Sonuç",
          "Karşılaştırma"
        ],
        "answer": 1,
        "explanation": "Uyanamamasının \"nedeni\" geç yatmasıdır; sebep-sonuç ilişkisidir."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde bir KARŞILAŞTIRMA yapılmıştır?",
        "options": [
          "Ali bugün okula erkenden geldi.",
          "Ahmet, sınıftaki herkesten daha hızlı koşuyor.",
          "Annem akşam için çok güzel bir çorba yaptı.",
          "Bahçedeki papatyalar açmaya başladı."
        ],
        "answer": 1,
        "explanation": "\"Herkesten daha hızlı\" ifadesi Ahmet ile sınıftaki diğer öğrencileri karşılaştırır."
      },
      {
        "q": "\"Kitap okumak insanın ufkunu açar.\" cümlesindeki \"kitap\" sözcüğünün kullanımı nasıldır?",
        "options": [
          "Özel İfade",
          "Genel İfade",
          "Mecaz İfade",
          "Terim İfade"
        ],
        "answer": 1,
        "explanation": "Burada tek bir kitap değil, dünyadaki tüm kitaplar genel anlamda kastedilmiştir."
      },
      {
        "q": "\"Kilo vermek amacıyla her sabah düzenli yürüyüş yapıyor.\" cümlesinin anlam özelliği nedir?",
        "options": [
          "Amaç - Sonuç",
          "Neden - Sonuç",
          "Öznel Yargı",
          "Abartma"
        ],
        "answer": 0,
        "explanation": "Yürüyüş yapmasının \"amacı/hedefi\" kilo vermektir; amaç-sonuç ilişkisidir."
      },
      {
        "q": "Aşağıdakilerden hangisi \"Özelden Genele\" doğru yapılan bir sıralamadır?",
        "options": [
          "Varlık - Canlı - Bitki - Papatya",
          "Papatya - Çiçek - Bitki - Canlı",
          "Dünya - Türkiye - Ankara - Çankaya",
          "Meyve - Elma - Amasya Elması"
        ],
        "answer": 1,
        "explanation": "Papatya tek bir türdür, çiçek ve bitki daha geniş, canlı ise en genel kavramdır."
      },
      {
        "q": "1. \"Hastalandığı için doktora gitti.\"\n2. \"İyileşmek için ilaçlarını düzenli içti.\"\nBu iki cümlenin anlam özellikleri sırasıyla hangisidir?",
        "options": [
          "1: Neden-Sonuç, 2: Amaç-Sonuç",
          "1: Amaç-Sonuç, 2: Neden-Sonuç",
          "1: Öznel, 2: Nesnel",
          "1: Karşılaştırma, 2: Neden-Sonuç"
        ],
        "answer": 0,
        "explanation": "1. cümlede hastalık bir nedendir; 2. cümlede iyileşmek ulaşılmak istenen bir amaçtır."
      },
      {
        "q": "\"Bugün hava dünkünden daha soğuk.\" cümlesinde hangi iki durum karşılaştırılmıştır?",
        "options": [
          "Yaz ile kış",
          "Bugünün havası ile dünün havası",
          "Rüzgâr ile yağmur",
          "Sabah ile akşam"
        ],
        "answer": 1,
        "explanation": "\"Bugün\" ile \"dün\"ün hava sıcaklığı \"daha soğuk\" denilerek karşılaştırılmıştır."
      },
      {
        "q": "Aşağıdaki cümlelerden hangisi kanıtlanabilirlik açısından diğerlerinden FARKLIDIR?",
        "options": [
          "Ankara Türkiye'nin başkentidir.",
          "Dünya Güneş'in etrafında dolanır.",
          "Kırmızı en dikkat çekici ve güzel renktir.",
          "Su 100 derecede kaynar."
        ],
        "answer": 2,
        "explanation": "İlk iki ve son seçenek kanıtlanabilir Nesnel yargılardır; kırmızı rengin güzelliği ise Özneldir."
      }
    ]
  },
  "tr-u6": {
    "id": "tr-u6",
    "subject": "Türkçe",
    "unitNo": "6. Ünite",
    "title": "Yazım Kuralları ve Noktalama İşaretleri",
    "icon": "🇹🇷",
    "steps": [
      {
        "title": "Büyük Harflerin Kullanımı ve Özel İsimler",
        "badge": "1. Adım: Büyük Harfler",
        "slide": "assets/images/yazim_ve_noktalama.svg",
        "narration": "Merhaba sevgili kâşif! Doğru ve tertemiz yazmanın kurallarını keşfediyoruz. Cümleler daima büyük harfle başlar. Kişi adları, soyadları, ülke, şehir, cadde ve sokak adları özel isimdir ve mutlaka büyük harfle yazılır! Özel isimlere gelen ekler kesme işaretiyle ayrılır: \"Ali'nin\", \"İstanbul'a\" gibi. Ancak çoğul eki \"-ler / -lar\" kesmeyle ayrılmaz: \"Türkler\", \"Ahmetler\" şeklinde bitişik yazılır.",
        "audio": "assets/audio/courses/tr-u6_s1.mp3"
      },
      {
        "title": "Soru Eki \"-mi\" ve Bağlaç Olan \"-de / -da\"",
        "badge": "2. Adım: Kritik Ekler",
        "slide": "assets/images/yazim_ve_noktalama.svg",
        "narration": "İki altın kural: Soru eki olan \"mı, mi, mu, mü\" kendinden önceki sözcükten daima AYRI yazılır: \"Gelir misin?\", \"Bitti mi?\" İkincisi: Bağlaç olan \"de / da\" ayrı yazılır. İpucumuz şu: Cümleden \"de\"yi çıkardığında cümlenin anlamı bozulmuyorsa o bir bağlaçtır ve ayrı yazılır! \"Sen de gel.\" Ama yer bildiren bulunma eki bitişik yazılır: \"Kalemim evde kaldı.\"",
        "audio": "assets/audio/courses/tr-u6_s2.mp3"
      },
      {
        "title": "Nokta, Virgül ve İki Nokta",
        "badge": "3. Adım: Temel Noktalama",
        "slide": "assets/images/yazim_ve_noktalama.svg",
        "narration": "Tamamlanmış cümlelerin sonuna Nokta konur. Ayrıca saat ve dakikaların arasına tek nokta konur: 09.30 gibi! Virgül ise birbiri ardınca sıralanan eş görevli kelimeleri ayırır: \"Pazardan elma, armut, muz aldık.\" İki nokta ise kendisinden sonra açıklama yapılacak veya konuşma başlayacak yerlere konur.",
        "audio": "assets/audio/courses/tr-u6_s3.mp3"
      },
      {
        "title": "Ünlem, Soru ve Kesme İşareti",
        "badge": "4. Adım: Duygu ve Soru",
        "slide": "assets/images/yazim_ve_noktalama.svg",
        "narration": "Soru bildiren cümlelerin sonuna Soru İşareti konur. Sevinç, korku, heyecan veya şaşkınlık bildiren cümlelerin sonuna Ünlem İşareti konur: \"Eyvah, yangın var!\" Tırnak işareti ise başkasından aktarılan sözleri aynen göstermek için kullanılır. Noktalama işaretleri cümlelerimizin trafik ışıklarıdır, trafiği düzenler!",
        "audio": "assets/audio/courses/tr-u6_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Aşağıdaki cümlelerin hangisinde BÜYÜK HARFLERİN kullanımıyla ilgili bir YAZIM YANLIŞI vardır?",
        "options": [
          "Yarın ankara'ya gideceğiz.",
          "Mustafa Kemal Atatürk büyük bir liderdir.",
          "Cumhuriyet Bayramı'nı coşkuyla kutladık.",
          "Kardeşim Türkçe dersini çok seviyor."
        ],
        "answer": 0,
        "explanation": "Şehir isimleri özel isimdir ve mutlaka büyük harfle başlamalıdır: \"Ankara'ya\"."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde \"-de / -da\"nın yazımı DOĞRUDUR?",
        "options": [
          "Kitabımı okul da unuttum.",
          "Sen de bizimle sinemaya gelecek misin?",
          "Ev de ekmek kalmamış.",
          "Ahmet'de bugün çok neşeliydi."
        ],
        "answer": 1,
        "explanation": "\"Sen de\" cümlesindeki \"de\" bağlaçtır ve cümleden çıkarılınca anlam bozulmaz; ayrı yazılması doğrudur."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde soru eki \"-mi\" YANLIŞ yazılmıştır?",
        "options": [
          "Ödevlerini bitirdin mi?",
          "Bizimle parka gelirmisin?",
          "Bu kitabı sen mi okudun?",
          "Yarın hava güzel olacak mı?"
        ],
        "answer": 1,
        "explanation": "Soru eki daima kendinden önceki kelimeden ayrı yazılır: \"gelir misin?\" olmalıdır."
      },
      {
        "q": "TDK kurallarına göre saat ve dakikaların arasına hangi noktalama işareti konur?",
        "options": [
          "İki Nokta (:)",
          "Tek Nokta (.)",
          "Virgül (,)",
          "Kısa Çizgi (-)"
        ],
        "answer": 1,
        "explanation": "Türkçemizde dijital saatlerin aksine yazı dilinde saat ve dakika arasına TEK NOKTA konur: 08.30."
      },
      {
        "q": "\"Pazardan elma ( ) armut ( ) çilek ve kiraz aldık ( )\" cümlesinde yay ayraçlara sırasıyla hangi noktalama işaretleri gelmelidir?",
        "options": [
          ", , .",
          ". , !",
          ", . ?",
          ": , ."
        ],
        "answer": 0,
        "explanation": "Eş görevli meyve isimleri arasına virgül, cümlenin sonuna ise nokta konur: (,), (,), (.)."
      },
      {
        "q": "\"Eyvah, süt taştı ( )\" cümlesinin sonuna hangi noktalama işareti getirilmelidir?",
        "options": [
          "Nokta (.)",
          "Soru İşareti (?)",
          "Ünlem İşareti (!)",
          "İki Nokta (:)"
        ],
        "answer": 2,
        "explanation": "Korku, telaş ve heyecan bildiren ünlem bildiren ifadenin sonuna Ünlem İşareti (!) konur."
      },
      {
        "q": "Özel isimlere getirilen çekim eklerini ayırmak için hangi noktalama işareti kullanılır?",
        "options": [
          "Kısa Çizgi",
          "Tırnak İşareti",
          "Kesme İşareti",
          "Yay Ayraç"
        ],
        "answer": 2,
        "explanation": "Özel adlara gelen iyelik ve durum ekleri Kesme İşareti (') ile ayrılır: \"Ali'nin\"."
      },
      {
        "q": "Aşağıdaki kelimelerden hangisine gelen \"-ler / -lar\" eki KESME İŞARETİYLE AYRILMAZ?",
        "options": [
          "Türkler",
          "Ankara'da",
          "Mehmet'in",
          "Türkiye'ye"
        ],
        "answer": 0,
        "explanation": "Özel isimlere gelen yapım ekleri ve çoğul ekleri (-ler, -lar) kesme işaretiyle ayrılmaz: \"Türkler\"."
      },
      {
        "q": "\"Öğretmenimiz ( ) ( )Yarın dersimiz bahçede olacak( ) dedi( )\" cümlesinde boşluklara sırasıyla ne gelmelidir?",
        "options": [
          ": \" \" .",
          ", \" \" !",
          "; ( ) .",
          ". - - ."
        ],
        "answer": 0,
        "explanation": "Konuşmadan önce iki nokta (:), aktarılan cümlenin başına ve sonuna tırnak (\" \"), cümlenin sonuna nokta konur."
      },
      {
        "q": "Satır sonuna sığmayan sözcükler hecelerinden bölünürken satır sonuna hangi işaret konur?",
        "options": [
          "Uzun Çizgi",
          "Kısa Çizgi",
          "Nokta",
          "Virgül"
        ],
        "answer": 1,
        "explanation": "Satır sonuna sığmayan kelimeleri hecesinden bölmek için Kısa Çizgi (-) kullanılır."
      }
    ],
    "quiz": [
      {
        "q": "Aşağıdaki cümlelerin hangisinde BÜYÜK HARFLERİN kullanımıyla ilgili bir YAZIM YANLIŞI vardır?",
        "options": [
          "Yarın ankara'ya gideceğiz.",
          "Mustafa Kemal Atatürk büyük bir liderdir.",
          "Cumhuriyet Bayramı'nı coşkuyla kutladık.",
          "Kardeşim Türkçe dersini çok seviyor."
        ],
        "answer": 0,
        "explanation": "Şehir isimleri özel isimdir ve mutlaka büyük harfle başlamalıdır: \"Ankara'ya\"."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde \"-de / -da\"nın yazımı DOĞRUDUR?",
        "options": [
          "Kitabımı okul da unuttum.",
          "Sen de bizimle sinemaya gelecek misin?",
          "Ev de ekmek kalmamış.",
          "Ahmet'de bugün çok neşeliydi."
        ],
        "answer": 1,
        "explanation": "\"Sen de\" cümlesindeki \"de\" bağlaçtır ve cümleden çıkarılınca anlam bozulmaz; ayrı yazılması doğrudur."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde soru eki \"-mi\" YANLIŞ yazılmıştır?",
        "options": [
          "Ödevlerini bitirdin mi?",
          "Bizimle parka gelirmisin?",
          "Bu kitabı sen mi okudun?",
          "Yarın hava güzel olacak mı?"
        ],
        "answer": 1,
        "explanation": "Soru eki daima kendinden önceki kelimeden ayrı yazılır: \"gelir misin?\" olmalıdır."
      },
      {
        "q": "TDK kurallarına göre saat ve dakikaların arasına hangi noktalama işareti konur?",
        "options": [
          "İki Nokta (:)",
          "Tek Nokta (.)",
          "Virgül (,)",
          "Kısa Çizgi (-)"
        ],
        "answer": 1,
        "explanation": "Türkçemizde dijital saatlerin aksine yazı dilinde saat ve dakika arasına TEK NOKTA konur: 08.30."
      },
      {
        "q": "\"Pazardan elma ( ) armut ( ) çilek ve kiraz aldık ( )\" cümlesinde yay ayraçlara sırasıyla hangi noktalama işaretleri gelmelidir?",
        "options": [
          ", , .",
          ". , !",
          ", . ?",
          ": , ."
        ],
        "answer": 0,
        "explanation": "Eş görevli meyve isimleri arasına virgül, cümlenin sonuna ise nokta konur: (,), (,), (.)."
      },
      {
        "q": "\"Eyvah, süt taştı ( )\" cümlesinin sonuna hangi noktalama işareti getirilmelidir?",
        "options": [
          "Nokta (.)",
          "Soru İşareti (?)",
          "Ünlem İşareti (!)",
          "İki Nokta (:)"
        ],
        "answer": 2,
        "explanation": "Korku, telaş ve heyecan bildiren ünlem bildiren ifadenin sonuna Ünlem İşareti (!) konur."
      },
      {
        "q": "Özel isimlere getirilen çekim eklerini ayırmak için hangi noktalama işareti kullanılır?",
        "options": [
          "Kısa Çizgi",
          "Tırnak İşareti",
          "Kesme İşareti",
          "Yay Ayraç"
        ],
        "answer": 2,
        "explanation": "Özel adlara gelen iyelik ve durum ekleri Kesme İşareti (') ile ayrılır: \"Ali'nin\"."
      },
      {
        "q": "Aşağıdaki kelimelerden hangisine gelen \"-ler / -lar\" eki KESME İŞARETİYLE AYRILMAZ?",
        "options": [
          "Türkler",
          "Ankara'da",
          "Mehmet'in",
          "Türkiye'ye"
        ],
        "answer": 0,
        "explanation": "Özel isimlere gelen yapım ekleri ve çoğul ekleri (-ler, -lar) kesme işaretiyle ayrılmaz: \"Türkler\"."
      },
      {
        "q": "\"Öğretmenimiz ( ) ( )Yarın dersimiz bahçede olacak( ) dedi( )\" cümlesinde boşluklara sırasıyla ne gelmelidir?",
        "options": [
          ": \" \" .",
          ", \" \" !",
          "; ( ) .",
          ". - - ."
        ],
        "answer": 0,
        "explanation": "Konuşmadan önce iki nokta (:), aktarılan cümlenin başına ve sonuna tırnak (\" \"), cümlenin sonuna nokta konur."
      },
      {
        "q": "Satır sonuna sığmayan sözcükler hecelerinden bölünürken satır sonuna hangi işaret konur?",
        "options": [
          "Uzun Çizgi",
          "Kısa Çizgi",
          "Nokta",
          "Virgül"
        ],
        "answer": 1,
        "explanation": "Satır sonuna sığmayan kelimeleri hecesinden bölmek için Kısa Çizgi (-) kullanılır."
      }
    ]
  },
  "tr-u7": {
    "id": "tr-u7",
    "subject": "Türkçe",
    "unitNo": "7. Ünite",
    "title": "Metin Türleri, Görsel Okuma ve Söz Sanatları",
    "icon": "🇹🇷",
    "steps": [
      {
        "title": "Görsel Okuma ve Grafik Yorumlama",
        "badge": "1. Adım: Görsel Okuma",
        "slide": "assets/images/gorsel_okuma_soz_sanatlari.svg",
        "narration": "Merhaba sevgili kâşif! Yazıların yanında resimler, fotoğraflar, simgeler ve grafikler de konuşur! Bir tablodaki verileri okumak, trafik levhalarının taşıdığı uyarıları kavramak ya da bir karikatürün verdiği ana fikri anlamak \"Görsel Okuma\"dır. Dikkatli bir gözlemci, resimdeki küçük bir ayrıntıdan kahramanın duygusunu hemen çözebilir.",
        "audio": "assets/audio/courses/tr-u7_s1.mp3"
      },
      {
        "title": "Benzetme Sanatı (Teşbih)",
        "badge": "2. Adım: Benzetme",
        "slide": "assets/images/gorsel_okuma_soz_sanatlari.svg",
        "narration": "Söz sanatları dilimize büyüleyici bir zarafet katar. İlk sanatımız Benzetme! Aralarında ilgi bulunan iki şeyden zayıf olanın güçlü olana benzetilmesidir. En çok kullanılan anahtar kelime \"gibi\" sözcüğüdür! Örneğin: \"Aslan gibi cesur askerlerimiz\", \"Pamuk gibi yumuşak ekmek\", \"İnci gibi parlayan dişler\". Benzetme anlatımı zenginleştirir.",
        "audio": "assets/audio/courses/tr-u7_s2.mp3"
      },
      {
        "title": "Kişileştirme Sanatı (Teşhis)",
        "badge": "3. Adım: Kişileştirme",
        "slide": "assets/images/gorsel_okuma_soz_sanatlari.svg",
        "narration": "İnsana ait konuşma, gülme, ağlama veya düşünme gibi özellikleri insan dışındaki varlıklara ya da hayvanlara aktarma sanatına Kişileştirme denir. Örneğin: \"Güneş neşeyle gülümsedi.\", \"Rüzgâr kulağıma şarkılar fısıldadı.\", \"Ağaçlar hüzünle yapraklarını döktü.\" Bu sanatı masallarda ve fabllarda çok sık görürüz!",
        "audio": "assets/audio/courses/tr-u7_s3.mp3"
      },
      {
        "title": "Betimleme (Tasvir): Kelimelerle Resim Çizmek",
        "badge": "4. Adım: Betimleme",
        "slide": "assets/images/gorsel_okuma_soz_sanatlari.svg",
        "narration": "Bir yeri, kişiyi veya nesneyi okuyucunun gözünde canlandıracak şekilde ayrıntılarıyla anlatma sanatına Betimleme denir. Renkler, kokular, sesler, şekiller öyle güzel anlatılır ki gözlerimizi kapattığımızda kendimizi o manzaranın tam içinde hissederiz. Kelimeler adeta bir fırça, cümleler ise birer tablodur!",
        "audio": "assets/audio/courses/tr-u7_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "\"Dedemin pamuk gibi beyaz saçları vardı.\" cümlesinde hangi SÖZ SANATI kullanılmıştır?",
        "options": [
          "Kişileştirme",
          "Benzetme",
          "Abartma",
          "Karşıtlık"
        ],
        "answer": 1,
        "explanation": "Saçların beyazlığı ve yumuşaklığı \"pamuk gibi\" denilerek pamuğa benzetilmiştir."
      },
      {
        "q": "\"Kızgın rüzgâr pencereleri dövüyor, öfkeyle uluyordu.\" cümlesinde kullanılan söz sanatı hangisidir?",
        "options": [
          "Kişileştirme",
          "Benzetme",
          "Abartma",
          "Konuşturma"
        ],
        "answer": 0,
        "explanation": "Rüzgâra insan gibi \"kızgınlık ve öfkeyle uluma\" özellikleri yüklendiği için Kişileştirmedir."
      },
      {
        "q": "Görsel okuma yaparken aşağıdakilerden hangisine dikkat edilmelidir?",
        "options": [
          "Yalnızca yazıların büyüklüğüne",
          "Görseldeki renk, şekil, simge ve duygusal ifadelere",
          "Resmin hangi kâğıda basıldığına",
          "Fotoğrafçının doğum yılına"
        ],
        "answer": 1,
        "explanation": "Görsel okuma, renklerin, sembollerin, karakter ifadelerinin ve kompozisyonun anlamını kavramaktır."
      },
      {
        "q": "\"Yeşil panjurlu, ahşap iki katlı şirin bir ev; bahçesinde rengârenk güller ve şırıldayan minik bir dere vardı.\" Bu cümle hangi anlatım biçimine örnektir?",
        "options": [
          "Tartışma",
          "Betimleme (Tasvir)",
          "Özetleme",
          "Eleştiri"
        ],
        "answer": 1,
        "explanation": "Mekânın gözümüzde canlanacak şekilde renk ve ayrıntılarla tasvir edilmesine Betimleme denir."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde KİŞİLEŞTİRME sanatı yapılmıştır?",
        "options": [
          "Kuşlar gökyüzünde kanat çırparak uçtu.",
          "Güneş bulutların arkasından bize göz kırptı.",
          "Yaz tatilinde yüzmeyi çok seviyorum.",
          "Kütüphaneden üç yeni roman ödünç aldım."
        ],
        "answer": 1,
        "explanation": "Güneşin \"göz kırpması\", insana ait bir hareketin doğaya aktarılmasıdır (Kişileştirme)."
      },
      {
        "q": "\"Bebek melekler kadar masum uyuyordu.\" cümlesindeki BENZETME EDATI hangisidir?",
        "options": [
          "Bebek",
          "Melekler",
          "Kadar",
          "Uyuyordu"
        ],
        "answer": 2,
        "explanation": "\"Kadar\" ve \"gibi\" sözcükleri benzetme ilişkisi kuran edatlardır."
      },
      {
        "q": "Trafikte kırmızı ışığın yanması ne anlama gelen bir görsel semboldür?",
        "options": [
          "Geç",
          "Dikkatli geç",
          "Dur",
          "Hızlan"
        ],
        "answer": 2,
        "explanation": "Kırmızı ışık evrensel bir görsel sembol olarak \"Dur\" uyarısını ifade eder."
      },
      {
        "q": "\"Kelimelerle resim çizme sanatı\" olarak tanımlanan anlatım türü hangisidir?",
        "options": [
          "Öyküleme",
          "Betimleme",
          "Tanımlama",
          "Örneklendirme"
        ],
        "answer": 1,
        "explanation": "Varlıkları ve mekânları duyulara hitap eden özellikleriyle canlandırmaya Betimleme denir."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde BENZETME unsuru vardır?",
        "options": [
          "Buz gibi soğuk sudan bir yudum içti.",
          "Akşam olunca lambalar tek tek yandı.",
          "Okul zilinin sesiyle öğrenciler bahçeye koştu.",
          "Sabah erkenden kalkıp yürüyüş yaptı."
        ],
        "answer": 0,
        "explanation": "\"Buz gibi soğuk su\" ifadesinde suyun soğukluğu buza benzetilmiştir."
      },
      {
        "q": "Bir kütüphanede ağzına parmağını götürmüş insan görseli neyi anlatır?",
        "options": [
          "Kitap oku",
          "Sessiz ol",
          "Koşma",
          "Yemek ye"
        ],
        "answer": 1,
        "explanation": "Parmağın dudağa götürülmesi evrensel bir sembol olarak \"Sessiz Olunuz\" uyarısıdır."
      }
    ],
    "quiz": [
      {
        "q": "\"Dedemin pamuk gibi beyaz saçları vardı.\" cümlesinde hangi SÖZ SANATI kullanılmıştır?",
        "options": [
          "Kişileştirme",
          "Benzetme",
          "Abartma",
          "Karşıtlık"
        ],
        "answer": 1,
        "explanation": "Saçların beyazlığı ve yumuşaklığı \"pamuk gibi\" denilerek pamuğa benzetilmiştir."
      },
      {
        "q": "\"Kızgın rüzgâr pencereleri dövüyor, öfkeyle uluyordu.\" cümlesinde kullanılan söz sanatı hangisidir?",
        "options": [
          "Kişileştirme",
          "Benzetme",
          "Abartma",
          "Konuşturma"
        ],
        "answer": 0,
        "explanation": "Rüzgâra insan gibi \"kızgınlık ve öfkeyle uluma\" özellikleri yüklendiği için Kişileştirmedir."
      },
      {
        "q": "Görsel okuma yaparken aşağıdakilerden hangisine dikkat edilmelidir?",
        "options": [
          "Yalnızca yazıların büyüklüğüne",
          "Görseldeki renk, şekil, simge ve duygusal ifadelere",
          "Resmin hangi kâğıda basıldığına",
          "Fotoğrafçının doğum yılına"
        ],
        "answer": 1,
        "explanation": "Görsel okuma, renklerin, sembollerin, karakter ifadelerinin ve kompozisyonun anlamını kavramaktır."
      },
      {
        "q": "\"Yeşil panjurlu, ahşap iki katlı şirin bir ev; bahçesinde rengârenk güller ve şırıldayan minik bir dere vardı.\" Bu cümle hangi anlatım biçimine örnektir?",
        "options": [
          "Tartışma",
          "Betimleme (Tasvir)",
          "Özetleme",
          "Eleştiri"
        ],
        "answer": 1,
        "explanation": "Mekânın gözümüzde canlanacak şekilde renk ve ayrıntılarla tasvir edilmesine Betimleme denir."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde KİŞİLEŞTİRME sanatı yapılmıştır?",
        "options": [
          "Kuşlar gökyüzünde kanat çırparak uçtu.",
          "Güneş bulutların arkasından bize göz kırptı.",
          "Yaz tatilinde yüzmeyi çok seviyorum.",
          "Kütüphaneden üç yeni roman ödünç aldım."
        ],
        "answer": 1,
        "explanation": "Güneşin \"göz kırpması\", insana ait bir hareketin doğaya aktarılmasıdır (Kişileştirme)."
      },
      {
        "q": "\"Bebek melekler kadar masum uyuyordu.\" cümlesindeki BENZETME EDATI hangisidir?",
        "options": [
          "Bebek",
          "Melekler",
          "Kadar",
          "Uyuyordu"
        ],
        "answer": 2,
        "explanation": "\"Kadar\" ve \"gibi\" sözcükleri benzetme ilişkisi kuran edatlardır."
      },
      {
        "q": "Trafikte kırmızı ışığın yanması ne anlama gelen bir görsel semboldür?",
        "options": [
          "Geç",
          "Dikkatli geç",
          "Dur",
          "Hızlan"
        ],
        "answer": 2,
        "explanation": "Kırmızı ışık evrensel bir görsel sembol olarak \"Dur\" uyarısını ifade eder."
      },
      {
        "q": "\"Kelimelerle resim çizme sanatı\" olarak tanımlanan anlatım türü hangisidir?",
        "options": [
          "Öyküleme",
          "Betimleme",
          "Tanımlama",
          "Örneklendirme"
        ],
        "answer": 1,
        "explanation": "Varlıkları ve mekânları duyulara hitap eden özellikleriyle canlandırmaya Betimleme denir."
      },
      {
        "q": "Aşağıdaki cümlelerin hangisinde BENZETME unsuru vardır?",
        "options": [
          "Buz gibi soğuk sudan bir yudum içti.",
          "Akşam olunca lambalar tek tek yandı.",
          "Okul zilinin sesiyle öğrenciler bahçeye koştu.",
          "Sabah erkenden kalkıp yürüyüş yaptı."
        ],
        "answer": 0,
        "explanation": "\"Buz gibi soğuk su\" ifadesinde suyun soğukluğu buza benzetilmiştir."
      },
      {
        "q": "Bir kütüphanede ağzına parmağını götürmüş insan görseli neyi anlatır?",
        "options": [
          "Kitap oku",
          "Sessiz ol",
          "Koşma",
          "Yemek ye"
        ],
        "answer": 1,
        "explanation": "Parmağın dudağa götürülmesi evrensel bir sembol olarak \"Sessiz Olunuz\" uyarısıdır."
      }
    ]
  },
  "mat-u1": {
    "id": "mat-u1",
    "subject": "Matematik",
    "unitNo": "1. Ünite",
    "title": "Doğal Sayılarla Toplama ve Çıkarma",
    "icon": "📐",
    "steps": [
      {
        "title": "4, 5 ve 6 Basamaklı Doğal Sayılar",
        "badge": "1. Adım: Basamak & Bölük",
        "slide": "assets/images/dogal_sayilar_dort_islem.svg",
        "narration": "Merhaba sevgili dördüncü sınıf matematik kâşifim! Artık binlerin, yüz binlerin dünyasındayız! Büyük sayıları kolayca okumak için sayıları sağdan sola üçerli gruplara yani bölüklere ayırırız. İlk üçlü \"Birler Bölüğü\", ikinci üçlü ise \"Binler Bölüğü\"dür. Örneğin 425.680 sayısını okurken önce binler bölüğünü söyler, araya \"bin\" kelimesini koyar ve birler bölüğünü ekleriz: Dört yüz yirmi beş bin altı yüz seksen!",
        "audio": "assets/audio/courses/mat-u1_s1.mp3"
      },
      {
        "title": "Basamak Değeri ve Sayıları Yuvarlama",
        "badge": "2. Adım: Değerler & Yuvarlama",
        "slide": "assets/images/dogal_sayilar_dort_islem.svg",
        "narration": "Bir rakamın bulunduğu basamağa göre aldığı değere \"Basamak Değeri\" denir. Sayıları en yakın onluğa yuvarlarken birler basamağına bakarız: 5 ve üzeriyse üst onluğa, 5'ten küçükse alt onluğa yuvarlarız. Yüzlüğe yuvarlarken ise onlar basamağına bakarız. Yuvarlama işlemi bize zihinden hesap yaparken ve tahmin ederken müthiş bir hız kazandırır!",
        "audio": "assets/audio/courses/mat-u1_s2.mp3"
      },
      {
        "title": "Eldeli Toplama İşlemi",
        "badge": "3. Adım: Toplama",
        "slide": "assets/images/dogal_sayilar_dort_islem.svg",
        "narration": "Toplama işlemine daima en sağdan, yani birler basamağından başlarız. Birler basamağındaki toplam 10 veya üzerindeyse, eldeyi hemen onlar basamağının üzerine yazarız. Eldeyi unutmamak toplamanın en kritik sırrıdır! Basamakları alt alta tam hizalamak ise işlem hatalarını tamamen önler.",
        "audio": "assets/audio/courses/mat-u1_s3.mp3"
      },
      {
        "title": "Onluk Bozarak Çıkarma İşlemi",
        "badge": "4. Adım: Çıkarma",
        "slide": "assets/images/dogal_sayilar_dort_islem.svg",
        "narration": "Çıkarma işleminde üstteki rakam alttakinden küçükse sol komşuya gider ve bir onluk bozarız! Artık sayımız on fazlası olur, komşumuz ise bir azalır. Komşuda sıfır varsa bir yandaki basamağa devam ederiz. Çıkarma işlemimizi kontrol etmek için: Çıkan ile Farkı topladığımızda mutlaka Eksilen sayıyı vermelidir!",
        "audio": "assets/audio/courses/mat-u1_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "\"Dört yüz altı bin seksen iki\" doğal sayısının rakamlarla yazılışı hangisidir?",
        "options": [
          "460.082",
          "406.820",
          "406.082",
          "46.082"
        ],
        "answer": 2,
        "explanation": "Binler bölüğü 406, birler bölüğü 082 olduğundan sayımız 406.082'dir."
      },
      {
        "q": "748.256 sayısındaki \"4\" rakamının BASAMAK DEĞERİ kaçtır?",
        "options": [
          "400",
          "4.000",
          "40.000",
          "400.000"
        ],
        "answer": 2,
        "explanation": "\"4\" rakamı On Binler basamağında yer aldığı için basamak değeri 4 × 10.000 = 40.000'dir."
      },
      {
        "q": "3.478 sayısı en yakın ONLUĞA yuvarlandığında hangi sayı elde edilir?",
        "options": [
          "3.470",
          "3.480",
          "3.500",
          "3.400"
        ],
        "answer": 1,
        "explanation": "Birler basamağındaki rakam 8 (5 ve üzeri) olduğu için onlar basamağı bir artar: 3.480."
      },
      {
        "q": "6.284 sayısı en yakın YÜZLÜĞE yuvarlandığında hangi sayı elde edilir?",
        "options": [
          "6.200",
          "6.280",
          "6.300",
          "6.000"
        ],
        "answer": 2,
        "explanation": "Onlar basamağında 8 rakamı olduğu için (5 ve üzeri) yüzler basamağı bir yukarı yuvarlanır: 6.300."
      },
      {
        "q": "4.856 + 3.475 işleminin sonucu kaçtır?",
        "options": [
          "8.221",
          "8.331",
          "8.321",
          "7.331"
        ],
        "answer": 1,
        "explanation": "6+5=11 (elde 1), 5+7+1=13 (elde 1), 8+4+1=13 (elde 1), 4+3+1=8. Toplam = 8.331."
      },
      {
        "q": "9.000 - 3.456 çıkarma işleminin sonucu kaçtır?",
        "options": [
          "5.544",
          "5.644",
          "6.544",
          "5.554"
        ],
        "answer": 0,
        "explanation": "Onluk ve yüzlük bozarak çıkarma yapıldığında 9.000 - 3.456 = 5.544 bulunur."
      },
      {
        "q": "Bir çıkarma işleminde Çıkan 2.450 ve Fark 1.830 ise EKSİLEN sayı kaçtır?",
        "options": [
          "620",
          "4.280",
          "3.280",
          "4.380"
        ],
        "answer": 1,
        "explanation": "Eksilen = Çıkan + Fark formülünden: 2.450 + 1.830 = 4.280 bulunur."
      },
      {
        "q": "5, 0, 8, 3 rakamları birer kez kullanılarak yazılabilecek 4 basamaklı EN BÜYÜK doğal sayı kaçtır?",
        "options": [
          "8.530",
          "8.503",
          "5.830",
          "8.350"
        ],
        "answer": 0,
        "explanation": "Rakamları büyükten küçüğe sıraladığımızda en büyük sayı 8.530 olur."
      },
      {
        "q": "5, 0, 8, 3 rakamları birer kez kullanılarak yazılabilecek 4 basamaklı EN KÜÇÜK doğal sayı kaçtır?",
        "options": [
          "0.358",
          "3.058",
          "3.508",
          "3.085"
        ],
        "answer": 1,
        "explanation": "Sıfır başa gelemeyeceği için en küçük rakam 3 başa gelir, sonra sıfır ve diğerleri: 3.058."
      },
      {
        "q": "Bir kütüphanede 3.420 hikâye kitabı, hikâye kitaplarından 850 fazla roman vardır. Kütüphanede toplam kaç kitap vardır?",
        "options": [
          "4.270",
          "6.840",
          "7.690",
          "7.590"
        ],
        "answer": 2,
        "explanation": "Romanlar = 3.420 + 850 = 4.270. Toplam kitap = 3.420 + 4.270 = 7.690'dır."
      }
    ],
    "quiz": [
      {
        "q": "\"Dört yüz altı bin seksen iki\" doğal sayısının rakamlarla yazılışı hangisidir?",
        "options": [
          "460.082",
          "406.820",
          "406.082",
          "46.082"
        ],
        "answer": 2,
        "explanation": "Binler bölüğü 406, birler bölüğü 082 olduğundan sayımız 406.082'dir."
      },
      {
        "q": "748.256 sayısındaki \"4\" rakamının BASAMAK DEĞERİ kaçtır?",
        "options": [
          "400",
          "4.000",
          "40.000",
          "400.000"
        ],
        "answer": 2,
        "explanation": "\"4\" rakamı On Binler basamağında yer aldığı için basamak değeri 4 × 10.000 = 40.000'dir."
      },
      {
        "q": "3.478 sayısı en yakın ONLUĞA yuvarlandığında hangi sayı elde edilir?",
        "options": [
          "3.470",
          "3.480",
          "3.500",
          "3.400"
        ],
        "answer": 1,
        "explanation": "Birler basamağındaki rakam 8 (5 ve üzeri) olduğu için onlar basamağı bir artar: 3.480."
      },
      {
        "q": "6.284 sayısı en yakın YÜZLÜĞE yuvarlandığında hangi sayı elde edilir?",
        "options": [
          "6.200",
          "6.280",
          "6.300",
          "6.000"
        ],
        "answer": 2,
        "explanation": "Onlar basamağında 8 rakamı olduğu için (5 ve üzeri) yüzler basamağı bir yukarı yuvarlanır: 6.300."
      },
      {
        "q": "4.856 + 3.475 işleminin sonucu kaçtır?",
        "options": [
          "8.221",
          "8.331",
          "8.321",
          "7.331"
        ],
        "answer": 1,
        "explanation": "6+5=11 (elde 1), 5+7+1=13 (elde 1), 8+4+1=13 (elde 1), 4+3+1=8. Toplam = 8.331."
      },
      {
        "q": "9.000 - 3.456 çıkarma işleminin sonucu kaçtır?",
        "options": [
          "5.544",
          "5.644",
          "6.544",
          "5.554"
        ],
        "answer": 0,
        "explanation": "Onluk ve yüzlük bozarak çıkarma yapıldığında 9.000 - 3.456 = 5.544 bulunur."
      },
      {
        "q": "Bir çıkarma işleminde Çıkan 2.450 ve Fark 1.830 ise EKSİLEN sayı kaçtır?",
        "options": [
          "620",
          "4.280",
          "3.280",
          "4.380"
        ],
        "answer": 1,
        "explanation": "Eksilen = Çıkan + Fark formülünden: 2.450 + 1.830 = 4.280 bulunur."
      },
      {
        "q": "5, 0, 8, 3 rakamları birer kez kullanılarak yazılabilecek 4 basamaklı EN BÜYÜK doğal sayı kaçtır?",
        "options": [
          "8.530",
          "8.503",
          "5.830",
          "8.350"
        ],
        "answer": 0,
        "explanation": "Rakamları büyükten küçüğe sıraladığımızda en büyük sayı 8.530 olur."
      },
      {
        "q": "5, 0, 8, 3 rakamları birer kez kullanılarak yazılabilecek 4 basamaklı EN KÜÇÜK doğal sayı kaçtır?",
        "options": [
          "0.358",
          "3.058",
          "3.508",
          "3.085"
        ],
        "answer": 1,
        "explanation": "Sıfır başa gelemeyeceği için en küçük rakam 3 başa gelir, sonra sıfır ve diğerleri: 3.058."
      },
      {
        "q": "Bir kütüphanede 3.420 hikâye kitabı, hikâye kitaplarından 850 fazla roman vardır. Kütüphanede toplam kaç kitap vardır?",
        "options": [
          "4.270",
          "6.840",
          "7.690",
          "7.590"
        ],
        "answer": 2,
        "explanation": "Romanlar = 3.420 + 850 = 4.270. Toplam kitap = 3.420 + 4.270 = 7.690'dır."
      }
    ]
  },
  "mat-u2": {
    "id": "mat-u2",
    "subject": "Matematik",
    "unitNo": "2. Ünite",
    "title": "Doğal Sayılarla Çarpma ve Bölme",
    "icon": "✖️",
    "steps": [
      {
        "title": "Çarpma İşlemi ve Basamak Kaydırma Kuralı",
        "badge": "1. Adım: Çarpma",
        "slide": "assets/images/carpma_bolme_islemleri.svg",
        "narration": "Merhaba kâşif! Çarpma işlemi tekrarlı toplamaların süper kahramanıdır. İki basamaklı sayılarla çarpma yaparken en önemli adım: İkinci çarpanın onlar basamağındaki rakamla çarparken bulduğumuz sonucu bir basamak SOLA kaydırarak yazmaktır! Çünkü onlar basamağıyla çarpıyoruz. Basamakları düzgün kaydırıp toplarsak sonuca kusursuz ulaşırız.",
        "audio": "assets/audio/courses/mat-u2_s1.mp3"
      },
      {
        "title": "Kısa Yoldan 10, 100 ve 1000 ile Çarpma",
        "badge": "2. Adım: Hızlı Çarpma",
        "slide": "assets/images/carpma_bolme_islemleri.svg",
        "narration": "Zihinden işlem yapmak çok kolay! Bir sayıyı 10 ile çarparken sağına 1 sıfır, 100 ile çarparken 2 sıfır, 1000 ile çarparken 3 sıfır ekleriz. Örneğin 45 ile 100'ü çarparken işlem yapmaya gerek yok; 45'in sağına 2 sıfır koyarız ve cevap hemen 4500 olur!",
        "audio": "assets/audio/courses/mat-u2_s2.mp3"
      },
      {
        "title": "Bölme İşlemi ve Kalan İlişkisi",
        "badge": "3. Adım: Bölme & Kalan",
        "slide": "assets/images/carpma_bolme_islemleri.svg",
        "narration": "Bölme işlemi paylaştırmaktır. Bölünen, Bölen, Bölüm ve Kalandan oluşur. İşte matematiğin altın kuralı: Kalan sayı DAİMA bölenden KÜÇÜK olmak zorundadır! Eğer kalan bölene eşit ya da büyük çıkarsa bölme işlemimiz eksik kalmış demektir. Kalan sıfır ise buna kalansız bölme deriz.",
        "audio": "assets/audio/courses/mat-u2_s3.mp3"
      },
      {
        "title": "Bölüneni Bulma Formülü ve Sağlama",
        "badge": "4. Adım: Formül & Kontrol",
        "slide": "assets/images/carpma_bolme_islemleri.svg",
        "narration": "Bir bölme işleminde bölünen sayıyı bulmak için şu formülü kullanırız: Bölünen = (Bölen × Bölüm) + Kalan. Örneğin bölen 8, bölüm 12 ve kalan 5 ise: 8 çarpı 12 eşittir 96, 5 eklersek bölünen sayı 101'dir! İşte bu kadar kolay.",
        "audio": "assets/audio/courses/mat-u2_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "145 × 24 çarpma işleminin sonucu kaçtır?",
        "options": [
          "3.480",
          "3.380",
          "2.900",
          "3.580"
        ],
        "answer": 0,
        "explanation": "145 × 4 = 580. 145 × 20 = 2.900. 580 + 2.900 = 3.480'dir."
      },
      {
        "q": "78 sayısını 100 ile KISA YOLDAN çarptığımızda sonuç kaç olur?",
        "options": [
          "780",
          "7.800",
          "78.000",
          "708"
        ],
        "answer": 1,
        "explanation": "100 ile kısa yoldan çarparken sayının sağına 2 sıfır eklenir: 7.800."
      },
      {
        "q": "Bölen sayının \"9\" olduğu bir bölme işleminde KALAN en fazla kaç olabilir?",
        "options": [
          "9",
          "8",
          "10",
          "7"
        ],
        "answer": 1,
        "explanation": "Kalan sayı daima bölenden küçük olmalıdır (Kalan < Bölen). Bölen 9 ise kalan en çok 8 olabilir."
      },
      {
        "q": "Bir bölme işleminde bölen 15, bölüm 8 ve kalan 6 ise BÖLÜNEN sayı kaçtır?",
        "options": [
          "120",
          "126",
          "135",
          "114"
        ],
        "answer": 1,
        "explanation": "Bölünen = (Bölen × Bölüm) + Kalan ➜ (15 × 8) + 6 = 120 + 6 = 126."
      },
      {
        "q": "960 ÷ 10 işleminin sonucu kısa yoldan nasıl bulunur?",
        "options": [
          "Sağına bir sıfır eklenir",
          "Sonundaki bir sıfır silinir",
          "İkiye bölünür",
          "10 ile toplanır"
        ],
        "answer": 1,
        "explanation": "10'a bölerken sayının sonundaki bir sıfır silinir: 960 ÷ 10 = 96."
      },
      {
        "q": "848 ÷ 4 işleminin sonucu kaçtır?",
        "options": [
          "212",
          "22",
          "202",
          "221"
        ],
        "answer": 0,
        "explanation": "8'de 4 iki kere, 4'te 4 bir kere, 8'de 4 iki kere vardır: Sonuç 212."
      },
      {
        "q": "Tanesi 45 TL olan defterlerden 18 tane alan kırtasiyeci kaç TL öder?",
        "options": [
          "720",
          "810",
          "850",
          "900"
        ],
        "answer": 1,
        "explanation": "45 × 18 = 810 TL öder."
      },
      {
        "q": "540 öğrenci 12 kişilik servis araçlarına bindirilecektir. Kaç servise ihtiyaç vardır?",
        "options": [
          "40",
          "45",
          "50",
          "52"
        ],
        "answer": 1,
        "explanation": "540 ÷ 12 = 45 servis aracına ihtiyaç vardır."
      },
      {
        "q": "Bir çarpma işleminde çarpanlardan biri 0 ise sonuç daima kaç olur?",
        "options": [
          "1",
          "Çarpanın kendisi",
          "0",
          "10"
        ],
        "answer": 2,
        "explanation": "Sıfır çarpma işleminin yutan elemanıdır; herhangi bir sayıyla çarpımı 0'dır."
      },
      {
        "q": "25 × 40 işleminin zihinden çarpım sonucu kaçtır?",
        "options": [
          "100",
          "1.000",
          "10.000",
          "500"
        ],
        "answer": 1,
        "explanation": "25 × 4 = 100, sonuna 40'ın sıfırı eklenir: 1.000."
      }
    ],
    "quiz": [
      {
        "q": "145 × 24 çarpma işleminin sonucu kaçtır?",
        "options": [
          "3.480",
          "3.380",
          "2.900",
          "3.580"
        ],
        "answer": 0,
        "explanation": "145 × 4 = 580. 145 × 20 = 2.900. 580 + 2.900 = 3.480'dir."
      },
      {
        "q": "78 sayısını 100 ile KISA YOLDAN çarptığımızda sonuç kaç olur?",
        "options": [
          "780",
          "7.800",
          "78.000",
          "708"
        ],
        "answer": 1,
        "explanation": "100 ile kısa yoldan çarparken sayının sağına 2 sıfır eklenir: 7.800."
      },
      {
        "q": "Bölen sayının \"9\" olduğu bir bölme işleminde KALAN en fazla kaç olabilir?",
        "options": [
          "9",
          "8",
          "10",
          "7"
        ],
        "answer": 1,
        "explanation": "Kalan sayı daima bölenden küçük olmalıdır (Kalan < Bölen). Bölen 9 ise kalan en çok 8 olabilir."
      },
      {
        "q": "Bir bölme işleminde bölen 15, bölüm 8 ve kalan 6 ise BÖLÜNEN sayı kaçtır?",
        "options": [
          "120",
          "126",
          "135",
          "114"
        ],
        "answer": 1,
        "explanation": "Bölünen = (Bölen × Bölüm) + Kalan ➜ (15 × 8) + 6 = 120 + 6 = 126."
      },
      {
        "q": "960 ÷ 10 işleminin sonucu kısa yoldan nasıl bulunur?",
        "options": [
          "Sağına bir sıfır eklenir",
          "Sonundaki bir sıfır silinir",
          "İkiye bölünür",
          "10 ile toplanır"
        ],
        "answer": 1,
        "explanation": "10'a bölerken sayının sonundaki bir sıfır silinir: 960 ÷ 10 = 96."
      },
      {
        "q": "848 ÷ 4 işleminin sonucu kaçtır?",
        "options": [
          "212",
          "22",
          "202",
          "221"
        ],
        "answer": 0,
        "explanation": "8'de 4 iki kere, 4'te 4 bir kere, 8'de 4 iki kere vardır: Sonuç 212."
      },
      {
        "q": "Tanesi 45 TL olan defterlerden 18 tane alan kırtasiyeci kaç TL öder?",
        "options": [
          "720",
          "810",
          "850",
          "900"
        ],
        "answer": 1,
        "explanation": "45 × 18 = 810 TL öder."
      },
      {
        "q": "540 öğrenci 12 kişilik servis araçlarına bindirilecektir. Kaç servise ihtiyaç vardır?",
        "options": [
          "40",
          "45",
          "50",
          "52"
        ],
        "answer": 1,
        "explanation": "540 ÷ 12 = 45 servis aracına ihtiyaç vardır."
      },
      {
        "q": "Bir çarpma işleminde çarpanlardan biri 0 ise sonuç daima kaç olur?",
        "options": [
          "1",
          "Çarpanın kendisi",
          "0",
          "10"
        ],
        "answer": 2,
        "explanation": "Sıfır çarpma işleminin yutan elemanıdır; herhangi bir sayıyla çarpımı 0'dır."
      },
      {
        "q": "25 × 40 işleminin zihinden çarpım sonucu kaçtır?",
        "options": [
          "100",
          "1.000",
          "10.000",
          "500"
        ],
        "answer": 1,
        "explanation": "25 × 4 = 100, sonuna 40'ın sıfırı eklenir: 1.000."
      }
    ]
  },
  "mat-u3": {
    "id": "mat-u3",
    "subject": "Matematik",
    "unitNo": "3. Ünite",
    "title": "Kesirler ve Kesirlerle İşlemler",
    "icon": "🍰",
    "steps": [
      {
        "title": "Kesir Çeşitleri: Basit, Bileşik ve Tam Sayılı",
        "badge": "1. Adım: Kesir Türleri",
        "slide": "assets/images/kesirler_ve_islemler.svg",
        "narration": "Merhaba genç matematikçi! Kesirler bir bütünün eşit parçalarını gösterir. Pay üstte alınan parça, payda altta bütünü böldüğümüz parça sayısıdır. Payı paydasından küçük olan kesirlere Basit Kesir denir (3/5 gibi). Payı paydasına eşit veya büyük olanlara Bileşik Kesir denir (7/4 veya 5/5). Bir tam sayı ve basit kesirden oluşanlara ise Tam Sayılı Kesir deriz (2 tam 1/3).",
        "audio": "assets/audio/courses/mat-u3_s1.mp3"
      },
      {
        "title": "Birim Kesir ve Sayı Doğrusunda Gösterme",
        "badge": "2. Adım: Birim Kesir",
        "slide": "assets/images/kesirler_ve_islemler.svg",
        "narration": "Payı daima 1 olan kesirlere Birim Kesir denir: 1/4, 1/8 gibi. Basit kesirler sayı doğrusunda daima 0 ile 1 arasındadır. 0 ile 1 arasını payda kadar eşit parçaya böler, pay kadar ilerleriz. Payları eşit birim kesirlerde paydası küçük olan parça DAHA BÜYÜKTÜR! Çünkü pastayı daha az kişiye bölmüşüzdür.",
        "audio": "assets/audio/courses/mat-u3_s2.mp3"
      },
      {
        "title": "Paydaları Eşit Kesirlerle Toplama ve Çıkarma",
        "badge": "3. Adım: Kesir İşlemleri",
        "slide": "assets/images/kesirler_ve_islemler.svg",
        "narration": "İşte en kritik kuralımız: Kesirlerde toplama ve çıkarma yaparken paydalar eşitse YALNIZCA paylar toplanır veya çıkarılır, ortak payda AYNEN yazılır! Asla paydalar toplanmaz! Örneğin: 2/7 ile 3/7'yi toplarsak 5/7 eder. 6/9'dan 2/9'u çıkarırsak 4/9 kalır.",
        "audio": "assets/audio/courses/mat-u3_s3.mp3"
      },
      {
        "title": "Bir Çokluğun Belirtilen Kesrini Bulma",
        "badge": "4. Adım: Kesir Problemleri",
        "slide": "assets/images/kesirler_ve_islemler.svg",
        "narration": "60 sayfalık kitabın 3/5'ini okuyan Ali kaç sayfa okumuştur? Bu problemi çözmek için altın formül: Sayıyı önce paydaya böl, sonra çıkan sonucu pay ile çarp! 60 bölü 5 eşittir 12. 12 çarpı 3 eşittir 36 sayfa! Kesir problemleri işte bu kadar keyiflidir.",
        "audio": "assets/audio/courses/mat-u3_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Aşağıdaki kesirlerden hangisi bir BASİT KESİRDİR?",
        "options": [
          "5/4",
          "7/7",
          "3/8",
          "9/2"
        ],
        "answer": 2,
        "explanation": "Payı paydasından küçük olan kesirler basit kesirdir (3 < 8)."
      },
      {
        "q": "Aşağıdaki kesirlerden hangisi bir BİLEŞİK KESİRDİR?",
        "options": [
          "2/5",
          "1/9",
          "8/3",
          "4/7"
        ],
        "answer": 2,
        "explanation": "Payı paydasından büyük olan kesirler bileşik kesirdir (8 > 3)."
      },
      {
        "q": "3/11 + 5/11 toplama işleminin sonucu kaçtır?",
        "options": [
          "8/22",
          "8/11",
          "15/11",
          "2/11"
        ],
        "answer": 1,
        "explanation": "Paydalar eşit olduğunda paylar toplanır ve ortak payda aynen yazılır: 3+5 = 8/11."
      },
      {
        "q": "9/14 - 4/14 çıkarma işleminin sonucu kaçtır?",
        "options": [
          "5/14",
          "5/0",
          "13/14",
          "5/28"
        ],
        "answer": 0,
        "explanation": "Paylar çıkarılır ve ortak payda korunur: (9 - 4)/14 = 5/14."
      },
      {
        "q": "Aşağıdaki birim kesirlerden hangisi EN BÜYÜKTÜR?",
        "options": [
          "1/2",
          "1/4",
          "1/8",
          "1/16"
        ],
        "answer": 0,
        "explanation": "Birim kesirlerde paydası en küçük olan parça en büyüktür (Yarım > Çeyrek)."
      },
      {
        "q": "48 cevizin 3/4'ü kaç ceviz eder?",
        "options": [
          "12",
          "24",
          "36",
          "40"
        ],
        "answer": 2,
        "explanation": "48 ÷ 4 = 12. 12 × 3 = 36 ceviz eder."
      },
      {
        "q": "Payı 1 olan kesirlere ne ad verilir?",
        "options": [
          "Bileşik Kesir",
          "Birim Kesir",
          "Tam Sayılı Kesir",
          "Ondalık Kesir"
        ],
        "answer": 1,
        "explanation": "Payı 1 olan kesirlere \"Birim Kesir\" adı verilir."
      },
      {
        "q": "2 tam 3/5 tam sayılı kesrinin bileşik kesre dönüştürülmüş hali hangisidir?",
        "options": [
          "11/5",
          "13/5",
          "6/5",
          "10/5"
        ],
        "answer": 1,
        "explanation": "(Tam sayı × Payda) + Pay ➜ (2 × 5) + 3 = 13/5."
      },
      {
        "q": "Bir pastanın önce 2/8'i, sonra 3/8'i yenmiştir. Pastanın geriye kaçta kaçı kalmıştır?",
        "options": [
          "5/8",
          "3/8",
          "1/8",
          "4/8"
        ],
        "answer": 1,
        "explanation": "Yenen = 2/8 + 3/8 = 5/8. Tamamı 8/8 olduğundan kalan = 8/8 - 5/8 = 3/8."
      },
      {
        "q": "Basit kesirler sayı doğrusunda hangi iki tam sayı arasında yer alır?",
        "options": [
          "0 ile 1",
          "1 ile 2",
          "2 ile 3",
          "0 ile 10"
        ],
        "answer": 0,
        "explanation": "Tüm pozitif basit kesirler 1 bütünden küçük oldukları için daima 0 ile 1 arasındadır."
      }
    ],
    "quiz": [
      {
        "q": "Aşağıdaki kesirlerden hangisi bir BASİT KESİRDİR?",
        "options": [
          "5/4",
          "7/7",
          "3/8",
          "9/2"
        ],
        "answer": 2,
        "explanation": "Payı paydasından küçük olan kesirler basit kesirdir (3 < 8)."
      },
      {
        "q": "Aşağıdaki kesirlerden hangisi bir BİLEŞİK KESİRDİR?",
        "options": [
          "2/5",
          "1/9",
          "8/3",
          "4/7"
        ],
        "answer": 2,
        "explanation": "Payı paydasından büyük olan kesirler bileşik kesirdir (8 > 3)."
      },
      {
        "q": "3/11 + 5/11 toplama işleminin sonucu kaçtır?",
        "options": [
          "8/22",
          "8/11",
          "15/11",
          "2/11"
        ],
        "answer": 1,
        "explanation": "Paydalar eşit olduğunda paylar toplanır ve ortak payda aynen yazılır: 3+5 = 8/11."
      },
      {
        "q": "9/14 - 4/14 çıkarma işleminin sonucu kaçtır?",
        "options": [
          "5/14",
          "5/0",
          "13/14",
          "5/28"
        ],
        "answer": 0,
        "explanation": "Paylar çıkarılır ve ortak payda korunur: (9 - 4)/14 = 5/14."
      },
      {
        "q": "Aşağıdaki birim kesirlerden hangisi EN BÜYÜKTÜR?",
        "options": [
          "1/2",
          "1/4",
          "1/8",
          "1/16"
        ],
        "answer": 0,
        "explanation": "Birim kesirlerde paydası en küçük olan parça en büyüktür (Yarım > Çeyrek)."
      },
      {
        "q": "48 cevizin 3/4'ü kaç ceviz eder?",
        "options": [
          "12",
          "24",
          "36",
          "40"
        ],
        "answer": 2,
        "explanation": "48 ÷ 4 = 12. 12 × 3 = 36 ceviz eder."
      },
      {
        "q": "Payı 1 olan kesirlere ne ad verilir?",
        "options": [
          "Bileşik Kesir",
          "Birim Kesir",
          "Tam Sayılı Kesir",
          "Ondalık Kesir"
        ],
        "answer": 1,
        "explanation": "Payı 1 olan kesirlere \"Birim Kesir\" adı verilir."
      },
      {
        "q": "2 tam 3/5 tam sayılı kesrinin bileşik kesre dönüştürülmüş hali hangisidir?",
        "options": [
          "11/5",
          "13/5",
          "6/5",
          "10/5"
        ],
        "answer": 1,
        "explanation": "(Tam sayı × Payda) + Pay ➜ (2 × 5) + 3 = 13/5."
      },
      {
        "q": "Bir pastanın önce 2/8'i, sonra 3/8'i yenmiştir. Pastanın geriye kaçta kaçı kalmıştır?",
        "options": [
          "5/8",
          "3/8",
          "1/8",
          "4/8"
        ],
        "answer": 1,
        "explanation": "Yenen = 2/8 + 3/8 = 5/8. Tamamı 8/8 olduğundan kalan = 8/8 - 5/8 = 3/8."
      },
      {
        "q": "Basit kesirler sayı doğrusunda hangi iki tam sayı arasında yer alır?",
        "options": [
          "0 ile 1",
          "1 ile 2",
          "2 ile 3",
          "0 ile 10"
        ],
        "answer": 0,
        "explanation": "Tüm pozitif basit kesirler 1 bütünden küçük oldukları için daima 0 ile 1 arasındadır."
      }
    ]
  },
  "mat-u4": {
    "id": "mat-u4",
    "subject": "Matematik",
    "unitNo": "4. Ünite",
    "title": "Zamanı Ölçme ve Veri Değerlendirme",
    "icon": "⏱️",
    "steps": [
      {
        "title": "Zaman Ölçü Birimleri ve Dönüşümler",
        "badge": "1. Adım: Zaman Dönüşümleri",
        "slide": "assets/images/zaman_ve_veri_olcme.svg",
        "narration": "Merhaba zaman yolcusu! Zamanı doğru ölçmek hayatımızı düzenler. 1 saat 60 dakikadır. Yarım saat 30 dakika, çeyrek saat 15 dakikadır. 1 dakika ise 60 saniyedir. 1 gün 24 saattir ve Dünya'nın kendi ekseni etrafında 1 tur dönmesiyle oluşur. 1 yıl ise 365 gün 6 saat, yani 52 hafta veya 12 aydır!",
        "audio": "assets/audio/courses/mat-u4_s1.mp3"
      },
      {
        "title": "Artık Yıl ve Süre Hesaplama",
        "badge": "2. Adım: Süre Hesapları",
        "slide": "assets/images/zaman_ve_veri_olcme.svg",
        "narration": "Yıldaki 6 saatlik fazlalıklar 4 yılda bir tam 24 saat, yani 1 gün eder! Bu bir gün Şubat ayına eklenir ve o yıl Şubat 29 çeker. İşte bu yıla Artık Yıl denir ve yıl 366 gün olur. Süre hesaplarken bitiş saatinden başlangıç saatini çıkarırız. Dakika yetmezse saatten 60 dakika ödünç alırız!",
        "audio": "assets/audio/courses/mat-u4_s2.mp3"
      },
      {
        "title": "Çetele ve Sıklık Tablosu",
        "badge": "3. Adım: Veri Toplama",
        "slide": "assets/images/zaman_ve_veri_olcme.svg",
        "narration": "Bir sınıfta anket yapıp en sevilen meyveleri topladığımızda bunu önce çizgilerle gösteririz. Her 5 sayım için 4 dikey ve 1 yatay çizgi çizeriz; buna Çetele Tablosu denir. Çeteledeki çizgileri sayıp rakamlarla yazdığımızda ise Sıklık Tablosu elde etmiş oluruz.",
        "audio": "assets/audio/courses/mat-u4_s3.mp3"
      },
      {
        "title": "Sütun Grafiği ve Grafik Yorumlama",
        "badge": "4. Adım: Sütun Grafiği",
        "slide": "assets/images/zaman_ve_veri_olcme.svg",
        "narration": "Topladığımız verileri sütunlar halinde çizdiğimizde Sütun Grafiği oluşur. Her grafiğin mutlaka bir başlığı olmalı ve eksenlerindeki birimler belirtilmelidir. Sütun grafiğinde en yüksek sütun en çok tercih edileni, en alçak sütun ise en az olanı anında görmemizi sağlar!",
        "audio": "assets/audio/courses/mat-u4_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "3 saat 25 dakika toplam kaç DAKİKA eder?",
        "options": [
          "185",
          "205",
          "195",
          "145"
        ],
        "answer": 1,
        "explanation": "1 saat = 60 dakika. 3 × 60 = 180 dakika. 180 + 25 = 205 dakika."
      },
      {
        "q": "150 saniye kaç dakika ve kaç saniyeye eşittir?",
        "options": [
          "1 dk 50 sn",
          "2 dk 30 sn",
          "2 dk 50 sn",
          "3 dk 00 sn"
        ],
        "answer": 1,
        "explanation": "150 ÷ 60 = 2 (kalan 30). Yani 2 dakika 30 saniyedir."
      },
      {
        "q": "Saat 14.15'te başlayan bir film 1 saat 45 dakika sürmüştür. Film saat kaçta bitmiştir?",
        "options": [
          "15.45",
          "16.00",
          "16.15",
          "15.55"
        ],
        "answer": 1,
        "explanation": "14.15 + 1 saat 45 dk ➜ 14+1=15 saat, 15+45=60 dk (1 saat) ➜ 15+1 = 16.00."
      },
      {
        "q": "4 yılda bir gerçekleşen, Şubat ayının 29 gün sürdüğü yıla ne ad verilir?",
        "options": [
          "Güneş Yılı",
          "Artık Yıl",
          "Işık Yılı",
          "Ay Yılı"
        ],
        "answer": 1,
        "explanation": "4 yılda bir fazladan 1 gün eklenen ve 366 gün süren yıla \"Artık Yıl\" denir."
      },
      {
        "q": "Verilerin beşerli çizgi gruplarıyla gösterildiği tabloya ne ad verilir?",
        "options": [
          "Sıklık Tablosu",
          "Çetele Tablosu",
          "Sütun Grafiği",
          "Nesne Grafiği"
        ],
        "answer": 1,
        "explanation": "Çizgilerle tutulan sayım tablosuna \"Çetele Tablosu\" denir."
      },
      {
        "q": "Çetele tablosundaki çizgilerin rakamlarla ifade edildiği tablo türü hangisidir?",
        "options": [
          "Sıklık Tablosu",
          "Kroki",
          "Piramit Tablosu",
          "Şecere"
        ],
        "answer": 0,
        "explanation": "Sayısal değerlerle oluşturulan tabloya \"Sıklık Tablosu\" denir."
      },
      {
        "q": "Bir yılda kaç hafta vardır?",
        "options": [
          "48",
          "50",
          "52",
          "54"
        ],
        "answer": 2,
        "explanation": "Bir takvim yılında 52 hafta bulunur."
      },
      {
        "q": "Saat 09.40'ta evden çıkan Elif, saat 10.25'te okula varmıştır. Yolculuk kaç dakika sürmüştür?",
        "options": [
          "35 dk",
          "40 dk",
          "45 dk",
          "50 dk"
        ],
        "answer": 2,
        "explanation": "10.25 - 09.40 ➜ 10.25 = 09.85 dk. 85 - 40 = 45 dakika sürmüştür."
      },
      {
        "q": "Sütun grafiğinde verilerin büyüklüğü neye göre anlaşılır?",
        "options": [
          "Sütunların rengine göre",
          "Sütunların uzunluk / boy seviyesine göre",
          "Grafiğin çizildiği kâğıda göre",
          "Tablo kenarlığına göre"
        ],
        "answer": 1,
        "explanation": "Sütun grafiğinde sütunun yüksekliği ya da boyu o verinin miktarını gösterir."
      },
      {
        "q": "2 gün 6 saat toplam kaç saattir?",
        "options": [
          "48",
          "50",
          "54",
          "56"
        ],
        "answer": 2,
        "explanation": "1 gün = 24 saat. 2 gün = 48 saat. 48 + 6 = 54 saattir."
      }
    ],
    "quiz": [
      {
        "q": "3 saat 25 dakika toplam kaç DAKİKA eder?",
        "options": [
          "185",
          "205",
          "195",
          "145"
        ],
        "answer": 1,
        "explanation": "1 saat = 60 dakika. 3 × 60 = 180 dakika. 180 + 25 = 205 dakika."
      },
      {
        "q": "150 saniye kaç dakika ve kaç saniyeye eşittir?",
        "options": [
          "1 dk 50 sn",
          "2 dk 30 sn",
          "2 dk 50 sn",
          "3 dk 00 sn"
        ],
        "answer": 1,
        "explanation": "150 ÷ 60 = 2 (kalan 30). Yani 2 dakika 30 saniyedir."
      },
      {
        "q": "Saat 14.15'te başlayan bir film 1 saat 45 dakika sürmüştür. Film saat kaçta bitmiştir?",
        "options": [
          "15.45",
          "16.00",
          "16.15",
          "15.55"
        ],
        "answer": 1,
        "explanation": "14.15 + 1 saat 45 dk ➜ 14+1=15 saat, 15+45=60 dk (1 saat) ➜ 15+1 = 16.00."
      },
      {
        "q": "4 yılda bir gerçekleşen, Şubat ayının 29 gün sürdüğü yıla ne ad verilir?",
        "options": [
          "Güneş Yılı",
          "Artık Yıl",
          "Işık Yılı",
          "Ay Yılı"
        ],
        "answer": 1,
        "explanation": "4 yılda bir fazladan 1 gün eklenen ve 366 gün süren yıla \"Artık Yıl\" denir."
      },
      {
        "q": "Verilerin beşerli çizgi gruplarıyla gösterildiği tabloya ne ad verilir?",
        "options": [
          "Sıklık Tablosu",
          "Çetele Tablosu",
          "Sütun Grafiği",
          "Nesne Grafiği"
        ],
        "answer": 1,
        "explanation": "Çizgilerle tutulan sayım tablosuna \"Çetele Tablosu\" denir."
      },
      {
        "q": "Çetele tablosundaki çizgilerin rakamlarla ifade edildiği tablo türü hangisidir?",
        "options": [
          "Sıklık Tablosu",
          "Kroki",
          "Piramit Tablosu",
          "Şecere"
        ],
        "answer": 0,
        "explanation": "Sayısal değerlerle oluşturulan tabloya \"Sıklık Tablosu\" denir."
      },
      {
        "q": "Bir yılda kaç hafta vardır?",
        "options": [
          "48",
          "50",
          "52",
          "54"
        ],
        "answer": 2,
        "explanation": "Bir takvim yılında 52 hafta bulunur."
      },
      {
        "q": "Saat 09.40'ta evden çıkan Elif, saat 10.25'te okula varmıştır. Yolculuk kaç dakika sürmüştür?",
        "options": [
          "35 dk",
          "40 dk",
          "45 dk",
          "50 dk"
        ],
        "answer": 2,
        "explanation": "10.25 - 09.40 ➜ 10.25 = 09.85 dk. 85 - 40 = 45 dakika sürmüştür."
      },
      {
        "q": "Sütun grafiğinde verilerin büyüklüğü neye göre anlaşılır?",
        "options": [
          "Sütunların rengine göre",
          "Sütunların uzunluk / boy seviyesine göre",
          "Grafiğin çizildiği kâğıda göre",
          "Tablo kenarlığına göre"
        ],
        "answer": 1,
        "explanation": "Sütun grafiğinde sütunun yüksekliği ya da boyu o verinin miktarını gösterir."
      },
      {
        "q": "2 gün 6 saat toplam kaç saattir?",
        "options": [
          "48",
          "50",
          "54",
          "56"
        ],
        "answer": 2,
        "explanation": "1 gün = 24 saat. 2 gün = 48 saat. 48 + 6 = 54 saattir."
      }
    ]
  },
  "mat-u5": {
    "id": "mat-u5",
    "subject": "Matematik",
    "unitNo": "5. Ünite",
    "title": "Geometrik Cisimler, Şekiller ve Uzamsal İlişkiler",
    "icon": "📐",
    "steps": [
      {
        "title": "Açı Çeşitleri ve İletki ile Ölçüm",
        "badge": "1. Adım: Açılar",
        "slide": "assets/images/geometri_ve_uzamsal.svg",
        "narration": "Merhaba genç mimar! Açılar geometrinin temelidir. Başlangıç noktası ortak iki ışının açıklığına Açı denir. Tam 90 derecelik açıya Dik Açı denir; kare ve odamızın köşeleri dik açıdır. 90 dereceden küçük açılara Dar Açı (0°-89°), 90 ile 180 derece arasındakilere Geniş Açı (91°-179°), tam 180 dereceye ise Doğru Açı deriz. Açıları iletki (açıölçer) ile ölçeriz.",
        "audio": "assets/audio/courses/mat-u5_s1.mp3"
      },
      {
        "title": "Üçgen, Kare ve Dikdörtgenin Özellikleri",
        "badge": "2. Adım: Temel Şekiller",
        "slide": "assets/images/geometri_ve_uzamsal.svg",
        "narration": "Üçgenin 3 kenarı, 3 köşesi vardır ve iç açıları toplamı daima 180 derecedir! Kare 4 eşit kenardan ve 4 dik açıdan oluşur. Dikdörtgenin ise karşılıklı kenarları birbirine eşittir ve açıları 90 derecedir. Dörtgenlerin iç açıları toplamı 360 derecedir. Komşu olmayan köşeleri birleştiren çizgiye Köşegen denir. Üçgenin köşegeni yoktur!",
        "audio": "assets/audio/courses/mat-u5_s2.mp3"
      },
      {
        "title": "Geometrik Cisimler: Küp ve Prizmalar",
        "badge": "3. Adım: 3 Boyutlu Cisimler",
        "slide": "assets/images/geometri_ve_uzamsal.svg",
        "narration": "3 boyutlu cisimler hacim kaplar. Küpün 6 eş kare yüzü, 8 köşesi ve 12 ayrıtı vardır. Kare prizma, dikdörtgenler prizması da aynı köşe ve ayrıt sayısına sahiptir ama yüzleri farklı şekillerdedir. Silindir, koni ve kürenin ise eğri yüzeyleri vardır, köşeleri ve ayrıtları yoktur.",
        "audio": "assets/audio/courses/mat-u5_s3.mp3"
      },
      {
        "title": "Simetri ve Simetri Doğrusu",
        "badge": "4. Adım: Simetri",
        "slide": "assets/images/geometri_ve_uzamsal.svg",
        "narration": "Bir şekli tam ortadan ikiye katladığımızda iki parça birbiriyle birebir çakışıyorsa o şekil simetriktir! Katlama çizgisine Simetri Doğrusu denir. Aynadaki görüntümüz ayna simetrisidir. Kelebeğin kanatları doğadaki en muhteşem simetri örneğidir.",
        "audio": "assets/audio/courses/mat-u5_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Ölçüsü 90 DERECE olan açıya ne ad verilir?",
        "options": [
          "Dar Açı",
          "Geniş Açı",
          "Dik Açı",
          "Doğru Açı"
        ],
        "answer": 2,
        "explanation": "Tam 90 derecelik açı \"Dik Açı\"dır."
      },
      {
        "q": "Ölçüsü 65 derece olan bir açı hangi açı çeşidine girer?",
        "options": [
          "Dar Açı",
          "Dik Açı",
          "Geniş Açı",
          "Doğru Açı"
        ],
        "answer": 0,
        "explanation": "90 dereceden küçük açılara \"Dar Açı\" denir."
      },
      {
        "q": "Bir üçgenin İÇ AÇILARI TOPLAMI kaç derecedir?",
        "options": [
          "90°",
          "180°",
          "270°",
          "360°"
        ],
        "answer": 1,
        "explanation": "Tüm üçgenlerin iç açıları toplamı 180 derecedir."
      },
      {
        "q": "Aşağıdaki geometrik şekillerden hangisinin KÖŞEGENİ YOKTUR?",
        "options": [
          "Kare",
          "Dikdörtgen",
          "Üçgen",
          "Paralelkenar"
        ],
        "answer": 2,
        "explanation": "Üçgenin tüm köşeleri birbirine komşu olduğu için köşegeni çizilemez."
      },
      {
        "q": "Küpün kaç YÜZÜ, kaç KÖŞESİ ve kaç AYRITI vardır?",
        "options": [
          "6 Yüz, 8 Köşe, 12 Ayrıt",
          "8 Yüz, 6 Köşe, 12 Ayrıt",
          "6 Yüz, 12 Köşe, 8 Ayrıt",
          "4 Yüz, 4 Köşe, 6 Ayrıt"
        ],
        "answer": 0,
        "explanation": "Küpün 6 karesel yüzü, 8 köşesi ve 12 ayrıtı vardır."
      },
      {
        "q": "Ölçüsü 135 derece olan bir açı hangi açı türüdür?",
        "options": [
          "Dar Açı",
          "Geniş Açı",
          "Dik Açı",
          "Tam Açı"
        ],
        "answer": 1,
        "explanation": "90° ile 180° arasındaki açılara \"Geniş Açı\" denir."
      },
      {
        "q": "Bir karenin kaç tane SİMETRİ DOĞRUSU vardır?",
        "options": [
          "1",
          "2",
          "4",
          "8"
        ],
        "answer": 2,
        "explanation": "Karenin 2 yatay/dikey ve 2 köşegen olmak üzere toplam 4 simetri doğrusu vardır."
      },
      {
        "q": "İki açısı 50° ve 60° olan bir üçgenin üçüncü açısı kaç derecedir?",
        "options": [
          "60°",
          "70°",
          "80°",
          "90°"
        ],
        "answer": 1,
        "explanation": "İç açılar toplamı 180°'dir. 50 + 60 = 110°. 180 - 110 = 70°."
      },
      {
        "q": "Aşağıdaki cisimlerden hangisinin KÖŞESİ VE AYRITI YOKTUR?",
        "options": [
          "Küp",
          "Silindir",
          "Kare Prizma",
          "Üçgen Prizma"
        ],
        "answer": 1,
        "explanation": "Silindirin dairesel tabanları ve eğri yüzeyi vardır; köşesi ve ayrıtı yoktur."
      },
      {
        "q": "Tam 180 derece olan ve düz bir çizgi oluşturan açı türü hangisidir?",
        "options": [
          "Geniş Açı",
          "Dik Açı",
          "Doğru Açı",
          "Tam Açı"
        ],
        "answer": 2,
        "explanation": "180 derecelik açıya \"Doğru Açı\" adı verilir."
      }
    ],
    "quiz": [
      {
        "q": "Ölçüsü 90 DERECE olan açıya ne ad verilir?",
        "options": [
          "Dar Açı",
          "Geniş Açı",
          "Dik Açı",
          "Doğru Açı"
        ],
        "answer": 2,
        "explanation": "Tam 90 derecelik açı \"Dik Açı\"dır."
      },
      {
        "q": "Ölçüsü 65 derece olan bir açı hangi açı çeşidine girer?",
        "options": [
          "Dar Açı",
          "Dik Açı",
          "Geniş Açı",
          "Doğru Açı"
        ],
        "answer": 0,
        "explanation": "90 dereceden küçük açılara \"Dar Açı\" denir."
      },
      {
        "q": "Bir üçgenin İÇ AÇILARI TOPLAMI kaç derecedir?",
        "options": [
          "90°",
          "180°",
          "270°",
          "360°"
        ],
        "answer": 1,
        "explanation": "Tüm üçgenlerin iç açıları toplamı 180 derecedir."
      },
      {
        "q": "Aşağıdaki geometrik şekillerden hangisinin KÖŞEGENİ YOKTUR?",
        "options": [
          "Kare",
          "Dikdörtgen",
          "Üçgen",
          "Paralelkenar"
        ],
        "answer": 2,
        "explanation": "Üçgenin tüm köşeleri birbirine komşu olduğu için köşegeni çizilemez."
      },
      {
        "q": "Küpün kaç YÜZÜ, kaç KÖŞESİ ve kaç AYRITI vardır?",
        "options": [
          "6 Yüz, 8 Köşe, 12 Ayrıt",
          "8 Yüz, 6 Köşe, 12 Ayrıt",
          "6 Yüz, 12 Köşe, 8 Ayrıt",
          "4 Yüz, 4 Köşe, 6 Ayrıt"
        ],
        "answer": 0,
        "explanation": "Küpün 6 karesel yüzü, 8 köşesi ve 12 ayrıtı vardır."
      },
      {
        "q": "Ölçüsü 135 derece olan bir açı hangi açı türüdür?",
        "options": [
          "Dar Açı",
          "Geniş Açı",
          "Dik Açı",
          "Tam Açı"
        ],
        "answer": 1,
        "explanation": "90° ile 180° arasındaki açılara \"Geniş Açı\" denir."
      },
      {
        "q": "Bir karenin kaç tane SİMETRİ DOĞRUSU vardır?",
        "options": [
          "1",
          "2",
          "4",
          "8"
        ],
        "answer": 2,
        "explanation": "Karenin 2 yatay/dikey ve 2 köşegen olmak üzere toplam 4 simetri doğrusu vardır."
      },
      {
        "q": "İki açısı 50° ve 60° olan bir üçgenin üçüncü açısı kaç derecedir?",
        "options": [
          "60°",
          "70°",
          "80°",
          "90°"
        ],
        "answer": 1,
        "explanation": "İç açılar toplamı 180°'dir. 50 + 60 = 110°. 180 - 110 = 70°."
      },
      {
        "q": "Aşağıdaki cisimlerden hangisinin KÖŞESİ VE AYRITI YOKTUR?",
        "options": [
          "Küp",
          "Silindir",
          "Kare Prizma",
          "Üçgen Prizma"
        ],
        "answer": 1,
        "explanation": "Silindirin dairesel tabanları ve eğri yüzeyi vardır; köşesi ve ayrıtı yoktur."
      },
      {
        "q": "Tam 180 derece olan ve düz bir çizgi oluşturan açı türü hangisidir?",
        "options": [
          "Geniş Açı",
          "Dik Açı",
          "Doğru Açı",
          "Tam Açı"
        ],
        "answer": 2,
        "explanation": "180 derecelik açıya \"Doğru Açı\" adı verilir."
      }
    ]
  },
  "mat-u6": {
    "id": "mat-u6",
    "subject": "Matematik",
    "unitNo": "6. Ünite",
    "title": "Uzunluk, Çevre ve Alan Ölçme",
    "icon": "📏",
    "steps": [
      {
        "title": "Uzunluk Ölçü Birimleri ve Dönüşümler",
        "badge": "1. Adım: Uzunluk",
        "slide": "assets/images/uzunluk_cevre_alan.svg",
        "narration": "Merhaba genç araştırmacı! Dünyayı metreyle ölçüyoruz! Standart uzunluk ölçü birimi metredir (m). Şehirler arası yolları kilometreyle (km) ölçeriz: 1 km tam 1000 metredir! Boyumuzu, defterimizi santimetreyle (cm) ölçeriz: 1 m = 100 cm. Silgimizi veya böcekleri ise milimetreyle (mm) ölçeriz: 1 cm = 10 mm.",
        "audio": "assets/audio/courses/mat-u6_s1.mp3"
      },
      {
        "title": "Geometrik Şekillerin Çevresini Hesaplama",
        "badge": "2. Adım: Çevre",
        "slide": "assets/images/uzunluk_cevre_alan.svg",
        "narration": "Çevre, bir geometrik şeklin etrafını saran tüm dış kenar uzunluklarının toplamıdır! Karenin çevresi bir kenarının 4 ile çarpımıdır (Ç = 4 × a). Dikdörtgenin çevresi ise: 2 × (Kısa kenar + Uzun kenar) formülüyle bulunur. Kenarları toplarken birimlerin aynı (cm, m) olmasına dikkat etmeliyiz.",
        "audio": "assets/audio/courses/mat-u6_s2.mp3"
      },
      {
        "title": "Alan Ölçme ve Birim Kare",
        "badge": "3. Adım: Alan",
        "slide": "assets/images/uzunluk_cevre_alan.svg",
        "narration": "Çevre etraftaki sınırdır, Alan ise o sınırın İÇİNDE kaplanan yüzeydir! Alanı ölçmek için standart birim kareleri kullanırız. Dikdörtgenin alanı Kısa Kenar ile Uzun Kenarın çarpımıdır. Karenin alanı ise bir kenarının kendisiyle çarpımıdır (a × a). Halı kaplarken veya oda boyarken alan ölçüsünden faydalanırız.",
        "audio": "assets/audio/courses/mat-u6_s3.mp3"
      },
      {
        "title": "Çevre ve Alan Problemleri",
        "badge": "4. Adım: Problem Çözme",
        "slide": "assets/images/uzunluk_cevre_alan.svg",
        "narration": "Bir bahçenin etrafına 3 sıra tel çekilecekse ÇEVRE hesaplanır ve 3 ile çarpılır. Bahçenin içine çim ekilecekse ALAN hesaplanır! İki kavramı birbirinden ayırt etmek seni gerçek bir problem çözücüsü yapar.",
        "audio": "assets/audio/courses/mat-u6_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "3 kilometre 250 metre toplam kaç METRE eder?",
        "options": [
          "325 m",
          "3.250 m",
          "32.500 m",
          "3.025 m"
        ],
        "answer": 1,
        "explanation": "1 km = 1.000 m. 3 km = 3.000 m. 3.000 + 250 = 3.250 metredir."
      },
      {
        "q": "Bir kenar uzunluğu 15 cm olan bir KARENİN ÇEVRESİ kaç cm'dir?",
        "options": [
          "30 cm",
          "45 cm",
          "60 cm",
          "225 cm"
        ],
        "answer": 2,
        "explanation": "Karenin 4 eşit kenarı vardır: Çevre = 15 × 4 = 60 cm."
      },
      {
        "q": "Kısa kenarı 8 m, uzun kenarı 12 m olan dikdörtgen şeklindeki bahçenin ÇEVRESİ kaç metredir?",
        "options": [
          "20 m",
          "40 m",
          "96 m",
          "48 m"
        ],
        "answer": 1,
        "explanation": "Çevre = 2 × (Kısa + Uzun) ➜ 2 × (8 + 12) = 2 × 20 = 40 metredir."
      },
      {
        "q": "Kısa kenarı 6 cm, uzun kenarı 10 cm olan bir dikdörtgenin ALANI kaç santimetrekaredir?",
        "options": [
          "32 cm²",
          "60 cm²",
          "16 cm²",
          "40 cm²"
        ],
        "answer": 1,
        "explanation": "Dikdörtgen Alanı = Kısa Kenar × Uzun Kenar ➜ 6 × 10 = 60 cm²."
      },
      {
        "q": "5 metre kumaşın 180 santimetresi kullanıldı. Geriye kaç santimetre kumaş kaldı?",
        "options": [
          "320 cm",
          "420 cm",
          "220 cm",
          "380 cm"
        ],
        "answer": 0,
        "explanation": "5 m = 500 cm. 500 - 180 = 320 cm kalmıştır."
      },
      {
        "q": "Çevresi 36 cm olan bir eşkenar üçgenin BİR KENAR UZUNLUĞU kaç cm'dir?",
        "options": [
          "9 cm",
          "12 cm",
          "18 cm",
          "6 cm"
        ],
        "answer": 1,
        "explanation": "Eşkenar üçgenin 3 eşit kenarı vardır: 36 ÷ 3 = 12 cm."
      },
      {
        "q": "1 santimetre kaç MİLİMETREDİR?",
        "options": [
          "10",
          "100",
          "1.000",
          "1"
        ],
        "answer": 0,
        "explanation": "1 cm = 10 milimetredir (mm)."
      },
      {
        "q": "Bir kenarı 7 cm olan karenin ALANI kaç santimetrekaredir?",
        "options": [
          "28 cm²",
          "49 cm²",
          "14 cm²",
          "21 cm²"
        ],
        "answer": 1,
        "explanation": "Karenin Alanı = Kenar × Kenar ➜ 7 × 7 = 49 cm²."
      },
      {
        "q": "Çevresi 48 metre olan kare şeklindeki bahçenin bir kenarına 2 sıra tel çekilirse kaç metre tel gerekir?",
        "options": [
          "96 m",
          "48 m",
          "24 m",
          "12 m"
        ],
        "answer": 0,
        "explanation": "1 sıra tel çevre kadardır (48 m). 2 sıra tel = 48 × 2 = 96 metre."
      },
      {
        "q": "Bir yüzeyin kapladığı alanı ölçmek için kullanılan standart küçük kare parçalara ne ad verilir?",
        "options": [
          "Köşegen",
          "Ayrıt",
          "Birim Kare",
          "Metreçubuk"
        ],
        "answer": 2,
        "explanation": "Alan hesaplamalarında zemin birim kareler sayılarak bulunur."
      }
    ],
    "quiz": [
      {
        "q": "3 kilometre 250 metre toplam kaç METRE eder?",
        "options": [
          "325 m",
          "3.250 m",
          "32.500 m",
          "3.025 m"
        ],
        "answer": 1,
        "explanation": "1 km = 1.000 m. 3 km = 3.000 m. 3.000 + 250 = 3.250 metredir."
      },
      {
        "q": "Bir kenar uzunluğu 15 cm olan bir KARENİN ÇEVRESİ kaç cm'dir?",
        "options": [
          "30 cm",
          "45 cm",
          "60 cm",
          "225 cm"
        ],
        "answer": 2,
        "explanation": "Karenin 4 eşit kenarı vardır: Çevre = 15 × 4 = 60 cm."
      },
      {
        "q": "Kısa kenarı 8 m, uzun kenarı 12 m olan dikdörtgen şeklindeki bahçenin ÇEVRESİ kaç metredir?",
        "options": [
          "20 m",
          "40 m",
          "96 m",
          "48 m"
        ],
        "answer": 1,
        "explanation": "Çevre = 2 × (Kısa + Uzun) ➜ 2 × (8 + 12) = 2 × 20 = 40 metredir."
      },
      {
        "q": "Kısa kenarı 6 cm, uzun kenarı 10 cm olan bir dikdörtgenin ALANI kaç santimetrekaredir?",
        "options": [
          "32 cm²",
          "60 cm²",
          "16 cm²",
          "40 cm²"
        ],
        "answer": 1,
        "explanation": "Dikdörtgen Alanı = Kısa Kenar × Uzun Kenar ➜ 6 × 10 = 60 cm²."
      },
      {
        "q": "5 metre kumaşın 180 santimetresi kullanıldı. Geriye kaç santimetre kumaş kaldı?",
        "options": [
          "320 cm",
          "420 cm",
          "220 cm",
          "380 cm"
        ],
        "answer": 0,
        "explanation": "5 m = 500 cm. 500 - 180 = 320 cm kalmıştır."
      },
      {
        "q": "Çevresi 36 cm olan bir eşkenar üçgenin BİR KENAR UZUNLUĞU kaç cm'dir?",
        "options": [
          "9 cm",
          "12 cm",
          "18 cm",
          "6 cm"
        ],
        "answer": 1,
        "explanation": "Eşkenar üçgenin 3 eşit kenarı vardır: 36 ÷ 3 = 12 cm."
      },
      {
        "q": "1 santimetre kaç MİLİMETREDİR?",
        "options": [
          "10",
          "100",
          "1.000",
          "1"
        ],
        "answer": 0,
        "explanation": "1 cm = 10 milimetredir (mm)."
      },
      {
        "q": "Bir kenarı 7 cm olan karenin ALANI kaç santimetrekaredir?",
        "options": [
          "28 cm²",
          "49 cm²",
          "14 cm²",
          "21 cm²"
        ],
        "answer": 1,
        "explanation": "Karenin Alanı = Kenar × Kenar ➜ 7 × 7 = 49 cm²."
      },
      {
        "q": "Çevresi 48 metre olan kare şeklindeki bahçenin bir kenarına 2 sıra tel çekilirse kaç metre tel gerekir?",
        "options": [
          "96 m",
          "48 m",
          "24 m",
          "12 m"
        ],
        "answer": 0,
        "explanation": "1 sıra tel çevre kadardır (48 m). 2 sıra tel = 48 × 2 = 96 metre."
      },
      {
        "q": "Bir yüzeyin kapladığı alanı ölçmek için kullanılan standart küçük kare parçalara ne ad verilir?",
        "options": [
          "Köşegen",
          "Ayrıt",
          "Birim Kare",
          "Metreçubuk"
        ],
        "answer": 2,
        "explanation": "Alan hesaplamalarında zemin birim kareler sayılarak bulunur."
      }
    ]
  },
  "mat-u7": {
    "id": "mat-u7",
    "subject": "Matematik",
    "unitNo": "7. Ünite",
    "title": "Tartma ve Sıvı Ölçme",
    "icon": "⚖️",
    "steps": [
      {
        "title": "Kütle Ölçü Birimleri (Tartma)",
        "badge": "1. Adım: Kütle Birimleri",
        "slide": "assets/images/tartma_ve_sivi_olcme.svg",
        "narration": "Merhaba kâşif! Maddelerin kütlesini tartarak ölçeriz. Temel kütle birimi kilogramdır (kg). Pazardaki meyveleri, vücut ağırlığımızı kilogramla ölçeriz. Daha hafif şeyleri gramla (g) ölçeriz: 1 kg tam 1000 gramdır! Altın, baharat veya ilaçları ise miligramla (mg) tartarız: 1 g = 1000 mg. Kamyon, kömür gibi devasa yükleri ise tonla (t) ölçeriz: 1 t = 1000 kg.",
        "audio": "assets/audio/courses/mat-u7_s1.mp3"
      },
      {
        "title": "Brüt Kütle, Dara ve Net Kütle",
        "badge": "2. Adım: Dara & Net Kütle",
        "slide": "assets/images/tartma_ve_sivi_olcme.svg",
        "narration": "Salçayı veya balı kavanozuyla tarttığımızda çıkan toplama Brüt Kütle denir. Boş kavanozun ağırlığına Dara denir! İçindeki gerçek salçanın veya balın kütlesine ise Net Kütle deriz. Formülümüz çok açık: Net Kütle = Brüt Kütle - Dara. Alışveriş yaparken sadece net kütleye para ödemeliyiz!",
        "audio": "assets/audio/courses/mat-u7_s2.mp3"
      },
      {
        "title": "Sıvı Ölçme Birimleri: Litre ve Mililitre",
        "badge": "3. Adım: Sıvı Ölçümü",
        "slide": "assets/images/tartma_ve_sivi_olcme.svg",
        "narration": "Su, süt, benzin gibi akışkan maddeleri Litre (L) ile ölçeriz. 1 Litre tam 1000 mililitredir (mL). Yarım litre 500 mL, çeyrek litre ise 250 mL'dir. Bir meyve suyu kutusu genellikle 200 mL, şurup kaşığı ise 5 mL'dir. Sıvıları dereceli silindir kaplarla hassasça ölçeriz.",
        "audio": "assets/audio/courses/mat-u7_s3.mp3"
      },
      {
        "title": "Günlük Hayat Problemleri ve Tasarruf",
        "badge": "4. Adım: Su & İsraf",
        "slide": "assets/images/tartma_ve_sivi_olcme.svg",
        "narration": "Günde 2 litre su içmek sağlığımız için harikadır. Damlayan bir musluk günde onlarca litre suyu boşa akıtır! Sıvı ve kütle ölçümlerinde problem çözerken tüm birimleri aynı cinse çevirmeliyiz; litreleri mililitreye, kilogramları grama dönüştürerek kolayca sonuca ulaşırız.",
        "audio": "assets/audio/courses/mat-u7_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "4 kilogram 350 gram toplam kaç GRAM eder?",
        "options": [
          "435 g",
          "4.350 g",
          "43.500 g",
          "4.035 g"
        ],
        "answer": 1,
        "explanation": "1 kg = 1.000 g. 4 kg = 4.000 g. 4.000 + 350 = 4.350 gramdır."
      },
      {
        "q": "1 ton kaç KİLOGRAMDIR?",
        "options": [
          "10 kg",
          "100 kg",
          "1.000 kg",
          "10.000 kg"
        ],
        "answer": 2,
        "explanation": "1 ton (t) = 1.000 kilogramdır (kg)."
      },
      {
        "q": "İçi bal dolu bir kavanozun brüt kütlesi 1.250 gramdır. Boş kavanozun darası 350 gram olduğuna göre NET bal miktarı kaç gramdır?",
        "options": [
          "900 g",
          "800 g",
          "950 g",
          "1.600 g"
        ],
        "answer": 0,
        "explanation": "Net Kütle = Brüt Kütle - Dara ➜ 1.250 - 350 = 900 gram."
      },
      {
        "q": "Yarım litre kaç MİLİLİTREDİR (mL)?",
        "options": [
          "250 mL",
          "500 mL",
          "750 mL",
          "100 mL"
        ],
        "answer": 1,
        "explanation": "1 Litre = 1.000 mL olduğuna göre yarım litre = 500 mL'dir."
      },
      {
        "q": "250 mL'lik bardaklardan kaç tanesi ile 2 LİTRELİK sürahi tam olarak dolar?",
        "options": [
          "4",
          "6",
          "8",
          "10"
        ],
        "answer": 2,
        "explanation": "1 Litre 4 adet 250 mL'dir. 2 Litre = 2.000 mL ÷ 250 mL = 8 bardak."
      },
      {
        "q": "Altın, gümüş ve ilaç gibi çok hafif maddeler hangi ölçü birimiyle tartılır?",
        "options": [
          "Ton",
          "Kilogram",
          "Miligram",
          "Litre"
        ],
        "answer": 2,
        "explanation": "Hassas ve çok küçük kütleler Miligram (mg) ile ölçülür."
      },
      {
        "q": "3 ton kömürün 1.200 kilogramı yakıldı. Geriye kaç kilogram kömür kaldı?",
        "options": [
          "1.800 kg",
          "2.800 kg",
          "800 kg",
          "1.500 kg"
        ],
        "answer": 0,
        "explanation": "3 ton = 3.000 kg. 3.000 - 1.200 = 1.800 kg kalmıştır."
      },
      {
        "q": "Günde 250 mL süt içen bir çocuk, 8 günde toplam kaç LİTRE süt tüketmiş olur?",
        "options": [
          "1 L",
          "2 L",
          "3 L",
          "4 L"
        ],
        "answer": 1,
        "explanation": "250 × 8 = 2.000 mL. 2.000 mL = 2 Litredir."
      },
      {
        "q": "Tartılan bir maddenin kabıyla birlikte toplam kütlesine ne ad verilir?",
        "options": [
          "Net Kütle",
          "Dara",
          "Brüt Kütle",
          "Hacim"
        ],
        "answer": 2,
        "explanation": "Kap + İçindeki madde = \"Brüt Kütle\"dir."
      },
      {
        "q": "Bir paket fındık 200 gramdır. 5 paket fındık alan kişi kaç KİLOGRAM fındık almış olur?",
        "options": [
          "1 kg",
          "2 kg",
          "5 kg",
          "10 kg"
        ],
        "answer": 0,
        "explanation": "200 × 5 = 1.000 gram. 1.000 g = 1 kg eder."
      }
    ],
    "quiz": [
      {
        "q": "4 kilogram 350 gram toplam kaç GRAM eder?",
        "options": [
          "435 g",
          "4.350 g",
          "43.500 g",
          "4.035 g"
        ],
        "answer": 1,
        "explanation": "1 kg = 1.000 g. 4 kg = 4.000 g. 4.000 + 350 = 4.350 gramdır."
      },
      {
        "q": "1 ton kaç KİLOGRAMDIR?",
        "options": [
          "10 kg",
          "100 kg",
          "1.000 kg",
          "10.000 kg"
        ],
        "answer": 2,
        "explanation": "1 ton (t) = 1.000 kilogramdır (kg)."
      },
      {
        "q": "İçi bal dolu bir kavanozun brüt kütlesi 1.250 gramdır. Boş kavanozun darası 350 gram olduğuna göre NET bal miktarı kaç gramdır?",
        "options": [
          "900 g",
          "800 g",
          "950 g",
          "1.600 g"
        ],
        "answer": 0,
        "explanation": "Net Kütle = Brüt Kütle - Dara ➜ 1.250 - 350 = 900 gram."
      },
      {
        "q": "Yarım litre kaç MİLİLİTREDİR (mL)?",
        "options": [
          "250 mL",
          "500 mL",
          "750 mL",
          "100 mL"
        ],
        "answer": 1,
        "explanation": "1 Litre = 1.000 mL olduğuna göre yarım litre = 500 mL'dir."
      },
      {
        "q": "250 mL'lik bardaklardan kaç tanesi ile 2 LİTRELİK sürahi tam olarak dolar?",
        "options": [
          "4",
          "6",
          "8",
          "10"
        ],
        "answer": 2,
        "explanation": "1 Litre 4 adet 250 mL'dir. 2 Litre = 2.000 mL ÷ 250 mL = 8 bardak."
      },
      {
        "q": "Altın, gümüş ve ilaç gibi çok hafif maddeler hangi ölçü birimiyle tartılır?",
        "options": [
          "Ton",
          "Kilogram",
          "Miligram",
          "Litre"
        ],
        "answer": 2,
        "explanation": "Hassas ve çok küçük kütleler Miligram (mg) ile ölçülür."
      },
      {
        "q": "3 ton kömürün 1.200 kilogramı yakıldı. Geriye kaç kilogram kömür kaldı?",
        "options": [
          "1.800 kg",
          "2.800 kg",
          "800 kg",
          "1.500 kg"
        ],
        "answer": 0,
        "explanation": "3 ton = 3.000 kg. 3.000 - 1.200 = 1.800 kg kalmıştır."
      },
      {
        "q": "Günde 250 mL süt içen bir çocuk, 8 günde toplam kaç LİTRE süt tüketmiş olur?",
        "options": [
          "1 L",
          "2 L",
          "3 L",
          "4 L"
        ],
        "answer": 1,
        "explanation": "250 × 8 = 2.000 mL. 2.000 mL = 2 Litredir."
      },
      {
        "q": "Tartılan bir maddenin kabıyla birlikte toplam kütlesine ne ad verilir?",
        "options": [
          "Net Kütle",
          "Dara",
          "Brüt Kütle",
          "Hacim"
        ],
        "answer": 2,
        "explanation": "Kap + İçindeki madde = \"Brüt Kütle\"dir."
      },
      {
        "q": "Bir paket fındık 200 gramdır. 5 paket fındık alan kişi kaç KİLOGRAM fındık almış olur?",
        "options": [
          "1 kg",
          "2 kg",
          "5 kg",
          "10 kg"
        ],
        "answer": 0,
        "explanation": "200 × 5 = 1.000 gram. 1.000 g = 1 kg eder."
      }
    ]
  },
  "fen-u1": {
    "id": "fen-u1",
    "subject": "Fen Bilimleri",
    "unitNo": "1. Ünite",
    "title": "Bilime Yolculuk",
    "icon": "🔬",
    "steps": [
      {
        "title": "Bilim Nedir? Merak ve Sorgulama",
        "badge": "1. Adım: Merak",
        "slide": "assets/images/bilime_yolculuk.svg",
        "narration": "Merhaba sevgili genç kâşif! Bilime yolculuğumuz başlıyor. Bilim, çevremizde olup bitenleri anlama, soru sorma ve keşfetme merakıyla doğar. Neden elma yere düşer? Gökyüzü neden mavidir? İşte tüm bu sorular bilimin kıvılcımıdır. Merak eden, araştıran ve sorgulayan her çocuk geleceğin bir bilim insanıdır!",
        "audio": "assets/audio/courses/fen-u1_s1.mp3"
      },
      {
        "title": "Gözlem, Deney ve Bilimsel Kanıt",
        "badge": "2. Adım: Deney",
        "slide": "assets/images/bilime_yolculuk.svg",
        "narration": "Bilim tahminlerle değil, sağlam kanıtlarla ilerler! Bilim insanları önce dikkatle gözlem yapar, ardından hipotez kurar ve bunu deneylerle test eder. Deneyler tekrarlandığında aynı sonucu veriyorsa bilgi güvenilirdir. Bilimsel bilgi objektiftir, yani kişiden kişiye değişmez, tarafsızdır.",
        "audio": "assets/audio/courses/fen-u1_s2.mp3"
      },
      {
        "title": "Bilim İnsanlarının Özellikleri",
        "badge": "3. Adım: Bilim İnsanı",
        "slide": "assets/images/bilime_yolculuk.svg",
        "narration": "Bilim insanları sabırlı, azimli, dürüst ve tarafsızdır. Hatalarından asla korkmazlar! Thomas Edison ampulü bulana kadar binlerce kez başarısız deneme yaptı ama pes etmedi. Nobel ödüllü gururumuz Aziz Sancar, başarının sırrını çok çalışmak ve sabır olarak açıklar. Sen de bilim insanı gibi düşünebilirsin!",
        "audio": "assets/audio/courses/fen-u1_s3.mp3"
      },
      {
        "title": "Bilgi Kaynaklarının Güvenilirliği",
        "badge": "4. Adım: Doğru Bilgi",
        "slide": "assets/images/bilime_yolculuk.svg",
        "narration": "İnternette her gördüğümüz bilgiye hemen inanmamalıyız! Araştırma yaparken gov ve edu uzantılı resmi veya akademik kaynakları tercih etmeliyiz. Bilgiyi en az 2-3 farklı güvenilir kaynaktan doğrulamalıyız. Bilim dürüstlüktür, bu yüzden ödevlerimizde kullandığımız kaynakları mutlaka belirtmeliyiz.",
        "audio": "assets/audio/courses/fen-u1_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Bilimsel bir araştırmanın İLK BASAMAĞI aşağıdakilerden hangisidir?",
        "options": [
          "Rapor yazmak",
          "Merak etmek ve soru sormak",
          "Sonuçları ilan etmek",
          "Ödül almak"
        ],
        "answer": 1,
        "explanation": "Her bilimsel araştırma merak duygusu, gözlem ve soru sormakla başlar."
      },
      {
        "q": "Aşağıdakilerden hangisi bir BİLİM İNSANININ özelliklerinden biri OLAMAZ?",
        "options": [
          "Meraklı ve gözlemci olmak",
          "Sabırlı ve kararlı olmak",
          "İlk başarısızlıkta hemen vazgeçmek",
          "Dürüst ve tarafsız olmak"
        ],
        "answer": 2,
        "explanation": "Bilim insanları asla kolay vazgeçmezler; sabırla ve azimle deneylerine devam ederler."
      },
      {
        "q": "İnternette araştırma yaparken en GÜVENİLİR web sitesi uzantıları hangileridir?",
        "options": [
          ".com ve .net",
          ".gov.tr ve .edu.tr",
          ".xyz ve .biz",
          ".blog ve .tv"
        ],
        "answer": 1,
        "explanation": ".gov (devlet resmi kurumu) ve .edu (üniversite/eğitim kurumu) uzantıları en güvenilir bilimsel kaynaklardır."
      },
      {
        "q": "DNA onarımı alanındaki çalışmalarıyla NOBEL KİMYA ÖDÜLÜ alan Türk bilim insanı kimdir?",
        "options": [
          "Oktay Sinanoğlu",
          "Aziz Sancar",
          "Cahit Arf",
          "Ali Kuşçu"
        ],
        "answer": 1,
        "explanation": "Profesör Doktor Aziz Sancar, hücrelerin hasar gören DNA'ları nasıl onardığını haritalandırarak Nobel Kimya Ödülü kazanmıştır."
      },
      {
        "q": "Bilimsel bir bilginin doğrulanması için aşağıdakilerden hangisi şarttır?",
        "options": [
          "Deney ve gözlemlerle kanıtlanabilir olması",
          "Rüyalarda görülmüş olması",
          "Çok kişinin ona inanması",
          "Televizyonda söylenmiş olması"
        ],
        "answer": 0,
        "explanation": "Bilimsel bilgi kanıtlara, kontrollü deneylere ve tarafsız gözlemlere dayanmak zorundadır."
      },
      {
        "q": "Aşağıdakilerden hangisi bilimsel araştırmalarda \"BİLGİ KİRLİLİĞİ\"ni önleme yöntemidir?",
        "options": [
          "Tek bir sosyal medya gönderisine inanmak",
          "Farklı güvenilir kaynaklardan bilgiyi karşılaştırmak",
          "En çok beğenilen yoruma güvenmek",
          "Arama motorundaki ilk sonuca tıklamak"
        ],
        "answer": 1,
        "explanation": "Farklı ve doğrulanmış kaynakları çapraz karşılaştırmak bilgi kirliliğini engeller."
      },
      {
        "q": "Tıp dünyasında \"El-Kanun fi't-Tıbb\" (Tıbbın Kanunu) kitabını yazan ve yüzlerce yıl tıp dünyasına rehberlik eden İslam bilgini kimdir?",
        "options": [
          "İbni Sina",
          "Harezmi",
          "Biruni",
          "Evliya Çelebi"
        ],
        "answer": 0,
        "explanation": "İbni Sina (Avicenna), modern tıbbın öncüsü sayılan büyük bir hekim ve filozoftur."
      },
      {
        "q": "Bir araştırmada kullanılan bilgilerin nereden alındığını gösteren bölüme ne ad verilir?",
        "options": [
          "Özet",
          "Kaynakça (Bibliyografya)",
          "İçindekiler",
          "Giriş"
        ],
        "answer": 1,
        "explanation": "Araştırmada kullanılan kitap, makale ve sitelerin listelendiği bölüme \"Kaynakça\" denir."
      },
      {
        "q": "Bilim insanlarının yaptığı deney sonuçlarını kişisel fikirlerine göre değil, GERÇEKLERE göre açıklamasına ne denir?",
        "options": [
          "Öznellik",
          "Nesnellik (Tarafsızlık)",
          "Hayalcilik",
          "Kararsızlık"
        ],
        "answer": 1,
        "explanation": "Kişisel duygulardan bağımsız, sadece kanıtlara dayanan tutuma Nesnellik (Objektiflik) denir."
      },
      {
        "q": "Aşağıdakilerden hangisi bilimsel bir tutumdur?",
        "options": [
          "Farklı görüşlere kapalı olmak",
          "Yanlış olduğunu fark edince fikrini kanıtlara göre değiştirmek",
          "Gözlem yapmadan sonuca varmak",
          "Başkalarının fikrini izinsiz kopyalamak"
        ],
        "answer": 1,
        "explanation": "Bilim gelişime açıktır; yeni kanıtlar çıktığında bilim insanları düşüncelerini günceller."
      }
    ],
    "quiz": [
      {
        "q": "Bilimsel bir araştırmanın İLK BASAMAĞI aşağıdakilerden hangisidir?",
        "options": [
          "Rapor yazmak",
          "Merak etmek ve soru sormak",
          "Sonuçları ilan etmek",
          "Ödül almak"
        ],
        "answer": 1,
        "explanation": "Her bilimsel araştırma merak duygusu, gözlem ve soru sormakla başlar."
      },
      {
        "q": "Aşağıdakilerden hangisi bir BİLİM İNSANININ özelliklerinden biri OLAMAZ?",
        "options": [
          "Meraklı ve gözlemci olmak",
          "Sabırlı ve kararlı olmak",
          "İlk başarısızlıkta hemen vazgeçmek",
          "Dürüst ve tarafsız olmak"
        ],
        "answer": 2,
        "explanation": "Bilim insanları asla kolay vazgeçmezler; sabırla ve azimle deneylerine devam ederler."
      },
      {
        "q": "İnternette araştırma yaparken en GÜVENİLİR web sitesi uzantıları hangileridir?",
        "options": [
          ".com ve .net",
          ".gov.tr ve .edu.tr",
          ".xyz ve .biz",
          ".blog ve .tv"
        ],
        "answer": 1,
        "explanation": ".gov (devlet resmi kurumu) ve .edu (üniversite/eğitim kurumu) uzantıları en güvenilir bilimsel kaynaklardır."
      },
      {
        "q": "DNA onarımı alanındaki çalışmalarıyla NOBEL KİMYA ÖDÜLÜ alan Türk bilim insanı kimdir?",
        "options": [
          "Oktay Sinanoğlu",
          "Aziz Sancar",
          "Cahit Arf",
          "Ali Kuşçu"
        ],
        "answer": 1,
        "explanation": "Profesör Doktor Aziz Sancar, hücrelerin hasar gören DNA'ları nasıl onardığını haritalandırarak Nobel Kimya Ödülü kazanmıştır."
      },
      {
        "q": "Bilimsel bir bilginin doğrulanması için aşağıdakilerden hangisi şarttır?",
        "options": [
          "Deney ve gözlemlerle kanıtlanabilir olması",
          "Rüyalarda görülmüş olması",
          "Çok kişinin ona inanması",
          "Televizyonda söylenmiş olması"
        ],
        "answer": 0,
        "explanation": "Bilimsel bilgi kanıtlara, kontrollü deneylere ve tarafsız gözlemlere dayanmak zorundadır."
      },
      {
        "q": "Aşağıdakilerden hangisi bilimsel araştırmalarda \"BİLGİ KİRLİLİĞİ\"ni önleme yöntemidir?",
        "options": [
          "Tek bir sosyal medya gönderisine inanmak",
          "Farklı güvenilir kaynaklardan bilgiyi karşılaştırmak",
          "En çok beğenilen yoruma güvenmek",
          "Arama motorundaki ilk sonuca tıklamak"
        ],
        "answer": 1,
        "explanation": "Farklı ve doğrulanmış kaynakları çapraz karşılaştırmak bilgi kirliliğini engeller."
      },
      {
        "q": "Tıp dünyasında \"El-Kanun fi't-Tıbb\" (Tıbbın Kanunu) kitabını yazan ve yüzlerce yıl tıp dünyasına rehberlik eden İslam bilgini kimdir?",
        "options": [
          "İbni Sina",
          "Harezmi",
          "Biruni",
          "Evliya Çelebi"
        ],
        "answer": 0,
        "explanation": "İbni Sina (Avicenna), modern tıbbın öncüsü sayılan büyük bir hekim ve filozoftur."
      },
      {
        "q": "Bir araştırmada kullanılan bilgilerin nereden alındığını gösteren bölüme ne ad verilir?",
        "options": [
          "Özet",
          "Kaynakça (Bibliyografya)",
          "İçindekiler",
          "Giriş"
        ],
        "answer": 1,
        "explanation": "Araştırmada kullanılan kitap, makale ve sitelerin listelendiği bölüme \"Kaynakça\" denir."
      },
      {
        "q": "Bilim insanlarının yaptığı deney sonuçlarını kişisel fikirlerine göre değil, GERÇEKLERE göre açıklamasına ne denir?",
        "options": [
          "Öznellik",
          "Nesnellik (Tarafsızlık)",
          "Hayalcilik",
          "Kararsızlık"
        ],
        "answer": 1,
        "explanation": "Kişisel duygulardan bağımsız, sadece kanıtlara dayanan tutuma Nesnellik (Objektiflik) denir."
      },
      {
        "q": "Aşağıdakilerden hangisi bilimsel bir tutumdur?",
        "options": [
          "Farklı görüşlere kapalı olmak",
          "Yanlış olduğunu fark edince fikrini kanıtlara göre değiştirmek",
          "Gözlem yapmadan sonuca varmak",
          "Başkalarının fikrini izinsiz kopyalamak"
        ],
        "answer": 1,
        "explanation": "Bilim gelişime açıktır; yeni kanıtlar çıktığında bilim insanları düşüncelerini günceller."
      }
    ]
  },
  "fen-u2": {
    "id": "fen-u2",
    "subject": "Fen Bilimleri",
    "unitNo": "2. Ünite",
    "title": "Sağlıklı Besleniyorum",
    "icon": "🥗",
    "steps": [
      {
        "title": "Besin İçerikleri: Karbonhidratlar ve Yağlar",
        "badge": "1. Adım: Enerji Kaynakları",
        "slide": "assets/images/saglikli_besleniyorum.svg",
        "narration": "Merhaba kâşif! Koşmak, oynamak ve düşünmek için enerjiye ihtiyacımız var! Vücudumuzun birinci öncelikli enerji kaynağı Karbonhidratlardır: Ekmek, makarna, pilav, patates gibi. Yağlar ise yedek enerji depomuzdur ve organlarımızı soğuktan korur: Zeytinyağı, ceviz, fındık gibi. Ancak aşırı yağ ve şeker tüketimi obeziteye yol açabilir!",
        "audio": "assets/audio/courses/fen-u2_s1.mp3"
      },
      {
        "title": "Proteinler: Yapıcı ve Onarıcı Kahramanlar",
        "badge": "2. Adım: Proteinler",
        "slide": "assets/images/saglikli_besleniyorum.svg",
        "narration": "Düştüğünde dizindeki yaranın nasıl iyileştiğini merak ettin mi? İşte bunu Proteinler yapar! Proteinler vücudumuzun yapıcı ve onarıcı besinleridir. Büyümemizi, kaslarımızın güçlenmesini ve yaralarımızın onarılmasını sağlarlar. Et, süt, yumurta, balık, tavuk ve mercimek zengin protein kaynaklarıdır.",
        "audio": "assets/audio/courses/fen-u2_s2.mp3"
      },
      {
        "title": "Vitaminler, Su ve Mineraller: Düzenleyiciler",
        "badge": "3. Adım: Düzenleyiciler",
        "slide": "assets/images/saglikli_besleniyorum.svg",
        "narration": "Vitaminler, su ve mineraller vücudumuzun koruyucu kalkanı ve Düzenleyicileridir! Meyve ve sebzeler vitamin deposudur; bizi grip ve hastalıklardan korur. Mineraller kemik ve dişlerimizi çelik gibi güçlendirir. Su ise hayatın ta kendisidir! Günde en az 1.5 - 2 litre su içerek vücut ısımızı dengeler ve atıkları temizleriz.",
        "audio": "assets/audio/courses/fen-u2_s3.mp3"
      },
      {
        "title": "Bilinçli Tüketici ve Sağlıklı Yaşam",
        "badge": "4. Adım: Bilinçli Yaşam",
        "slide": "assets/images/saglikli_besleniyorum.svg",
        "narration": "Marketten paketli gıda alırken mutlaka Son Tüketim Tarihine (SKT) ve TSE damgasına bakmalıyız. Paketi yırtık veya şişmiş ürünleri asla almamalıyız. Mevsiminde taze sebze ve meyve yemeli, zararlı alışkanlıklardan uzak durmalı ve tabağımıza yiyebileceğimiz kadar yemek alarak israfı önlemeliyiz!",
        "audio": "assets/audio/courses/fen-u2_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Vücudumuzda ÖNCELİKLİ ENERJİ VERİCİ olarak görev yapan besin içeriği hangisidir?",
        "options": [
          "Proteinler",
          "Karbonhidratlar",
          "Vitaminler",
          "Mineraller"
        ],
        "answer": 1,
        "explanation": "Günlük aktivitelerimizde ve beynimizin çalışmasında 1. derece enerji kaynağı Karbonhidratlardır."
      },
      {
        "q": "Vücudumuzda BÜYÜME, GELİŞME ve YARALARIN ONARILMASINDA görev alan besin içeriği hangisidir?",
        "options": [
          "Proteinler",
          "Yağlar",
          "Karbonhidratlar",
          "Su"
        ],
        "answer": 0,
        "explanation": "Yapıcı ve onarıcı temel besin maddesi Proteinlerdir (Et, süt, yumurta ve benzeri )."
      },
      {
        "q": "Bizi hastalıklardan koruyan ve vücudumuzda DÜZENLEYİCİ olarak görev yapan besin grubu hangisidir?",
        "options": [
          "Vitaminler",
          "Karbonhidratlar",
          "Yağlar",
          "Şekerler"
        ],
        "answer": 0,
        "explanation": "Vitaminler, mineraller ve su vücudumuzda düzenleyici ve bağışıklık koruyucu olarak çalışır."
      },
      {
        "q": "Aşağıdaki yiyeceklerden hangisi PROTEİN bakımından en zengindir?",
        "options": [
          "Elma",
          "Yumurta ve Balık",
          "Patates",
          "Zeytinyağı"
        ],
        "answer": 1,
        "explanation": "Yumurta, balık, et ve süt ürünleri en kaliteli protein kaynaklarıdır."
      },
      {
        "q": "Paketlenmiş bir gıda satın alırken aşağıdakilerden hangisine DİKKAT EDİLMELİDİR?",
        "options": [
          "Ambalajının rengarenk olmasına",
          "Son Tüketim Tarihine (SKT) ve TSE damgasına",
          "Televizyonda çok reklamının yapılmasına",
          "En pahalı ürün olmasına"
        ],
        "answer": 1,
        "explanation": "Son tüketim tarihi ve TSE standardı damgası gıdanın güvenilir olduğunu gösterir."
      },
      {
        "q": "Aşırı şekerli, yağlı beslenme ve hareketsizlik sonucu ortaya çıkan aşırı kilo hastalığına ne ad verilir?",
        "options": [
          "Grip",
          "Obezite",
          "Anemi",
          "Alerji"
        ],
        "answer": 1,
        "explanation": "Dengesiz ve aşırı kalorili beslenme obezite (şişmanlık) hastalığına yol açar."
      },
      {
        "q": "Vücudumuzun ihtiyacı olan tüm besin gruplarından YETERLİ ve DENGELİ miktarda alınmasına ne ad verilir?",
        "options": [
          "Dengeli (Yeterli) Beslenme",
          "Tek Yönlü Beslenme",
          "Oruç",
          "Diyet"
        ],
        "answer": 0,
        "explanation": "Her besin grubundan vücudun ihtiyacı kadar almaya Dengeli Beslenme denir."
      },
      {
        "q": "Kemik ve dişlerimizin güçlü olması için hangi mineral özellikle gereklidir?",
        "options": [
          "Kalsiyum",
          "Karbonhidrat",
          "Glikoz",
          "Katı yağ"
        ],
        "answer": 0,
        "explanation": "Süt ve yoğurtta bol bulunan Kalsiyum minerali kemik ve diş gelişiminin anahtarıdır."
      },
      {
        "q": "Günde ortalama kaç litre SU tüketmek vücut sağlığımız için tavsiye edilir?",
        "options": [
          "Yarım litre",
          "1.5 - 2 Litre",
          "5 Litre",
          "10 Litre"
        ],
        "answer": 1,
        "explanation": "Sağlıklı bir çocuk günde yaklaşık 1.5 - 2 litre su tüketmelidir."
      },
      {
        "q": "Aşağıdakilerden hangisi vücudumuza YEDEK ENERJİ DEPOSU olarak hizmet eder?",
        "options": [
          "Su",
          "Yağlar",
          "Tuz",
          "Vitamin C"
        ],
        "answer": 1,
        "explanation": "Yağlar vücudumuzun uzun süreli yedek enerji deposudur ve organları korur."
      }
    ],
    "quiz": [
      {
        "q": "Vücudumuzda ÖNCELİKLİ ENERJİ VERİCİ olarak görev yapan besin içeriği hangisidir?",
        "options": [
          "Proteinler",
          "Karbonhidratlar",
          "Vitaminler",
          "Mineraller"
        ],
        "answer": 1,
        "explanation": "Günlük aktivitelerimizde ve beynimizin çalışmasında 1. derece enerji kaynağı Karbonhidratlardır."
      },
      {
        "q": "Vücudumuzda BÜYÜME, GELİŞME ve YARALARIN ONARILMASINDA görev alan besin içeriği hangisidir?",
        "options": [
          "Proteinler",
          "Yağlar",
          "Karbonhidratlar",
          "Su"
        ],
        "answer": 0,
        "explanation": "Yapıcı ve onarıcı temel besin maddesi Proteinlerdir (Et, süt, yumurta ve benzeri )."
      },
      {
        "q": "Bizi hastalıklardan koruyan ve vücudumuzda DÜZENLEYİCİ olarak görev yapan besin grubu hangisidir?",
        "options": [
          "Vitaminler",
          "Karbonhidratlar",
          "Yağlar",
          "Şekerler"
        ],
        "answer": 0,
        "explanation": "Vitaminler, mineraller ve su vücudumuzda düzenleyici ve bağışıklık koruyucu olarak çalışır."
      },
      {
        "q": "Aşağıdaki yiyeceklerden hangisi PROTEİN bakımından en zengindir?",
        "options": [
          "Elma",
          "Yumurta ve Balık",
          "Patates",
          "Zeytinyağı"
        ],
        "answer": 1,
        "explanation": "Yumurta, balık, et ve süt ürünleri en kaliteli protein kaynaklarıdır."
      },
      {
        "q": "Paketlenmiş bir gıda satın alırken aşağıdakilerden hangisine DİKKAT EDİLMELİDİR?",
        "options": [
          "Ambalajının rengarenk olmasına",
          "Son Tüketim Tarihine (SKT) ve TSE damgasına",
          "Televizyonda çok reklamının yapılmasına",
          "En pahalı ürün olmasına"
        ],
        "answer": 1,
        "explanation": "Son tüketim tarihi ve TSE standardı damgası gıdanın güvenilir olduğunu gösterir."
      },
      {
        "q": "Aşırı şekerli, yağlı beslenme ve hareketsizlik sonucu ortaya çıkan aşırı kilo hastalığına ne ad verilir?",
        "options": [
          "Grip",
          "Obezite",
          "Anemi",
          "Alerji"
        ],
        "answer": 1,
        "explanation": "Dengesiz ve aşırı kalorili beslenme obezite (şişmanlık) hastalığına yol açar."
      },
      {
        "q": "Vücudumuzun ihtiyacı olan tüm besin gruplarından YETERLİ ve DENGELİ miktarda alınmasına ne ad verilir?",
        "options": [
          "Dengeli (Yeterli) Beslenme",
          "Tek Yönlü Beslenme",
          "Oruç",
          "Diyet"
        ],
        "answer": 0,
        "explanation": "Her besin grubundan vücudun ihtiyacı kadar almaya Dengeli Beslenme denir."
      },
      {
        "q": "Kemik ve dişlerimizin güçlü olması için hangi mineral özellikle gereklidir?",
        "options": [
          "Kalsiyum",
          "Karbonhidrat",
          "Glikoz",
          "Katı yağ"
        ],
        "answer": 0,
        "explanation": "Süt ve yoğurtta bol bulunan Kalsiyum minerali kemik ve diş gelişiminin anahtarıdır."
      },
      {
        "q": "Günde ortalama kaç litre SU tüketmek vücut sağlığımız için tavsiye edilir?",
        "options": [
          "Yarım litre",
          "1.5 - 2 Litre",
          "5 Litre",
          "10 Litre"
        ],
        "answer": 1,
        "explanation": "Sağlıklı bir çocuk günde yaklaşık 1.5 - 2 litre su tüketmelidir."
      },
      {
        "q": "Aşağıdakilerden hangisi vücudumuza YEDEK ENERJİ DEPOSU olarak hizmet eder?",
        "options": [
          "Su",
          "Yağlar",
          "Tuz",
          "Vitamin C"
        ],
        "answer": 1,
        "explanation": "Yağlar vücudumuzun uzun süreli yedek enerji deposudur ve organları korur."
      }
    ]
  },
  "fen-u3": {
    "id": "fen-u3",
    "subject": "Fen Bilimleri",
    "unitNo": "3. Ünite",
    "title": "Dünya'mızı Keşfedelim",
    "icon": "🌍",
    "steps": [
      {
        "title": "Dünya'mızın Şekli ve Katmanları",
        "badge": "1. Adım: Dünya Katmanları",
        "slide": "assets/images/dunyamizi_kesfedelim.svg",
        "narration": "Merhaba uzay kâşifim! Üzerinde yaşadığımız mavi gezegenimiz Dünya, kutuplardan hafif basık, ekvatordan şişkindir; bu özel küre şekline Geoit denir. Dünya'mız bir soğan gibi katmanlardan oluşur! Dışta Hava Küre (Atmosfer), Su Küre ve Taş Küre (Yer Kabuğu) yer alır. İçte ise kızgın erimiş lavlardan oluşan Manto (Ateş Küre) ve en merkezde en sıcak katman olan Çekirdek (Ağır Küre) bulunur.",
        "audio": "assets/audio/courses/fen-u3_s1.mp3"
      },
      {
        "title": "Dünya'nın Dönme Hareketi: Gece ve Gündüz",
        "badge": "2. Adım: Dönme Hareketi",
        "slide": "assets/images/dunyamizi_kesfedelim.svg",
        "narration": "Dünya'mız hiç durmadan iki farklı hareket yapar! Birincisi: Kendi ekseni etrafında Dönme hareketidir. Batıdan doğuya doğru döner ve bir tam turunu tam 24 saatte, yani 1 günde tamamlar! Bu hareket sonucunda GECE ve GÜNDÜZ oluşur. Güneşe bakan taraf gündüzü, arkada kalan taraf geceyi yaşar. Ayrıca gün içinde gölge boylarımız değişir.",
        "audio": "assets/audio/courses/fen-u3_s2.mp3"
      },
      {
        "title": "Dünya'nın Dolanma Hareketi: Mevsimler",
        "badge": "3. Adım: Dolanma Hareketi",
        "slide": "assets/images/dunyamizi_kesfedelim.svg",
        "narration": "İkinci hareket: Dünya'nın Güneş etrafında Dolanma hareketidir! Dünya, Güneş etrafındaki elips şeklindeki yörüngesinde dolanır ve bu turunu 365 gün 6 saatte, yani 1 YILDA tamamlar! Eksen eğikliği ve dolanma hareketi sayesinde dört güzel mevsim oluşur: İlkbahar, Yaz, Sonbahar ve Kış! Yıl içinde sıcaklık farkları meydana gelir.",
        "audio": "assets/audio/courses/fen-u3_s3.mp3"
      },
      {
        "title": "Kayaçlar, Mineraller ve Fosiller",
        "badge": "4. Adım: Kayaçlar & Fosil",
        "slide": "assets/images/dunyamizi_kesfedelim.svg",
        "narration": "Üzerinde yürüdüğümüz yer kabuğu kayaçlardan oluşur. Kayaçların rengini ve sertliğini içlerindeki Mineraller belirler. Milyonlarca yıl önce yaşamış bitki ve hayvanların taşlaşmış kalıntılarına ise Fosil denir! Fosiller geçmişteki yaşam ve Dünya tarihi hakkında bize paha biçilmez ipuçları verir.",
        "audio": "assets/audio/courses/fen-u3_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Dünya'nın KENDİ EKSENİ ETRAFINDA dönmesi sonucunda aşağıdakilerden hangisi oluşur?",
        "options": [
          "Mevsimler",
          "Gece ve Gündüz",
          "Yıllar",
          "Ay tutulması"
        ],
        "answer": 1,
        "explanation": "Dünya kendi etrafında 24 saatte döner ve bu sırada Gece ve Gündüz oluşur."
      },
      {
        "q": "Dünya'nın Güneş etrafındaki 1 TAM DOLANIMI ne kadar sürede tamamlanır?",
        "options": [
          "24 Saat",
          "1 Ay",
          "365 Gün 6 Saat (1 Yıl)",
          "7 Gün"
        ],
        "answer": 2,
        "explanation": "Güneş etrafındaki tam dolanım 365 gün 6 saat (1 takvim yılı) sürer."
      },
      {
        "q": "MEVSİMLERİN (İlkbahar, Yaz, Sonbahar, Kış) oluşmasının temel sebebi nedir?",
        "options": [
          "Dünya'nın kendi etrafında dönmesi",
          "Dünya'nın Güneş etrafında dolanması ve eksen eğikliği",
          "Ay'ın Dünya etrafında dönmesi",
          "Rüzgârların esmesi"
        ],
        "answer": 1,
        "explanation": "Dünya'nın Güneş etrafında dolanması ve 23.5 derecelik eksen eğikliği mevsimleri oluşturur."
      },
      {
        "q": "Dünya'nın merkezinde bulunan, en sıcak ve en yoğun katman hangisidir?",
        "options": [
          "Taş Küre (Yer kabuğu)",
          "Ateş Küre (Manto)",
          "Ağır Küre (Çekirdek)",
          "Hava Küre (Atmosfer)"
        ],
        "answer": 2,
        "explanation": "Dünya'nın merkezinde en yüksek sıcaklık ve basınca sahip Çekirdek (Ağır Küre) yer alır."
      },
      {
        "q": "Kızgın erimiş lavların (magma) bulunduğu Dünya katmanı hangisidir?",
        "options": [
          "Manto (Ateş Küre)",
          "Yer kabuğu",
          "Su küre",
          "Atmosfer"
        ],
        "answer": 0,
        "explanation": "Yer kabuğunun hemen altında erimiş kayaçlardan oluşan Manto tabakası bulunur."
      },
      {
        "q": "Milyonlarca yıl önce yaşamış canlıların kayaçlar arasında taşlaşmış kalıntılarına ne ad verilir?",
        "options": [
          "Mineral",
          "Fosil",
          "Kömür",
          "Toprak"
        ],
        "answer": 1,
        "explanation": "Geçmiş canlıların taşlaşmış iz ve iskeletlerine \"Fosil\" denir."
      },
      {
        "q": "Dünya kendi ekseni etrafında HANGİ YÖNDE döner?",
        "options": [
          "Doğudan Batıya",
          "Batıdan Doğuya",
          "Kuzeyden Güneye",
          "Güneyden Kuzeye"
        ],
        "answer": 1,
        "explanation": "Dünya batıdan doğuya doğru (saat yönünün tersine) döner; bu yüzden Güneş doğudan doğar."
      },
      {
        "q": "Kayaçların parçalanmasıyla sırasıyla hangi yapılar oluşur?",
        "options": [
          "Kayaç ➜ Kaya ➜ Taş ➜ Çakıl ➜ Kum",
          "Kum ➜ Çakıl ➜ Kayaç ➜ Taş",
          "Kaya ➜ Kayaç ➜ Kum ➜ Taş",
          "Taş ➜ Çakıl ➜ Kaya ➜ Kayaç"
        ],
        "answer": 0,
        "explanation": "Kayaçlar rüzgâr ve suyla ufalanarak: Kaya, taş, çakıl ve en sonunda kumu oluşturur."
      },
      {
        "q": "Aşağıdakilerden hangisi Dünya'mızın DIŞ KATMANLARINDAN biridir?",
        "options": [
          "Çekirdek",
          "Manto",
          "Hava Küre (Atmosfer)",
          "İç Çekirdek"
        ],
        "answer": 2,
        "explanation": "Hava küre, su küre ve taş küre Dünya'nın dış katmanlarıdır."
      },
      {
        "q": "Günün farklı saatlerinde bir ağacın GÖLGE BOYUNUN değişmesinin sebebi nedir?",
        "options": [
          "Dünya'nın Güneş'e yaklaşıp uzaklaşması",
          "Dünya'nın kendi ekseni etrafında dönmesi",
          "Mevsimlerin değişmesi",
          "Ay'ın ışığı engellemesi"
        ],
        "answer": 1,
        "explanation": "Dünya döndükçe Güneş ışınlarının geliş açısı gün boyu değişir ve gölgeler uzayıp kısalır."
      }
    ],
    "quiz": [
      {
        "q": "Dünya'nın KENDİ EKSENİ ETRAFINDA dönmesi sonucunda aşağıdakilerden hangisi oluşur?",
        "options": [
          "Mevsimler",
          "Gece ve Gündüz",
          "Yıllar",
          "Ay tutulması"
        ],
        "answer": 1,
        "explanation": "Dünya kendi etrafında 24 saatte döner ve bu sırada Gece ve Gündüz oluşur."
      },
      {
        "q": "Dünya'nın Güneş etrafındaki 1 TAM DOLANIMI ne kadar sürede tamamlanır?",
        "options": [
          "24 Saat",
          "1 Ay",
          "365 Gün 6 Saat (1 Yıl)",
          "7 Gün"
        ],
        "answer": 2,
        "explanation": "Güneş etrafındaki tam dolanım 365 gün 6 saat (1 takvim yılı) sürer."
      },
      {
        "q": "MEVSİMLERİN (İlkbahar, Yaz, Sonbahar, Kış) oluşmasının temel sebebi nedir?",
        "options": [
          "Dünya'nın kendi etrafında dönmesi",
          "Dünya'nın Güneş etrafında dolanması ve eksen eğikliği",
          "Ay'ın Dünya etrafında dönmesi",
          "Rüzgârların esmesi"
        ],
        "answer": 1,
        "explanation": "Dünya'nın Güneş etrafında dolanması ve 23.5 derecelik eksen eğikliği mevsimleri oluşturur."
      },
      {
        "q": "Dünya'nın merkezinde bulunan, en sıcak ve en yoğun katman hangisidir?",
        "options": [
          "Taş Küre (Yer kabuğu)",
          "Ateş Küre (Manto)",
          "Ağır Küre (Çekirdek)",
          "Hava Küre (Atmosfer)"
        ],
        "answer": 2,
        "explanation": "Dünya'nın merkezinde en yüksek sıcaklık ve basınca sahip Çekirdek (Ağır Küre) yer alır."
      },
      {
        "q": "Kızgın erimiş lavların (magma) bulunduğu Dünya katmanı hangisidir?",
        "options": [
          "Manto (Ateş Küre)",
          "Yer kabuğu",
          "Su küre",
          "Atmosfer"
        ],
        "answer": 0,
        "explanation": "Yer kabuğunun hemen altında erimiş kayaçlardan oluşan Manto tabakası bulunur."
      },
      {
        "q": "Milyonlarca yıl önce yaşamış canlıların kayaçlar arasında taşlaşmış kalıntılarına ne ad verilir?",
        "options": [
          "Mineral",
          "Fosil",
          "Kömür",
          "Toprak"
        ],
        "answer": 1,
        "explanation": "Geçmiş canlıların taşlaşmış iz ve iskeletlerine \"Fosil\" denir."
      },
      {
        "q": "Dünya kendi ekseni etrafında HANGİ YÖNDE döner?",
        "options": [
          "Doğudan Batıya",
          "Batıdan Doğuya",
          "Kuzeyden Güneye",
          "Güneyden Kuzeye"
        ],
        "answer": 1,
        "explanation": "Dünya batıdan doğuya doğru (saat yönünün tersine) döner; bu yüzden Güneş doğudan doğar."
      },
      {
        "q": "Kayaçların parçalanmasıyla sırasıyla hangi yapılar oluşur?",
        "options": [
          "Kayaç ➜ Kaya ➜ Taş ➜ Çakıl ➜ Kum",
          "Kum ➜ Çakıl ➜ Kayaç ➜ Taş",
          "Kaya ➜ Kayaç ➜ Kum ➜ Taş",
          "Taş ➜ Çakıl ➜ Kaya ➜ Kayaç"
        ],
        "answer": 0,
        "explanation": "Kayaçlar rüzgâr ve suyla ufalanarak: Kaya, taş, çakıl ve en sonunda kumu oluşturur."
      },
      {
        "q": "Aşağıdakilerden hangisi Dünya'mızın DIŞ KATMANLARINDAN biridir?",
        "options": [
          "Çekirdek",
          "Manto",
          "Hava Küre (Atmosfer)",
          "İç Çekirdek"
        ],
        "answer": 2,
        "explanation": "Hava küre, su küre ve taş küre Dünya'nın dış katmanlarıdır."
      },
      {
        "q": "Günün farklı saatlerinde bir ağacın GÖLGE BOYUNUN değişmesinin sebebi nedir?",
        "options": [
          "Dünya'nın Güneş'e yaklaşıp uzaklaşması",
          "Dünya'nın kendi ekseni etrafında dönmesi",
          "Mevsimlerin değişmesi",
          "Ay'ın ışığı engellemesi"
        ],
        "answer": 1,
        "explanation": "Dünya döndükçe Güneş ışınlarının geliş açısı gün boyu değişir ve gölgeler uzayıp kısalır."
      }
    ]
  },
  "fen-u4": {
    "id": "fen-u4",
    "subject": "Fen Bilimleri",
    "unitNo": "4. Ünite",
    "title": "Maddenin Değişimi",
    "icon": "🧊",
    "steps": [
      {
        "title": "Maddenin Üç Hâli: Katı, Sıvı ve Gaz",
        "badge": "1. Adım: Maddenin Hâlleri",
        "slide": "assets/images/maddenin_degisimi.svg",
        "narration": "Merhaba genç kimyager! Çevremizdeki her şey maddedir. Maddeler doğada katı, sıvı ve gaz olmak üzere üç hâlde bulunur. Katıların belirli bir şekli ve hacmi vardır: Taş, tahta, buz gibi. Sıvıların hacmi bellidir ama şekli yoktur, konuldukları kabın şeklini alırlar: Su, süt gibi. Gazların ise ne belirli bir şekli ne de hacmi vardır, ortama hızla yayılırlar: Su buharı ve hava gibi.",
        "audio": "assets/audio/courses/fen-u4_s1.mp3"
      },
      {
        "title": "Hâl Değişimleri: Erime, Donma, Buharlaşma",
        "badge": "2. Adım: Hâl Değişimi",
        "slide": "assets/images/maddenin_degisimi.svg",
        "narration": "Maddeler ısı aldıklarında veya verdiklerinde bir hâlden diğerine geçerler! Katı bir maddenin ısı alarak sıvıya dönüşmesine Erime denir (Buzun suya dönüşmesi). Sıvı bir maddenin ısı vererek katıya dönüşmesine Donma denir (Suyun buza dönüşmesi). Sıvının ısı alarak gaz hâle geçmesine Buharlaşma, gazın ısı vererek sıvılaşmasına ise Yoğuşma denir!",
        "audio": "assets/audio/courses/fen-u4_s2.mp3"
      },
      {
        "title": "Isı ve Sıcaklık Arasındaki Fark",
        "badge": "3. Adım: Isı ve Sıcaklık",
        "slide": "assets/images/maddenin_degisimi.svg",
        "narration": "Bu iki kavramı asla karıştırma: Isı bir Enerji türüdür! Sıcak maddeden soğuk maddeye akar. Birimi Kalori veya Joule'dür. Sıcaklık ise bir enerji değildir; maddelerin tanecik hareketinin bir Ölçüsüdür ve Termometre ile ölçülür! Birimi Derece Selsiyus (°C)'tur. \"Havanın ısısı 25 derece\" demek yanlıştır; \"Havanın sıcaklığı 25 derece\" denmelidir!",
        "audio": "assets/audio/courses/fen-u4_s3.mp3"
      },
      {
        "title": "Saf Madde ve Karışımlar",
        "badge": "4. Adım: Saf Madde & Karışım",
        "slide": "assets/images/maddenin_degisimi.svg",
        "narration": "İçinde tek bir cins madde bulunduran maddelere Saf Madde denir: Saf su, demir, altın, tuz gibi. Birden fazla saf maddenin kendi özelliklerini kaybetmeden bir araya gelmesiyle oluşanlara ise Karışım denir: Salata, limonata, ayran, çorba gibi. Karışımları süzme, eleme ve mıknatısla kolayca birbirinden ayırabiliriz!",
        "audio": "assets/audio/courses/fen-u4_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Katı bir maddenin ısı ALARAK sıvı hâle geçmesine ne ad verilir?",
        "options": [
          "Donma",
          "Erime",
          "Yoğuşma",
          "Buharlaşma"
        ],
        "answer": 1,
        "explanation": "Katı maddenin ısı etkisiyle sıvıya dönüşmesine \"Erime\" denir (Örn: Buzun erimesi)."
      },
      {
        "q": "Gaz hâldeki su buharının soğuk bir yüzeye çarpıp ısı VEREREK sıvı damlacıklara dönüşmesine ne denir?",
        "options": [
          "Yoğuşma",
          "Erime",
          "Kaynama",
          "Süblimleşme"
        ],
        "answer": 0,
        "explanation": "Gazın sıvıya dönüşmesi \"Yoğuşma\"dır (Örn: Yağmur oluşumu veya banyo aynasının buğulanması)."
      },
      {
        "q": "Aşağıdakilerden hangisi bir SAF MADDEDİR?",
        "options": [
          "Limonata",
          "Salata",
          "Saf Su",
          "Ayran"
        ],
        "answer": 2,
        "explanation": "Saf su tek cins molekülden oluştuğu için saf maddedir; diğerleri karışımdır."
      },
      {
        "q": "Sıcaklık hangi aletle ölçülür ve birimi nedir?",
        "options": [
          "Dinamometre - Newton",
          "Termometre - Derece Selsiyus (°C)",
          "Metre - Santimetre",
          "Kronometre - Saniye"
        ],
        "answer": 1,
        "explanation": "Sıcaklık Termometre ile ölçülür ve birimi Derece Selsiyus (°C)'tur."
      },
      {
        "q": "Demir tozu ile kumu birbirinden ayırmak için en pratik yöntem hangisidir?",
        "options": [
          "Süzme",
          "Mıknatıs kullanma",
          "Eleme",
          "Buharlaştırma"
        ],
        "answer": 1,
        "explanation": "Mıknatıs demir tozlarını çeker, kumu çekmez; böylece karışım kolayca ayrılır."
      },
      {
        "q": "Farklı sıcaklıktaki iki madde birbirine temas ettirildiğinde ISI AKIŞI hangi yönde olur?",
        "options": [
          "Soğuk maddeden sıcak maddeye",
          "Sıcak maddeden soğuk maddeye",
          "Büyük maddeden küçük maddeye",
          "Isı akışı gerçekleşmez"
        ],
        "answer": 1,
        "explanation": "Isı daima sıcaklığı yüksek olan maddeden sıcaklığı düşük olan maddeye doğru akar."
      },
      {
        "q": "Aşağıdaki ifadelerden hangisi BİLİMSEL OLARAK DOĞRUDUR?",
        "options": [
          "Bugün hava ısısı 28 derecedir.",
          "Bugün hava sıcaklığı 28 °C'dir.",
          "Sıcaklık bir enerji türüdür.",
          "Isı termometre ile ölçülür."
        ],
        "answer": 1,
        "explanation": "Termometre ile ölçülen ve derece cinsinden söylenen büyüklük Sıcaklıktır."
      },
      {
        "q": "Belirli bir şekli olmayan, konulduğu kabın şeklini alan ve akışkan olan madde hâli hangisidir?",
        "options": [
          "Katı",
          "Sıvı",
          "Buz",
          "Taş"
        ],
        "answer": 1,
        "explanation": "Sıvı maddeler akışkandır ve bulundukları kabın doldurdukları kısmının şeklini alır."
      },
      {
        "q": "Makarna ile suyu birbirinden ayırmak için hangi ayırma yöntemi kullanılır?",
        "options": [
          "Mıknatısla ayırma",
          "Süzme",
          "Eleme",
          "Damıtma"
        ],
        "answer": 1,
        "explanation": "Katı-sıvı karışımları olan makarna ve suyu süzgeçle süzerek ayırırız."
      },
      {
        "q": "Sıvı bir maddenin dışarıya ısı VEREREK katı hâle geçmesi olayına ne ad verilir?",
        "options": [
          "Erime",
          "Buharlaşma",
          "Donma",
          "Yoğuşma"
        ],
        "answer": 2,
        "explanation": "Sıvının katılaşması olayına \"Donma\" denir (Suyun buzluğa konup donması)."
      }
    ],
    "quiz": [
      {
        "q": "Katı bir maddenin ısı ALARAK sıvı hâle geçmesine ne ad verilir?",
        "options": [
          "Donma",
          "Erime",
          "Yoğuşma",
          "Buharlaşma"
        ],
        "answer": 1,
        "explanation": "Katı maddenin ısı etkisiyle sıvıya dönüşmesine \"Erime\" denir (Örn: Buzun erimesi)."
      },
      {
        "q": "Gaz hâldeki su buharının soğuk bir yüzeye çarpıp ısı VEREREK sıvı damlacıklara dönüşmesine ne denir?",
        "options": [
          "Yoğuşma",
          "Erime",
          "Kaynama",
          "Süblimleşme"
        ],
        "answer": 0,
        "explanation": "Gazın sıvıya dönüşmesi \"Yoğuşma\"dır (Örn: Yağmur oluşumu veya banyo aynasının buğulanması)."
      },
      {
        "q": "Aşağıdakilerden hangisi bir SAF MADDEDİR?",
        "options": [
          "Limonata",
          "Salata",
          "Saf Su",
          "Ayran"
        ],
        "answer": 2,
        "explanation": "Saf su tek cins molekülden oluştuğu için saf maddedir; diğerleri karışımdır."
      },
      {
        "q": "Sıcaklık hangi aletle ölçülür ve birimi nedir?",
        "options": [
          "Dinamometre - Newton",
          "Termometre - Derece Selsiyus (°C)",
          "Metre - Santimetre",
          "Kronometre - Saniye"
        ],
        "answer": 1,
        "explanation": "Sıcaklık Termometre ile ölçülür ve birimi Derece Selsiyus (°C)'tur."
      },
      {
        "q": "Demir tozu ile kumu birbirinden ayırmak için en pratik yöntem hangisidir?",
        "options": [
          "Süzme",
          "Mıknatıs kullanma",
          "Eleme",
          "Buharlaştırma"
        ],
        "answer": 1,
        "explanation": "Mıknatıs demir tozlarını çeker, kumu çekmez; böylece karışım kolayca ayrılır."
      },
      {
        "q": "Farklı sıcaklıktaki iki madde birbirine temas ettirildiğinde ISI AKIŞI hangi yönde olur?",
        "options": [
          "Soğuk maddeden sıcak maddeye",
          "Sıcak maddeden soğuk maddeye",
          "Büyük maddeden küçük maddeye",
          "Isı akışı gerçekleşmez"
        ],
        "answer": 1,
        "explanation": "Isı daima sıcaklığı yüksek olan maddeden sıcaklığı düşük olan maddeye doğru akar."
      },
      {
        "q": "Aşağıdaki ifadelerden hangisi BİLİMSEL OLARAK DOĞRUDUR?",
        "options": [
          "Bugün hava ısısı 28 derecedir.",
          "Bugün hava sıcaklığı 28 °C'dir.",
          "Sıcaklık bir enerji türüdür.",
          "Isı termometre ile ölçülür."
        ],
        "answer": 1,
        "explanation": "Termometre ile ölçülen ve derece cinsinden söylenen büyüklük Sıcaklıktır."
      },
      {
        "q": "Belirli bir şekli olmayan, konulduğu kabın şeklini alan ve akışkan olan madde hâli hangisidir?",
        "options": [
          "Katı",
          "Sıvı",
          "Buz",
          "Taş"
        ],
        "answer": 1,
        "explanation": "Sıvı maddeler akışkandır ve bulundukları kabın doldurdukları kısmının şeklini alır."
      },
      {
        "q": "Makarna ile suyu birbirinden ayırmak için hangi ayırma yöntemi kullanılır?",
        "options": [
          "Mıknatısla ayırma",
          "Süzme",
          "Eleme",
          "Damıtma"
        ],
        "answer": 1,
        "explanation": "Katı-sıvı karışımları olan makarna ve suyu süzgeçle süzerek ayırırız."
      },
      {
        "q": "Sıvı bir maddenin dışarıya ısı VEREREK katı hâle geçmesi olayına ne ad verilir?",
        "options": [
          "Erime",
          "Buharlaşma",
          "Donma",
          "Yoğuşma"
        ],
        "answer": 2,
        "explanation": "Sıvının katılaşması olayına \"Donma\" denir (Suyun buzluğa konup donması)."
      }
    ]
  },
  "fen-u5": {
    "id": "fen-u5",
    "subject": "Fen Bilimleri",
    "unitNo": "5. Ünite",
    "title": "Mıknatısı Keşfediyorum",
    "icon": "🧲",
    "steps": [
      {
        "title": "Mıknatıs Nedir ve Kutupları Nelerdir?",
        "badge": "1. Adım: Mıknatıs Kutupları",
        "slide": "assets/images/miknatis_alan.svg",
        "narration": "Merhaba genç fizikçi! Mıknatısların sihirli çekim gücüne hoş geldin. Mıknatıs, temas gerektirmeyen manyetik bir kuvvet uygular. Her mıknatısın iki kutbu vardır: Kuzey kutbu (N - North) ve Güney kutbu (S - South). Mıknatısı kaç parçaya bölersen böl, oluşan her yeni parçanın yine bir N ve bir S kutbu olur! Tek kutuplu mıknatıs olamaz.",
        "audio": "assets/audio/courses/fen-u5_s1.mp3"
      },
      {
        "title": "İtme ve Çekme Kuvveti",
        "badge": "2. Adım: İtme ve Çekme",
        "slide": "assets/images/miknatis_alan.svg",
        "narration": "İşte mıknatısların dans kuralı: Aynı kutuplar birbirini İTER! Yani N ile N ya da S ile S yan yana gelirse birbirini iter. Zıt kutuplar ise birbirini ÇEKER! Yani N kutbu ile S kutbu birbirini kuvvetle kendine çeker. Bu görünmez manyetik kuvvet aradaki boşluktan bile etki eder.",
        "audio": "assets/audio/courses/fen-u5_s2.mp3"
      },
      {
        "title": "Mıknatısın Etki Ettiği Maddeler",
        "badge": "3. Adım: Çekilen Maddeler",
        "slide": "assets/images/miknatis_alan.svg",
        "narration": "Mıknatıs her metali çekmez! Mıknatıs yalnızca demir, nikel ve kobalt metallerini ve bunlardan yapılan çivi, ataş, iğne gibi cisimleri çeker. Plastik, tahta, cam, kâğıt, kumaş, altın, gümüş ve alüminyumu ise ASLA çekmez! Mıknatıs yardımıyla hurdalıklardaki demirler diğer çöplerden kolayca ayrıştırılır.",
        "audio": "assets/audio/courses/fen-u5_s3.mp3"
      },
      {
        "title": "Mıknatısın Günlük Yaşamdaki Alanları",
        "badge": "4. Adım: Kullanım Alanları",
        "slide": "assets/images/pusula_gulu.svg",
        "narration": "Mıknatıslar hayatımızın her yerindedir! Pusula ibresi minik bir mıknatıstır ve yönümüzü bulmamızı sağlar. Buzdolabı kapaklarının sıkıca kapanmasını mıknatıs sağlar. Hoparlörler, kulaklıklar, elektrik motorları ve rayların üzerinde havada uçarak giden süper hızlı Maglev trenleri mıknatıs teknolojisiyle çalışır. Ancak banka kartları ve telefonlara mıknatıs yaklaştırılmamalıdır!",
        "audio": "assets/audio/courses/fen-u5_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Mıknatısın KUTUPLARI hangi harflerle gösterilir?",
        "options": [
          "A ve B",
          "N ve S",
          "X ve Y",
          "D ve G"
        ],
        "answer": 1,
        "explanation": "Kuzey kutbu N (North), Güney kutbu S (South) harfleriyle gösterilir."
      },
      {
        "q": "İki mıknatısın AYNI KUTUPLARI (N-N veya S-S) birbirine yaklaştırıldığında ne olur?",
        "options": [
          "Birbirini çekerler",
          "Birbirini iterler",
          "Yapışıp kalırlar",
          "Hiçbir etki olmaz"
        ],
        "answer": 1,
        "explanation": "Mıknatıslarda aynı kutuplar birbirini iter, zıt kutuplar birbirini çeker."
      },
      {
        "q": "Aşağıdaki maddelerden hangisi bir mıknatıs tarafından ÇEKİLİR?",
        "options": [
          "Plastik cetvel",
          "Cam bardak",
          "Demir çivi",
          "Tahta kaşık"
        ],
        "answer": 2,
        "explanation": "Mıknatıslar demir, nikel ve kobalt maddelerini kuvvetle çeker."
      },
      {
        "q": "Aşağıdaki metallerden hangisini mıknatıs ÇEKMEZ?",
        "options": [
          "Demir ataş",
          "Çelik iğne",
          "Altın yüzük",
          "Nikel para"
        ],
        "answer": 2,
        "explanation": "Mıknatıs altın, gümüş, bakır ve alüminyum gibi metalleri çekmez."
      },
      {
        "q": "Bir mıknatıs tam ortasından ikiye kırıldığında ne meydana gelir?",
        "options": [
          "Mıknatıslık özelliği tamamen kaybolur",
          "Biri sadece N, diğeri sadece S kutbu olur",
          "İki adet ikişer kutuplu (N-S) yeni mıknatıs oluşur",
          "Mıknatıs elektriğe dönüşür"
        ],
        "answer": 2,
        "explanation": "Mıknatıs bölündüğünde her yeni parçanın yine hem N hem de S kutbu olur."
      },
      {
        "q": "Mıknatısın manyetik kuvvetinden yararlanılarak YÖN BULMADA kullanılan araç hangisidir?",
        "options": [
          "Termometre",
          "Pusula",
          "Dinamometre",
          "Dürbün"
        ],
        "answer": 1,
        "explanation": "Pusulanın renkli ibresi serbestçe dönen bir mıknatıstır ve ucu daima Kuzeyi gösterir."
      },
      {
        "q": "Mıknatısın uyguladığı kuvvet ne tür bir kuvvettir?",
        "options": [
          "Temas gerektiren kuvvet",
          "Temas gerektirmeyen kuvvet",
          "Sürtünme kuvveti",
          "Kas kuvveti"
        ],
        "answer": 1,
        "explanation": "Mıknatıs uzaktan da çekim yapabildiği için \"temas gerektirmeyen\" bir kuvvettir."
      },
      {
        "q": "Raylara değmeden manyetik itme gücüyle havada süzülerek çok hızlı giden trenlere ne ad verilir?",
        "options": [
          "Buharlı tren",
          "Maglev treni",
          "Tramvay",
          "Metro"
        ],
        "answer": 1,
        "explanation": "Maglev (Manyetik Levitasyon) trenleri mıknatıs kuvvetiyle ray üzerinde süzülür."
      },
      {
        "q": "Aşağıdaki ev eşyalarından hangisinin kapağında sızdırmaz kapanma için mıknatıs bulunur?",
        "options": [
          "Buzdolabı",
          "Fırın tepsisi",
          "Çamaşır sepeti",
          "Ahşap gardırop"
        ],
        "answer": 0,
        "explanation": "Buzdolabı kapaklarının lastik fitillerinin içinde mıknatıs şeritler yer alır."
      },
      {
        "q": "Mıknatıslar aşağıdaki teknolojik eşyalardan hangisinin yakınında TUTULMAMALIDIR?",
        "options": [
          "Banka kartı ve manyetik bellekler",
          "Plastik tabak",
          "Porselen fincan",
          "Tahta masa"
        ],
        "answer": 0,
        "explanation": "Mıknatıslar banka kartlarının manyetik şeridini ve elektronik bellekleri bozabilir."
      }
    ],
    "quiz": [
      {
        "q": "Mıknatısın KUTUPLARI hangi harflerle gösterilir?",
        "options": [
          "A ve B",
          "N ve S",
          "X ve Y",
          "D ve G"
        ],
        "answer": 1,
        "explanation": "Kuzey kutbu N (North), Güney kutbu S (South) harfleriyle gösterilir."
      },
      {
        "q": "İki mıknatısın AYNI KUTUPLARI (N-N veya S-S) birbirine yaklaştırıldığında ne olur?",
        "options": [
          "Birbirini çekerler",
          "Birbirini iterler",
          "Yapışıp kalırlar",
          "Hiçbir etki olmaz"
        ],
        "answer": 1,
        "explanation": "Mıknatıslarda aynı kutuplar birbirini iter, zıt kutuplar birbirini çeker."
      },
      {
        "q": "Aşağıdaki maddelerden hangisi bir mıknatıs tarafından ÇEKİLİR?",
        "options": [
          "Plastik cetvel",
          "Cam bardak",
          "Demir çivi",
          "Tahta kaşık"
        ],
        "answer": 2,
        "explanation": "Mıknatıslar demir, nikel ve kobalt maddelerini kuvvetle çeker."
      },
      {
        "q": "Aşağıdaki metallerden hangisini mıknatıs ÇEKMEZ?",
        "options": [
          "Demir ataş",
          "Çelik iğne",
          "Altın yüzük",
          "Nikel para"
        ],
        "answer": 2,
        "explanation": "Mıknatıs altın, gümüş, bakır ve alüminyum gibi metalleri çekmez."
      },
      {
        "q": "Bir mıknatıs tam ortasından ikiye kırıldığında ne meydana gelir?",
        "options": [
          "Mıknatıslık özelliği tamamen kaybolur",
          "Biri sadece N, diğeri sadece S kutbu olur",
          "İki adet ikişer kutuplu (N-S) yeni mıknatıs oluşur",
          "Mıknatıs elektriğe dönüşür"
        ],
        "answer": 2,
        "explanation": "Mıknatıs bölündüğünde her yeni parçanın yine hem N hem de S kutbu olur."
      },
      {
        "q": "Mıknatısın manyetik kuvvetinden yararlanılarak YÖN BULMADA kullanılan araç hangisidir?",
        "options": [
          "Termometre",
          "Pusula",
          "Dinamometre",
          "Dürbün"
        ],
        "answer": 1,
        "explanation": "Pusulanın renkli ibresi serbestçe dönen bir mıknatıstır ve ucu daima Kuzeyi gösterir."
      },
      {
        "q": "Mıknatısın uyguladığı kuvvet ne tür bir kuvvettir?",
        "options": [
          "Temas gerektiren kuvvet",
          "Temas gerektirmeyen kuvvet",
          "Sürtünme kuvveti",
          "Kas kuvveti"
        ],
        "answer": 1,
        "explanation": "Mıknatıs uzaktan da çekim yapabildiği için \"temas gerektirmeyen\" bir kuvvettir."
      },
      {
        "q": "Raylara değmeden manyetik itme gücüyle havada süzülerek çok hızlı giden trenlere ne ad verilir?",
        "options": [
          "Buharlı tren",
          "Maglev treni",
          "Tramvay",
          "Metro"
        ],
        "answer": 1,
        "explanation": "Maglev (Manyetik Levitasyon) trenleri mıknatıs kuvvetiyle ray üzerinde süzülür."
      },
      {
        "q": "Aşağıdaki ev eşyalarından hangisinin kapağında sızdırmaz kapanma için mıknatıs bulunur?",
        "options": [
          "Buzdolabı",
          "Fırın tepsisi",
          "Çamaşır sepeti",
          "Ahşap gardırop"
        ],
        "answer": 0,
        "explanation": "Buzdolabı kapaklarının lastik fitillerinin içinde mıknatıs şeritler yer alır."
      },
      {
        "q": "Mıknatıslar aşağıdaki teknolojik eşyalardan hangisinin yakınında TUTULMAMALIDIR?",
        "options": [
          "Banka kartı ve manyetik bellekler",
          "Plastik tabak",
          "Porselen fincan",
          "Tahta masa"
        ],
        "answer": 0,
        "explanation": "Mıknatıslar banka kartlarının manyetik şeridini ve elektronik bellekleri bozabilir."
      }
    ]
  },
  "fen-u6": {
    "id": "fen-u6",
    "subject": "Fen Bilimleri",
    "unitNo": "6. Ünite",
    "title": "Enerji Dedektifleri",
    "icon": "⚡",
    "steps": [
      {
        "title": "Basit Elektrik Devresi Elemanları",
        "badge": "1. Adım: Devre Elemanları",
        "slide": "assets/images/devre_semasi.svg",
        "narration": "Merhaba enerji dedektifi! Evlerimizdeki ışıkların nasıl yandığını keşfediyoruz. Basit bir elektrik devresinde 4 temel eleman vardır: Enerji kaynağımız Pil, ışık veren Ampul, elektriği taşıyan Bağlantı Kablosu ve devreyi açıp kapatan Anahtar! Ayrıca ampulü sabitleyen duya ve pili tutan pil yatağına da ihtiyaç duyarız.",
        "audio": "assets/audio/courses/fen-u6_s1.mp3"
      },
      {
        "title": "Açık Devre ve Kapalı Devre",
        "badge": "2. Adım: Devre Durumları",
        "slide": "assets/images/devre_semasi.svg",
        "narration": "Ampulün ışık vermesi için elektrik akımının pilden çıkıp kesintisiz bir yol izlemesi gerekir. Anahtar kapatıldığında devre tamamlanır; buna Kapalı Devre denir ve ampul IŞIK VERİR! Anahtar açıkken ise yol kesilir; buna Açık Devre denir ve ampul IŞIK VERMEZ. Evlerimizdeki elektrik düğmelerine basmak aslında anahtarı kapatıp açmaktır!",
        "audio": "assets/audio/courses/fen-u6_s2.mp3"
      },
      {
        "title": "Ampul Neden Işık Vermez?",
        "badge": "3. Adım: Arıza Tespiti",
        "slide": "assets/images/devre_semasi.svg",
        "narration": "Bir dedektif gibi arıza arayalım: Eğer devrede ampul yanmıyorsa; pil bitmiş olabilir, kablo kopmuş veya temassızlık yapıyor olabilir, anahtar açık kalmış olabilir ya da ampulün içindeki ince tel (filaman) kopmuş, yani ampul patlamış olabilir. Bu kontrollerle sorunu hemen çözebilirsin.",
        "audio": "assets/audio/courses/fen-u6_s3.mp3"
      },
      {
        "title": "Yenilenebilir ve Yenilenemeyen Enerji",
        "badge": "4. Adım: Enerji Kaynakları",
        "slide": "assets/images/devre_semasi.svg",
        "narration": "Elektriği nasıl ürettiğimiz Dünya'mız için çok önemlidir. Güneş, rüzgâr, su ve jeotermal gibi doğada tükenmeyen ve havayı kirletmeyen kaynaklara Yenilenebilir Enerji denir. Kömür, petrol ve doğal gaz gibi kullandıkça tükenen ve çevreye duman salan kaynaklara ise Yenilenemeyen Enerji denir. Geleceğimiz temiz enerjidedir!",
        "audio": "assets/audio/courses/fen-u6_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Basit elektrik devresinde ELEKTRİK ENERJİSİ KAYNAĞI olan eleman hangisidir?",
        "options": [
          "Ampul",
          "Pil",
          "Anahtar",
          "Duy"
        ],
        "answer": 1,
        "explanation": "Devreye elektrik enerjisini sağlayan güç kaynağı Pildir."
      },
      {
        "q": "Elektrik devresinde akımın geçişini kontrol eden, açıp kapatmaya yarayan eleman nedir?",
        "options": [
          "Pil",
          "Anahtar",
          "Kablo",
          "Pil yatağı"
        ],
        "answer": 1,
        "explanation": "Anahtar, devreden geçen elektrik akımını açıp kapatmaya yarar."
      },
      {
        "q": "Bir elektrik devresinde ampulün IŞIK VEREBİLMESİ için devrenin hangi durumda olması gerekir?",
        "options": [
          "Açık devre",
          "Kapalı devre",
          "Kopuk devre",
          "Pilsiz devre"
        ],
        "answer": 1,
        "explanation": "Anahtar kapatılarak akımın tamamlandığı \"Kapalı Devre\" durumunda ampul ışık verir."
      },
      {
        "q": "Ampulün takıldığı yuvaya ne ad verilir?",
        "options": [
          "Duy",
          "Pil yatağı",
          "Anahtar",
          "Klemens"
        ],
        "answer": 0,
        "explanation": "Ampulün vidalanarak devrede sabitlendiği parçaya \"Duy\" denir."
      },
      {
        "q": "Aşağıdakilerden hangisi YENİLENEBİLİR (TEMİZ) bir enerji kaynağıdır?",
        "options": [
          "Kömür",
          "Petrol",
          "Güneş Enerjisi",
          "Doğal Gaz"
        ],
        "answer": 2,
        "explanation": "Güneş, rüzgâr ve su tükenmeyen, çevre dostu yenilenebilir enerji kaynaklarıdır."
      },
      {
        "q": "Devredeki ampulün içindeki ince telin kopması sonucu ampulün yanmaması durumuna halk arasında ne denir?",
        "options": [
          "Ampulün şarj olması",
          "Ampulün patlaması",
          "Pil bitmesi",
          "Anahtar bozulması"
        ],
        "answer": 1,
        "explanation": "Filaman telinin kopması ampulün patlaması / bozulması anlamına gelir."
      },
      {
        "q": "Elektrik akımını pil ve ampul arasında ileten eleman hangisidir?",
        "options": [
          "İletken Bağlantı Kablosu",
          "Plastik şerit",
          "İp",
          "Cam çubuk"
        ],
        "answer": 0,
        "explanation": "İçi bakır telli iletken bağlantı kablosu elektriği devre elemanlarına taşır."
      },
      {
        "q": "Aşağıdakilerden hangisi YENİLENEMEYEN (tükenebilir ve çevreyi kirleten) bir kaynaktır?",
        "options": [
          "Rüzgâr",
          "Güneş",
          "Kömür",
          "Akarsu"
        ],
        "answer": 2,
        "explanation": "Kömür fosil bir yakıttır; tükenebilir ve havaya zararlı gazlar salar."
      },
      {
        "q": "Evlerimizdeki duvar lambası düğmesi, basit elektrik devresindeki hangi elemanın karşılığıdır?",
        "options": [
          "Pil",
          "Anahtar",
          "Ampul",
          "Duy"
        ],
        "answer": 1,
        "explanation": "Duvar anahtarları, basit elektrik devresindeki anahtar ile birebir aynı işlevi görür."
      },
      {
        "q": "Devredeki pil sayısı sabit tutulup ampul sayısı artırılırsa ampullerin parlaklığı nasıl değişir?",
        "options": [
          "Parlaklık artar",
          "Parlaklık azalır",
          "Değişmez",
          "Ampuller hemen patlar"
        ],
        "answer": 1,
        "explanation": "Aynı pil enerjisi daha çok ampul arasında paylaşıldığı için ampul parlaklığı azalır."
      }
    ],
    "quiz": [
      {
        "q": "Basit elektrik devresinde ELEKTRİK ENERJİSİ KAYNAĞI olan eleman hangisidir?",
        "options": [
          "Ampul",
          "Pil",
          "Anahtar",
          "Duy"
        ],
        "answer": 1,
        "explanation": "Devreye elektrik enerjisini sağlayan güç kaynağı Pildir."
      },
      {
        "q": "Elektrik devresinde akımın geçişini kontrol eden, açıp kapatmaya yarayan eleman nedir?",
        "options": [
          "Pil",
          "Anahtar",
          "Kablo",
          "Pil yatağı"
        ],
        "answer": 1,
        "explanation": "Anahtar, devreden geçen elektrik akımını açıp kapatmaya yarar."
      },
      {
        "q": "Bir elektrik devresinde ampulün IŞIK VEREBİLMESİ için devrenin hangi durumda olması gerekir?",
        "options": [
          "Açık devre",
          "Kapalı devre",
          "Kopuk devre",
          "Pilsiz devre"
        ],
        "answer": 1,
        "explanation": "Anahtar kapatılarak akımın tamamlandığı \"Kapalı Devre\" durumunda ampul ışık verir."
      },
      {
        "q": "Ampulün takıldığı yuvaya ne ad verilir?",
        "options": [
          "Duy",
          "Pil yatağı",
          "Anahtar",
          "Klemens"
        ],
        "answer": 0,
        "explanation": "Ampulün vidalanarak devrede sabitlendiği parçaya \"Duy\" denir."
      },
      {
        "q": "Aşağıdakilerden hangisi YENİLENEBİLİR (TEMİZ) bir enerji kaynağıdır?",
        "options": [
          "Kömür",
          "Petrol",
          "Güneş Enerjisi",
          "Doğal Gaz"
        ],
        "answer": 2,
        "explanation": "Güneş, rüzgâr ve su tükenmeyen, çevre dostu yenilenebilir enerji kaynaklarıdır."
      },
      {
        "q": "Devredeki ampulün içindeki ince telin kopması sonucu ampulün yanmaması durumuna halk arasında ne denir?",
        "options": [
          "Ampulün şarj olması",
          "Ampulün patlaması",
          "Pil bitmesi",
          "Anahtar bozulması"
        ],
        "answer": 1,
        "explanation": "Filaman telinin kopması ampulün patlaması / bozulması anlamına gelir."
      },
      {
        "q": "Elektrik akımını pil ve ampul arasında ileten eleman hangisidir?",
        "options": [
          "İletken Bağlantı Kablosu",
          "Plastik şerit",
          "İp",
          "Cam çubuk"
        ],
        "answer": 0,
        "explanation": "İçi bakır telli iletken bağlantı kablosu elektriği devre elemanlarına taşır."
      },
      {
        "q": "Aşağıdakilerden hangisi YENİLENEMEYEN (tükenebilir ve çevreyi kirleten) bir kaynaktır?",
        "options": [
          "Rüzgâr",
          "Güneş",
          "Kömür",
          "Akarsu"
        ],
        "answer": 2,
        "explanation": "Kömür fosil bir yakıttır; tükenebilir ve havaya zararlı gazlar salar."
      },
      {
        "q": "Evlerimizdeki duvar lambası düğmesi, basit elektrik devresindeki hangi elemanın karşılığıdır?",
        "options": [
          "Pil",
          "Anahtar",
          "Ampul",
          "Duy"
        ],
        "answer": 1,
        "explanation": "Duvar anahtarları, basit elektrik devresindeki anahtar ile birebir aynı işlevi görür."
      },
      {
        "q": "Devredeki pil sayısı sabit tutulup ampul sayısı artırılırsa ampullerin parlaklığı nasıl değişir?",
        "options": [
          "Parlaklık artar",
          "Parlaklık azalır",
          "Değişmez",
          "Ampuller hemen patlar"
        ],
        "answer": 1,
        "explanation": "Aynı pil enerjisi daha çok ampul arasında paylaşıldığı için ampul parlaklığı azalır."
      }
    ]
  },
  "fen-u7": {
    "id": "fen-u7",
    "subject": "Fen Bilimleri",
    "unitNo": "7. Ünite",
    "title": "Işığın Peşinde",
    "icon": "💡",
    "steps": [
      {
        "title": "Işık ve Görmedeki Rolü",
        "badge": "1. Adım: Işık & Görme",
        "slide": "assets/images/isigin_pesinde.svg",
        "narration": "Merhaba ışık kâşifim! Gözlerimiz mucizevi organlardır ama zifiri karanlık bir odada hiçbir şey göremeyiz! Çünkü bir nesneyi görebilmemiz için o nesneden gözümüze ışık gelmesi şarttır. Işık doğrusal ışınlar halinde her yöne yayılır. Cisme çarpar, yansır ve gözümüze ulaşarak görmeyi sağlar.",
        "audio": "assets/audio/courses/fen-u7_s1.mp3"
      },
      {
        "title": "Doğal ve Yapay Işık Kaynakları",
        "badge": "2. Adım: Işık Kaynakları",
        "slide": "assets/images/isigin_pesinde.svg",
        "narration": "Kendiliğinden ışık yayan varlıklara Doğal Işık Kaynağı denir: Güneş, yıldızlar, şimşek ve ateş böceği gibi. İnsanlar tarafından üretilen ışık araçlarına ise Yapay Işık Kaynağı deriz: Ampul, mum, el feneri, meşale gibi. Dikkat: Ay bir ışık kaynağı DEĞİLDİR! Ay yalnızca Güneş'ten aldığı ışığı bir ayna gibi yansıtır.",
        "audio": "assets/audio/courses/fen-u7_s2.mp3"
      },
      {
        "title": "Işık Kirliliği ve Canlılara Zararları",
        "badge": "3. Adım: Işık Kirliliği",
        "slide": "assets/images/isigin_pesinde.svg",
        "narration": "Işığın yanlış yerde, yanlış zamanda ve aşırı miktarda kullanılmasına Işık Kirliliği denir. Gökyüzüne yönlendirilen dev projektörler göçmen kuşların yönlerini şaşırmasına neden olur. Yumurtadan çıkan yavru Caretta Caretta kaplumbağaları denizin parıltısı yerine şehir ışıklarına gidip hayatlarını kaybederler. Ayrıca rasathanelerin gökyüzünü incelemesini engeller.",
        "audio": "assets/audio/courses/fen-u7_s3.mp3"
      },
      {
        "title": "Uygun Aydınlatma ve Göz Sağlığı",
        "badge": "4. Adım: Uygun Aydınlatma",
        "slide": "assets/images/isigin_pesinde.svg",
        "narration": "Ders çalışırken ışık doğrudan gözümüze değil, masaya gelmelidir. Sağ elini kullananların ışığı sol arkadan alması gölgeyi önler. Işık ne çok loş ne de gözü kamaştıracak kadar aşırı parlak olmalıdır. Doğrudan güneşe bakmak gözlerimize kalıcı hasar verir. Enerji tasarruflu LED ampuller kullanarak doğayı koruyabiliriz.",
        "audio": "assets/audio/courses/fen-u7_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Gözümüzün bir cismi görebilmesi için aşağıdakilerden hangisi KESİNLİKLE GEREKLİDİR?",
        "options": [
          "Ortamda ses olması",
          "Cisimden gözümüze ışık yansıması",
          "Cismin hareket etmesi",
          "Büyüteç kullanılması"
        ],
        "answer": 1,
        "explanation": "Görme olayı cisimden yansıyan ışığın gözümüze ulaşmasıyla gerçekleşir."
      },
      {
        "q": "Aşağıdakilerden hangisi bir DOĞAL IŞIK KAYNAĞIDIR?",
        "options": [
          "Ampul",
          "Güneş",
          "Mum",
          "El feneri"
        ],
        "answer": 1,
        "explanation": "Güneş doğada kendiliğinden ışık yayan en büyük doğal ışık kaynağımızdır."
      },
      {
        "q": "AY hakkında verilen aşağıdaki bilgilerden hangisi DOĞRUDUR?",
        "options": [
          "Ay güçlü bir doğal ışık kaynağıdır.",
          "Ay yapay bir ışık kaynağıdır.",
          "Ay bir ışık kaynağı değildir; Güneş'ten aldığı ışığı yansıtır.",
          "Ay sadece geceleri ışık üretir."
        ],
        "answer": 2,
        "explanation": "Ay ışık kaynağı değildir; tıpkı bir ayna gibi Güneş'in ışığını yansıtan aydınlatılmış cisimdir."
      },
      {
        "q": "Aşağıdakilerden hangisi bir YAPAY IŞIK KAYNAĞIDIR?",
        "options": [
          "Yıldızlar",
          "Ateş böceği",
          "Şimşek",
          "LED Lamba"
        ],
        "answer": 3,
        "explanation": "LED lamba insanlar tarafından üretilmiş yapay bir aydınlatma aracıdır."
      },
      {
        "q": "Işığın yanlış miktarda, yanlış yönde ve gereksiz yere kullanılmasına ne ad verilir?",
        "options": [
          "Ses kirliliği",
          "Işık kirliliği",
          "Su kirliliği",
          "Toprak kirliliği"
        ],
        "answer": 1,
        "explanation": "Hatalı ve gereksiz ışık kullanımına \"Işık Kirliliği\" denir."
      },
      {
        "q": "Işık kirliliği aşağıdaki canlılardan hangisinin DENİZE ULAŞMASINI engelleyerek hayatını tehlikeye atar?",
        "options": [
          "Caretta Caretta kaplumbağaları",
          "Dağ keçileri",
          "Karasinekler",
          "Kutup ayıları"
        ],
        "answer": 0,
        "explanation": "Yavru deniz kaplumbağaları sahil ışıkları yüzünden yönlerini kaybederek ölmektedir."
      },
      {
        "q": "Ders çalışırken masa aydınlatması nasıl olmalıdır?",
        "options": [
          "Doğrudan gözümüze parlamalıdır",
          "Çok karanlık ve loş olmalıdır",
          "Işık çalışma masasına yönlendirilmeli ve gölge yapmamalıdır",
          "Sadece renkli disko ışığı kullanılmalıdır"
        ],
        "answer": 2,
        "explanation": "Işık doğrudan göze değil, çalışma alanına yönlendirilmeli ve gözü yormamalıdır."
      },
      {
        "q": "Gökbilimcilerin uzayı ve yıldızları inceledikleri GÖZLEMEVLERİ (Rasathaneler) neden şehirlerden uzak dağ tepelerine kurulur?",
        "options": [
          "Havası daha sıcak olduğu için",
          "Şehirlerdeki ışık kirliliğinden etkilenmemek için",
          "Kuş seslerinden kaçmak için",
          "Yıldızlara daha yakın olmak için"
        ],
        "answer": 1,
        "explanation": "Şehir ışıkları gökyüzünü aydınlatıp yıldızların görünmesini engellediği için gözlemevleri karanlık tepelere kurulur."
      },
      {
        "q": "Işık bir kaynaktan çıktıktan sonra nasıl bir yol izleyerek yayılır?",
        "options": [
          "Eğri çizgilerle",
          "Doğrusal ışınlar halinde her yöne",
          "Sadece yukarıya doğru",
          "Daireler çizerek"
        ],
        "answer": 1,
        "explanation": "Işık saydam ortamlarda her yöne doğru doğrusal (düz) çizgiler halinde yayılır."
      },
      {
        "q": "Aşağıdaki aydınlatma türlerinden hangisi hem göz sağlığı hem de ENERJİ TASARRUFU için en uygundur?",
        "options": [
          "Eski tip akkor telli ampuller",
          "Tasarruflu LED lambalar",
          "Kandil ve meşaleler",
          "Aşırı güçlü projektörler"
        ],
        "answer": 1,
        "explanation": "LED lambalar az elektrik tüketir, uzun ömürlüdür ve doğru ışık yayar."
      }
    ],
    "quiz": [
      {
        "q": "Gözümüzün bir cismi görebilmesi için aşağıdakilerden hangisi KESİNLİKLE GEREKLİDİR?",
        "options": [
          "Ortamda ses olması",
          "Cisimden gözümüze ışık yansıması",
          "Cismin hareket etmesi",
          "Büyüteç kullanılması"
        ],
        "answer": 1,
        "explanation": "Görme olayı cisimden yansıyan ışığın gözümüze ulaşmasıyla gerçekleşir."
      },
      {
        "q": "Aşağıdakilerden hangisi bir DOĞAL IŞIK KAYNAĞIDIR?",
        "options": [
          "Ampul",
          "Güneş",
          "Mum",
          "El feneri"
        ],
        "answer": 1,
        "explanation": "Güneş doğada kendiliğinden ışık yayan en büyük doğal ışık kaynağımızdır."
      },
      {
        "q": "AY hakkında verilen aşağıdaki bilgilerden hangisi DOĞRUDUR?",
        "options": [
          "Ay güçlü bir doğal ışık kaynağıdır.",
          "Ay yapay bir ışık kaynağıdır.",
          "Ay bir ışık kaynağı değildir; Güneş'ten aldığı ışığı yansıtır.",
          "Ay sadece geceleri ışık üretir."
        ],
        "answer": 2,
        "explanation": "Ay ışık kaynağı değildir; tıpkı bir ayna gibi Güneş'in ışığını yansıtan aydınlatılmış cisimdir."
      },
      {
        "q": "Aşağıdakilerden hangisi bir YAPAY IŞIK KAYNAĞIDIR?",
        "options": [
          "Yıldızlar",
          "Ateş böceği",
          "Şimşek",
          "LED Lamba"
        ],
        "answer": 3,
        "explanation": "LED lamba insanlar tarafından üretilmiş yapay bir aydınlatma aracıdır."
      },
      {
        "q": "Işığın yanlış miktarda, yanlış yönde ve gereksiz yere kullanılmasına ne ad verilir?",
        "options": [
          "Ses kirliliği",
          "Işık kirliliği",
          "Su kirliliği",
          "Toprak kirliliği"
        ],
        "answer": 1,
        "explanation": "Hatalı ve gereksiz ışık kullanımına \"Işık Kirliliği\" denir."
      },
      {
        "q": "Işık kirliliği aşağıdaki canlılardan hangisinin DENİZE ULAŞMASINI engelleyerek hayatını tehlikeye atar?",
        "options": [
          "Caretta Caretta kaplumbağaları",
          "Dağ keçileri",
          "Karasinekler",
          "Kutup ayıları"
        ],
        "answer": 0,
        "explanation": "Yavru deniz kaplumbağaları sahil ışıkları yüzünden yönlerini kaybederek ölmektedir."
      },
      {
        "q": "Ders çalışırken masa aydınlatması nasıl olmalıdır?",
        "options": [
          "Doğrudan gözümüze parlamalıdır",
          "Çok karanlık ve loş olmalıdır",
          "Işık çalışma masasına yönlendirilmeli ve gölge yapmamalıdır",
          "Sadece renkli disko ışığı kullanılmalıdır"
        ],
        "answer": 2,
        "explanation": "Işık doğrudan göze değil, çalışma alanına yönlendirilmeli ve gözü yormamalıdır."
      },
      {
        "q": "Gökbilimcilerin uzayı ve yıldızları inceledikleri GÖZLEMEVLERİ (Rasathaneler) neden şehirlerden uzak dağ tepelerine kurulur?",
        "options": [
          "Havası daha sıcak olduğu için",
          "Şehirlerdeki ışık kirliliğinden etkilenmemek için",
          "Kuş seslerinden kaçmak için",
          "Yıldızlara daha yakın olmak için"
        ],
        "answer": 1,
        "explanation": "Şehir ışıkları gökyüzünü aydınlatıp yıldızların görünmesini engellediği için gözlemevleri karanlık tepelere kurulur."
      },
      {
        "q": "Işık bir kaynaktan çıktıktan sonra nasıl bir yol izleyerek yayılır?",
        "options": [
          "Eğri çizgilerle",
          "Doğrusal ışınlar halinde her yöne",
          "Sadece yukarıya doğru",
          "Daireler çizerek"
        ],
        "answer": 1,
        "explanation": "Işık saydam ortamlarda her yöne doğru doğrusal (düz) çizgiler halinde yayılır."
      },
      {
        "q": "Aşağıdaki aydınlatma türlerinden hangisi hem göz sağlığı hem de ENERJİ TASARRUFU için en uygundur?",
        "options": [
          "Eski tip akkor telli ampuller",
          "Tasarruflu LED lambalar",
          "Kandil ve meşaleler",
          "Aşırı güçlü projektörler"
        ],
        "answer": 1,
        "explanation": "LED lambalar az elektrik tüketir, uzun ömürlüdür ve doğru ışık yayar."
      }
    ]
  },
  "fen-u8": {
    "id": "fen-u8",
    "subject": "Fen Bilimleri",
    "unitNo": "8. Ünite",
    "title": "Sürdürülebilir Şehirler ve Topluluklar",
    "icon": "🌱",
    "steps": [
      {
        "title": "Sürdürülebilir Yaşam Nedir?",
        "badge": "1. Adım: Sürdürülebilirlik",
        "slide": "assets/images/surdurulebilir_yasam.svg",
        "narration": "Merhaba doğa dostu kâşif! Sürdürülebilirlik, bugünün doğal kaynaklarını tüketmeden, kirletmeden ve israf etmeden gelecek nesillere aktarmak demektir. Temiz hava, temiz su ve verimli topraklar bize atalarımızdan miras değil, çocuklarımızdan emanettir! Şehirlerimizi doğayla uyumlu hale getirmek hepimizin görevidir.",
        "audio": "assets/audio/courses/fen-u8_s1.mp3"
      },
      {
        "title": "Geri Dönüşüm ve Sıfır Atık Hareketi",
        "badge": "2. Adım: Sıfır Atık",
        "slide": "assets/images/surdurulebilir_yasam.svg",
        "narration": "Çöp sandığımız birçok şey aslında değerli bir hammaddedir! Kâğıt, cam, plastik, metal ve pil atıkları geri dönüştürülebilir. 1 ton kâğıdın geri dönüştürülmesi tam 17 yetişkin ağacın kesilmesini önler! Piller ise asla çöpe veya toprağa atılmamalı, atık pil kutusuna bırakılmalıdır; çünkü içindeki zehirli metaller yeraltı sularını zehirler.",
        "audio": "assets/audio/courses/fen-u8_s2.mp3"
      },
      {
        "title": "Kompost Gübre: Mutfaktan Toprağa",
        "badge": "3. Adım: Doğal Gübre",
        "slide": "assets/images/surdurulebilir_yasam.svg",
        "narration": "Evlerimizdeki elma kabukları, çay posaları, sebze artıkları çöp değildir! Bu organik atıklar biriktirilip doğal yöntemlerle çürütüldüğünde besin değeri çok yüksek organik bir gübreye dönüşür; buna Kompost denir. Kompost toprağı zenginleştirir, kimyasal gübre ihtiyacını ortadan kaldırır.",
        "audio": "assets/audio/courses/fen-u8_s3.mp3"
      },
      {
        "title": "Su ve Enerji Tasarrufu ile Geleceği Koru",
        "badge": "4. Adım: Tasarruf Bilinci",
        "slide": "assets/images/surdurulebilir_yasam.svg",
        "narration": "Dünyamızın suları sonsuz değildir; içilebilir tatlı su kaynakları çok kısıtlıdır. Dişlerimizi fırçalarken musluğu kapatmak yılda tonlarca su kurtarır. Kullanılmayan odaların ışıklarını söndürmek, kısa mesafelerde araba yerine bisiklete binmek veya yürümek karbon ayak izimizi küçültür. Küçük adımlar büyük bir dünya kurtarır!",
        "audio": "assets/audio/courses/fen-u8_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Doğal kaynakların gelecek nesillere yetecek şekilde bilinçli ve tasarruflu kullanılmasına ne ad verilir?",
        "options": [
          "Tüketim çılgınlığı",
          "Sürdürülebilirlik",
          "Sanayileşme",
          "Kentsel dönüşüm"
        ],
        "answer": 1,
        "explanation": "Kaynakları tüketmeden geleceğe aktarma felsefesine \"Sürdürülebilirlik\" denir."
      },
      {
        "q": "1 ton KÂĞIDIN geri dönüştürülmesi yaklaşık kaç yetişkin ağacın kesilmesini önler?",
        "options": [
          "2 ağaç",
          "5 ağaç",
          "17 ağaç",
          "100 ağaç"
        ],
        "answer": 2,
        "explanation": "1 ton atık kâğıdın geri kazanımı doğada 17 yetişkin ağacı kurtarır."
      },
      {
        "q": "Kullanılmış ATIK PİLLER nereye atılmalıdır?",
        "options": [
          "Normal çöp kutusuna",
          "Denize veya göle",
          "Toprağa gömülmelidir",
          "Özel Atık Pil Toplama Kutularına"
        ],
        "answer": 3,
        "explanation": "Piller cıva ve kurşun içerir; toprağı ve suyu zehirlememesi için atık pil kutusuna atılmalıdır."
      },
      {
        "q": "Meyve-sebze kabukları, çay posaları gibi organik atıklardan elde edilen doğal gübreye ne ad verilir?",
        "options": [
          "Plastik atık",
          "Kompost",
          "Fosil yakıt",
          "Kireç"
        ],
        "answer": 1,
        "explanation": "Bitkisel atıkların çürütülmesiyle yapılan doğal organik gübreye \"Kompost\" denir."
      },
      {
        "q": "Aşağıdakilerden hangisi GERİ DÖNÜŞTÜRÜLEBİLEN bir madde DEĞİLDİR?",
        "options": [
          "Cam şişe",
          "Kullanılmış yağlı kâğıt peçete",
          "Alüminyum içecek kutusu",
          "Plastik su şişesi"
        ],
        "answer": 1,
        "explanation": "Yağlı ve kirli kâğıt peçeteler lifleri bozulduğu için geri dönüştürülemez."
      },
      {
        "q": "Aşağıdaki davranışlardan hangisi SU TASARRUFU sağlar?",
        "options": [
          "Diş fırçalarken musluğu açık bırakmak",
          "Halıları hortumla saatlerce yıkamak",
          "Damlatan muslukları tamir ettirmek",
          "Bulaşıkları elde sürekli su akıtarak yıkamak"
        ],
        "answer": 2,
        "explanation": "Damlatan muslukları onarmak günde onlarca litre suyun boşa akmasını engeller."
      },
      {
        "q": "İsrafı önlemek, atık miktarını en aza indirmek ve maddeleri tekrar kullanmayı hedefleyen projeye ne ad verilir?",
        "options": [
          "Sıfır Atık Projesi",
          "Hızlı Tüketim",
          "Mega Sanayi",
          "Teknoloji Ağı"
        ],
        "answer": 0,
        "explanation": "Atık üretimini sıfırlamayı hedefleyen küresel harekete \"Sıfır Atık\" denir."
      },
      {
        "q": "Şehirlerde karbon salınımını ve hava kirliliğini azaltmak için hangisi TERCİH EDİLMELİDİR?",
        "options": [
          "Herkesin tek başına arabayla trafiğe çıkması",
          "Toplu taşıma ve bisiklet kullanımı",
          "Kömür tüketimini artırmak",
          "Ağaçları kesip yol yapmak"
        ],
        "answer": 1,
        "explanation": "Toplu taşıma (metro, otobüs) ve bisiklet hava kirliliğini büyük oranda azaltır."
      },
      {
        "q": "A+++ enerji sınıfı bir buzdolabı kullanmak ne sağlar?",
        "options": [
          "Daha çok elektrik harcar",
          "Daha az elektrik enerjisi tüketerek tasarruf sağlar",
          "Gürültülü çalışır",
          "Hiç soğutmaz"
        ],
        "answer": 1,
        "explanation": "A+++ etiketli cihazlar en yüksek enerji verimliliğine sahip tasarruflu cihazlardır."
      },
      {
        "q": "Çevreye atılan bir PLASTİK ŞİŞENİN doğada tamamen yok olması yaklaşık ne kadar sürer?",
        "options": [
          "1 hafta",
          "1 ay",
          "1 yıl",
          "Yüzlerce yıl (yaklaşık 450 yıl)"
        ],
        "answer": 3,
        "explanation": "Plastikler doğada çözünmez ve yaklaşık 400-500 yıl boyunca toprağı ve denizleri zehirler."
      }
    ],
    "quiz": [
      {
        "q": "Doğal kaynakların gelecek nesillere yetecek şekilde bilinçli ve tasarruflu kullanılmasına ne ad verilir?",
        "options": [
          "Tüketim çılgınlığı",
          "Sürdürülebilirlik",
          "Sanayileşme",
          "Kentsel dönüşüm"
        ],
        "answer": 1,
        "explanation": "Kaynakları tüketmeden geleceğe aktarma felsefesine \"Sürdürülebilirlik\" denir."
      },
      {
        "q": "1 ton KÂĞIDIN geri dönüştürülmesi yaklaşık kaç yetişkin ağacın kesilmesini önler?",
        "options": [
          "2 ağaç",
          "5 ağaç",
          "17 ağaç",
          "100 ağaç"
        ],
        "answer": 2,
        "explanation": "1 ton atık kâğıdın geri kazanımı doğada 17 yetişkin ağacı kurtarır."
      },
      {
        "q": "Kullanılmış ATIK PİLLER nereye atılmalıdır?",
        "options": [
          "Normal çöp kutusuna",
          "Denize veya göle",
          "Toprağa gömülmelidir",
          "Özel Atık Pil Toplama Kutularına"
        ],
        "answer": 3,
        "explanation": "Piller cıva ve kurşun içerir; toprağı ve suyu zehirlememesi için atık pil kutusuna atılmalıdır."
      },
      {
        "q": "Meyve-sebze kabukları, çay posaları gibi organik atıklardan elde edilen doğal gübreye ne ad verilir?",
        "options": [
          "Plastik atık",
          "Kompost",
          "Fosil yakıt",
          "Kireç"
        ],
        "answer": 1,
        "explanation": "Bitkisel atıkların çürütülmesiyle yapılan doğal organik gübreye \"Kompost\" denir."
      },
      {
        "q": "Aşağıdakilerden hangisi GERİ DÖNÜŞTÜRÜLEBİLEN bir madde DEĞİLDİR?",
        "options": [
          "Cam şişe",
          "Kullanılmış yağlı kâğıt peçete",
          "Alüminyum içecek kutusu",
          "Plastik su şişesi"
        ],
        "answer": 1,
        "explanation": "Yağlı ve kirli kâğıt peçeteler lifleri bozulduğu için geri dönüştürülemez."
      },
      {
        "q": "Aşağıdaki davranışlardan hangisi SU TASARRUFU sağlar?",
        "options": [
          "Diş fırçalarken musluğu açık bırakmak",
          "Halıları hortumla saatlerce yıkamak",
          "Damlatan muslukları tamir ettirmek",
          "Bulaşıkları elde sürekli su akıtarak yıkamak"
        ],
        "answer": 2,
        "explanation": "Damlatan muslukları onarmak günde onlarca litre suyun boşa akmasını engeller."
      },
      {
        "q": "İsrafı önlemek, atık miktarını en aza indirmek ve maddeleri tekrar kullanmayı hedefleyen projeye ne ad verilir?",
        "options": [
          "Sıfır Atık Projesi",
          "Hızlı Tüketim",
          "Mega Sanayi",
          "Teknoloji Ağı"
        ],
        "answer": 0,
        "explanation": "Atık üretimini sıfırlamayı hedefleyen küresel harekete \"Sıfır Atık\" denir."
      },
      {
        "q": "Şehirlerde karbon salınımını ve hava kirliliğini azaltmak için hangisi TERCİH EDİLMELİDİR?",
        "options": [
          "Herkesin tek başına arabayla trafiğe çıkması",
          "Toplu taşıma ve bisiklet kullanımı",
          "Kömür tüketimini artırmak",
          "Ağaçları kesip yol yapmak"
        ],
        "answer": 1,
        "explanation": "Toplu taşıma (metro, otobüs) ve bisiklet hava kirliliğini büyük oranda azaltır."
      },
      {
        "q": "A+++ enerji sınıfı bir buzdolabı kullanmak ne sağlar?",
        "options": [
          "Daha çok elektrik harcar",
          "Daha az elektrik enerjisi tüketerek tasarruf sağlar",
          "Gürültülü çalışır",
          "Hiç soğutmaz"
        ],
        "answer": 1,
        "explanation": "A+++ etiketli cihazlar en yüksek enerji verimliliğine sahip tasarruflu cihazlardır."
      },
      {
        "q": "Çevreye atılan bir PLASTİK ŞİŞENİN doğada tamamen yok olması yaklaşık ne kadar sürer?",
        "options": [
          "1 hafta",
          "1 ay",
          "1 yıl",
          "Yüzlerce yıl (yaklaşık 450 yıl)"
        ],
        "answer": 3,
        "explanation": "Plastikler doğada çözünmez ve yaklaşık 400-500 yıl boyunca toprağı ve denizleri zehirler."
      }
    ]
  },
  "sos-u1": {
    "id": "sos-u1",
    "subject": "Sosyal Bilgiler",
    "unitNo": "1. Ünite",
    "title": "Birlikte Yaşamak",
    "icon": "🤝",
    "steps": [
      {
        "title": "Sosyal Bilgiler Dersi ve Etkin Vatandaşlık",
        "badge": "1. Adım: Sosyal Bilgiler",
        "slide": "assets/images/birlikte_yasamak.svg",
        "narration": "Merhaba sevgili genç vatandaş! Sosyal Bilgiler dersi bize haklarımızı, sorumluluklarımızı, tarihimizi ve çevremizi öğretir. Haklarını bilen, kanunlara uyan, vergisini veren ve sorunlar karşısında çözüm üreten kişiye \"Etkin Vatandaş\" denir. Haklarımız eğitim, sağlık, barınma ve oyun oynama gibi vazgeçilmez ayrıcalıklarımızdır.",
        "audio": "assets/audio/courses/sos-u1_s1.mp3"
      },
      {
        "title": "Türkiye Cumhuriyeti Kimlik Kartımız",
        "badge": "2. Adım: Kimlik Kartı",
        "slide": "assets/images/birlikte_yasamak.svg",
        "narration": "Her Türk vatandaşının kendine ait resmi bir kimlik belgesi vardır. Kimlik kartımızın üzerindeki 11 haneli T.C. Kimlik Numarası tamamen bize özeldir ve dünyada başka hiçbir kimsede yoktur! Kartımızın içindeki çip (yonga), bilgilerimizi ve parmak izimizi dijital ortamda güvenle saklar. Parmak izimiz de tıpkı kimlik numaramız gibi benzersizdir.",
        "audio": "assets/audio/courses/sos-u1_s2.mp3"
      },
      {
        "title": "Bireysel Farklılıklara Saygı ve Empati",
        "badge": "3. Adım: Empati",
        "slide": "assets/images/birlikte_yasamak.svg",
        "narration": "Hepimizin göz rengi, boyu, yetenekleri, ilgi alanları ve düşünceleri farklıdır. Bu farklılıklar bir toplumun en büyük zenginliğidir! Kendimizi bir başkasının yerine koyarak onun duygularını ve düşüncelerini anlama becerisine Empati denir. Özel gereksinimli (engelli) bireylerin hayatını kolaylaştırmak ve herkesi olduğu gibi sevmek medeni olmanın gereğidir.",
        "audio": "assets/audio/courses/sos-u1_s3.mp3"
      },
      {
        "title": "Toplumsal Birlik ve Dayanışma",
        "badge": "4. Adım: Dayanışma",
        "slide": "assets/images/birlikte_yasamak.svg",
        "narration": "Milli bayramlarımızda, düğünlerde ve doğal afet gibi zor günlerde el ele vermek Türk milletinin en köklü erdemidir. İmece kültürüyle işlerimizi paylaşır, Kızılay gibi yardım kuruluşlarımızla darda kalanların yaralarını sararız. Birlikte yaşamak, birbirimize destek olmakla güzelleşir!",
        "audio": "assets/audio/courses/sos-u1_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Haklarını ve sorumluluklarını bilen, ülkesine ve çevresine yararlı olan bireye ne ad verilir?",
        "options": [
          "Seyyah",
          "Etkin Vatandaş",
          "Misafir",
          "Yolcu"
        ],
        "answer": 1,
        "explanation": "Toplumsal kurallara uyan, sorumluluk sahibi bireylere \"Etkin Vatandaş\" denir."
      },
      {
        "q": "Türkiye Cumhuriyeti Kimlik Numarası KAÇ HANEDEN oluşur?",
        "options": [
          "9",
          "10",
          "11",
          "12"
        ],
        "answer": 2,
        "explanation": "T.C. Kimlik Numarası her bireye özel 11 haneli tekil bir numaradır."
      },
      {
        "q": "T.C. Kimlik Kartının üzerinde yer alan ve bilgilerin dijital olarak saklandığı elektronik bölüme ne ad verilir?",
        "options": [
          "Barkod",
          "Çip (Yonga)",
          "Fotoğraf çerçevesi",
          "Hologram"
        ],
        "answer": 1,
        "explanation": "Kartın üzerindeki akıllı çip (yonga) biyometrik verileri güvenle saklar."
      },
      {
        "q": "Kendini bir başkasının yerine koyarak onun ne hissettiğini anlamaya çalışma yeteneğine ne denir?",
        "options": [
          "Sempatiklik",
          "Empati",
          "Bencillik",
          "Kıskançlık"
        ],
        "answer": 1,
        "explanation": "Başkalarının duygularını anlayabilme ve paylaşabilme becerisi \"Empati\"dir."
      },
      {
        "q": "Aşağıdakilerden hangisi her insanda TAMAMEN FARKLI olan, eşi benzeri olmayan bir özelliktir?",
        "options": [
          "Göz rengi",
          "Kan grubu",
          "Parmak izi",
          "Saç rengi"
        ],
        "answer": 2,
        "explanation": "Parmak izi dünyadaki milyarlarca insan arasında tamamen benzersizdir."
      },
      {
        "q": "Aşağıdakilerden hangisi bir çocuğun TEMEL HAKLARINDAN biri DEĞİLDİR?",
        "options": [
          "Eğitim alma hakkı",
          "Oyun oynama hakkı",
          "Ağır işlerde fabrikada çalışma hakkı",
          "Sağlık hizmetlerinden yararlanma hakkı"
        ],
        "answer": 2,
        "explanation": "Çocukların çalıştırılması yasaktır; eğitim, sağlık ve oyun onların temel haklarıdır."
      },
      {
        "q": "Okulda sınıf kurallarına uymak, ödevleri zamanında yapmak aşağıdakilerden hangisiyle ilgilidir?",
        "options": [
          "Özgürlük",
          "Sorumluluk",
          "Ayrıcalık",
          "İstek"
        ],
        "answer": 1,
        "explanation": "Bireyin üzerine düşen görevleri yerine getirmesi \"Sorumluluk\"tur."
      },
      {
        "q": "Engelli bireylerin kaldırımları ve binaları rahatça kullanabilmesi için yapılan rampalar ve sarı çizgiler neyin göstergesidir?",
        "options": [
          "Tasarrufun",
          "Farklılıklara saygı ve yaşamı kolaylaştırma bilincinin",
          "Moda anlayışının",
          "Turizmin"
        ],
        "answer": 1,
        "explanation": "Engelli bireylerin haklarına saygı duymak ve erişilebilirlik sağlamak insani bir görevdir."
      },
      {
        "q": "Köy ve mahallelerde ortak işlerin el birliğiyle, yardımlaşarak yapılmasına ne ad verilir?",
        "options": [
          "İmece",
          "İflas",
          "Rekabet",
          "Ticaret"
        ],
        "answer": 0,
        "explanation": "Kültürümüzdeki karşılıksız ortaklaşa yardımlaşma geleneğine \"İmece\" denir."
      },
      {
        "q": "Aşağıdakilerden hangisi Sosyal Bilgiler dersinin bize kazandırdığı bir değerdir?",
        "options": [
          "Çevreyi kirletmek",
          "Milli kültürümüzü ve tarihimizi öğrenmek",
          "Bencil davranmak",
          "Kuralları yok saymak"
        ],
        "answer": 1,
        "explanation": "Sosyal Bilgiler milli tarih, kültür, vatan sevgisi ve etkin vatandaşlık bilinci aşılar."
      }
    ],
    "quiz": [
      {
        "q": "Haklarını ve sorumluluklarını bilen, ülkesine ve çevresine yararlı olan bireye ne ad verilir?",
        "options": [
          "Seyyah",
          "Etkin Vatandaş",
          "Misafir",
          "Yolcu"
        ],
        "answer": 1,
        "explanation": "Toplumsal kurallara uyan, sorumluluk sahibi bireylere \"Etkin Vatandaş\" denir."
      },
      {
        "q": "Türkiye Cumhuriyeti Kimlik Numarası KAÇ HANEDEN oluşur?",
        "options": [
          "9",
          "10",
          "11",
          "12"
        ],
        "answer": 2,
        "explanation": "T.C. Kimlik Numarası her bireye özel 11 haneli tekil bir numaradır."
      },
      {
        "q": "T.C. Kimlik Kartının üzerinde yer alan ve bilgilerin dijital olarak saklandığı elektronik bölüme ne ad verilir?",
        "options": [
          "Barkod",
          "Çip (Yonga)",
          "Fotoğraf çerçevesi",
          "Hologram"
        ],
        "answer": 1,
        "explanation": "Kartın üzerindeki akıllı çip (yonga) biyometrik verileri güvenle saklar."
      },
      {
        "q": "Kendini bir başkasının yerine koyarak onun ne hissettiğini anlamaya çalışma yeteneğine ne denir?",
        "options": [
          "Sempatiklik",
          "Empati",
          "Bencillik",
          "Kıskançlık"
        ],
        "answer": 1,
        "explanation": "Başkalarının duygularını anlayabilme ve paylaşabilme becerisi \"Empati\"dir."
      },
      {
        "q": "Aşağıdakilerden hangisi her insanda TAMAMEN FARKLI olan, eşi benzeri olmayan bir özelliktir?",
        "options": [
          "Göz rengi",
          "Kan grubu",
          "Parmak izi",
          "Saç rengi"
        ],
        "answer": 2,
        "explanation": "Parmak izi dünyadaki milyarlarca insan arasında tamamen benzersizdir."
      },
      {
        "q": "Aşağıdakilerden hangisi bir çocuğun TEMEL HAKLARINDAN biri DEĞİLDİR?",
        "options": [
          "Eğitim alma hakkı",
          "Oyun oynama hakkı",
          "Ağır işlerde fabrikada çalışma hakkı",
          "Sağlık hizmetlerinden yararlanma hakkı"
        ],
        "answer": 2,
        "explanation": "Çocukların çalıştırılması yasaktır; eğitim, sağlık ve oyun onların temel haklarıdır."
      },
      {
        "q": "Okulda sınıf kurallarına uymak, ödevleri zamanında yapmak aşağıdakilerden hangisiyle ilgilidir?",
        "options": [
          "Özgürlük",
          "Sorumluluk",
          "Ayrıcalık",
          "İstek"
        ],
        "answer": 1,
        "explanation": "Bireyin üzerine düşen görevleri yerine getirmesi \"Sorumluluk\"tur."
      },
      {
        "q": "Engelli bireylerin kaldırımları ve binaları rahatça kullanabilmesi için yapılan rampalar ve sarı çizgiler neyin göstergesidir?",
        "options": [
          "Tasarrufun",
          "Farklılıklara saygı ve yaşamı kolaylaştırma bilincinin",
          "Moda anlayışının",
          "Turizmin"
        ],
        "answer": 1,
        "explanation": "Engelli bireylerin haklarına saygı duymak ve erişilebilirlik sağlamak insani bir görevdir."
      },
      {
        "q": "Köy ve mahallelerde ortak işlerin el birliğiyle, yardımlaşarak yapılmasına ne ad verilir?",
        "options": [
          "İmece",
          "İflas",
          "Rekabet",
          "Ticaret"
        ],
        "answer": 0,
        "explanation": "Kültürümüzdeki karşılıksız ortaklaşa yardımlaşma geleneğine \"İmece\" denir."
      },
      {
        "q": "Aşağıdakilerden hangisi Sosyal Bilgiler dersinin bize kazandırdığı bir değerdir?",
        "options": [
          "Çevreyi kirletmek",
          "Milli kültürümüzü ve tarihimizi öğrenmek",
          "Bencil davranmak",
          "Kuralları yok saymak"
        ],
        "answer": 1,
        "explanation": "Sosyal Bilgiler milli tarih, kültür, vatan sevgisi ve etkin vatandaşlık bilinci aşılar."
      }
    ]
  },
  "sos-u2": {
    "id": "sos-u2",
    "subject": "Sosyal Bilgiler",
    "unitNo": "2. Ünite",
    "title": "Evimiz Dünya",
    "icon": "🧭",
    "steps": [
      {
        "title": "Yönler ve Doğadaki Yön Bulma Yöntemleri",
        "badge": "1. Adım: Yönler",
        "slide": "assets/images/evimiz_dunya.svg",
        "narration": "Merhaba kâşif! Dört ana yön vardır: Kuzey, Güney, Doğu ve Batı. Sağ kolumuzu Güneş'in doğduğu yöne uzatırsak sağımız Doğu, solumuz Batı, önümüz Kuzey, arkamız Güney olur. Doğada kaybolursak Kutup Yıldızı daima KUZEYİ gösterir! Karınca yuvalarının ağzı güneye bakar, toprak yığılı tarafı kuzeydedir. Ağaç ve taşların yosunlu yüzeyi de kuzeyi gösterir!",
        "audio": "assets/audio/courses/sos-u2_s1.mp3"
      },
      {
        "title": "Kroki ve Harita Çeşitleri",
        "badge": "2. Adım: Harita & Kroki",
        "slide": "assets/images/evimiz_dunya.svg",
        "narration": "Bir yerin kuş bakışı, yani tepeden görünüşünün ölçüsüz ve kabataslak çizimine Kroki denir. Belli bir küçültme oranı (ölçek) kullanılarak çizilenlere ise Harita denir. Fiziki haritalar dağları, ovaları, denizleri gösterirken; Siyasi haritalar ülke ve il sınırlarını gösterir.",
        "audio": "assets/audio/courses/sos-u2_s2.mp3"
      },
      {
        "title": "Fiziki Haritadaki Renklerin Gizemi",
        "badge": "3. Adım: Harita Renkleri",
        "slide": "assets/images/evimiz_dunya.svg",
        "narration": "En sık yapılan hataya dikkat: Fiziki haritalardaki yeşil renk ormanları GÖSTERMEZ! Yeşil renk, deniz seviyesine yakın alçak yerleri ve ovaları (0-500 metre) gösterir. Sarı renk orta yükseklikteki düzlükleri ve platoları (500-1000 metre), Kahverengi ise yüksek dağları ve tepeleri (1000+ metre) gösterir. Denizlerde ise derinlik arttıkça mavi koyulaşır!",
        "audio": "assets/audio/courses/sos-u2_s3.mp3"
      },
      {
        "title": "Doğal Afetler ve Deprem Bilinci",
        "badge": "4. Adım: Doğal Afetler",
        "slide": "assets/images/evimiz_dunya.svg",
        "narration": "Deprem, sel, heyelan ve çığ doğanın ani hareketleridir. Ülkemiz bir deprem kuşağındadır. Deprem sırasında panik yapmadan \"Çök - Kapan - Tutun\" pozisyonunu almalıyız. Evlerimizde mutlaka içinde su, düdük, fener ve ilk yardım seti bulunan bir Deprem Çantası hazır bekletmeliyiz. Dik yamaçları ağaçlandırmak ise heyelanı ve erozyonu önler.",
        "audio": "assets/audio/courses/sos-u2_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Geceleri bulutsuz bir havada daima KUZEY yönünü gösteren yıldız hangisidir?",
        "options": [
          "Çoban Yıldızı",
          "Kutup Yıldızı (Demirkazık)",
          "Güneş",
          "Kuyruklu Yıldız"
        ],
        "answer": 1,
        "explanation": "Kutup Yıldızı (Polaris) gökyüzünde daima coğrafi kuzey yönünü gösterir."
      },
      {
        "q": "Ağaçların ve taşların yosun tutan tarafı genellikle HANGİ YÖNÜ gösterir?",
        "options": [
          "Doğu",
          "Batı",
          "Kuzey",
          "Güney"
        ],
        "answer": 2,
        "explanation": "Güneş ışığını daha az alan nemli kuzey yamaçlar yosun bağlar."
      },
      {
        "q": "Bir yerin KUŞ BAKIŞI görünüşünün ölçüsüz (kabataslak) çizilmesine ne denir?",
        "options": [
          "Harita",
          "Kroki",
          "Plan",
          "Minyatür"
        ],
        "answer": 1,
        "explanation": "Ölçeksiz, kaba taslak kuş bakışı çizimlere \"Kroki\" denir."
      },
      {
        "q": "Fiziki haritalarda YEŞİL RENK neyi ifade eder?",
        "options": [
          "Sık ormanları ve çimenleri",
          "Deniz seviyesine yakın (0-500 m) alçak ovaları",
          "Çölleri",
          "Yüksek dağları"
        ],
        "answer": 1,
        "explanation": "Fiziki haritalarda renkler bitki örtüsünü değil, deniz seviyesine göre yükseltiyi gösterir."
      },
      {
        "q": "Fiziki haritalarda YÜKSEK DAĞLAR hangi renkle gösterilir?",
        "options": [
          "Yeşil",
          "Sarı",
          "Kahverengi",
          "Mavi"
        ],
        "answer": 2,
        "explanation": "1000 metrenin üzerindeki yüksek yerler ve dağlar kahverengi tonlarıyla gösterilir."
      },
      {
        "q": "Deprem anında alınması gereken en güvenli pozisyon hangisidir?",
        "options": [
          "Balkondan atlamak",
          "Asansöre koşmak",
          "Çök - Kapan - Tutun",
          "Merdivenlere doğru koşmak"
        ],
        "answer": 2,
        "explanation": "Depremde sarsıntı geçene kadar sağlam bir eşyanın yanında Çök-Kapan-Tutun yapılır."
      },
      {
        "q": "Aşağıdakilerden hangisi bir DEPREM ÇANTASINDA mutlaka bulunmalıdır?",
        "options": [
          "Düdük, su, el feneri ve ilk yardım çantası",
          "Bilgisayar ve oyun konsolu",
          "Ütü ve saç kurutma makinesi",
          "Ağır kitaplar"
        ],
        "answer": 0,
        "explanation": "Afet sonrası hayatta kalmak ve yerini bildirmek için su, fener ve düdük hayatidir."
      },
      {
        "q": "Karınca yuvalarının ağzı sıcak ve güneş alan HANGİ YÖNE bakar?",
        "options": [
          "Kuzey",
          "Güney",
          "Doğu",
          "Batı"
        ],
        "answer": 1,
        "explanation": "Karıncalar yuvalarının ağzını Güneş alan Güney yönüne yaparlar."
      },
      {
        "q": "Eğimli yamaçlardaki toprağın su ve yerçekimi etkisiyle aşağı kaymasına ne ad verilir?",
        "options": [
          "Deprem",
          "Heyelan (Toprak kayması)",
          "Hortum",
          "Çığ"
        ],
        "answer": 1,
        "explanation": "Toprak tabakasının kütle halinde kaymasına Heyelan denir; ağaçlandırma bunu engeller."
      },
      {
        "q": "Sağ kolumuzu Güneş'in doğduğu tarafa uzattığımızda ARKAYÜZÜMÜZ hangi yönü gösterir?",
        "options": [
          "Doğu",
          "Batı",
          "Kuzey",
          "Güney"
        ],
        "answer": 3,
        "explanation": "Sağ kol Doğu, sol kol Batı, önümüz Kuzey ve arkamız Güney olur."
      }
    ],
    "quiz": [
      {
        "q": "Geceleri bulutsuz bir havada daima KUZEY yönünü gösteren yıldız hangisidir?",
        "options": [
          "Çoban Yıldızı",
          "Kutup Yıldızı (Demirkazık)",
          "Güneş",
          "Kuyruklu Yıldız"
        ],
        "answer": 1,
        "explanation": "Kutup Yıldızı (Polaris) gökyüzünde daima coğrafi kuzey yönünü gösterir."
      },
      {
        "q": "Ağaçların ve taşların yosun tutan tarafı genellikle HANGİ YÖNÜ gösterir?",
        "options": [
          "Doğu",
          "Batı",
          "Kuzey",
          "Güney"
        ],
        "answer": 2,
        "explanation": "Güneş ışığını daha az alan nemli kuzey yamaçlar yosun bağlar."
      },
      {
        "q": "Bir yerin KUŞ BAKIŞI görünüşünün ölçüsüz (kabataslak) çizilmesine ne denir?",
        "options": [
          "Harita",
          "Kroki",
          "Plan",
          "Minyatür"
        ],
        "answer": 1,
        "explanation": "Ölçeksiz, kaba taslak kuş bakışı çizimlere \"Kroki\" denir."
      },
      {
        "q": "Fiziki haritalarda YEŞİL RENK neyi ifade eder?",
        "options": [
          "Sık ormanları ve çimenleri",
          "Deniz seviyesine yakın (0-500 m) alçak ovaları",
          "Çölleri",
          "Yüksek dağları"
        ],
        "answer": 1,
        "explanation": "Fiziki haritalarda renkler bitki örtüsünü değil, deniz seviyesine göre yükseltiyi gösterir."
      },
      {
        "q": "Fiziki haritalarda YÜKSEK DAĞLAR hangi renkle gösterilir?",
        "options": [
          "Yeşil",
          "Sarı",
          "Kahverengi",
          "Mavi"
        ],
        "answer": 2,
        "explanation": "1000 metrenin üzerindeki yüksek yerler ve dağlar kahverengi tonlarıyla gösterilir."
      },
      {
        "q": "Deprem anında alınması gereken en güvenli pozisyon hangisidir?",
        "options": [
          "Balkondan atlamak",
          "Asansöre koşmak",
          "Çök - Kapan - Tutun",
          "Merdivenlere doğru koşmak"
        ],
        "answer": 2,
        "explanation": "Depremde sarsıntı geçene kadar sağlam bir eşyanın yanında Çök-Kapan-Tutun yapılır."
      },
      {
        "q": "Aşağıdakilerden hangisi bir DEPREM ÇANTASINDA mutlaka bulunmalıdır?",
        "options": [
          "Düdük, su, el feneri ve ilk yardım çantası",
          "Bilgisayar ve oyun konsolu",
          "Ütü ve saç kurutma makinesi",
          "Ağır kitaplar"
        ],
        "answer": 0,
        "explanation": "Afet sonrası hayatta kalmak ve yerini bildirmek için su, fener ve düdük hayatidir."
      },
      {
        "q": "Karınca yuvalarının ağzı sıcak ve güneş alan HANGİ YÖNE bakar?",
        "options": [
          "Kuzey",
          "Güney",
          "Doğu",
          "Batı"
        ],
        "answer": 1,
        "explanation": "Karıncalar yuvalarının ağzını Güneş alan Güney yönüne yaparlar."
      },
      {
        "q": "Eğimli yamaçlardaki toprağın su ve yerçekimi etkisiyle aşağı kaymasına ne ad verilir?",
        "options": [
          "Deprem",
          "Heyelan (Toprak kayması)",
          "Hortum",
          "Çığ"
        ],
        "answer": 1,
        "explanation": "Toprak tabakasının kütle halinde kaymasına Heyelan denir; ağaçlandırma bunu engeller."
      },
      {
        "q": "Sağ kolumuzu Güneş'in doğduğu tarafa uzattığımızda ARKAYÜZÜMÜZ hangi yönü gösterir?",
        "options": [
          "Doğu",
          "Batı",
          "Kuzey",
          "Güney"
        ],
        "answer": 3,
        "explanation": "Sağ kol Doğu, sol kol Batı, önümüz Kuzey ve arkamız Güney olur."
      }
    ]
  },
  "sos-u3": {
    "id": "sos-u3",
    "subject": "Sosyal Bilgiler",
    "unitNo": "3. Ünite",
    "title": "Ortak Mirasımız",
    "icon": "🏛️",
    "steps": [
      {
        "title": "Aile Tarihi ve Sözlü Tarih Yöntemi",
        "badge": "1. Adım: Aile Tarihi",
        "slide": "assets/images/ortak_mirasimiz.svg",
        "narration": "Merhaba tarih kâşifim! Ailemizin geçmişini araştırmak müthiş bir serüvendir. Geçmişi yaşayan aile büyüklerimizle röportaj yaparak bilgi toplamaya Sözlü Tarih yöntemi denir. İlk adım görüşülecek kişiyi seçmek ve soruları hazırlamaktır. Görüşme sırasında ses veya video kaydı alınır ve toplanan bilgiler yazılı bir rapora dönüştürülür.",
        "audio": "assets/audio/courses/sos-u3_s1.mp3"
      },
      {
        "title": "Geçmişten Bugüne Oyun ve Oyuncaklar",
        "badge": "2. Adım: Geleneksel Oyunlar",
        "slide": "assets/images/ortak_mirasimiz.svg",
        "narration": "Dedelerimiz ve ninelerimiz çocukken sokaklarda tahta topaç çevirir, misket oynar, çelik çomak, seksek, körebe ve mendil kapmaca ile neşeyle koşarlardı! Bez bebekler ve tahta arabalar el emeğiyle yapılırdı. Bugün bilgisayar oyunları yaygınlaşsa da geleneksel sokak oyunlarımız arkadaşlığı ve fiziksel sağlığı pekiştirir.",
        "audio": "assets/audio/courses/sos-u3_s2.mp3"
      },
      {
        "title": "Milli Kültür ve Geleneklerimiz",
        "badge": "3. Adım: Milli Kültür",
        "slide": "assets/images/ortak_mirasimiz.svg",
        "narration": "Bizi biz yapan ortak değerlerimize Milli Kültür denir. Düğünlerimiz, kına gecelerimiz, bayramlaşmalarımız, misafire ikram ettiğimiz Türk kahvesi ve lokum kültürümüzün incileridir. Zeybek, horon, halay gibi halk oyunlarımız milli birliğimizin danslarıdır.",
        "audio": "assets/audio/courses/sos-u3_s3.mp3"
      },
      {
        "title": "Tarihi Mekânlar ve Kültürel Miras",
        "badge": "4. Adım: Kültürel Miras",
        "slide": "assets/images/ortak_mirasimiz.svg",
        "narration": "Ülkemiz adeta bir açık hava müzesidir! Topkapı Sarayı, Ayasofya, Selimiye Camii, Efes Antik Kenti ve Çanakkale Şehitliği gibi ortak miras ögeleri geçmişimizin bize bıraktığı kutsal emanetlerdir. Bu tarihi eserleri korumak ve gelecek nesillere taşımak her vatandaşın milli görevidir.",
        "audio": "assets/audio/courses/sos-u3_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Aile büyükleriyle görüşerek geçmiş hakkında bilgi toplama yöntemine ne ad verilir?",
        "options": [
          "Arkeolojik kazı",
          "Sözlü Tarih",
          "Fosil incelemesi",
          "Deney yapma"
        ],
        "answer": 1,
        "explanation": "Yaşayan tanıklarla röportaj yaparak geçmişi aydınlatma yöntemine \"Sözlü Tarih\" denir."
      },
      {
        "q": "Sözlü tarih çalışmasının İLK AŞAMASI aşağıdakilerden hangisidir?",
        "options": [
          "Rapor yazmak",
          "Görüşme yapılacak kişiyi belirlemek ve soruları hazırlamak",
          "Kayıt cihazını kapatmak",
          "Fotoğraf sergisi açmak"
        ],
        "answer": 1,
        "explanation": "Sözlü tarihte ilk adım görüşülecek kişiyi belirleyip amaca uygun sorular hazırlamaktır."
      },
      {
        "q": "Aşağıdakilerden hangisi GELENEKSEL ÇOCUK OYUNLARIMIZDAN biridir?",
        "options": [
          "Video konsol oyunu",
          "Çelik çomak ve seksek",
          "Simülasyon oyunu",
          "Sanal gerçeklik"
        ],
        "answer": 1,
        "explanation": "Çelik çomak, seksek, mendil kapmaca, körebe geleneksel çocuk oyunlarımızdandır."
      },
      {
        "q": "Eskiden çocukların elleriyle ip sarıp yere fırlatarak döndürdükleri ahşap oyuncağa ne denir?",
        "options": [
          "Topaç",
          "Uzaktan kumandalı araba",
          "Robot",
          "Tablet"
        ],
        "answer": 0,
        "explanation": "Topaç, geçmişten bugüne gelen en yaygın ahşap geleneksel oyuncaktır."
      },
      {
        "q": "Karadeniz Bölgesi'ne özgü, kemençe eşliğinde hızlı adımlarla oynanan halk oyunu hangisidir?",
        "options": [
          "Zeybek",
          "Horon",
          "Halay",
          "Çiftetelli"
        ],
        "answer": 1,
        "explanation": "Kemençe ritmiyle coşkuyla oynanan Karadeniz halk oyunu Horondur."
      },
      {
        "q": "Ege Bölgesi'nin yiğitlik ve cesaret simgesi olan halk oyunu hangisidir?",
        "options": [
          "Zeybek",
          "Horon",
          "Kafkas",
          "Bar"
        ],
        "answer": 0,
        "explanation": "Efelerin ağır ve heybetli adımlarla oynadığı Ege halk oyunu Zeybektir."
      },
      {
        "q": "Ailenin geçmişini, dedelerden torunlara uzanan soy bağlarını gösteren şemaya ne ad verilir?",
        "options": [
          "Kroki",
          "Soyağacı (Şecere)",
          "Zaman çizelgesi",
          "Çetele"
        ],
        "answer": 1,
        "explanation": "Kuşaklar arası akrabalık bağlarını gösteren ağaç şemasına \"Soyağacı\" denir."
      },
      {
        "q": "Edirne'de bulunan ve Mimar Sinan'ın \"Ustalık Eserim\" dediği dünyaca ünlü tarihi cami hangisidir?",
        "options": [
          "Sultanahmet Camii",
          "Selimiye Camii",
          "Süleymaniye Camii",
          "Bursa Ulu Cami"
        ],
        "answer": 1,
        "explanation": "Mimar Sinan Selimiye Camii'ni ustalık eseri olarak inşa etmiştir."
      },
      {
        "q": "Geçmişten günümüze aktarılan eski fotoğraflar, madalyalar, mektuplar ailemizde ne olarak adlandırılır?",
        "options": [
          "Çöp",
          "Aile Yadigârı",
          "Fatura",
          "Ticari mal"
        ],
        "answer": 1,
        "explanation": "Geçmişten hatıra kalan manevi değeri yüksek eşyalara \"Aile Yadigârı\" denir."
      },
      {
        "q": "Kültürel mirasımızı ve tarihi eserlerimizi korumak neden önemlidir?",
        "options": [
          "Yalnızca turistlere bilet satmak için",
          "Milli kimliğimizi ve geçmiş bağlarımızı geleceğe taşımak için",
          "Eski oldukları için onları yenileriyle değiştirmek için",
          "Müzelerde yer kaplamalarını sağlamak için"
        ],
        "answer": 1,
        "explanation": "Ortak miras ögeleri milletin hafızasıdır; geçmişi bilmeyen geleceğini kuramaz."
      }
    ],
    "quiz": [
      {
        "q": "Aile büyükleriyle görüşerek geçmiş hakkında bilgi toplama yöntemine ne ad verilir?",
        "options": [
          "Arkeolojik kazı",
          "Sözlü Tarih",
          "Fosil incelemesi",
          "Deney yapma"
        ],
        "answer": 1,
        "explanation": "Yaşayan tanıklarla röportaj yaparak geçmişi aydınlatma yöntemine \"Sözlü Tarih\" denir."
      },
      {
        "q": "Sözlü tarih çalışmasının İLK AŞAMASI aşağıdakilerden hangisidir?",
        "options": [
          "Rapor yazmak",
          "Görüşme yapılacak kişiyi belirlemek ve soruları hazırlamak",
          "Kayıt cihazını kapatmak",
          "Fotoğraf sergisi açmak"
        ],
        "answer": 1,
        "explanation": "Sözlü tarihte ilk adım görüşülecek kişiyi belirleyip amaca uygun sorular hazırlamaktır."
      },
      {
        "q": "Aşağıdakilerden hangisi GELENEKSEL ÇOCUK OYUNLARIMIZDAN biridir?",
        "options": [
          "Video konsol oyunu",
          "Çelik çomak ve seksek",
          "Simülasyon oyunu",
          "Sanal gerçeklik"
        ],
        "answer": 1,
        "explanation": "Çelik çomak, seksek, mendil kapmaca, körebe geleneksel çocuk oyunlarımızdandır."
      },
      {
        "q": "Eskiden çocukların elleriyle ip sarıp yere fırlatarak döndürdükleri ahşap oyuncağa ne denir?",
        "options": [
          "Topaç",
          "Uzaktan kumandalı araba",
          "Robot",
          "Tablet"
        ],
        "answer": 0,
        "explanation": "Topaç, geçmişten bugüne gelen en yaygın ahşap geleneksel oyuncaktır."
      },
      {
        "q": "Karadeniz Bölgesi'ne özgü, kemençe eşliğinde hızlı adımlarla oynanan halk oyunu hangisidir?",
        "options": [
          "Zeybek",
          "Horon",
          "Halay",
          "Çiftetelli"
        ],
        "answer": 1,
        "explanation": "Kemençe ritmiyle coşkuyla oynanan Karadeniz halk oyunu Horondur."
      },
      {
        "q": "Ege Bölgesi'nin yiğitlik ve cesaret simgesi olan halk oyunu hangisidir?",
        "options": [
          "Zeybek",
          "Horon",
          "Kafkas",
          "Bar"
        ],
        "answer": 0,
        "explanation": "Efelerin ağır ve heybetli adımlarla oynadığı Ege halk oyunu Zeybektir."
      },
      {
        "q": "Ailenin geçmişini, dedelerden torunlara uzanan soy bağlarını gösteren şemaya ne ad verilir?",
        "options": [
          "Kroki",
          "Soyağacı (Şecere)",
          "Zaman çizelgesi",
          "Çetele"
        ],
        "answer": 1,
        "explanation": "Kuşaklar arası akrabalık bağlarını gösteren ağaç şemasına \"Soyağacı\" denir."
      },
      {
        "q": "Edirne'de bulunan ve Mimar Sinan'ın \"Ustalık Eserim\" dediği dünyaca ünlü tarihi cami hangisidir?",
        "options": [
          "Sultanahmet Camii",
          "Selimiye Camii",
          "Süleymaniye Camii",
          "Bursa Ulu Cami"
        ],
        "answer": 1,
        "explanation": "Mimar Sinan Selimiye Camii'ni ustalık eseri olarak inşa etmiştir."
      },
      {
        "q": "Geçmişten günümüze aktarılan eski fotoğraflar, madalyalar, mektuplar ailemizde ne olarak adlandırılır?",
        "options": [
          "Çöp",
          "Aile Yadigârı",
          "Fatura",
          "Ticari mal"
        ],
        "answer": 1,
        "explanation": "Geçmişten hatıra kalan manevi değeri yüksek eşyalara \"Aile Yadigârı\" denir."
      },
      {
        "q": "Kültürel mirasımızı ve tarihi eserlerimizi korumak neden önemlidir?",
        "options": [
          "Yalnızca turistlere bilet satmak için",
          "Milli kimliğimizi ve geçmiş bağlarımızı geleceğe taşımak için",
          "Eski oldukları için onları yenileriyle değiştirmek için",
          "Müzelerde yer kaplamalarını sağlamak için"
        ],
        "answer": 1,
        "explanation": "Ortak miras ögeleri milletin hafızasıdır; geçmişi bilmeyen geleceğini kuramaz."
      }
    ]
  },
  "sos-u4": {
    "id": "sos-u4",
    "subject": "Sosyal Bilgiler",
    "unitNo": "4. Ünite",
    "title": "Yaşayan Demokrasimiz",
    "icon": "🇹🇷",
    "steps": [
      {
        "title": "Milli Mücadele ve Mustafa Kemal Atatürk",
        "badge": "1. Adım: Milli Mücadele",
        "slide": "assets/images/yasayan_demokrasimiz.svg",
        "narration": "Merhaba genç cumhuriyetçi! Yurdumuz Birinci Dünya Savaşı'ndan sonra düşmanlarca işgal edilmişti. Mustafa Kemal Paşa 19 Mayıs 1919'da Samsun'a çıkarak Kurtuluş Savaşı'nı başlattı! Amasya, Erzurum ve Sivas kongreleriyle millet kenetlendi. Hasan Tahsin, Şerife Bacı, Sütçü İmam gibi binlerce kahramanımız canlarını feda ederek vatanı kurtardı.",
        "audio": "assets/audio/courses/sos-u4_s1.mp3"
      },
      {
        "title": "23 Nisan 1920: TBMM ve Milli Egemenlik",
        "badge": "2. Adım: TBMM'nin Açılışı",
        "slide": "assets/images/yasayan_demokrasimiz.svg",
        "narration": "23 Nisan 1920'de Ankara'da Türkiye Büyük Millet Meclisi açıldı! Meclis duvarına altın harflerle şu ilke yazıldı: \"Egemenlik kayıtsız şartsız milletindir!\" Atatürk bu büyük günü tüm dünya çocuklarına bayram olarak armağan etti. Artık sarayın değil, halkın seçtiği temsilcilerin sözü geçiyordu.",
        "audio": "assets/audio/courses/sos-u4_s2.mp3"
      },
      {
        "title": "29 Ekim 1923: Cumhuriyetin İlanı ve Kazanımlar",
        "badge": "3. Adım: Cumhuriyet",
        "slide": "assets/images/yasayan_demokrasimiz.svg",
        "narration": "29 Ekim 1923'te Cumhuriyet ilan edildi ve devletin ilk Cumhurbaşkanı Mustafa Kemal Atatürk oldu. Cumhuriyet, halkın kendi yöneticilerini seçimle belirlediği en çağdaş yönetim biçimidir. Kadınlara seçme ve seçilme hakkı verildi, Harf Devrimi ile okullar açıldı ve hukuk önünde herkes eşit kılındı.",
        "audio": "assets/audio/courses/sos-u4_s3.mp3"
      },
      {
        "title": "Okulda Demokratik Katılım ve Seçimler",
        "badge": "4. Adım: Okulda Demokrasi",
        "slide": "assets/images/yasayan_demokrasimiz.svg",
        "narration": "Demokrasiyi sadece kitaplardan öğrenmeyiz, yaşarız! Sınıf temsilcisi seçimlerinde aday olmak, oy kullanmak, oy sayımına saygı göstermek ve çoğunluğun kararına uymak demokrasinin ilk adımıdır. Okul meclisleri ve eğitsel kulüplerde fikirlerimizi özgürce ifade eder ve iş birliği yaparız.",
        "audio": "assets/audio/courses/sos-u4_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Mustafa Kemal Paşa'nın Milli Mücadele'yi başlatmak üzere SAMSUN'A ÇIKIŞ TARİHİ hangisidir?",
        "options": [
          "23 Nisan 1920",
          "19 Mayıs 1919",
          "29 Ekim 1923",
          "30 Ağustos 1922"
        ],
        "answer": 1,
        "explanation": "19 Mayıs 1919 Atatürk'ün Samsun'a ayak bastığı ve Kurtuluş Savaşı'nı başlattığı gündür."
      },
      {
        "q": "Türkiye Büyük Millet Meclisi (TBMM) hangi tarihte ve hangi şehirde açılmıştır?",
        "options": [
          "23 Nisan 1920 - Ankara",
          "19 Mayıs 1919 - Samsun",
          "29 Ekim 1923 - İstanbul",
          "30 Ağustos 1922 - İzmir"
        ],
        "answer": 0,
        "explanation": "TBMM 23 Nisan 1920'de Ankara'da dualarla ve halkın coşkusuyla açılmıştır."
      },
      {
        "q": "Halkın kendi yöneticilerini serbest seçimlerle kendisinin belirlediği yönetim biçimi hangisidir?",
        "options": [
          "Krallık",
          "Monarşi",
          "Cumhuriyet",
          "Saltanat"
        ],
        "answer": 2,
        "explanation": "Millet egemenliğine ve seçimlere dayalı yönetim biçimi Cumhuriyettir."
      },
      {
        "q": "Kurtuluş Savaşı'nda İnebolu'dan Ankara'ya cephane taşırken kış şartlarında şehit düşen kahraman Türk kadını kimdir?",
        "options": [
          "Halide Edip Adıvar",
          "Şerife Bacı",
          "Nene Hatun",
          "Kara Fatma"
        ],
        "answer": 1,
        "explanation": "Şerife Bacı, bebeğinin üzerindeki battaniyeyi ıslanmasın diye cephaneye örterek şehit olmuştur."
      },
      {
        "q": "\"Egemenlik kayıtsız şartsız ........................\" sözündeki boşluğa ne gelmelidir?",
        "options": [
          "Hükümetindir",
          "Milletindir",
          "Padişahındır",
          "Ordunundur"
        ],
        "answer": 1,
        "explanation": "Atatürk'ün temel ilkesi: \"Egemenlik kayıtsız şartsız milletindir!\""
      },
      {
        "q": "CUMHURİYET hangi tarihte ilan edilmiştir?",
        "options": [
          "23 Nisan 1920",
          "19 Mayıs 1919",
          "29 Ekim 1923",
          "15 Temmuz 2016"
        ],
        "answer": 2,
        "explanation": "Cumhuriyet 29 Ekim 1923'te ilan edilmiştir."
      },
      {
        "q": "Okulda sınıf başkanı seçimi yapılırken aşağıdakilerden hangisi DEMOKRATİK bir davranıştır?",
        "options": [
          "Kendi arkadaşımız olmayana zorla oy verdirmek",
          "Gizli oy kullanıp çoğunluğun seçimine saygı göstermek",
          "Seçim sonucuna itiraz edip kavga çıkarmak",
          "Sadece en güçlü öğrencinin oy kullanması"
        ],
        "answer": 1,
        "explanation": "Gizli oy, açık sayım ve sonuca saygı göstermek demokrasinin temel kuralıdır."
      },
      {
        "q": "Gazi Mustafa Kemal Atatürk, 23 Nisan gününü kime armağan etmiştir?",
        "options": [
          "Gençlere",
          "Tüm dünya çocuklarına",
          "Yaşlılara",
          "Öğretmenlere"
        ],
        "answer": 1,
        "explanation": "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı tüm dünya çocuklarına armağandır."
      },
      {
        "q": "Kurtuluş Savaşı'nda Güney Cephesi'nde Maraş'ta ilk kurşunu atarak direnişi başlatan kahramanımız kimdir?",
        "options": [
          "Sütçü İmam",
          "Şahin Bey",
          "Ali Saip Bey",
          "Yörük Ali"
        ],
        "answer": 0,
        "explanation": "Sütçü İmam Kahramanmaraş'ta düşmana karşı ilk direniş kıvılcımını ateşlemiştir."
      },
      {
        "q": "Aşağıdakilerden hangisi Cumhuriyetin getirdiği YENİLİKLERDEN biridir?",
        "options": [
          "Kadınlara seçme ve seçilme hakkı verilmesi",
          "Ayrıcalıklı zümrelerin kurulması",
          "Eğitimin paralı yapılması",
          "Seçimlerin kaldırılması"
        ],
        "answer": 0,
        "explanation": "Cumhuriyet kadın-erkek eşitliğini sağlamış ve kadınlara seçme-seçilme hakkı tanımıştır."
      }
    ],
    "quiz": [
      {
        "q": "Mustafa Kemal Paşa'nın Milli Mücadele'yi başlatmak üzere SAMSUN'A ÇIKIŞ TARİHİ hangisidir?",
        "options": [
          "23 Nisan 1920",
          "19 Mayıs 1919",
          "29 Ekim 1923",
          "30 Ağustos 1922"
        ],
        "answer": 1,
        "explanation": "19 Mayıs 1919 Atatürk'ün Samsun'a ayak bastığı ve Kurtuluş Savaşı'nı başlattığı gündür."
      },
      {
        "q": "Türkiye Büyük Millet Meclisi (TBMM) hangi tarihte ve hangi şehirde açılmıştır?",
        "options": [
          "23 Nisan 1920 - Ankara",
          "19 Mayıs 1919 - Samsun",
          "29 Ekim 1923 - İstanbul",
          "30 Ağustos 1922 - İzmir"
        ],
        "answer": 0,
        "explanation": "TBMM 23 Nisan 1920'de Ankara'da dualarla ve halkın coşkusuyla açılmıştır."
      },
      {
        "q": "Halkın kendi yöneticilerini serbest seçimlerle kendisinin belirlediği yönetim biçimi hangisidir?",
        "options": [
          "Krallık",
          "Monarşi",
          "Cumhuriyet",
          "Saltanat"
        ],
        "answer": 2,
        "explanation": "Millet egemenliğine ve seçimlere dayalı yönetim biçimi Cumhuriyettir."
      },
      {
        "q": "Kurtuluş Savaşı'nda İnebolu'dan Ankara'ya cephane taşırken kış şartlarında şehit düşen kahraman Türk kadını kimdir?",
        "options": [
          "Halide Edip Adıvar",
          "Şerife Bacı",
          "Nene Hatun",
          "Kara Fatma"
        ],
        "answer": 1,
        "explanation": "Şerife Bacı, bebeğinin üzerindeki battaniyeyi ıslanmasın diye cephaneye örterek şehit olmuştur."
      },
      {
        "q": "\"Egemenlik kayıtsız şartsız ........................\" sözündeki boşluğa ne gelmelidir?",
        "options": [
          "Hükümetindir",
          "Milletindir",
          "Padişahındır",
          "Ordunundur"
        ],
        "answer": 1,
        "explanation": "Atatürk'ün temel ilkesi: \"Egemenlik kayıtsız şartsız milletindir!\""
      },
      {
        "q": "CUMHURİYET hangi tarihte ilan edilmiştir?",
        "options": [
          "23 Nisan 1920",
          "19 Mayıs 1919",
          "29 Ekim 1923",
          "15 Temmuz 2016"
        ],
        "answer": 2,
        "explanation": "Cumhuriyet 29 Ekim 1923'te ilan edilmiştir."
      },
      {
        "q": "Okulda sınıf başkanı seçimi yapılırken aşağıdakilerden hangisi DEMOKRATİK bir davranıştır?",
        "options": [
          "Kendi arkadaşımız olmayana zorla oy verdirmek",
          "Gizli oy kullanıp çoğunluğun seçimine saygı göstermek",
          "Seçim sonucuna itiraz edip kavga çıkarmak",
          "Sadece en güçlü öğrencinin oy kullanması"
        ],
        "answer": 1,
        "explanation": "Gizli oy, açık sayım ve sonuca saygı göstermek demokrasinin temel kuralıdır."
      },
      {
        "q": "Gazi Mustafa Kemal Atatürk, 23 Nisan gününü kime armağan etmiştir?",
        "options": [
          "Gençlere",
          "Tüm dünya çocuklarına",
          "Yaşlılara",
          "Öğretmenlere"
        ],
        "answer": 1,
        "explanation": "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı tüm dünya çocuklarına armağandır."
      },
      {
        "q": "Kurtuluş Savaşı'nda Güney Cephesi'nde Maraş'ta ilk kurşunu atarak direnişi başlatan kahramanımız kimdir?",
        "options": [
          "Sütçü İmam",
          "Şahin Bey",
          "Ali Saip Bey",
          "Yörük Ali"
        ],
        "answer": 0,
        "explanation": "Sütçü İmam Kahramanmaraş'ta düşmana karşı ilk direniş kıvılcımını ateşlemiştir."
      },
      {
        "q": "Aşağıdakilerden hangisi Cumhuriyetin getirdiği YENİLİKLERDEN biridir?",
        "options": [
          "Kadınlara seçme ve seçilme hakkı verilmesi",
          "Ayrıcalıklı zümrelerin kurulması",
          "Eğitimin paralı yapılması",
          "Seçimlerin kaldırılması"
        ],
        "answer": 0,
        "explanation": "Cumhuriyet kadın-erkek eşitliğini sağlamış ve kadınlara seçme-seçilme hakkı tanımıştır."
      }
    ]
  },
  "sos-u5": {
    "id": "sos-u5",
    "subject": "Sosyal Bilgiler",
    "unitNo": "5. Ünite",
    "title": "Hayatımızdaki Ekonomi",
    "icon": "💰",
    "steps": [
      {
        "title": "İstek ve Temel İhtiyaçlarımız",
        "badge": "1. Adım: İhtiyaç & İstek",
        "slide": "assets/images/hayatimizdaki_ekonomi.svg",
        "narration": "Merhaba genç ekonomist! Hayatımızı sürdürmek için vazgeçilmez olan şeylere İhtiyaç denir: Su, ekmek, barınma ve sıcak tutan kıyafetler temel ihtiyaçtır. Olmasa da yaşayabileceğimiz şeylere ise İstek deriz: Yeni bir oyuncak, marka ayakkabı veya çikolata gibi. Harçlığımızı harcarken daima ÖNCE İhtiyaçlarımızı, artarsa İsteklerimizi karşılamalıyız.",
        "audio": "assets/audio/courses/sos-u5_s1.mp3"
      },
      {
        "title": "Bilinçli Tüketici ve Aile Bütçesi",
        "badge": "2. Adım: Bilinçli Tüketici",
        "slide": "assets/images/hayatimizdaki_ekonomi.svg",
        "narration": "Bilinçli tüketici alışverişe çıkmadan önce mutlaka Alışveriş Listesi hazırlar! Farklı marketlerde fiyat araştırması yapar. Satın aldığı ürünün son kullanma tarihine ve TSE damgasına bakar. Alışverişin sonunda mutlaka Fiş veya Fatura alır; çünkü fiş almak hem devletimize vergi gitmesini sağlar hem de bozuk malı iade etme hakkı verir.",
        "audio": "assets/audio/courses/sos-u5_s2.mp3"
      },
      {
        "title": "Ürünlerin Yolculuğu: Üretim, Dağıtım, Tüketim",
        "badge": "3. Adım: Ürünün Yolculuğu",
        "slide": "assets/images/hayatimizdaki_ekonomi.svg",
        "narration": "Yediğimiz ekmek soframıza nasıl gelir? 1. Üretim: Çiftçi tarlaya buğday eker, değirmende una, fırında ekmeğe dönüştürülür. 2. Dağıtım: Kamyonlarla marketlere ve bakkallara taşınır. 3. Tüketim: Ailemiz ekmeği satın alır ve soframızda tüketiriz. İşte bu ekonomik zincire Üretim - Dağıtım - Tüketim zinciri denir.",
        "audio": "assets/audio/courses/sos-u5_s3.mp3"
      },
      {
        "title": "Doğal Kaynaklar ve Tasarruf",
        "badge": "4. Adım: Tasarruf",
        "slide": "assets/images/hayatimizdaki_ekonomi.svg",
        "narration": "Ekonomimizin temeli doğadır. Toprak, su, madenler ve ormanlar sınırlıdır. Gereksiz yanan lambayı kapatmak, damlayan musluğu tamir etmek aile bütçemizi koruduğu gibi ülke ekonomisine de büyük katkı sağlar. Kumbaramızda biriktirdiğimiz her kuruş yarınlarımız için güçlü bir adımdır.",
        "audio": "assets/audio/courses/sos-u5_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Aşağıdakilerden hangisi bir insanın ZORUNLU TEMEL İHTİYAÇLARINDAN biridir?",
        "options": [
          "Akıllı telefon",
          "Beslenme ve su",
          "Bilgisayar oyunu",
          "Pahalı saat"
        ],
        "answer": 1,
        "explanation": "Beslenme, su, barınma ve giyinme yaşamsal temel ihtiyaçlarımızdır."
      },
      {
        "q": "Bilinçli bir tüketici alışverişe çıkmadan önce İLK OLARAK ne yapmalıdır?",
        "options": [
          "Bütün parasını cebine koymalıdır",
          "Alışveriş ihtiyaç listesi hazırlamalıdır",
          "En pahalı mağazaya gitmelidir",
          "Kredi kartı limitini artırmalıdır"
        ],
        "answer": 1,
        "explanation": "Alışveriş listesi yapmak gereksiz harcamaları ve israfı önler."
      },
      {
        "q": "Alışveriş yaptıktan sonra FİŞ VEYA FATURA almanın en önemli faydası nedir?",
        "options": [
          "Çantayı doldurması",
          "Devletimize vergi ödenmesini sağlamak ve tüketici hakkını korumak",
          "Kâğıt israfı yapmak",
          "Mağaza sahibine jest yapmak"
        ],
        "answer": 1,
        "explanation": "Fiş/fatura alışverişi resmileştirir, devlete vergi kazandırır ve iade hakkı tanır."
      },
      {
        "q": "Tarladan toplanan domateslerin kamyonlarla hallere ve marketlere taşınması aşaması hangisidir?",
        "options": [
          "Üretim",
          "Dağıtım",
          "Tüketim",
          "Tasarruf"
        ],
        "answer": 1,
        "explanation": "Ürünün üretildiği yerden satış noktalarına taşınmasına \"Dağıtım\" denir."
      },
      {
        "q": "Bir ailenin gelir ve giderlerini planladığı tabloya ne ad verilir?",
        "options": [
          "Kroki",
          "Aile Bütçesi",
          "Soyağacı",
          "Katalog"
        ],
        "answer": 1,
        "explanation": "Gelir ve harcamaların dengelendiği mali plana \"Aile Bütçesi\" denir."
      },
      {
        "q": "Üzerinde Türk Standardları Enstitüsü'nün onay damgası olan kısaltma hangisidir?",
        "options": [
          "MEB",
          "TSE",
          "TDK",
          "TBMM"
        ],
        "answer": 1,
        "explanation": "TSE damgası ürünün Türk standartlarına uygun ve kaliteli olduğunu gösterir."
      },
      {
        "q": "Aşağıdakilerden hangisi bir İSTEK örneğidir?",
        "options": [
          "Kışın giyilen kaban",
          "Okul defteri",
          "Marka spor ayakkabı koleksiyonu",
          "İçme suyu"
        ],
        "answer": 2,
        "explanation": "Koleksiyon veya lüks marka istek kategorisine girer; olmasa da hayat devam eder."
      },
      {
        "q": "Ekmek, süt, meyve gibi gıda ürünlerini satın alıp soframızda yememiz hangi aşamadır?",
        "options": [
          "Üretim",
          "Dağıtım",
          "Tüketim",
          "Pazarlama"
        ],
        "answer": 2,
        "explanation": "Mal ve hizmetlerin ihtiyaçları karşılamak üzere kullanılmasına \"Tüketim\" denir."
      },
      {
        "q": "Gelirimizden arta kalan parayı gelecekteki ihtiyaçlar için kumbarada biriktirmeye ne denir?",
        "options": [
          "İsraf",
          "Tasarruf (Birikim)",
          "Borçlanma",
          "Harcama"
        ],
        "answer": 1,
        "explanation": "Paranın ve kaynakların bilinçli şekilde saklanmasına Tasarruf denir."
      },
      {
        "q": "Kusurlu, bozuk veya bayat çıkan bir ürünü tüketici ne yapma hakkına sahiptir?",
        "options": [
          "Çöpe atıp susmak",
          "Fişiyle birlikte iade etmek veya değiştirmek",
          "Kendi tamir etmeye çalışmak",
          "Başkasına satmak"
        ],
        "answer": 1,
        "explanation": "Tüketici Hakları Kanunu gereğince ayıplı mal iade edilebilir veya değiştirilebilir."
      }
    ],
    "quiz": [
      {
        "q": "Aşağıdakilerden hangisi bir insanın ZORUNLU TEMEL İHTİYAÇLARINDAN biridir?",
        "options": [
          "Akıllı telefon",
          "Beslenme ve su",
          "Bilgisayar oyunu",
          "Pahalı saat"
        ],
        "answer": 1,
        "explanation": "Beslenme, su, barınma ve giyinme yaşamsal temel ihtiyaçlarımızdır."
      },
      {
        "q": "Bilinçli bir tüketici alışverişe çıkmadan önce İLK OLARAK ne yapmalıdır?",
        "options": [
          "Bütün parasını cebine koymalıdır",
          "Alışveriş ihtiyaç listesi hazırlamalıdır",
          "En pahalı mağazaya gitmelidir",
          "Kredi kartı limitini artırmalıdır"
        ],
        "answer": 1,
        "explanation": "Alışveriş listesi yapmak gereksiz harcamaları ve israfı önler."
      },
      {
        "q": "Alışveriş yaptıktan sonra FİŞ VEYA FATURA almanın en önemli faydası nedir?",
        "options": [
          "Çantayı doldurması",
          "Devletimize vergi ödenmesini sağlamak ve tüketici hakkını korumak",
          "Kâğıt israfı yapmak",
          "Mağaza sahibine jest yapmak"
        ],
        "answer": 1,
        "explanation": "Fiş/fatura alışverişi resmileştirir, devlete vergi kazandırır ve iade hakkı tanır."
      },
      {
        "q": "Tarladan toplanan domateslerin kamyonlarla hallere ve marketlere taşınması aşaması hangisidir?",
        "options": [
          "Üretim",
          "Dağıtım",
          "Tüketim",
          "Tasarruf"
        ],
        "answer": 1,
        "explanation": "Ürünün üretildiği yerden satış noktalarına taşınmasına \"Dağıtım\" denir."
      },
      {
        "q": "Bir ailenin gelir ve giderlerini planladığı tabloya ne ad verilir?",
        "options": [
          "Kroki",
          "Aile Bütçesi",
          "Soyağacı",
          "Katalog"
        ],
        "answer": 1,
        "explanation": "Gelir ve harcamaların dengelendiği mali plana \"Aile Bütçesi\" denir."
      },
      {
        "q": "Üzerinde Türk Standardları Enstitüsü'nün onay damgası olan kısaltma hangisidir?",
        "options": [
          "MEB",
          "TSE",
          "TDK",
          "TBMM"
        ],
        "answer": 1,
        "explanation": "TSE damgası ürünün Türk standartlarına uygun ve kaliteli olduğunu gösterir."
      },
      {
        "q": "Aşağıdakilerden hangisi bir İSTEK örneğidir?",
        "options": [
          "Kışın giyilen kaban",
          "Okul defteri",
          "Marka spor ayakkabı koleksiyonu",
          "İçme suyu"
        ],
        "answer": 2,
        "explanation": "Koleksiyon veya lüks marka istek kategorisine girer; olmasa da hayat devam eder."
      },
      {
        "q": "Ekmek, süt, meyve gibi gıda ürünlerini satın alıp soframızda yememiz hangi aşamadır?",
        "options": [
          "Üretim",
          "Dağıtım",
          "Tüketim",
          "Pazarlama"
        ],
        "answer": 2,
        "explanation": "Mal ve hizmetlerin ihtiyaçları karşılamak üzere kullanılmasına \"Tüketim\" denir."
      },
      {
        "q": "Gelirimizden arta kalan parayı gelecekteki ihtiyaçlar için kumbarada biriktirmeye ne denir?",
        "options": [
          "İsraf",
          "Tasarruf (Birikim)",
          "Borçlanma",
          "Harcama"
        ],
        "answer": 1,
        "explanation": "Paranın ve kaynakların bilinçli şekilde saklanmasına Tasarruf denir."
      },
      {
        "q": "Kusurlu, bozuk veya bayat çıkan bir ürünü tüketici ne yapma hakkına sahiptir?",
        "options": [
          "Çöpe atıp susmak",
          "Fişiyle birlikte iade etmek veya değiştirmek",
          "Kendi tamir etmeye çalışmak",
          "Başkasına satmak"
        ],
        "answer": 1,
        "explanation": "Tüketici Hakları Kanunu gereğince ayıplı mal iade edilebilir veya değiştirilebilir."
      }
    ]
  },
  "sos-u6": {
    "id": "sos-u6",
    "subject": "Sosyal Bilgiler",
    "unitNo": "6. Ünite",
    "title": "Teknoloji ve Sosyal Bilimler",
    "icon": "💻",
    "steps": [
      {
        "title": "Teknolojinin Hayatımıza Etkileri",
        "badge": "1. Adım: Teknoloji",
        "slide": "assets/images/teknoloji_ve_sosyal.svg",
        "narration": "Merhaba genç kâşif! Teknoloji insan hayatını kolaylaştıran aletlerin bütünüdür. Tekerleğin icadından hızlı trenlere, mektuptan görüntülü konuşmaya kadar muazzam bir yol aldık! Teknoloji bilgiye anında ulaşmamızı ve mesafeleri kısaltmamızı sağlar. Ancak ekran başında saatlerce hareketsiz kalmak sağlığımızı ve yüz yüze dostluklarımızı olumsuz etkileyebilir.",
        "audio": "assets/audio/courses/sos-u6_s1.mp3"
      },
      {
        "title": "Güvenli İnternet Kuralları",
        "badge": "2. Adım: Güvenli İnternet",
        "slide": "assets/images/teknoloji_ve_sosyal.svg",
        "narration": "İnternet devasa bir kütüphanedir ama dikkatli olmalıyız! Altın kural: Adını, soyadını, ev adresini, okulunun adını ve şifreni sanal ortamda tanımadığın KİMSEYLE paylaşma! Bilinmeyen linklere asla tıklama. Şifrelerini harf, rakam ve sembollerle güçlü yap ve şüpheli bir durumla karşılaştığında mutlaka ailene haber ver.",
        "audio": "assets/audio/courses/sos-u6_s2.mp3"
      },
      {
        "title": "Siber Zorbalık ve Dijital Ayak İzi",
        "badge": "3. Adım: Siber Zorbalık",
        "slide": "assets/images/teknoloji_ve_sosyal.svg",
        "narration": "İnternette insanları üzen, tehdit eden veya alay eden mesajlar atmak büyük bir suçtur; buna Siber Zorbalık denir. Sanal dünyada da tıpkı gerçek hayattaki gibi kibar ve saygılı olmalıyız. İnternette yaptığımız her arama, yüklediğimiz her fotoğraf arkamızda bir Dijital Ayak İzi bırakır; asla silinmez!",
        "audio": "assets/audio/courses/sos-u6_s3.mp3"
      },
      {
        "title": "Bilim İnsanlarının Çocukluk Hayatları",
        "badge": "4. Adım: Çocukluk Merakı",
        "slide": "assets/images/teknoloji_ve_sosyal.svg",
        "narration": "Dünyayı değiştiren büyük mucitlerin ortak noktası neydi biliyor musun? Onlar da çocukken senin gibi meraklıydı! Edison saatleri parçalayıp içini incelerdi. Wright Kardeşler gökyüzündeki kuşları hayranlıkla izlerdi. Hatalardan korkma, bol bol kitap oku ve hayal et! Geleceğin teknolojisini sen üreteceksin.",
        "audio": "assets/audio/courses/sos-u6_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "İnternette tanımadığımız kişilere karşı aşağıdakilerden hangisini yapmak DOĞRUDUR?",
        "options": [
          "Ev adresimizi ve telefon numaramızı vermek",
          "Kişisel bilgilerimizi ve şifrelerimizi kesinlikle gizli tutmak",
          "Okulumuzun yerini tarif etmek",
          "Bize gönderilen her dosyayı hemen açmak"
        ],
        "answer": 1,
        "explanation": "Kişisel verilerin gizliliği ve güvenliği siber alanda hayati kuraldır."
      },
      {
        "q": "İnternet veya dijital platformlar üzerinden birini tehdit etme, alay etme veya rahatsız etme eylemine ne ad verilir?",
        "options": [
          "Siber Zorbalık",
          "Sosyal Sorumluluk",
          "E-Ticaret",
          "Dijital Dönüşüm"
        ],
        "answer": 0,
        "explanation": "Elektronik ortamda yapılan rahatsız edici, kaba davranışlara Siber Zorbalık denir."
      },
      {
        "q": "Aşağıdakilerden hangisi GÜÇLÜ BİR ŞİFRE örneğidir?",
        "options": [
          "123456",
          "1111",
          "Ahmet2014!",
          "adımız"
        ],
        "answer": 2,
        "explanation": "Büyük-küçük harf, rakam ve özel sembol (!) içeren şifreler tahmin edilemez ve güçlüdür."
      },
      {
        "q": "İnternette yaptığımız paylaşımlar, aramalar ve bıraktığımız tüm izlere ne ad verilir?",
        "options": [
          "Dijital Ayak İzi",
          "Kroki",
          "Ağ tablosu",
          "İnternet hızı"
        ],
        "answer": 0,
        "explanation": "Sanal dünyada ardımızda bıraktığımız tüm elektronik kayıtlara \"Dijital Ayak İzi\" denir."
      },
      {
        "q": "Aşağıdakilerden hangisi teknolojinin OLUMSUZ bir etkisidir?",
        "options": [
          "Bilgiye saniyeler içinde ulaşmak",
          "Saatlerce ekran başında hareketsiz oturup asosyalleşmek",
          "Hastalıkların MR cihazıyla erken teşhis edilmesi",
          "Uçaklarla kıtalar arası hızlı seyahat"
        ],
        "answer": 1,
        "explanation": "Aşırı ekran kullanımı fiziksel hareketsizliğe ve yalnızlaşmaya yol açar."
      },
      {
        "q": "İnternette rahatsız edici veya şüpheli bir durumla karşılaşan 4. sınıf öğrencisi İLK OLARAK ne yapmalıdır?",
        "options": [
          "Durumu ailesine veya öğretmenine bildirmelidir",
          "Karşı tarafa küfürle karşılık vermelidir",
          "Bilgisayarı hemen balkondan atmalıdır",
          "Korkup odasına saklanmalıdır"
        ],
        "answer": 0,
        "explanation": "Siber tehlikelerde ilk adım ebeveyne veya öğretmene danışmaktır."
      },
      {
        "q": "İlk motorlu uçağı icat ederek havacılık tarihini başlatan kardeşler kimlerdir?",
        "options": [
          "Wright Kardeşler",
          "Lumiere Kardeşler",
          "Grimm Kardeşler",
          "Curie Kardeşler"
        ],
        "answer": 0,
        "explanation": "Orville ve Wilbur Wright kardeşler 1903 yılında ilk motorlu uçağı uçurmuştur."
      },
      {
        "q": "Geçmişte haberleşmek için aylar süren mektuplar yerine günümüzde hangi teknoloji saniyeler içinde iletişim sağlar?",
        "options": [
          "E-posta ve görüntülü konuşma",
          "Duman",
          "Güvercin",
          "Telgraf"
        ],
        "answer": 0,
        "explanation": "İnternet ve mobil iletişim dünyayı global bir köye dönüştürmüştür."
      },
      {
        "q": "Günde kaç saatten fazla tablet/telefon ekranına bakmak çocukların göz ve omurga sağlığını bozar?",
        "options": [
          "1-2 saatten fazla kontrolsüz kullanım",
          "10 dakika",
          "Hiç zararı yoktur",
          "İstendiği kadar bakılabilir"
        ],
        "answer": 0,
        "explanation": "Uzmanlar çocukların eğlence amaçlı ekran süresini günde 1-2 saat ile sınırlamasını önerir."
      },
      {
        "q": "Bilim insanlarının ve mucitlerin çocukluk dönemlerindeki EN BELİRGİN ortak özelliği nedir?",
        "options": [
          "Çok zengin olmaları",
          "Büyük bir merak, soru sorma arzusu ve gözlem tutkusu",
          "Hiç okula gitmemeleri",
          "Yalnızca oyun oynamaları"
        ],
        "answer": 1,
        "explanation": "Bütün mucitleri başarıya ulaştıran itici güç çocukluklarındaki sönmeyen merak duygusudur."
      }
    ],
    "quiz": [
      {
        "q": "İnternette tanımadığımız kişilere karşı aşağıdakilerden hangisini yapmak DOĞRUDUR?",
        "options": [
          "Ev adresimizi ve telefon numaramızı vermek",
          "Kişisel bilgilerimizi ve şifrelerimizi kesinlikle gizli tutmak",
          "Okulumuzun yerini tarif etmek",
          "Bize gönderilen her dosyayı hemen açmak"
        ],
        "answer": 1,
        "explanation": "Kişisel verilerin gizliliği ve güvenliği siber alanda hayati kuraldır."
      },
      {
        "q": "İnternet veya dijital platformlar üzerinden birini tehdit etme, alay etme veya rahatsız etme eylemine ne ad verilir?",
        "options": [
          "Siber Zorbalık",
          "Sosyal Sorumluluk",
          "E-Ticaret",
          "Dijital Dönüşüm"
        ],
        "answer": 0,
        "explanation": "Elektronik ortamda yapılan rahatsız edici, kaba davranışlara Siber Zorbalık denir."
      },
      {
        "q": "Aşağıdakilerden hangisi GÜÇLÜ BİR ŞİFRE örneğidir?",
        "options": [
          "123456",
          "1111",
          "Ahmet2014!",
          "adımız"
        ],
        "answer": 2,
        "explanation": "Büyük-küçük harf, rakam ve özel sembol (!) içeren şifreler tahmin edilemez ve güçlüdür."
      },
      {
        "q": "İnternette yaptığımız paylaşımlar, aramalar ve bıraktığımız tüm izlere ne ad verilir?",
        "options": [
          "Dijital Ayak İzi",
          "Kroki",
          "Ağ tablosu",
          "İnternet hızı"
        ],
        "answer": 0,
        "explanation": "Sanal dünyada ardımızda bıraktığımız tüm elektronik kayıtlara \"Dijital Ayak İzi\" denir."
      },
      {
        "q": "Aşağıdakilerden hangisi teknolojinin OLUMSUZ bir etkisidir?",
        "options": [
          "Bilgiye saniyeler içinde ulaşmak",
          "Saatlerce ekran başında hareketsiz oturup asosyalleşmek",
          "Hastalıkların MR cihazıyla erken teşhis edilmesi",
          "Uçaklarla kıtalar arası hızlı seyahat"
        ],
        "answer": 1,
        "explanation": "Aşırı ekran kullanımı fiziksel hareketsizliğe ve yalnızlaşmaya yol açar."
      },
      {
        "q": "İnternette rahatsız edici veya şüpheli bir durumla karşılaşan 4. sınıf öğrencisi İLK OLARAK ne yapmalıdır?",
        "options": [
          "Durumu ailesine veya öğretmenine bildirmelidir",
          "Karşı tarafa küfürle karşılık vermelidir",
          "Bilgisayarı hemen balkondan atmalıdır",
          "Korkup odasına saklanmalıdır"
        ],
        "answer": 0,
        "explanation": "Siber tehlikelerde ilk adım ebeveyne veya öğretmene danışmaktır."
      },
      {
        "q": "İlk motorlu uçağı icat ederek havacılık tarihini başlatan kardeşler kimlerdir?",
        "options": [
          "Wright Kardeşler",
          "Lumiere Kardeşler",
          "Grimm Kardeşler",
          "Curie Kardeşler"
        ],
        "answer": 0,
        "explanation": "Orville ve Wilbur Wright kardeşler 1903 yılında ilk motorlu uçağı uçurmuştur."
      },
      {
        "q": "Geçmişte haberleşmek için aylar süren mektuplar yerine günümüzde hangi teknoloji saniyeler içinde iletişim sağlar?",
        "options": [
          "E-posta ve görüntülü konuşma",
          "Duman",
          "Güvercin",
          "Telgraf"
        ],
        "answer": 0,
        "explanation": "İnternet ve mobil iletişim dünyayı global bir köye dönüştürmüştür."
      },
      {
        "q": "Günde kaç saatten fazla tablet/telefon ekranına bakmak çocukların göz ve omurga sağlığını bozar?",
        "options": [
          "1-2 saatten fazla kontrolsüz kullanım",
          "10 dakika",
          "Hiç zararı yoktur",
          "İstendiği kadar bakılabilir"
        ],
        "answer": 0,
        "explanation": "Uzmanlar çocukların eğlence amaçlı ekran süresini günde 1-2 saat ile sınırlamasını önerir."
      },
      {
        "q": "Bilim insanlarının ve mucitlerin çocukluk dönemlerindeki EN BELİRGİN ortak özelliği nedir?",
        "options": [
          "Çok zengin olmaları",
          "Büyük bir merak, soru sorma arzusu ve gözlem tutkusu",
          "Hiç okula gitmemeleri",
          "Yalnızca oyun oynamaları"
        ],
        "answer": 1,
        "explanation": "Bütün mucitleri başarıya ulaştıran itici güç çocukluklarındaki sönmeyen merak duygusudur."
      }
    ]
  },
  "din-u1": {
    "id": "din-u1",
    "subject": "Din Kültürü",
    "unitNo": "1. Ünite",
    "title": "Günlük Hayat ve Din",
    "icon": "🕌",
    "steps": [
      {
        "title": "Günlük Hayattaki Dini İfadeler",
        "badge": "1. Adım: Dini İfadeler",
        "slide": "assets/images/gunluk_hayat_ve_din.svg",
        "narration": "Merhaba sevgili kâşif! Dilimizde her gün kullandığımız güzel dinî ifadeler vardır. Her güzel işe başlarken \"Bismillahirrahmanirrahim\" deriz; yani Rahman ve Rahim olan Allah'ın adıyla başlarım. Karşılaştığımızda \"Selamün Aleyküm\" diyerek barış ve esenlik dileriz. Bir nimete kavuştuğumuzda \"Elhamdülillah\" diyerek şükreder, güzel bir şey görünce nazar değmesin diye \"Maşallah\" deriz.",
        "audio": "assets/audio/courses/din-u1_s1.mp3"
      },
      {
        "title": "Temizlik İmandandır: Beden ve Çevre Temizliği",
        "badge": "2. Adım: Temizlik",
        "slide": "assets/images/gunluk_hayat_ve_din.svg",
        "narration": "Peygamberimiz \"Temizlik imanın yarısıdır\" buyurmuştur. İslam dini temizliğe büyük önem verir. Günde beş vakit namazdan önce abdest alarak ellerimizi, yüzümüzü, ayaklarımızı yıkarız. Dişlerimizi misvaklamak veya fırçalamak, tırnaklarımızı kesmek ve temiz elbiseler giymek beden temizliğidir. Sokağımızı, okulumuzu ve doğayı temiz tutmak da ibadet sevabındadır.",
        "audio": "assets/audio/courses/din-u1_s2.mp3"
      },
      {
        "title": "Sağlıklı Beslenme ve İsraftan Kaçınma",
        "badge": "3. Adım: Helal ve Temiz",
        "slide": "assets/images/gunluk_hayat_ve_din.svg",
        "narration": "Yüce Allah bizlere sayısız rızık bahşetmiştir. Dinimiz helal ve temiz gıdalarla beslenmemizi emreder. Yemeğe oturmadan önce ellerimizi yıkar, Besmele ile başlar ve sağ elimizle yeriz. Doyduğumuzda \"Elhamdülillah\" deriz. Kuran-ı Kerim'de \"Yiyiniz, içiniz fakat israf etmeyiniz\" buyrulur. Ekmeği ve suyu boşa harcamaktan kaçınmalıyız.",
        "audio": "assets/audio/courses/din-u1_s3.mp3"
      },
      {
        "title": "Bir Dua Öğreniyorum: Sübhaneke Duası",
        "badge": "4. Adım: Sübhaneke",
        "slide": "assets/images/gunluk_hayat_ve_din.svg",
        "narration": "Sübhaneke duası namazlarda tekbirden sonra okunan ilk duadır. Anlamı şöyledir: \"Allah'ım! Sen eksik sıfatlardan uzaksın. Seni daima överim. Senin adın kutludur. Senin şanın yücedir ve Senden başka ilah yoktur.\" Yalnızca cenaze namazlarında \"ve celle senâük\" cümlesi de eklenir. Bu dua Allah'a saygı ve sevginin en güzel ifadesidir.",
        "audio": "assets/audio/courses/din-u1_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Yemeğe başlarken, ders çalışmaya başlarken veya kapıdan çıkarken söylenen hayırlı ifade hangisidir?",
        "options": [
          "Elhamdülillah",
          "Bismillahirrahmanirrahim (Besmele)",
          "Maşallah",
          "Geçmiş olsun"
        ],
        "answer": 1,
        "explanation": "Her güzel işin başında Allah'ın adını anmak için Besmele çekilir."
      },
      {
        "q": "Müslümanların karşılaştıklarında birbirlerine esenlik, barış ve sağlık dilemek için söyledikleri ifade nedir?",
        "options": [
          "Güle güle",
          "Selamün Aleyküm",
          "İyi geceler",
          "Tebrikler"
        ],
        "answer": 1,
        "explanation": "Selamlaşma İslam kültürünün en temel nezaket ve sevgi bağıdır: \"Selamün Aleyküm\"."
      },
      {
        "q": "Bize verilen nimetler ve sağlık için Allah'a şükretmek amacıyla hangi ifade kullanılır?",
        "options": [
          "Elhamdülillah",
          "İnşallah",
          "Estağfirullah",
          "Sübhanallah"
        ],
        "answer": 0,
        "explanation": "Hamd ve şükür bildirmek için \"Elhamdülillah\" (Allah'a hamdolsun) denir."
      },
      {
        "q": "Gelecekte yapılması planlanan bir işten bahsederken \"Allah dilerse / izin verirse\" anlamında ne söylenir?",
        "options": [
          "Maşallah",
          "İnşallah",
          "Fesübhanallah",
          "Bismillah"
        ],
        "answer": 1,
        "explanation": "\"İnşallah\" ifadesi Allah'ın dilemesine ve iznine sığınmayı ifade eder."
      },
      {
        "q": "Beğenilen, hayran kalınan bir durum veya çocuk görüldüğünde \"Nazar değmesin\" anlamında ne denir?",
        "options": [
          "İnşallah",
          "Maşallah",
          "Elhamdülillah",
          "Hayır olsun"
        ],
        "answer": 1,
        "explanation": "Beğenilen şeylere nazar değmemesi ve Allah'ın lütfunu övmek için \"Maşallah\" denir."
      },
      {
        "q": "\"Temizlik ......................... yarısıdır.\" Hadis-i Şerifindeki boşluğa ne gelmelidir?",
        "options": [
          "Uykunun",
          "İmanın",
          "Paranın",
          "Zamanın"
        ],
        "answer": 1,
        "explanation": "Peygamber Efendimiz \"Temizlik imanın yarısıdır\" buyurmuştur."
      },
      {
        "q": "Namazlarda tekbir aldıktan sonra İLK OKUNAN dua hangisidir?",
        "options": [
          "Fatiha Suresi",
          "Sübhaneke Duası",
          "Amentü Duası",
          "Kunut Duaları"
        ],
        "answer": 1,
        "explanation": "Namazın başlangıcında iftitah tekbirinden hemen sonra Sübhaneke okunur."
      },
      {
        "q": "Yiyecek ve içecekleri gereğinden fazla tüketmek, çöpe dökmek dinimizde hangi kavramla ifade edilir ve yasaklanmıştır?",
        "options": [
          "İsraf",
          "Tasarruf",
          "Cömertlik",
          "Sadaka"
        ],
        "answer": 0,
        "explanation": "Kaynakları ve yiyecekleri boşa harcamak \"İsraf\"tır ve haram kılınmıştır."
      },
      {
        "q": "Sübhaneke duasındaki \"ve teâlâ ceddük\" cümlesi hangi namazda ek olarak okunur?",
        "options": [
          "Sabah namazında",
          "Cenaze namazında",
          "Cuma namazında",
          "Bayram namazında"
        ],
        "answer": 1,
        "explanation": "\"Ve celle senâük / ve teâlâ ceddük\" ifadesi cenaze namazında Sübhaneke'ye eklenir."
      },
      {
        "q": "Hapşıran bir kişi \"Elhamdülillah\" dediğinde onu duyan kişinin ona \"Yerhamükellah\" (Allah sana merhamet etsin) demesi ne anlama gelir?",
        "options": [
          "Kavga etmek",
          "Birbirine dua etmek ve esenlik dilemek",
          "Şaka yapmak",
          "Uyarmak"
        ],
        "answer": 1,
        "explanation": "Hapşırana hayır duada bulunmak İslam kardeşliğinin ve adabının bir gereğidir."
      }
    ],
    "quiz": [
      {
        "q": "Yemeğe başlarken, ders çalışmaya başlarken veya kapıdan çıkarken söylenen hayırlı ifade hangisidir?",
        "options": [
          "Elhamdülillah",
          "Bismillahirrahmanirrahim (Besmele)",
          "Maşallah",
          "Geçmiş olsun"
        ],
        "answer": 1,
        "explanation": "Her güzel işin başında Allah'ın adını anmak için Besmele çekilir."
      },
      {
        "q": "Müslümanların karşılaştıklarında birbirlerine esenlik, barış ve sağlık dilemek için söyledikleri ifade nedir?",
        "options": [
          "Güle güle",
          "Selamün Aleyküm",
          "İyi geceler",
          "Tebrikler"
        ],
        "answer": 1,
        "explanation": "Selamlaşma İslam kültürünün en temel nezaket ve sevgi bağıdır: \"Selamün Aleyküm\"."
      },
      {
        "q": "Bize verilen nimetler ve sağlık için Allah'a şükretmek amacıyla hangi ifade kullanılır?",
        "options": [
          "Elhamdülillah",
          "İnşallah",
          "Estağfirullah",
          "Sübhanallah"
        ],
        "answer": 0,
        "explanation": "Hamd ve şükür bildirmek için \"Elhamdülillah\" (Allah'a hamdolsun) denir."
      },
      {
        "q": "Gelecekte yapılması planlanan bir işten bahsederken \"Allah dilerse / izin verirse\" anlamında ne söylenir?",
        "options": [
          "Maşallah",
          "İnşallah",
          "Fesübhanallah",
          "Bismillah"
        ],
        "answer": 1,
        "explanation": "\"İnşallah\" ifadesi Allah'ın dilemesine ve iznine sığınmayı ifade eder."
      },
      {
        "q": "Beğenilen, hayran kalınan bir durum veya çocuk görüldüğünde \"Nazar değmesin\" anlamında ne denir?",
        "options": [
          "İnşallah",
          "Maşallah",
          "Elhamdülillah",
          "Hayır olsun"
        ],
        "answer": 1,
        "explanation": "Beğenilen şeylere nazar değmemesi ve Allah'ın lütfunu övmek için \"Maşallah\" denir."
      },
      {
        "q": "\"Temizlik ......................... yarısıdır.\" Hadis-i Şerifindeki boşluğa ne gelmelidir?",
        "options": [
          "Uykunun",
          "İmanın",
          "Paranın",
          "Zamanın"
        ],
        "answer": 1,
        "explanation": "Peygamber Efendimiz \"Temizlik imanın yarısıdır\" buyurmuştur."
      },
      {
        "q": "Namazlarda tekbir aldıktan sonra İLK OKUNAN dua hangisidir?",
        "options": [
          "Fatiha Suresi",
          "Sübhaneke Duası",
          "Amentü Duası",
          "Kunut Duaları"
        ],
        "answer": 1,
        "explanation": "Namazın başlangıcında iftitah tekbirinden hemen sonra Sübhaneke okunur."
      },
      {
        "q": "Yiyecek ve içecekleri gereğinden fazla tüketmek, çöpe dökmek dinimizde hangi kavramla ifade edilir ve yasaklanmıştır?",
        "options": [
          "İsraf",
          "Tasarruf",
          "Cömertlik",
          "Sadaka"
        ],
        "answer": 0,
        "explanation": "Kaynakları ve yiyecekleri boşa harcamak \"İsraf\"tır ve haram kılınmıştır."
      },
      {
        "q": "Sübhaneke duasındaki \"ve teâlâ ceddük\" cümlesi hangi namazda ek olarak okunur?",
        "options": [
          "Sabah namazında",
          "Cenaze namazında",
          "Cuma namazında",
          "Bayram namazında"
        ],
        "answer": 1,
        "explanation": "\"Ve celle senâük / ve teâlâ ceddük\" ifadesi cenaze namazında Sübhaneke'ye eklenir."
      },
      {
        "q": "Hapşıran bir kişi \"Elhamdülillah\" dediğinde onu duyan kişinin ona \"Yerhamükellah\" (Allah sana merhamet etsin) demesi ne anlama gelir?",
        "options": [
          "Kavga etmek",
          "Birbirine dua etmek ve esenlik dilemek",
          "Şaka yapmak",
          "Uyarmak"
        ],
        "answer": 1,
        "explanation": "Hapşırana hayır duada bulunmak İslam kardeşliğinin ve adabının bir gereğidir."
      }
    ]
  },
  "din-u2": {
    "id": "din-u2",
    "subject": "Din Kültürü",
    "unitNo": "2. Ünite",
    "title": "Allah Sevgisi",
    "icon": "🤲",
    "steps": [
      {
        "title": "Allah'ı Tanıyorum: Yüce Yaratıcı",
        "badge": "1. Adım: Tevhid İnancı",
        "slide": "assets/images/allah_sevgisi.svg",
        "narration": "Merhaba sevgili kâşif! Gökyüzündeki yıldızlardan denizlerdeki balıklara kadar her şeyi mükemmel bir uyum ve düzenle yaratan Yüce Allah'tır. O birdir, tektir, doğmamış ve doğurmamıştır; eşi ve benzeri yoktur. Bu inanca Tevhid inancı denir. O her şeyi görür, her şeyi işitir ve aklımızdan geçenleri bile eksiksiz bilir.",
        "audio": "assets/audio/courses/din-u2_s1.mp3"
      },
      {
        "title": "Allah Bizi Seviyor ve Nimetler Bahşediyor",
        "badge": "2. Adım: Rahmet & Sevgi",
        "slide": "assets/images/allah_sevgisi.svg",
        "narration": "Allah kullarını çok sever ve sonsuz merhamet sahibidir. Bize gören gözler, düşünen bir akıl, sıcacık bir aile, rengârenk meyveler ve masmavi bir gökyüzü vermiştir. O'nun Rahman ismi dünyadaki tüm canlılara merhamet ettiğini gösterir. Biz de O'nu çok sever, emirlerine uyar ve verdiği tüm nimetler için kalpten teşekkür ederiz.",
        "audio": "assets/audio/courses/din-u2_s2.mp3"
      },
      {
        "title": "Kelime-i Tevhid ve Kelime-i Şehadet",
        "badge": "3. Adım: İman Sözleri",
        "slide": "assets/images/allah_sevgisi.svg",
        "narration": "İslam'ın anahtarı olan iki kutlu cümle vardır. İlki Kelime-i Tevhid: \"Lâ ilâhe illallah, Muhammedün Resûlullah\"tır; yani Allah'tan başka ilah yoktur, Hazreti Muhammed O'nun elçisidir. İkincisi Kelime-i Şehadet: \"Eşhedü en lâ ilâhe illallah ve eşhedü enne Muhammeden abdühû ve resûlüh\"tür; yani Şahitlik ederim ki Allah'tan başka ilah yoktur ve Hazreti Muhammed O'nun kulu ve elçisidir.",
        "audio": "assets/audio/courses/din-u2_s3.mp3"
      },
      {
        "title": "Dua Etmek ve Amentü Duası",
        "badge": "4. Adım: Dua & Amentü",
        "slide": "assets/images/allah_sevgisi.svg",
        "narration": "Dua, kulun içtenlikle ve sevgiyle Allah ile konuşmasıdır. Dua etmek için özel bir zamana veya yere ihtiyaç yoktur; sevinçte de sıkıntıda da her an dua edebiliriz. Amentü duası ise imanın altı temel şartını özetler: Allah'a, meleklerine, kitaplarına, peygamberlerine, ahiret gününe ve kaza-kadere inanmaktır.",
        "audio": "assets/audio/courses/din-u2_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Allah'ın bir ve tek olduğuna, eşi ve benzeri bulunmadığına inanmaya ne ad verilir?",
        "options": [
          "Tevhid İnancı",
          "Felsefe",
          "Gelenek",
          "Gözlem"
        ],
        "answer": 0,
        "explanation": "Allah'ın tekliğine inanmaya \"Tevhid\" inancı denir."
      },
      {
        "q": "\"Lâ ilâhe illallah Muhammedün Resûlullah\" ifadesine ne ad verilir?",
        "options": [
          "Kelime-i Şehadet",
          "Kelime-i Tevhid",
          "Sübhaneke",
          "Fatiha"
        ],
        "answer": 1,
        "explanation": "Bu ifade \"Kelime-i Tevhid\"dir; anlamı Allah'tan başka ilah yoktur, Hazreti Muhammed O'nun elçisidir."
      },
      {
        "q": "\"Eşhedü en lâ ilâhe illallah ve eşhedü enne Muhammeden abdühû ve resûlüh\" sözüne ne denir?",
        "options": [
          "Kelime-i Şehadet",
          "Salavat",
          "Ezan",
          "Kamet"
        ],
        "answer": 0,
        "explanation": "Şahitlik bildiren bu söze \"Kelime-i Şehadet\" denir."
      },
      {
        "q": "Allah'ın dünyadaki bütün canlılara acıması, rızık vermesi ve şefkat göstermesini ifade eden ismi hangisidir?",
        "options": [
          "Rahman",
          "Kuddüs",
          "Melik",
          "Aziz"
        ],
        "answer": 0,
        "explanation": "Rahman ismi Allah'ın dünyadaki inanan-inanmayan tüm canlıları rızıklandırmasını ifade eder."
      },
      {
        "q": "İnsanın samimi bir kalple Allah'a sığınması, O'ndan yardım ve bağışlanma dilemesine ne denir?",
        "options": [
          "Dua",
          "İtiraz",
          "Tartışma",
          "Eleştiri"
        ],
        "answer": 0,
        "explanation": "Kulun Yüce Yaratıcı ile bağ kurmasına ve isteklerini sunmasına \"Dua\" denir."
      },
      {
        "q": "Aşağıdakilerden hangisi İMANIN ŞARTLARINDAN biri DEĞİLDİR?",
        "options": [
          "Allah'a inanmak",
          "Meleklere inanmak",
          "Peygamberlere inanmak",
          "Çok zengin olmaya inanmak"
        ],
        "answer": 3,
        "explanation": "İmanın 6 şartı; Allah'a, meleklere, kitaplara, peygamberlere, ahirete ve kadere imandır."
      },
      {
        "q": "İmanın 6 şartını sırasıyla bildiren ve \"İnandım\" anlamına gelen dua hangisidir?",
        "options": [
          "Amentü Duası",
          "Sübhaneke Duası",
          "Kunut Duası",
          "Ettehiyyatü"
        ],
        "answer": 0,
        "explanation": "Amentü duası (\"Âmentü billâhi...\") imanın şartlarını tek tek bildiren duadır."
      },
      {
        "q": "Allah hakkında aşağıdaki ifadelerden hangisi DOĞRUDUR?",
        "options": [
          "Her şeyi görür, bilir ve işitir.",
          "Yalnızca gündüzleri insanları duyar.",
          "Bazı yerlerde bulunamaz.",
          "İnsanlara benzer."
        ],
        "answer": 0,
        "explanation": "Yüce Allah mekândan münezzehtir; her an her şeyi eksiksiz bilir, görür ve duyar."
      },
      {
        "q": "Dua ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
        "options": [
          "Yalnızca camide dua edilir, evde dua edilmez.",
          "Her zaman ve her yerde içtenlikle dua edilebilir.",
          "Yalnızca Allah'tan istenir.",
          "Hem kendimize hem de sevdiklerimize dua edebiliriz."
        ],
        "answer": 0,
        "explanation": "Dua her an, her yerde, sokakta, evde veya okulda kalpten yapılabilir; yer kısıtı yoktur."
      },
      {
        "q": "Evrendeki güneş sisteminin, mevsimlerin ve gezegenlerin kusursuz bir düzen içinde işlemesi bize neyi kanıtlar?",
        "options": [
          "Her şeyin tesadüfen olduğunu",
          "Yüce ve ilim sahibi tek bir Yaratıcının (Allah'ın) varlığını",
          "Düzenin önemsiz olduğunu",
          "Güneşin kendi kendine karar aldığını"
        ],
        "answer": 1,
        "explanation": "Kâinattaki mükemmel ahenk ve ölçü her şeyi yaratan Yüce Allah'ın varlığının delilidir."
      }
    ],
    "quiz": [
      {
        "q": "Allah'ın bir ve tek olduğuna, eşi ve benzeri bulunmadığına inanmaya ne ad verilir?",
        "options": [
          "Tevhid İnancı",
          "Felsefe",
          "Gelenek",
          "Gözlem"
        ],
        "answer": 0,
        "explanation": "Allah'ın tekliğine inanmaya \"Tevhid\" inancı denir."
      },
      {
        "q": "\"Lâ ilâhe illallah Muhammedün Resûlullah\" ifadesine ne ad verilir?",
        "options": [
          "Kelime-i Şehadet",
          "Kelime-i Tevhid",
          "Sübhaneke",
          "Fatiha"
        ],
        "answer": 1,
        "explanation": "Bu ifade \"Kelime-i Tevhid\"dir; anlamı Allah'tan başka ilah yoktur, Hazreti Muhammed O'nun elçisidir."
      },
      {
        "q": "\"Eşhedü en lâ ilâhe illallah ve eşhedü enne Muhammeden abdühû ve resûlüh\" sözüne ne denir?",
        "options": [
          "Kelime-i Şehadet",
          "Salavat",
          "Ezan",
          "Kamet"
        ],
        "answer": 0,
        "explanation": "Şahitlik bildiren bu söze \"Kelime-i Şehadet\" denir."
      },
      {
        "q": "Allah'ın dünyadaki bütün canlılara acıması, rızık vermesi ve şefkat göstermesini ifade eden ismi hangisidir?",
        "options": [
          "Rahman",
          "Kuddüs",
          "Melik",
          "Aziz"
        ],
        "answer": 0,
        "explanation": "Rahman ismi Allah'ın dünyadaki inanan-inanmayan tüm canlıları rızıklandırmasını ifade eder."
      },
      {
        "q": "İnsanın samimi bir kalple Allah'a sığınması, O'ndan yardım ve bağışlanma dilemesine ne denir?",
        "options": [
          "Dua",
          "İtiraz",
          "Tartışma",
          "Eleştiri"
        ],
        "answer": 0,
        "explanation": "Kulun Yüce Yaratıcı ile bağ kurmasına ve isteklerini sunmasına \"Dua\" denir."
      },
      {
        "q": "Aşağıdakilerden hangisi İMANIN ŞARTLARINDAN biri DEĞİLDİR?",
        "options": [
          "Allah'a inanmak",
          "Meleklere inanmak",
          "Peygamberlere inanmak",
          "Çok zengin olmaya inanmak"
        ],
        "answer": 3,
        "explanation": "İmanın 6 şartı; Allah'a, meleklere, kitaplara, peygamberlere, ahirete ve kadere imandır."
      },
      {
        "q": "İmanın 6 şartını sırasıyla bildiren ve \"İnandım\" anlamına gelen dua hangisidir?",
        "options": [
          "Amentü Duası",
          "Sübhaneke Duası",
          "Kunut Duası",
          "Ettehiyyatü"
        ],
        "answer": 0,
        "explanation": "Amentü duası (\"Âmentü billâhi...\") imanın şartlarını tek tek bildiren duadır."
      },
      {
        "q": "Allah hakkında aşağıdaki ifadelerden hangisi DOĞRUDUR?",
        "options": [
          "Her şeyi görür, bilir ve işitir.",
          "Yalnızca gündüzleri insanları duyar.",
          "Bazı yerlerde bulunamaz.",
          "İnsanlara benzer."
        ],
        "answer": 0,
        "explanation": "Yüce Allah mekândan münezzehtir; her an her şeyi eksiksiz bilir, görür ve duyar."
      },
      {
        "q": "Dua ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
        "options": [
          "Yalnızca camide dua edilir, evde dua edilmez.",
          "Her zaman ve her yerde içtenlikle dua edilebilir.",
          "Yalnızca Allah'tan istenir.",
          "Hem kendimize hem de sevdiklerimize dua edebiliriz."
        ],
        "answer": 0,
        "explanation": "Dua her an, her yerde, sokakta, evde veya okulda kalpten yapılabilir; yer kısıtı yoktur."
      },
      {
        "q": "Evrendeki güneş sisteminin, mevsimlerin ve gezegenlerin kusursuz bir düzen içinde işlemesi bize neyi kanıtlar?",
        "options": [
          "Her şeyin tesadüfen olduğunu",
          "Yüce ve ilim sahibi tek bir Yaratıcının (Allah'ın) varlığını",
          "Düzenin önemsiz olduğunu",
          "Güneşin kendi kendine karar aldığını"
        ],
        "answer": 1,
        "explanation": "Kâinattaki mükemmel ahenk ve ölçü her şeyi yaratan Yüce Allah'ın varlığının delilidir."
      }
    ]
  },
  "din-u3": {
    "id": "din-u3",
    "subject": "Din Kültürü",
    "unitNo": "3. Ünite",
    "title": "Peygamberlerin Sevgisi",
    "icon": "🕊️",
    "steps": [
      {
            "title": "Hazreti Muhammed'in Çocuk Sevgisi",
            "badge": "1. Adım: Çocuk Sevgisi",
            "slide": "assets/images/din_u3_cocuk_sevgisi.svg",
            "slideTitle": "Hazreti Muhammed'in Çocuklara Sevgisi",
            "narration": "Merhaba sevgili kaşif! Peygamberimiz Hazreti Muhammed (sallallahu aleyhi ve sellem) çocukları çok ama çok severdi. Sokakta yürürken karşılaştığı çocuklara ilk selamı o verirdi; bu onların ne kadar değerli olduğunu hissettirirdi. Torunları Hazreti Hasan ve Hazreti Hüseyin namaz kılarken sırtına çıktığında, onlar inene kadar secdeden kalkmazdı. Kız ve erkek çocuklar arasında hiçbir zaman ayrım yapmaz, hepsini eşit sevgi ve şefkatle kucaklardı.",
            "audio": "assets/audio/courses/din-u3_s1.mp3",
            "emo": "🕊️",
            "then": [
                  {
                        "text": "Torunları Hazreti Hasan ve Hazreti Hüseyin namaz sırasında dedelerinin sırtına tırmanırdı. Peygamberimiz onlar inmeden secdeden kalkmazdı; çünkü torunlarının mutluluğu ve ibadeti sevmeleri her şeyden önemliydi.",
                        "lang": "tr-TR",
                        "cap": "🤗 Torunlarını Çok Severdi",
                        "emo": "🤗"
                  },
                  {
                        "text": "Hazreti Muhammed kız ve erkek çocuklar arasında asla ayrım yapmazdı. 'Kız çocukları Allah'ın birer rahmetidir' buyurarak döneminin yanlış anlayışını tamamen yıktı.",
                        "lang": "tr-TR",
                        "cap": "⚖️ Kız ve Erkek Çocuk Eşittir",
                        "emo": "⚖️"
                  },
                  {
                        "text": "Peygamberimiz yolda gördüğü çocuklara büyüklük taslamadan ilk selamı kendisi verir, başlarını şefkatle okşar ve hatırlarını sorardı.",
                        "lang": "tr-TR",
                        "cap": "👋 İlk Selamı O Verirdi",
                        "emo": "👋"
                  }
            ]
      },
      {
            "title": "Toplum Sevgisi ve İnsanlara Değer Verme",
            "badge": "2. Adım: Toplum Sevgisi",
            "slide": "assets/images/din_u3_toplum_sevgisi.svg",
            "slideTitle": "Toplum Sevgisi: Merhamet ve Eşitlik",
            "narration": "Peygamberimiz Hazreti Muhammed (sallallahu aleyhi ve sellem) tüm insanlara karşı derin bir sevgi ve merhamet beslerdi. Hastaları bizzat ziyaret eder, yoksulların ve yetimlerin yanında olur, onlara elinden gelen yardımı yapardı. Kendisine kötülük edenlere bile beddua etmez; 'Allah'ım onları bağışla, çünkü bilmiyorlar' diyerek af dilerdi. Onun meclisinde zengin ile fakir, güçlü ile zayıf aynı değeri görürdü; hiç kimse diğerinden üstün tutulmazdı.",
            "audio": "assets/audio/courses/din-u3_s2.mp3",
            "emo": "❤️",
            "then": [
                  {
                        "text": "Peygamberimiz hastaları ziyaret etmeyi büyük bir ibadet olarak görürdü. 'Hastayı ziyaret eden kişi, cennet bahçelerinden birinde yürümüş gibidir' buyururdu.",
                        "lang": "tr-TR",
                        "cap": "🏥 Hastayı Ziyaret Edin",
                        "emo": "🏥"
                  },
                  {
                        "text": "Meclisinde hiç kimse ayrıcalıklı değildi. Zengin ile fakir, güçlü ile zayıf yan yana oturur, hepsi eşit muamele görürdü. Bu, gerçek adaletin ve kardeşliğin ta kendisiydi.",
                        "lang": "tr-TR",
                        "cap": "⚖️ Mecliste Herkes Eşit",
                        "emo": "⚖️"
                  }
            ]
      },
      {
            "title": "Doğa, Hayvan ve Çalışma Sevgisi",
            "badge": "3. Adım: Doğa & Alın Teri",
            "slide": "assets/images/din_u3_doga_sevgisi.svg",
            "slideTitle": "Doğa, Hayvan ve Alın Teri Sevgisi",
            "narration": "Peygamberimiz hayvanlara eziyet edenleri sertçe uyarmış, kuş yuvalarının bozulmasını kesinlikle yasaklamıştır. 'Kıyametin kopacağını bilseniz bile elinizdeki fidanı dikiniz' buyurarak doğayı korumayı emretmiştir. Kendisi de gençliğinde çobanlık ve ticaret yaparak alın teriyle geçinmiş; kendi söküğünü bizzat dikmiştir. 'Hiç kimse kendi elinin emeğinden daha hayırlı bir rızık yememiştir' diyerek helal kazancın kutsallığını öğretmiştir.",
            "audio": "assets/audio/courses/din-u3_s3.mp3",
            "emo": "🌿",
            "then": [
                  {
                        "text": "Peygamberimiz 'Kıyametin kopacağını bilseniz dahi elinizdeki fidanı dikiniz' buyurmuştur. Bu hadis bize doğayı ve yeşili her koşulda korumamız gerektiğini öğretir.",
                        "lang": "tr-TR",
                        "cap": "🌱 Fidan Dik, Doğayı Koru",
                        "emo": "🌱"
                  },
                  {
                        "text": "Hazreti Muhammed kendi söküğünü bizzat diker, kendi ayakkabısını tamir ederdi. 'Alın teriyle kazanılan rızık en hayırlı rızıktır' diyerek çalışmayı ve üretmeyi övdü.",
                        "lang": "tr-TR",
                        "cap": "💪 Alın Teriyle Çalışmak",
                        "emo": "💪"
                  }
            ]
      },
      {
            "title": "Salli ve Barik Duaları",
            "badge": "4. Adım: Salavat Duaları",
            "slide": "assets/images/din_u3_salli_barik.svg",
            "slideTitle": "Namazın Son Oturuşu: Salli ve Barik Duaları",
            "narration": "Namazların son oturuşunda Ettehiyyatü'den sonra okunan Allahümme Salli ve Allahümme Barik duaları, Peygamber Efendimize ve onun kutlu ailesine yönelik birer sevgi, saygı ve rahmet duasıdır. Bu dualarda Hazreti İbrahim'e ve ailesine yapılan dua gibi Hazreti Muhammed'e de rahmet, bereket ve şan dilenmektedir. Peygamberimizin adı her anıldığında 'Sallallahu aleyhi ve sellem' demek de ona duyulan sevginin ve vefanın bir göstergesidir.",
            "audio": "assets/audio/courses/din-u3_s4.mp3",
            "emo": "🤲",
            "then": [
                  {
                        "text": "Allahümme Salli duasında Allah'tan Hazreti Muhammed'e ve ailesine, Hazreti İbrahim ve ailesine verilen rahmet gibi rahmet vermesi dilenir. 'Salli' kelimesi rahmet ve yücelik anlamına gelir.",
                        "lang": "tr-TR",
                        "cap": "🌙 Allahümme Salli — Rahmet Duası",
                        "emo": "🌙"
                  },
                  {
                        "text": "Allahümme Barik duasında ise bereket ve bolluk dilenir. 'Barik' kelimesi bereket anlamındadır. Her ikisi de namazın son oturuşunda, Ettehiyyatü'den hemen sonra okunur.",
                        "lang": "tr-TR",
                        "cap": "✨ Allahümme Barik — Bereket Duası",
                        "emo": "✨"
                  }
            ]
      }
],
    "questions": [
      {
        "q": "Peygamber Efendimiz Hazreti Muhammed'in (sallallahu aleyhi ve sellem) torunlarının isimleri nelerdir?",
        "options": [
          "Hazreti Ali ve Hazreti Osman",
          "Hazreti Hasan ve Hazreti Hüseyin",
          "Hazreti Ömer ve Hazreti Ebubekir",
          "Hazreti Hamza ve Hazreti Bilal"
        ],
        "answer": 1,
        "explanation": "Peygamberimizin çok sevdiği torunları Hazreti Fatıma'nın evlatları Hazreti Hasan ve Hazreti Hüseyin'dir."
      },
      {
        "q": "Peygamberimizin çocuklara karşı tutumu nasıldı?",
        "options": [
          "Çocuklara çok kızar ve azarlardı.",
          "Çocuklara selam verir, başlarını okşar, sevgi ve merhametle yaklaşırdı.",
          "Çocuklarla hiç konuşmazdı.",
          "Yalnızca erkek çocukları severdi."
        ],
        "answer": 1,
        "explanation": "Hazreti Muhammed çocuklara büyük bir sevgi ve şefkat besler, onları daima dinler ve sevindirirdi."
      },
      {
        "q": "\"Kıyametin kopacağını bilseniz dahi elinizdeki ........................ dikiniz.\" Hadis-i Şerifindeki boşluğa ne gelmelidir?",
        "options": [
          "Bayrağı",
          "Fidanı",
          "Direği",
          "Çadırı"
        ],
        "answer": 1,
        "explanation": "Peygamberimiz doğayı ve yeşili korumak için son anda bile fidan dikmeyi öğütlemiştir."
      },
      {
        "q": "Peygamberimizin adı anıldığında veya yazıldığında söylenen \"Sallallahu aleyhi ve sellem\" (sallallahu aleyhi ve sellem) ifadesine ne ad verilir?",
        "options": [
          "Tekbir",
          "Salavat",
          "Ezan",
          "Kamet"
        ],
        "answer": 1,
        "explanation": "Peygamberimize saygı ve dua bildiren bu ifadeye \"Salavat\" denir."
      },
      {
        "q": "Namazların oturuş kısımlarında okunan \"Allahümme Salli\" ve \"Allahümme Barik\" dualarında hangi peygambere atıf yapılır?",
        "options": [
          "Hazreti Musa",
          "Hazreti İbrahim",
          "Hazreti İsa",
          "Hazreti Nuh"
        ],
        "answer": 1,
        "explanation": "Salli ve Barik dualarında \"kemâ salleyte alâ İbrâhîme...\" denilerek Hazreti İbrahim anılır."
      },
      {
        "q": "Peygamber Efendimiz gençlik yıllarında hangi mesleklerle uğraşarak el emeğiyle geçinmiştir?",
        "options": [
          "Çobanlık ve Ticaret",
          "Balıkçılık",
          "Mimarlık",
          "Maden işçiliği"
        ],
        "answer": 0,
        "explanation": "Peygamberimiz gençliğinde dürüst bir tüccar ve çoban olarak alın teriyle çalışmıştır."
      },
      {
        "q": "Peygamberimizin hayvanlara karşı tutumuyla ilgili hangisi DOĞRUDUR?",
        "options": [
          "Hayvanlara ağır yük vurulmasını ve eziyet edilmesini kesinlikle yasaklamıştır.",
          "Hayvanların aç bırakılmasına aldırmazdı.",
          "Kuş yuvalarının bozulmasını desteklerdi.",
          "Hayvan sevgisini gereksiz görürdü."
        ],
        "answer": 0,
        "explanation": "Peygamberimiz tüm canlılara merhamet etmiş, hayvanlara kötü davranmayı günah saymıştır."
      },
      {
        "q": "\"Hiç kimse kendi ........................ emeğinden daha hayırlı bir rızık yememiştir.\" Hadisindeki boşluğa ne gelmelidir?",
        "options": [
          "Ailesinin",
          "Elinin",
          "Arkadaşının",
          "Komşusunun"
        ],
        "answer": 1,
        "explanation": "Peygamberimiz alın terini ve kendi elinin emeğiyle çalışmayı övmüştür."
      },
      {
        "q": "Peygamberimiz yolda gördüğü çocuklara nasıl davranırdı?",
        "options": [
          "Görmezden gelip geçerdi.",
          "Onlara ilk önce kendisi selam verir, hal hatır sorardı.",
          "Onlara sertçe bakardı.",
          "Yolunu değiştirirdi."
        ],
        "answer": 1,
        "explanation": "Peygamberimiz büyüklük taslamaz, çocuklara ilk selamı kendisi vererek değer gösterirdi."
      },
      {
        "q": "Salli ve Barik duaları namazın hangi bölümünde okunur?",
        "options": [
          "Ayaktayken (Kıyamda)",
          "Rükûda",
          "Secdede",
          "Son oturuşta (Ka'de-i ahirede)"
        ],
        "answer": 3,
        "explanation": "Bu dualar namazın son oturuşunda Ettehiyyatü'den sonra selam vermeden önce okunur."
      }
    ],
    "quiz": [
      {
        "q": "Peygamber Efendimiz Hazreti Muhammed'in (sallallahu aleyhi ve sellem) torunlarının isimleri nelerdir?",
        "options": [
          "Hazreti Ali ve Hazreti Osman",
          "Hazreti Hasan ve Hazreti Hüseyin",
          "Hazreti Ömer ve Hazreti Ebubekir",
          "Hazreti Hamza ve Hazreti Bilal"
        ],
        "answer": 1,
        "explanation": "Peygamberimizin çok sevdiği torunları Hazreti Fatıma'nın evlatları Hazreti Hasan ve Hazreti Hüseyin'dir."
      },
      {
        "q": "Peygamberimizin çocuklara karşı tutumu nasıldı?",
        "options": [
          "Çocuklara çok kızar ve azarlardı.",
          "Çocuklara selam verir, başlarını okşar, sevgi ve merhametle yaklaşırdı.",
          "Çocuklarla hiç konuşmazdı.",
          "Yalnızca erkek çocukları severdi."
        ],
        "answer": 1,
        "explanation": "Hazreti Muhammed çocuklara büyük bir sevgi ve şefkat besler, onları daima dinler ve sevindirirdi."
      },
      {
        "q": "\"Kıyametin kopacağını bilseniz dahi elinizdeki ........................ dikiniz.\" Hadis-i Şerifindeki boşluğa ne gelmelidir?",
        "options": [
          "Bayrağı",
          "Fidanı",
          "Direği",
          "Çadırı"
        ],
        "answer": 1,
        "explanation": "Peygamberimiz doğayı ve yeşili korumak için son anda bile fidan dikmeyi öğütlemiştir."
      },
      {
        "q": "Peygamberimizin adı anıldığında veya yazıldığında söylenen \"Sallallahu aleyhi ve sellem\" (sallallahu aleyhi ve sellem) ifadesine ne ad verilir?",
        "options": [
          "Tekbir",
          "Salavat",
          "Ezan",
          "Kamet"
        ],
        "answer": 1,
        "explanation": "Peygamberimize saygı ve dua bildiren bu ifadeye \"Salavat\" denir."
      },
      {
        "q": "Namazların oturuş kısımlarında okunan \"Allahümme Salli\" ve \"Allahümme Barik\" dualarında hangi peygambere atıf yapılır?",
        "options": [
          "Hazreti Musa",
          "Hazreti İbrahim",
          "Hazreti İsa",
          "Hazreti Nuh"
        ],
        "answer": 1,
        "explanation": "Salli ve Barik dualarında \"kemâ salleyte alâ İbrâhîme...\" denilerek Hazreti İbrahim anılır."
      },
      {
        "q": "Peygamber Efendimiz gençlik yıllarında hangi mesleklerle uğraşarak el emeğiyle geçinmiştir?",
        "options": [
          "Çobanlık ve Ticaret",
          "Balıkçılık",
          "Mimarlık",
          "Maden işçiliği"
        ],
        "answer": 0,
        "explanation": "Peygamberimiz gençliğinde dürüst bir tüccar ve çoban olarak alın teriyle çalışmıştır."
      },
      {
        "q": "Peygamberimizin hayvanlara karşı tutumuyla ilgili hangisi DOĞRUDUR?",
        "options": [
          "Hayvanlara ağır yük vurulmasını ve eziyet edilmesini kesinlikle yasaklamıştır.",
          "Hayvanların aç bırakılmasına aldırmazdı.",
          "Kuş yuvalarının bozulmasını desteklerdi.",
          "Hayvan sevgisini gereksiz görürdü."
        ],
        "answer": 0,
        "explanation": "Peygamberimiz tüm canlılara merhamet etmiş, hayvanlara kötü davranmayı günah saymıştır."
      },
      {
        "q": "\"Hiç kimse kendi ........................ emeğinden daha hayırlı bir rızık yememiştir.\" Hadisindeki boşluğa ne gelmelidir?",
        "options": [
          "Ailesinin",
          "Elinin",
          "Arkadaşının",
          "Komşusunun"
        ],
        "answer": 1,
        "explanation": "Peygamberimiz alın terini ve kendi elinin emeğiyle çalışmayı övmüştür."
      },
      {
        "q": "Peygamberimiz yolda gördüğü çocuklara nasıl davranırdı?",
        "options": [
          "Görmezden gelip geçerdi.",
          "Onlara ilk önce kendisi selam verir, hal hatır sorardı.",
          "Onlara sertçe bakardı.",
          "Yolunu değiştirirdi."
        ],
        "answer": 1,
        "explanation": "Peygamberimiz büyüklük taslamaz, çocuklara ilk selamı kendisi vererek değer gösterirdi."
      },
      {
        "q": "Salli ve Barik duaları namazın hangi bölümünde okunur?",
        "options": [
          "Ayaktayken (Kıyamda)",
          "Rükûda",
          "Secdede",
          "Son oturuşta (Ka'de-i ahirede)"
        ],
        "answer": 3,
        "explanation": "Bu dualar namazın son oturuşunda Ettehiyyatü'den sonra selam vermeden önce okunur."
      }]
  },
  "din-u4": {
    "id": "din-u4",
    "subject": "Din Kültürü",
    "unitNo": "4. Ünite",
    "title": "Ahlaki Değerlerimiz",
    "icon": "⭐",
    "steps": [
      {
        "title": "Adalet ve Doğruluk: Mülkün Temeli",
        "badge": "1. Adım: Adalet",
        "slide": "assets/images/ahlaki_degerlerimiz.svg",
        "narration": "Merhaba güzel ahlak yolcusu! İslam ahlakının temeli Adalettir. Adalet, herkese hakkını vermek ve kimseye haksızlık yapmamaktır. Zengin, fakir, güçlü ya da güçsüz kim olursa olsun kurallar karşısında eşittir. Peygamberimiz daha peygamber olmadan önce bile doğruluğu ve dürüstlüğü sebebiyle Mekke halkı tarafından \"Muhammedü'l-Emin\" yani Güvenilir Muhammed olarak adlandırılmıştı.",
        "audio": "assets/audio/courses/din-u4_s1.mp3"
      },
      {
        "title": "Sabır: Zorlukları Aşma Gücü",
        "badge": "2. Adım: Sabır",
        "slide": "assets/images/ahlaki_degerlerimiz.svg",
        "narration": "Sabır, başımıza gelen sıkıntılar, hastalıklar veya zorluklar karşısında öfkelenmeden, pes etmeden metanetle mücadele etmektir. Bir hedefe ulaşmak, derslerde başarılı olmak düzenli ve sabırlı bir çalışmayla mümkündür. Kuran-ı Kerim'de \"Şüphesiz Allah sabredenlerle beraberdir\" buyrulur. Sabır başarı kapısının altın anahtarıdır.",
        "audio": "assets/audio/courses/din-u4_s2.mp3"
      },
      {
        "title": "Yardımseverlik, Paylaşma ve Sadaka",
        "badge": "3. Adım: Paylaşma",
        "slide": "assets/images/ahlaki_degerlerimiz.svg",
        "narration": "İslam dini paylaşma ve dayanışma dinidir. Muhtaçlara yardım etmek, yoksullara destek olmak kalbimizi güzelleştirir. Sadaka vermek için sadece zengin olmak gerekmez! Peygamberimiz \"Bir kimseye güler yüzle tebessüm etmek bile bir sadakadır\" buyurmuştur. Yoldaki bir taşı kaldırmak, bir kediye su vermek bile büyük bir sevaptır.",
        "audio": "assets/audio/courses/din-u4_s3.mp3"
      },
      {
        "title": "Bir Sure Öğreniyorum: Fatiha Suresi",
        "badge": "4. Adım: Fatiha Suresi",
        "slide": "assets/images/ahlaki_degerlerimiz.svg",
        "narration": "Fatiha Suresi Kuran-ı Kerim'in ilk suresidir ve \"Açılış\" anlamına gelir. 7 ayetten oluşur ve namazlarımızın her rekâtında mutlaka okunur! Anlamında: Âlemlerin Rabbi olan Allah'a hamdeder, O'nun Rahman ve Rahim olduğunu bildirir ve şöyle dua ederiz: \"Yalnız Sana kulluk eder, yalnız Senden yardım dileriz. Bizi dosdoğru yola ilet!\"",
        "audio": "assets/audio/courses/din-u4_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Peygamber Efendimize gençliğinde dürüstlüğü ve doğruluğu sebebiyle Mekke halkı tarafından verilen lakap nedir?",
        "options": [
          "Muhammedü'l-Emin (Güvenilir Muhammed)",
          "Ebu Bekir",
          "Fatih",
          "Seyfullah"
        ],
        "answer": 0,
        "explanation": "Peygamberimiz hiçbir zaman yalan söylemediği ve emanete hıyanet etmediği için \"el-Emin\" lakabını almıştır."
      },
      {
        "q": "Kuran-ı Kerim'in İLK SURESİ hangisidir ve kaç ayetten oluşur?",
        "options": [
          "İhlas Suresi (4 ayet)",
          "Fatiha Suresi (7 ayet)",
          "Bakara Suresi (286 ayet)",
          "Nas Suresi (6 ayet)"
        ],
        "answer": 1,
        "explanation": "Fatiha Suresi Kuran'ın ilk suresidir ve 7 ayetten meydana gelir."
      },
      {
        "q": "Hak sahibine hakkını vermek, insanlar arasında ayrım yapmamak hangi ahlaki erdemdir?",
        "options": [
          "Cimrilik",
          "Adalet",
          "Tembellik",
          "Bencillik"
        ],
        "answer": 1,
        "explanation": "Eşitlik ve doğruluk ilkesine göre hakkı sahibine teslim etmeye Adalet denir."
      },
      {
        "q": "Zorluklar, hastalıklar ve sıkıntılar karşısında pes etmeyip dayanma gücü göstermeye ne ad verilir?",
        "options": [
          "Öfke",
          "Sabır",
          "Korku",
          "Acelecilik"
        ],
        "answer": 1,
        "explanation": "Metanetle dayanmaya ve sükûneti korumaya \"Sabır\" denir."
      },
      {
        "q": "Peygamberimiz \"İnsanlara ........................ göstermek dahi bir sadakadır\" buyurmuştur. Boşluğa ne gelmelidir?",
        "options": [
          "Tebessüm (Güler yüz)",
          "Zenginlik",
          "Kibir",
          "Öfke"
        ],
        "answer": 0,
        "explanation": "Peygamberimiz güler yüzlü olmanın ve insanlara tebessüm etmenin sadaka sevabı kazandırdığını bildirmiştir."
      },
      {
        "q": "Fatiha Suresi'nde geçen \"İyyâke na'büdü ve iyyâke nestaîn\" ayetinin anlamı nedir?",
        "options": [
          "Bize çok para ver.",
          "Yalnız Sana kulluk eder ve yalnız Senden yardım dileriz.",
          "Bizi affetme.",
          "Güneş doğudan doğar."
        ],
        "answer": 1,
        "explanation": "Bu ayet sadece Allah'a ibadet edileceğini ve yalnızca O'ndan yardım isteneceğini ifade eder."
      },
      {
        "q": "Aşağıdakilerden hangisi güzel ahlaka UYGUN bir davranış DEĞİLDİR?",
        "options": [
          "Verilen sözde durmak",
          "Yalan söylemek ve hile yapmak",
          "Yere düşen arkadaşına yardım etmek",
          "Emaneti korumak"
        ],
        "answer": 1,
        "explanation": "Yalan söylemek ve hile yapmak İslam dininde en büyük ahlaki kusurlardandır."
      },
      {
        "q": "Fatiha kelimesinin kelime anlamı aşağıdakilerden hangisidir?",
        "options": [
          "Kapanış",
          "Açılış / Başlangıç",
          "Sonuç",
          "Özet"
        ],
        "answer": 1,
        "explanation": "Fatiha \"açan, başlatan, açılış yapan\" anlamına gelir."
      },
      {
        "q": "Yoldaki insanlara rahatsızlık veren bir taşı veya çöpü kenara kaldırmak dinimizde nasıl karşılanır?",
        "options": [
          "Zaman kaybı",
          "Sadaka sevabı kazandıran güzel bir davranış",
          "Gereksiz bir hareket",
          "Kural dışı"
        ],
        "answer": 1,
        "explanation": "Çevreye ve insanlara fayda sağlamak sadaka olarak değerlendirilir."
      },
      {
        "q": "\"Şüphesiz Allah ........................ beraberdir.\" (Bakara Suresi 153. Ayet) Boşluğa hangisi gelmelidir?",
        "options": [
          "Acele edenlerle",
          "Sabredenlerle",
          "Tembellerle",
          "Yalancılarla"
        ],
        "answer": 1,
        "explanation": "Yüce Allah Kuran'da sabreden kullarına yardım edeceğini ve onlarla beraber olduğunu müjdeler."
      }
    ],
    "quiz": [
      {
        "q": "Peygamber Efendimize gençliğinde dürüstlüğü ve doğruluğu sebebiyle Mekke halkı tarafından verilen lakap nedir?",
        "options": [
          "Muhammedü'l-Emin (Güvenilir Muhammed)",
          "Ebu Bekir",
          "Fatih",
          "Seyfullah"
        ],
        "answer": 0,
        "explanation": "Peygamberimiz hiçbir zaman yalan söylemediği ve emanete hıyanet etmediği için \"el-Emin\" lakabını almıştır."
      },
      {
        "q": "Kuran-ı Kerim'in İLK SURESİ hangisidir ve kaç ayetten oluşur?",
        "options": [
          "İhlas Suresi (4 ayet)",
          "Fatiha Suresi (7 ayet)",
          "Bakara Suresi (286 ayet)",
          "Nas Suresi (6 ayet)"
        ],
        "answer": 1,
        "explanation": "Fatiha Suresi Kuran'ın ilk suresidir ve 7 ayetten meydana gelir."
      },
      {
        "q": "Hak sahibine hakkını vermek, insanlar arasında ayrım yapmamak hangi ahlaki erdemdir?",
        "options": [
          "Cimrilik",
          "Adalet",
          "Tembellik",
          "Bencillik"
        ],
        "answer": 1,
        "explanation": "Eşitlik ve doğruluk ilkesine göre hakkı sahibine teslim etmeye Adalet denir."
      },
      {
        "q": "Zorluklar, hastalıklar ve sıkıntılar karşısında pes etmeyip dayanma gücü göstermeye ne ad verilir?",
        "options": [
          "Öfke",
          "Sabır",
          "Korku",
          "Acelecilik"
        ],
        "answer": 1,
        "explanation": "Metanetle dayanmaya ve sükûneti korumaya \"Sabır\" denir."
      },
      {
        "q": "Peygamberimiz \"İnsanlara ........................ göstermek dahi bir sadakadır\" buyurmuştur. Boşluğa ne gelmelidir?",
        "options": [
          "Tebessüm (Güler yüz)",
          "Zenginlik",
          "Kibir",
          "Öfke"
        ],
        "answer": 0,
        "explanation": "Peygamberimiz güler yüzlü olmanın ve insanlara tebessüm etmenin sadaka sevabı kazandırdığını bildirmiştir."
      },
      {
        "q": "Fatiha Suresi'nde geçen \"İyyâke na'büdü ve iyyâke nestaîn\" ayetinin anlamı nedir?",
        "options": [
          "Bize çok para ver.",
          "Yalnız Sana kulluk eder ve yalnız Senden yardım dileriz.",
          "Bizi affetme.",
          "Güneş doğudan doğar."
        ],
        "answer": 1,
        "explanation": "Bu ayet sadece Allah'a ibadet edileceğini ve yalnızca O'ndan yardım isteneceğini ifade eder."
      },
      {
        "q": "Aşağıdakilerden hangisi güzel ahlaka UYGUN bir davranış DEĞİLDİR?",
        "options": [
          "Verilen sözde durmak",
          "Yalan söylemek ve hile yapmak",
          "Yere düşen arkadaşına yardım etmek",
          "Emaneti korumak"
        ],
        "answer": 1,
        "explanation": "Yalan söylemek ve hile yapmak İslam dininde en büyük ahlaki kusurlardandır."
      },
      {
        "q": "Fatiha kelimesinin kelime anlamı aşağıdakilerden hangisidir?",
        "options": [
          "Kapanış",
          "Açılış / Başlangıç",
          "Sonuç",
          "Özet"
        ],
        "answer": 1,
        "explanation": "Fatiha \"açan, başlatan, açılış yapan\" anlamına gelir."
      },
      {
        "q": "Yoldaki insanlara rahatsızlık veren bir taşı veya çöpü kenara kaldırmak dinimizde nasıl karşılanır?",
        "options": [
          "Zaman kaybı",
          "Sadaka sevabı kazandıran güzel bir davranış",
          "Gereksiz bir hareket",
          "Kural dışı"
        ],
        "answer": 1,
        "explanation": "Çevreye ve insanlara fayda sağlamak sadaka olarak değerlendirilir."
      },
      {
        "q": "\"Şüphesiz Allah ........................ beraberdir.\" (Bakara Suresi 153. Ayet) Boşluğa hangisi gelmelidir?",
        "options": [
          "Acele edenlerle",
          "Sabredenlerle",
          "Tembellerle",
          "Yalancılarla"
        ],
        "answer": 1,
        "explanation": "Yüce Allah Kuran'da sabreden kullarına yardım edeceğini ve onlarla beraber olduğunu müjdeler."
      }
    ]
  },
  "din-u5": {
    "id": "din-u5",
    "subject": "Din Kültürü",
    "unitNo": "5. Ünite",
    "title": "Haklar ve Sorumluluklar",
    "icon": "⚖️",
    "steps": [
      {
        "title": "Kişisel Haklar ve Mahremiyet Bilinci",
        "badge": "1. Adım: Mahremiyet",
        "slide": "assets/images/haklar_ve_sorumluluklar.svg",
        "narration": "Merhaba bilinçli kâşif! Her insanın dokunulmaz temel hakları vardır: Yaşama hakkı, inanç hakkı ve özel hayatın gizliliği. Başkalarının odasına, eşyasına, telefonuna veya defterine izinsiz bakmak günahtır ve kul hakkıdır! Bir odaya girmeden önce kapıyı üç kez çalmalı ve izin istemeliyiz. Kendi bedenimizin sınırlarını korumak da mahremiyetin gereğidir.",
        "audio": "assets/audio/courses/din-u5_s1.mp3"
      },
      {
        "title": "Allah'a Karşı Sorumluluklarımız",
        "badge": "2. Adım: İbadet & Şükür",
        "slide": "assets/images/haklar_ve_sorumluluklar.svg",
        "narration": "Bizi yaratan ve sonsuz rızık veren Yüce Allah'a karşı görevlerimiz vardır. O'na inanmak, emirlerini yerine getirmek, ibadetlerimizi yapmak, haramlardan kaçınmak ve verdiği her nimet için kalpten şükretmek O'na olan kulluk borcumuzdur.",
        "audio": "assets/audio/courses/din-u5_s2.mp3"
      },
      {
        "title": "İnsanlara ve Çevreye Karşı Sorumluluklarımız",
        "badge": "3. Adım: Kul Hakkı & Çevre",
        "slide": "assets/images/haklar_ve_sorumluluklar.svg",
        "narration": "Anne-babamıza \"öf\" bile dememek, onlara saygı ve şefkat göstermek en büyük görevimizdir. Öğretmenlerimize hürmet etmek, komşularımızı gürültüyle rahatsız etmemek ve hayvanlara merhamet etmek zorundayız. Çevreyi kirletmek tüm insanların hakkına girmektir; çünkü temiz bir dünya herkesin ortak hakkıdır!",
        "audio": "assets/audio/courses/din-u5_s3.mp3"
      },
      {
        "title": "Bir Dua Öğreniyorum: Rabbena Duaları",
        "badge": "4. Adım: Rabbena Duaları",
        "slide": "assets/images/haklar_ve_sorumluluklar.svg",
        "narration": "Rabbena duaları hem bu dünyamız hem de ahiretimiz için kurtuluş isteyen en kapsamlı dualardır. Rabbena Âtina: \"Rabbimiz! Bize dünyada da iyilik ver, ahirette de iyilik ver ve bizi cehennem azabından koru!\" Rabbenağfirlî: \"Rabbimiz! Hesap gününde beni, anamı, babamı ve bütün müminleri bağışla!\" Namazın son oturuşunda bu dualarla yakarırız.",
        "audio": "assets/audio/courses/din-u5_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Başkalarının özel hayatına, odasına veya eşyalarına izinsiz müdahale etmemeye ne ad verilir?",
        "options": [
          "Mahremiyet (Özel hayatın gizliliği)",
          "Gözlem",
          "Tasarruf",
          "Ticaret"
        ],
        "answer": 0,
        "explanation": "Kişinin özel yaşam alanına ve sınırlarına saygı duymaya Mahremiyet denir."
      },
      {
        "q": "Bir başkasının odasına veya evine girmeden önce İslam adabına göre ne yapılmalıdır?",
        "options": [
          "Kapıyı tekmeleyerek açmak",
          "Kapıyı çalıp izin istemek",
          "Hemen içeriye dalmak",
          "Pencereden bakmak"
        ],
        "answer": 1,
        "explanation": "Kapıyı çalıp selam vererek izin istemek temel İslam nezaket kuralıdır."
      },
      {
        "q": "Kuran-ı Kerim'de anne ve babaya karşı tutumumuzla ilgili hangi ifade kullanılmıştır?",
        "options": [
          "Onlara \"öf\" bile demeyiniz, güzel söz söyleyiniz.",
          "Onları hiç dinlemeyiniz.",
          "Onlara sürekli kızınız.",
          "Onlardan uzak durunuz."
        ],
        "answer": 0,
        "explanation": "İsra Suresi 23. ayette anne-babaya \"öf\" dahi denilmemesi ve saygılı olunması emredilir."
      },
      {
        "q": "\"Rabbena âtinâ fiddünyâ haseneten ve fil âhirati haseneten ve kınâ azâbennâr\" duasının anlamı nedir?",
        "options": [
          "Bize sadece bu dünyada zenginlik ver.",
          "Bize dünyada da iyilik ver, ahirette de iyilik ver ve bizi ateş azabından koru.",
          "Bize uzun tatiller ver.",
          "Bizi hiç uyutma."
        ],
        "answer": 1,
        "explanation": "Rabbena Atina duası hem dünya hem de ahiret mutluluğu için yapılan duadır."
      },
      {
        "q": "\"Rabbenağfirlî velivâlideyye ve lilmü'minîne yevme yekûmül hisâb\" duasında KİMLER İÇİN af ve bağışlanma dilenir?",
        "options": [
          "Yalnızca kendimiz için",
          "Kendimiz, anne-babamız ve bütün müminler için",
          "Sadece komşumuz için",
          "Yalnızca zenginler için"
        ],
        "answer": 1,
        "explanation": "Rabbenağfirli duası kendimiz, ebeveynlerimiz ve tüm inananlar için af diler."
      },
      {
        "q": "Başkasına ait bir eşyayı izinsiz almak veya başkasının hakkını gasp etmek dinimizde ne olarak adlandırılır?",
        "options": [
          "Kul Hakkı",
          "İkram",
          "Sadaka",
          "Hediye"
        ],
        "answer": 0,
        "explanation": "İnsanların haklarına saygısızlık etmek ve haksızlık yapmak \"Kul Hakkı\"dır ve büyük günahtır."
      },
      {
        "q": "Peygamberimiz komşu hakkı hakkında ne buyurmuştur?",
        "options": [
          "Komşuyu rahatsız eden bizden değildir.",
          "Komşuyu hiç tanımamak gerekir.",
          "Komşuya asla selam verilmez.",
          "Komşu hakkı önemsizdir."
        ],
        "answer": 0,
        "explanation": "Peygamberimiz komşuluk ilişkilerine ve komşu hakkına azami derecede önem vermiştir."
      },
      {
        "q": "Aşağıdakilerden hangisi bir Müslümanın ALLAH'A KARŞI olan sorumluluklarındandır?",
        "options": [
          "İbadetlerini yerine getirmek ve nimetlere şükretmek",
          "Doğayı kirletmek",
          "Yalan konuşmak",
          "İsraf etmek"
        ],
        "answer": 0,
        "explanation": "Allah'a inanmak, emirlerine uymak ve şükretmek kula düşen en temel vazifedir."
      },
      {
        "q": "Rabbena duaları namazın hangi kısmında okunur?",
        "options": [
          "Namazın başında",
          "Secdeye giderken",
          "Son oturuşta Salli-Barik dualarından sonra",
          "Rükûda"
        ],
        "answer": 2,
        "explanation": "Rabbena duaları namazın son oturuşunda selam vermeden hemen önce okunur."
      },
      {
        "q": "Çevreyi temiz tutmak ve ortak alanlara çöp atmamak neden aynı zamanda bir KUL HAKKIDIR?",
        "options": [
          "Çünkü çevre herkesin ortak yaşam alanıdır ve kirletmek başkalarının hakkını çiğnemektir.",
          "Çünkü belediyeler çalışmasın diye.",
          "Çünkü çöp kutuları boştur.",
          "Hiçbir alakası yoktur."
        ],
        "answer": 0,
        "explanation": "Temiz çevre bütün canlıların ortak hakkıdır; doğayı kirletmek toplumsal kul hakkıdır."
      }
    ],
    "quiz": [
      {
        "q": "Başkalarının özel hayatına, odasına veya eşyalarına izinsiz müdahale etmemeye ne ad verilir?",
        "options": [
          "Mahremiyet (Özel hayatın gizliliği)",
          "Gözlem",
          "Tasarruf",
          "Ticaret"
        ],
        "answer": 0,
        "explanation": "Kişinin özel yaşam alanına ve sınırlarına saygı duymaya Mahremiyet denir."
      },
      {
        "q": "Bir başkasının odasına veya evine girmeden önce İslam adabına göre ne yapılmalıdır?",
        "options": [
          "Kapıyı tekmeleyerek açmak",
          "Kapıyı çalıp izin istemek",
          "Hemen içeriye dalmak",
          "Pencereden bakmak"
        ],
        "answer": 1,
        "explanation": "Kapıyı çalıp selam vererek izin istemek temel İslam nezaket kuralıdır."
      },
      {
        "q": "Kuran-ı Kerim'de anne ve babaya karşı tutumumuzla ilgili hangi ifade kullanılmıştır?",
        "options": [
          "Onlara \"öf\" bile demeyiniz, güzel söz söyleyiniz.",
          "Onları hiç dinlemeyiniz.",
          "Onlara sürekli kızınız.",
          "Onlardan uzak durunuz."
        ],
        "answer": 0,
        "explanation": "İsra Suresi 23. ayette anne-babaya \"öf\" dahi denilmemesi ve saygılı olunması emredilir."
      },
      {
        "q": "\"Rabbena âtinâ fiddünyâ haseneten ve fil âhirati haseneten ve kınâ azâbennâr\" duasının anlamı nedir?",
        "options": [
          "Bize sadece bu dünyada zenginlik ver.",
          "Bize dünyada da iyilik ver, ahirette de iyilik ver ve bizi ateş azabından koru.",
          "Bize uzun tatiller ver.",
          "Bizi hiç uyutma."
        ],
        "answer": 1,
        "explanation": "Rabbena Atina duası hem dünya hem de ahiret mutluluğu için yapılan duadır."
      },
      {
        "q": "\"Rabbenağfirlî velivâlideyye ve lilmü'minîne yevme yekûmül hisâb\" duasında KİMLER İÇİN af ve bağışlanma dilenir?",
        "options": [
          "Yalnızca kendimiz için",
          "Kendimiz, anne-babamız ve bütün müminler için",
          "Sadece komşumuz için",
          "Yalnızca zenginler için"
        ],
        "answer": 1,
        "explanation": "Rabbenağfirli duası kendimiz, ebeveynlerimiz ve tüm inananlar için af diler."
      },
      {
        "q": "Başkasına ait bir eşyayı izinsiz almak veya başkasının hakkını gasp etmek dinimizde ne olarak adlandırılır?",
        "options": [
          "Kul Hakkı",
          "İkram",
          "Sadaka",
          "Hediye"
        ],
        "answer": 0,
        "explanation": "İnsanların haklarına saygısızlık etmek ve haksızlık yapmak \"Kul Hakkı\"dır ve büyük günahtır."
      },
      {
        "q": "Peygamberimiz komşu hakkı hakkında ne buyurmuştur?",
        "options": [
          "Komşuyu rahatsız eden bizden değildir.",
          "Komşuyu hiç tanımamak gerekir.",
          "Komşuya asla selam verilmez.",
          "Komşu hakkı önemsizdir."
        ],
        "answer": 0,
        "explanation": "Peygamberimiz komşuluk ilişkilerine ve komşu hakkına azami derecede önem vermiştir."
      },
      {
        "q": "Aşağıdakilerden hangisi bir Müslümanın ALLAH'A KARŞI olan sorumluluklarındandır?",
        "options": [
          "İbadetlerini yerine getirmek ve nimetlere şükretmek",
          "Doğayı kirletmek",
          "Yalan konuşmak",
          "İsraf etmek"
        ],
        "answer": 0,
        "explanation": "Allah'a inanmak, emirlerine uymak ve şükretmek kula düşen en temel vazifedir."
      },
      {
        "q": "Rabbena duaları namazın hangi kısmında okunur?",
        "options": [
          "Namazın başında",
          "Secdeye giderken",
          "Son oturuşta Salli-Barik dualarından sonra",
          "Rükûda"
        ],
        "answer": 2,
        "explanation": "Rabbena duaları namazın son oturuşunda selam vermeden hemen önce okunur."
      },
      {
        "q": "Çevreyi temiz tutmak ve ortak alanlara çöp atmamak neden aynı zamanda bir KUL HAKKIDIR?",
        "options": [
          "Çünkü çevre herkesin ortak yaşam alanıdır ve kirletmek başkalarının hakkını çiğnemektir.",
          "Çünkü belediyeler çalışmasın diye.",
          "Çünkü çöp kutuları boştur.",
          "Hiçbir alakası yoktur."
        ],
        "answer": 0,
        "explanation": "Temiz çevre bütün canlıların ortak hakkıdır; doğayı kirletmek toplumsal kul hakkıdır."
      }
    ]
  },
  "eng-u1": {
    "id": "eng-u1",
    "subject": "İngilizce",
    "unitNo": "1. Ünite",
    "title": "Classroom Rules (Sınıf Kuralları)",
    "icon": "🇬🇧",
    "steps": [
      {
        "title": "Common Classroom Instructions",
        "badge": "Step 1: Instructions",
        "slide": "assets/images/classroom_rules.svg",
        "narration": "Hello young learner! Welcome to our 4th grade English journey. In our classroom, we have simple and fun rules to learn together. When teacher says \"Stand up!\", we stand on our feet. \"Sit down!\" means take your seat. \"Open your book\" means start reading, and \"Close your book\" means finish reading. Remember: \"Raise your hand\" before speaking!",
        "audio": "assets/audio/courses/eng-u1_s1.mp3"
      },
      {
        "title": "Polite Requests: \"May I...?\"",
        "badge": "Step 2: Polite Requests",
        "slide": "assets/images/classroom_rules.svg",
        "narration": "When we want permission politely, we use the magic words \"May I...?\" For example: \"May I come in?\" means can I enter the room? \"May I drink water?\" means can I have a drink? \"May I go to the toilet?\" means can I visit the restroom? If someone says something you don't understand, say: \"Can you repeat, please?\"",
        "audio": "assets/audio/courses/eng-u1_s2.mp3"
      },
      {
        "title": "Classroom Objects and Lending",
        "badge": "Step 3: School Objects",
        "slide": "assets/images/classroom_rules.svg",
        "narration": "Look around your desk! You have a pencil, an eraser, a ruler, and a sharpener in your pencil case. When you need something from a friend, say politely: \"Give me the eraser, please.\" and always say \"Thank you!\" when they share. Good manners make the best friends!",
        "audio": "assets/audio/courses/eng-u1_s3.mp3"
      },
      {
        "title": "Numbers and Counting (1 to 50)",
        "badge": "Step 4: Numbers",
        "slide": "assets/images/classroom_rules.svg",
        "narration": "Let's count together! Ten, twenty, thirty, forty, fifty! When teacher asks \"How many pencils are there?\", we count them one by one. Practice saying \"There are fifteen desks in the classroom.\" You are ready to shine in English class!",
        "audio": "assets/audio/courses/eng-u1_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Öğretmen sınıfa girdiğinde \"Ayağa kalkın!\" demek için hangi İngilizce talimatı verir?",
        "options": [
          "Sit down!",
          "Stand up!",
          "Be quiet!",
          "Open the door!"
        ],
        "answer": 1,
        "explanation": "\"Stand up!\" Türkçe'de \"Ayağa kalk!\" anlamına gelir."
      },
      {
        "q": "Derse geç kalan bir öğrenci kapıyı çalıp içeri girmek için öğretmenden nasıl KİBARCA izin ister?",
        "options": [
          "Give me the pencil!",
          "May I come in?",
          "Turn off the lights!",
          "Close your book!"
        ],
        "answer": 1,
        "explanation": "\"May I come in?\" (İçeri girebilir miyim?) en kibar izin isteme kalıbıdır."
      },
      {
        "q": "Söz alıp konuşmak isteyen öğrenciye öğretmen ne söyler?",
        "options": [
          "Raise your hand",
          "Close the window",
          "Clean the board",
          "Run fast"
        ],
        "answer": 0,
        "explanation": "\"Raise your hand\" parmağını / elini kaldır anlamına gelir."
      },
      {
        "q": "\"Can you repeat, please?\" ifadesinin Türkçe karşılığı nedir?",
        "options": [
          "Kitabını aç lütfen.",
          "Tekrar edebilir misiniz lütfen?",
          "Dışarı çık lütfen.",
          "Tahtayı sil lütfen."
        ],
        "answer": 1,
        "explanation": "Anlaşılmayan bir şeyi yeniden söyletmek için \"Can you repeat, please?\" denir."
      },
      {
        "q": "Arkadaşımızdan silgisini isterken hangi ifadeyi kullanırız?",
        "options": [
          "Give me the eraser, please.",
          "Open the window.",
          "Sit down immediately.",
          "Stand up!"
        ],
        "answer": 0,
        "explanation": "\"Give me the eraser, please.\" (Bana silgiyi verir misin lütfen) şeklinde istenir."
      },
      {
        "q": "\"Turn on the light\" talimatının zıt anlamlısı (tersi) hangisidir?",
        "options": [
          "Open the door",
          "Turn off the light",
          "Close your eyes",
          "Listen to me"
        ],
        "answer": 1,
        "explanation": "Işığı açmak \"turn on\", ışığı kapatmak \"turn off\"tur."
      },
      {
        "q": "Sınıfta sessiz olunmasını isteyen öğretmen ne der?",
        "options": [
          "Be quiet, please.",
          "Shout loudly.",
          "Dance now.",
          "Eat your sandwich."
        ],
        "answer": 0,
        "explanation": "\"Be quiet, please\" (Sessiz olun lütfen) demektir."
      },
      {
        "q": "\"Open your notebook\" ifadesinin anlamı nedir?",
        "options": [
          "Defterini kapat",
          "Defterini aç",
          "Çantanı topla",
          "Tahtaya bak"
        ],
        "answer": 1,
        "explanation": "\"Open your notebook\" defterini aç anlamına gelir."
      },
      {
        "q": "İngilizce'de \"45\" sayısı nasıl yazılır?",
        "options": [
          "Fourteen",
          "Forty-five",
          "Fifty-four",
          "Four hundred"
        ],
        "answer": 1,
        "explanation": "40 = Forty, 5 = Five ➜ Forty-five."
      },
      {
        "q": "\"May I drink water?\" sorusuna verilebilecek OLUMLU cevap hangisidir?",
        "options": [
          "No, you can't.",
          "Yes, you may.",
          "I am sorry.",
          "Good morning."
        ],
        "answer": 1,
        "explanation": "May I sorusuna olumlu izin verirken \"Yes, you may.\" veya \"Sure / Of course\" denir."
      }
    ],
    "quiz": [
      {
        "q": "Öğretmen sınıfa girdiğinde \"Ayağa kalkın!\" demek için hangi İngilizce talimatı verir?",
        "options": [
          "Sit down!",
          "Stand up!",
          "Be quiet!",
          "Open the door!"
        ],
        "answer": 1,
        "explanation": "\"Stand up!\" Türkçe'de \"Ayağa kalk!\" anlamına gelir."
      },
      {
        "q": "Derse geç kalan bir öğrenci kapıyı çalıp içeri girmek için öğretmenden nasıl KİBARCA izin ister?",
        "options": [
          "Give me the pencil!",
          "May I come in?",
          "Turn off the lights!",
          "Close your book!"
        ],
        "answer": 1,
        "explanation": "\"May I come in?\" (İçeri girebilir miyim?) en kibar izin isteme kalıbıdır."
      },
      {
        "q": "Söz alıp konuşmak isteyen öğrenciye öğretmen ne söyler?",
        "options": [
          "Raise your hand",
          "Close the window",
          "Clean the board",
          "Run fast"
        ],
        "answer": 0,
        "explanation": "\"Raise your hand\" parmağını / elini kaldır anlamına gelir."
      },
      {
        "q": "\"Can you repeat, please?\" ifadesinin Türkçe karşılığı nedir?",
        "options": [
          "Kitabını aç lütfen.",
          "Tekrar edebilir misiniz lütfen?",
          "Dışarı çık lütfen.",
          "Tahtayı sil lütfen."
        ],
        "answer": 1,
        "explanation": "Anlaşılmayan bir şeyi yeniden söyletmek için \"Can you repeat, please?\" denir."
      },
      {
        "q": "Arkadaşımızdan silgisini isterken hangi ifadeyi kullanırız?",
        "options": [
          "Give me the eraser, please.",
          "Open the window.",
          "Sit down immediately.",
          "Stand up!"
        ],
        "answer": 0,
        "explanation": "\"Give me the eraser, please.\" (Bana silgiyi verir misin lütfen) şeklinde istenir."
      },
      {
        "q": "\"Turn on the light\" talimatının zıt anlamlısı (tersi) hangisidir?",
        "options": [
          "Open the door",
          "Turn off the light",
          "Close your eyes",
          "Listen to me"
        ],
        "answer": 1,
        "explanation": "Işığı açmak \"turn on\", ışığı kapatmak \"turn off\"tur."
      },
      {
        "q": "Sınıfta sessiz olunmasını isteyen öğretmen ne der?",
        "options": [
          "Be quiet, please.",
          "Shout loudly.",
          "Dance now.",
          "Eat your sandwich."
        ],
        "answer": 0,
        "explanation": "\"Be quiet, please\" (Sessiz olun lütfen) demektir."
      },
      {
        "q": "\"Open your notebook\" ifadesinin anlamı nedir?",
        "options": [
          "Defterini kapat",
          "Defterini aç",
          "Çantanı topla",
          "Tahtaya bak"
        ],
        "answer": 1,
        "explanation": "\"Open your notebook\" defterini aç anlamına gelir."
      },
      {
        "q": "İngilizce'de \"45\" sayısı nasıl yazılır?",
        "options": [
          "Fourteen",
          "Forty-five",
          "Fifty-four",
          "Four hundred"
        ],
        "answer": 1,
        "explanation": "40 = Forty, 5 = Five ➜ Forty-five."
      },
      {
        "q": "\"May I drink water?\" sorusuna verilebilecek OLUMLU cevap hangisidir?",
        "options": [
          "No, you can't.",
          "Yes, you may.",
          "I am sorry.",
          "Good morning."
        ],
        "answer": 1,
        "explanation": "May I sorusuna olumlu izin verirken \"Yes, you may.\" veya \"Sure / Of course\" denir."
      }
    ]
  },
  "eng-u2": {
    "id": "eng-u2",
    "subject": "İngilizce",
    "unitNo": "2. Ünite",
    "title": "Nationality (Millet ve Ülkeler)",
    "icon": "🌍",
    "steps": [
      {
        "title": "Countries and Nationalities (Ülkeler ve Milletler)",
        "badge": "Step 1: Countries",
        "slide": "assets/images/nationality_countries.svg",
        "narration": "Hello world traveler! Let's meet children from all around the globe. There is an important difference between Country and Nationality. Country is where you live, and Nationality is who you are! For example: Türkiye is the country, Turkish is the nationality. Germany is the country, German is the nationality. France is the country, French is the nationality!",
        "audio": "assets/audio/courses/eng-u2_s1.mp3"
      },
      {
        "title": "Asking \"Where are you from?\"",
        "badge": "Step 2: Where from?",
        "slide": "assets/images/nationality_countries.svg",
        "narration": "When you meet a new friend, you ask: \"Where are you from?\" and you answer: \"I am from Türkiye.\" When you ask about their nationality, you say: \"What nationality are you?\" and answer: \"I am Turkish.\" If you talk about a boy, say: \"He is from Spain, he is Spanish.\" For a girl: \"She is from Italy, she is Italian.\"",
        "audio": "assets/audio/courses/eng-u2_s2.mp3"
      },
      {
        "title": "More Countries Around the World",
        "badge": "Step 3: Global Map",
        "slide": "assets/images/nationality_countries.svg",
        "narration": "Let's visit more places! Japan - Japanese. Britain / England - British / English. The USA - American. Russia - Russian. China - Chinese. When we say \"I live in Istanbul\", we show our city! The world is full of wonderful cultures.",
        "audio": "assets/audio/courses/eng-u2_s3.mp3"
      },
      {
        "title": "Compass Points (Yönler)",
        "badge": "Step 4: Compass Points",
        "slide": "assets/images/nationality_countries.svg",
        "narration": "Let's find directions on the map: North is up, South is down, East is right, and West is left. We can say: \"Sinop is in the North of Türkiye\" or \"Antalya is in the South of Türkiye.\" Knowing directions makes you a real global explorer!",
        "audio": "assets/audio/courses/eng-u2_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "\"Where are you from?\" sorusuna bir Türk çocuğu nasıl cevap vermelidir?",
        "options": [
          "I am Turkish.",
          "I am from Türkiye.",
          "I live in London.",
          "I like apples."
        ],
        "answer": 1,
        "explanation": "\"Where are you from?\" (Nerelisin?) sorusuna \"I am from [Ülke]\" kalıbıyla cevap verilir."
      },
      {
        "q": "\"What nationality are you?\" sorusunun doğru cevabı hangisidir?",
        "options": [
          "I am from Germany.",
          "I am German.",
          "I am ten years old.",
          "I am a student."
        ],
        "answer": 1,
        "explanation": "\"What nationality are you?\" (Hangi millettensin?) sorusuna millet adı olan \"German\" ile cevap verilir."
      },
      {
        "q": "\"Spain\" (İspanya) ülkesinin vatandaşı olan kişiye ne denir?",
        "options": [
          "Spaniard / Spanish",
          "French",
          "Italian",
          "British"
        ],
        "answer": 0,
        "explanation": "Spain ülkesinin milleti \"Spanish\" (İspanyol)'dur."
      },
      {
        "q": "\"He is from France. He is ........................\" Boşluğa hangi millet adı gelmelidir?",
        "options": [
          "French",
          "German",
          "Turkish",
          "Japanese"
        ],
        "answer": 0,
        "explanation": "Fransa'dan (France) olan biri \"French\" (Fransız)'dır."
      },
      {
        "q": "İngilizce'de \"KUZEY\" yönü hangi kelimeyle ifade edilir?",
        "options": [
          "South",
          "East",
          "West",
          "North"
        ],
        "answer": 3,
        "explanation": "Kuzey = North, Güney = South, Doğu = East, Batı = West."
      },
      {
        "q": "\"Japan\" ülkesinin milleti hangisidir?",
        "options": [
          "Chinese",
          "Japanese",
          "American",
          "Russian"
        ],
        "answer": 1,
        "explanation": "Japonya = Japan, Japon = Japanese."
      },
      {
        "q": "\"Where is he from?\" sorusunda \"he\" kimin için kullanılır?",
        "options": [
          "Kızlar / kadınlar için",
          "Erkekler için",
          "Hayvanlar için",
          "Cansız nesneler için"
        ],
        "answer": 1,
        "explanation": "İngilizce'de \"He\" erkek bireyler için kullanılan üçüncü tekil şahıs zamiridir."
      },
      {
        "q": "\"I live in Ankara.\" cümlesinin anlamı nedir?",
        "options": [
          "Ankara'ya gideceğim.",
          "Ankara'da yaşıyorum.",
          "Ankara'yı sevmiyorum.",
          "Ankara'dan geldim."
        ],
        "answer": 1,
        "explanation": "\"Live in\" bir yerde ikamet etmek, yaşamak anlamına gelir."
      },
      {
        "q": "\"England\" ülkesinin millet ismi nedir?",
        "options": [
          "English / British",
          "Spanish",
          "German",
          "Italian"
        ],
        "answer": 0,
        "explanation": "İngiltere = England, İngiliz = English / British."
      },
      {
        "q": "Haritada \"GÜNEY\" yönü aşağıdakilerden hangisidir?",
        "options": [
          "North",
          "South",
          "West",
          "East"
        ],
        "answer": 1,
        "explanation": "Güney yönü \"South\" kelimesiyle ifade edilir."
      }
    ],
    "quiz": [
      {
        "q": "\"Where are you from?\" sorusuna bir Türk çocuğu nasıl cevap vermelidir?",
        "options": [
          "I am Turkish.",
          "I am from Türkiye.",
          "I live in London.",
          "I like apples."
        ],
        "answer": 1,
        "explanation": "\"Where are you from?\" (Nerelisin?) sorusuna \"I am from [Ülke]\" kalıbıyla cevap verilir."
      },
      {
        "q": "\"What nationality are you?\" sorusunun doğru cevabı hangisidir?",
        "options": [
          "I am from Germany.",
          "I am German.",
          "I am ten years old.",
          "I am a student."
        ],
        "answer": 1,
        "explanation": "\"What nationality are you?\" (Hangi millettensin?) sorusuna millet adı olan \"German\" ile cevap verilir."
      },
      {
        "q": "\"Spain\" (İspanya) ülkesinin vatandaşı olan kişiye ne denir?",
        "options": [
          "Spaniard / Spanish",
          "French",
          "Italian",
          "British"
        ],
        "answer": 0,
        "explanation": "Spain ülkesinin milleti \"Spanish\" (İspanyol)'dur."
      },
      {
        "q": "\"He is from France. He is ........................\" Boşluğa hangi millet adı gelmelidir?",
        "options": [
          "French",
          "German",
          "Turkish",
          "Japanese"
        ],
        "answer": 0,
        "explanation": "Fransa'dan (France) olan biri \"French\" (Fransız)'dır."
      },
      {
        "q": "İngilizce'de \"KUZEY\" yönü hangi kelimeyle ifade edilir?",
        "options": [
          "South",
          "East",
          "West",
          "North"
        ],
        "answer": 3,
        "explanation": "Kuzey = North, Güney = South, Doğu = East, Batı = West."
      },
      {
        "q": "\"Japan\" ülkesinin milleti hangisidir?",
        "options": [
          "Chinese",
          "Japanese",
          "American",
          "Russian"
        ],
        "answer": 1,
        "explanation": "Japonya = Japan, Japon = Japanese."
      },
      {
        "q": "\"Where is he from?\" sorusunda \"he\" kimin için kullanılır?",
        "options": [
          "Kızlar / kadınlar için",
          "Erkekler için",
          "Hayvanlar için",
          "Cansız nesneler için"
        ],
        "answer": 1,
        "explanation": "İngilizce'de \"He\" erkek bireyler için kullanılan üçüncü tekil şahıs zamiridir."
      },
      {
        "q": "\"I live in Ankara.\" cümlesinin anlamı nedir?",
        "options": [
          "Ankara'ya gideceğim.",
          "Ankara'da yaşıyorum.",
          "Ankara'yı sevmiyorum.",
          "Ankara'dan geldim."
        ],
        "answer": 1,
        "explanation": "\"Live in\" bir yerde ikamet etmek, yaşamak anlamına gelir."
      },
      {
        "q": "\"England\" ülkesinin millet ismi nedir?",
        "options": [
          "English / British",
          "Spanish",
          "German",
          "Italian"
        ],
        "answer": 0,
        "explanation": "İngiltere = England, İngiliz = English / British."
      },
      {
        "q": "Haritada \"GÜNEY\" yönü aşağıdakilerden hangisidir?",
        "options": [
          "North",
          "South",
          "West",
          "East"
        ],
        "answer": 1,
        "explanation": "Güney yönü \"South\" kelimesiyle ifade edilir."
      }
    ]
  },
  "eng-u3": {
    "id": "eng-u3",
    "subject": "İngilizce",
    "unitNo": "3. Ünite",
    "title": "Cartoon Characters (Çizgi Film Karakterleri)",
    "icon": "🦸",
    "steps": [
      {
        "title": "Superhero Abilities: CAN and CAN'T",
        "badge": "Step 1: Can & Can't",
        "slide": "assets/images/cartoon_characters.svg",
        "narration": "Welcome to the superhero world! Today we learn about our abilities. When we are able to do something, we use CAN! \"He can fly like Superman.\" \"She can run fast like Wonder Woman.\" When we cannot do something, we use CAN'T! \"He can't swim underwater.\" Can and Can't describe what you are capable of!",
        "audio": "assets/audio/courses/eng-u3_s1.mp3"
      },
      {
        "title": "Action Verbs (Hareket Eylemleri)",
        "badge": "Step 2: Action Verbs",
        "slide": "assets/images/cartoon_characters.svg",
        "narration": "Let's learn active superhero verbs! Fly (uçmak), climb (tırmanmak), jump high (yükseğe zıplamak), dive (dalmak), lift weights (ağırlık kaldırmak), ride a horse (ata binmek) and do magic (sihir yapmak). Spiderman can climb walls, and Batman can drive the Batmobile fast!",
        "audio": "assets/audio/courses/eng-u3_s2.mp3"
      },
      {
        "title": "Asking \"Can you...?\" Questions",
        "badge": "Step 3: Can Questions",
        "slide": "assets/images/cartoon_characters.svg",
        "narration": "Want to ask about someone's skills? Say: \"Can you ride a bike?\" If yes, answer: \"Yes, I can!\" If no, answer: \"No, I can't.\" For a friend: \"Can she play the guitar?\" - \"Yes, she can!\" or \"No, she can't.\" Notice how easy and quick it is!",
        "audio": "assets/audio/courses/eng-u3_s3.mp3"
      },
      {
        "title": "Describing Your Favorite Hero",
        "badge": "Step 4: Hero Description",
        "slide": "assets/images/cartoon_characters.svg",
        "narration": "You can talk about your favorite cartoon hero now! Say: \"My favorite hero is Spiderman. He is brave and strong. He can climb high buildings, but he can't fly.\" Practice telling your friends about your hero!",
        "audio": "assets/audio/courses/eng-u3_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "\"He can fly.\" cümlesinin Türkçe karşılığı nedir?",
        "options": [
          "O koşabilir.",
          "O uçabilir.",
          "O yüzemez.",
          "O zıplayamaz."
        ],
        "answer": 1,
        "explanation": "Fly = uçmak, Can = yapabilmek ➜ \"O uçabilir.\""
      },
      {
        "q": "\"Can you swim?\" sorusuna verilebilecek OLUMSUZ kısa cevap hangisidir?",
        "options": [
          "Yes, I can.",
          "No, I can't.",
          "Yes, I do.",
          "No, I don't."
        ],
        "answer": 1,
        "explanation": "Can sorusuna olumsuz cevap verirken \"No, I can't.\" (cannot) denir."
      },
      {
        "q": "Spiderman duvara tırmanabilir cümlesinin İngilizcesi hangisidir?",
        "options": [
          "Spiderman can fly.",
          "Spiderman can climb walls.",
          "Spiderman can't run.",
          "Spiderman can cook."
        ],
        "answer": 1,
        "explanation": "Climb = tırmanmak, Wall = duvar ➜ \"Spiderman can climb walls.\""
      },
      {
        "q": "\"A fish ........................ swim, but it ........................ walk.\" Boşluklara sırasıyla ne gelmelidir?",
        "options": [
          "can / can't",
          "can't / can",
          "can / can",
          "can't / can't"
        ],
        "answer": 0,
        "explanation": "Balık yüzebilir (can), ama yürüyemez (can't)."
      },
      {
        "q": "\"Ride a horse\" eyleminin anlamı nedir?",
        "options": [
          "Bisiklete binmek",
          "Ata binmek",
          "Uçurtma uçurmak",
          "Gitar çalmak"
        ],
        "answer": 1,
        "explanation": "Horse = at, Ride = binmek ➜ \"Ata binmek\"."
      },
      {
        "q": "\"Can she play the piano?\" sorusuna OLUMLU cevap hangisidir?",
        "options": [
          "No, she can't.",
          "Yes, she can.",
          "Yes, he can.",
          "No, I can."
        ],
        "answer": 1,
        "explanation": "Özne \"she\" olduğu için olumlu cevap \"Yes, she can.\" olur."
      },
      {
        "q": "Aşağıdaki hayvanlardan hangisi \"can fly\" (uçabilir) özelliğine sahiptir?",
        "options": [
          "Elephant",
          "Bird",
          "Dog",
          "Turtle"
        ],
        "answer": 1,
        "explanation": "Bird (kuş) uçabilen bir hayvandır."
      },
      {
        "q": "\"Do magic\" ifadesinin Türkçe karşılığı nedir?",
        "options": [
          "Resim yapmak",
          "Sihir / Büyü yapmak",
          "Şarkı söylemek",
          "Kitap okumak"
        ],
        "answer": 1,
        "explanation": "Do magic tricks = sihirbazlık / sihir yapmak."
      },
      {
        "q": "Bir şeyi yapmaya gücümüz yetmediğinde veya beceremediğimizde hangi kelimeyi kullanırız?",
        "options": [
          "Can",
          "Can't (Cannot)",
          "Must",
          "May"
        ],
        "answer": 1,
        "explanation": "Yetenek eksikliği veya yapamama durumlarında \"can't\" kullanılır."
      },
      {
        "q": "\"Jump high\" ne anlama gelir?",
        "options": [
          "Hızlı koşmak",
          "Yükseğe zıplamak",
          "Derine dalmak",
          "Ağaca tırmanmak"
        ],
        "answer": 1,
        "explanation": "Jump = zıplamak, High = yüksek ➜ \"Yükseğe zıplamak\"."
      }
    ],
    "quiz": [
      {
        "q": "\"He can fly.\" cümlesinin Türkçe karşılığı nedir?",
        "options": [
          "O koşabilir.",
          "O uçabilir.",
          "O yüzemez.",
          "O zıplayamaz."
        ],
        "answer": 1,
        "explanation": "Fly = uçmak, Can = yapabilmek ➜ \"O uçabilir.\""
      },
      {
        "q": "\"Can you swim?\" sorusuna verilebilecek OLUMSUZ kısa cevap hangisidir?",
        "options": [
          "Yes, I can.",
          "No, I can't.",
          "Yes, I do.",
          "No, I don't."
        ],
        "answer": 1,
        "explanation": "Can sorusuna olumsuz cevap verirken \"No, I can't.\" (cannot) denir."
      },
      {
        "q": "Spiderman duvara tırmanabilir cümlesinin İngilizcesi hangisidir?",
        "options": [
          "Spiderman can fly.",
          "Spiderman can climb walls.",
          "Spiderman can't run.",
          "Spiderman can cook."
        ],
        "answer": 1,
        "explanation": "Climb = tırmanmak, Wall = duvar ➜ \"Spiderman can climb walls.\""
      },
      {
        "q": "\"A fish ........................ swim, but it ........................ walk.\" Boşluklara sırasıyla ne gelmelidir?",
        "options": [
          "can / can't",
          "can't / can",
          "can / can",
          "can't / can't"
        ],
        "answer": 0,
        "explanation": "Balık yüzebilir (can), ama yürüyemez (can't)."
      },
      {
        "q": "\"Ride a horse\" eyleminin anlamı nedir?",
        "options": [
          "Bisiklete binmek",
          "Ata binmek",
          "Uçurtma uçurmak",
          "Gitar çalmak"
        ],
        "answer": 1,
        "explanation": "Horse = at, Ride = binmek ➜ \"Ata binmek\"."
      },
      {
        "q": "\"Can she play the piano?\" sorusuna OLUMLU cevap hangisidir?",
        "options": [
          "No, she can't.",
          "Yes, she can.",
          "Yes, he can.",
          "No, I can."
        ],
        "answer": 1,
        "explanation": "Özne \"she\" olduğu için olumlu cevap \"Yes, she can.\" olur."
      },
      {
        "q": "Aşağıdaki hayvanlardan hangisi \"can fly\" (uçabilir) özelliğine sahiptir?",
        "options": [
          "Elephant",
          "Bird",
          "Dog",
          "Turtle"
        ],
        "answer": 1,
        "explanation": "Bird (kuş) uçabilen bir hayvandır."
      },
      {
        "q": "\"Do magic\" ifadesinin Türkçe karşılığı nedir?",
        "options": [
          "Resim yapmak",
          "Sihir / Büyü yapmak",
          "Şarkı söylemek",
          "Kitap okumak"
        ],
        "answer": 1,
        "explanation": "Do magic tricks = sihirbazlık / sihir yapmak."
      },
      {
        "q": "Bir şeyi yapmaya gücümüz yetmediğinde veya beceremediğimizde hangi kelimeyi kullanırız?",
        "options": [
          "Can",
          "Can't (Cannot)",
          "Must",
          "May"
        ],
        "answer": 1,
        "explanation": "Yetenek eksikliği veya yapamama durumlarında \"can't\" kullanılır."
      },
      {
        "q": "\"Jump high\" ne anlama gelir?",
        "options": [
          "Hızlı koşmak",
          "Yükseğe zıplamak",
          "Derine dalmak",
          "Ağaca tırmanmak"
        ],
        "answer": 1,
        "explanation": "Jump = zıplamak, High = yüksek ➜ \"Yükseğe zıplamak\"."
      }
    ]
  },
  "eng-u4": {
    "id": "eng-u4",
    "subject": "İngilizce",
    "unitNo": "4. Ünite",
    "title": "Free Time (Boş Zaman Etkinlikleri)",
    "icon": "⚽",
    "steps": [
      {
        "title": "Free Time Activities and Hobbies",
        "badge": "Step 1: Hobbies",
        "slide": "assets/images/free_time_activities.svg",
        "narration": "What do you love doing after school? Free time is time for fun! We can play football, ride a bike, read comics, fly a kite, listen to music, color pictures, and play computer games. Doing what you love keeps your energy high!",
        "audio": "assets/audio/courses/eng-u4_s1.mp3"
      },
      {
        "title": "Expressing Likes and Dislikes",
        "badge": "Step 2: Likes & Dislikes",
        "slide": "assets/images/free_time_activities.svg",
        "narration": "When we enjoy something, we say: \"I like reading comics.\" or \"I love swimming.\" When we do not enjoy it, we say: \"I don't like playing chess.\" or \"I dislike table tennis.\" Notice that the verb after \"like\" often takes an -ing ending: like read-ing, like play-ing!",
        "audio": "assets/audio/courses/eng-u4_s2.mp3"
      },
      {
        "title": "Asking \"Do you like...?\"",
        "badge": "Step 3: Do you like?",
        "slide": "assets/images/free_time_activities.svg",
        "narration": "To learn what your friends like, ask: \"Do you like drawing?\" If they do, they say: \"Yes, I do.\" If they don't, they say: \"No, I don't.\" For a boy: \"Does he like rollerblading?\" - \"Yes, he does.\" or \"No, he doesn't.\"",
        "audio": "assets/audio/courses/eng-u4_s3.mp3"
      },
      {
        "title": "Board Games and Outdoor Games",
        "badge": "Step 4: Games",
        "slide": "assets/images/free_time_activities.svg",
        "narration": "On rainy days, we play indoor games: chess, puzzles, or board games. On sunny days, we go outside to play hide and seek, hopscotch, and rollerblade in the park. Balancing screen time with active games is the best way to enjoy free time!",
        "audio": "assets/audio/courses/eng-u4_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "\"I like reading comics.\" cümlesinin anlamı nedir?",
        "options": [
          "Çizgi roman okumayı sevmem.",
          "Çizgi roman okumayı severim.",
          "Futbol oynamayı severim.",
          "Uçurtma uçururum."
        ],
        "answer": 1,
        "explanation": "Reading comics = çizgi roman okumak, Like = sevmek/hoşlanmak."
      },
      {
        "q": "\"Do you like swimming?\" sorusuna verilebilecek OLUMLU cevap hangisidir?",
        "options": [
          "Yes, I do.",
          "No, I don't.",
          "Yes, I can.",
          "No, I am not."
        ],
        "answer": 0,
        "explanation": "\"Do you...?\" sorusuna olumlu kısa cevap \"Yes, I do.\"dur."
      },
      {
        "q": "\"Uçurtma uçurmak\" eyleminin İngilizcesi hangisidir?",
        "options": [
          "Riding a scooter",
          "Flying a kite",
          "Playing chess",
          "Drawing pictures"
        ],
        "answer": 1,
        "explanation": "Kite = uçurtma, Fly = uçurmak ➜ \"Flying a kite\"."
      },
      {
        "q": "Satranç oynamaktan hoşlanmayan biri bunu nasıl ifade eder?",
        "options": [
          "I like playing chess.",
          "I don't like playing chess.",
          "I love chess.",
          "Chess is my favorite."
        ],
        "answer": 1,
        "explanation": "Hoşlanmadığımız eylemleri \"I don't like...\" kalıbıyla söyleriz."
      },
      {
        "q": "\"Playing hide and seek\" hangi geleneksel oyundur?",
        "options": [
          "Seksek",
          "Saklambaç",
          "Körebe",
          "Mendil kapmaca"
        ],
        "answer": 1,
        "explanation": "Hide and seek = saklambaç oyunudur."
      },
      {
        "q": "\"He ........................ playing football.\" Cümlesinde boşluğa hangisi gelmelidir?",
        "options": [
          "likes",
          "like",
          "don't like",
          "liking"
        ],
        "answer": 0,
        "explanation": "Geniş zamanda He/She/It özneleriyle fiil -s takısı alır: \"He likes\"."
      },
      {
        "q": "\"Drawing and coloring\" ne anlama gelir?",
        "options": [
          "Yüzmek ve koşmak",
          "Resim çizmek ve boyamak",
          "Müzik dinlemek",
          "Kitap okumak"
        ],
        "answer": 1,
        "explanation": "Draw = çizmek, Color = boyamak."
      },
      {
        "q": "\"Do you like playing computer games?\" sorusuna OLUMSUZ cevap hangisidir?",
        "options": [
          "Yes, I do.",
          "No, I don't.",
          "No, I can't.",
          "Yes, please."
        ],
        "answer": 1,
        "explanation": "Do you sorusunun olumsuz cevabı \"No, I don't.\"dur."
      },
      {
        "q": "\"Riding a bike\" ne demektir?",
        "options": [
          "Bisiklete binmek",
          "Arabayı sürmek",
          "Paten kaymak",
          "Yürüyüş yapmak"
        ],
        "answer": 0,
        "explanation": "Bike = bisiklet, Ride = binmek ➜ \"Bisiklete binmek\"."
      },
      {
        "q": "Sevdiğimiz ve yapmaktan büyük mutluluk duyduğumuz boş zaman uğraşlarına ne ad verilir?",
        "options": [
          "Homework",
          "Exam",
          "Hobbies",
          "Rules"
        ],
        "answer": 2,
        "explanation": "Hobiler \"Hobbies\" veya \"Free time activities\" olarak adlandırılır."
      }
    ],
    "quiz": [
      {
        "q": "\"I like reading comics.\" cümlesinin anlamı nedir?",
        "options": [
          "Çizgi roman okumayı sevmem.",
          "Çizgi roman okumayı severim.",
          "Futbol oynamayı severim.",
          "Uçurtma uçururum."
        ],
        "answer": 1,
        "explanation": "Reading comics = çizgi roman okumak, Like = sevmek/hoşlanmak."
      },
      {
        "q": "\"Do you like swimming?\" sorusuna verilebilecek OLUMLU cevap hangisidir?",
        "options": [
          "Yes, I do.",
          "No, I don't.",
          "Yes, I can.",
          "No, I am not."
        ],
        "answer": 0,
        "explanation": "\"Do you...?\" sorusuna olumlu kısa cevap \"Yes, I do.\"dur."
      },
      {
        "q": "\"Uçurtma uçurmak\" eyleminin İngilizcesi hangisidir?",
        "options": [
          "Riding a scooter",
          "Flying a kite",
          "Playing chess",
          "Drawing pictures"
        ],
        "answer": 1,
        "explanation": "Kite = uçurtma, Fly = uçurmak ➜ \"Flying a kite\"."
      },
      {
        "q": "Satranç oynamaktan hoşlanmayan biri bunu nasıl ifade eder?",
        "options": [
          "I like playing chess.",
          "I don't like playing chess.",
          "I love chess.",
          "Chess is my favorite."
        ],
        "answer": 1,
        "explanation": "Hoşlanmadığımız eylemleri \"I don't like...\" kalıbıyla söyleriz."
      },
      {
        "q": "\"Playing hide and seek\" hangi geleneksel oyundur?",
        "options": [
          "Seksek",
          "Saklambaç",
          "Körebe",
          "Mendil kapmaca"
        ],
        "answer": 1,
        "explanation": "Hide and seek = saklambaç oyunudur."
      },
      {
        "q": "\"He ........................ playing football.\" Cümlesinde boşluğa hangisi gelmelidir?",
        "options": [
          "likes",
          "like",
          "don't like",
          "liking"
        ],
        "answer": 0,
        "explanation": "Geniş zamanda He/She/It özneleriyle fiil -s takısı alır: \"He likes\"."
      },
      {
        "q": "\"Drawing and coloring\" ne anlama gelir?",
        "options": [
          "Yüzmek ve koşmak",
          "Resim çizmek ve boyamak",
          "Müzik dinlemek",
          "Kitap okumak"
        ],
        "answer": 1,
        "explanation": "Draw = çizmek, Color = boyamak."
      },
      {
        "q": "\"Do you like playing computer games?\" sorusuna OLUMSUZ cevap hangisidir?",
        "options": [
          "Yes, I do.",
          "No, I don't.",
          "No, I can't.",
          "Yes, please."
        ],
        "answer": 1,
        "explanation": "Do you sorusunun olumsuz cevabı \"No, I don't.\"dur."
      },
      {
        "q": "\"Riding a bike\" ne demektir?",
        "options": [
          "Bisiklete binmek",
          "Arabayı sürmek",
          "Paten kaymak",
          "Yürüyüş yapmak"
        ],
        "answer": 0,
        "explanation": "Bike = bisiklet, Ride = binmek ➜ \"Bisiklete binmek\"."
      },
      {
        "q": "Sevdiğimiz ve yapmaktan büyük mutluluk duyduğumuz boş zaman uğraşlarına ne ad verilir?",
        "options": [
          "Homework",
          "Exam",
          "Hobbies",
          "Rules"
        ],
        "answer": 2,
        "explanation": "Hobiler \"Hobbies\" veya \"Free time activities\" olarak adlandırılır."
      }
    ]
  },
  "eng-u5": {
    "id": "eng-u5",
    "subject": "İngilizce",
    "unitNo": "5. Ünite",
    "title": "My Day (Günüm ve Günlük İşlerim)",
    "icon": "⏰",
    "steps": [
      {
        "title": "Morning Routines (Sabah Alışkanlıkları)",
        "badge": "Step 1: Morning",
        "slide": "assets/images/my_day_routines.svg",
        "narration": "Good morning! A great day starts with healthy routines. First, I wake up at 7 o'clock. I wash my hands and face, and brush my teeth. Then, I have breakfast with my family: eggs, cheese, and milk! After that, I get dressed in my school uniform and go to school by bus.",
        "audio": "assets/audio/courses/eng-u5_s1.mp3"
      },
      {
        "title": "Afternoon and Evening Routines",
        "badge": "Step 2: Afternoon & Night",
        "slide": "assets/images/my_day_routines.svg",
        "narration": "At school, I have lunch with my classmates at 12 o'clock. In the afternoon, I come back home at 3 o'clock. First, I do my homework and study. In the evening, we have dinner together. At night, I read a book and go to bed at 9 o'clock to sleep well.",
        "audio": "assets/audio/courses/eng-u5_s2.mp3"
      },
      {
        "title": "Telling the Time: \"What time is it?\"",
        "badge": "Step 3: What time is it?",
        "slide": "assets/images/my_day_routines.svg",
        "narration": "Look at the clock! To ask the time, we say: \"What time is it?\" If the long hand is on 12, it is a sharp hour: \"It is eight o'clock.\" (08.00). If the long hand is on 6, it is half past: \"It is half past eight.\" (08.30). Remember: before times, we always use the preposition \"at\": \"I wake up at seven o'clock.\"",
        "audio": "assets/audio/courses/eng-u5_s3.mp3"
      },
      {
        "title": "Quarter Past and Quarter To",
        "badge": "Step 4: Quarter times",
        "slide": "assets/images/my_day_routines.svg",
        "narration": "Let's learn quarters! Quarter means 15 minutes. \"Quarter past four\" means 04.15 (15 minutes past 4). \"Quarter to five\" means 04.45 (15 minutes before 5). Now you can read any clock like a master!",
        "audio": "assets/audio/courses/eng-u5_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "\"What time is it?\" sorusunun Türkçe karşılığı nedir?",
        "options": [
          "Bugün günlerden ne?",
          "Saat kaç?",
          "Nereye gidiyorsun?",
          "Hava nasıl?"
        ],
        "answer": 1,
        "explanation": "\"What time is it?\" saati öğrenmek için sorulan temel sorudur (Saat kaç?)."
      },
      {
        "q": "Saat tam 09.00 olduğunda İngilizce nasıl söylenir?",
        "options": [
          "It is half past nine.",
          "It is nine o'clock.",
          "It is quarter past nine.",
          "It is ten o'clock."
        ],
        "answer": 1,
        "explanation": "Tam saatlerde \"o'clock\" kullanılır: \"It is nine o'clock.\""
      },
      {
        "q": "\"It is half past two.\" saat kaçı gösterir?",
        "options": [
          "02.00",
          "02.15",
          "02.30",
          "02.45"
        ],
        "answer": 2,
        "explanation": "\"Half past\" buçuk demektir: Half past two = 02.30."
      },
      {
        "q": "\"Brush teeth\" eyleminin anlamı nedir?",
        "options": [
          "Yüzünü yıkamak",
          "Dişlerini fırçalamak",
          "Saçını taramak",
          "Giyinmek"
        ],
        "answer": 1,
        "explanation": "Brush = fırçalamak, Teeth = dişler."
      },
      {
        "q": "\"I wake up ........................ seven o'clock.\" Saatlerden önce hangi edat kullanılır?",
        "options": [
          "in",
          "on",
          "at",
          "under"
        ],
        "answer": 2,
        "explanation": "Saat bildiren zaman ifadelerinin önünde daima \"at\" kullanılır (at 7 o'clock)."
      },
      {
        "q": "\"Have breakfast\" ne anlama gelir?",
        "options": [
          "Öğle yemeği yemek",
          "Akşam yemeği yemek",
          "Kahvaltı yapmak",
          "Uyumak"
        ],
        "answer": 2,
        "explanation": "Breakfast = kahvaltı ➜ Have breakfast = kahvaltı yapmak."
      },
      {
        "q": "\"Do homework\" eyleminin anlamı nedir?",
        "options": [
          "Ev ödevini yapmak",
          "Oyun oynamak",
          "Ev temizlemek",
          "Yatağa gitmek"
        ],
        "answer": 0,
        "explanation": "Do homework = ödev yapmak."
      },
      {
        "q": "\"Quarter past\" ifadesi ne anlama gelir?",
        "options": [
          "Buçuk",
          "Çeyrek geçe (15 geçe)",
          "Çeyrek kala (15 kala)",
          "Tam saat"
        ],
        "answer": 1,
        "explanation": "Quarter = çeyrek (15 dk), Past = geçe ➜ \"Çeyrek geçe\"."
      },
      {
        "q": "Akşam yatıp uyumak için kullanılan İngilizce kalıp hangisidir?",
        "options": [
          "Wake up",
          "Go to bed / sleep",
          "Go to school",
          "Wash face"
        ],
        "answer": 1,
        "explanation": "Go to bed = yatağa gitmek ve uyumak."
      },
      {
        "q": "\"Get dressed\" ne demektir?",
        "options": [
          "Yemek yemek",
          "Üstünü / kıyafetlerini giyinmek",
          "Banyo yapmak",
          "Kitap okumak"
        ],
        "answer": 1,
        "explanation": "Get dressed = giyinmek anlamına gelir."
      }
    ],
    "quiz": [
      {
        "q": "\"What time is it?\" sorusunun Türkçe karşılığı nedir?",
        "options": [
          "Bugün günlerden ne?",
          "Saat kaç?",
          "Nereye gidiyorsun?",
          "Hava nasıl?"
        ],
        "answer": 1,
        "explanation": "\"What time is it?\" saati öğrenmek için sorulan temel sorudur (Saat kaç?)."
      },
      {
        "q": "Saat tam 09.00 olduğunda İngilizce nasıl söylenir?",
        "options": [
          "It is half past nine.",
          "It is nine o'clock.",
          "It is quarter past nine.",
          "It is ten o'clock."
        ],
        "answer": 1,
        "explanation": "Tam saatlerde \"o'clock\" kullanılır: \"It is nine o'clock.\""
      },
      {
        "q": "\"It is half past two.\" saat kaçı gösterir?",
        "options": [
          "02.00",
          "02.15",
          "02.30",
          "02.45"
        ],
        "answer": 2,
        "explanation": "\"Half past\" buçuk demektir: Half past two = 02.30."
      },
      {
        "q": "\"Brush teeth\" eyleminin anlamı nedir?",
        "options": [
          "Yüzünü yıkamak",
          "Dişlerini fırçalamak",
          "Saçını taramak",
          "Giyinmek"
        ],
        "answer": 1,
        "explanation": "Brush = fırçalamak, Teeth = dişler."
      },
      {
        "q": "\"I wake up ........................ seven o'clock.\" Saatlerden önce hangi edat kullanılır?",
        "options": [
          "in",
          "on",
          "at",
          "under"
        ],
        "answer": 2,
        "explanation": "Saat bildiren zaman ifadelerinin önünde daima \"at\" kullanılır (at 7 o'clock)."
      },
      {
        "q": "\"Have breakfast\" ne anlama gelir?",
        "options": [
          "Öğle yemeği yemek",
          "Akşam yemeği yemek",
          "Kahvaltı yapmak",
          "Uyumak"
        ],
        "answer": 2,
        "explanation": "Breakfast = kahvaltı ➜ Have breakfast = kahvaltı yapmak."
      },
      {
        "q": "\"Do homework\" eyleminin anlamı nedir?",
        "options": [
          "Ev ödevini yapmak",
          "Oyun oynamak",
          "Ev temizlemek",
          "Yatağa gitmek"
        ],
        "answer": 0,
        "explanation": "Do homework = ödev yapmak."
      },
      {
        "q": "\"Quarter past\" ifadesi ne anlama gelir?",
        "options": [
          "Buçuk",
          "Çeyrek geçe (15 geçe)",
          "Çeyrek kala (15 kala)",
          "Tam saat"
        ],
        "answer": 1,
        "explanation": "Quarter = çeyrek (15 dk), Past = geçe ➜ \"Çeyrek geçe\"."
      },
      {
        "q": "Akşam yatıp uyumak için kullanılan İngilizce kalıp hangisidir?",
        "options": [
          "Wake up",
          "Go to bed / sleep",
          "Go to school",
          "Wash face"
        ],
        "answer": 1,
        "explanation": "Go to bed = yatağa gitmek ve uyumak."
      },
      {
        "q": "\"Get dressed\" ne demektir?",
        "options": [
          "Yemek yemek",
          "Üstünü / kıyafetlerini giyinmek",
          "Banyo yapmak",
          "Kitap okumak"
        ],
        "answer": 1,
        "explanation": "Get dressed = giyinmek anlamına gelir."
      }
    ]
  },
  "eng-u6": {
    "id": "eng-u6",
    "subject": "İngilizce",
    "unitNo": "6. Ünite",
    "title": "Fun with Science (Bilimle Eğlence ve Deneyler)",
    "icon": "🧪",
    "steps": [
      {
        "title": "Science Lab Equipment",
        "badge": "Step 1: Lab Tools",
        "slide": "assets/images/fun_with_science.svg",
        "narration": "Put on your lab coat! Welcome to science lab. In our experiments, we use a test tube, a glass bottle, a cup, a brush, scissors, and paper towels. Always wear protective goggles to protect your eyes. Science is where curiosity turns into discovery!",
        "audio": "assets/audio/courses/eng-u6_s1.mp3"
      },
      {
        "title": "Experiment Action Verbs",
        "badge": "Step 2: Action Verbs",
        "slide": "assets/images/fun_with_science.svg",
        "narration": "Let's follow the experiment steps: \"Mix\" means blend things together. \"Pour\" means add liquid into the glass. \"Shake\" means move the bottle quickly. \"Fold\" means bend the paper. \"Cut\" means divide with scissors. Follow these instructions step by step!",
        "audio": "assets/audio/courses/eng-u6_s2.mp3"
      },
      {
        "title": "Color Mixing Magic",
        "badge": "Step 3: Color Mixing",
        "slide": "assets/images/fun_with_science.svg",
        "narration": "Colors do magic when mixed! If you mix Yellow and Blue, what do you get? You get Green! If you mix Red and Yellow, you get Orange! If you mix Red and Blue, you get Purple! Try this fun water color experiment in your class.",
        "audio": "assets/audio/courses/eng-u6_s3.mp3"
      },
      {
        "title": "Freezing and Melting",
        "badge": "Step 4: States of Water",
        "slide": "assets/images/fun_with_science.svg",
        "narration": "Water has three magical forms! Put water in the freezer, it freezes into ice. Take ice out into the warm sun, it melts back into liquid water. Boil water in a kettle, and it turns into steam. Science is fun when you observe it closely!",
        "audio": "assets/audio/courses/eng-u6_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "\"Mix yellow and blue, you get ........................\" Sarı ile maviyi karıştırırsak hangi renk olur?",
        "options": [
          "Red",
          "Green",
          "Purple",
          "Black"
        ],
        "answer": 1,
        "explanation": "Sarı (Yellow) + Mavi (Blue) = Yeşil (Green)."
      },
      {
        "q": "\"Pour the water into the glass\" talimatının anlamı nedir?",
        "options": [
          "Suyu bardağa dök",
          "Suyu buzdolabına koy",
          "Kâğıdı ikiye katla",
          "Şişeyi salla"
        ],
        "answer": 0,
        "explanation": "Pour = dökmek, Glass = bardak, Water = su."
      },
      {
        "q": "Deneylerde kullanılan \"Test tube\" kelimesinin Türkçe karşılığı nedir?",
        "options": [
          "Büyüteç",
          "Deney tüpü",
          "Makas",
          "Cetvel"
        ],
        "answer": 1,
        "explanation": "Test tube = deney tüpü demektir."
      },
      {
        "q": "\"Shake the bottle\" ne anlama gelir?",
        "options": [
          "Şişeyi aç",
          "Şişeyi salla",
          "Şişeyi kır",
          "Şişeyi boya"
        ],
        "answer": 1,
        "explanation": "Shake = sallamak, Bottle = şişe ➜ \"Şişeyi salla\"."
      },
      {
        "q": "\"Fold the paper\" talimatında \"fold\" ne demektir?",
        "options": [
          "Kesmek",
          "Katlamak",
          "Yırtmak",
          "Yapıştırmak"
        ],
        "answer": 1,
        "explanation": "Fold = katlamak anlamına gelir."
      },
      {
        "q": "Kırmızı (Red) ile Mavi (Blue) renkleri karıştırıldığında hangi renk elde edilir?",
        "options": [
          "Orange (Turuncu)",
          "Purple (Mor)",
          "Green (Yeşil)",
          "Brown (Kahverengi)"
        ],
        "answer": 1,
        "explanation": "Red + Blue = Purple (Mor)."
      },
      {
        "q": "\"Melt\" kelimesinin Türkçe karşılığı hangisidir?",
        "options": [
          "Donmak",
          "Erimek",
          "Uçmak",
          "Kaybolmak"
        ],
        "answer": 1,
        "explanation": "Melt = erimek, Freeze = donmak demektir."
      },
      {
        "q": "Deney yaparken gözlerimizi korumak için taktığımız koruyucu gözlüğe ne denir?",
        "options": [
          "Sunglasses",
          "Goggles",
          "Watch",
          "Mirror"
        ],
        "answer": 1,
        "explanation": "Laboratuvar güvenlik gözlüğüne \"Goggles\" denir."
      },
      {
        "q": "\"Cut with scissors\" ne anlama gelir?",
        "options": [
          "Makas ile kes",
          "Boya fırçasıyla boya",
          "Yapıştırıcıyla yapıştır",
          "Cetvelle ölç"
        ],
        "answer": 0,
        "explanation": "Cut = kesmek, Scissors = makas."
      },
      {
        "q": "\"Freeze the water\" ifadesi neyi anlatır?",
        "options": [
          "Suyu ısıt",
          "Suyu dondur",
          "Suyu iç",
          "Suyu temizle"
        ],
        "answer": 1,
        "explanation": "Freeze = dondurmak ➜ \"Suyu dondur\"."
      }
    ],
    "quiz": [
      {
        "q": "\"Mix yellow and blue, you get ........................\" Sarı ile maviyi karıştırırsak hangi renk olur?",
        "options": [
          "Red",
          "Green",
          "Purple",
          "Black"
        ],
        "answer": 1,
        "explanation": "Sarı (Yellow) + Mavi (Blue) = Yeşil (Green)."
      },
      {
        "q": "\"Pour the water into the glass\" talimatının anlamı nedir?",
        "options": [
          "Suyu bardağa dök",
          "Suyu buzdolabına koy",
          "Kâğıdı ikiye katla",
          "Şişeyi salla"
        ],
        "answer": 0,
        "explanation": "Pour = dökmek, Glass = bardak, Water = su."
      },
      {
        "q": "Deneylerde kullanılan \"Test tube\" kelimesinin Türkçe karşılığı nedir?",
        "options": [
          "Büyüteç",
          "Deney tüpü",
          "Makas",
          "Cetvel"
        ],
        "answer": 1,
        "explanation": "Test tube = deney tüpü demektir."
      },
      {
        "q": "\"Shake the bottle\" ne anlama gelir?",
        "options": [
          "Şişeyi aç",
          "Şişeyi salla",
          "Şişeyi kır",
          "Şişeyi boya"
        ],
        "answer": 1,
        "explanation": "Shake = sallamak, Bottle = şişe ➜ \"Şişeyi salla\"."
      },
      {
        "q": "\"Fold the paper\" talimatında \"fold\" ne demektir?",
        "options": [
          "Kesmek",
          "Katlamak",
          "Yırtmak",
          "Yapıştırmak"
        ],
        "answer": 1,
        "explanation": "Fold = katlamak anlamına gelir."
      },
      {
        "q": "Kırmızı (Red) ile Mavi (Blue) renkleri karıştırıldığında hangi renk elde edilir?",
        "options": [
          "Orange (Turuncu)",
          "Purple (Mor)",
          "Green (Yeşil)",
          "Brown (Kahverengi)"
        ],
        "answer": 1,
        "explanation": "Red + Blue = Purple (Mor)."
      },
      {
        "q": "\"Melt\" kelimesinin Türkçe karşılığı hangisidir?",
        "options": [
          "Donmak",
          "Erimek",
          "Uçmak",
          "Kaybolmak"
        ],
        "answer": 1,
        "explanation": "Melt = erimek, Freeze = donmak demektir."
      },
      {
        "q": "Deney yaparken gözlerimizi korumak için taktığımız koruyucu gözlüğe ne denir?",
        "options": [
          "Sunglasses",
          "Goggles",
          "Watch",
          "Mirror"
        ],
        "answer": 1,
        "explanation": "Laboratuvar güvenlik gözlüğüne \"Goggles\" denir."
      },
      {
        "q": "\"Cut with scissors\" ne anlama gelir?",
        "options": [
          "Makas ile kes",
          "Boya fırçasıyla boya",
          "Yapıştırıcıyla yapıştır",
          "Cetvelle ölç"
        ],
        "answer": 0,
        "explanation": "Cut = kesmek, Scissors = makas."
      },
      {
        "q": "\"Freeze the water\" ifadesi neyi anlatır?",
        "options": [
          "Suyu ısıt",
          "Suyu dondur",
          "Suyu iç",
          "Suyu temizle"
        ],
        "answer": 1,
        "explanation": "Freeze = dondurmak ➜ \"Suyu dondur\"."
      }
    ]
  },
  "eng-u7": {
    "id": "eng-u7",
    "subject": "İngilizce",
    "unitNo": "7. Ünite",
    "title": "Jobs and Occupations (Meslekler)",
    "icon": "👨‍⚕️",
    "steps": [
      {
        "title": "Popular Jobs and Professions",
        "badge": "Step 1: Jobs",
        "slide": "assets/images/jobs_professions.svg",
        "narration": "What do you want to be when you grow up? People have important jobs to help each other. A Teacher teaches students at school. A Doctor examines patients and helps them get well. A Nurse assists the doctor. A Vet cures sick animals. A Firefighter puts out fires. A Police Officer keeps our streets safe!",
        "audio": "assets/audio/courses/eng-u7_s1.mp3"
      },
      {
        "title": "More Exciting Occupations",
        "badge": "Step 2: Occupations",
        "slide": "assets/images/jobs_professions.svg",
        "narration": "There are so many wonderful jobs! A Pilot flies airplanes across the world. A Chef or Cook makes delicious meals in a restaurant. A Farmer grows fresh vegetables and fruits on a farm. A Dentist checks and cleans your teeth. An Artist paints beautiful pictures!",
        "audio": "assets/audio/courses/eng-u7_s2.mp3"
      },
      {
        "title": "Asking \"What do you do?\" and Workplaces",
        "badge": "Step 3: Workplaces",
        "slide": "assets/images/jobs_professions.svg",
        "narration": "To ask someone's job, say: \"What do you do?\" or \"What is your job?\" Answer: \"I am a doctor.\" To ask where they work, say: \"Where do you work?\" A teacher works at a school. A doctor works at a hospital. A firefighter works at a fire station. A farmer works on a farm!",
        "audio": "assets/audio/courses/eng-u7_s3.mp3"
      },
      {
        "title": "Talking About Future Dreams",
        "badge": "Step 4: Future Dreams",
        "slide": "assets/images/jobs_professions.svg",
        "narration": "What is your dream job? You can say: \"I like helping animals, so I want to be a vet.\" or \"I like airplanes, so I want to be a pilot.\" Work hard and your dream will come true!",
        "audio": "assets/audio/courses/eng-u7_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Hasta hayvanları tedavi eden doktora İngilizce ne ad verilir?",
        "options": [
          "Dentist",
          "Vet (Veterinarian)",
          "Teacher",
          "Farmer"
        ],
        "answer": 1,
        "explanation": "Vet = veteriner demektir."
      },
      {
        "q": "\"A doctor works at a ........................\" Doktor nerede çalışır?",
        "options": [
          "School",
          "Hospital",
          "Fire station",
          "Farm"
        ],
        "answer": 1,
        "explanation": "Hospital = hastane demektir."
      },
      {
        "q": "Yangınları söndüren ve insanları kurtaran meslek hangisidir?",
        "options": [
          "Police officer",
          "Firefighter",
          "Pilot",
          "Chef"
        ],
        "answer": 1,
        "explanation": "Firefighter = itfaiyeci demektir."
      },
      {
        "q": "\"What is his job?\" sorusuna verilebilecek doğru cevap hangisidir?",
        "options": [
          "He is a pilot.",
          "She is a nurse.",
          "I am ten.",
          "Yes, he is."
        ],
        "answer": 0,
        "explanation": "Özne \"his\" (onun - erkek) olduğu için cevap \"He is a pilot.\" olur."
      },
      {
        "q": "Uçakları uçuran kişiye ne ad verilir?",
        "options": [
          "Driver",
          "Pilot",
          "Sailor",
          "Farmer"
        ],
        "answer": 1,
        "explanation": "Pilot = uçak pilotu."
      },
      {
        "q": "\"Where does a teacher work?\" sorusunun cevabı hangisidir?",
        "options": [
          "At a restaurant",
          "At a school",
          "At a farm",
          "At a hospital"
        ],
        "answer": 1,
        "explanation": "Öğretmenler okulda (at a school) çalışır."
      },
      {
        "q": "Dişlerimizi kontrol eden ve tedavi eden doktora ne denir?",
        "options": [
          "Dentist",
          "Chef",
          "Artist",
          "Singer"
        ],
        "answer": 0,
        "explanation": "Dentist = diş hekimi."
      },
      {
        "q": "Tarlada sebze ve meyve yetiştiren, hayvan besleyen meslek sahibi kimdir?",
        "options": [
          "Farmer (Çiftçi)",
          "Pilot",
          "Policeman",
          "Doctor"
        ],
        "answer": 0,
        "explanation": "Farmer = çiftçi demektir."
      },
      {
        "q": "\"I want to be a doctor.\" cümlesinin anlamı nedir?",
        "options": [
          "Doktordan korkuyorum.",
          "Doktor olmak istiyorum.",
          "Doktora gidiyorum.",
          "Doktoru gördüm."
        ],
        "answer": 1,
        "explanation": "\"Want to be\" olmak istemek demektir."
      },
      {
        "q": "Restoranda lezzetli yemekler pişiren aşçıya ne denir?",
        "options": [
          "Chef / Cook",
          "Waiter",
          "Nurse",
          "Teacher"
        ],
        "answer": 0,
        "explanation": "Chef veya Cook = aşçı demektir."
      }
    ],
    "quiz": [
      {
        "q": "Hasta hayvanları tedavi eden doktora İngilizce ne ad verilir?",
        "options": [
          "Dentist",
          "Vet (Veterinarian)",
          "Teacher",
          "Farmer"
        ],
        "answer": 1,
        "explanation": "Vet = veteriner demektir."
      },
      {
        "q": "\"A doctor works at a ........................\" Doktor nerede çalışır?",
        "options": [
          "School",
          "Hospital",
          "Fire station",
          "Farm"
        ],
        "answer": 1,
        "explanation": "Hospital = hastane demektir."
      },
      {
        "q": "Yangınları söndüren ve insanları kurtaran meslek hangisidir?",
        "options": [
          "Police officer",
          "Firefighter",
          "Pilot",
          "Chef"
        ],
        "answer": 1,
        "explanation": "Firefighter = itfaiyeci demektir."
      },
      {
        "q": "\"What is his job?\" sorusuna verilebilecek doğru cevap hangisidir?",
        "options": [
          "He is a pilot.",
          "She is a nurse.",
          "I am ten.",
          "Yes, he is."
        ],
        "answer": 0,
        "explanation": "Özne \"his\" (onun - erkek) olduğu için cevap \"He is a pilot.\" olur."
      },
      {
        "q": "Uçakları uçuran kişiye ne ad verilir?",
        "options": [
          "Driver",
          "Pilot",
          "Sailor",
          "Farmer"
        ],
        "answer": 1,
        "explanation": "Pilot = uçak pilotu."
      },
      {
        "q": "\"Where does a teacher work?\" sorusunun cevabı hangisidir?",
        "options": [
          "At a restaurant",
          "At a school",
          "At a farm",
          "At a hospital"
        ],
        "answer": 1,
        "explanation": "Öğretmenler okulda (at a school) çalışır."
      },
      {
        "q": "Dişlerimizi kontrol eden ve tedavi eden doktora ne denir?",
        "options": [
          "Dentist",
          "Chef",
          "Artist",
          "Singer"
        ],
        "answer": 0,
        "explanation": "Dentist = diş hekimi."
      },
      {
        "q": "Tarlada sebze ve meyve yetiştiren, hayvan besleyen meslek sahibi kimdir?",
        "options": [
          "Farmer (Çiftçi)",
          "Pilot",
          "Policeman",
          "Doctor"
        ],
        "answer": 0,
        "explanation": "Farmer = çiftçi demektir."
      },
      {
        "q": "\"I want to be a doctor.\" cümlesinin anlamı nedir?",
        "options": [
          "Doktordan korkuyorum.",
          "Doktor olmak istiyorum.",
          "Doktora gidiyorum.",
          "Doktoru gördüm."
        ],
        "answer": 1,
        "explanation": "\"Want to be\" olmak istemek demektir."
      },
      {
        "q": "Restoranda lezzetli yemekler pişiren aşçıya ne denir?",
        "options": [
          "Chef / Cook",
          "Waiter",
          "Nurse",
          "Teacher"
        ],
        "answer": 0,
        "explanation": "Chef veya Cook = aşçı demektir."
      }
    ]
  },
  "eng-u8": {
    "id": "eng-u8",
    "subject": "İngilizce",
    "unitNo": "8. Ünite",
    "title": "My Clothes (Kıyafetlerim ve Mevsimler)",
    "icon": "👗",
    "steps": [
      {
        "title": "Seasons and the Weather",
        "badge": "Step 1: Weather",
        "slide": "assets/images/clothes_and_seasons.svg",
        "narration": "There are four beautiful seasons! In Spring, flowers bloom and it is warm. In Summer, it is hot and sunny. In Autumn, leaves fall and it is windy. In Winter, it is cold and snowy. We ask: \"What is the weather like?\" and answer: \"It is rainy today!\"",
        "audio": "assets/audio/courses/eng-u8_s1.mp3"
      },
      {
        "title": "Winter Clothes (Kışlık Giysiler)",
        "badge": "Step 2: Winter Clothes",
        "slide": "assets/images/clothes_and_seasons.svg",
        "narration": "When it is cold and freezing outside, we dress warm! We wear a heavy coat or jacket, warm boots, a knitted scarf around our neck, and gloves on our hands. If it rains, don't forget to take an umbrella!",
        "audio": "assets/audio/courses/eng-u8_s2.mp3"
      },
      {
        "title": "Summer Clothes (Yazlık Giysiler)",
        "badge": "Step 3: Summer Clothes",
        "slide": "assets/images/clothes_and_seasons.svg",
        "narration": "When the sun is shining hot, we wear light clothes: a cool T-shirt, shorts, sandals, a pretty dress or skirt. On sunny days, wear a sun hat and sunglasses to protect yourself from bright sunshine!",
        "audio": "assets/audio/courses/eng-u8_s3.mp3"
      },
      {
        "title": "Action Verbs: PUT ON and TAKE OFF",
        "badge": "Step 4: Put on & Take off",
        "slide": "assets/images/clothes_and_seasons.svg",
        "narration": "Listen to these two essential verbs! \"Put on\" means wear your clothes: \"It is cold outside, put on your coat!\" \"Take off\" means remove your clothes: \"It is warm inside, take off your jacket!\" You are now dressed for any weather!",
        "audio": "assets/audio/courses/eng-u8_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "\"What is the weather like?\" sorusunun anlamı nedir?",
        "options": [
          "Saat kaç?",
          "Hava nasıl?",
          "Nereye gidiyorsun?",
          "Kıyafetin nerede?"
        ],
        "answer": 1,
        "explanation": "Hava durumunu sormak için \"What is the weather like?\" denir."
      },
      {
        "q": "\"It is cold outside. Put on your ........................\" Soğukta dışarı çıkarken hangisi giyilir?",
        "options": [
          "T-shirt",
          "Coat / Jacket",
          "Sunglasses",
          "Swimsuit"
        ],
        "answer": 1,
        "explanation": "Soğuk havalarda kaban (coat) veya ceket (jacket) giyilir."
      },
      {
        "q": "\"Put on\" ve \"Take off\" kelimelerinin anlamları sırasıyla hangisidir?",
        "options": [
          "Giyinmek - Çıkarmak",
          "Çıkarmak - Giyinmek",
          "Açmak - Kapatmak",
          "Satın almak - Satmak"
        ],
        "answer": 0,
        "explanation": "Put on = giymek, Take off = çıkarmak."
      },
      {
        "q": "Yağmurlu havada ıslanmamak için yanımıza aldığımız eşya hangisidir?",
        "options": [
          "Sunglasses",
          "Umbrella",
          "Scarf",
          "Gloves"
        ],
        "answer": 1,
        "explanation": "Umbrella = şemsiye demektir."
      },
      {
        "q": "Yaz mevsiminde güneşten korunmak için gözümüze ne takarız?",
        "options": [
          "Boots",
          "Gloves",
          "Sunglasses",
          "Coat"
        ],
        "answer": 2,
        "explanation": "Sunglasses = güneş gözlüğü."
      },
      {
        "q": "\"Winter\" hangi mevsimdir ve havası nasıldır?",
        "options": [
          "Yaz - Sıcak",
          "İlkbahar - Ilık",
          "Kış - Soğuk ve karlı (Cold and snowy)",
          "Sonbahar - Rüzgarlı"
        ],
        "answer": 2,
        "explanation": "Winter = Kış mevsimidir."
      },
      {
        "q": "Boynumuza doladığımız kışlık aksesuara İngilizce ne denir?",
        "options": [
          "Socks",
          "Scarf (Atkı)",
          "Hat",
          "Belt"
        ],
        "answer": 1,
        "explanation": "Scarf = atkı / eşarp demektir."
      },
      {
        "q": "Ellerimizi soğuktan korumak için ne takarız?",
        "options": [
          "Gloves (Eldiven)",
          "Boots",
          "T-shirt",
          "Skirt"
        ],
        "answer": 0,
        "explanation": "Gloves = eldiven."
      },
      {
        "q": "\"It is sunny and hot.\" cümlesi hangi hava durumunu anlatır?",
        "options": [
          "Karlı ve soğuk",
          "Güneşli ve sıcak",
          "Yağmurlu ve rüzgarlı",
          "Sisli ve karanlık"
        ],
        "answer": 1,
        "explanation": "Sunny = güneşli, Hot = sıcak."
      },
      {
        "q": "\"Take off your shoes\" talimatının anlamı nedir?",
        "options": [
          "Ayakkabılarını bağla",
          "Ayakkabılarını çıkar",
          "Ayakkabılarını boya",
          "Ayakkabılarını giy"
        ],
        "answer": 1,
        "explanation": "Take off = çıkarmak, Shoes = ayakkabılar."
      }
    ],
    "quiz": [
      {
        "q": "\"What is the weather like?\" sorusunun anlamı nedir?",
        "options": [
          "Saat kaç?",
          "Hava nasıl?",
          "Nereye gidiyorsun?",
          "Kıyafetin nerede?"
        ],
        "answer": 1,
        "explanation": "Hava durumunu sormak için \"What is the weather like?\" denir."
      },
      {
        "q": "\"It is cold outside. Put on your ........................\" Soğukta dışarı çıkarken hangisi giyilir?",
        "options": [
          "T-shirt",
          "Coat / Jacket",
          "Sunglasses",
          "Swimsuit"
        ],
        "answer": 1,
        "explanation": "Soğuk havalarda kaban (coat) veya ceket (jacket) giyilir."
      },
      {
        "q": "\"Put on\" ve \"Take off\" kelimelerinin anlamları sırasıyla hangisidir?",
        "options": [
          "Giyinmek - Çıkarmak",
          "Çıkarmak - Giyinmek",
          "Açmak - Kapatmak",
          "Satın almak - Satmak"
        ],
        "answer": 0,
        "explanation": "Put on = giymek, Take off = çıkarmak."
      },
      {
        "q": "Yağmurlu havada ıslanmamak için yanımıza aldığımız eşya hangisidir?",
        "options": [
          "Sunglasses",
          "Umbrella",
          "Scarf",
          "Gloves"
        ],
        "answer": 1,
        "explanation": "Umbrella = şemsiye demektir."
      },
      {
        "q": "Yaz mevsiminde güneşten korunmak için gözümüze ne takarız?",
        "options": [
          "Boots",
          "Gloves",
          "Sunglasses",
          "Coat"
        ],
        "answer": 2,
        "explanation": "Sunglasses = güneş gözlüğü."
      },
      {
        "q": "\"Winter\" hangi mevsimdir ve havası nasıldır?",
        "options": [
          "Yaz - Sıcak",
          "İlkbahar - Ilık",
          "Kış - Soğuk ve karlı (Cold and snowy)",
          "Sonbahar - Rüzgarlı"
        ],
        "answer": 2,
        "explanation": "Winter = Kış mevsimidir."
      },
      {
        "q": "Boynumuza doladığımız kışlık aksesuara İngilizce ne denir?",
        "options": [
          "Socks",
          "Scarf (Atkı)",
          "Hat",
          "Belt"
        ],
        "answer": 1,
        "explanation": "Scarf = atkı / eşarp demektir."
      },
      {
        "q": "Ellerimizi soğuktan korumak için ne takarız?",
        "options": [
          "Gloves (Eldiven)",
          "Boots",
          "T-shirt",
          "Skirt"
        ],
        "answer": 0,
        "explanation": "Gloves = eldiven."
      },
      {
        "q": "\"It is sunny and hot.\" cümlesi hangi hava durumunu anlatır?",
        "options": [
          "Karlı ve soğuk",
          "Güneşli ve sıcak",
          "Yağmurlu ve rüzgarlı",
          "Sisli ve karanlık"
        ],
        "answer": 1,
        "explanation": "Sunny = güneşli, Hot = sıcak."
      },
      {
        "q": "\"Take off your shoes\" talimatının anlamı nedir?",
        "options": [
          "Ayakkabılarını bağla",
          "Ayakkabılarını çıkar",
          "Ayakkabılarını boya",
          "Ayakkabılarını giy"
        ],
        "answer": 1,
        "explanation": "Take off = çıkarmak, Shoes = ayakkabılar."
      }
    ]
  },
  "eng-u9": {
    "id": "eng-u9",
    "subject": "İngilizce",
    "unitNo": "9. Ünite",
    "title": "My Friends (Arkadaşlarım ve Sıfatlar)",
    "icon": "👫",
    "steps": [
      {
        "title": "Physical Appearance: Body and Height",
        "badge": "Step 1: Appearance",
        "slide": "assets/images/my_friends_adjectives.svg",
        "narration": "Friends make life wonderful! Let's describe our friends. For height: Tall (uzun boylu) or Short (kısa boylu). For weight: Slim (zayıf, narin) or Plump (balık etli, tombiş). For age: Young (genç) or Old (yaşlı). For strength: Strong (güçlü) or Weak (güçsüz). We can say: \"My friend Ali is tall and strong!\"",
        "audio": "assets/audio/courses/eng-u9_s1.mp3"
      },
      {
        "title": "Hair and Eye Descriptions",
        "badge": "Step 2: Hair & Eyes",
        "slide": "assets/images/my_friends_adjectives.svg",
        "narration": "Look at hair and eye colors! Hair can be straight (düz), wavy (dalgalı), or curly (kıvırcık). Colors can be blonde (sarı), brown (kahverengi), or dark (koyu). Eyes can be brown, blue, or green. We use \"has got\": \"Ayşe has got long curly hair and blue eyes.\"",
        "audio": "assets/audio/courses/eng-u9_s2.mp3"
      },
      {
        "title": "Personality: What is he like?",
        "badge": "Step 3: Personality",
        "slide": "assets/images/my_friends_adjectives.svg",
        "narration": "Outer look is nice, but personality is golden! Friendly (arkadaş canlısı), Kind (kibar, nazik), Helpful (yardımsever), Cheerful (neşeli), and Hardworking (çalışkan). When we ask about personality, we say: \"What is he like?\" - \"He is very kind and helpful.\"",
        "audio": "assets/audio/courses/eng-u9_s3.mp3"
      },
      {
        "title": "\"What does he look like?\" vs \"What is he like?\"",
        "badge": "Step 4: Two Key Questions",
        "slide": "assets/images/my_friends_adjectives.svg",
        "narration": "Don't confuse these two questions! \"What does he LOOK like?\" asks about outside appearance: \"He is tall with brown eyes.\" \"What IS he like?\" asks about inside personality: \"He is friendly and funny.\" You are now a master of descriptions!",
        "audio": "assets/audio/courses/eng-u9_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "Boy uzunluğunu anlatan \"Tall\" ve \"Short\" kelimelerinin anlamı nedir?",
        "options": [
          "Zayıf - Şişman",
          "Uzun boylu - Kısa boylu",
          "Genç - Yaşlı",
          "Çalışkan - Tembel"
        ],
        "answer": 1,
        "explanation": "Tall = uzun boylu, Short = kısa boylu."
      },
      {
        "q": "\"She has got curly hair.\" cümlesindeki \"curly\" ne tür bir saç şeklidir?",
        "options": [
          "Düz saç",
          "Kıvırcık saç",
          "Dalgalı saç",
          "Kısa saç"
        ],
        "answer": 1,
        "explanation": "Curly = kıvırcık demektir (Straight = düz, Wavy = dalgalı)."
      },
      {
        "q": "Bir kişinin DIŞ GÖRÜNÜŞÜNÜ sormak için hangi soru kalıbı kullanılır?",
        "options": [
          "What does he look like?",
          "What is he like?",
          "What time is it?",
          "Where is he from?"
        ],
        "answer": 0,
        "explanation": "Dış görünüş (boy, saç, göz) sorulurken \"What does he look like?\" denir."
      },
      {
        "q": "Bir kişinin KİŞİLİK VE HUYUNU sormak için hangi soru kalıbı kullanılır?",
        "options": [
          "What is he like?",
          "What does he look like?",
          "How old is he?",
          "Can he swim?"
        ],
        "answer": 0,
        "explanation": "Karakter ve kişilik özellikleri \"What is he like?\" ile sorulur."
      },
      {
        "q": "Başkalarına her zaman yardım eden bir arkadaş için hangi sıfat kullanılır?",
        "options": [
          "Rude",
          "Helpful",
          "Lazy",
          "Weak"
        ],
        "answer": 1,
        "explanation": "Helpful = yardımsever demektir."
      },
      {
        "q": "\"Slim\" sıfatının Türkçe karşılığı nedir?",
        "options": [
          "Zayıf / Narin / İnce",
          "Şişman",
          "Uzun",
          "Kıvırcık"
        ],
        "answer": 0,
        "explanation": "Slim = ince yapılı, zayıf demektir."
      },
      {
        "q": "\"He has got green eyes.\" cümlesinin anlamı nedir?",
        "options": [
          "Onun mavi gözleri var.",
          "Onun yeşil gözleri var.",
          "Onun kahverengi saçları var.",
          "Onun gözlüğü var."
        ],
        "answer": 1,
        "explanation": "Green = yeşil, Eyes = gözler."
      },
      {
        "q": "\"Friendly\" kelimesi ne anlama gelir?",
        "options": [
          "Düşmanca",
          "Arkadaş canlısı / Cana yakın",
          "Korkak",
          "Yalnız"
        ],
        "answer": 1,
        "explanation": "Friendly = dost canlısı, cana yakın."
      },
      {
        "q": "\"Strong\" sıfatının ZIT ANLAMLISI (karşıtı) hangisidir?",
        "options": [
          "Tall",
          "Weak (Zayıf / Güçsüz)",
          "Fast",
          "Young"
        ],
        "answer": 1,
        "explanation": "Strong (güçlü) kelimesinin zıddı Weak (güçsüz)'tür."
      },
      {
        "q": "\"Blonde hair\" hangi renk saçı ifade eder?",
        "options": [
          "Sarı saç",
          "Siyah saç",
          "Kızıl saç",
          "Kahverengi saç"
        ],
        "answer": 0,
        "explanation": "Blonde = sarı saç demektir."
      }
    ],
    "quiz": [
      {
        "q": "Boy uzunluğunu anlatan \"Tall\" ve \"Short\" kelimelerinin anlamı nedir?",
        "options": [
          "Zayıf - Şişman",
          "Uzun boylu - Kısa boylu",
          "Genç - Yaşlı",
          "Çalışkan - Tembel"
        ],
        "answer": 1,
        "explanation": "Tall = uzun boylu, Short = kısa boylu."
      },
      {
        "q": "\"She has got curly hair.\" cümlesindeki \"curly\" ne tür bir saç şeklidir?",
        "options": [
          "Düz saç",
          "Kıvırcık saç",
          "Dalgalı saç",
          "Kısa saç"
        ],
        "answer": 1,
        "explanation": "Curly = kıvırcık demektir (Straight = düz, Wavy = dalgalı)."
      },
      {
        "q": "Bir kişinin DIŞ GÖRÜNÜŞÜNÜ sormak için hangi soru kalıbı kullanılır?",
        "options": [
          "What does he look like?",
          "What is he like?",
          "What time is it?",
          "Where is he from?"
        ],
        "answer": 0,
        "explanation": "Dış görünüş (boy, saç, göz) sorulurken \"What does he look like?\" denir."
      },
      {
        "q": "Bir kişinin KİŞİLİK VE HUYUNU sormak için hangi soru kalıbı kullanılır?",
        "options": [
          "What is he like?",
          "What does he look like?",
          "How old is he?",
          "Can he swim?"
        ],
        "answer": 0,
        "explanation": "Karakter ve kişilik özellikleri \"What is he like?\" ile sorulur."
      },
      {
        "q": "Başkalarına her zaman yardım eden bir arkadaş için hangi sıfat kullanılır?",
        "options": [
          "Rude",
          "Helpful",
          "Lazy",
          "Weak"
        ],
        "answer": 1,
        "explanation": "Helpful = yardımsever demektir."
      },
      {
        "q": "\"Slim\" sıfatının Türkçe karşılığı nedir?",
        "options": [
          "Zayıf / Narin / İnce",
          "Şişman",
          "Uzun",
          "Kıvırcık"
        ],
        "answer": 0,
        "explanation": "Slim = ince yapılı, zayıf demektir."
      },
      {
        "q": "\"He has got green eyes.\" cümlesinin anlamı nedir?",
        "options": [
          "Onun mavi gözleri var.",
          "Onun yeşil gözleri var.",
          "Onun kahverengi saçları var.",
          "Onun gözlüğü var."
        ],
        "answer": 1,
        "explanation": "Green = yeşil, Eyes = gözler."
      },
      {
        "q": "\"Friendly\" kelimesi ne anlama gelir?",
        "options": [
          "Düşmanca",
          "Arkadaş canlısı / Cana yakın",
          "Korkak",
          "Yalnız"
        ],
        "answer": 1,
        "explanation": "Friendly = dost canlısı, cana yakın."
      },
      {
        "q": "\"Strong\" sıfatının ZIT ANLAMLISI (karşıtı) hangisidir?",
        "options": [
          "Tall",
          "Weak (Zayıf / Güçsüz)",
          "Fast",
          "Young"
        ],
        "answer": 1,
        "explanation": "Strong (güçlü) kelimesinin zıddı Weak (güçsüz)'tür."
      },
      {
        "q": "\"Blonde hair\" hangi renk saçı ifade eder?",
        "options": [
          "Sarı saç",
          "Siyah saç",
          "Kızıl saç",
          "Kahverengi saç"
        ],
        "answer": 0,
        "explanation": "Blonde = sarı saç demektir."
      }
    ]
  },
  "eng-u10": {
    "id": "eng-u10",
    "subject": "İngilizce",
    "unitNo": "10. Ünite",
    "title": "Food and Drinks (Yiyecekler ve İçecekler)",
    "icon": "🍎",
    "steps": [
      {
        "title": "Breakfast Foods (Kahvaltı Yiyecekleri)",
        "badge": "Step 1: Breakfast",
        "slide": "assets/images/food_and_drinks.svg",
        "narration": "Yummy! Welcome to our food table. Breakfast is the most important meal of the day. In the morning, we eat bread, cheese, butter, boiled eggs, olives, and honey. We drink healthy fresh milk or warm tea. Good food gives us great energy for the school day!",
        "audio": "assets/audio/courses/eng-u10_s1.mp3"
      },
      {
        "title": "Lunch and Dinner Foods",
        "badge": "Step 2: Meals",
        "slide": "assets/images/food_and_drinks.svg",
        "narration": "For lunch and dinner, we have delicious hot soup, rice, pasta, chicken, meatballs, and fresh salad. For dessert, we enjoy sweet fruits: apples, bananas, oranges, and strawberries. Healthy meals make strong bodies!",
        "audio": "assets/audio/courses/eng-u10_s2.mp3"
      },
      {
        "title": "Hungry and Thirsty: Ordering Food",
        "badge": "Step 3: Ordering",
        "slide": "assets/images/food_and_drinks.svg",
        "narration": "When your stomach rumbles, say: \"I am hungry! Can I have a sandwich, please?\" When your throat is dry, say: \"I am thirsty! Can I have some water?\" If someone offers food: \"Do you want some cake?\" You can answer: \"Yes, please!\" or politely decline: \"No, thank you, I am full.\"",
        "audio": "assets/audio/courses/eng-u10_s3.mp3"
      },
      {
        "title": "Polite Table Manners",
        "badge": "Step 4: Table Manners",
        "slide": "assets/images/food_and_drinks.svg",
        "narration": "Always use polite words at the table: \"Please\" and \"Thank you\". If someone passes the bread, say: \"Thank you very much.\" Enjoy your meals with your family and eat healthy!",
        "audio": "assets/audio/courses/eng-u10_s4.mp3"
      }
    ],
    "questions": [
      {
        "q": "\"I am hungry.\" cümlesinin anlamı nedir?",
        "options": [
          "Susadım.",
          "Karnım aç.",
          "Uykum var.",
          "Yoruldum."
        ],
        "answer": 1,
        "explanation": "Hungry = aç ➜ \"I am hungry\" = Karnım aç."
      },
      {
        "q": "\"I am thirsty.\" diyen biri ne istemektedir?",
        "options": [
          "Bir şeyler yemek ister",
          "Su veya içecek ister (Susadım)",
          "Uyumak ister",
          "Kitap ister"
        ],
        "answer": 1,
        "explanation": "Thirsty = susamış ➜ \"Susadım.\""
      },
      {
        "q": "\"Do you want some milk?\" ikramına KİBARCA KABUL cevabı hangisidir?",
        "options": [
          "No, thank you.",
          "Yes, please.",
          "I don't know.",
          "Go away."
        ],
        "answer": 1,
        "explanation": "İkramı kabul ederken \"Yes, please.\" (Evet, lütfen) denir."
      },
      {
        "q": "\"Do you want an apple?\" sorusuna KİBARCA RED cevabı hangisidir?",
        "options": [
          "Yes, please.",
          "No, thank you. I am full.",
          "I can fly.",
          "What time is it?"
        ],
        "answer": 1,
        "explanation": "Kibarca reddederken \"No, thank you. I am full.\" (Hayır teşekkürler, tokum) denir."
      },
      {
        "q": "Kahvaltıda yediğimiz \"Cheese\" kelimesinin Türkçe karşılığı nedir?",
        "options": [
          "Zeytin",
          "Peynir",
          "Yumurta",
          "Ekmek"
        ],
        "answer": 1,
        "explanation": "Cheese = peynir demektir."
      },
      {
        "q": "\"Bread\" kelimesinin anlamı nedir?",
        "options": [
          "Ekmek",
          "Bal",
          "Çorba",
          "Pilav"
        ],
        "answer": 0,
        "explanation": "Bread = ekmek demektir."
      },
      {
        "q": "Günün üç ana öğünü sırasıyla hangileridir?",
        "options": [
          "Breakfast, Lunch, Dinner",
          "Dinner, Lunch, Breakfast",
          "Snack, Lunch, Tea",
          "Morning, Night, Afternoon"
        ],
        "answer": 0,
        "explanation": "Breakfast (Kahvaltı), Lunch (Öğle yemeği), Dinner (Akşam yemeği)."
      },
      {
        "q": "Aşağıdakilerden hangisi sağlıklı bir İÇECEK (Drink) türüdür?",
        "options": [
          "Water and Milk",
          "Bread",
          "Pasta",
          "Cheese"
        ],
        "answer": 0,
        "explanation": "Water (su) ve Milk (süt) içecektir."
      },
      {
        "q": "\"Can I have some soup, please?\" cümlesinin anlamı nedir?",
        "options": [
          "Biraz çorba alabilir miyim lütfen?",
          "Çorbayı sevmem.",
          "Çorba çok sıcak.",
          "Çorbayı döktüm."
        ],
        "answer": 0,
        "explanation": "Soup = çorba ➜ \"Biraz çorba alabilir miyim lütfen?\""
      },
      {
        "q": "\"Apple, Banana, Orange, Strawberry\" grubunun genel adı nedir?",
        "options": [
          "Drinks",
          "Vegetables",
          "Fruits (Meyveler)",
          "Fast food"
        ],
        "answer": 2,
        "explanation": "Elma, muz, portakal, çilek birer meyvedir (Fruits)."
      }
    ],
    "quiz": [
      {
        "q": "\"I am hungry.\" cümlesinin anlamı nedir?",
        "options": [
          "Susadım.",
          "Karnım aç.",
          "Uykum var.",
          "Yoruldum."
        ],
        "answer": 1,
        "explanation": "Hungry = aç ➜ \"I am hungry\" = Karnım aç."
      },
      {
        "q": "\"I am thirsty.\" diyen biri ne istemektedir?",
        "options": [
          "Bir şeyler yemek ister",
          "Su veya içecek ister (Susadım)",
          "Uyumak ister",
          "Kitap ister"
        ],
        "answer": 1,
        "explanation": "Thirsty = susamış ➜ \"Susadım.\""
      },
      {
        "q": "\"Do you want some milk?\" ikramına KİBARCA KABUL cevabı hangisidir?",
        "options": [
          "No, thank you.",
          "Yes, please.",
          "I don't know.",
          "Go away."
        ],
        "answer": 1,
        "explanation": "İkramı kabul ederken \"Yes, please.\" (Evet, lütfen) denir."
      },
      {
        "q": "\"Do you want an apple?\" sorusuna KİBARCA RED cevabı hangisidir?",
        "options": [
          "Yes, please.",
          "No, thank you. I am full.",
          "I can fly.",
          "What time is it?"
        ],
        "answer": 1,
        "explanation": "Kibarca reddederken \"No, thank you. I am full.\" (Hayır teşekkürler, tokum) denir."
      },
      {
        "q": "Kahvaltıda yediğimiz \"Cheese\" kelimesinin Türkçe karşılığı nedir?",
        "options": [
          "Zeytin",
          "Peynir",
          "Yumurta",
          "Ekmek"
        ],
        "answer": 1,
        "explanation": "Cheese = peynir demektir."
      },
      {
        "q": "\"Bread\" kelimesinin anlamı nedir?",
        "options": [
          "Ekmek",
          "Bal",
          "Çorba",
          "Pilav"
        ],
        "answer": 0,
        "explanation": "Bread = ekmek demektir."
      },
      {
        "q": "Günün üç ana öğünü sırasıyla hangileridir?",
        "options": [
          "Breakfast, Lunch, Dinner",
          "Dinner, Lunch, Breakfast",
          "Snack, Lunch, Tea",
          "Morning, Night, Afternoon"
        ],
        "answer": 0,
        "explanation": "Breakfast (Kahvaltı), Lunch (Öğle yemeği), Dinner (Akşam yemeği)."
      },
      {
        "q": "Aşağıdakilerden hangisi sağlıklı bir İÇECEK (Drink) türüdür?",
        "options": [
          "Water and Milk",
          "Bread",
          "Pasta",
          "Cheese"
        ],
        "answer": 0,
        "explanation": "Water (su) ve Milk (süt) içecektir."
      },
      {
        "q": "\"Can I have some soup, please?\" cümlesinin anlamı nedir?",
        "options": [
          "Biraz çorba alabilir miyim lütfen?",
          "Çorbayı sevmem.",
          "Çorba çok sıcak.",
          "Çorbayı döktüm."
        ],
        "answer": 0,
        "explanation": "Soup = çorba ➜ \"Biraz çorba alabilir miyim lütfen?\""
      },
      {
        "q": "\"Apple, Banana, Orange, Strawberry\" grubunun genel adı nedir?",
        "options": [
          "Drinks",
          "Vegetables",
          "Fruits (Meyveler)",
          "Fast food"
        ],
        "answer": 2,
        "explanation": "Elma, muz, portakal, çilek birer meyvedir (Fruits)."
      }
    ]
  }
};

/* ================= COURSE PLAYER OYNATICI MOTORU ================= */
const CoursePlayer = (() => {
  const CP = {
    unitId: null,
    step: 0,
    speed: 1.0,
    autoAdvance: true,
    paused: false,
    tok: 0,
    audio: null,
    audioPlaying: false,
    quizActive: false,
    qIdx: 0,
    answers: [],
    score: 0,
    updateSpeakerUI: (t) => updateSpeakerUI(t)
  };

  const LTR = ['A', 'B', 'C', 'D'];

  function stopAudio() {
    CP.tok++;
    CP.audioPlaying = false;
    if (CP.audio) {
      try { CP.audio.pause(); CP.audio.currentTime = 0; } catch (e) {}
    }
    if ('speechSynthesis' in window) {
      try { speechSynthesis.cancel(); } catch (e) {}
    }
  }

    function fixPronunciation(t) {
    if (!t || typeof t !== 'string') return '';
    return t
      .replace(/\bHz\.\s*/g, 'Hazreti ')
      .replace(/\(s\.a\.v\.\)/gi, 'sallallahu aleyhi ve sellem')
      .replace(/\bs\.a\.v\./gi, 'sallallahu aleyhi ve sellem')
      .replace(/\(a\.s\.\)/gi, 'aleyhisselam')
      .replace(/\ba\.s\./gi, 'aleyhisselam')
      .replace(/\(r\.a\.\)/gi, 'radıyallahu anh')
      .replace(/\br\.a\./gi, 'radıyallahu anh')
      .replace(/\(c\.c\.\)/gi, 'celle celaluhu')
      .replace(/\bc\.c\./gi, 'celle celaluhu')
      .replace(/\bProf\.\s*Dr\.\s*/gi, 'Profesör Doktor ')
      .replace(/\bProf\.\s*/gi, 'Profesör ')
      .replace(/\bDr\.\s*/gi, 'Doktor ')
      .replace(/\bvb\./gi, 've benzeri')
      .replace(/\bvs\./gi, 've saire')
      .replace(/\börn\./gi, 'örneğin');
  }

  function playStepAudio(stepOrText, onEnd) {
    stopAudio();
    const myTok = ++CP.tok;
    const alive = () => myTok === CP.tok;
    CP.audioPlaying = true;
    updateSpeakerUI(true);

    if (!CP.audio) {
      try { CP.audio = new Audio(); } catch (e) {}
    }

    const stepObj = (typeof stepOrText === 'object' && stepOrText !== null) ? stepOrText : null;
    const text = fixPronunciation(stepObj ? stepObj.narration : String(stepOrText || ''));
    const audioUrl = stepObj ? stepObj.audio : null;

    if (audioUrl) {
      CP.audio.src = audioUrl;
      CP.audio.playbackRate = CP.speed;
      CP.audio.onended = () => {
        if (!alive()) return;
        CP.audioPlaying = false;
        updateSpeakerUI(false);
        if (onEnd) onEnd();
      };
      CP.audio.onerror = () => {
        if (!alive()) return;
        fallbackAudio(text, alive, onEnd);
      };
      const p = CP.audio.play();
      if (p !== undefined) {
        p.catch(e => {
          if (e && e.name === 'AbortError') return;
          if (!alive()) return;
          fallbackAudio(text, alive, onEnd);
        });
      }
    } else {
      fallbackAudio(text, alive, onEnd);
    }
  }

  function fallbackAudio(text, alive, onEnd) {
    if (serverVoiceOn()) {
      ttsGet(text, 'tr-TR', 'coskulu').then(url => {
        if (!alive()) return;
        if (!CP.audio) CP.audio = new Audio();
        CP.audio.src = url;
        CP.audio.playbackRate = CP.speed;
        CP.audio.onended = () => {
          if (!alive()) return;
          CP.audioPlaying = false;
          updateSpeakerUI(false);
          if (onEnd) onEnd();
        };
        CP.audio.onerror = () => {
          if (!alive()) return;
          browserSpeech(text, alive, onEnd);
        };
        const p = CP.audio.play();
        if (p !== undefined) {
          p.catch(e => {
            if (e && e.name === 'AbortError') return;
            if (!alive()) return;
            browserSpeech(text, alive, onEnd);
          });
        }
      }).catch(e => {
        if (!alive()) return;
        browserSpeech(text, alive, onEnd);
      });
    } else {
      browserSpeech(text, alive, onEnd);
    }
  }

  function browserSpeech(text, alive, onEnd) {
    if (!('speechSynthesis' in window)) {
      if (onEnd) setTimeout(onEnd, 3000);
      return;
    }
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'tr-TR';
      u.rate = 0.95 * CP.speed;
      const voices = speechSynthesis.getVoices();
      const v = voices.find(x => x.lang && x.lang.toLowerCase().startsWith('tr'));
      if (v) u.voice = v;
      u.onend = () => {
        if (!alive()) return;
        CP.audioPlaying = false;
        updateSpeakerUI(false);
        if (onEnd) onEnd();
      };
      u.onerror = (e) => {
        if (!alive() || (e && (e.error === 'interrupted' || e.error === 'canceled'))) return;
        CP.audioPlaying = false;
        updateSpeakerUI(false);
        if (onEnd) onEnd();
      };
      speechSynthesis.speak(u);
    } catch (e) {
      if (onEnd) setTimeout(onEnd, 2500);
    }
  }

  function updateSpeakerUI(talking) {
    const sp = document.getElementById('cpSpeakerPill');
    if (sp) sp.classList.toggle('talking', !!talking);
  }

  function open(unitId) {
    const lesson = COURSE_LESSONS[unitId];
    if (!lesson) {
      console.warn('Lesson not found for unitId:', unitId);
      return;
    }
    stopAudio();
    if (!CP.audio) {
      try { CP.audio = new Audio(); } catch (e) {}
    }
    CP.unitId = unitId;
    CP.step = 0;
    CP.speed = 1.0;
    CP.paused = false;
    CP.quizActive = false;

    const m = $('#modal');
    if (m) m.classList.remove('hidden');
    const mb = $('#modalBox');
    if (mb) {
      mb.classList.add('theater');
      mb.style.display = 'block';
    }

    renderStep();
    playStepAudio(lesson.steps[0], onStepEnded);
    if (lesson.steps[1] && lesson.steps[1].audio) { const pre = new Audio(); pre.src = lesson.steps[1].audio; }
  }

  function onStepEnded() {
    const lesson = COURSE_LESSONS[CP.unitId];
    if (!lesson) return;
    if (lesson.steps[CP.step + 1] && lesson.steps[CP.step + 1].audio) {
      const pre = new Audio();
      pre.src = lesson.steps[CP.step + 1].audio;
    }
    if (CP.autoAdvance && !CP.paused) {
      if (CP.step < lesson.steps.length - 1) {
        setTimeout(() => {
          if (!CP.paused && CP.autoAdvance && !CP.quizActive) {
            nextStep();
          }
        }, 1200);
      } else {
        setTimeout(() => {
          toast('🎉 Konu anlatımı bitti! Teste başlayabilirsin.');
        }, 800);
      }
    }
  }

  function toggleAutoAdvance() {
    CP.autoAdvance = !CP.autoAdvance;
    const btn = document.getElementById('cpAutoBtn');
    if (btn) {
      btn.textContent = CP.autoAdvance ? '⏩ Otomatik: Açık' : '⏸ Otomatik: Kapalı';
      btn.style.color = CP.autoAdvance ? '#86efac' : 'inherit';
    }
    toast(CP.autoAdvance ? '⏩ Otomatik ilerleme açıldı' : '⏸ Otomatik ilerleme kapatıldı');
  }

  function printWorksheet(unitId) {
    const lesson = COURSE_LESSONS[unitId || CP.unitId];
    if (!lesson) return;
    const L = ['A', 'B', 'C', 'D'];
    const qBoxes = lesson.quiz.map((q, i) => `
      <div style="border:1px solid #94a3b8;border-radius:8px;padding:12px;margin-bottom:12px;page-break-inside:avoid;background:#fff;color:#0f172a">
        <b style="font-size:13.5px;color:#1e293b">Soru ${i + 1}:</b>
        <p style="margin:5px 0 8px 0;font-size:13px;line-height:1.45;color:#1e293b">${esc(q.q).replace(/\r?\n|\\n/g, '<br>')}</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:12px">
          ${q.options.map((opt, oi) => `
            <div style="border:1px solid #cbd5e1;border-radius:6px;padding:4px 8px;background:#f8fafc;color:#1e293b">
              <b>${L[oi]})</b> ${esc(opt)}
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    const html = `
      <div style="font-family:'Segoe UI',Roboto,sans-serif;color:#0f172a;padding:24px;max-width:860px;margin:0 auto;background:#fff">
        <div style="border-bottom:2px solid #1e293b;padding-bottom:12px;margin-bottom:16px;text-align:center">
          <div style="font-size:12px;font-weight:bold;letter-spacing:1px;color:#475569">T.C. MİLLİ EĞİTİM BAKANLIĞI · 4. SINIF MÜFREDATI</div>
          <h2 style="margin:4px 0 2px 0;font-size:20px;color:#0f172a">${lesson.subject.toUpperCase()} DERSİ PEKİŞTİRME &amp; KAZANIM TESTİ</h2>
          <h3 style="margin:0 0 10px 0;font-size:15px;color:#2563eb">${esc(lesson.unitNo)}: ${esc(lesson.title)}</h3>
          <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;border-top:1px dashed #94a3b8;padding-top:8px">
            <span>Öğrencinin Adı Soyadı: .................................................</span>
            <span>Sınıfı / No: ............ / ............</span>
            <span>Tarih: ....../....../2026</span>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
          ${qBoxes}
        </div>

        <div style="margin-top:20px;border-top:2px solid #1e293b;padding-top:12px;page-break-inside:avoid">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
            <b style="font-size:13px">OPTİK CEVAP FORMU:</b>
            <div style="display:flex;gap:10px;font-size:12px">
              ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => `<span><b>${n}</b>: (A) (B) (C) (D)</span>`).join(' ')}
            </div>
          </div>
          <div style="margin-top:8px;font-size:11px;color:#64748b;text-align:center">
            Bilgi Evreni 4D Ultimate · MEB 4. Sınıf Akıllı Eğitim Portalı
          </div>
        </div>
      </div>
    `;

    if (typeof printHTML === 'function') {
      printHTML(html);
    } else {
      window.print();
    }
  }

  function renderStep() {
    const lesson = COURSE_LESSONS[CP.unitId];
    if (!lesson) return;
    const s = lesson.steps[CP.step];
    const totalSteps = lesson.steps.length;
    const mb = $('#modalBox');
    if (!mb) return;

    const timelinePercent = ((CP.step + 1) / totalSteps) * 100;

    mb.innerHTML = `
      <div class="cp-wrap">
        <!-- Başlık Barı -->
        <div class="cp-header">
          <div class="cp-header-title">
            <span style="font-size:24px">${lesson.icon}</span>
            <div>
              <h3>${esc(lesson.title)}</h3>
              <small>${esc(lesson.subject)} · ${esc(lesson.unitNo)} · Adım ${CP.step + 1} / ${totalSteps}</small>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <button class="btn sm ghost" onclick="CoursePlayer.toggleAutoAdvance()" id="cpAutoBtn" title="Anlatım bitince sonraki adıma otomatik geç" style="font-size:11px;color:${CP.autoAdvance ? '#86efac' : 'inherit'}">${CP.autoAdvance ? '⏩ Otomatik: Açık' : '⏸ Otomatik: Kapalı'}</button>
            <button class="btn sm ghost" onclick="CoursePlayer.toggleSpeed()" title="Oynatma Hızı" id="cpSpeedBtn">⚡ ${CP.speed}x</button>
            <button class="btn sm ghost" onclick="CoursePlayer.printWorksheet('${lesson.id}')" title="Bu ünitenin 10 soruluk testini A4 çalışma kağıdı olarak yazdır">🖨️ Test Çıktısı</button>
            <button class="btn sm warn" onclick="CoursePlayer.startQuiz('${lesson.id}')" title="Testi Başlat">📝 10 Soruluk Test</button>
            <button class="btn sm ghost" onclick="closeModal()" title="Kapat">✕</button>
          </div>
        </div>

        <!-- Sinematik 16:9 Video Sahnesi -->
        <div class="cp-stage">
          <img class="cp-slide-img" src="${s.slide}" alt="${esc(s.title)}"/>
          <span class="cp-step-badge">📌 ${esc(s.badge)}: ${esc(s.title)}</span>
          <div class="cp-speaker-badge" id="cpSpeakerPill">
            <span class="owl-icon">🦉</span>
            <span>Bilge Baykuş Anlatıyor</span>
          </div>
        </div>

        <!-- Zaman Çizelgesi -->
        <div class="cp-timeline" title="Ders İlerlemesi">
          <div class="cp-timeline-fill" style="width:${timelinePercent}%"></div>
        </div>

        <!-- Kontrol Çubuğu -->
        <div class="cp-controls">
          <div class="cp-ctrl-btns">
            <button class="btn sm" onclick="CoursePlayer.togglePause()" id="cpPauseBtn">${CP.paused ? '▶ Sesi Sürdür' : '⏸ Duraklat'}</button>
            <button class="btn sm ghost" onclick="CoursePlayer.replayCurrentStep()" title="Adımı Tekrar Dinle">🔄 Tekrar Dinle</button>
            ${CP.step > 0 ? `<button class="btn sm ghost" onclick="CoursePlayer.prevStep()">⏪ Önceki</button>` : ''}
            ${CP.step < totalSteps - 1 ? `<button class="btn sm ok" onclick="CoursePlayer.nextStep()">Sonraki Adım ⏩</button>` : `<button class="btn sm ok" onclick="CoursePlayer.startQuiz('${lesson.id}')">🎉 10 Soruluk Teste Geç 🎯</button>`}
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <small class="muted" style="font-size:11px">Otomatik sesli anlatım açık</small>
          </div>
        </div>
      </div>
    `;
  }

  function replayCurrentStep() {
    const lesson = COURSE_LESSONS[CP.unitId];
    if (!lesson) return;
    CP.paused = false;
    renderStep();
    playStepAudio(lesson.steps[CP.step]);
  }

  function nextStep() {
    const lesson = COURSE_LESSONS[CP.unitId];
    if (!lesson) return;
    CP.paused = false;
    if (CP.step < lesson.steps.length - 1) {
      CP.step++;
      renderStep();
      playStepAudio(lesson.steps[CP.step], onStepEnded);
      if (lesson.steps[CP.step + 1] && lesson.steps[CP.step + 1].audio) {
        const pre = new Audio();
        pre.src = lesson.steps[CP.step + 1].audio;
      }
    } else {
      startQuiz(lesson.id);
    }
  }

  function prevStep() {
    const lesson = COURSE_LESSONS[CP.unitId];
    if (!lesson) return;
    CP.paused = false;
    if (CP.step > 0) {
      CP.step--;
      renderStep();
      playStepAudio(lesson.steps[CP.step], onStepEnded);
    }
  }

  function togglePause() {
    CP.paused = !CP.paused;
    const btn = document.getElementById('cpPauseBtn');
    if (btn) btn.textContent = CP.paused ? '▶ Sesi Sürdür' : '⏸ Duraklat';

    if (CP.audio) {
      if (CP.paused) {
        try { CP.audio.pause(); } catch (e) {}
      } else {
        const p = CP.audio.play();
        if (p !== undefined) {
          p.catch(e => {
            if (e && e.name === 'AbortError') return;
          });
        }
      }
    } else if ('speechSynthesis' in window) {
      if (CP.paused) {
        try { speechSynthesis.pause(); } catch (e) {}
      } else {
        try { speechSynthesis.resume(); } catch (e) {}
      }
    }
    updateSpeakerUI(!CP.paused);
  }

  function toggleSpeed() {
    const spds = [1.0, 1.25, 1.5];
    const curIdx = spds.indexOf(CP.speed);
    CP.speed = spds[(curIdx + 1) % spds.length];
    const btn = document.getElementById('cpSpeedBtn');
    if (btn) btn.textContent = `⚡ ${CP.speed}x`;
    if (CP.audio) CP.audio.playbackRate = CP.speed;
  }

  /* --- 10 Soruluk Test Motoru --- */
  function startQuiz(unitId) {
    const lesson = COURSE_LESSONS[unitId];
    if (!lesson) return;
    stopAudio();
    CP.unitId = unitId;
    CP.quizActive = true;
    CP.qIdx = 0;
    CP.answers = [];
    CP.score = 0;

    const m = $('#modal');
    if (m) m.classList.remove('hidden');
    const mb = $('#modalBox');
    if (mb) {
      mb.classList.add('theater');
      mb.style.display = 'block';
    }

    renderQuizQ();
  }

  function renderQuizQ() {
    const lesson = COURSE_LESSONS[CP.unitId];
    if (!lesson) return;
    const q = lesson.quiz[CP.qIdx];
    const totalQ = lesson.quiz.length;
    const mb = $('#modalBox');
    if (!mb) return;

    // Soru İlerleme Noktaları
    const dotsHtml = lesson.quiz.map((_, i) => {
      let cls = '';
      if (i === CP.qIdx) cls = 'cur';
      else if (CP.answers[i] !== undefined) cls = CP.answers[i].ok ? 'ok' : 'no';
      return `<div class="cp-qdot ${cls}"></div>`;
    }).join('');

    const answered = CP.answers[CP.qIdx] !== undefined;
    const curAns = CP.answers[CP.qIdx];

    const optsHtml = q.options.map((opt, i) => {
      let cls = '';
      if (answered) {
        if (i === q.answer) cls = 'ok';
        else if (curAns && curAns.selected === i) cls = 'no';
      }
      return `
        <button class="cp-opt ${cls}" ${answered ? 'disabled' : ''} onclick="CoursePlayer.pickAnswer(${i})">
          <span style="font-weight:900;opacity:0.8">${LTR[i]})</span>
          <span>${esc(opt)}</span>
          ${answered && i === q.answer ? '<span style="margin-left:auto">✔</span>' : ''}
          ${answered && curAns && curAns.selected === i && !curAns.ok ? '<span style="margin-left:auto">✖</span>' : ''}
        </button>
      `;
    }).join('');

    mb.innerHTML = `
      <div class="cp-wrap">
        <!-- Başlık -->
        <div class="cp-header">
          <div class="cp-header-title">
            <span style="font-size:24px">🎯</span>
            <div>
              <h3>${esc(lesson.title)} · 10 Soruluk Ünite Testi</h3>
              <small>Soru ${CP.qIdx + 1} / ${totalQ} · Doğru: ${CP.score} / ${CP.answers.filter(a => a !== undefined).length}</small>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <button class="btn sm ghost" onclick="CoursePlayer.open('${lesson.id}')">🎬 Konuya Geri Dön</button>
            <button class="btn sm ghost" onclick="closeModal()">✕</button>
          </div>
        </div>

        <div class="cp-quiz-box">
          <!-- İlerleme Çubuğu -->
          <div class="cp-quiz-top">
            <span style="font-weight:800;color:var(--t)">Soru ${CP.qIdx + 1}</span>
            <div class="cp-qdots">${dotsHtml}</div>
            <span class="badge" style="background:rgba(255,255,255,0.08);color:#fff">Puan: ${CP.score * 10}</span>
          </div>

          <!-- Soru Metni -->
          <div class="cp-qtext">${esc(q.q).replace(/\r?\n|\\n/g, '<br>')}</div>

          <!-- Seçenekler -->
          <div class="cp-opts">${optsHtml}</div>

          <!-- Geri Bildirim -->
          ${answered ? `
            <div class="cp-fbk ${curAns.ok ? 'ok' : 'no'}">
              <b>${curAns.ok ? '🎉 Tebrikler! Doğru cevap.' : '❌ Dikkat! Yanlış cevap.'}</b><br>
              ${esc(q.explanation)}
            </div>
            <div style="display:flex;justify-content:flex-end;margin-top:8px">
              ${CP.qIdx < totalQ - 1 ? `<button class="btn ok" onclick="CoursePlayer.nextQuizQ()">Sonraki Soru ➡</button>` : `<button class="btn ok" onclick="CoursePlayer.finishQuiz()">🏆 Sonuçları Gör</button>`}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  function pickAnswer(idx) {
    if (CP.answers[CP.qIdx] !== undefined) return;
    const lesson = COURSE_LESSONS[CP.unitId];
    if (!lesson) return;
    const q = lesson.quiz[CP.qIdx];
    const isCorrect = idx === q.answer;
    if (isCorrect) CP.score++;
    CP.answers[CP.qIdx] = { selected: idx, ok: isCorrect };
    appSfx(isCorrect ? 'ok' : 'bad');
    renderQuizQ();
  }

  function nextQuizQ() {
    const lesson = COURSE_LESSONS[CP.unitId];
    if (!lesson) return;
    if (CP.qIdx < lesson.quiz.length - 1) {
      CP.qIdx++;
      renderQuizQ();
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    stopAudio();
    const lesson = COURSE_LESSONS[CP.unitId];
    if (!lesson) return;
    appConfetti(140);
    appSfx('win');

    const u = cur();
    const totalQ = lesson.quiz.length;
    const xpReward = Math.max(15, CP.score * 5);
    const goldReward = Math.max(5, CP.score * 3);

    if (u) {
      if (u.role === 'student') {
        if (!u.courseProgress) u.courseProgress = {};
        const prev = u.courseProgress[CP.unitId];
        if (!prev || CP.score > prev.score) {
          u.courseProgress[CP.unitId] = {
            score: CP.score,
            total: totalQ,
            completedAt: Date.now()
          };
        }
        // Sınıfa atanmış eşleşen ödev varsa otomatik tamamla ve ödüllendir
        if (u.classId) {
          db.assignments.filter(a => a.classId === u.classId && a.moduleId === CP.unitId && !a.doneBy.includes(u.id)).forEach(a => {
            a.doneBy.push(u.id);
            u.asgDone = (u.asgDone || 0) + 1;
            gain(u, a.xp || 15, a.gold || 10);
            toast('📚 Ödev tamamlandı: ' + esc(a.title));
          });
        }
      }
      gain(u, xpReward, goldReward);
      bumpStat(u, lesson.subject, CP.score >= 7);
      save();
    }

    const mb = $('#modalBox');
    if (!mb) return;

    let starText = '⭐⭐⭐';
    let remark = 'Tebrikler! Güzel Başarı.';
    if (CP.score === 10) { starText = '⭐⭐⭐⭐⭐'; remark = 'Kusursuz Şampiyon! 10\'da 10 Tam İsabet!'; }
    else if (CP.score >= 8) { starText = '⭐⭐⭐⭐'; remark = 'Harika Başarı! Konuyu çok iyi öğrenmişsin.'; }
    else if (CP.score < 5) { starText = '⭐⭐'; remark = 'Güzel Çaba! Konuyu tekrar dinleyip tekrar çözebilirsin.'; }

    const reviewRows = lesson.quiz.map((q, i) => {
      const a = CP.answers[i];
      const ok = a && a.ok;
      return `
        <div style="padding:10px 12px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid ${ok ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'};margin-bottom:8px">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
            <b>${i + 1}. Soru</b>
            <span class="badge" style="background:${ok ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'};color:${ok ? '#86efac' : '#fca5a5'}">${ok ? '✅ Doğru' : '❌ Yanlış'}</span>
          </div>
          <p style="margin:4px 0;font-size:13px">${esc(q.q).replace(/\r?\n|\\n/g, ' ')}</p>
          <div style="margin:4px 0">
            ${!ok && a && a.selected !== undefined ? `<span style="color:#fca5a5;margin-right:12px;font-size:12px">Senin Yanıtın: <b>${LTR[a.selected]}) ${esc(q.options[a.selected])}</b></span>` : ''}
            <span style="color:#86efac;font-size:12px">Doğru Yanıt: <b>${LTR[q.answer]}) ${esc(q.options[q.answer])}</b></span>
          </div>
          <small style="color:#94a3b8;display:block;margin-top:2px">💡 ${esc(q.explanation)}</small>
        </div>
      `;
    }).join('');

    mb.innerHTML = `
      <div class="cp-wrap">
        <div class="cp-summary">
          <span style="font-size:52px">🏆</span>
          <h2>${remark}</h2>
          <div style="font-size:24px;letter-spacing:4px">${starText}</div>
          <div class="cp-summary-score">${CP.score} / ${totalQ}</div>
          <p style="margin:0;font-size:14px;color:var(--m)">${esc(lesson.title)} konusunu başarıyla tamamladın!</p>

          <div style="display:flex;gap:12px;justify-content:center;margin:10px 0;flex-wrap:wrap">
            <span class="badge" style="background:rgba(234,179,8,0.2);color:#fde047;border:1px solid #eab308;padding:6px 14px;font-size:13px">⭐ +${xpReward} XP Kazanıldı</span>
            <span class="badge" style="background:rgba(245,158,11,0.2);color:#fbbf24;border:1px solid #f59e0b;padding:6px 14px;font-size:13px">🪙 +${goldReward} Altın Kazanıldı</span>
          </div>

          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:8px">
            <button class="btn ok" onclick="CoursePlayer.startQuiz('${lesson.id}')">🔄 Testi Tekrar Çöz</button>
            <button class="btn" onclick="CoursePlayer.open('${lesson.id}')">🎬 Konu Anlatımını Yeniden İzle</button>
            <button class="btn ghost" onclick="closeModal()">✅ Tamamla ve Derslere Dön</button>
          </div>
        </div>

        <div style="border-top:1px solid var(--b);padding-top:14px;margin-top:10px">
          <h4 style="margin:0 0 10px 0;font-size:14px;font-weight:800;color:var(--t)">📋 Cevap Anahtarı ve Çözüm Analizi:</h4>
          <div style="max-height:360px;overflow-y:auto;padding-right:4px">
            ${reviewRows}
          </div>
        </div>
      </div>
    `;
  }

  return {
    open,
    renderStep,
    nextStep,
    prevStep,
    replayCurrentStep,
    togglePause,
    toggleSpeed,
    stopAudio,
    startQuiz,
    renderQuizQ,
    pickAnswer,
    nextQuizQ,
    finishQuiz,
    updateSpeakerUI,
    toggleAutoAdvance,
    printWorksheet,
    isActive: () => !!CP.unitId && $('#modal') && !$('#modal').classList.contains('hidden'),
    isQuizActive: () => !!CP.quizActive,
    getAudio: () => CP.audio
  };
})();
window.CoursePlayer = CoursePlayer;


/* ================= 2025-2026 MEB 4. SINIF DERSLER & VİDEO MÜFREDATI ================= */
const COURSES_DATA = [
  {
    id: "turkce",
    name: "Türkçe",
    icon: "🇹🇷",
    color: "#ef4444",
    desc: "Dil bilgisi, anlam bilgisi, sözcükte ve cümlede anlam, metin türleri, yazım ve noktalama.",
    terms: [
      {
        term: 1,
        title: "1. Dönem Dil Bilgisi",
        units: [
          {
            id: "tr-u1",
            unitNo: "1. Ünite",
            unitTitle: "Harf-Hece ve Sözcükte Anlam",
            topics: ["Harf-Hece Bilgisi", "Sözcükte Anlam", "Mecaz Anlam", "Gerçek Anlam", "Terim Anlam"],
            videoUrl: null,
            duration: "14 dk",
            hasLesson: true
          },
          {
            id: "tr-u2",
            unitNo: "2. Ünite",
            unitTitle: "Kelime Yapısı ve Anlam İlişkileri",
            topics: ["Basit, Türemiş ve Bileşik Sözcükler", "Eş Anlamlı Kelimeler", "Zıt Anlamlı Kelimeler", "Eşsesli (Sesteş) Kelimeler"],
            videoUrl: null,
            duration: "16 dk",
            hasLesson: true
          },
          {
            id: "tr-u3",
            unitNo: "3. Ünite",
            unitTitle: "Metin Türleri ve Deyimler",
            topics: ["Metin Türleri", "Deyimler ve Anlamları"],
            videoUrl: null,
            duration: "12 dk",
            hasLesson: true
          },
          {
            id: "tr-u4",
            unitNo: "4. Ünite",
            unitTitle: "Sözcük Türleri ve Cümlenin Öğeleri",
            topics: ["İsimler-Adlar", "Durum (Hal) Ekleri", "Sıfatlar-Önadlar", "Zamirler", "Fiiller-Eylemler", "Cümlenin Öğeleri"],
            videoUrl: null,
            duration: "18 dk",
            hasLesson: true
          }
        ]
      },
      {
        term: 2,
        title: "2. Dönem Anlam Bilgisi, Yazım & Görsel Okuma",
        units: [
          {
            id: "tr-u5",
            unitNo: "5. Ünite",
            unitTitle: "Cümlede Anlam ve Yargılar",
            topics: ["Öznel ve Nesnel Yargılar", "Neden Sonuç Cümleleri", "Karşılaştırma İfadeleri", "Açıklayıcı İfadeler", "Genel ve Özel İfadeler"],
            videoUrl: null,
            duration: "15 dk",
            hasLesson: true
          },
          {
            id: "tr-u6",
            unitNo: "6. Ünite",
            unitTitle: "Yazım Kuralları ve Noktalama İşaretleri",
            topics: ["Büyük Harflerin Kullanımı ve Yazım Kuralları", "Noktalama İşaretleri"],
            videoUrl: null,
            duration: "14 dk",
            hasLesson: true
          },
          {
            id: "tr-u7",
            unitNo: "7. Ünite",
            unitTitle: "Metin Türleri, Görsel Okuma ve Söz Sanatları",
            topics: ["Metin Türleri", "Görsel Okuma ve Grafik Yorumlama", "Söz Sanatları (Betimleme)"],
            videoUrl: null,
            duration: "15 dk",
            hasLesson: true
          }
        ]
      }
    ]
  },
  {
    id: "matematik",
    name: "Matematik",
    icon: "📐",
    color: "#3b82f6",
    desc: "Doğal sayılarla 4 işlem, kesirler, zaman ve veri, geometri, uzamsal ilişkiler ve ölçmeler.",
    terms: [
      {
        term: 1,
        title: "1. Dönem Sayılar, İşlemler, Kesirler & Zaman",
        units: [
          {
            id: "mat-u1",
            unitNo: "1. Ünite",
            unitTitle: "Doğal Sayılarla Toplama ve Çıkarma",
            topics: ["4, 5 ve 6 Basamaklı Doğal Sayılar", "Doğal Sayılarla Toplama İşlemi", "Doğal Sayılarla Çıkarma İşlemi", "Problem Çözme ve Kurma"],
            videoUrl: null,
            duration: "18 dk",
            hasLesson: true
          },
          {
            id: "mat-u2",
            unitNo: "2. Ünite",
            unitTitle: "Doğal Sayılarla Çarpma ve Bölme",
            topics: ["Doğal Sayılarla Çarpma İşlemi", "Kısa Yoldan Çarpma", "Doğal Sayılarla Bölme İşlemi", "Bölme İşleminde Kalanı Yorumlama"],
            videoUrl: null,
            duration: "20 dk",
            hasLesson: true
          },
          {
            id: "mat-u3",
            unitNo: "3. Ünite",
            unitTitle: "Kesirler ve Kesirlerle İşlemler",
            topics: ["Birim Kesir ve Kesir Çeşitleri", "Kesirleri Sayı Doğrusunda Gösterme", "Kesirlerle Toplama İşlemi", "Kesirlerle Çıkarma İşlemi"],
            videoUrl: null,
            duration: "16 dk",
            hasLesson: true
          },
          {
            id: "mat-u4",
            unitNo: "4. Ünite",
            unitTitle: "Zamanı Ölçme ve Veri Değerlendirme",
            topics: ["Zamanı Ölçme Birimleri Arasındaki İlişki", "Zaman Problemleri", "Veri Toplama ve Çetele/Sıklık Tablosu", "Sütun Grafiği Oluşturma ve Yorumlama"],
            videoUrl: null,
            duration: "15 dk",
            hasLesson: true
          }
        ]
      },
      {
        term: 2,
        title: "2. Dönem Geometri, Uzamsal İlişkiler & Ölçme",
        units: [
          {
            id: "mat-u5",
            unitNo: "5. Ünite",
            unitTitle: "Geometrik Cisimler, Şekiller ve Uzamsal İlişkiler",
            topics: ["Geometrik ve Şekiller Cisimler", "Geometride Temel Kavramlar (Nokta, Doğru, Işın, Açı)", "Açı Çeşitleri ve Ölçme", "Uzamsal İlişkiler ve Simetri"],
            videoUrl: null,
            duration: "18 dk",
            hasLesson: true
          },
          {
            id: "mat-u6",
            unitNo: "6. Ünite",
            unitTitle: "Uzunluk, Çevre ve Alan Ölçme",
            topics: ["Uzunluk Ölçme Birimleri ve Dönüşümleri", "Düzlemsel Şekillerin Çevre Uzunluğu", "Alan Ölçme ve Birim Kareler"],
            videoUrl: null,
            duration: "17 dk",
            hasLesson: true
          },
          {
            id: "mat-u7",
            unitNo: "7. Ünite",
            unitTitle: "Tartma ve Sıvı Ölçme",
            topics: ["Tartma Birimleri (Kilogram, Gram, Ton, Miligram)", "Tartma Problemleri", "Sıvı Ölçme Birimleri (Litre, Mililitre)", "Sıvı Ölçme Problemleri"],
            videoUrl: null,
            duration: "15 dk",
            hasLesson: true
          }
        ]
      }
    ]
  },
  {
    id: "fen",
    name: "Fen Bilimleri",
    icon: "🔬",
    color: "#10b981",
    desc: "Bilime yolculuk, sağlıklı besinler, Dünya'nın hareketleri, maddenin halleri, mıknatıs, elektrik ve ışık.",
    terms: [
      {
        term: 1,
        title: "1. Dönem Bilim, Besinler, Dünya & Madde",
        units: [
          {
            id: "fen-u1",
            unitNo: "1. Ünite",
            unitTitle: "Bilime Yolculuk",
            topics: ["Bilimin Özellikleri", "Bilgi Kaynaklarının Güvenilirliği", "Bilimsel Araştırma Basamakları"],
            videoUrl: null,
            duration: "12 dk",
            hasLesson: true
          },
          {
            id: "fen-u2",
            unitNo: "2. Ünite",
            unitTitle: "Sağlıklı Besleniyorum",
            topics: ["Besinlerin İçerikleri (Karbonhidrat, Protein, Yağ, Vitamin, Su ve Mineraller)", "Dengeli Beslenme ve Sağlıklı Yaşam", "Besin İsrafının Önlenmesi"],
            videoUrl: null,
            duration: "14 dk",
            hasLesson: true
          },
          {
            id: "fen-u3",
            unitNo: "3. Ünite",
            unitTitle: "Dünya'mızı Keşfedelim",
            topics: ["Dünya’nın Şekli ve Katmanları", "Dünya’nın Yapısı (Yer Kabuğu ve Kayaçlar)", "Dünya’nın Hareketleri (Kendi Ekseni Etrafında Dönme ve Güneş Etrafında Dolanma)"],
            videoUrl: null,
            duration: "16 dk",
            hasLesson: true
          },
          {
            id: "fen-u4",
            unitNo: "4. Ünite",
            unitTitle: "Maddenin Değişimi",
            topics: ["Maddenin Hâl Değişimleri (Erime, Donma, Buharlaşma)", "Maddelerin Isı Etkisiyle Değişimi (Isınma, Soğuma, Genleşme ve Büzülme)"],
            videoUrl: null,
            duration: "15 dk",
            hasLesson: true
          }
        ]
      },
      {
        term: 2,
        title: "2. Dönem Mıknatıs, Enerji, Işık & Sürdürülebilirlik",
        units: [
          {
            id: "fen-u5",
            unitNo: "5. Ünite",
            unitTitle: "Mıknatısı Keşfediyorum",
            topics: ["Mıknatısın Kutupları (N ve S) ve Etkileşimleri (İtme-Çekme)", "Mıknatısın Etki Ettiği Maddeler (Demir, Nikel, Kobalt)", "Mıknatısın Günlük Hayatta ve Teknolojide Kullanım Alanları"],
            videoUrl: null,
            duration: "14 dk",
            hasLesson: true
          },
          {
            id: "fen-u6",
            unitNo: "6. Ünite",
            unitTitle: "Enerji Dedektifleri",
            topics: ["Basit Elektrik Devresi Elemanları (Pil, Anahtar, Kablo, Ampul)", "Devre Bağlantısı ve Devre Durumu (Açık ve Kapalı Devre)", "Yenilenebilir ve Yenilenemeyen Enerji Kaynakları"],
            videoUrl: null,
            duration: "16 dk",
            hasLesson: true
          },
          {
            id: "fen-u7",
            unitNo: "7. Ünite",
            unitTitle: "Işığın Peşinde",
            topics: ["Işığın Görmedeki Rolü", "Doğal ve Yapay Işık Kaynakları", "Işık Kirliliği ve Olumsuz Etkileri"],
            videoUrl: null,
            duration: "13 dk",
            hasLesson: true
          },
          {
            id: "fen-u8",
            unitNo: "8. Ünite",
            unitTitle: "Sürdürülebilir Şehirler ve Topluluklar",
            topics: ["Sürdürülebilir Yaşam Becerileri", "Geri Dönüşüm ve Sıfır Atık", "Doğal Kaynakların Tasarruflu Kullanımı"],
            videoUrl: null,
            duration: "12 dk",
            hasLesson: true
          }
        ]
      }
    ]
  },
  {
    id: "sosyal",
    name: "Sosyal Bilgiler",
    icon: "🌍",
    color: "#f59e0b",
    desc: "Birlikte yaşamak, evimiz dünya ve harita bilgisi, ortak mirasımız, cumhuriyet ve ekonomi.",
    terms: [
      {
        term: 1,
        title: "1. Dönem Birey, Toplum, Dünya & Miras",
        units: [
          {
            id: "sos-u1",
            unitNo: "1. Ünite",
            unitTitle: "Birlikte Yaşamak",
            topics: ["Sosyal Bilgiler Dersinin Hayatımıza Katkıları", "Bireysel Özelliklere ve Farklılıklara Saygı Duyma", "Empati ve İletişim", "Toplumsal Birliğin Sürdürülmesi"],
            videoUrl: null,
            duration: "13 dk",
            hasLesson: true
          },
          {
            id: "sos-u2",
            unitNo: "2. Ünite",
            unitTitle: "Evimiz Dünya",
            topics: ["Temel Harita Bilgisi ve Harita Türleri", "Yönler ve Pusula Kullanımı", "Doğa-İnsan İlişkisi", "Afetlerin Etkilerinin Azaltılması ve Afet Bilinci"],
            videoUrl: null,
            duration: "15 dk",
            hasLesson: true
          },
          {
            id: "sos-u3",
            unitNo: "3. Ünite",
            unitTitle: "Ortak Mirasımız",
            topics: ["Geçmişten Bugüne Oyun ve Oyuncak", "Ailenin Tarihi ve Sözlü Tarih", "Yakın Çevredeki Ortak Miras ve Kültürel Ögeler"],
            videoUrl: null,
            duration: "14 dk",
            hasLesson: true
          }
        ]
      },
      {
        term: 2,
        title: "2. Dönem Demokrasi, Ekonomi & Teknoloji",
        units: [
          {
            id: "sos-u4",
            unitNo: "4. Ünite",
            unitTitle: "Yaşayan Demokrasimiz",
            topics: ["Cumhuriyete Giden Yolda Mustafa Kemal Atatürk ve Türk Milleti", "Milli Mücadele Kahramanları", "Cumhuriyetin Getirdiği Yenilikler ve Haklar", "Okulda Demokratik Katılım ve Seçimler"],
            videoUrl: null,
            duration: "18 dk",
            hasLesson: true
          },
          {
            id: "sos-u5",
            unitNo: "5. Ünite",
            unitTitle: "Hayatımızdaki Ekonomi",
            topics: ["Doğal Kaynakların Tüketimi ve Tasarruf", "İstek ve İhtiyaçlar Arasındaki Fark", "Bilinçli Tüketici Davranışları", "Ürünlerin Yolculuğu (Üretim, Dağıtım, Tüketim)"],
            videoUrl: null,
            duration: "14 dk",
            hasLesson: true
          },
          {
            id: "sos-u6",
            unitNo: "6. Ünite",
            unitTitle: "Teknoloji ve Sosyal Bilimler",
            topics: ["Çevrim İçi Ortamda Güvenlik Kuralları ve Dijital Ayak İzi", "Teknolojinin Olumlu ve Olumsuz Yönleri", "Bilim İnsanlarının Çocukluk Hayatları ve Buluşları"],
            videoUrl: null,
            duration: "15 dk",
            hasLesson: true
          }
        ]
      }
    ]
  },
  {
    id: "din",
    name: "Din Kültürü",
    icon: "🕌",
    color: "#8b5cf6",
    desc: "Günlük hayatta dini ifadeler, Allah sevgisi, peygamberlerin sevgisi, ahlaki değerler ve dualar.",
    terms: [
      {
        term: 1,
        title: "1. Dönem Günlük Hayat, Allah ve Peygamber Sevgisi",
        units: [
          {
            id: "din-u1",
            unitNo: "1. Ünite",
            unitTitle: "Günlük Hayat ve Din",
            topics: ["Günlük Hayatta Dinî İfadeler (Selam, Besmele, Şükür)", "Allah Temiz Olmamı İster", "Allah Şükretmemi İster", "Allah Sağlıklı Beslenmemi İster", "Bir Dua Öğreniyorum: Sübhaneke Duası"],
            videoUrl: null,
            duration: "15 dk",
            hasLesson: true
          },
          {
            id: "din-u2",
            unitNo: "2. Ünite",
            unitTitle: "Allah Sevgisi",
            topics: ["Allah’ı Tanıyorum (Yaratan ve Koruyan)", "Allah Bizi Seviyor ve Rızık Veriyor", "Allah’a Dua Ediyorum", "Kelimeitevhit ve Kelimeişehadet", "Bir Dua Öğreniyorum: Amentü Duası"],
            videoUrl: null,
            duration: "16 dk",
            hasLesson: true
          },
          {
            id: "din-u3",
            unitNo: "3. Ünite",
            unitTitle: "Peygamberlerin Sevgisi",
            topics: ["Peygamberler Çocukları Sever", "Peygamberler Toplumlarını Sever", "Peygamberler Çevreyi ve Hayvanları Sever", "Peygamberler Çalışmayı Sever", "Bir Dua Öğreniyorum: Salli ve Barik Duaları"],
            videoUrl: null,
            duration: "16 dk",
            hasLesson: true
          }
        ]
      },
      {
        term: 2,
        title: "2. Dönem Ahlaki Değerler, Haklar & Dualar",
        units: [
          {
            id: "din-u4",
            unitNo: "4. Ünite",
            unitTitle: "Ahlaki Değerlerimiz",
            topics: ["Adalet ve Doğruluk", "Sabır ve Kararlılık", "Yardımseverlik ve Paylaşma", "Bir Sure Öğreniyorum: Fatiha Suresi ve Anlamı"],
            videoUrl: null,
            duration: "14 dk",
            hasLesson: true
          },
          {
            id: "din-u5",
            unitNo: "5. Ünite",
            unitTitle: "Haklar ve Sorumluluklar",
            topics: ["Kişisel Haklar ve Haklara Saygı", "Mahremiyet ve Özel Alan", "Allah’a Karşı Sorumluluklarım", "İnsanlara ve Çevreye Karşı Sorumluluklarım", "Bir Dua Öğreniyorum: Rabbena Duaları"],
            videoUrl: null,
            duration: "15 dk",
            hasLesson: true
          }
        ]
      }
    ]
  },
  {
    id: "ingilizce",
    name: "İngilizce",
    icon: "🇬🇧",
    color: "#ec4899",
    desc: "Classroom rules, nationality, cartoon characters, free time, science, jobs and daily routines.",
    terms: [
      {
        term: 1,
        title: "1. Dönem Communication, Identity & Free Time",
        units: [
          {
            id: "eng-u1",
            unitNo: "1. Ünite",
            unitTitle: "Classroom Rules (Sınıf Kuralları)",
            topics: ["Classroom instructions (Open your book, Listen carefully)", "Asking for permission (May I come in?)", "Polite expressions"],
            videoUrl: null,
            duration: "12 dk",
            hasLesson: true
          },
          {
            id: "eng-u2",
            unitNo: "2. Ünite",
            unitTitle: "Nationality (Millet)",
            topics: ["Countries and Nationalities (Turkey - Turkish, England - English)", "Where are you from? - I'm from...", "Flags and languages"],
            videoUrl: null,
            duration: "13 dk",
            hasLesson: true
          },
          {
            id: "eng-u3",
            unitNo: "3. Ünite",
            unitTitle: "Cartoon Characters (Çizgi Film Karakterleri)",
            topics: ["Favorite cartoon characters", "Expressing abilities (can / can't)", "Describing physical features"],
            videoUrl: null,
            duration: "14 dk",
            hasLesson: true
          },
          {
            id: "eng-u4",
            unitNo: "4. Ünite",
            unitTitle: "Free Time (Boş Zaman)",
            topics: ["Free time activities (riding a bike, reading, drawing)", "Likes and dislikes (I like / I don't like)", "Action verbs"],
            videoUrl: null,
            duration: "13 dk",
            hasLesson: true
          },
          {
            id: "eng-u5",
            unitNo: "5. Ünite",
            unitTitle: "My Day (Günüm)",
            topics: ["Daily routines (wake up, brush teeth, have breakfast)", "Telling the time (What time is it?)", "Time expressions (in the morning, at night)"],
            videoUrl: null,
            duration: "15 dk",
            hasLesson: true
          }
        ]
      },
      {
        term: 2,
        title: "2. Dönem Science, Jobs, Clothes, Friends & Food",
        units: [
          {
            id: "eng-u6",
            unitNo: "6. Ünite",
            unitTitle: "Fun with Science (Bilimle Eğlence)",
            topics: ["Simple science experiments", "Shapes and colors", "Science tools and lab directions"],
            videoUrl: null,
            duration: "14 dk",
            hasLesson: true
          },
          {
            id: "eng-u7",
            unitNo: "7. Ünite",
            unitTitle: "Jobs (Meslekler)",
            topics: ["Occupations (teacher, doctor, pilot, engineer)", "What do you do? / What does she do?", "Workplaces (hospital, school, airport)"],
            videoUrl: null,
            duration: "14 dk",
            hasLesson: true
          },
          {
            id: "eng-u8",
            unitNo: "8. Ünite",
            unitTitle: "My Clothes (Kıyafetlerim)",
            topics: ["Clothing items (t-shirt, trousers, dress, shoes)", "Weather and seasons", "What are you wearing?"],
            videoUrl: null,
            duration: "13 dk",
            hasLesson: true
          },
          {
            id: "eng-u9",
            unitNo: "9. Ünite",
            unitTitle: "My Friends (Arkadaşlarım)",
            topics: ["Describing friends", "Appearance and personality adjectives (tall, kind, cheerful)", "Simple comparisons"],
            videoUrl: null,
            duration: "13 dk",
            hasLesson: true
          },
          {
            id: "eng-u10",
            unitNo: "10. Ünite",
            unitTitle: "Food and Drinks (Yiyecek ve İçecekler)",
            topics: ["Food and beverage vocabulary (soup, bread, juice, apple)", "Expressing hunger and thirst", "Ordering and offering (Would you like...?)"],
            videoUrl: null,
            duration: "14 dk",
            hasLesson: true
          }
        ]
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.COURSE_LESSONS = COURSE_LESSONS;
  window.COURSES_DATA = COURSES_DATA;
}
