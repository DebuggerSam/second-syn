const CharTimeout = 20; // скорость печатания
const StoryTimeout = 3000000; // время ожидания перед переключением

const Summaries = new Array();
const SiteLinks = new Array();

  Summaries[0] = `БрухИм  haбаИм , дорогой посетитель нашего сайта! Мы рады, что ты зашел к нам на сайт
  Надеемся, здесь ты найдешь ответы на интересующие тебя вопросы,
    касающиеся нашей Читинской синагоги. Читинская синагога была построена около 1880 года. На пожертвования купцов-евреев
  В 1920 году синагога отошла государству, после этого там был госпиталь для военных. И примерно лет 25 назад Нам удолось вернуть часть здания для воссоздания священного еста евреев. Раньше мы находились в другом крыле здания, но после заезда сюда УИН (уголовно исполнительной инспекции), им стало неудобно, то что евреи ходили по всему зданию и поэтому нам выделили другое помещение с отдельным входом, который находится с торца Синагоги. У нас в Синагоги есть компьютерный класс-библиотека, кухня и зона где мы обсуждаем недельные главы Торы, а так же просто проводим время за игрой в шахматы или обычным общением. Если ты еврей и хочешь восстановить связь с еврейским народом, то будем рады тебя видеть в нашей Синагоги`;


function startTicker(){
  massiveItemCount =  Number(Summaries.length);
  CurrentStory     = -1;
  CurrentLength    = 0;
  AnchorObject     = document.getElementById("Ticker");
  runTheTicker();
}
function runTheTicker(){
  let myTimeout;
  if(CurrentLength == 0){
    CurrentStory++;
    CurrentStory      = CurrentStory % massiveItemCount;
    StorySummary      = Summaries[CurrentStory].replace(/"/g,'-');
    AnchorObject.href = SiteLinks[CurrentStory];
  }
  AnchorObject.innerHTML = StorySummary.substring(0,CurrentLength) + znak();
  if(CurrentLength != StorySummary.length){
    CurrentLength++;
    myTimeout = CharTimeout;
  } else {
    CurrentLength = 0;
    myTimeout = StoryTimeout;
  }
  setTimeout("runTheTicker()", myTimeout);
}
// Генератор подстановки знака
function znak(){
  if(CurrentLength == StorySummary.length) return "";
  else return "|";
}

startTicker();