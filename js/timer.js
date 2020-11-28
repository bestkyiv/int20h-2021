function fulltime() {
    var time = new Date();
    var newYear = new Date("Feb,20,2021,09:30:00");
    var totalRemains = (newYear.getTime() - time.getTime());

    if (totalRemains > 1) {

        var RemainsSec = (parseInt(totalRemains / 1000));
        var RemainsFullDays = (parseInt(RemainsSec / (24 * 60 * 60)));
        if (RemainsFullDays < 10) {
            RemainsFullDays = "0" + RemainsFullDays;
        }
        var secInLastDay = RemainsSec - RemainsFullDays * 24 * 3600;
        var RemainsFullHours = (parseInt(secInLastDay / 3600));
        if (RemainsFullHours < 10) {
            RemainsFullHours = "0" + RemainsFullHours
        };
        var secInLastHour = secInLastDay - RemainsFullHours * 3600;
        var RemainsMinutes = (parseInt(secInLastHour / 60));
        if (RemainsMinutes < 10) {
            RemainsMinutes = "0" + RemainsMinutes
        };
        var lastSec = secInLastHour - RemainsMinutes * 60;
        if (lastSec < 10) {
            lastSec = "0" + lastSec
        };
        /*document.getElementById("RemainsFullDays").innerHTML = RemainsFullDays + "<br/><span id='Rem'> Днів</span>";
        document.getElementById("RemainsFullHours").innerHTML = RemainsFullHours + "<br/><span id='Rem'> Годин</span>";
        document.getElementById("RemainsMinutes").innerHTML = RemainsMinutes + "<br/><span id='Rem'> Хвилин</span>";
        document.getElementById("lastSec").innerHTML = lastSec + "<br/><span id='Rem'> Секунд</span>";*/
        document.getElementById("datas").innerHTML =
            `<div id="clockdiv">
            <div>
              <span>` + RemainsFullDays + `</span>
              <div class="smalltext">Днів</div>
            </div>
            <div>
              <span>` + RemainsFullHours + `</span>
              <div class="smalltext">Годин</div>
            </div>
            <div>
              <span>` + RemainsMinutes + `</span>
              <div class="smalltext">Хвилин</div>
            </div>
            <div>
              <span>` + lastSec + `</span>
              <div class="smalltext">Секунд</div>
            </div>
          </div>`;
        //RemainsFullDays + ':' + RemainsFullHours + ':' + RemainsMinutes + ':' + lastSec;
        setTimeout('fulltime()', 10)
    } else {
        document.getElementById("datas").innerHTML =
            `<div id="clockdiv">
        <div>
          <span>00</span>
          <div class="smalltext">Днів</div>
        </div>
        <div>
          <span>00</span>
          <div class="smalltext">Годин</div>
        </div>
        <div>
          <span>00</span>
          <div class="smalltext">Хвилин</div>
        </div>
        <div>
          <span>00</span>
          <div class="smalltext">Секунд</div>
        </div>
      </div>`;
    }
}

function fulltime_mob() {
    var time = new Date();
    var newYear = new Date("feb,20,2021,09:30:00");
    var totalRemains = (newYear.getTime() - time.getTime());

    if (totalRemains > 1) {

        var RemainsSec = (parseInt(totalRemains / 1000));
        var RemainsFullDays = (parseInt(RemainsSec / (24 * 60 * 60)));
        var secInLastDay = RemainsSec - RemainsFullDays * 24 * 3600;
        var RemainsFullHours = (parseInt(secInLastDay / 3600));
        if (RemainsFullHours < 10) {
            RemainsFullHours = "0" + RemainsFullHours
        };
        var secInLastHour = secInLastDay - RemainsFullHours * 3600;
        var RemainsMinutes = (parseInt(secInLastHour / 60));
        if (RemainsMinutes < 10) {
            RemainsMinutes = "0" + RemainsMinutes
        };
        var lastSec = secInLastHour - RemainsMinutes * 60;
        if (lastSec < 10) {
            lastSec = "0" + lastSec
        };

        /*document.getElementById("RemainsFullDays").innerHTML = RemainsFullDays + "<br/><span id='Rem'> Днів</span>";
        document.getElementById("RemainsFullHours").innerHTML = RemainsFullHours + "<br/><span id='Rem'> Годин</span>";
        document.getElementById("RemainsMinutes").innerHTML = RemainsMinutes + "<br/><span id='Rem'> Хвилин</span>";
        document.getElementById("lastSec").innerHTML = lastSec + "<br/><span id='Rem'> Секунд</span>";*/
        document.getElementById("datas-mobile").innerHTML =
            `<div id="clockdivphone">
            <div>
              <span>` + RemainsFullDays + `</span>
              <div class="smalltextphone">Днів</div>
            </div>
            <div>
              <span>` + RemainsFullHours + `</span>
              <div class="smalltextphone">Годин</div>
            </div>
            <div>
              <span>` + RemainsMinutes + `</span>
              <div class="smalltextphone">Хвилин</div>
            </div>
            <div>
              <span>` + lastSec + `</span>
              <div class="smalltextphone">Секунд</div>
            </div>
          </div>`;
        setTimeout('fulltime_mob()', 10)
    } else {
        document.getElementById("datas-mobile").innerHTML =
            `<div id="clockdivphone">
        <div>
          <span>00</span>
          <div class="smalltextphone">Днів</div>
        </div>
        <div>
          <span>00</span>
          <div class="smalltextphone">Годин</div>
        </div>
        <div>
          <span>00</span>
          <div class="smalltextphone">Хвилин</div>
        </div>
        <div>
          <span>00</span>
          <div class="smalltextphone">Секунд</div>
        </div>
      </div>`;
    }
}