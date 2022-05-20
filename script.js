var body = document.body;

//Задача 1
var elem_class_zzz = body.querySelectorAll('.zzz');
elem_class_zzz.forEach(function (elem, i) {
    elem.textContent = i+1;
});

//Задача 2
var elem_www = body.children;
elem_www = Array.prototype.slice.call(elem_www);
elem_www.forEach(function (elem) {
        if (elem.textContent.match('www') != null) {
            elem.style.cssText = 'color: #4c41e1'
        }
    });

//Задача 3
var elem_class_zzz = body.querySelectorAll('.zzz');
var h2 = document.createElement('h2');
h2.textContent = "Новый список";
body.append(h2);
var ul = document.createElement('ul');
elem_class_zzz.forEach(function (elem) {
    var li = document.createElement('li');
    li.textContent = elem.textContent;
    ul.append(li)
});
body.append(ul);
