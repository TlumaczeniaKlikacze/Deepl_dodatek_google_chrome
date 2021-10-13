let db = [
    {
        original:'<p>',
        for_deepl:'/!x!d!/'
    },
    {
        original:'<strong>',
        for_deepl:'/!f!/'
    },
    {
        original:'<ul>',
        for_deepl:'/!p@#!/'
    },
    {
        original:'<li>',
        for_deepl:'/!xxx!/'
    },
    {
        original:'<table>',
        for_deepl:'/!tx!/'
    },
    {
        original:'<tbody>',
        for_deepl:'/!xtx!/'
    },
    {
        original:'<tr>',
        for_deepl:'/!xt!x!/'
    },
    {
        original:'<th>',
        for_deepl:'/!q!t!x!/'
    },
    {
        original:'<thead>',
        for_deepl:'/!q!t!/'
    },
    {
        original:'<td>',
        for_deepl:'/!o!/'
    },
    {
        original:'<caption>',
        for_deepl:'/@!xe!/'
    },
    {
        original:'<colgroup>',
        for_deepl:'/!df!/'
    },
    {
        original:'<col>',
        for_deepl:'/!l!/'
    },
    {
        original:'<tfoot>',
        for_deepl:'/!t!/'
    },
    {
        original:'<br>',
        for_deepl:'/!b!/'
    },
    {
        original:'<br/>',
        for_deepl:'/!bx!e!/'
    },
    {
        original:'</br>',
        for_deepl:'/!b!de!/'
    },
    {
        original:'</p>',
        for_deepl:'/!q!d!/'
    },
    {
        original:'</strong>',
        for_deepl:'/!j!/'
    },
    {
        original:'</ul>',
        for_deepl:'/!z@#!/'
    },
    {
        original:'</li>',
        for_deepl:'/!xx!x!/'
    },
    {
        original:'</table>',
        for_deepl:'/!t!x!/'
    },
    {
        original:'</tbody>',
        for_deepl:'/!x!tx!/'
    },
    {
        original:'</tr>',
        for_deepl:'/!x!t!x!/'
    },
    {
        original:'</th>',
        for_deepl:'/!q!t!q!/'
    },
    {
        original:'</thead>',
        for_deepl:'/!q!q!/'
    },
    {
        original:'</td>',
        for_deepl:'/!w!/'
    },
    {
        original:'</caption>',
        for_deepl:'/@!ie!/'
    },
    {
        original:'</colgroup>',
        for_deepl:'/!a!f!/'
    },{
        original:'</col>',
        for_deepl:'/!n!/'
    },{
        original:'</tfoot>',
        for_deepl:'/!c!/'
    },{
        original:'</br>',
        for_deepl:'/!k!/'
    }

]
const tags = ['span','div','h1','h2','h3','h4','h5','h6','section','article','aside','main',"img",'a',"head","meta","title","link"]
const good_tags = ['p','strong','ul','li','table','tbody','tr','th','thead','td',"caption",'colgroup','col','tfoot','br']
const interval = setInterval(() => {
    if(document.querySelector("#tableRowTextEditTabs_0")){
        clearInterval(interval)
        const container = document.querySelector("#tableRowTextEditTabs_0").childNodes[1]
const el = document.createElement('li')
el.innerHTML = "Deepl_click_1"
el.className = '_tableRowTextEditTabs_tab_wysiwig';
el.style.color ="green"
el.id="Deepl_for_free_translate"
container.appendChild(el)
const el2 = document.createElement('li')
el2.innerHTML = "Deepl_click_2"
el2.className = '_tableRowTextEditTabs_tab_wysiwig';
el2.style.color = 'blue'
el2.id = "Deepl_reverse_tag";
container.appendChild(el2)
document.querySelector("#Deepl_reverse_tag").addEventListener("click",()=>{
    console.log('xddd')
    let text_html = document.querySelector("#tableRowTextEditTabs_container_html_area_0")
    let text = text_html.value;
    for(let _=0;_<db.length;_++){
        //zamieniam tagi na inne tagi lol xd
        if(text.includes(db[_].for_deepl)){
            //jesli zawiera w sobie
            text = text.replace(new RegExp(`${db[_].for_deepl}`,'g'),`\n${db[_].original}\n`)
        }
    }
    text_html.value = text;
    document.querySelector("#tableRowTextEditTabs_tab_preview_0").childNodes[0].click()
})

document.querySelector("#Deepl_for_free_translate").addEventListener('click',()=>{

    const button_edit = document.querySelector("#tableRowTextEditTabs_tab_html_0").childNodes[0].click()//pobieram przycisk
    let text_html = document.querySelector("#tableRowTextEditTabs_container_html_area_0")
    let text= text_html.value
    text_html.value = ''
    let ready_text = ``
    let tmp;
    let tmp2
    let splitet_text = text.split('<')
    for(let _=0;_<splitet_text.length;_++){
        tmp = splitet_text[_].split(">")
        tmp2= tmp[0].split(' ')
        if(tmp[1] != undefined){
            for(let __ =0;__<tags.length;__++){
                if(tmp2[0] == tags[__] || tmp2[0] == `/${tags[__]}`){
                    if(tmp[1].trim() != undefined){
                        if(tmp2[0] == "h1" || tmp2[0] == "h2"|| tmp2[0] == "h3" || tmp2[0] == "h4" || tmp2[0] == "h5"|| tmp2[0] == "h6"){
                            console.log(tmp2[0])
                            ready_text +=`<strong>${tmp[1]}`
                        }else if(tmp2[0] == "/h1" || tmp2[0] == "/h2"|| tmp2[0] == "/h3" || tmp2[0] == "/h4" || tmp2[0] == "/h5"|| tmp2[0] == "/h6"){
                            ready_text +=`</strong>${tmp[1]}`
                        }else{
                            ready_text +=tmp[1]
                        }
                    }
                    break;
                }
            }
            for(let ___=0;___<good_tags.length;___++){
                if(tmp2[0] == good_tags[___] || tmp2[0] == `/${good_tags[___]}`){
                   if(tmp2[0][0] == '/'){
                    ready_text += `${tmp[1]}<${tmp2[0]}>`
                   }else{
                    ready_text += `<${tmp2[0]}>${tmp[1]}`
                   }
                    break;
                }
            }
        }
    }
    let p = new RegExp(/<p>\s{1,}<[/]p>/g)
    let strong =  new RegExp(/<strong>\s{1,}<[/]strong>/g)
  

    ready_text = ready_text.replace(p,"")
    ready_text = ready_text.replace(strong,"")
    

// let reg = new RegExp(/(?<=\<).+?(?=\>)/g)
for(let _=0;_<db.length;_++){
    //zamieniam tagi na inne tagi lol xd
    if(ready_text.includes(db[_].original)){
        //jesli zawiera w sobie
        ready_text = ready_text.replace(new RegExp(`${db[_].original}`,'g'),`\n${db[_].for_deepl}\n`)
    }
}
text_html.value = ready_text;
text_html.select();
document.execCommand("copy")
text_html.value = ``;
})
    }
}, 200);

