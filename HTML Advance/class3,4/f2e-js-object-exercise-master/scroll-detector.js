// 所有導覽列中的連結nav-link
//querySelectorAll("css selector")
const navLinkList = document.querySelectorAll('.navbar a.nav-link'),
    // 導覽列
    navbar = document.getElementById('navbar'),
    // 滑動資訊報告元件
    scrollReport = document.getElementById('scrollReport');

// TODO: 建立章節資訊查詢表
/* 
 * {
 *    section1: {section: sectionDOM, navLink: navLinkDOM},
 *    section2: {...}, ...
 * }
 */
//search chart
const nav = {};
//use loop to take out the data inside the navLinkList
//.forEach() works like a for loop but it can only increment by 1
//you can create your data set but you need to do: data-VariableName
navLinkList.forEach(function(link){
    //loop to take out from each section
    //console.log("hyperLink:", link);
    //console.dir(link);
    const sid = link.dataset.target;
    //nav["section1"] = {};
    //nav["section2"] = {};
    //....
    nav[sid] = {
        //hyperLink
        navLink: link,
        //sections
        section: document.getElementById(sid)
    };
});
console.log("search chart:", nav);

// 綁定視窗(window)的滾動事件(scroll)
// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
window.addEventListener('scroll', function () {
    // TODO: 取得視窗的直向滑動偵測點(scrollY)
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
    // get the location of the scroll by using window.scrollY
    const y = window.scrollY + navbar.offsetHeight;
    scrollReport.innerText = `sroll location: ${y}`;
    // use loop to pull out the data in nav
    for(let sid in nav){
        
        //get the hyperLink and section's DOM
        const navlink = nav[sid].navLink;
        const section = nav[sid].section;
        //get the top location for all sections
        const top = section.offsetTop,
              bottom = section.offsetHeight + top;
        //console.log(top,  bottom);
        //determine the location to see if the location is between top and bottom
        if(y > top && y < bottom){
            const positionReport = " I'm in: " + sid;
            scrollReport.innerText += positionReport;
            navlink.classList.add("text-warning");
            section.classList.add("active");
        }
        else{
            // im outside of the section remove the light up effect
            navlink.classList.remove("text-warning");
            section.classList.remove("active");
        }
    }
    // TODO: 取得每個章節的所在位置頂邊座標(offsetTop)、底邊座標(offsetTop + offsetHeight)
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
})