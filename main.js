document.addEventListener('DOMContentLoaded', function(){

    
    function renderTable(data, templates){
        let table = document.querySelector(`.${templates.temp}`);
            
            
        data.aliases.forEach(element => {
        let header = document.createElement('div');
            header.classList.add('row', 'table-header');
            header.innerHTML = `<div class="col-12"><h3>${element.alias}</h3></div>`
            table.appendChild(header);
            element.content.forEach(el => {
            let text = document.createElement('div');
                text.classList.add('row', 'table-text');
                text.innerHTML = `<div class="col-12"><span>${el.alias}</span></div>`
                table.appendChild(text);
            });
        });
        console.log(data, data.aliases);
    }
    $.ajax({
        url: 'data.json',
        dataType: 'json',
        success: function(data){
            renderTable(data, {temp: 'table-template', value: 'table-value'});
        }
    });
});