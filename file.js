var clicked = 0;

var localList = [];

function onClickTitle(){
    if(clicked == 0){
        clicked = 1;
        var title = document.getElementById('titleInput');
        title.setAttribute('placeholder','Title')
        var otherPart = document.getElementById('otherPart');
        otherPart.style.display = "block";
    }
    else if(clicked == -1)
    {
        clicked = 0;
    }
}

function onHide(){
    var title = document.getElementById('titleInput');
    title.setAttribute('placeholder','Take a note...')
    var otherPart = document.getElementById('otherPart');
    otherPart.style.display = 'none';
    clicked = -1;
}

function onSave(){
    var titleobj = document.getElementById('titleInput');
    var textobj = document.getElementById('textInput');
    var checklists = document.getElementById('check_lists');
    var title = titleobj.value;
    var text = textobj.value;
    if(!(title == ''  && text=='')){

        titleobj.value = "";
        textobj.value = "";
        var image = "";

        if(checklists!=null)
            for(var i=0;i<checklists.children.length;i++){
                checklists.children[i].type = 'text';  
                checklists.children[i].disabled = true;
            }
        else{
            checklists = null
        }

        localList.push( {
            'text':text,
            'title':title,
            "image":image,
            'list':checklists
        } );
    }

    onHide();   
    loadButtons();
    loadItmes("");

}


function loadButtons(){
    var textobj = document.getElementById('textInput');
    textobj.style.display = 'block';
    var checkList = document.getElementsByClassName('check_list')[0];
    checkList.style.display = 'none';
    document.getElementById('btnCheck').style.display = 'inline-block';
}

function getTemplate(title="",text="",checklist){
    var main_div = document.createElement('div');
    var sub1_div = document.createElement('div');
    var sub2_div = document.createElement('div');
    main_div.className = 'col s12 m4 l4';
    sub1_div.className = 'card small blue-grey darken-1';
    sub2_div.className = 'card-content white-text';

    var span = document.createElement('span');
    span.className = 'card-title';
    span.innerText = title;

    var p = document.createElement('p');
    p.innerText = text;
    sub2_div.appendChild(span);
    if( checklist !=null &&  checklist.children.length>0)
    {
        sub2_div.appendChild(checklist);
    }
    else{
        sub2_div.appendChild(p);
    }

    
    sub1_div.appendChild(sub2_div);

    main_div.appendChild(sub1_div);
    return main_div;
}
