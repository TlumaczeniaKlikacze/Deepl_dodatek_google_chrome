let db = [
    {
        original:'<p>',
        for_deepl:'|9425|'
    },
    {
        original:'<strong>',
        for_deepl:'|9325|'
    },
    {
        original:'<ul>',
        for_deepl:'|9324|'
    },
    {
        original:'<li>',
        for_deepl:'|9323|'
    },
    {
        original:'<table>',
        for_deepl:'|9322|'
    },
    {
        original:'<tbody>',
        for_deepl:'|9321|'
    },
    {
        original:'<tr>',
        for_deepl:'|9320|'
    },
    {
        original:'<th>',
        for_deepl:'|9319|'
    },
    {
        original:'<thead>',
        for_deepl:'|9318|'
    },
    {
        original:'<td>',
        for_deepl:'|9317|'
    },
    {
        original:'<caption>',
        for_deepl:'|9316|'
    },
    {
        original:'<colgroup>',
        for_deepl:'|9315|'
    },
    {
        original:'<col>',
        for_deepl:'|9314|'
    },
    {
        original:'<tfoot>',
        for_deepl:'|9313|'
    },
    {
        original:'<br>',
        for_deepl:'|9312|'
    },
    {
        original:'<br/>',
        for_deepl:'|9311|'
    },
    {
        original:'</br>',
        for_deepl:'|9310|'
    },
    {
        original:'</p>',
        for_deepl:'|9309|'
    },
    {
        original:'</strong>',
        for_deepl:'|9308|'
    },
    {
        original:'</ul>',
        for_deepl:'|9307|'
    },
    {
        original:'</li>',
        for_deepl:'|9306|'
    },
    {
        original:'</table>',
        for_deepl:'|9305|'
    },
    {
        original:'</tbody>',
        for_deepl:'|9304|'
    },
    {
        original:'</tr>',
        for_deepl:'|9303|'
    },
    {
        original:'</th>',
        for_deepl:'|9302|'
    },
    {
        original:'</thead>',
        for_deepl:'|9301|'
    },
    {
        original:'</td>',
        for_deepl:'|9300|'
    },
    {
        original:'</caption>',
        for_deepl:'|9299|'
    },
    {
        original:'</colgroup>',
        for_deepl:'|9298|'
    },{
        original:'</col>',
        for_deepl:'|9297|'
    },{
        original:'</tfoot>',
        for_deepl:'|9296|'
    },{
        original:'</br>',
        for_deepl:'|9295|'
    }

]
const tags = ['span','div','h1','h2','h3','h4','h5','h6','section','article','aside','main',"img",'a',"head","meta","title","small","link","big","body","center","dd","dl","dt","em","embed","font","form","hr","html","input","marquee","menu","option","strike"]
    const good_tags = ['p','strong','ul','li','table','tbody','tr','th','thead','td',"caption",'colgroup','col','tfoot','br',"ol"]
const interval = setInterval(() => {
    if(document.querySelector("#tableRowTextEditTabs_0")){
        clearInterval(interval)
        for(let _=0;_<30;_++){
            if(document.querySelector(`a[href="#divIdshopLangDesc_${_}"]`)!=null){
                    work(_)
            }
        }
    }


}, 200);
const work = (num)=>{
    const container = document.querySelector(`#tableRowTextEditTabs_${num}`).childNodes[1]
    const el = document.createElement('li')
    el.innerHTML = "Deepl_click_1"
    el.className = '_tableRowTextEditTabs_tab_wysiwig';
    el.style.color ="green"
    el.id=`Deepl_for_free_translate_${num}`
    container.appendChild(el)
    const el2 = document.createElement('li')
    el2.innerHTML = "Deepl_click_2"
    el2.className = '_tableRowTextEditTabs_tab_wysiwig';
    el2.style.color = 'blue'
    el2.id = `Deepl_reverse_tag_${num}`;
    container.appendChild(el2)
    document.querySelector(`#Deepl_reverse_tag_${num}`).addEventListener("click",()=>{
        let text_html = document.querySelector(`#tableRowTextEditTabs_container_html_area_${num}`)
        let text = text_html.value;
        while(text.includes('|')){
            text = text.replace('|',"")
        }
        for(let _=0;_<db.length;_++){
            //zamieniam tagi na inne tagi lol xd
            let cleared = db[_].for_deepl.replace('|','')
            cleared= cleared.replace('|','')
            if(text.includes(cleared)){
                //jesli zawiera w sobie
                text = text.replace(new RegExp(`${cleared}`,'g'),`\n${db[_].original}\n`)
            }
        }
        text_html.value = text;
        document.querySelector(`#tableRowTextEditTabs_tab_preview_${num}`).childNodes[0].click()
    })
    
    document.querySelector(`#Deepl_for_free_translate_${num}`).addEventListener('click',()=>{
    
        const button_edit = document.querySelector(`#tableRowTextEditTabs_tab_html_${num}`).childNodes[0].click()//pobieram przycisk
        let text_html = document.querySelector(`#tableRowTextEditTabs_container_html_area_${num}`)
        let text= text_html.value
        let tmp_hold_text = text_html.value
        text_html.value = ''
        let ready_text = ``
        let tmp;
        let tmp2
        let splitet_text = text.split('<')
        ready_text += splitet_text[0]
             for(let _=0;_<splitet_text.length;_++){
            if(_==splitet_text.length-1){
          
                tmp = splitet_text[_].split(">")
                let test_tags = good_tags.find(e=> e == tmp2[0] ||e == `${tmp2[0].split('/')[1]}`)
                let test2_tags = tags.find(e=> e == tmp2[0] ||e == `${tmp2[0].split('/')[1]}`)
                if(test_tags ==undefined && test2_tags == undefined){
                    if(tmp[1]!=undefined){
                    ready_text += tmp[1]
                    }
                }else{
                    tmp2 = true;//true jest domyślne
                    for(let i__i=0;i__i<tags.length;i__i++){
                        if(tmp[0] == tags[i__i] || tmp[0] == `/${tags[i__i]}`){
                            //mamy tag
                            tmp2 = false;
                            ready_text+= `${tmp[1]}`//sama wartosc
                            break;
                        }
                    }
                    if(tmp2){
                        ready_text+=`<${splitet_text[_]}`
                    }
                }
             
    
            }else if(_!=splitet_text.length-1){
                tmp = splitet_text[_].split(">")
                tmp2= tmp[0].split(' ')
                let test_tags = good_tags.find(e=> e == tmp2[0] ||e == `${tmp2[0].split('/')[1]}`)
                let test2_tags = tags.find(e=> e == tmp2[0] ||e == `${tmp2[0].split('/')[1]}`)
                if(test_tags ==undefined && test2_tags == undefined){
                    if(tmp[1]!=undefined){
                    ready_text += tmp[1]

                    }
                }else if(tmp[1] != undefined){
                    for(let __ =0;__<tags.length;__++){
                        if(tmp2[0] == tags[__] || tmp2[0] == `/${tags[__]}`){
                            if(tmp[1].trim() != undefined){
                                if(tmp2[0] == "h1" || tmp2[0] == "h2"|| tmp2[0] == "h3" || tmp2[0] == "h4" || tmp2[0] == "h5"|| tmp2[0] == "h6"){
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
                            ready_text += `<${tmp2[0].trim()}>${tmp[1]}`
                         

                           }else{
                            ready_text += `<${tmp2[0]}>${tmp[1].trim()}`
                           }
                            break;
                        }
                    }
                }
            }
           
    }

    
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
    text_html.value = tmp_hold_text;
    document.querySelector(`#tableRowTextEditTabs_tab_preview_${num}`).childNodes[0].click()
    })
}

