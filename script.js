//делаем абстрактную сущность worker
const worker = {
    name:"",//имя
    surname : "",//фамилия
    rate :"",//ставка за день работы
    days:"",//количество отработанных дней
    jobTitle:"",//должность 
    allowanceСoefficient:"",//повышающий коэффициент к зарплате
    getSalary: () => {
                return worker.rate*worker.days //получаем зарплату
            }
}

//salesman, consultant, administrator наследуют worker
salesman(worker) {
    salesAmount:"", //обьем продаж 
    getPremium: () => {
        return salesman.salesAmount*worker.allowanceСoefficient //получаем премию (обьем продаж умножаем на повышающий коэффициент)
    }
}

consultant(worker) {
    rank:"", //ранг консультанта
    getSalary: () => {
        if(worker.jobTitle == "consultant" ) //переопределяем метод, изменяем расчет зарплаты для должности консультанта (зарплату увеличиваем на коэффициент). 
        return worker.rate*worker.days*worker.allowanceСoefficient
    }
}

administrator (worker){
    numberEmployees:"",//количество подчененных
    getSalary: () => { //переопределяем метод для administrator, для него метод возвращает массив всех зарплат сотрудников
        if(worker.jobTitle == "administrator" )
        return []
    }
}