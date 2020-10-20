// 成績計算表單
const scoreForm = document.getElementById('scoreForm');
// 各科目分數輸入框
const zhInput = document.getElementById('chineseScoreInput');
const enInput = document.getElementById('englishScoreInput');
const mathInput = document.getElementById('mathScoreInput');
// 報告顯示區塊
const reportDiv = document.getElementById('result');

scoreForm.addEventListener('submit', function (e) {
    // 防止表單重整畫面
    e.preventDefault();
    // TODO: 取得各科目成績
    // to convert string into number you can do: 1. variableName.valueAsNumber 2. parseInt(variableName);
    // parseInt is more preferred
        let enScore = parseInt(enInput.value);
        let zhScore = parseInt(zhInput.value);
        let mathScore = parseInt(mathInput.value);
        // console.log("enScore:", enScore);
        // console.log("zhScore:", zhScore);
        // console.log("mathScore:", mathScore);
    // TODO: 計算總分
        let totalScore = enScore + zhScore + mathScore;
        //console.log("totalScore:", totalScore);
    // TODO: 計算平均分數
    //rounding decimals use Math.round to round up your number
    //rounding to decimal you can multiply the number by what the place you want the round then divid the number by the same number after rounding    
    //for example, Math.round(3.1415 * 100) /100
    //to round up the number anyways use Math.ceil()
    //to round down the number anyways use math.floor()
        let avgScore = Math.round(totalScore / 3*100) / 100;
        //console.log("avgScore;", avgScore);
    // TODO: 計算等級
    // 平均分數 >= 90 為A+
        let letterGrade;
        let color = "secondary";
        if(avgScore >= 90)
        {
            letterGrade = "A+";
            color = "success";
        }
    // 平均分數 >= 80 為A
        else if(avgScore >= 80)
        {
            letterGrade = "A";
            color = "info";
        }
    // 平均分數 >= 70 為B
        else if(avgScore >= 70)
        {
            letterGrade = "B";
            color = "primary";
        }
    // 平均分數 >= 60 為C
        else if(avgScore >= 60)
        {
            letterGrade = "C";
            color = "warning";
        }
    // 平均分數 < 60 為F。
        else{
            letterGrade = "F";
            color = "danger"
        }
        
    // TODO: 顯示報告
        const report = `<div class= 'alert alert-${color}'>
                            Chinese Score: ${zhScore} <br>
                            English Score: ${enScore} <br>
                            Math Score: ${mathScore} <br>
                            Total Score: ${totalScore} <br>
                            Average Score: ${avgScore} <br>
                            Letter grade: ${letterGrade}
                        </div>`
        reportDiv.innerHTML = report + reportDiv.innerHTML;

});