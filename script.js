var user = [  {    
    name: 'Panda Vasya',
    url: 'https://cutt.ly/Hn90ez7',
    description: 'Несмотря на то, что панды относятся к отряду хищных, фактически они питаются почти исключительно (более чем на 99 %) бамбуком (любым из 25 видов, присутствующих в дикой среде обитания). В день взрослая панда съедает до 30 кг бамбука и побегов.'  
},
  {    
    name: 'Panda Petya',
    url: 'https://mobimg.b-cdn.net/v3/fetch/08/085760703ac6ad2614a0b40c193be854.jpeg',
    description: 'Несмотря на то, что панды относятся к отряду хищных, Для защиты от бамбуковых щепок пищевод и желудок выстланы толстым слоем упругой слизистой ткани. Если в каком-либо месте после цветения погибает весь бамбук, то живущим там пандам грозит смерть от голода'  
},
  {    
    name: 'Panda Fedya',
    url: 'https://mobimg.b-cdn.net/v3/fetch/a4/a4be90934927aa13462ea50d6c1a4013.jpeg',
    description: 'Несмотря на то, что панды относятся к отряду хищных, (подобные случаи отмечались в 1975 и 1983 годах). По мнению некоторых учёных, гиперзависимость медведей от бамбука могла развиться относительно недавно — около 5000 лет назад[11]. Изредка включают в свой рацион растения других видов. Кроме того, как и все медвежьи, панды всеядны: при доступности едят яйца, мелких птиц, зверьков, рыбу и некоторых насекомых, иногда — падаль' 
 }]

 function creatH2(name){
    var h2 = document.createElement('h2');
    h2.textContent = name;
    return h2
 }

 function creatImg(url){
    var img = document.createElement('img');
    img.classList.add('img');
    img.src = url;
    return img
 }

 function creatP(description){
    var p = document.createElement('p');
    p.textContent = description;
    return p
 }

function createElem (arr){
        var  body = document.body;
        var container = document.createElement('div') ;
        container.classList.add('container');
        body.prepend(container);
        for (var i = 0; i<arr.length; i++ ){
                var div = document.createElement('div') ;
                div.classList.add('blok-panda');
                if (arr[i].hasOwnProperty('name')){             
                    div.append(creatH2(arr[i].name));
                }; 
                if (arr[i].hasOwnProperty('url')){
                    div.append(creatImg(arr[i].url));
                }; 
                if (arr[i].hasOwnProperty('description')){
                    div.append(creatP(arr[i].description));
                }; 
                container.append(div);
        }
}
createElem(user);