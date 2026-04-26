//  ספירה בצד שרת של תוצאות ההצבעה
 let votes = {
      real: 0,
      AI: 0
    };

    //  קליטת ההצבעה של המשתמש מהכפתור.
    function vote(type){
      votes[type]++;
      alert("ההצבעה נקלטה!");


    //  בכך שעובר על כל הכפתורים הנמצאים בדיב div button -לאחר ההצבעה, מונע לחיצה חוזרת על הכפתורים אשר נמצאים ב
                const buttons = document.querySelectorAll('div button');
  buttons.forEach(btn => {
    btn.disabled = true;
    });
    }

// הצגת לוח תוצאות ההצבעה
    function showResults() {
      const resultsDiv = document.getElementById("results");
      resultsDiv.style.display = "block";
      resultsDiv.innerHTML = `
        אמיתי: ${votes.real} הצבעות <br>
        ${votes.AI} הצבעות :AI
        `;}