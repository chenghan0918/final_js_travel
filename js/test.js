
//地區
var areas=[];
for(var i=0;i<data.result.records.length;i++){
    if(areas.includes(data.result.records[i].Zone)){
        continue;
    }
    areas.push(data.result.records[i].Zone);
}
var areas_list=document.querySelector('.areas_list');
var str="";
str+='<option selected disabled>- -請選擇行政區- -</option>';
str+='<option>全部行政區</option>';
for(var i=0; i<areas.length; i++){
    str+='<option>'+areas[i]+'</option>';
}
areas_list.innerHTML=str;

var tourist_attractions_list=document.querySelector('.tourist_attractions_list');
var area_title=document.querySelector('.area_title');
var start_str='';
for(var i=0;i<8;i++){
    start_str+='<li class="tourist_attraction">'+
        '<div class="pic" style="background-image: url('+data.result.records[i].Picture1+'); background-position: center; background-size:cover;">'+
        '<p class="name">'+data.result.records[i].Name+'</p>'+
        '<p class="area">'+data.result.records[i].Zone+'</p>'+'</div>'+
        '<div class="list">'+
            '<img src="https://i.imgur.com/cO579d2.png" alt="">'+
            '<h3 class="operation_time">'+data.result.records[i].Opentime+'</h3>'+
        '</div>'+
        '<div class="list">'+
            '<img src="https://i.imgur.com/Hl9bTs2.png" alt="">'+
            '<h3 class="address">'+data.result.records[i].Add+'</h3>'+
        '</div>'+
        '<div class="list">'+
            '<img src="https://i.imgur.com/VUXwnXm.png" alt="">'+
            '<h3 class="phone_number">'+data.result.records[i].Tel+'</h3>'+
        '</div>';
        if((data.result.records[i].Ticketinfo)=="免費參觀"){
            start_str+='<div class="free_tag">'+ '<img src="https://i.imgur.com/8wHLj5p.png" alt="">'+
            '<p>免費參觀</p>'+
            '</div>';
        }
    '</li>';
        area_title.innerHTML='全部行政區';
}
var page_button = document.querySelector('.page_button');
var per_page=8;
var page_number=1;
var page_nums=Math.ceil(data.result.records.length/per_page);
var str_page_button='';
str_page_button+='<a class="prev_button">< prev</a>';
for (var i=1;i<=page_nums;i++){
    str_page_button+='<a class="page">'+i+'</a>';
}
str_page_button+='<a class="next_button">next ></a>';
page_button.innerHTML=str_page_button;
var buttons=document.querySelectorAll('.page_button .page');
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',page_change);
}
buttons[page_number-1].style.color='red';
function page_change(e){
    var test="";
    var pre_page=page_number;
    page_number=e.target.innerHTML;
    buttons[page_number-1].style.color='red';
    buttons[pre_page-1].style.color='black';
    var star_item=(page_number-1)*per_page+1;
    var end_item= page_number*per_page;
    if(end_item>data.result.records.length){
        end_item=data.result.records.length;
    }
    for(var i=star_item-1;i<=end_item-1;i++){
        test+='<li class="tourist_attraction">'+
            '<div class="pic" style="background-image: url('+data.result.records[i].Picture1+'); background-position: center; background-size:cover;">'+
            '<p class="name">'+data.result.records[i].Name+'</p>'+
            '<p class="area">'+data.result.records[i].Zone+'</p>'+'</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/cO579d2.png" alt="">'+
                '<h3 class="operation_time">'+data.result.records[i].Opentime+'</h3>'+
            '</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/Hl9bTs2.png" alt="">'+
                '<h3 class="address">'+data.result.records[i].Add+'</h3>'+
            '</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/VUXwnXm.png" alt="">'+
                '<h3 class="phone_number">'+data.result.records[i].Tel+'</h3>'+
            '</div>';
            if((data.result.records[i].Ticketinfo)=="免費參觀"){
                test+='<div class="free_tag">'+ '<img src="https://i.imgur.com/8wHLj5p.png" alt="">'+
                '<p>免費參觀</p>'+
                '</div>';
            }
        +'</li>';
            area_title.innerHTML='全部行政區';
    }
    tourist_attractions_list.innerHTML=test;
}
tourist_attractions_list.innerHTML=start_str;
var next_button=document.querySelector('.next_button');
next_button.addEventListener('click', function(){
    buttons[page_number-1].style.color='black';
    page_number++;
    if(page_number>page_nums) page_number=page_nums;
    buttons[page_number-1].style.color='red';
    var test="";
    var star_item=(page_number-1)*per_page+1;
    var end_item= page_number*per_page;
    if(end_item>data.result.records.length){
        end_item=data.result.records.length;
    }
    for(var i=star_item-1;i<=end_item-1;i++){
        test+='<li class="tourist_attraction">'+
            '<div class="pic" style="background-image: url('+data.result.records[i].Picture1+'); background-position: center; background-size:cover;">'+
            '<p class="name">'+data.result.records[i].Name+'</p>'+
            '<p class="area">'+data.result.records[i].Zone+'</p>'+'</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/cO579d2.png" alt="">'+
                '<h3 class="operation_time">'+data.result.records[i].Opentime+'</h3>'+
            '</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/Hl9bTs2.png" alt="">'+
                '<h3 class="address">'+data.result.records[i].Add+'</h3>'+
            '</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/VUXwnXm.png" alt="">'+
                '<h3 class="phone_number">'+data.result.records[i].Tel+'</h3>'+
            '</div>';
            if((data.result.records[i].Ticketinfo)=="免費參觀"){
                test+='<div class="free_tag">'+ '<img src="https://i.imgur.com/8wHLj5p.png" alt="">'+
                '<p>免費參觀</p>'+
                '</div>';
            }
        '</li>';
            area_title.innerHTML='全部行政區';
    }
    tourist_attractions_list.innerHTML=test;
});
var prev_button=document.querySelector('.prev_button');
prev_button.addEventListener('click', function(){
    buttons[page_number-1].style.color='black';
    page_number--;
    if(page_number<1) page_number=1;
    buttons[page_number-1].style.color='red';
    var test="";
    var star_item=(page_number-1)*per_page+1;
    var end_item= page_number*per_page;
    if(end_item>data.result.records.length){
        end_item=data.result.records.length;
    }
    for(var i=star_item-1;i<=end_item-1;i++){
        test+='<li class="tourist_attraction">'+
            '<div class="pic" style="background-image: url('+data.result.records[i].Picture1+'); background-position: center; background-size:cover;">'+
            '<p class="name">'+data.result.records[i].Name+'</p>'+
            '<p class="area">'+data.result.records[i].Zone+'</p>'+'</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/cO579d2.png" alt="">'+
                '<h3 class="operation_time">'+data.result.records[i].Opentime+'</h3>'+
            '</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/Hl9bTs2.png" alt="">'+
                '<h3 class="address">'+data.result.records[i].Add+'</h3>'+
            '</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/VUXwnXm.png" alt="">'+
                '<h3 class="phone_number">'+data.result.records[i].Tel+'</h3>'+
            '</div>';
            if((data.result.records[i].Ticketinfo)=="免費參觀"){
                test+='<div class="free_tag">'+ '<img src="https://i.imgur.com/8wHLj5p.png" alt="">'+
                '<p>免費參觀</p>'+
                '</div>';
            }
        '</li>';
            area_title.innerHTML='全部行政區';
    }
    tourist_attractions_list.innerHTML=test;
});
areas_list.addEventListener('change', function(e){
    var arr=[];
    var str='';
    for(var i=0;i<data.result.records.length;i++){
        if(e.target.value==(data.result.records[i].Zone)){
            arr.push(i) 
        }     
    }
    var show="";
    var star_page=8;
    if(star_page>arr.length){
        star_page=arr.length;
    }
    for(var i=0;i<star_page;i++){
        show+='<li class="tourist_attraction">'+
            '<div class="pic" style="background-image: url('+data.result.records[arr[i]].Picture1+'); background-position: center; background-size:cover;">'+
            '<p class="name">'+data.result.records[arr[i]].Name+'</p>'+
            '<p class="area">'+data.result.records[arr[i]].Zone+'</p>'+'</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/cO579d2.png" alt="">'+
                '<h3 class="operation_time">'+data.result.records[arr[i]].Opentime+'</h3>'+
            '</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/Hl9bTs2.png" alt="">'+
                '<h3 class="address">'+data.result.records[arr[i]].Add+'</h3>'+
            '</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/VUXwnXm.png" alt="">'+
                '<h3 class="phone_number">'+data.result.records[arr[i]].Tel+'</h3>'+
            '</div>';
            if((data.result.records[arr[i]].Ticketinfo)=="免費參觀"){
                show+='<div class="free_tag">'+ '<img src="https://i.imgur.com/8wHLj5p.png" alt="">'+
                '<p>免費參觀</p>'+
                '</div>';
            }
        '</li>';
            area_title.innerHTML=data.result.records[arr[i]].Zone;
    }
    tourist_attractions_list.innerHTML=show;
    var page_nums=Math.ceil(arr.length/per_page);
    var str_page_button='';
    str_page_button+='<a class="prev_button2">< prev</a>';
    for (var i=1;i<=page_nums;i++){
        str_page_button+='<a class="page">'+i+'</a>';
    }
    str_page_button+='<a class="next_button2">next ></a>';
    page_button.innerHTML=str_page_button;

    var button2=document.querySelectorAll('.page')
    var page_number=1;
    button2[page_number-1].style.color='red';
    for (i=0;i<page_nums;i++){
            button2[i].addEventListener('click',function(e){
                var test="";
                var pre_page=page_number;
                page_number=e.target.innerHTML;
                button2[page_number-1].style.color='red';
                button2[pre_page-1].style.color='black';
                var star_item=(page_number-1)*per_page+1;
                var end_item= page_number*per_page;
                if(end_item>arr.length){
                    end_item=arr.length;
                }
                for(var i=star_item-1;i<=end_item-1;i++){
                    test+='<li class="tourist_attraction">'+
                        '<div class="pic" style="background-image: url('+data.result.records[arr[i]].Picture1+'); background-position: center; background-size:cover;">'+
                        '<p class="name">'+data.result.records[arr[i]].Name+'</p>'+
                        '<p class="area">'+data.result.records[arr[i]].Zone+'</p>'+'</div>'+
                        '<div class="list">'+
                            '<img src="https://i.imgur.com/cO579d2.png" alt="">'+
                            '<h3 class="operation_time">'+data.result.records[arr[i]].Opentime+'</h3>'+
                        '</div>'+
                        '<div class="list">'+
                            '<img src="https://i.imgur.com/Hl9bTs2.png" alt="">'+
                            '<h3 class="address">'+data.result.records[arr[i]].Add+'</h3>'+
                        '</div>'+
                        '<div class="list">'+
                            '<img src="https://i.imgur.com/VUXwnXm.png" alt="">'+
                            '<h3 class="phone_number">'+data.result.records[arr[i]].Tel+'</h3>'+
                        '</div>';
                        if((data.result.records[arr[i]].Ticketinfo)=="免費參觀"){
                            test+='<div class="free_tag">'+ '<img src="https://i.imgur.com/8wHLj5p.png" alt="">'+
                            '<p>免費參觀</p>'+
                            '</div>';
                        }
                    +'</li>';
                        area_title.innerHTML=data.result.records[arr[i]].Zone;
                }
                tourist_attractions_list.innerHTML=test;
var next_button2=document.querySelector('.next_button2');
next_button2.addEventListener('click', function(){
    button2[page_number-1].style.color='black';
    page_number++;
    if(page_number>page_nums) page_number=page_nums;
    button2[page_number-1].style.color='red';
    var test="";
    var star_item=(page_number-1)*per_page+1;
    var end_item= page_number*per_page;
    if(end_item>arr.length){
        end_item=arr.length;
    }
    for(var i=star_item-1;i<=end_item-1;i++){
        test+='<li class="tourist_attraction">'+
            '<div class="pic" style="background-image: url('+data.result.records[arr[i]].Picture1+'); background-position: center; background-size:cover;">'+
            '<p class="name">'+data.result.records[arr[i]].Name+'</p>'+
            '<p class="area">'+data.result.records[arr[i]].Zone+'</p>'+'</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/cO579d2.png" alt="">'+
                '<h3 class="operation_time">'+data.result.records[arr[i]].Opentime+'</h3>'+
            '</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/Hl9bTs2.png" alt="">'+
                '<h3 class="address">'+data.result.records[arr[i]].Add+'</h3>'+
            '</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/VUXwnXm.png" alt="">'+
                '<h3 class="phone_number">'+data.result.records[arr[i]].Tel+'</h3>'+
            '</div>';
            if((data.result.records[arr[i]].Ticketinfo)=="免費參觀"){
                test+='<div class="free_tag">'+ '<img src="https://i.imgur.com/8wHLj5p.png" alt="">'+
                '<p>免費參觀</p>'+
                '</div>';
            }
        '</li>';
            area_title.innerHTML=data.result.records[arr[i]].Zone;
    }
    tourist_attractions_list.innerHTML=test;
});
    });
    }
    var prev_button2=document.querySelector('.prev_button2');
    prev_button2.addEventListener('click', function(){
    button2[page_number-1].style.color='black';
    page_number--;
    if(page_number<1) page_number=1;
    button2[page_number-1].style.color='red';
    var test="";
    var star_item=(page_number-1)*per_page+1;
    var end_item= page_number*per_page;
    if(end_item>arr.length){
        end_item=arr.length;
    }
    for(var i=star_item-1;i<=end_item-1;i++){
        test+='<li class="tourist_attraction">'+
            '<div class="pic" style="background-image: url('+data.result.records[arr[i]].Picture1+'); background-position: center; background-size:cover;">'+
            '<p class="name">'+data.result.records[arr[i]].Name+'</p>'+
            '<p class="area">'+data.result.records[arr[i]].Zone+'</p>'+'</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/cO579d2.png" alt="">'+
                '<h3 class="operation_time">'+data.result.records[arr[i]].Opentime+'</h3>'+
            '</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/Hl9bTs2.png" alt="">'+
                '<h3 class="address">'+data.result.records[arr[i]].Add+'</h3>'+
            '</div>'+
            '<div class="list">'+
                '<img src="https://i.imgur.com/VUXwnXm.png" alt="">'+
                '<h3 class="phone_number">'+data.result.records[arr[i]].Tel+'</h3>'+
            '</div>';
            if((data.result.records[arr[i]].Ticketinfo)=="免費參觀"){
                test+='<div class="free_tag">'+ '<img src="https://i.imgur.com/8wHLj5p.png" alt="">'+
                '<p>免費參觀</p>'+
                '</div>';
            }
        '</li>';
            area_title.innerHTML=data.result.records[arr[i]].Zone;
    }
    tourist_attractions_list.innerHTML=test;
    });
    var next_button2=document.querySelector('.next_button2');
    next_button2.addEventListener('click', function(){
        button2[page_number-1].style.color='black';
        page_number++;
        if(page_number>page_nums) page_number=page_nums;
        button2[page_number-1].style.color='red';
        var test="";
        var star_item=(page_number-1)*per_page+1;
        var end_item= page_number*per_page;
        if(end_item>arr.ength){
            end_item=arr.length;
        }
        for(var i=star_item-1;i<=end_item-1;i++){
            test+='<li class="tourist_attraction">'+
                '<div class="pic" style="background-image: url('+data.result.records[arr[i]].Picture1+'); background-position: center; background-size:cover;">'+
                '<p class="name">'+data.result.records[arr[i]].Name+'</p>'+
                '<p class="area">'+data.result.records[arr[i]].Zone+'</p>'+'</div>'+
                '<div class="list">'+
                    '<img src="https://i.imgur.com/cO579d2.png" alt="">'+
                    '<h3 class="operation_time">'+data.result.records[arr[i]].Opentime+'</h3>'+
                '</div>'+
                '<div class="list">'+
                    '<img src="https://i.imgur.com/Hl9bTs2.png" alt="">'+
                    '<h3 class="address">'+data.result.records[arr[i]].Add+'</h3>'+
                '</div>'+
                '<div class="list">'+
                    '<img src="https://i.imgur.com/VUXwnXm.png" alt="">'+
                    '<h3 class="phone_number">'+data.result.records[arr[i]].Tel+'</h3>'+
                '</div>';
                if((data.result.records[arr[i]].Ticketinfo)=="免費參觀"){
                    test+='<div class="free_tag">'+ '<img src="https://i.imgur.com/8wHLj5p.png" alt="">'+
                    '<p>免費參觀</p>'+
                    '</div>';
                }
            '</li>';
                area_title.innerHTML='全部行政區';
        }
        tourist_attractions_list.innerHTML=test;
    });
});
