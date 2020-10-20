/*
 * TODO: 串接ipinfo.io服務取得使用者的IP資訊，並顯示結果於網頁上
 * https://ipinfo.io/
 * 一個可回傳用戶端IP資訊的公開API服務
 */


const getIPBtn = document.getElementById('getIPBtn'),
    reportDiv = document.getElementById('reportDiv');

const token = "bf057a1f2f8edc";
// Ip info API origin
const url = `https://ipinfo.io?token=${token}`;
console.log("ip infor API:" , url);
// we bound #getIpBtn to an event
getIPBtn.addEventListener('click', function () {
    getIPBtn.setAttribute("disabled", "true");
    getIPBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading';
    // console.log('[按鈕被點擊了]');
    // console.log("A")
    //sent a request to info server through axios
    axios
        .get(url)
        // run when the server has finish the request and received a return from the server
        .then(function(res){
        //     console.log("B")
        //     console.log("success:", res)
        //     console.log("return data:", res.data);
            getIPBtn.removeAttribute("disabled");
            getIPBtn.innerHTML = "Get IP Info";
            const data = res.data;
            const reportHTML = `<div class = "alert alert-success">
                Country: ${data.country}  <br>
                City: ${data.city}        <br>
                Organization: ${data.org}    <br>
                IP address: ${data.ip}
            </div>`
            //console.log("reportHTML:", reportHTML);
            reportDiv.innerHTML = reportHTML;
        })
        // run when the server has an error appear when it is processing the request
        .catch(function(err){        
            console.log("error:", err)
            const reportHTML = '<h4 class = "alert alert-danger">Error</h4>'
            reportDiv.innerHTML = reportHTML;
            getIPBtn.removeAttribute("disabled");
            getIPBtn.innerHTML = "Get IP Info";
        })
    //console.log("C");
});