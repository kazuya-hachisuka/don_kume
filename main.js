const totalTime = new Date('2024/03/02') //未来の日付 2024-03-02
const countDownId = setInterval(() => {
  const currentTime = new Date();

  //ミリ秒を計算する
  const diff = totalTime - currentTime;

  //ミリ秒を整数の秒数に変換する
  const day = Math.floor(diff /(24 * 60 * 60 * 1000));
  const hour = "0" + Math.floor(diff /(1000 * 60 * 60) % 24);
  const min = "0" + Math.floor(diff /(60 * 1000) % 60);
  const sec = "0" + Math.ceil(diff /1000 % 60);

  // let label = `残り${day}日 ${hour.slice(-2)}:${min == 60 ? "00": min.slice(-2)}:${sec == 60 ? "00" : sec.slice(-2)}`;
  let dayLabel = day;
  let hourLabel = hour.slice(-2);
  let minLabel = min == 60 ? "00" : min.slice(-2);
  let secLable = sec == 60 ? "00" : sec.slice(-2);
  //0秒以下になったら
  if (diff <= 0) {
    //カウントダウンを終了する
    clearInterval(countDownId);

    //カウントダウン終了時の文言を表示
    label = 'The World is Yours!!!';
    let labelStyle =  document.getElementById('label');
    labelStyle.style.fontSize = '70px';
    labelStyle.style.fontFamily = 'Carter One, cursive';
    document.querySelector('#label').innerHTML = label;
    document.getElementsByClassName('counter')[0].style.marginTop = '260px';
    document.getElementsByTagName('h2')[0].innerHTML = 'Don Kume !!!';
    document.getElementsByTagName('h2')[0].style.fontFamily = 'Carter One, cursive';
    document.getElementsByTagName('h2')[0].style.color = 'rgb(241, 44, 44)';

  }
  //画面に表示する
  if (dayLabel <= 0){
    document.querySelector('#dayLabel').innerHTML = '00';
  }else{
    document.querySelector('#dayLabel').innerHTML = dayLabel;
  }

  document.querySelector('#hourLabel').innerHTML = hourLabel;
  document.querySelector('#minLabel').innerHTML = minLabel;
  document.querySelector('#secLabel').innerHTML = secLable;
}, 1000);