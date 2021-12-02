$('body').append(`<style scoped>
                    #msgBox pre{
                        border:4px solid red;
                        padding:10px;
                        background-color: #d8c6c6;
                        position:relative;
                        border-radius: 10px;
                       display: inline-block;
                    }
                    
                    #msgBox pre b.title{
                        position: absolute;
                        left:20px;
                        top:-10px;
                        animation: error 5s 3;
                        background-color:#d8c6c6;
                        border:1px solid red;
                        
                    }
                    .step b.title{
                        position: absolute;
                        left:20px;
                        top:-10px;
                        animation: question 5s 1;
                        background-color:#28bcff;
                        border:1px solid rgba(36, 255, 163, 0.11);
                        border-radius: 10px;
                        padding:2px 5px;
                        
                    }
                    @keyframes eror {
                        0%   {left: 20px;}
                        25%  {left:50px;}
                        75%  {left: 100px;font-size:22pt}
                        100% {left: 20px;}
                    }
                    
                     @keyframes question {
                        0%   {left: 20px;}
                        25%  {left:250px;}
                        75%  {left: 500px;}
                        100% {left: 20px;}
                    }
                    .error{
                       color:red;
                    }
                    .step{
                        border:4px solid #28bcff;
                        padding:20px;
                        background-color: rgba(36, 255, 163, 0.11);
                        position:relative;
                        margin-top:10px;
                       width:95%;
                       margin: 10px auto;

                    }
                   div#wrapper section#panel1 span,
                   div#wrapper section#panel2 span{
                        
                        border:2px dodgerblue dotted;
                        display:block;
                        background-color: #4d90fe;
                        color:#fff;
                        text-align: center;
                        font-weight: bold;
                        margin: 5px;;
                    }
                    .buffer{
                        padding-left:20px;
                        background-color:#ccff00;
                    }
                    #wrapper
                    {
                        width:95%;
                        margin: 0 auto;
                        border:1px solid #4d90fe;
                        background-color:#4d90fe;
                        font-family:'courier new';
                        font-size:10pt;
                    }
                    #panel1{
            
                    }
                    #panel1 #msgBox{
                        border:1px solid #fff;
                       /* height: 400px;*/
                        margin:5px;
                        overflow: auto;
                        background-color:white;
                    }
                    #panel2{

                    }
                    
                    #status{
                      cursor:pointer;
                    }
                    #panel2 div{
                        border:1px solid #fff;
                        margin:5px;
                        height:300px;
                        overflow: auto;
                        background-color:#7b7979;
                        color:white;
                    }
                    #result123{
                       display:inline-block;
                       position:fixed;
                       right:20px;
                       bottom:0px;
                       width:200px;
                       height:200px;
                       background-color:white;
                       border:4px solid #357ae8;
                       z-index:1000;
                       font-size:8pt;
                    }
                    
                    li.child{
                        list-style-type: none;
                    }
                    .testConsole{
                        background-color:red;
                    }
                        </style>
                       <div id="wrapper">
                           <section id="panel1">
                               <span>Console</span>
                               <div id=result123></div>
                               <div id="msgBox"></div>
                           </section>
                           <section id="panel2">
                               <span>Assignment Description <b id=status>[Hide]</b></span>
                               <div id="buffer"></div>
                           </section>   
                                                          
                        </div>
                        `);



const SCRIPT_NAME = STUDENT_ID + '-functions.js'
//////////////////////

var Util = function(){
    this.student_id = STUDENT_ID;
    this.questionBID = '';
    this.funcListAvoid = [
        'endsWith',
        'includes',
        'indexOf',
        'lastIndexOf',
        'localeCompare',
        'match',
        'repeat',
        'replace',
        'search',
        'slice',
        'split',
        'startsWith',
        'substr',
        'substring',
        'toLocaleLowerCase',
        'toLocaleUpperCase',
        'toLowerCase',
        'toString',
        'toUpperCase',
        'trim',
        'valueOf',
        'trimLeft and trimRight',
        'concat',
        'copyWithin',
        'every',
        'fill',
        'filter',
        'find',
        'findIndex',
        'forEach',
        'indexOf',
        'isArray',
        'join',
        'lastIndexOf',
        'map',
        'pop',
        'push',
        'reduce',
        'reduceRight',
        'reverse',
        'shift',
        'slice',
        'some',
        'sort',
        'splice',
        'toString',
        'unshift',
        'valueOf',
        'Set',
        'maziar',

    ]
    this.run = function(){
        this.isValidStudentID();
        this.assignQuestionBlock();
    }
    this.isValidStudentID = function()
    {
        if(isNaN(this.student_id) || this.student_id.match(/\d/g).length!== 9)
            throw new Error('Invalid Student ID: (' + this.student_id+ ')');

    }
    this.assignQuestionBlock = function(){

        this.student_id = this.student_id.match(/\d/g);
        this.student_id = this.student_id.join('');
        var id = (this.student_id/100).toFixed(2).split('.')[1];
        if(id < 51)  {this.questionBID = '00'; }
        else if(id < 100) this.questionBID = '11';
    }
    this.console = function title(str,obj)
    {
        obj = (typeof obj === "undefined") ? '#msgBox' : obj;
        if($(obj).length)
            $(obj).html(str)
        else
            throw new Error("Cannot find the place holder " + obj + ' in this page');
    }
    this.append = function title(str,obj)
    {
        obj = (typeof obj === "undefined") ? '#msgBox' : obj;
        if($(obj).length)
            $(obj).append(str)
        else
            throw new Error("Cannot find the place holder " + obj + ' in this page');
    }

    this.startQuestion = function(step)
    {
        return '<div class="step"><b class="title">'+ step + '</b>';
    }
    this.endQuestion = function(str)
    {
        return str + '<div>';
    }

    this.functionExists = function (name)
    {
        //console.log(name + '  ' + (typeof window[myFunctions[name]]=== 'function'))
        return (typeof window[myFunctions[name]]=== 'function');
    }

    this.error = function(err)
    {
        return '<b class=error>' + err + '</b>';
    }

    this.arrayToStrin = function(arr)
    {
        var str = '';
        for(var i in arr)
            str += arr[i];
        return str;
    }

}

$('#status').click(function(){
    var link = $(this);
    $('#buffer').toggle('1000',function(){
        if ($(this).is(':visible')) {
            link.text('Hide');
        } else {
            link.text('Show');
        }
    });
});


try{
    if(STUDENT_ID == '000000000') {
        alert('Please update student id variable');
        throw new Error("Please enter add your student ID");
    }
    var due_date = new Date("April 9, 2021 23:59:00");
    var u = new Util();
    u.run();
    var _version = (u.questionBID == '11' ? '51 to 99' : '00 to 50')
    $('#result123').append('Script name:' + SCRIPT_NAME).append('<br>Student Id:' + u.student_id).append('<br>Version:' + _version)
    document.write("<script src='" + SCRIPT_NAME +"' onerror=\"console.error('Error Cannot load ' + '"+ SCRIPT_NAME +"' + '.js')\"></script>");
    document.write("<script src='https://comp1231.gblearn.com/common/.w2021/" +  u.questionBID + '.js'  + "' onerror=\"console.error('Error Cannot load ' + u.questionBID + '.js')\"></script>");
    //document.write("<script src='" +  u.questionBID + '.js'  + "' onerror=\"console.error('Error Cannot load ' + u.questionBID + '.js')\"></script>");
    var temp = '';//'<b>' + STUDENT_ID[0] + STUDENT_ID[0] + STUDENT_ID[0] + STUDENT_ID[0] + STUDENT_ID[0] + STUDENT_ID[0] + STUDENT_ID[0]  +  '<u style="font-size:22pt">' + STUDENT_ID[0] + STUDENT_ID[0] + '</u></b>';
    u.console('COMP1231 final project automated testing. Due date: ' + due_date +  temp + '<hr>' )
    var questions = '';
    window.onload = function() {
        for (i in steps.questions) {
            questions += 'Step ' + (parseInt(i)+1) + '  ' + steps.questions[i] + '<br>';
        }
        $('#buffer').html(questions);

        var nFunctions = 0;
        for(var x = 1; x <= 10;x++)
        {
            if(u.functionExists('step' + x))

                nFunctions++;
        }
        $('#result123').append('<br># functions implemented: ' + nFunctions).append('<br>Initial mark: ' + txb100)
        $('#result123').append('<hr>Mark value in this box is not guaranteed')
    };

    var str = '';
    $.getScript(SCRIPT_NAME, function(data){
        console.log("Checking for usage of JavaScript built-in functions")
        var string = data;
        astring = string.split('\n');

        astring.forEach(logArrayElements);
        if(str)
            u.append( '<pre><b class="title">Usage of JavaScript built-in functions</b>' + u.error(str)+ '</pre>')


    }).fail(function(jqxhr, settings, exception){
        
        //console.error('Cannot load ' + SCRIPT_NAME);
       // console.error(jqxhr);
       // console.error(settings);
       // console.error(exception);
    });


    function logArrayElements(element, index, array) {

        for(var i in u.funcListAvoid)
        {
            var match1 = new RegExp("\\." + u.funcListAvoid[i]+ "\\(","g");
            if (match1.exec(element))
                str += 'Line: ' + (index+1) + '  ' + element + '<br>';
            var match2 = new RegExp("\\" + u.funcListAvoid[i]+ "\\(","g");
            //match = "/" + u.funcListAvoid[i] + '\(' + "/"
            if (match2.exec(element))
                str += 'Line: ' + (index+1) + '  ' + element + '<br>';
        }
    }

}catch(e)
{
    u.console( '<pre><b class="title">Error</b>' + e.stack + '</pre>')
}

