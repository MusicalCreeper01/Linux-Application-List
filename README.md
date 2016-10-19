# Linux Application List

Node module for parsing `/usr/share/applications` to get a list of the installed/launchable applications and their info.

If `/usr/share/applications` is not avaliable it will also try to search `/usr/local/share/applications` or `~/.local/share/applications` before untimitly return undefined if none are avaliable

# Install

`npm install linux-app-list`

# Usage 
```
const linux_apps = require('linux-app-list')();
if(linux_apps == undefined){
    console.error("Failed to load apps module.");
    return;
}

linux_apps.list().forEach(function(app){
    var data = linux_apps.data(app);
    if(data == undefined){
        console.log("    " + app + " - Unable to get info");
    }else{
        console.log("    " + app);
        console.log(data);
    }
});
```

# Functions

`#.list()`

Gets a list of all the applications. Returns a string array of the filenames.

`#.data(<string app>)`

Get the data for the passed app. The string should be the name of the file without the extension, as returned from `#.list()`. Returns a JSON object.

Localizations are available via object.lang.<code e.g "en">.

#Sample Data Output

```
{ absolutepath: '/usr/share/applications/org.gnome.Nautilus.desktop',
  lang: 
   { ' af ': { Name: 'Lêers', Keywords: [Object] },
     ' an ': 
      { Name: 'Fichers',
        Comment: 'Accedir a os fichers y organizar-los',
        Keywords: [Object] },
     ' ar ': 
      { Name: 'نافذة جديدة',
        Comment: 'نظم الملفات وصِل إليها',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' as ': 
      { Name: 'ফাইলসমূহ',
        Comment: 'অভিগম কৰক আৰু ফাইলসমূহ আয়োজিত কৰক',
        Keywords: [Object] },
     ' ast ': 
      { Name: 'Ficheros',
        Comment: 'Acceder a los ficheros y organizalos' },
     ' be ': 
      { Name: 'Файлы',
        Comment: 'Доступ і кіраванне файламі',
        Keywords: [Object] },
     ' bg ': 
      { Name: 'Нов прозорец',
        Comment: 'Достъп и управление на файлове',
        Keywords: [Object] },
     ' bn ': { Name: 'ফাইল', Comment: 'ফাইলে ব্যবাহর এবং সাজানো' },
     ' bn_IN ': 
      { Name: 'ফাইল',
        Comment: 'ফাইলগুলি অ্যাক্সেস এবং সংগঠিত করুন',
        Keywords: [Object] },
     ' bs ': 
      { Name: 'Datoteke',
        Comment: 'Pristupite i organizujte datoteke',
        Keywords: [Object] },
     ' ca ': { Name: 'Fitxers' },
     ' ca@valencia ': 
      { Name: 'Fitxers',
        Comment: 'Organitzeu i accediu a fitxers',
        Keywords: [Object] },
     ' crh ': 
      { Name: 'Dosyeler',
        Comment: 'Dosyelerge iriş ve olarnı tertiple',
        Keywords: [Object] },
     ' cs ': 
      { Name: 'Nové okno',
        Comment: 'Přístup k souborům a jejich správa',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' da ': 
      { Name: 'Nyt vindue',
        Comment: 'Tilgå og organisér filer',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' de ': 
      { Name: 'Neues Fenster',
        Comment: 'Auf Dateien zugreifen und diese organisieren',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' el ': 
      { Name: 'Νέο παράθυρο',
        Comment: 'Προσπελάστε και οργανώστε αρχεία',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' en_CA ': { Name: 'Files', Comment: 'Access and organize files' },
     ' en_GB ': 
      { Name: 'New Window',
        Comment: 'Access and organise files',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' eo ': 
      { Name: 'Dosieroj',
        Comment: 'Atingi kaj organizi dosierojn',
        Keywords: [Object] },
     ' es ': 
      { Name: 'Ventana nueva',
        Comment: 'Acceder a los archivos y organizarlos',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' et ': 
      { Name: 'Failid',
        Comment: 'Ligipääs failidele ning failipuu korrastamine',
        Keywords: [Object] },
     ' eu ': 
      { Name: 'Leiho berria',
        Comment: 'Atzitu eta antolatu fitxategiak',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' fa ': 
      { Name: 'پنجره نو',
        Comment: 'دسترسی و سازماندهی پرونده‌ها',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' fi ': 
      { Name: 'Uusi ikkuna',
        Comment: 'Käsittele ja järjestä tiedostoja',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' fr ': 
      { Name: 'Nouvelle fenêtre',
        Comment: 'Accéder aux fichiers et les organiser',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' fur ': 
      { Name: 'Gnûf barcon',
        Comment: 'Dopre e organize file',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' ga ': 
      { Name: 'Comhaid',
        Comment: 'Déan rochtain ar chomhaid agus eagraigh iad' },
     ' gd ': 
      { Name: 'Uinneag ùr',
        Comment: 'Faigh cothrom air faidhlichean is rianaich iad',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' gl ': 
      { Name: 'Nova xanela',
        Comment: 'Acceda e organice ficheiros',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' gu ': 
      { Name: 'ફાઇલો',
        Comment: 'ફાઇલોને વાપરો અને સંચાલિત કરો',
        Keywords: [Object] },
     ' he ': 
      { Name: 'חלון חדש',
        Comment: 'גישה לקבצים וארגונם',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' hi ': 
      { Name: 'फ़ाइल',
        Comment: 'फ़ाइलों को व्यवस्थित और पहुँच प्राप्त करें',
        Keywords: [Object] },
     ' hr ': 
      { Name: 'Novi prozor',
        Comment: 'Pristupite i organizirajte datoteke',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' hu ': 
      { Name: 'Új ablak',
        Comment: 'Fájlok elérése és rendszerezése',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' id ': 
      { Name: 'Jendela Baru',
        Comment: 'Mengakses dan mengelola berkas',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' is ': 
      { Name: 'Nýr gluggi',
        Comment: 'Aðgangur og skipulag skráa',
        Keywords: [Object] },
     ' it ': 
      { Name: 'Nuova finestra',
        Comment: 'Accede ai file e li organizza',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' ja ': 
      { Name: '新しいウィンドウ',
        Comment: 'ファイルの操作や整理をします',
        Keywords: [Object] },
     ' kk ': 
      { Name: 'Жаңа терезе',
        Comment: 'Файлдарға қатынау және оларды реттеу',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' kn ': 
      { Name: 'ಕಡತಗಳು',
        Comment: 'ಕಡತಗಳನ್ನು ನಿಲುಕಿಸಿಕೊಳ್ಳಿ ಹಾಗು ವ್ಯವಸ್ಥಿತವಾಗಿ ಜೋಡಿಸಿ',
        Keywords: [Object] },
     ' ko ': 
      { Name: '새 창',
        Comment: '파일 조작 및 정리',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' ky ': { Name: 'Файлдар' },
     ' ln ': 
      { Name: 'Lininísa ya sika',
        Comment: 'Koyíngela mpe kobɔngisa ya kásá',
        Keywords: [Object] },
     ' lt ': 
      { Name: 'Naujas langas',
        Comment: 'Atverti ir tvarkyti failus',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' lv ': 
      { Name: 'Jauns logs',
        Comment: 'Piekļūt un organizēt datnes',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' mk ': 
      { Name: 'Датотеки',
        Comment: 'Пристапувајте и организирајте датотеки' },
     ' ml ': 
      { Name: 'ഫയലുകള്‍',
        Comment: 'ഫയലുകള്‍ ലഭ്യമാക്കി ക്രമത്തിലാക്കുക',
        Keywords: [Object] },
     ' mr ': 
      { Name: 'फाइल्स्',
        Comment: 'फाइल्स्ला प्रवेश द्वया व संघटित करा',
        Keywords: [Object] },
     ' ms ': { Name: 'Fail-fail', Comment: 'Akses dan mengurus fail-fail' },
     ' nb ': 
      { Name: 'Nytt vindu',
        Comment: 'Utforsk og organiser filer',
        Keywords: [Object] },
     ' ne ': { Name: 'फाइलहरू' },
     ' nl ': 
      { Name: 'Nieuw venster',
        Comment: 'Bestanden gebruiken en organiseren',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' nn ': { Name: 'Filer', Comment: 'Aksesser og organiser filer' },
     ' oc ': 
      { Name: 'Fenèstra novèla',
        Comment: 'Accedir als fichièrs e los organizar',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' or ': 
      { Name: 'ଫାଇଲଗୁଡିକ',
        Comment: 'ଫାଇଲମାନଙ୍କୁ ଅଭିଗମ କରନ୍ତୁ ଏବଂ ସଙ୍ଗଠନ କରନ୍ତୁ',
        Keywords: [Object] },
     ' pa ': 
      { Name: 'ਨਵੀਂ ਵਿੰਡੋ',
        Comment: 'ਫਾਇਲਾਂ ਦੀ ਵਰਤੋਂ ਤੇ ਪਰਬੰਧ',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' pl ': 
      { Name: 'Nowe okno',
        Comment: 'Organizowanie plików',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' pt ': 
      { Name: 'Nova janela',
        Comment: 'Aceder e organizar ficheiros',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' pt_BR ': 
      { Name: 'Nova janela',
        Comment: 'Acesse e organize arquivos',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' ro ': 
      { Name: 'Fișiere',
        Comment: 'Accesați și organizați fișiere',
        Keywords: [Object] },
     ' ru ': 
      { Name: 'Создать окно',
        Comment: 'Управление файлами',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' sk ': 
      { Name: 'Nové okno',
        Comment: 'Prístupuje k súborom a organizuje ich',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' sl ': 
      { Name: 'Novo okno',
        Comment: 'Dostop in razvrščanje datotek',
        Keywords: [Object] },
     ' sr ': 
      { Name: 'Нови прозор',
        Comment: 'Приступите датотекама и организујте их',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' sr@latin ': 
      { Name: 'Novi prozor',
        Comment: 'Pristupite datotekama i organizujte ih',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' sv ': 
      { Name: 'Nytt fönster',
        Comment: 'Kom åt och organisera filer',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' ta ': 
      { Name: 'கோப்புகள்',
        Comment: 'கோப்புகளை அணுகு மற்றும் ஒழுங்கு படுத்து',
        Keywords: [Object] },
     ' te ': 
      { Name: 'దస్త్రాలు',
        Comment: 'దస్త్రాలను నిర్వహించండి మరియు ప్రాప్తించండి',
        Keywords: [Object] },
     ' tg ': 
      { Name: 'Файлҳо',
        Comment: 'Кушодан ва мураттабсозии файлҳо',
        Keywords: [Object] },
     ' th ': 
      { Name: 'หน้าต่างใหม่',
        Comment: 'เข้าถึงและจัดระเบียบแฟ้ม',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' tr ': 
      { Name: 'Yeni Pencere',
        Comment: 'Dosyalara erişin ve düzenleyin',
        Keywords: [Object] },
     ' ug ': 
      { Name: 'ھۆججەتلەر',
        Comment: 'ھۆججەتلەرنى تەشكىللەش ۋە زىيارەت',
        Keywords: [Object] },
     ' uk ': 
      { Name: 'Нове вікно',
        Comment: 'Доступ до файлів',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' vi ': 
      { Name: 'Cửa sổ mới',
        Comment: 'Truy cập và tổ chức tập tin',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' },
     ' zh_CN ': { Name: '新建窗口', Comment: '访问和组织文件', Keywords: [Object] },
     ' zh_HK ': { Name: '檔案', Comment: '存取與組織檔案', Keywords: [Object] },
     ' zh_TW ': 
      { Name: '新增視窗',
        Comment: '存取與組織檔案',
        Keywords: [Object],
        Icon: 'org.gnome.Nautilus' } },
  Name: 'Nautilus',
  Comment: 'Access and organize files',
  Keywords: [ 'folder', 'manager', 'explore', 'disk', 'filesystem' ],
  Exec: 'nautilus',
  Icon: 'org.gnome.Nautilus',
  Terminal: 'false',
  Type: 'Application',
  DBusActivatable: 'true',
  StartupNotify: 'true',
  Categories: [ 'GNOME', 'GTK', 'Utility', 'Core', 'FileManager' ],
  MimeType: [ 'inode/directory', 'application/x-gnome-saved-search' ],
  'X-GNOME-Bugzilla-Bugzilla': 'GNOME',
  'X-GNOME-Bugzilla-Product': 'nautilus',
  'X-GNOME-Bugzilla-Component': 'general',
  'X-GNOME-Bugzilla-Version': '@VERSION@',
  'X-GNOME-UsesNotifications': 'true',
  Actions: [ 'new-window' ] }
```

# Known Issues & TODO

 * Right now Actions are not fully supported, they will be ignored if found in the desktop entry. 
     * (Is/Will be) Fixed: Withing next could versions

## Release History

* 1.0.0 Initial release
* 1.0.0 Package typo fix
